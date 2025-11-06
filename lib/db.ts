import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function initDatabase() {
  // Create blog_posts table if it doesn't exist
  await sql`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id SERIAL PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL,
      category TEXT NOT NULL,
      image TEXT NOT NULL,
      read_time TEXT NOT NULL,
      featured BOOLEAN DEFAULT false,
      published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Create contacts table if it doesn't exist
  await sql`
    CREATE TABLE IF NOT EXISTS contacts (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Create newsletter_subscribers table if it doesn't exist
  await sql`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      active BOOLEAN DEFAULT true
    )
  `;

  console.log('Database initialized successfully');
}

export async function getBlogPosts() {
  const posts = await sql`
    SELECT * FROM blog_posts 
    ORDER BY published_at DESC
  `;
  return posts;
}

export async function getBlogPostBySlug(slug: string) {
  const posts = await sql`
    SELECT * FROM blog_posts 
    WHERE slug = ${slug}
    LIMIT 1
  `;
  return posts[0] || null;
}

export async function getFeaturedPost() {
  const posts = await sql`
    SELECT * FROM blog_posts 
    WHERE featured = true
    ORDER BY published_at DESC
    LIMIT 1
  `;
  return posts[0] || null;
}

export async function saveContact(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const result = await sql`
    INSERT INTO contacts (name, email, subject, message)
    VALUES (${data.name}, ${data.email}, ${data.subject || ''}, ${data.message})
    RETURNING *
  `;
  return result[0];
}

export { sql };
