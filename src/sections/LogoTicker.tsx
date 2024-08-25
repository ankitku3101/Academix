'use client'
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return <div>
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div className='flex gap-14 flex-none pr-14'
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            <div className='logo-ticker'>Biotechnology and Bioinformatics</div>
            <div className='logo-ticker'>Advanced AI and Machine Learning</div>
            <div className='logo-ticker'>Cybersecurity and Data Protection</div>
            <div className='logo-ticker'>Robotics and Automation</div>
            
            <div className='logo-ticker'>Biotechnology and Bioinformatics</div>
            <div className='logo-ticker'>Advanced AI and Machine Learning</div>
            <div className='logo-ticker'>Cybersecurity and Data Protection</div>
            <div className='logo-ticker'>Robotics and Automation</div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>;
};
