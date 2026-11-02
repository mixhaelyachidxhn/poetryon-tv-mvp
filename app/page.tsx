export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header / Brand with Logo Integration */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-cyan-400 font-black text-xl tracking-tighter">P</span>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                POETRYON.TV
              </h1>
              <p className="text-xs font-medium text-slate-400 tracking-wide mt-0.5">
                Decentralized Streaming &amp; Sponsorship Network on Solana &amp; Arweave
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 rounded-full text-xs font-bold tracking-wider uppercase shadow-inner">
              ? Live MVP Active
            </span>
            <span className="px-3.5 py-1.5 bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 rounded-full text-xs font-semibold">
              watch.poetryon.tv
            </span>
          </div>
        </div>

        {/* Hero Section with Video Player */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-extrabold">Featured Decentralized Broadcast</span>
                <span className="text-xs text-slate-500 font-mono">Arweave Storage Node</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Independent Art &amp; Tokenized Media</h2>
              
              {/* Video Player Container */}
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 shadow-2xl mb-6 group">
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
                Broadcasting original poetry, spoken word, and music across a decentralized streaming network with integrated Solana rewards and high-ticket sponsor placements.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/80">
              <a href="#sponsors" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg shadow-cyan-500/20">
                Explore Sponsorship Tiers
              </a>
              <a href="#metrics" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm transition border border-slate-700/50">
                Network Metrics
              </a>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div id="metrics" className="bg-slate-900/90 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Infrastructure</span>
                <span className="text-xs text-cyan-400 font-mono">v1.0.4</span>
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400">Protocol</span>
                  <span className="font-semibold text-cyan-400">Solana &amp; Arweave</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400">Database Reach</span>
                  <span className="font-semibold text-emerald-400">390M+ Network</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-800/60 pb-3">
                  <span className="text-slate-400">Revenue Split</span>
                  <span className="font-semibold text-white">50/50 Creator Model</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="text-slate-400">Streaming Rights</span>
                  <span className="font-semibold text-teal-300">3-Yr Exclusive</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 text-center font-medium">
              Swift Walker Organization Limited
            </div>
          </div>
        </div>

        {/* Sponsorship Packages Section */}
        <div id="sponsors" className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Sponsorship &amp; SMS Pricing Tiers</h3>
            <p className="text-slate-400 text-sm md:text-base">High-visibility promotional packages engineered for brand dominance and dispensary growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl hover:border-cyan-500/50 transition">
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Starter Tier</div>
                <div className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">,500</div>
                <p className="text-slate-400 text-sm mb-6">Targeted outreach package across initial subscriber networks.</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">? 8,000 Verified Contacts</li>
                  <li className="flex items-center gap-2">? Standard Video Placement</li>
                  <li className="flex items-center gap-2">? Campaign Analytics Report</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded-xl text-sm transition border border-slate-700/60">
                Select Starter
              </button>
            </div>

            <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-cyan-950/30 border-2 border-cyan-500 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                Featured Partner
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Growth Tier</div>
                <div className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">Custom</div>
                <p className="text-slate-400 text-sm mb-6">Scaled multi-channel campaign integration for regional leaders.</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2">? Expanded SMS Broadcasts</li>
                  <li className="flex items-center gap-2">? Premium Hero Placement</li>
                  <li className="flex items-center gap-2">? Dedicated Account Manager</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-lg shadow-cyan-500/25">
                Secure Partnership
              </button>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl hover:border-cyan-500/50 transition">
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Enterprise Tier</div>
                <div className="text-3xl md:text-4xl font-black text-white mt-2 mb-4"></div>
                <p className="text-slate-400 text-sm mb-6">Full nationwide push across the 4 million network database.</p>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">? 4 Million Contact Reach</li>
                  <li className="flex items-center gap-2">? Exclusive Sponsorship Slot</li>
                  <li className="flex items-center gap-2">? VIP Token Allocation</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded-xl text-sm transition border border-slate-700/60">
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-12 pb-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>© 2026 PoetryOn.TV · Built on Solana &amp; Arweave</div>
          <div className="flex gap-6">
            <a href="https://swiftwalker.org" target="_blank" className="hover:text-cyan-400 transition">Swift Walker Organization</a>
            <a href="https://poetryon.tv" target="_blank" className="hover:text-cyan-400 transition">Main Portal</a>
          </div>
        </div>

      </div>
    </main>
  );
}
