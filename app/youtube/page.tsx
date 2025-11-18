'use client';

import { useState, useEffect } from 'react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

export default function YouTubePage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  // Note: You'll need to add your YouTube API key in a .env.local file
  // NEXT_PUBLIC_YOUTUBE_API_KEY=your_api_key_here
  // NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_channel_id_here

  useEffect(() => {
    // Mock data for demonstration - replace with actual API call
    const mockVideos: Video[] = [
      {
        id: '1',
        title: 'Latest Gaming Stream',
        description: 'Check out my latest gaming adventure!',
        thumbnail: '/placeholder-video.jpg',
        publishedAt: '2024-01-15',
      },
      {
        id: '2',
        title: 'Gaming Tips & Tricks',
        description: 'Learn the best strategies and tips',
        thumbnail: '/placeholder-video.jpg',
        publishedAt: '2024-01-10',
      },
      {
        id: '3',
        title: 'Community Highlights',
        description: 'Best moments from the community',
        thumbnail: '/placeholder-video.jpg',
        publishedAt: '2024-01-05',
      },
    ];

    // Simulate API loading
    setTimeout(() => {
      setVideos(mockVideos);
      setLoading(false);
    }, 1000);

    // Uncomment and use this for actual YouTube API integration:
    /*
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
        );
        const data = await response.json();
        const videoData = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt,
        }));
        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
    */
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6 animate-pulse-glow">
            YouTube Content
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Watch the latest videos from the Lokinious YouTube channel. Subscribe for gaming content, 
            tutorials, and live stream highlights!
          </p>
          <a
            href="https://www.youtube.com/@Lokinious"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#39ff14] text-black px-8 py-3 rounded-lg font-bold hover:neon-glow transition-all duration-300"
          >
            Subscribe on YouTube
          </a>
        </div>

        {/* Video Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-2xl text-[#39ff14] animate-pulse">Loading videos...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg overflow-hidden hover:neon-glow transition-all duration-300 cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-6xl text-[#39ff14]">▶️</div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-[#39ff14] mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Setup Instructions */}
        <div className="mt-16 bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#39ff14] mb-4">Setup Instructions</h2>
          <div className="text-gray-300 space-y-3">
            <p>To enable live YouTube video fetching:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Get a YouTube Data API v3 key from Google Cloud Console</li>
              <li>Create a <code className="bg-gray-800 px-2 py-1 rounded">.env.local</code> file in the project root</li>
              <li>Add your API key: <code className="bg-gray-800 px-2 py-1 rounded">NEXT_PUBLIC_YOUTUBE_API_KEY=your_key</code></li>
              <li>Add your channel ID: <code className="bg-gray-800 px-2 py-1 rounded">NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=your_channel_id</code></li>
              <li>Uncomment the API code in the component and restart the dev server</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
