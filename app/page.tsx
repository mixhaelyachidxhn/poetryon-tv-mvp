export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header / Brand */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-cyan-400">POETRYON.TV</h1>
            <p className="text-sm text-slate-400 mt-1">Decentralized Streaming &amp; Sponsorship Network on Solana &amp; Arweave</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full text-xs font-semibold">
              Live MVP Active
            </span>
            <span className="px-3 py-1 bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-full text-xs font-semibold">
              watch.poetryon.tv
            </span>
          </div>
        </div>

        {/* Hero Section with Video Player */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2">Featured Decentralized Stream</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Live Tokenized Broadcast</h2>
              
              {/* Video Player Container */}
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 shadow-2xl mb-6">
                <video 
                  controls 
                  autoPlay 
                  muted 
                  loop
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Streaming live via decentralized Arweave storage with integrated Solana rewards and sponsor gateways.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
              <a href="#sponsors" className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-sm transition">
                Sponsorship Tiers
              </a>
              <a href="#metrics" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-lg text-sm transition">
                Network Stats
              </a>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div id="metrics" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Network Overview</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Blockchain</span>
                  <span className="font-semibold text-cyan-400">Solana &amp; Arweave</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-slate-400">Network Reach</span>
                  <span className="font-semibold text-emerald-400">390M+ Database</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="text-slate-400">Revenue Split</span>
                  <span className="font-semibold text-white">50/50 Creator Model</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 text-center">
              Managed via Swift Walker Organization Limited
            </div>
          </div>
        </div>

        {/* Sponsorship Packages Section */}
        <div id="sponsors" className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white">Sponsorship &amp; SMS Pricing Tiers</h3>
            <p className="text-slate-400 text-sm mt-2">High-visibility promotional packages designed for enterprise partners and dispensaries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase">Starter Tier</div>
                <div className="text-3xl font-extrabold text-white mt-2 mb-4">,500</div>
                <p className="text-slate-400 text-sm mb-6">Targeted outreach package across initial subscriber networks.</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">? 8,000 Verified Contacts</li>
                  <li className="flex items-center gap-2">? Standard Placement</li>
                  <li className="flex items-center gap-2">? Analytics Report</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg text-sm transition">
                Select Package
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-900 border-2 border-cyan-500 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase">Growth Tier</div>
                <div className="text-3xl font-extrabold text-white mt-2 mb-4">Custom</div>
                <p className="text-slate-400 text-sm mb-6">Scaled campaign integration for regional market leaders.</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">? Expanded SMS Broadcasts</li>
                  <li className="flex items-center gap-2">? Premium Video Placement</li>
                  <li className="flex items-center gap-2">? Dedicated Account Manager</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg text-sm transition">
                Get Started
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase">Enterprise Tier</div>
                <div className="text-3xl font-extrabold text-white mt-2 mb-4"></div>
                <p className="text-slate-400 text-sm mb-6">Full nationwide push across the 4 million network database.</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">? 4 Million Contact Reach</li>
                  <li className="flex items-center gap-2">? Exclusive Sponsorship Slot</li>
                  <li className="flex items-center gap-2">? VIP Token Allocation</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg text-sm transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
