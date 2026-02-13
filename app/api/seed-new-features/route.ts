import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';
import { blogPostsData } from './blog-data';

export async function POST() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    return NextResponse.json({ error: 'DATABASE_URL is not set' }, { status: 500 });
  }

  const sql = neon(dbUrl);
  const log: string[] = [];

  try {
    log.push('Clearing existing blog posts...');
    await sql`DELETE FROM blog_posts`;
    
    log.push(`Starting blog post seeding (${blogPostsData.length} posts)...`);
    
    for (const post of blogPostsData) {
      try {
        await sql`
          INSERT INTO blog_posts (slug, title, excerpt, content, author, category, image, read_time, featured)
          VALUES (
            ${post.slug},
            ${post.title},
            ${post.excerpt},
            ${post.content},
            ${post.author},
            ${post.category},
            ${post.image},
            ${post.read_time},
            ${post.featured}
          )
          ON CONFLICT (slug) DO NOTHING
        `;
        log.push(`✓ Added: ${post.title}`);
      } catch (postError) {
        log.push(`✗ Failed: ${post.title} - ${postError instanceof Error ? postError.message : 'Unknown error'}`);
      }
    }

    log.push(`Completed: Successfully processed ${blogPostsData.length} blog posts`);

    return NextResponse.json({
      success: true,
      message: `Blog posts seeded successfully (${blogPostsData.length} posts)`,
      log,
    });
  } catch (error) {
    console.error('Error seeding blog posts:', error);
    return NextResponse.json(
      {
        error: 'Failed to add blog posts',
        details: error instanceof Error ? error.message : 'Unknown error',
        partialLog: log,
      },
      { status: 500 }
    );
  }
}
