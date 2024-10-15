import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

function fadeIn() {
    return {
        initial:{
          y:"-100%",
          opacity:0
        },
        animate: {
          y:0,
          opacity:1,
       
          type: "spring", 
          damping: 300,
          transition:{
            duration:1,
            delay:1
          }
        }
    }
}

function slidedow(delay) {
    return {
        initial:{
          y:"100%",
          opacity:0
        },
        animate: {
          y:0,
          opacity:1,
       
          type: "spring", 
          damping: 300,
          transition:{
            duration:1.5,
            delay:delay
          }
        }
    }
}
export default function Head() {
  return (
    <div className='py-16 '>
      <div className="flex justify-center items-center flex-col text-center space-y-4">
          <motion.h1
          variants={fadeIn()}
          initial="initial"
          whileInView="animate"
          className='text-2xl font-[800] tracking-wide leading-relaxed'

          >Honoré Perscadors , l'Étoile qui Éclaire les Marques et les Talents</motion.h1>
          <motion.h2
            variants={slidedow(1.5)}
            initial="initial"
            whileInView="animate"
           className='font-medium'>Ambassadeur de renommée International, Honnoré incarne la passion, l'excellence et l'innovation. <br /> Découvrez son parcours et ses collaborations avec les marques les plus influentes.</motion.h2>

           <motion.div
           variants={slidedow(2)}
           initial="initial"
           whileInView="animate"
           className="flex flex-wrap justify-center gap-4 items-center"> 
            <NavLink className={"bg-blue-800  px-4 p-2 rounded-lg hover:bg-blue-500 font-bold"}>
                A la découverte de Vioutou
            </NavLink>
            <a className='border-blue-800 border  px-4 p-2 rounded-lg hover:bg-blue-800 font-bold' href="https://wa.me/+22967280018">Contactez pour des partenariats</a>
           
           </motion.div>
      </div>
    </div>
  )
}
