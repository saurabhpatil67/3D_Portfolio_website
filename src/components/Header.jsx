import React from "react";
import { motion, spring, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  // toggle the menu open / close /
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // state to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactFrom = () => setContactFormOpen(true);
  const closeContactFrom = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* logo name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring", //use spring animation
            stiffness: 100, //higher stifness meanns element move faster like 300
            damping: 25, //control how much animmation slow down at end
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-linear-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            S
          </div>
          <span className="font-bold text-xl bg-linear-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent">
            SaurabhPatil
          </span>
        </motion.div>

        {/* desktop navigation  */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100, //higher stifness meanns element move faster like 300
                damping: 20, //control how much animmation slow down at end
                delay: 0.7 + index * 0.2,
              }}
              className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
              href="#"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* social icon : desktop  */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 "
            href="#"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 "
            href="#"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 "
            href="#"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* hire me button  */}

        <motion.button
          onClick={openContactFrom}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="hidden lg:block px-4 py-2 rounded-xl bg-linear-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
        >
          Hire Me
        </motion.button>

        {/* mobile menu button  */}

        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6 cursor-pointer" />
            ) : (
              <FiMenu className="h-6 w-6 cursor-pointer" />
            )}
          </motion.button>
        </div>
      </div>

      {/* mobile menu  */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg space-y-5 px-4 py-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <a
                onClick={toggleMenu}
                key={index}
                className="text-gray-300 font-medium py-2"
                href="#"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5 items-center justify-center">
            <a href="#" className="h-5 w-5 text-gray-300">
              <FiGithub />
            </a>
            <a href="#" className="h-5 w-5 text-gray-300">
              <FiTwitter />
            </a>
            <a href="#" className="h-5 w-5 text-gray-300">
              <FiLinkedin />
            </a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              openContactFrom();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-linear-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form  : True tabhi form open hoga*/}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* inside main div  */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 0.8,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-400">
                  Get In Touch
                </h1>
                <button onClick={closeContactFrom}>
                  <FiX className="h-5 w-5 text-gray-400 cursor-pointer font-extrabold" />
                </button>
              </div>

              {/* input field  */}
              <form>
                {/* name  */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-md font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                {/* email  */}
                <div>
                  <label
                    htmlFor="email"
                    className="block my-2 text-md font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                {/* message  */}
                <div>
                  <label
                    htmlFor="message"
                    className="block my-2 text-md font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How Can I Help You?"
                    id="message"
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.85 }}
                  className="w-full px-4 py-2 mt-3 cursor-pointer bg-linear-to-r from-violet-700 to-violet-400 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-md hover:shadow-violet-600/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
