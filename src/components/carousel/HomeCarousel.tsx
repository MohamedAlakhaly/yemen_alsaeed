"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export function HomeCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true, active: true }))

  // In Next.js, we'll use public directory for images
  const images = ["/assets/1.png", "/assets/2.jpg", "/assets/3.jpg"]

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
        direction: "ltr",
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div
              className="w-full h-[500px] md:h-[550px] lg:h-[600px] bg-contain bg-center bg-no-repeat rounded-lg transform transition-transform hover:scale-[1.02] duration-300"
              style={{ backgroundImage: `url(${img})` }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
