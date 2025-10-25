import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference, onRemove, onTagClick }) {
  const getTagColor = (color) => {
    const colors = {
      blue: "bg-blue-900/50 text-blue-300",
      green: "bg-green-900/50 text-green-300",
      purple: "bg-purple-900/50 text-purple-300",
      red: "bg-red-900/50 text-red-300",
    };
    return colors[color] || "bg-gray-800 text-gray-300";
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{
        scale: 1.05,
        rotate: 0,
        cursor: "grabbing",
        boxShadow: "0 0 25px rgba(59,130,246,0.3)",
      }}
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 100,
        bounceDamping: 20,
        power: 0.2,
      }}
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
        rotate: 2,
        transition: {
          duration: 0.3,
        },
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 25,
        },
      }}
      className="relative w-72 h-80 shrink-0 rounded-2xl bg-zinc-900/90 border border-zinc-700/50 px-6 py-8 overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all cursor-grab active:cursor-grabbing backdrop-blur-sm flex flex-col"
    >
      <div className="flex-1">
        <motion.div
          className="flex items-start justify-between mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span
            className="text-4xl filter drop-shadow-lg"
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: {
                duration: 0.5,
                rotate: {
                  repeat: 0,
                  duration: 0.5,
                },
              },
            }}
          >
            {data.icon}
          </motion.span>
          <motion.span
            className="text-sm text-gray-400 font-medium"
            whileHover={{
              scale: 1.1,
              color: "#60A5FA",
            }}
          >
            {data.createdAt}
          </motion.span>
        </motion.div>
        <motion.h3
          className="text-lg font-semibold text-gray-100 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {data.desc}
        </motion.h3>
      </div>
      <div className="footer w-full">
        <motion.div
          className="flex justify-between items-center py-3 px-6 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              x: 3,
              transition: { type: "spring", stiffness: 400 },
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <FaRegFileAlt className="text-gray-400" />
            </motion.div>
            <h5 className="text-sm text-gray-300 font-medium">
              {data.filesize}
            </h5>
          </motion.div>
          <motion.span
            whileHover={{
              scale: 1.15,
              backgroundColor: "#374151",
              boxShadow: "0 0 10px rgba(59,130,246,0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={onRemove}
            className="w-8 h-8 bg-zinc-800 rounded-full flex justify-center items-center cursor-pointer border border-zinc-600/50 transition-colors"
          >
            <motion.div
              whileHover={{
                rotate: data.close ? 180 : 0,
                transition: { duration: 0.3 },
              }}
            >
              {data.close ? (
                <IoClose className="text-gray-400" />
              ) : (
                <LuDownload size="1.1em" className="text-gray-400" />
              )}
            </motion.div>
          </motion.span>
        </motion.div>
        <motion.div
          className={`tag w-full py-3 ${getTagColor(
            data.tag.tagColor
          )} flex justify-center items-center cursor-pointer font-medium`}
          onClick={onTagClick}
          whileHover={{
            y: data.tag.isOpen ? 0 : -5,
            scale: 1.02,
          }}
          animate={{
            y: data.tag.isOpen ? 0 : 40,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        >
          <motion.h3
            className="text-sm font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {data.tag.text}
          </motion.h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Card;
