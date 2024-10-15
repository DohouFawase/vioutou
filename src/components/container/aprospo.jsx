import { motion } from "framer-motion";
import React from "react";

function slidedow(delay) {
  return {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      type: "spring",
      damping: 300,
      transition: {
        duration: 1.5,
        delay: delay,
      },
    },
  };
}
export default function Aprospo() {
  return (
    <div>
      <div className="mt-12">
        <div className="text-center py-4 mb-6">
          <motion.h1
            variants={slidedow(3)}
            initial="initial"
            whileInView="animate"
            className="font-bold text-3xl "
          >
            {" "}
            C'est qui Vioutou?
          </motion.h1>
        </div>
        <div className="py-5 mt-16">
          <div className="grid md:grid-cols-2 items-center gap-6 overflow-hidden">
            <div className="overflow-hidden">
              <motion.img
                variants={slidedow(0.1)}
                initial="initial"
                whileInView="animate"
                src="/honoré.jpg"
                alt=""
                className="h-[550px] w-full fit-cover"
              />
            </div>
            <div className="space-y-4 overflow-hidden">
              <motion.p
                variants={slidedow(0.1)}
                initial="initial"
                whileInView="animate"
              >
                De son vrai nom{" "}
                <span className="font-black text-blue-500">
                  Honoré Perscadors{" "}
                </span>{" "}
                Originaire de Porto-Novo, il est un communicateur et promoteur
                événementiel actif sur les réseaux sociaux, notamment sur
                Facebook, où il rassemble une communauté de plus de{" "}
                <span className="underline font-bold"> 196.OOO followers</span>.
                Il a été nominé au prix du "Meilleur créateur de contenu" par{" "}
                <span className="underline font-bold">Eslase Awward</span> à
                Parakou,
              </motion.p>
              <div className="space-y-2">
                <motion.p 
                 variants={slidedow(0.2)}
                 initial="initial"
                 whileInView="animate"
                className="text-xl font-bold">
                  {" "}
                  En tant qu'ambassadeur de marques, Honoré Pescardos représente
                  des entreprises de renom telles que :
                </motion.p>
                <ul className="space-y-3">
                  <motion.li
                   variants={slidedow(0.2)}
                   initial="initial"
                   whileInView="animate"
                  >Maxis Bénin</motion.li>
                  <motion.li
                   variants={slidedow(0.3)}
                   initial="initial"
                   whileInView="animate"
                  >Bet click</motion.li>
                  <motion.li
                   variants={slidedow(0.4)}
                   initial="initial"
                   whileInView="animate"
                  >888 star</motion.li>
                  <motion.li
                   variants={slidedow(0.5)}
                   initial="initial"
                   whileInView="animate"
                  >Luxury Suites</motion.li>
                </ul>
              </div>
              <motion.p
               variants={slidedow(0.6)}
               initial="initial"
               whileInView="animate"
              >
                De plus, il est un influenceur signé par la maison de
                communication de M. Richard Flash, sous la bannière de Central
                Company.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
