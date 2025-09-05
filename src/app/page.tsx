import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import { HomeCarousel } from '@/components/carousel/HomeCarousel'
import { Star } from 'lucide-react'
const Home = () => {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/assets/bg.svg')] opacity-10 pointer-events-none" />

      <Navbar />

      {/* Hero Section - Added consistent padding */}
      <section className="container mx-auto pt-24 lg:pt-32 pb-16 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Star className="h-4 w-4 mr-2 fill-primary" />
              <span>Authentic Yemeni Cuisine</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Yemeni flavor
              <br /> with{" "}
              <span className="text-primaryColor relative">
                a<span className="absolute -bottom-2 left-0 w-full h-2 bg-primaryColor/20 rounded-full"></span>
              </span>{" "}
              modern spirit
            </h1>

            <p className="text-muted-foreground text-lg lg:text-xl max-w-md">
              Discover the most delicious Yemeni dishes with a new style that combines authenticity and modern taste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <CustomButton link={"/menu"} />
              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-6 py-3 rounded-md text-foreground hover:text-primary transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link> */}
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold">500+</span> happy customers this week
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primaryColor/10 rounded-full blur-3xl" />

            {/* Main carousel with styling - Increased size */}
            <div className="relative z-10 bg-gradient-to-b from-background/5 to-background/20 p-6 rounded-2xl backdrop-blur-sm border border-border/40">
              <HomeCarousel />

              {/* Featured badge */}
              <div className="absolute -top-3 -right-3 bg-primaryColor text-black font-medium px-4 py-1 rounded-full text-sm shadow-lg">
                Featured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Added consistent padding */}
      <section className="container mx-auto py-16 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Traditional Recipes",
              description: "Authentic Yemeni recipes passed down through generations",
            },
            {
              title: "Modern Twist",
              description: "Classic dishes reimagined with contemporary techniques",
            },
            {
              title: "Quality Ingredients",
              description: "Locally sourced, fresh ingredients for the best flavor",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
  )
}

export default Home