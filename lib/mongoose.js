import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('[MongoDB] Missing MONGODB_URI env var. Set it in your environment to enable API routes.');
}

let cached = global._mongoose;
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    if (!MONGODB_URI) throw new Error('MONGODB_URI not set');
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: process.env.MONGODB_DB || undefined,
        maxPoolSize: 10,
      })
      .then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
