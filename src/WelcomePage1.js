import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import speakerImg from "./assets/img.jpg"; // <-- your image here

export default function WelcomePage1() {
  const navigate = useNavigate();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 via-purple-600 to-indigo-700 px-6 relative overflow-hidden"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Back Button */}
      <motion.div
        className="absolute top-6 left-6"
        initial={{ opacity: 0, rotate: -360, scale: 0 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white hover:text-gray-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowLeft />
          <span>Back</span>
        </motion.button>
      </motion.div>

      {/* Content + Image layout */}
      <motion.div
        className="bg-black bg-opacity-50 p-8 rounded-lg max-w-6xl text-white shadow-2xl flex flex-col md:flex-row gap-8 items-center"
        initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Person Image */}
        <motion.img
          src={speakerImg}
          alt="Person speaking"
          className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl font-bold mb-6 text-center md:text-left"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Serap with Love
          </motion.h1>

          {[
            "I am Serap – a space holder, guide, and wayfinder back to your true self.",
            "My own journey began with many questions, deep processes, and the desire to leave behind the layers of merely functioning.",
            "Today, I create spaces for those who feel: There is more. More depth. More truth. More me.",
            "Through conscious presence, energy work, breath, yoga, EFT, and intuitive guidance, I support you in remembering – who you truly are.",
            "Serap with Love is not a method. It is a reconnection. Still. Authentic. Powerful.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="mb-4"
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {text}
            </motion.p>
          ))}

          {/* Pulsing Buttons */}
          <div className="flex gap-4 mt-6">
            <motion.button
              className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-md"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px #ec4899",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px #ec4899",
                  "0 0 15px #ec4899",
                  "0 0 0px #ec4899",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Learn more about me
            </motion.button>
            <motion.button
              className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px #22c55e",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0px #22c55e",
                  "0 0 15px #22c55e",
                  "0 0 0px #22c55e",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              Book a session
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
