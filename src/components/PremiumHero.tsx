import { motion } from "framer-motion";
import { useState } from "react";

const serverIp = "91.197.6.19:23801";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function PremiumHero() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(serverIp);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_40%)]" />
      
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center lg:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <img
            src="/images/elyriacraft-logo.png"
            alt="ElyriaCraft Logo"
            className="h-24 w-auto animate-pulse-glow sm:h-32"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mx-auto mb-8 inline-block rounded-full border border-violet-400/40 bg-violet-900/20 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-violet-300 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(167, 139, 250, 0.3)" }}
        >
          Serveur Minecraft Survie Urbaine
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-orbitron mx-auto max-w-5xl text-6xl font-black leading-none text-violet-100 sm:text-8xl md:text-9xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
          style={{
            textShadow: "0 0 40px rgba(167, 139, 250, 0.8)",
          }}
        >
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
            ELYRIA CRAFT
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-violet-100/80 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Une expérience survie façon <strong className="text-violet-300">ville stylée</strong> : construis ton quartier, 
          crée ton histoire, protège ta base et fais grandir une cité vivante avec la communauté.
        </motion.p>

        {/* IP Card */}
        <motion.div
          className="mx-auto mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        >
          <motion.div
            className="mx-auto max-w-md rounded-2xl border-2 border-violet-400/50 bg-violet-950/40 p-6 backdrop-blur-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(167, 139, 250, 0.3)" }}
          >
            <div className="text-xs uppercase tracking-widest text-violet-300/80">IP du serveur</div>
            <motion.div
              className="mt-2 font-mono text-2xl font-bold text-violet-100"
              animate={{ textShadow: ["0 0 10px rgba(167, 139, 250, 0)", "0 0 30px rgba(167, 139, 250, 0.8)", "0 0 10px rgba(167, 139, 250, 0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {serverIp}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            onClick={copyIp}
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-5 text-xl font-bold uppercase tracking-wider text-white shadow-2xl"
            whileHover={{ scale: 1.1, y: -5, boxShadow: "0 0 50px rgba(167, 139, 250, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              {copied ? (
                <>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  IP COPIÉE !
                </>
              ) : (
                <>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  COPIER L'IP
                </>
              )}
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-violet-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
