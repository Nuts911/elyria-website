import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Installer NeoForge",
    description:
      "Télécharge le launcher NeoForge 1.21.1 en cliquant sur le bouton ci-dessous, puis ouvre le fichier téléchargé.",
    link: {
      label: "Télécharger NeoForge 1.21.1",
      href: "https://maven.neoforged.net/releases/net/neoforged/neoforge/21.1.230/neoforge-21.1.230-installer.jar",
    },
    icon: "⚙️",
    note: null,
  },
  {
    number: "02",
    title: "Lancer l'installateur",
    description:
      "Fais un clic droit sur le fichier .jar téléchargé, puis choisis « Ouvrir avec » → OpenJDK ou Java. Si tu n'as pas Java, télécharge-le ci-dessous, installe-le, puis recommence cette étape.",
    link: {
      label: "Télécharger Java (OpenJDK 21)",
      href: "https://github.com/adoptium/temurin21-binaries/releases/download/jdk-21.0.11%2B10/OpenJDK21U-jdk_x64_windows_hotspot_21.0.11_10.msi",
    },
    icon: "☕",
    note: "Une fois l'installateur ouvert, clique sur « Install client » puis sur « Proceed ».",
  },
  {
    number: "03",
    title: "Accéder au dossier Minecraft",
    description:
      "Appuie sur les touches Windows + R, tape %appdata% dans la fenêtre qui s'ouvre, puis valide. Navigue ensuite dans le dossier .minecraft et ouvre le dossier mods. S'il n'existe pas, crée-le.",
    link: null,
    icon: "📂",
    note: "Chemin : %appdata%\\.minecraft\\mods",
  },
  {
    number: "04",
    title: "Installer SecurityCraft",
    description:
      "Télécharge le mod SecurityCraft version 1.9.12 pour Minecraft 1.21.1 en cliquant ci-dessous, puis glisse le fichier .jar directement dans ton dossier mods.",
    link: {
      label: "Télécharger SecurityCraft 1.9.12",
      href: "https://modrinth.com/mod/security-craft/version/iyZ6tcts",
    },
    icon: "🛡️",
    note: null,
  },
  {
    number: "05",
    title: "Lancer le jeu et rejoindre",
    description:
      "Ouvre ton launcher Minecraft. En bas à gauche, tu verras « NeoForge » — sélectionne-le et lance le jeu. Une fois connecté, copie l'IP du serveur et rejoins ElyriaCraft !",
    link: null,
    icon: "🎮",
    note: "IP : 91.197.6.19:23801",
  },
];

export default function PremiumTutorial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/5 to-black" />

      <div className="relative mx-auto w-full max-w-4xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-violet-400">Guide de démarrage</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-violet-100 sm:text-6xl">
            COMMENT REJOINDRE ?
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="mx-auto mt-6 max-w-xl text-violet-100/70">
            Suis les étapes ci-dessous pour rejoindre ElyriaCraft en quelques minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Ligne de progression verticale */}
          <div className="absolute left-8 top-0 h-full w-px bg-violet-800/40 sm:left-10">
            <motion.div
              className="w-full bg-gradient-to-b from-violet-500 to-fuchsia-500"
              style={{ height: lineHeight, originY: 0 }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                className="relative flex gap-8 sm:gap-12"
              >
                {/* Numéro / icône */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/40 bg-violet-950 text-2xl shadow-lg shadow-violet-900/20 sm:h-20 sm:w-20"
                    whileInView={{ scale: [0.8, 1.05, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                    {index + 1}
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex-1 pb-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                    Étape {step.number}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-violet-100 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-violet-200/70">{step.description}</p>

                  {step.note && (
                    <div className="mt-4 rounded-xl border border-violet-500/20 bg-violet-950/50 px-4 py-3 text-sm text-violet-300/80">
                      💡 {step.note}
                    </div>
                  )}

                  {step.link && (
                    <motion.a
                      href={step.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-xl border border-violet-500/40 bg-violet-600/20 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-400 hover:bg-violet-600/40"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      {step.link.label}
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-2xl border border-violet-500/30 bg-violet-950/40 p-10 text-center backdrop-blur-md"
        >
          <div className="text-4xl">🎉</div>
          <h3 className="mt-4 text-2xl font-bold text-violet-100">C'est tout !</h3>
          <p className="mt-3 text-violet-200/70">
            Tu es prêt à rejoindre ElyriaCraft. Bonne aventure sur le serveur !
          </p>
          <code className="mt-4 block font-mono text-lg font-bold text-violet-400">
            91.197.6.19:23801
          </code>
        </motion.div>
      </div>
    </section>
  );
}
