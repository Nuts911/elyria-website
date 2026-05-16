import { motion } from "framer-motion";

const discordUrl = "https://discord.gg/EHCtPaCfMe";
const stats = [
  { number: "500+", label: "Membres Actifs" },
  { number: "24/7", label: "Support" },
  { number: "Événements", label: "Réguliers" },
];

export default function PremiumDiscord() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-fuchsia-950/10 to-black" />
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="font-orbitron text-4xl font-black tracking-tight text-violet-100 sm:text-6xl">
            REJOINS LA COMMUNAUTÉ
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-fuchsia-500 to-violet-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-center text-lg text-violet-100/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Serveur, annonces, entraide, recrutement et support sur Discord
        </motion.p>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <motion.a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-2xl font-bold uppercase tracking-wider text-white shadow-2xl"
            whileHover={{ scale: 1.15, y: -8, boxShadow: "0 0 60px rgba(99, 102, 241, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100"
              whileHover={{ opacity: 1 }}
            />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
            </svg>
            <span className="relative z-10">Discord</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-violet-500/30 bg-violet-950/40 p-6 text-center backdrop-blur-md"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(167, 139, 250, 0.2)" }}
            >
              <motion.div
                className="font-orbitron text-3xl font-bold text-violet-400"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.9 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="mt-1 text-sm text-violet-200/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
