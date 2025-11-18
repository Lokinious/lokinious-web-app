# Lokinious Web App

A modern React + Next.js web application for the Lokinious brand, featuring a neon green theme with luminescent effects. This app showcases YouTube content, charity donations, and exclusive merchandise.

![Lokinious Banner](public/banner-placeholder.jpg)

## Features

- 🎮 **Home Page**: Brand presentation with neon green theme and luminescent effects
- 📺 **YouTube Page**: Integration with YouTube API to display latest videos from [@Lokinious](https://www.youtube.com/@Lokinious)
- ❤️ **Charity Page**: Information and links for child sponsorship through Compassion International
- 👕 **Merch Page**: Showcase exclusive Lokinious merchandise
- 🌟 **Neon Theme**: Custom neon green color scheme with glowing effects throughout

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom neon theme
- **UI**: React 19
- **API Integration**: YouTube Data API v3

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- YouTube Data API key (optional, for live video fetching)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Lokinious/lokinious-web-app.git
cd lokinious-web-app
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up YouTube API:
   - Copy `.env.local.example` to `.env.local`
   - Get a YouTube Data API v3 key from [Google Cloud Console](https://console.cloud.google.com/)
   - Add your API key and channel ID to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
lokinious-web-app/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout with navigation
│   ├── globals.css       # Global styles with neon theme
│   ├── youtube/
│   │   └── page.tsx      # YouTube content page
│   ├── charity/
│   │   └── page.tsx      # Charity donations page
│   └── merch/
│       └── page.tsx      # Merchandise page
├── components/
│   └── Navigation.tsx    # Main navigation component
├── public/              # Static assets (add your banner image here)
└── package.json
```

## Customization

### Adding Your Banner Image

Replace the banner section in `app/page.tsx` with your own image:

1. Add your banner image to the `public/` folder (e.g., `public/banner.jpg`)
2. Update the home page to use your image:

```tsx
<div className="absolute inset-0">
  <Image 
    src="/banner.jpg" 
    alt="Lokinious Banner"
    fill
    className="object-cover"
  />
</div>
```

### Enabling YouTube API

1. Uncomment the YouTube API fetch code in `app/youtube/page.tsx`
2. Add your credentials to `.env.local`
3. Restart the development server

## Build and Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables for YouTube API
4. Deploy!

## Color Theme

The app uses a custom neon green theme:

- **Primary Color**: `#39ff14` (Neon Green)
- **Background**: `#000000` (Black)
- **Accent Background**: `#0a0a0a` (Dark Gray)

Custom CSS classes available:
- `.neon-text` - Glowing text effect
- `.neon-border` - Glowing border effect
- `.neon-glow` - Full element glow effect
- `.animate-pulse-glow` - Animated pulsing glow

## Pages Overview

### Home (`/`)
Landing page with brand presentation and feature cards linking to other sections.

### YouTube (`/youtube`)
Displays videos from the Lokinious YouTube channel. Currently shows mock data but can be connected to YouTube API.

### Charity (`/charity`)
Information about Compassion International child sponsorship program with donation links.

### Merch (`/merch`)
Showcase of Lokinious merchandise with category filtering and product details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary to the Lokinious brand.

## Links

- YouTube: [@Lokinious](https://www.youtube.com/@Lokinious)
- Compassion International: [compassion.com](https://www.compassion.com/)

## Support

For questions or issues, please open an issue on GitHub or contact through the Lokinious YouTube channel.

---

Built with ❤️ and ⚡ by the Lokinious team
