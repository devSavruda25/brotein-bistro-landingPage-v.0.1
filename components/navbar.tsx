"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FranchiseModal } from "@/components/franchise-modal"
import { cn } from "@/lib/utils"
import Image from 'next/image';
import logo from "@/public/logo.png"; // Adjust the path as necessary
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFranchiseModalOpen, setIsFranchiseModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "Why Us" },
    { href: "#plans", label: "Meal Plans" },
    { href: "#locations", label: "Locations" },

  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center justify-center">
                  <Image
                    src="/Brotein Bistro.png"
                    alt="Brotein Bistro Logo"
                    width={150} // increased size
                    height={150}
                    loading="lazy"
                    className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
                  />
                </div>
               
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "relative font-medium transition-colors duration-200 hover:text-red-500 group",
                      isScrolled ? "text-gray-700" : "text-white/90",
                    )}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  onClick={() => setIsFranchiseModalOpen(true)}
                  className="bg-red-500 hover:bg-black text-white transition-all duration-300 hover:shadow-lg hover:shadow-black-500/25"
                >
                  Get Franchise
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors duration-200",
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-gray-700 font-medium hover:text-red-500 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-red-500 text-red-500 hover:bg-black hover:text-white"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Order Now
                    </Button>

                    <Button
                      onClick={() => {
                        setIsFranchiseModalOpen(true)
                        setIsOpen(false)
                      }}
                      className="w-full bg-red-500 hover:bg-black text-white"
                    >
                      Get Franchise
                    </Button>
                  </div>

                  {/* Contact Info in Mobile Menu */}
                  <div className="pt-4 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-black" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-black" />
                      <span>CCM & Gangapur Road, Nashik</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-black" />
                      <span>Open Daily: 7 AM - 11 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Franchise Modal */}
      <FranchiseModal isOpen={isFranchiseModalOpen} onClose={() => setIsFranchiseModalOpen(false)} />
    </>
  )
}
