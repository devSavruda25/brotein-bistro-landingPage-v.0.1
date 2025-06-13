"use client"

import { motion } from "framer-motion"
import { Leaf, Flame, Droplets } from "lucide-react"

export function MealLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
      <div className="text-center">
        {/* Main Bowl Animation */}
        <div className="relative mb-8">
          <motion.div
            className="w-32 h-32 mx-auto relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Bowl Base */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-full border-4 border-gray-300"
              animate={{ rotateY: [0, 10, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Bowl Contents */}
            <div className="absolute inset-2 rounded-full overflow-hidden">
              {/* Base Layer - Quinoa */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-yellow-200 to-yellow-100 rounded-b-full"
                initial={{ height: 0 }}
                animate={{ height: 32 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              {/* Protein Layer */}
              <motion.div
                className="absolute bottom-6 left-2 w-6 h-6 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full"
                initial={{ scale: 0, x: -20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8, ease: "easeOut" }}
              />

              <motion.div
                className="absolute bottom-6 right-2 w-6 h-6 bg-gradient-to-br from-red-300 to-red-400 rounded-full"
                initial={{ scale: 0, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.0, ease: "easeOut" }}
              />

              {/* Vegetables */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-green-400 to-green-500 rounded-full"
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
              />

              <motion.div
                className="absolute bottom-10 left-4 w-3 h-3 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 1.4, ease: "easeOut" }}
              />

              <motion.div
                className="absolute bottom-10 right-4 w-3 h-3 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, delay: 1.6, ease: "easeOut" }}
              />
            </div>

            {/* Steam Animation */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-8 bg-gradient-to-t from-gray-300 to-transparent rounded-full"
                  style={{ left: `${(i - 1) * 8}px` }}
                  animate={{
                    y: [-10, -30],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2 + 1.8,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Floating Nutrition Icons */}
        <div className="relative mb-8">
          <motion.div
            className="absolute -left-16 -top-8"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-green-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-16 -top-8"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Flame className="w-6 h-6 text-red-500" />
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-20 top-8"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Droplets className="w-6 h-6 text-blue-500" />
            </div>
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-4"
        >
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Preparing Your Healthy Meal
          </motion.h2>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Crafting the perfect balance of nutrition and flavor...
          </motion.p>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Macro Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 flex justify-center space-x-6"
        >
          {[
            { label: "Protein", value: "32g", color: "text-red-500" },
            { label: "Carbs", value: "45g", color: "text-yellow-500" },
            { label: "Calories", value: "420", color: "text-blue-500" },
          ].map((macro, index) => (
            <motion.div
              key={macro.label}
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + index * 0.2, ease: "easeOut" }}
            >
              <motion.div
                className={`text-lg font-bold ${macro.color}`}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
              >
                {macro.value}
              </motion.div>
              <div className="text-xs text-gray-500">{macro.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
