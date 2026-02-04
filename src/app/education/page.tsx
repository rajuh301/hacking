import Link from "next/link";

export default function SecurityAlertPage() {
  return (
    // MAIN CONTAINER WITH ANIMATED BACKGROUND
    <main className="relative min-h-screen w-full overflow-hidden bg-black font-mono text-green-500">
      {/* The animated background layer.
        We use 'bg-terminal-pattern' (defined in tailwind config)
        and 'animate-scrolling-code' (defined in tailwind config).
        We utilize background-size to make the pattern repeat smoothly.
      */}
      <div 
        className="absolute inset-0 z-0 animate-scrolling-code bg-terminal-pattern opacity-50"
        style={{ backgroundSize: '100px 100px' }}
      ></div>

      {/* Overlay gradient to darken edges and focus center */}
      <div className="absolute inset-0 z-10 bg-radial-gradient(circle, transparent 20%, black 100%) pointer-events-none"></div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center p-4">
        
        {/* GLASSMORPHISM CARD */}
        <div className="w-full max-w-2xl rounded-xl border border-green-500/30 bg-black/60 p-8 text-center backdrop-blur-md shadow-[0_0_30px_rgba(0,255,70,0.2)]">
          
          {/* Header with Glitch effect simulation via text shadow */}
          <h1 className="mb-4 text-4xl font-bold uppercase tracking-widest text-red-500 [text-shadow:2px_2px_0px_rgba(0,255,255,0.5),-2px_-2px_0px_rgba(255,0,255,0.5)]">
            System Breach Detected
          </h1>

          <div className="mb-8 space-y-4 text-left">
            <p className="text-lg text-green-400">
              <span className="mr-2 text-green-600">&gt;</span>
              Unauthorized access attempt logged.
            </p>
            <p className="text-lg text-green-400">
              <span className="mr-2 text-green-600">&gt;</span>
              Credentials have been compromised.
            </p>
            <p className="text-lg text-green-400">
              <span className="mr-2 text-green-600">&gt;</span>
              Initiating security protocol...
              {/* Blinking cursor animation */}
              <span className="ml-1 inline-block h-5 w-3 animate-cursor-blink bg-green-500"></span>
            </p>
          </div>

          {/* Educational Message */}
          <div className="rounded border border-yellow-500/50 bg-yellow-900/20 p-4 text-yellow-300 mb-8">
            <h2 className="text-xl font-bold mb-2">Educational Notice:</h2>
            <p className="text-sm">
              If this were a real attack, the credentials entered on the previous page would now be in the hands of an attacker. This is a demonstration of how phishing works.
            </p>
          </div>

          <Link
            href="/"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded bg-green-600 px-8 py-3 font-bold text-black transition-all hover:bg-green-500 hover:shadow-[0_0_20px_rgba(0,255,70,0.7)]"
          >
            <span className="relative z-10">Return to Safety</span>
          </Link>
        </div>
      </div>
    </main>
  );
}