"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView as useInViewHook } from "react-intersection-observer"
import hero from "@/public/hero.jpg"
import logo from "@/public/Brotein Bistro.png"
import footerlogo from "@/public/logo.png"

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Flame,
  Globe,
  Instagram,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
  Clock,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  Loader2,
  Sparkles,
  Heart,
  Award,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { MealLoader } from "@/components/meal-loader"
import dish1 from "@/public/pizza.jpg"
import dish2 from "@/public/wrap1.jpg"
import dish3 from "@/public/burgar.jpg"
import dish4 from "@/public/creamy makhani meal bowl.jpg"
import { FranchiseModal } from "@/components/franchise-modal"

import maleuser from "@/public/maleuser.png"
import femaleuser from "@/public/femaleuser.png"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentDish, setCurrentDish] = useState(0)
  const [currentReview, setCurrentReview] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false)


  const heroRef = useRef(null)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 4 seconds loading

    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Enhanced intersection observers
  const [heroInViewRef, heroInView] = useInViewHook({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInViewHook({ triggerOnce: false, threshold: 0.2 })
  const [dishesRef, dishesInView] = useInViewHook({ triggerOnce: false, threshold: 0.2 })
  const [franchiseRef, franchiseInView] = useInViewHook({ triggerOnce: false, threshold: 0.2 })
  const [reviewsRef, reviewsInView] = useInViewHook({ triggerOnce: false, threshold: 0.2 })
  const [plansRef, plansInView] = useInViewHook({ triggerOnce: false, threshold: 0.2 })
  const [mapRef, mapInView] = useInViewHook({ triggerOnce: false, threshold: 0.2 })

  const dishes = [
    {
      name: "Makhani Paneer Tikka Pizza",
      Image: dish1,
      description: "Pizza base with makhani sauce, paneer, onions, and capsicum — available in 8 / 10 inch sizes.",
      macros: { protein: "19/32g", carbs: "45/55g" },
      popular: true,
    },
    {
      name: "Hummus and Chicken Protein Wrap",
      Image: dish2,
      description: "Tortilla wrap filled with grilled chicken, hummus, roasted pappads, paprika, and pickled onion.",
      macros: { protein: "33g", carbs: "29g" },
      popular: true,
    },
    {
      name: "Grilled Sriracha Paneer Burger",
      Image: dish3,
      description: "Burger with grilled paneer, sriracha, mayo, onions, lettuce, and tomatoes.",
      macros: { protein: "27g", carbs: "26g" },
      popular: true,
    },
    {
      name: "Creamy Makhani Meal Bowl",
      Image: dish4,
      description: "Rice bowl with creamy makhani gravy, vegetables, salad, and chicken.",
      macros: { protein: "30g", carbs: "45g" },
      popular: true,
    },
  ]

  const reviews = [
    {
      name: "Harshwardhan Chauhan",
      Image: maleuser,
      rating: 5,
      text: "Tried the tandoori chicken sandwich, pink sauce chicken pasta, and hot chocolate. Sandwich and pasta were filling and flavorful; pasta had the perfect veggie-chicken balance. Hot chocolate was a bit watery. Fast service, cozy vibes, and totally worth the price. Must visit!",
      fitnessTag: "Happy Customer",
      verified: true,
    },
    {
      name: "Anuja Bafna",
      Image: femaleuser,
      rating: 5,
      text: "The food was super delicious. Didn't feel like a diet meal. It was too yummy and filling. Service was great and ambience to really warm and cozy.",
      fitnessTag: "Happy Customer",
      verified: true,
    },
    {
      name: "Hilda Pereira",
      Image: femaleuser,
      rating: 4,
      text: "A diverse, healthy, and tasty menu with hygienic prep. Polite staff, great ambience with fitness quotes, a cozy library, and fun indoor games. A perfect spot to relax and enjoy!",
      fitnessTag: "Happy Customer",
      verified: true,
    },
  ]

  const plans = [
    {
      name: "Standard Plan",
      price: "₹14,999",
      duration: "40 Days",
      meals: "60 Meals",
      features: [
        "4 Meal Options (choose One)*",
        "100g Protein Quantity",
        "Personal nutrition consultation",
        "Meal Option(Veg / Non-Veg)",
        "Meal plan flexibility",
        "Nutrition guide",
      ],
      popular: false,
      savings: "2 Meals/day",
    },
    {
      name: "Base Plan",
      price: "₹6,499",
      duration: "40 Days",
      meals: "30 Meals",
      features: [
        "4 Meal Options (choose One)*",
        "100g Protein Quantity",
        "Personal nutrition consultation",
        "Meal Option(Veg / Non-Veg)",
        "Meal plan flexibility",
        "Nutrition guide",
      ],
      popular: true,
      savings: "1 Meal/day",
    },
    {
      name: "Custom Plan",
      price: "₹",
      duration: "Monthly",
      meals: "0 Meals",
      features: [
        "4 Meal Options (choose One)*",
        "Customize Meal ",
        "Customize Protein",
        "Meal Option(Veg / Non-Veg)",
        "Meal plan flexibility",
        "Nutrition guide",

      ],
      popular: false,
      savings: null,
    },
  ]

  const aboutFeatures = [
    {
      icon: Flame,
      title: "High-Protein Meals",
      description: "Every dish contains 25-35g of premium protein to fuel your fitness goals",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Global Flavors",
      description: "International cuisines adapted for fitness enthusiasts with authentic taste",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Nutrition-Transparent Menu",
      description: "Complete macro breakdown for every dish - no hidden ingredients",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Muscle-Friendly Recipes",
      description: "Scientifically crafted recipes optimized for muscle building and recovery",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  // Enhanced auto-rotate reviews with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviews.length])

  // Enhanced auto-rotate dishes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDish((prev) => (prev + 1) % dishes.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [dishes.length])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2500))

    setIsSubmitting(false)
    setFormSubmitted(true)

    // Reset form after 4 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 4000)
  }

  const nextDish = () => {
    setCurrentDish((prev) => (prev + 1) % dishes.length)
  }

  const prevDish = () => {
    setCurrentDish((prev) => (prev - 1 + dishes.length) % dishes.length)
  }

  // Floating elements animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  if (isLoading) {
    return <MealLoader />
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <Navbar />

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-green-100 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-orange-100 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroInViewRef} className="absolute inset-0 z-0">
          <motion.div style={{ scale: heroScale, opacity: heroOpacity, y: heroY }} className="relative h-full w-full">
            <Image
              src={hero}
              alt="Protein bowl background"
              fill
              className="object-cover"
              rel="preload"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          </motion.div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-4"
            >
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Nashik's #1 Fitness Café
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fuel Your Fitness.
              <br />
              <motion.span
                className="text-red-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Bite by Bite.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Nashik's premier protein-rich café designed for fitness enthusiasts and health-conscious food lovers
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center items-center">

                {/* Explore Menu Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Link href="/menu" passHref>
                  <Button
                    size="lg"
                    className="bg-red-500 hover:bg-black text-white rounded-full px-6 py-3 text-lg w-full group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-transparent hover:border-white hover:border-2"
                  >
                    <span className="relative z-10">Explore Menu</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button></Link>
                </motion.div>

                {/* Order Now Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  
                  <Button
                    size="lg"
                    className="bg-transparent border border-white hover:bg-red-500 text-white hover:border-transparent rounded-full px-6 py-3 text-lg w-full group relative overflow-hidden transition-all duration-300"
                  >
                    <Phone className="w-6 h-6 mr-2" />
                    <span className="relative z-10">Order Now</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

              </div>
            </motion.div>


            {/* Stats Counter */}
            <motion.div
              className="flex justify-center space-x-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { number: "100K+", label: "Happy Customers", icon: Heart },
                { number: "150+", label: "Protein Dishes", icon: Award },
                { number: "2", label: "Locations", icon: MapPin },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.4 + index * 0.2, type: "spring" }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-2xl font-bold text-white">{stat.number}</span>
                  </div>
                  <span className="text-sm text-white/70">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced scroll indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/70 cursor-pointer"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
              <motion.div
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
            <p className="text-xs mt-2 text-center">Scroll to explore</p>
          </motion.div>
        </motion.div> */}
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-20 bg-white relative overflow-hidden" id="about">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -translate-y-32 translate-x-32 opacity-50" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full mb-4"
            >
              <Sparkles className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-700 font-medium">Why Choose Us</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="text-red-500">Brotein Bistro?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing healthy eating in Nashik with scientifically-crafted, delicious meals that fuel your
              fitness journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/p/AF1QipO3P2SxCeI_H13epNvsRHGO0f6RROVCnBspH-zo=s812-k-no"
                  alt="Brotein Bistro interior"
                  width={800}
                  height={500}
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center text-sm font-medium text-gray-800">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    #1 Rated in Nashik
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={aboutInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-red-500"
                    initial={{ opacity: 0 }}
                    animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1 }}
                  >
                    100K+
                  </motion.div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                      >
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="space-y-8">
              {aboutFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Gradient background on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div className="flex items-start space-x-4 relative z-10">
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center shadow-lg`}
                          >
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Signature Dishes Carousel */}
      <section ref={dishesRef} className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full -translate-y-48 -translate-x-48 opacity-30" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={dishesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={dishesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-orange-50 px-4 py-2 rounded-full mb-4"
            >
              <Flame className="h-4 w-4 text-orange-500 mr-2" />
              <span className="text-orange-700 font-medium">Our Specialties</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Signature <span className="text-red-500">Dishes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each dish is crafted with precision to deliver optimal nutrition without compromising on taste
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentDish * 100}%)` }}
              >
                {dishes.map((dish, index) => (
                  <div key={dish.name} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={dishesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
                    >
                      <div className="relative h-80 overflow-hidden">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                          <Image src={dish.Image} alt={dish.name} fill className="object-cover mt-" loading="lazy" />
                        </motion.div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Badges */}
                        <div className="absolute top-4 right-4 space-y-2">

                          {dish.popular && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.5, type: "spring" }}
                            >
                              <Badge className="bg-orange-500 text-white shadow-lg">
                                <Sparkles className="mr-1 h-3 w-3" />
                                Popular
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <div className="p-8">
                        <motion.h3
                          className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {dish.name}
                        </motion.h3>

                        <motion.p
                          className="text-gray-600 mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {dish.description}
                        </motion.p>

                        <div className="flex justify-between items-center">
                          <div className="flex space-x-4">
                            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                              <div className="text-lg font-bold text-red-500">{dish.macros.protein}</div>
                              <div className="text-xs text-gray-500">Protein</div>
                            </motion.div>
                            <motion.div className="text-center" whileHover={{ scale: 1.1 }}>
                              <div className="text-lg font-bold text-yellow-500">{dish.macros.carbs}</div>
                              <div className="text-xs text-gray-500">Carbs</div>
                            </motion.div>
                          </div>

                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <a
                              href="https://broteinbistro.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-red-500 hover:bg-black rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                                Order Now
                              </Button>
                            </a>

                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced navigation buttons */}
            <motion.button
              onClick={prevDish}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </motion.button>

            <motion.button
              onClick={nextDish}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 hover:scale-110 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </motion.button>

            {/* Enhanced dots indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {dishes.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentDish(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentDish ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400",
                  )}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Customer Reviews */}
      <section ref={reviewsRef} className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full translate-y-48 translate-x-48 opacity-30" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={reviewsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full mb-4"
            >
              <Heart className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-purple-700 font-medium">Customer Love</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-red-500">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who've transformed their fitness journey with us
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-30" />

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <motion.div
                          className="relative mr-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="h-16 w-16 rounded-full overflow-hidden ring-4 ring-green-100">
                            <Image
                              src={reviews[currentReview].Image || "/placeholder.svg"}
                              alt={reviews[currentReview].name}
                              width={64}
                              height={64}
                              loading="lazy"
                              className="object-cover"
                            />
                          </div>
                          {reviews[currentReview].verified && (
                            <motion.div
                              className="absolute -bottom-1 -right-1 bg-red-500 rounded-full p-1"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.3, type: "spring" }}
                            >
                              <CheckCircle className="h-3 w-3 text-white" />
                            </motion.div>
                          )}
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-bold">{reviews[currentReview].name}</h4>
                          <Badge variant="outline" className="mt-1 border-green-200 text-red-700">
                            <Users className="mr-1 h-3 w-3" />
                            {reviews[currentReview].fitnessTag}
                          </Badge>
                          <div className="flex mt-2">
                            {[...Array(reviews[currentReview].rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                              >
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <motion.blockquote
                        className="text-lg text-gray-600 italic leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        "{reviews[currentReview].text}"
                      </motion.blockquote>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-3">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentReview ? "bg-red-500 scale-125" : "bg-gray-300 hover:bg-gray-400",
                  )}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Meal Plans */}
      <section id="plans" ref={plansRef} className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-50 rounded-full -translate-y-32 -translate-x-32 opacity-50" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-yellow-50 px-4 py-2 rounded-full mb-4"
            >
              <Award className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-yellow-700 font-medium">Flexible Plans</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-red-500">Meal Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible plans designed to fit your lifestyle and fitness goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card
                    className={cn(
                      "overflow-hidden transition-all duration-500 hover:shadow-2xl relative",
                      plan.popular
                        ? "border-green-500 shadow-xl scale-105 ring-2 ring-green-200"
                        : "shadow-lg hover:shadow-xl",
                    )}
                  >
                    {plan.popular && (
                      <motion.div
                        className="absolute top-0 left-0 right-0"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 text-sm font-medium relative overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                          />
                          <span className="relative z-10 flex items-center justify-center">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Most Popular Choice
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {plan.savings && (
                      <motion.div
                        className="absolute top-4 right-4 z-10"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        <Badge className="bg-orange-500 text-white shadow-lg">{plan.savings}</Badge>
                      </motion.div>
                    )}

                    <CardContent className={cn("p-8 relative", plan.popular ? "pt-16" : "")}>
                      {/* Background gradient for popular plan */}
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-30" />
                      )}

                      <div className="relative z-10">
                        <div className="text-center mb-8">
                          <motion.h3
                            className="text-2xl font-bold mb-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={plansInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                          >
                            {plan.name}
                          </motion.h3>

                          <motion.div
                            className="text-4xl font-bold text-red-500 mb-1"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={plansInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            {plan.price}
                          </motion.div>

                          <div className="text-gray-500">
                            {plan.duration} • {plan.meals}
                          </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={plansInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                            >
                              <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                                <CheckCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                              </motion.div>
                              <span className="text-gray-600">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>

                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Find Us Map Section */}
      <section id="locations" ref={mapRef} className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full translate-y-48 -translate-x-48 opacity-30" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mapInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full mb-4"
            >
              <MapPin className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-green-700 font-medium">Visit Us</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find <span className="text-red-500">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our locations in Nashik for the ultimate protein-rich dining experience
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                name: "CCM Branch",
                address: "College Road, Near CCM, Nashik - 422005",
                phone: "+91 99229 69673",
                hours: "11:00 AM - 01:00 PM",
                mapSrc:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14254.688675337753!2d73.75082054786162!3d20.00102625245205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb207349b67f%3A0x198e4953e544c7e2!2sBrotein%20Bistro%20(Best%20Healthy%20Food%20Restaurant%20In%20Nashik)!5e1!3m2!1sen!2sin!4v1749645505181!5m2!1sen!2sin",
              },
              {
                name: "Gangapur Road Branch",
                address: "Gangapur Road, Near City Center Mall, Nashik - 422013",
                phone: "+91 99229 69673",
                hours: "9:00 AM - 10:30 PM",
                mapSrc:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14254.688675337753!2d73.75082054786162!3d20.00102625245205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebed1e7e2049%3A0x506dc7717525b02a!2sBrotein%20Bistro%20CCM%20(Best%20Healthy%20Food%20In%20Nashik)!5e1!3m2!1sen!2sin!4v1749645525421!5m2!1sen!2sin",
              },
            ].map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 * index }}
                className="flex flex-col lg:flex-row gap-6 items-stretch"
              >
                {/* Map */}
                <div className="flex-1 h-[300px] sm:h-[237px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src={location.mapSrc}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0 rounded-2xl"
                  />
                </div>


                {/* Card */}
                <div className="flex-1">
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group h-full">
                    <CardContent className="p-6 relative overflow-hidden h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <motion.h3
                          className="text-xl font-bold mb-4 flex items-center group-hover:text-red-600 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <MapPin className="mr-2 text-red-500" />
                          {location.name}
                        </motion.h3>
                        <div className="space-y-3 text-gray-600">
                          <motion.p whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            {location.address}
                          </motion.p>
                          <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Phone className="mr-2 h-4 w-4 text-red-500" />
                            <span>{location.phone}</span>
                          </motion.div>
                          <motion.div className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Clock className="mr-2 h-4 w-4 text-red-500" />
                            <span>Open Daily: {location.hours}</span>
                          </motion.div>
                        </div>
                        {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            variant="outline"
                            className="mt-4 w-full group-hover:border-red-500 group-hover:text-red-600 transition-all duration-300"
                          >
                            Get Directions
                          </Button>
                        </motion.div> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/20 rounded-full -translate-y-48 translate-x-48" />

        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
                <Image src={footerlogo} alt="Brotein Bistro Logo" width={100} height={100} loading="lazy" />
              </motion.div>
              <p className="text-gray-400 mb-6">
                Fuel your fitness journey with delicious, protein-rich meals crafted for health-conscious food lovers in
                Nashik.
              </p>

              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/broteinbistro_nashik?igsh=bjV0Nnp3cjJzMTFx", color: "hover:bg-pink-500" },

                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={social.href}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={() => {
                      const section = document.getElementById("about");
                      if (section) section.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-left text-gray-400 hover:text-white transition-colors duration-200 w-full"
                  >
                    Why Us
                  </button>
                </motion.li>
                <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={() => setIsFranchiseOpen(true)}
                    className="text-left text-gray-400 hover:text-white transition-colors duration-200 w-full"
                  >
                    Franchise
                  </button>
                </motion.li>
              </ul>



            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold mb-6">Contact Info</h4>
              <ul className="space-y-3">
                <motion.li className="flex items-center text-gray-400" whileHover={{ x: 5 }}>
                  <MapPin className="h-4 w-4 mr-3 text-red-400" />
                  Nashik, Maharashtra
                </motion.li>
                <motion.li className="flex items-center text-gray-400" whileHover={{ x: 5 }}>
                  <Phone className="h-4 w-4 mr-3 text-red-400" />
                  +91 99229 69673
                </motion.li>
                <motion.li className="flex items-center text-gray-400" whileHover={{ x: 5 }}>
                  <Mail className="h-4 w-4 mr-3 text-red-400" />
                  hq.brotein@gmail.com
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold mb-6">Order Online</h4>
              <div className="space-y-4">
                {[
                  {
                    name: "Brotein Bistro",
                    logo: "https://www.uengage.in/images/addo/logos/logo-58949-1749106970.jpeg",
                    link: "/"
                  },
                  {
                    name: "Swiggy",
                    logo: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-768x432.png",
                    link: "https://www.swiggy.com/city/nashik/brotein-bistro-guilt-free-goodness-college-road-gangapur-road-rest831016"
                  },
                  {
                    name: "Zomato",
                    logo: "https://img.icons8.com/?size=100&id=Sy4ktCHZULQ7&format=png&color=FF0808",
                    link: "https://www.zomato.com/nashik/brotein-bistro-guilt-free-goodness-college-road?amp=1"
                  },

                ].map((platform) => (
                  <motion.div key={platform.name} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={platform.link}
                      className="block bg-gray-800 hover:bg-gray-700 rounded-lg p-4 transition-all duration-300 hover:shadow-lg"
                      target="_blank"
                    >
                      <div className="flex items-center">
                        <Image
                          src={platform.logo}
                          alt={`${platform.name} logo`}
                          width={40}
                          height={40}
                          loading="lazy"
                          className="mr-3 rounded"
                        />
                        <span>Order on {platform.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-800 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              &copy; {new Date().getFullYear()} <a
                href='https://broteinbistro.com/'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500  duration-200"
              >
                Brotein Bistro.
              </a>All rights reserved. Designed And Developed By Team &nbsp;
              <a
                href='https://savruda.in'
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500  duration-200"
              >
                Savruda Innovation, Nashik
              </a>

            </p>
          </motion.div>
        </div>
        <FranchiseModal isOpen={isFranchiseOpen} onClose={() => setIsFranchiseOpen(false)} />

      </footer>
    </div>
  )
}
