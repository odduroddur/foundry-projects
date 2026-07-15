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

Edit `components/ProjectGrid.tsx` and update the `SAMPLE_PROJECTS` array:

```tsx
const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Category',
    description: 'Your project description',
    image: 'your-image.jpg',
  },
  // ... more projects
];
```

### Adding Images

Create a `public/images/` folder and add your project images there, then reference them in the projects array.

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
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx
│   └── Footer.tsx
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
