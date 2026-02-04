"use client";

export default function HackerAlert() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-mono">
      {/* ANIMATED BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="hacker-bg h-full w-full"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl rounded-lg border-2 border-green-500 bg-black/80 p-8 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tighter text-green-500">
            SYSTEM BREACH SIMULATED
          </h1>
          
          <div className="mb-8 space-y-4 text-left text-green-400">
            <p className="animate-pulse"> {">"} Captured Credentials: [SUCCESS]</p>
            <p> {">"} Routing to Educational Database...</p>
            <p> {">"} Phishing Vulnerability: <span className="text-red-500 font-bold underline">CRITICAL</span></p>
          </div>

          <div className="rounded border border-red-500/50 bg-red-900/20 p-6 text-white">
            <h2 className="text-2xl font-bold text-red-400">You just witnessed a Phishing Attack!</h2>
            <p className="mt-4 text-gray-300">
              In this lab environment, your password was safely stored in our PostgreSQL database. 
              In the real world, an attacker would now have full access to your Facebook account.
            </p>
          </div>

          <button 
            onClick={() => window.location.href = '/'}
            className="mt-8 rounded border border-green-500 px-8 py-3 font-bold text-green-500 hover:bg-green-500 hover:text-black transition-all"
          >
            RESET LAB SESSION
          </button>
        </div>
      </div>

      <style jsx>{`
        .hacker-bg {
          background: linear-gradient(0deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: scan 10s linear infinite;
        }

        @keyframes scan {
          from { background-position: 0 0; }
          to { background-position: 0 1000px; }
        }
      `}</style>
    </div>
  );
}