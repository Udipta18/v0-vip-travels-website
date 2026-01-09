# V.I.P. Travels India - Website

A modern, responsive website for V.I.P. Travels India, showcasing luxury travel experiences and tour packages with 30+ years of excellence in travel services.

## 🚀 Features

- **Modern Design**: Built with Next.js 16 and React 19
- **Responsive UI**: Mobile-first design using Tailwind CSS
- **Dark/Light Theme**: Theme toggle with persistent user preference
- **Component Library**: Radix UI components for accessibility
- **Type Safety**: Full TypeScript support
- **Analytics**: Integrated Vercel Analytics
- **SEO Optimized**: Proper metadata and semantic HTML

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher ([Download here](https://nodejs.org/))
- **npm**: Comes with Node.js (or use pnpm/yarn as alternative)
- **Git**: For version control ([Download here](https://git-scm.com/))

To check if you have Node.js and npm installed:

```bash
node --version
npm --version
```

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd v0-vip-travels-website
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using pnpm (alternative):
```bash
pnpm install
```

Using yarn (alternative):
```bash
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

Open your browser and navigate to the URL above to see the website.

## 📁 Project Structure

```
v0-vip-travels-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── itinerary/           # Itinerary page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   ├── navigation.tsx       # Navigation bar
│   ├── theme-provider.tsx   # Theme context provider
│   └── ...                  # Other components
├── lib/                     # Utility functions
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
│   ├── icon.svg            # Favicon
│   ├── vip-logo.png        # Logo image
│   └── ...                 # Other images
├── styles/                  # Additional styles
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.mjs         # Next.js configuration
```

## 🎯 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server with hot-reload at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the application for production in the `.next` folder

### `npm run start`
Starts the production server (requires `npm run build` first)

### `npm run lint`
Runs ESLint to check for code quality issues

## 🎨 Customization

### Changing Theme Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: /* your color */;
  --secondary: /* your color */;
  /* ... other variables */
}
```

### Updating Content

- **Home Page**: Edit `app/page.tsx`
- **Navigation Links**: Edit `components/navigation.tsx`
- **Metadata (SEO)**: Edit `app/layout.tsx`

### Adding New Pages

Create a new folder in the `app/` directory:

```bash
app/
└── your-page/
    └── page.tsx
```

The page will be automatically available at `/your-page`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

3. Follow your hosting provider's Node.js deployment guide

## 🔧 Technologies Used

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Typography**: Google Fonts (Inter, Cormorant Garamond)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Port 3000 is already in use

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Dependencies installation fails

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## 📞 Support

For issues or questions about V.I.P. Travels:
- **Phone**: +91 9334812901
- **Website**: [Your website URL]

## 📄 License

This project is proprietary software for V.I.P. Travels India.

---

**Built with ❤️ for V.I.P. Travels India - Luxury Travel Experiences Since 1991**
