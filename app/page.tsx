"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DocumentMetadata } from "@/components/document-metadata"
import {
  Car,
  Search,
  Camera,
  MessageCircle,
  Bell,
  Calendar,
  BarChart3,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  MapPin,
  Download,
  Apple,
  Play,
  ChevronRight,
  Wrench,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("car-owners")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <DocumentMetadata
        title="Anthub - Transform Your Automotive Experience"
        description="Connect car owners with trusted mechanics. Book services, track progress, and manage your auto shop with our innovative mobile apps."
      />
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-secondary rounded-full p-2">
              <Car className="h-6 w-6 text-secondary-foreground" />
            </div>
            <span className="text-2xl font-bold font-sans">Anthub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-secondary transition-colors font-semibold text-lg"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("apps")}
              className="hover:text-secondary transition-colors font-semibold text-lg"
            >
              Apps
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="hover:text-secondary transition-colors font-semibold text-lg"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-secondary transition-colors font-semibold text-lg"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-secondary transition-colors font-semibold text-lg"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              className="font-semibold hover:scale-105 transition-transform text-lg px-6 py-3"
            >
              Download Now
            </Button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left hover:text-secondary transition-colors font-semibold text-lg"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("apps")}
                className="block w-full text-left hover:text-secondary transition-colors font-semibold text-lg"
              >
                Apps
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left hover:text-secondary transition-colors font-semibold text-lg"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left hover:text-secondary transition-colors font-semibold text-lg"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left hover:text-secondary transition-colors font-semibold text-lg"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-6">
              <span className="text-secondary font-bold text-lg">🚗 Trusted by 50,000+ Car Owners</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold font-sans text-foreground mb-6 leading-tight">
              Skip the Wait,
              <br />
              <span className="text-primary">Love Your Car</span> Again
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              Book trusted mechanics in 30 seconds, track your service like ordering pizza, and save 40% on every visit.
              <span className="text-primary font-bold"> No more surprises, no more waiting.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-xl px-12 py-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold"
              >
                <Download className="mr-3 h-7 w-7" />
                Get Android App Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xl px-12 py-8 rounded-full bg-transparent opacity-60 cursor-not-allowed font-bold"
                disabled
              >
                <Apple className="mr-3 h-7 w-7" />
                iOS Coming Soon
              </Button>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                <img
                  src="/modern-car-shop.png"
                  alt="Modern automotive service center with professional mechanics"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button
                    size="lg"
                    className="bg-primary/90 hover:bg-primary text-white rounded-full p-6 shadow-lg backdrop-blur-sm hover:scale-110 transition-transform"
                    onClick={() => console.log("Play demo video")}
                  >
                    <Play className="h-10 w-10" />
                  </Button>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.9/5</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground rounded-lg shadow-lg p-3 animate-bounce delay-500">
                <span className="text-sm font-semibold">Save 40% Average</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                50,000+
              </div>
              <div className="text-muted-foreground font-semibold text-lg">Happy Car Owners</div>
              <div className="text-sm text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Join the community
              </div>
            </div>
            <div className="group hover:scale-110 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                2,500+
              </div>
              <div className="text-muted-foreground font-semibold text-lg">Partner Shops</div>
              <div className="text-sm text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Verified & trusted
              </div>
            </div>
            <div className="group hover:scale-110 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">40%</div>
              <div className="text-muted-foreground font-semibold text-lg">Average Savings</div>
              <div className="text-sm text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Money back guaranteed
              </div>
            </div>
            <div className="group hover:scale-110 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">
                4.9★
              </div>
              <div className="text-muted-foreground font-semibold text-lg">App Store Rating</div>
              <div className="text-sm text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Loved by users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section id="apps" className="py-20 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground mb-4">Choose Your Experience</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Whether you're a car owner or shop owner, Anthub has the perfect solution for you.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative bg-white rounded-full p-2 shadow-lg border-2 border-primary/10">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("car-owners")}
                  className={`relative z-10 flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all ${
                    activeTab === "car-owners" ? "text-primary-foreground" : "text-primary hover:text-primary/80"
                  }`}
                >
                  <Car className="mr-3 h-6 w-6" />
                  Car Owners
                </button>
                <button
                  onClick={() => setActiveTab("shop-owners")}
                  className={`relative z-10 flex items-center px-8 py-4 rounded-full text-lg font-bold transition-all ${
                    activeTab === "shop-owners" ? "text-primary-foreground" : "text-primary hover:text-primary/80"
                  }`}
                >
                  <Wrench className="mr-3 h-6 w-6" />
                  Shop Owners
                </button>
              </div>
              {/* Sliding background */}
              <div
                className={`absolute top-2 bottom-2 bg-primary rounded-full transition-all duration-300 ease-in-out ${
                  activeTab === "car-owners" ? "left-2 right-1/2" : "left-1/2 right-2"
                }`}
              />
            </div>
          </div>

          {/* Car Owners Content */}
          {activeTab === "car-owners" && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2 text-base font-bold">
                  For Car Owners
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground mb-8 leading-tight">
                  Your Car. Your Schedule.
                  <br />
                  <span className="text-primary">Your Peace of Mind.</span>
                </h2>
                <p className="text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                  Stop letting car maintenance control your life. With Anthub, you're in the driver's seat — book
                  services in 30 seconds, track progress like ordering food, and save money on every visit.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Search className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">Find Top-Rated Mechanics in Seconds</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        See real reviews, compare prices, and book with mechanics who have 4.8+ star ratings. No more
                        rolling the dice.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Camera className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">See Every Step of Your Service</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Get before/after photos, detailed progress updates, and video explanations. Know exactly what
                        you're paying for.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">Direct Chat with Your Mechanic</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Ask questions, get updates, and approve additional work — all through secure in-app messaging.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Bell className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">Never Miss Maintenance Again</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Smart reminders for oil changes, brake checks, and tune-ups based on your driving habits and car
                        model.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 rounded-full px-10 py-6 text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download for Android
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary opacity-60 cursor-not-allowed bg-transparent rounded-full px-10 py-6 text-xl font-bold"
                    disabled
                  >
                    <Apple className="mr-3 h-6 w-6" />
                    iOS Coming Soon
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/car-maintenance-app.png"
                  alt="Anthub car owner app showing service booking and tracking features"
                  className="rounded-2xl shadow-2xl mx-auto hover:scale-105 transition-transform cursor-pointer"
                />
                <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                  Save 40%
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                  4.9★ Rating
                </div>
              </div>
            </div>
          )}

          {/* Shop Owners Content */}
          {activeTab === "shop-owners" && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="/automotive-shop-management-app.png"
                  alt="Anthub shop owner app showing business management dashboard"
                  className="rounded-2xl shadow-2xl mx-auto hover:scale-105 transition-transform cursor-pointer"
                />
                <div className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                  +35% Revenue
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                  2,500+ Shops
                </div>
              </div>

              <div>
                <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2 text-base font-bold">
                  For Shop Owners
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground mb-8 leading-tight">
                  Turn Every Customer Into a<br />
                  <span className="text-primary">Repeat Customer</span>
                </h2>
                <p className="text-2xl text-muted-foreground mb-10 leading-relaxed font-medium">
                  Stop losing customers to competitors. Anthub helps you fill your calendar, increase revenue by 35%,
                  and build lasting relationships with automated follow-ups and smart promotions.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Calendar className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">Fill Every Time Slot Automatically</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Smart scheduling prevents overbooking and fills cancellations instantly with nearby customers.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <BarChart3 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">Track Revenue & Performance Daily</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        See which services make the most money, track staff performance, and identify growth
                        opportunities.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">Bring Customers Back Automatically</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Send service reminders 3 months in advance and targeted promotions to increase customer lifetime
                        value.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex items-start space-x-6 group hover:bg-muted/50 p-6 rounded-2xl transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-3 text-xl">Increase Revenue with Smart Upselling</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        Suggest additional services based on car age, mileage, and service history. Boost average ticket
                        size by 25%.
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 rounded-full px-10 py-6 text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all font-bold"
                  >
                    <Download className="mr-3 h-6 w-6" />
                    Download for Android
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary opacity-60 cursor-not-allowed bg-transparent rounded-full px-10 py-6 text-xl font-bold"
                    disabled
                  >
                    <Apple className="mr-3 h-6 w-6" />
                    iOS Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground mb-6">How Anthub Works</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Get your car serviced in just 4 simple steps — it's that easy!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Search className="h-10 w-10 text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg">
                1
              </div>
              <h3 className="font-bold text-foreground mb-4 text-xl">Find & Book</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Search for nearby mechanics, compare prices, and book your preferred time slot instantly.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg">
                2
              </div>
              <h3 className="font-bold text-foreground mb-4 text-xl">Drop Off</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Use QR code for quick check-in and leave your car with confidence at our verified partner shops.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Camera className="h-10 w-10 text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg">
                3
              </div>
              <h3 className="font-bold text-foreground mb-4 text-xl">Track Progress</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Receive real-time updates, photos, and chat directly with your mechanic throughout the service.
              </p>
            </div>

            <div className="text-center group hover:scale-105 transition-all cursor-pointer p-6 rounded-xl hover:bg-primary/5">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Bell className="h-10 w-10 text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg">
                4
              </div>
              <h3 className="font-bold text-foreground mb-4 text-xl">Pick Up</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Get notified when your car is ready and pick it up at your convenience with detailed service reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground mb-6">
              Complete Automotive Solution
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Everything you need to manage car maintenance, from booking to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer group rounded-2xl p-4">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl font-bold">Find Nearby Shops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Locate the best auto shops in your area with real-time availability and instant booking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer group rounded-2xl p-4">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl font-bold">QR Code Check-in</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Quick and contactless check-in process with QR code scanning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer group rounded-2xl p-4">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Camera className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl font-bold">Visual Progress Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Receive photos and detailed updates throughout the entire service process.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all hover:scale-105 cursor-pointer group rounded-2xl p-4">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Bell className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-xl font-bold">Smart Maintenance Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Get notified about service completion and upcoming maintenance based on your driving patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground mb-6">Success Stories</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Real results from real customers and shop owners
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="/car-service-dashboard.png"
                alt="Car service dashboard showing analytics and customer management"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
            <div>
              <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2 text-base font-bold">
                Shop Owner Success
              </Badge>
              <h3 className="text-4xl font-bold font-sans text-foreground mb-6 leading-tight">
                "Revenue Increased by $25,000 in 6 Months"
              </h3>
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed font-medium">
                Mike's Auto Shop saw a 45% increase in customer retention and 35% boost in revenue after implementing
                Anthub's automated reminder system and customer management tools.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary">45%</div>
                  <div className="text-base text-muted-foreground font-medium">Customer Retention</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">35%</div>
                  <div className="text-base text-muted-foreground font-medium">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-base text-muted-foreground font-medium">New Customers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2 text-base font-bold">
                Car Owner Success
              </Badge>
              <h3 className="text-4xl font-bold font-sans text-foreground mb-6 leading-tight">
                "Saved $1,200 and 15 Hours This Year"
              </h3>
              <p className="text-2xl text-muted-foreground mb-8 leading-relaxed font-medium">
                Sarah discovered transparent pricing and trusted mechanics through Anthub, eliminating the stress and
                uncertainty of car maintenance while saving significant time and money.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary">$1,200</div>
                  <div className="text-base text-muted-foreground font-medium">Annual Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-base text-muted-foreground font-medium">Hours Saved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">8</div>
                  <div className="text-base text-muted-foreground font-medium">Services Completed</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/car-owner-app-mockup.png"
                alt="Car owner using Anthub app to book and track automotive services"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-sans text-foreground mb-6">What Our Users Say</h2>
            <p className="text-2xl text-muted-foreground font-medium">
              Join thousands of satisfied car owners and shop owners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer rounded-2xl p-4">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-xl font-bold">Sarah M.</CardTitle>
                <CardDescription className="text-muted-foreground text-base">Car Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Anthub saved me so much time! I can drop off my car and track everything from my phone. The
                  transparency is amazing - I actually trust my mechanic now."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer rounded-2xl p-4">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-xl font-bold">Mike's Auto Shop</CardTitle>
                <CardDescription className="text-muted-foreground text-base">Shop Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Our customer retention improved by 40% since using Anthub. The reminder system brings customers back
                  automatically, and our revenue increased by $15,000 last month."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105 cursor-pointer rounded-2xl p-4">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-xl font-bold">David L.</CardTitle>
                <CardDescription className="text-muted-foreground text-base">Car Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "I love comparing prices and getting exclusive offers. Found a great mechanic through Anthub and saved
                  30% on my brake service. Never going back to the old way."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold font-sans mb-8">
            Ready to Transform Your Automotive Experience?
          </h2>
          <p className="text-2xl mb-10 max-w-4xl mx-auto opacity-90 leading-relaxed font-medium">
            Join 50,000+ car owners and shop owners who are already using Anthub to make car maintenance simple,
            transparent, and profitable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-xl px-12 py-8 hover:scale-105 transition-transform rounded-full shadow-lg hover:shadow-xl font-bold"
            >
              <Download className="mr-3 h-6 w-6" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-xl px-12 py-8 bg-transparent opacity-60 cursor-not-allowed rounded-full font-bold"
              disabled
            >
              <Apple className="mr-3 h-6 w-6" />
              iOS Coming Soon
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-secondary rounded-full p-2">
                  <Car className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-2xl font-bold font-sans">Anthub</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed text-lg">
                Connecting car owners with trusted mechanics for seamless automotive experiences.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-xl">For Car Owners</h3>
              <ul className="space-y-3 text-primary-foreground/80 text-lg">
                <li>Find Mechanics</li>
                <li>Book Services</li>
                <li>Track Progress</li>
                <li>Get Reminders</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-xl">For Shop Owners</h3>
              <ul className="space-y-3 text-primary-foreground/80 text-lg">
                <li>Manage Bookings</li>
                <li>Customer Analytics</li>
                <li>Promotion Tools</li>
                <li>Business Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-xl">Contact</h3>
              <ul className="space-y-3 text-primary-foreground/80 text-lg">
                <li>support@anthub.ca</li>
                <li>1-800-ANTHUB</li>
                <li>Help Center</li>
                <li><Link href="/privacy-policy" className="underline hover:no-underline">
                  Privacy Policy
                  </Link></li>
                    <li>
                    <Link href="/terms" className="underline hover:no-underline">
                  Terms &amp; Conditions
                    </Link>
                    </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/80">
            <p className="text-lg">&copy; 2026 Anthub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
