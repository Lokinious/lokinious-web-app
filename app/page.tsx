export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#39ff14]/20 to-black/80 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold neon-text animate-pulse-glow mb-4">
              LOKINIOUS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Gaming • Content • Community
            </p>
          </div>
        </div>
        {/* Placeholder for banner image - user will supply their own */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-50" />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold neon-text mb-6">
            Welcome to the Neon Realm
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge gaming content, exclusive merchandise, and join our mission 
            to make a difference through charity. Step into the luminescent world of Lokinious.
          </p>
        </section>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* YouTube Card */}
          <div className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-6 hover:neon-glow transition-all duration-300 cursor-pointer">
            <div className="text-[#39ff14] text-5xl mb-4">📺</div>
            <h3 className="text-2xl font-bold text-[#39ff14] mb-3">YouTube Content</h3>
            <p className="text-gray-300 mb-4">
              Watch the latest gaming videos, tutorials, and live streams from the Lokinious channel.
            </p>
            <a href="/youtube" className="text-[#39ff14] hover:underline">
              Explore Videos →
            </a>
          </div>

          {/* Charity Card */}
          <div className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-6 hover:neon-glow transition-all duration-300 cursor-pointer">
            <div className="text-[#39ff14] text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-[#39ff14] mb-3">Support Children</h3>
            <p className="text-gray-300 mb-4">
              Join our mission to sponsor children in need through Compassion International.
            </p>
            <a href="/charity" className="text-[#39ff14] hover:underline">
              Make a Difference →
            </a>
          </div>

          {/* Merch Card */}
          <div className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-6 hover:neon-glow transition-all duration-300 cursor-pointer">
            <div className="text-[#39ff14] text-5xl mb-4">👕</div>
            <h3 className="text-2xl font-bold text-[#39ff14] mb-3">Exclusive Merch</h3>
            <p className="text-gray-300 mb-4">
              Get your hands on exclusive Lokinious merchandise and show your support.
            </p>
            <a href="/merch" className="text-[#39ff14] hover:underline">
              Shop Now →
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#39ff14]/30 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 Lokinious. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
