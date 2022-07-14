import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const HAND_WAVE_UNIT = 8
  return (
      <motion.div className="main"
        key={'homepg'}
      >
        <motion.div
          className={"container"}
        >
          <div className="row">
            <motion.h1
              className='centered very_big_text'
              animate={{ rotate: [null, HAND_WAVE_UNIT, 2*HAND_WAVE_UNIT, HAND_WAVE_UNIT, 0, -HAND_WAVE_UNIT, -2*HAND_WAVE_UNIT, -HAND_WAVE_UNIT, 0] }}
              transition={{ ease: 'linear', duration: 1.5, repeat: Infinity, repeatDelay: 5, delay: 2 }}
            > 👋</motion.h1>
            <motion.h1
              className='centered very_big_text'
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 70, repeat: Infinity }}
            > 🌎 </motion.h1>
          </div>
          <hr className='break_line'></hr>
          <h1 className='big_text'> As an: </h1>
          <a className='centered medium_text'>🦝 adventure seeker 🦝 <br></br>🥔 extroverted introvert 🥔<br></br> 🤓 engineering and computer science graduate 🤓</a>
          <br></br>
          <a className='centered big_text'> I am interested in exploring diverse environments, seeking novel experiences, and improving accessibility through automation. <br></br><br></br> Lets collaborate on more ways to better our world!</a>
        </motion.div>
      </motion.div >
  )
}