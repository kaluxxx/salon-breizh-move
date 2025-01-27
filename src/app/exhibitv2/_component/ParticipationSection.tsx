"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ParticipationForm from "@/app/exhibit/_component/ParticipationForm"
import { Check } from "lucide-react"

export default function ParticipationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
      <section ref={ref} className="py-20 bg-gray-100 text-black" id="pre-register">
        <div className="container mx-auto px-4">
          <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
              >
                Participez à EUROMOVE
              </motion.h2>
              <motion.p className="text-lg mb-4" variants={itemVariants}>
                Profitez de nos formules attractives dès <span className="font-bold">1 928€</span> pour un stand de{" "}
                <span className="font-bold">18m²</span>.
              </motion.p>
              <motion.div className="bg-white p-4 rounded-lg text-center mb-6" variants={itemVariants}>
                <p className="text-xl font-semibold">Exposez sur 18m² pour seulement 1 928€</p>
              </motion.div>
              <motion.ul
                  className="space-y-2 mb-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
              >
                <motion.li className="flex items-center" variants={itemVariants}>
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  Un emplacement adapté à vos besoins
                </motion.li>
                <motion.li className="flex items-center" variants={itemVariants}>
                  <Check className="w-5 h-5 mr-2 text-green-500" />
                  Services inclus (électricité, mobilier de base)
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg" variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Réservez votre stand</h3>
              <ParticipationForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

