import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-linear-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative">

            {/* left section  */}
            <div className="z-40 xl:mb-0 -mb-[20%] ">    
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.4,
                        duration: 1.5,
                    }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold z-10 mb-6">
                    Building Fast <br /> Reliable Results
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5,
                    }}
                    className="text-lg md:text-1xl lg:text-xl text-violet-300 max-w-2xl pb-5 lg:pb-0">
                    I am a passionate web developer with expertise in React and GSAP. I create dynamic and engaging web experiences that captivate users and drive results. With a strong focus on performance and user experience, I strive to deliver high-quality solutions that exceed expectations.
                </motion.p>
            </div>

            {/* Right Section  */}
            <Spline 
            className='absolute xl:right-[-30%] right-0 top-[-20%] lg:top-0 ' 
            scene="https://prod.spline.design/ZJRaamaGcLM8x-gJ/scene.splinecode" />

            


        </section>
    )
}

export default HeroSection