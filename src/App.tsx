import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { getMinecraftServerStatus } from "./utils/mcServerStatus";

const serverIp = "91.197.6.19:23801";
const discordUrl = "https://discord.gg/EHCtPaCfMe";

interface ServerStatus {
  online: boolean;
  players?: number;
  maxPlayers?: number;
}

function useTypewriter(text: string, speed = 100, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (displayed.length < text.length) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 0);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length - 1)), speed / 2);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, text, speed, pause]);

  return displayed;
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<ServerStatus>({ online: false });
  const [loading, setLoading] = useState(true);

  const smoothPlayers = useMotionValue(0);
  useSpring(smoothPlayers, { stiffness: 80, damping: 30 });

  const typewriterText = useTypewriter("Elyria", 120, 2000);

  useEffect(() => {
    const fetchStatus = async () => {
      const data = await getMinecraftServerStatus();
      setStatus({ online: data.online, players: data.players, maxPlayers: data.maxPlayers });
      setLoading(false);
      if (data.players !== undefined) smoothPlayers.set(data.players);
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const copyIp = async () => {
    await navigator.clipboard.writeText(serverIp);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div className="orb-1 absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <motion.div className="orb-2 absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-3xl" />
        <motion.div className="orb-3 absolute left-1/3 -bottom-40 h-80 w-80 rounded-full bg-purple-700/15 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-balance text-7xl font-bold tracking-tighter text-violet-50 md:text-9xl">
              <span className="inline-block min-w-[2ch]">
                {typewriterText}
                <span className="animate-pulse text-violet-400">|</span>
              </span>
              <span className="block text-violet-400 glow-md">Craft</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-lg text-violet-200/80 md:text-xl"
          >
            Serveur survie urbain • ville stylée • communauté active
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12"
          >
            <div className="group relative inline-flex items-center gap-8 rounded-full border border-violet-500/30 bg-black/50 px-8 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${status.online ? "bg-emerald-400" : "bg-red-600/80"} shadow-lg ${status.online ? "animate-pulse" : ""}`} />
                <span className="text-sm font-medium text-violet-200">
                  {loading ? "…" : status.online ? "En ligne" : "Hors ligne"}
                </span>
                {!loading && status.online && status.players !== undefined && (
                  <span className="text-xs text-violet-300/80">{status.players}/{status.maxPlayers}</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <code className="font-mono text-lg text-violet-100">{serverIp}</code>
                <button
                  onClick={copyIp}
                  className="rounded-lg bg-violet-600/20 px-4 py-2 text-xs font-medium text-violet-100 transition hover:bg-violet-600/40"
                >
                  {copied ? "✓" : "Copier"}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20"
          >
            <p className="text-sm uppercase tracking-wider text-violet-400">Mod requis</p>
            <p className="mt-2 text-3xl font-medium text-violet-100">SecurityCraft</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="mt-20"
          >
            <a
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-violet-500/40 bg-violet-950/30 px-10 py-5 text-lg font-medium text-violet-100 transition hover:border-violet-400 hover:bg-violet-900/40"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.397-.875-.608-1.25a.077.077 0 0 0-.078-.037a19.736 19.736 0 0 0-4.885 1.515a.069.069 0 0 0-.032.027c-3.124 4.669-3.978 9.225-3.548 13.66a.077.077 0 0 0 .031.055c2.053 1.522 4.041 2.422 5.993 3.029a.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106c-.652-.248-1.274-.55-1.872-.892a.077.077 0 0 1-.008-.128c.126-.095.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.099.246.198.372.291a.077.077 0 0 1-.006.128a12.299 12.299 0 0 1-1.873.892a.076.076 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.607 3.95-1.521 6.002-3.029a.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.419-2.157 2.419z"/>
              </svg>
              Rejoindre le Discord
            </a>
          </motion.div>

        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-violet-400/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14m-7-7l7 7l7-7" />
          </svg>
        </motion.div>
      </div>
    </>
  );
}
