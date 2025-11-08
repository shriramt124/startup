"use client";

import React, { useEffect, useState } from "react";

function Section({ title, children }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default function AdminPage() {
  const [tab, setTab] = useState("posts");

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-6">Admin Dashboard</h1>
        <p className="text-sm text-gray-600 mb-6">No auth yet. This is a lightweight admin to seed data. Secure with auth later.</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {["posts", "projects", "faqs"].map((t) => (
            <button
              key={t}
              className={`px-3 py-2 rounded-md text-sm font-semibold border ${
                tab === t ? "bg-black text-white border-black" : "bg-white text-black border-gray-300"
              }`}
              onClick={() => setTab(t)}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {tab === "posts" && <PostsAdmin />}
        {tab === "projects" && <ProjectsAdmin />}
        {tab === "faqs" && <FaqsAdmin />}
      </div>
    </main>
  );
}

function PostsAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", slug: "", content: "", coverUrl: "", categories: "" });
  const load = async () => {
    const res = await fetch("/api/v1/posts");
    const data = await res.json();
    setItems(data.items || []);
  };
  useEffect(() => { load(); }, []);

  const create = async (e) => {
    e.preventDefault();
    const body = {
      ...form,
      categories: form.categories.split(",").map((s) => s.trim()).filter(Boolean),
      excerpt: form.content.slice(0, 160),
      published: true,
      publishedAt: new Date().toISOString(),
      readTimeMin: Math.max(3, Math.round(form.content.length / 800)),
    };
    await fetch("/api/v1/posts", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    setForm({ title: "", slug: "", content: "", coverUrl: "", categories: "" });
    load();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Section title="Create Post">
        <form onSubmit={create} className="space-y-3">
          <input className="w-full border rounded-md px-3 py-2" placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Slug" value={form.slug} onChange={(e)=>setForm({...form,slug:e.target.value})}/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Cover URL" value={form.coverUrl} onChange={(e)=>setForm({...form,coverUrl:e.target.value})}/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Categories (comma-separated)" value={form.categories} onChange={(e)=>setForm({...form,categories:e.target.value})}/>
          <textarea className="w-full border rounded-md px-3 py-2 h-40" placeholder="Content (markdown or HTML)" value={form.content} onChange={(e)=>setForm({...form,content:e.target.value})}></textarea>
          <button className="px-4 py-2 rounded-md bg-black text-white font-semibold">Create</button>
        </form>
      </Section>
      <Section title="Posts">
        <ul className="divide-y">
          {items.map((p)=> (
            <li key={p._id} className="py-3">
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-gray-500">/{p.slug}</div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function ProjectsAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ title: "", tag: "", summary: "", imageUrl: "" });
  const load = async () => {
    const res = await fetch("/api/v1/projects");
    const data = await res.json();
    setItems(data.items || []);
  };
  useEffect(() => { load(); }, []);

  const create = async (e) => {
    e.preventDefault();
    await fetch("/api/v1/projects", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
    setForm({ title: "", tag: "", summary: "", imageUrl: "" });
    load();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Section title="Create Project">
        <form onSubmit={create} className="space-y-3">
          <input className="w-full border rounded-md px-3 py-2" placeholder="Title" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Tag" value={form.tag} onChange={(e)=>setForm({...form,tag:e.target.value})}/>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Image URL" value={form.imageUrl} onChange={(e)=>setForm({...form,imageUrl:e.target.value})}/>
          <textarea className="w-full border rounded-md px-3 py-2 h-40" placeholder="Summary" value={form.summary} onChange={(e)=>setForm({...form,summary:e.target.value})}></textarea>
          <button className="px-4 py-2 rounded-md bg-black text-white font-semibold">Create</button>
        </form>
      </Section>
      <Section title="Projects">
        <ul className="divide-y">
          {items.map((p)=> (
            <li key={p._id} className="py-3">
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-gray-500">{p.tag}</div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function FaqsAdmin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ question: "", answer: "", order: 0 });
  const load = async () => {
    const res = await fetch("/api/v1/faqs");
    const data = await res.json();
    setItems(data || []);
  };
  useEffect(() => { load(); }, []);

  const create = async (e) => {
    e.preventDefault();
    await fetch("/api/v1/faqs", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
    setForm({ question: "", answer: "", order: 0 });
    load();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Section title="Create FAQ">
        <form onSubmit={create} className="space-y-3">
          <input className="w-full border rounded-md px-3 py-2" placeholder="Question" value={form.question} onChange={(e)=>setForm({...form,question:e.target.value})}/>
          <textarea className="w-full border rounded-md px-3 py-2 h-40" placeholder="Answer" value={form.answer} onChange={(e)=>setForm({...form,answer:e.target.value})}></textarea>
          <input type="number" className="w-full border rounded-md px-3 py-2" placeholder="Order" value={form.order} onChange={(e)=>setForm({...form,order:parseInt(e.target.value||'0',10)})}/>
          <button className="px-4 py-2 rounded-md bg-black text-white font-semibold">Create</button>
        </form>
      </Section>
      <Section title="FAQs">
        <ul className="divide-y">
          {items.map((f)=> (
            <li key={f._id} className="py-3">
              <div className="font-semibold">{f.question}</div>
              <div className="text-xs text-gray-500 truncate">{f.answer}</div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
