# Backend Project Specification

This document maps your current Next.js frontend to a complete backend you can build and deploy. It defines the APIs, data models, storage, and infra you need. It also includes an OpenAPI spec to speed up implementation.

## Summary

- Stack (recommended):
  - API framework: NestJS (Node 20+) or Express.js
  - ORM: Prisma
  - DB: PostgreSQL (managed or Docker)
  - Storage: S3-compatible (AWS S3, Cloudflare R2, MinIO) for images/resumes
  - Email: Resend or SendGrid
  - Auth: JWT (admin CMS) + basic API key for public POSTs (rate‑limited)
  - Alternative: Keep everything inside Next.js route handlers if you prefer a single repo.

- Deliverables in this spec:
  - Resources and endpoints (public + admin)
  - Request/response contracts
  - Data models (Prisma schema excerpt)
  - Env vars & deployment notes
  - Frontend → API mapping

---

## Frontend → API mapping

| Frontend area | File(s) | Backend resource(s) | Needed endpoints |
| --- | --- | --- | --- |
| Blog list/grid | `app/components/BlogSection.jsx`, `app/blog/page.js` | Posts, Categories | GET /api/v1/posts, GET /api/v1/posts/{slug}, GET /api/v1/categories |
| Blog details | `app/blog/[slug]/page.js` (placeholder) | Posts | GET /api/v1/posts/{slug} |
| Work/Projects | `app/work/page.js` | Projects | GET /api/v1/projects |
| Contact (home) | `app/components/ContactUs.jsx` | Contact messages | POST /api/v1/contact |
| Contact page | `app/contact/page.js` | Contact messages | POST /api/v1/contact |
| FAQs | `app/components/FaqSection.jsx` (static now) | FAQs | GET /api/v1/faqs |
| Testimonials | `app/components/Testimonials.jsx` (static now) | Testimonials | GET /api/v1/testimonials |
| Careers | `app/careers/page.js` (placeholder) | Jobs, Applications | GET /api/v1/jobs, POST /api/v1/applications |
| Investors | `app/investors/page.js` (placeholder) | Investor inquiries (optional) | POST /api/v1/investors/contact (optional) |
| Newsletter (optional) | — | Subscribers | POST /api/v1/subscribe |

---

## API design

Base URL: `/api/v1`

### Public content (GET)

- GET `/posts`
  - Query: `page` (default 1), `pageSize` (default 9), `category`, `search`
  - Response: `{ items: Post[], page, pageSize, total }`
- GET `/posts/{slug}` → `Post`
- GET `/categories` → `Category[]`
- GET `/projects` → `Project[]` (support `page`, `pageSize`)
- GET `/faqs` → `Faq[]`
- GET `/testimonials` → `Testimonial[]`
- GET `/jobs` → `JobPosting[]`

### Public forms (POST)

- POST `/contact`
  - Body: `{ name, email, message, services?: string[], project?: string }`
  - Side‑effects: store in DB, send email to team, optional auto‑reply
  - Response: `{ ok: true, id }`
- POST `/applications`
  - FormData: `name`, `email`, `jobId`, `message?`, `resume` (file)
  - Side‑effects: file to S3; record in DB; email notification
  - Response: `{ ok: true, id }`
- POST `/subscribe`
  - Body: `{ email }`
  - Side‑effects: DB row and/or forward to Mailchimp/Resend Audiences
  - Response: `{ ok: true }`
- (Optional) POST `/investors/contact`
  - Body: `{ name, email, company?, message }`
  - Response: `{ ok: true, id }`

### Admin (secure)

Namespace admin under `/api/v1/admin` with JWT auth.

CRUD for:
- Posts: `POST/PUT/PATCH/DELETE /admin/posts`
- Projects: `/admin/projects`
- FAQs: `/admin/faqs`
- Testimonials: `/admin/testimonials`
- Jobs: `/admin/jobs`
- Media upload: `POST /admin/media` (direct S3 signed URLs)
- Users (admins): `/admin/users`

Auth:
- POST `/auth/login` → `{ accessToken, refreshToken }`
- POST `/auth/refresh`

### Errors & pagination

- Errors: `{ error: { code, message, details? } }` with appropriate HTTP status
- Pagination: `page`, `pageSize` query params; response `{ items, page, pageSize, total }`

---

## Data models (Prisma excerpt)

See `docs/prisma-schema.prisma` for a full schema. Key entities below:

```prisma
model User {
  id        String  @id @default(cuid())
  email     String  @unique
  password  String
  name      String?
  role      Role    @default(ADMIN)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role { ADMIN EDITOR }

model Category {
  id    String @id @default(cuid())
  slug  String @unique
  name  String @unique
  posts Post[]
}

model Post {
  id          String    @id @default(cuid())
  slug        String    @unique
  title       String
  excerpt     String?
  content     String    // markdown or HTML
  coverUrl    String?
  readTimeMin Int       @default(3)
  published   Boolean   @default(false)
  publishedAt DateTime?
  categories  Category[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Project {
  id        String   @id @default(cuid())
  title     String
  tag       String?
  summary   String?
  imageUrl  String?
  createdAt DateTime @default(now())
}

model Faq {
  id        String  @id @default(cuid())
  question  String
  answer    String
  order     Int     @default(0)
}

model Testimonial {
  id       String  @id @default(cuid())
  name     String
  role     String?
  avatar   String?
  text     String
}

model JobPosting {
  id          String   @id @default(cuid())
  title       String
  department  String?
  location    String?
  type        String?   // Full-time, Contract, etc.
  description String
  isOpen      Boolean   @default(true)
  createdAt   DateTime  @default(now())
}

model JobApplication {
  id        String  @id @default(cuid())
  jobId     String
  job       JobPosting @relation(fields: [jobId], references: [id], onDelete: Cascade)
  name      String
  email     String
  message   String?
  resumeUrl String
  createdAt DateTime @default(now())
}

model ContactMessage {
  id        String  @id @default(cuid())
  name      String
  email     String
  services  String[]
  project   String?
  message   String?
  createdAt DateTime @default(now())
}

model Subscriber {
  id        String  @id @default(cuid())
  email     String  @unique
  createdAt DateTime @default(now())
}
```

---

## Request/response examples

- GET `/api/v1/posts?page=1&pageSize=9`
```json
{
  "items": [
    {
      "id": "post_123",
      "slug": "why-webflow",
      "title": "Why Webflow is Our Go-To Platform",
      "excerpt": "Webflow speeds up…",
      "coverUrl": "https://cdn…/cover.webp",
      "readTimeMin": 4,
      "publishedAt": "2025-01-12T10:00:00.000Z",
      "categories": [{ "slug": "website", "name": "Website" }]
    }
  ],
  "page": 1,
  "pageSize": 9,
  "total": 37
}
```

- POST `/api/v1/contact`
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "project": "Marketing site revamp",
  "services": ["Website", "Brand Identity"],
  "message": "We need a fast site with a blog."
}
```
Response
```json
{ "ok": true, "id": "cm_abc123" }
```

- POST `/api/v1/applications` (multipart/form-data)
  - Fields: name, email, jobId, message?, resume (file)
  - Response: `{ ok: true, id: "app_123" }`

---

## Implementation notes

- Use signed URLs for uploads (resume, images) to avoid proxying large files through the API.
- Rate-limit POST endpoints:
  - `/contact`, `/applications`, `/subscribe`: 10/min/IP
- Email notifications on contact/applications.
- CORS: allow only your frontend origin in production.
- Admin auth with short-lived access tokens and refresh tokens; store password hashes with Argon2.

---

## Env vars

```
# Server
PORT=8080
NODE_ENV=production
API_BASE_URL=https://api.example.com

# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname?schema=public

# Auth
JWT_SECRET=replace_me
JWT_EXPIRES_IN=15m
JWT_REFRESH_SECRET=replace_me_too
JWT_REFRESH_EXPIRES_IN=7d

# Email
EMAIL_PROVIDER=resend
RESEND_API_KEY=...
EMAIL_FROM=Studio <hello@example.com>

# Storage
S3_ENDPOINT=https://s3.amazonaws.com
S3_REGION=us-east-1
S3_ACCESS_KEY_ID=...
S3_SECRET_ACCESS_KEY=...
S3_BUCKET=studio-assets
```

---

## Deployment (Docker compose)

```yaml
version: "3.8"
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: app
    ports: ["5432:5432"]
    volumes:
      - pgdata:/var/lib/postgresql/data
  api:
    build: .
    environment:
      DATABASE_URL: postgresql://app:app@db:5432/app
      JWT_SECRET: change
      RESEND_API_KEY: change
    ports: ["8080:8080"]
    depends_on: [db]
volumes:
  pgdata: {}
```

---

## Alternative: Next.js Route Handlers

If you prefer a single repo, you can implement the same endpoints under `app/api/*/route.ts` and reuse Prisma. The OpenAPI and schemas remain valid.

---

## What to build first (MVP order)

1) Contact endpoint + email notifications
2) Posts (list + by slug) to power the blog
3) Projects list
4) Careers (jobs list + applications with resume uploads)
5) FAQs & Testimonials as simple GETs
6) Admin CRUD (as needed) or connect a headless CMS later

---

For endpoint shapes, see `docs/openapi.yaml`. For data model details, see `docs/prisma-schema.prisma`.
