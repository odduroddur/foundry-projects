# Foundry Projects Showcase

A modern, beautiful website to showcase foundry projects with images, descriptions, and videos.

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/odduroddur/foundry-projects.git
cd foundry-projects

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- ✨ Beautiful, responsive design
- 🎨 Tailwind CSS styling
- 🔍 Project filtering by category
- 📱 Mobile-friendly layout
- ⚡ Fast Next.js 14 performance
- 🎯 TypeScript support

## Customization

### Adding Your Projects

Edit `/data/projects.ts` and add a new project entry. The homepage cards and `/projects/[slug]` pages are generated from that single data source:

```tsx
export const projects = [
  {
    slug: 'your-project-slug',
    title: 'Your Project Title',
    category: 'Category',
    description: 'Your project description',
    cardImage: '🛠️',
    hero: {
      title: 'Project title',
      description: 'Hero copy',
      media: [],
    },
    techStack: ['Foundry', 'React'],
    sections: [],
  },
  // ... more projects
];
```

### Adding Images

Create a `public/images/` folder and add your project images there, then set the `src` field on any project `media` or section image placeholder in `data/projects.ts`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically deploy your site

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
foundry-projects/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── asteroid-watch/     # Legacy redirect to the dynamic project route
│   ├── projects/[slug]/    # Reusable project detail pages
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx
│   ├── Footer.tsx
│   └── projects/           # Reusable project page sections
├── data/
│   └── projects.ts         # Centralized project content
├── types/
│   └── project.ts          # Shared TypeScript project types
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **PostCSS** - CSS processing

## License

MIT
