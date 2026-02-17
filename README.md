# Turkish Law Firm Website Template

A professional website template designed specifically for Turkish law firms. Built with modern web standards using Next.js and TypeScript.

## Features

- Professional law firm design
- Mobile responsive layout
- Next.js 14 App Router architecture
- TypeScript support
- Modern styling with Tailwind CSS
- SEO optimization for search engines
- Turkish language support
- Social media sharing optimization
- Single-file content management system

## Project Structure

```
law/
├── app/                    # Next.js application directory
│   ├── about/             # About page (Hakkımızda)
│   ├── contact/           # Contact page (İletişim)
│   ├── services/          # Services page (Çalışma alanları)
│   ├── layout.tsx         # Root layout with SEO settings
│   └── page.tsx           # Home page
├── components/
│   ├── layout/           # Header, footer, navigation components
│   ├── sections/         # Page sections (hero, services, etc.)
│   └── ui/              # Reusable UI components
├── config/
│   └── site.ts          # Main configuration file
└── lib/
    └── seo.ts           # SEO utility functions
```

## Setup and Configuration

All website content is managed from a single file: `config/site.ts`

You need to update these sections:

- Law firm information (name, contact, address)
- Lawyer details (name, experience, education)
- Practice areas list
- SEO settings (title, description, keywords)
- Theme colors

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Update site configuration:

```bash
# Edit config/site.ts with your law firm's information
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Deployment

The project is ready for production deployment:

```bash
npm run build
npm start
```

## SEO and Search Engine Optimization

- JSON-LD structured data for legal services
- OpenGraph and Twitter Card support
- Turkish language META tags
- Automatic sitemap generation
- robots.txt optimization
- Canonical URLs for all pages

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (with Turkish character support)
- **SEO:** Next.js metadata API
- **Deploy:** Vercel, Netlify or any Node.js hosting

## Customization

You can change colors and styling by editing the theme section in `config/site.ts`. For more extensive changes, update Tailwind CSS classes in the component files.

## License

This template is open source and available under the MIT License. You can freely use it in your projects and customize it according to your needs.
