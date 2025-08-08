# Full Stack Developer Portfolio

A stunning, modern, and elegant portfolio website built with Next.js, featuring beautiful animations, responsive design, and a professional showcase of full-stack development skills.

## ✨ Features

- **Modern Design**: Clean, elegant, and professional design with dark theme
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Type Animation**: Animated text typing effects
- **Loading Screen**: Elegant loading screen with animated elements
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Animated progress bars for skill proficiency
- **Social Integration**: Links to social media profiles
- **SEO Optimized**: Meta tags and structured data for better SEO

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll-based animations
- **React Type Animation** - Typing animation effects

## 📁 Project Structure

```
AI-Portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── LoadingScreen.tsx    # Animated loading screen
│   ├── Navigation.tsx       # Responsive navigation
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Projects.tsx        # Project showcase with filters
│   └── Contact.tsx         # Contact form and info
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AI-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🎨 Customization

### Personal Information
Update the following files to customize your personal information:

- **Hero Section**: Update name, title, and description in `components/Hero.tsx`
- **About Section**: Modify personal info in `components/About.tsx`
- **Skills**: Update skill levels and categories in `components/Skills.tsx`
- **Projects**: Add your projects in `components/Projects.tsx`
- **Contact**: Update contact information in `components/Contact.tsx`

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font imports in `app/globals.css`
- **Animations**: Customize animations in `tailwind.config.js` and component files

### Content
- **Meta Tags**: Update SEO information in `app/layout.tsx`
- **Images**: Replace placeholder images with your own
- **Links**: Update social media and project links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance Features

- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as needed
- **Smooth Scrolling**: Optimized scroll performance
- **Minimal Bundle**: Tree-shaking and optimization

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### Loading Screen
- Animated loading screen with rotating icons
- Smooth transition to main content
- Professional first impression

### Hero Section
- Animated text typing effect
- Floating background elements
- Call-to-action buttons
- Social media links

### About Section
- Animated statistics
- Personal information display
- Core skills preview
- Professional photo placeholder

### Skills Section
- Categorized skills with progress bars
- Animated skill levels
- Additional technologies grid
- Interactive hover effects

### Projects Section
- Filterable project gallery
- Featured project highlighting
- Technology tags
- Live demo and code links

### Contact Section
- Functional contact form
- Contact information cards
- Social media integration
- Form validation and submission

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js static exports.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with customization, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 