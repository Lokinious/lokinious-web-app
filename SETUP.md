# Lokinious Web App - Setup Guide

This guide will help you get the Lokinious web application up and running.

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- A text editor (VS Code recommended)

## Quick Start

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/Lokinious/lokinious-web-app.git
   cd lokinious-web-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
lokinious-web-app/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with navigation
│   ├── globals.css        # Global styles with neon theme
│   ├── youtube/
│   │   └── page.tsx       # YouTube content page
│   ├── charity/
│   │   └── page.tsx       # Charity donations page
│   └── merch/
│       └── page.tsx       # Merchandise page
├── components/
│   └── Navigation.tsx     # Main navigation component
├── public/                # Static assets
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization Guide

### 1. Adding Your Banner Image

The home page has a placeholder for your banner image. To add it:

1. Place your banner image in the `public/` folder:
   ```
   public/banner.jpg
   ```

2. Update `app/page.tsx` to use your image. Find the banner section and add:
   ```tsx
   import Image from "next/image";
   
   // In the banner div:
   <div className="absolute inset-0">
     <Image 
       src="/banner.jpg" 
       alt="Lokinious Banner"
       fill
       className="object-cover"
       priority
     />
   </div>
   ```

### 2. Setting Up YouTube API (Optional)

To fetch live videos from your YouTube channel:

1. **Get API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable YouTube Data API v3
   - Create credentials (API key)

2. **Find Your Channel ID**:
   - Visit your channel: https://www.youtube.com/@Lokinious
   - Click "About" tab
   - Click "Share channel" → Copy channel ID

3. **Configure Environment Variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local`:
   ```
   NEXT_PUBLIC_YOUTUBE_API_KEY=your_actual_api_key_here
   NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_actual_channel_id_here
   ```

4. **Enable API Code**:
   - Open `app/youtube/page.tsx`
   - Find the commented API code section
   - Uncomment the `fetchVideos` function and its call
   - Comment out or remove the mock data section

5. **Restart Server**:
   ```bash
   npm run dev
   ```

### 3. Customizing the Theme

The neon green theme is defined in `app/globals.css`. You can customize:

**Colors**:
```css
:root {
  --neon-green: #39ff14;        /* Change primary color */
  --background: #000000;        /* Change background */
  --dark-bg: #0a0a0a;          /* Change card backgrounds */
}
```

**Glow Effects**:
```css
.neon-glow {
  box-shadow: 
    0 0 15px var(--neon-green-glow),
    0 0 30px var(--neon-green-glow),
    0 0 45px var(--neon-green-glow);
}
```

### 4. Adding More Products to Merch

Edit `app/merch/page.tsx` and add items to the `merchItems` array:

```tsx
{
  id: 7,
  name: 'Your Product Name',
  price: 39.99,
  description: 'Product description',
  category: 'apparel', // or 'accessories'
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables for YouTube API (if using)
5. Deploy!

### Build for Self-Hosting

```bash
npm run build
npm run start
```

The app will be available on port 3000.

## Features

- ✅ Modern Next.js 16 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Neon green theme with glow effects
- ✅ Responsive design
- ✅ YouTube API integration ready
- ✅ Charity information page
- ✅ Merchandise showcase
- ✅ Fast static page generation

## Support

For issues or questions:
- Open an issue on GitHub
- Contact through YouTube channel [@Lokinious](https://www.youtube.com/@Lokinious)

## License

Copyright © 2024 Lokinious. All rights reserved.
