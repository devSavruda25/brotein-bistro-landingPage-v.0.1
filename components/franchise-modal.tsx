"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X, User, Mail, Phone, MapPin, MessageSquare, CheckCircle,
  Loader2, Building, Users, TrendingUp, IndianRupee,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface FranchiseModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FranchiseModal({ isOpen, onClose }: FranchiseModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    experience: "",
    interestType: "",
    message: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/prathamesh0755@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Franchise Application - Brotein Bistro",
          _template: "box",
          _captcha: "false",
          _autoresponse: "Thank you for your franchise inquiry! We'll contact you soon."
        })
      })

      const result = await response.json()
      if (result.success) {
        setFormSubmitted(true)
      } else {
        alert("Failed to submit form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const franchiseStats = [
    { icon: Building, label: "Locations", value: "2+" },
    { icon: IndianRupee, label: "ROI", value: "25-30%" },
    { icon: Users, label: "Customers", value: "100K+" },
    { icon: TrendingUp, label: "Growth", value: "200%" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl h-auto max-h-[95vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold mb-2"
                >
                  Get Your Brotein Bistro Franchise
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-green-100"
                >
                  Join India's fastest-growing fitness food franchise
                </motion.p>
              </div>
            </div>

            {/* Form & Stats */}
            <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
              {!formSubmitted ? (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Stats */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Why Choose Brotein Bistro?</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {franchiseStats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-0">
                              <stat.icon className="h-8 w-8 text-green-500 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                              <div className="text-sm text-gray-600">{stat.label}</div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {[
                        "Proven business model with high ROI",
                        "Complete training and ongoing support",
                        "Marketing and branding assistance",
                        "Exclusive territory rights",
                        "Technology and POS system support",
                      ].map((text, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            placeholder="Your full name" 
                            className="pl-10 h-11" 
                            required 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            placeholder="Enter your email" 
                            className="pl-10 h-11" 
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleInputChange} 
                            placeholder="Enter your phone" 
                            className="pl-10 h-11" 
                            required 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Preferred City *</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="city" 
                            name="city" 
                            value={formData.city} 
                            onChange={handleInputChange} 
                            placeholder="Enter city" 
                            className="pl-10 h-11" 
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="investment">Investment Capacity</Label>
                        <select 
                          id="investment" 
                          name="investment" 
                          value={formData.investment} 
                          onChange={handleInputChange} 
                          className="w-full h-11 px-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500"
                        >
                          <option value="">Select range</option>
                          <option value="15-20">₹15-20 Lakhs</option>
                          <option value="20-25">₹20-25 Lakhs</option>
                          <option value="25+">₹25+ Lakhs</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Business Experience</Label>
                        <select 
                          id="experience" 
                          name="experience" 
                          value={formData.experience} 
                          onChange={handleInputChange} 
                          className="w-full h-11 px-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500"
                        >
                          <option value="">Select experience</option>
                          <option value="none">No Experience</option>
                          <option value="1-3">1–3 Years</option>
                          <option value="3-5">3–5 Years</option>
                          <option value="5+">5+ Years</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interestType">You're applying for?</Label>
                      <select 
                        id="interestType" 
                        name="interestType" 
                        value={formData.interestType} 
                        onChange={handleInputChange} 
                        className="w-full h-11 px-3 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-green-500"
                      >
                        <option value="">Select option</option>
                        <option value="Franchise Shop">Franchise Shop</option>
                        <option value="Gym Partnership">Gym Partnership</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleInputChange} 
                          placeholder="Tell us about your goals..." 
                          className="pl-10 min-h-[100px] resize-none" 
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Submit Franchise Application"
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our terms and conditions.
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}>
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in Brotein Bistro. Our team will contact you shortly.
                  </p>
                  {/* <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    Application ID: #BF{Math.random().toString(36).substr(2, 6).toUpperCase()}
                  </Badge> */}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}