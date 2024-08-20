// import { connect } from '@/config/db.config';
// import Blog from '@/models/blog.model';
// import { NextRequest, NextResponse } from 'next/server';
// import { authMiddleware } from '@/middleware/auth';

// connect();

// export const GET = authMiddleware(async (req: NextRequest) => {
//   try {
//     const blogs = await Blog.find().populate('author');
//     return NextResponse.json({ success: true, data: blogs }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// });

// export const POST = authMiddleware(async (req: NextRequest) => {
//   try {
//     const { title, content } = await req.json();
//     const authorId = (req as any).user.userId;

//     if (!title || !content) {
//       return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
//     }

//     const blog = await Blog.create({ title, content, author: authorId });
//     return NextResponse.json({ success: true, data: blog }, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// });

// export const PATCH = authMiddleware(async (req: NextRequest) => {
//   try {
//     const { id, title, content } = await req.json();
//     const authorId = (req as any).user.userId;

//     if (!id || !title || !content) {
//       return NextResponse.json({ error: 'ID, title, and content are required' }, { status: 400 });
//     }

//     const blog = await Blog.findById(id);

//     if (!blog) {
//       return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
//     }

//     if (blog.author.toString() !== authorId) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
//     }

//     blog.title = title;
//     blog.content = content;
//     await blog.save();

//     return NextResponse.json({ success: true, data: blog }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// });

// export const DELETE = authMiddleware(async (req: NextRequest) => {
//   try {
//     const { id } = await req.json();
//     const authorId = (req as any).user.userId;

//     if (!id) {
//       return NextResponse.json({ error: 'ID is required' }, { status: 400 });
//     }

//     const blog = await Blog.findById(id);

//     if (!blog) {
//       return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
//     }

//     if (blog.author.toString() !== authorId) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
//     }

//     await blog.remove();

//     return NextResponse.json({ success: true, data: blog }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// });


// /api/blogs.ts

import { connect } from '@/config/db.config';
import Blog from '@/models/blog.model';
import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from '@/middleware/auth';

connect();

export const GET = (async (req: NextRequest) => {
  try {
    const blogs = await Blog.find().populate('author');
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});

export const POST = authMiddleware(async (req: NextRequest) => {
  try {
    const { title, content } = await req.json();
    const authorId = (req as any).user.userId;

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    const blog = await Blog.create({ title, content, author: authorId });
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});

export const PATCH = authMiddleware(async (req: NextRequest) => {
  try {
    const { id, title, content } = await req.json();
    const authorId = (req as any).user.userId;

    if (!id || !title || !content) {
      return NextResponse.json({ error: 'ID, title, and content are required' }, { status: 400 });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    if (blog.author.toString() !== authorId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    blog.title = title;
    blog.content = content;
    await blog.save();

    return NextResponse.json({ success: true, data: blog }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});

export const DELETE = authMiddleware(async (req: NextRequest) => {
  try {
    const { id } = await req.json();
    const authorId = (req as any).user.userId;

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    if (blog.author.toString() !== authorId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await blog.remove();

    return NextResponse.json({ success: true, data: blog }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
});
