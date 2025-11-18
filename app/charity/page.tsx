export default function CharityPage() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold neon-text mb-6 animate-pulse-glow">
            Make a Difference
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in sponsoring children in need through Compassion International. 
            Every contribution makes a real impact in a child&apos;s life.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Section */}
          <div className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#39ff14] mb-6">About Compassion</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Compassion International is a Christian child development organization that pairs 
                compassionate people with those who are suffering from poverty.
              </p>
              <p>
                Through child sponsorship, you can provide:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Educational support and school supplies</li>
                <li>Nutritious meals and healthcare</li>
                <li>Mentorship and spiritual guidance</li>
                <li>Life skills and vocational training</li>
                <li>A chance to break the cycle of poverty</li>
              </ul>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#39ff14] mb-6">Our Impact</h2>
            <div className="space-y-6">
              <div className="border-b border-[#39ff14]/30 pb-4">
                <div className="text-4xl font-bold text-[#39ff14] mb-2">2M+</div>
                <div className="text-gray-300">Children Served Worldwide</div>
              </div>
              <div className="border-b border-[#39ff14]/30 pb-4">
                <div className="text-4xl font-bold text-[#39ff14] mb-2">25+</div>
                <div className="text-gray-300">Countries Reached</div>
              </div>
              <div className="border-b border-[#39ff14]/30 pb-4">
                <div className="text-4xl font-bold text-[#39ff14] mb-2">70+</div>
                <div className="text-gray-300">Years of Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-12 mb-12">
          <h2 className="text-4xl font-bold text-[#39ff14] mb-6">Sponsor a Child Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your monthly donation of $38 can transform a child&apos;s future. Start your sponsorship 
            journey today and make a lasting difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.compassion.com/sponsor_a_child/default.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#39ff14] text-black px-8 py-4 rounded-lg font-bold text-lg hover:neon-glow transition-all duration-300"
            >
              Sponsor a Child
            </a>
            <a
              href="https://www.compassion.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#39ff14] text-[#39ff14] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#39ff14] hover:text-black transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-[#0a0a0a] border-2 border-[#39ff14]/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-[#39ff14] mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-[#39ff14] mb-3">Choose a Child</h3>
              <p className="text-gray-300">
                Browse through profiles and select a child who touches your heart.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-[#39ff14] mb-3">Make Your Commitment</h3>
              <p className="text-gray-300">
                Set up your monthly sponsorship and begin your journey of impact.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-[#39ff14] mb-3">Build a Relationship</h3>
              <p className="text-gray-300">
                Exchange letters and watch your sponsored child grow and thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Community Message */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-transparent via-[#39ff14]/20 to-transparent p-8 rounded-lg">
            <p className="text-2xl text-gray-300 italic">
              &quot;Together, we&apos;re not just changing lives—we&apos;re building futures.&quot;
            </p>
            <p className="text-[#39ff14] mt-4 font-bold">- Lokinious Community</p>
          </div>
        </div>
      </div>
    </div>
  );
}
