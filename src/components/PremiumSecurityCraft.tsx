import { motion } from "framer-motion";

const features = [
  {
    icon: "🛡️",
    title: "Protections Avancées",
    description: "Systèmes de sécurité modernes pour protéger tes constructions",
  },
  {
    icon: "🔒",
    title: "Sécurité Renforcée",
    description: "Contrôle d'accès et alarmes pour une défense optimale",
  },
  {
    icon: "💎",
    title: "Économie Sécurisée",
    description: "Échanges en toute sécurité dans l'univers d'Elyria",
  },
];

export default function PremiumSecurityCraft() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />
      
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="font-orbitron text-4xl font-black tracking-tight text-violet-100 sm:text-6xl">
            MOD OBLIGATOIRE
          </h2>
          <motion.div
            className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-violet-500 to-fuchsia-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-orbitron text-3xl font-bold text-violet-400 sm:text-5xl">
            SECURITYCRAFT
          </span>
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-3xl text-center text-lg text-violet-100/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Installe SecurityCraft avant de te connecter pour profiter de toutes les protections 
          et mécaniques avancées du serveur. Sécurise ta base avec des systèmes modernes 
          et participe à l'économie sécurisée d'ElyriaCraft.
        </motion.p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-violet-500/30 bg-violet-950/40 p-8 backdrop-blur-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(167, 139, 250, 0.3)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 transition-opacity group-hover:opacity-100"
                whileHover={{ opacity: 1 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="mb-4 text-5xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring" }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-orbitron text-xl font-bold text-violet-200">{feature.title}</h3>
                <p className="mt-2 text-violet-100/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
