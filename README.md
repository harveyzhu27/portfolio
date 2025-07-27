# Harvey Zhu - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, video integration, and a professional design showcasing projects and experience.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging interactions
- **Video Integration**: Embedded project videos and trailers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Vite for fast development and builds
- **Professional UI**: Clean, modern design with gradient accents

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Development**: ESLint, Prettier

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   └── ProjectCard.tsx # Project display component
│   ├── data/               # Portfolio data
│   │   └── portfolio.ts    # All content and data
│   ├── types/              # TypeScript interfaces
│   │   └── index.ts        # Type definitions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles and Tailwind
├── assets/                 # Static assets
│   ├── videos/             # Project videos
│   └── images/             # Images and screenshots
├── public/                 # Public assets
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── index.html              # HTML entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📝 Customization

### Adding New Projects

1. **Update data in `src/data/portfolio.ts`**:
   ```typescript
   {
     id: 'new-project',
     title: 'New Project',
     description: 'Project description...',
     githubUrl: 'https://github.com/username/repo',
     videoUrl: '/assets/video.mp4', // Optional
     technologies: ['React', 'TypeScript', 'Tailwind']
   }
   ```

2. **Add video files** to `assets/` directory
3. **Update video paths** in the data file

### Modifying Styles

- **Global styles**: Edit `src/index.css`
- **Tailwind config**: Modify `tailwind.config.js`
- **Component styles**: Use Tailwind classes or add custom CSS

### Adding New Sections

1. **Create component** in `src/components/`
2. **Add to App.tsx** with proper routing
3. **Update navigation** in Header component

## 🎨 Design Features

- **Gradient Backgrounds**: Purple-blue gradients throughout
- **Smooth Animations**: Framer Motion for scroll-triggered animations
- **Technology Tags**: Bubbled tags showing project technologies
- **Video Integration**: Embedded project videos with controls
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Hover Effects**: Interactive elements with smooth transitions

## 📱 Responsive Design

- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid for projects
- **Desktop**: Full multi-column layout with hover effects

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Reusable React components with TypeScript
- **Data Layer**: Centralized data management
- **Types**: TypeScript interfaces for type safety
- **Styling**: Tailwind CSS with custom components

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Build command**: `npm run build`
3. **Output directory**: `dist`
4. **Deploy automatically** on push to main

### Netlify

1. **Connect repository** to Netlify
2. **Build command**: `npm run build`
3. **Publish directory**: `dist`
4. **Deploy automatically** on push to main

### GitHub Pages

1. **Add to package.json**:
   ```json
   {
     "homepage": "https://username.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: hz639@cornell.edu
- **GitHub**: [harveyzhu27](https://github.com/harveyzhu27)
- **LinkedIn**: [zhuharvey](https://www.linkedin.com/in/zhuharvey)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS 