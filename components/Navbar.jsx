"use client"

import { useState } from "react"
import { Pacifico } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, X, Bell, MessageCircle, Heart, Home, Info, Video } from "lucide-react"
import { cn } from "@/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})


// Mock user state - replace with your actual auth logic
const mockUser = {
  isLoggedIn: false, // Change to true to see logged-in state
  name: "John Doe",
  avatar: null, // Set to image URL if available
  notifications: 3,
  messages: 2,
}




const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(mockUser.isLoggedIn)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Video className="h-8 w-8 text-purple-600 mr-2" />
                <span
                  className={cn(
                    "text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600",
                    pacifico.className,
                  )}
                >
                  VideoHub
                </span>
              </div>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for video editing services..."
                  className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {!isLoggedIn ? (
                // Not logged in state
                <>
                  <a href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                    About
                  </a>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Login
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    Join
                  </Button>
                </>
              ) : (
                // Logged in state
                <>
                  <div className="relative">
                    <Bell className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
                    {mockUser.notifications > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                        {mockUser.notifications}
                      </Badge>
                    )}
                  </div>

                  <div className="relative">
                    <MessageCircle className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
                    {mockUser.messages > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                        {mockUser.messages}
                      </Badge>
                    )}
                  </div>

                  <Heart className="h-6 w-6 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />

                  <div className="flex items-center cursor-pointer">
                    {mockUser.avatar ? (
                      <img
                        src={mockUser.avatar || "/placeholder.svg"}
                        alt="Profile"
                        className="h-8 w-8 rounded-full border-2 border-gray-300"
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-medium">
                        {getInitials(mockUser.name)}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="text-gray-700">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search services..."
                className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              {!isLoggedIn ? (
                // Not logged in mobile menu
                <>
                  <a
                    href="/"
                    className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors py-2"
                  >
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </a>
                  <a
                    href="/about"
                    className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors py-2"
                  >
                    <Info className="h-5 w-5" />
                    <span>About</span>
                  </a>
                  <div className="pt-4 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                      onClick={() => {
                        setIsLoggedIn(true)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      onClick={() => {
                        setIsLoggedIn(true)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Join Now
                    </Button>
                  </div>
                </>
              ) : (
                // Logged in mobile menu
                <>
                  <div className="flex items-center space-x-3 py-2">
                    {mockUser.avatar ? (
                      <img
                        src={mockUser.avatar || "/placeholder.svg"}
                        alt="Profile"
                        className="h-10 w-10 rounded-full border-2 border-gray-300"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-medium">
                        {getInitials(mockUser.name)}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{mockUser.name}</p>
                      <p className="text-sm text-gray-500">View Profile</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-700">Notifications</span>
                      </div>
                      {mockUser.notifications > 0 && (
                        <Badge className="bg-red-500 text-white">{mockUser.notifications}</Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-gray-600" />
                        <span className="text-gray-700">Messages</span>
                      </div>
                      {mockUser.messages > 0 && <Badge className="bg-red-500 text-white">{mockUser.messages}</Badge>}
                    </div>

                    <div className="flex items-center space-x-3 py-2">
                      <Heart className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Favorites</span>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={() => {
                        setIsLoggedIn(false)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
