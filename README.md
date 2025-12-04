# Portfolio

Personal portfolio website built with Next.js, featuring a blog powered by MDX.

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── notes/             # Blog section
│   │   ├── [slug]/        # Dynamic blog post pages
│   │   └── posts/         # MDX blog post files
│   ├── crafts/            # Crafts page
│   ├── resources/         # Resources page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                   # Utility functions
├── styles/                # Global styles
└── mdx-components.tsx     # Custom MDX components
```

## Writing Blog Posts

Create a new `.mdx` file in `src/app/notes/posts/`:

```mdx
---
title: Your Post Title
publishedAt: "2025-01-15"
summary: A brief summary of your post
---

Your content here...
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Push to the main branch to trigger automatic deployments.

## License

MIT License - see [LICENSE.txt](LICENSE.txt) file for details
