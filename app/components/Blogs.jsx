import { BlogPost } from "../../components/BlogPosts"


export default function Blogs(){
    return (
    <BlogPost
        title="Our Most Popular Articles of 2024!"
        description="Discover the most engaging content from our amazing community of developers and designers"
        backgroundLabel="BLOG"
        backgroundPosition="left"
        posts={[
        {
          id: 1,
          title: "Building Modern Web Applications with React",
          category: "Web Development",
          imageUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1606610166355/JW-defpGk.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
          views: 2180,
          readTime: 8,
          rating: 5
        },
        {
          id: 2,
          title: "Advanced TypeScript Patterns",
          category: "Programming",
          imageUrl: "https://b3496788.smushcdn.com/3496788/wp-content/uploads/2023/09/Why-Typescript-Blog-Header-Image.jpg?lossy=0&strip=1&webp=1",
          views: 1456,
          readTime: 12,
          rating: 4
        },
        {
          id: 3,
          title: "Design System Best Practices",
          category: "UI/UX Design",
          imageUrl: "https://designsystems.international/static/993656f22f7ded64cbf68ca8c5a40554/2d41a/unit-backgrounds.jpg",
          views: 987,
          readTime: 6,
          rating: 4
        }
      ]}
        className="mb-16"
      />
  )
}