import Navbar from "@/components/navbar/Navbar";

import Image from "next/image";
import { Coffee, MapPin, Utensils } from "lucide-react";
const AboutUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Navbar />
      <div className="relative h-[40vh] mt-15 w-full overflow-hidden">
        <Image
          src="/assets/logo.png"
          alt="Traditional Yemeni cuisine"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Story
            </h1>
            <p className="mt-4 text-xl text-white">
              Authentic Yemeni Flavors in Brussels
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <div className="mb-20">
          <div className="mb-8 flex items-center justify-center">
            <div className="h-0.5 w-12 bg-primaryColor" />
            <h2 className="mx-4 text-center text-3xl font-bold text-white">
              Our Journey
            </h2>
            <div className="h-0.5 w-12 bg-primaryColor" />
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-lg text-neutral-300">
                Founded in 2015 by the Abdullah family, our restaurant brings
                the rich culinary traditions of Yemen to the heart of Brussels.
                After fleeing the conflict in Yemen, the Abdullah family sought
                to share their heritage and passion for authentic Yemeni cuisine
                with their new community.
              </p>
              <p className="mb-4 text-lg text-neutral-300">
                Each dish we serve is prepared using traditional methods and
                recipes passed down through generations, featuring the
                distinctive spice blends and cooking techniques that make Yemeni
                cuisine so unique.
              </p>
              <p className="text-lg text-neutral-300">
                Our restaurant has become a gathering place not only for the
                Yemeni diaspora in Brussels but also for locals and tourists
                eager to experience the warm hospitality and flavorful dishes of
                Yemen.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/assets/food.jpg"
                alt="Restaurant founders"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Cuisine Section */}
        <div className="mb-20">
          <div className="mb-8 flex items-center justify-center">
            <div className="h-0.5 w-12 bg-primaryColor" />
            <h2 className="mx-4 text-center text-3xl font-bold text-white">
              Our Cuisine
            </h2>
            <div className="h-0.5 w-12 bg-primaryColor" />
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative order-2 h-[400px] overflow-hidden rounded-lg shadow-xl md:order-1">
              <Image
                src="/assets/Kitchen-Yemeni-Restaurant.jpg"
                alt="Traditional Yemeni dishes"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 flex flex-col justify-center md:order-2">
              <p className="mb-4 text-lg text-neutral-300">
                Yemeni cuisine is known for its aromatic spices, slow-cooked
                meats, and hearty stews. Our signature dish,{" "}
                <span className="font-semibold">Mandi</span>, features tender
                meat slow-cooked with a blend of spices and served over fragrant
                rice.
              </p>
              <p className="mb-4 text-lg text-neutral-300">
                We also take pride in our{" "}
                <span className="font-semibold">Saltah</span>, a traditional
                Yemeni stew considered the national dish, and our freshly baked{" "}
                <span className="font-semibold">Malawah</span>, a sweet layered
                bread that pairs perfectly with Yemeni honey.
              </p>
              <p className="text-lg text-neutral-300">
                No Yemeni meal is complete without our traditional{" "}
                <span className="font-semibold">Qahwa</span> (coffee), brewed
                with cardamom and served in small cups as a gesture of
                hospitality.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <div className="mb-8 flex items-center justify-center">
            <div className="h-0.5 w-12 bg-primaryColor" />
            <h2 className="mx-4 text-center text-3xl font-bold text-white">
              Our Values
            </h2>
            <div className="h-0.5 w-12 bg-primaryColor" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card-foreground">
                <Utensils className="h-6 w-6 text-primaryColor" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primaryColor">
                Authenticity
              </h3>
              <p className="text-neutral-400">
                We remain true to traditional Yemeni recipes and cooking
                methods, offering an authentic taste of Yemen in every dish.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card-foreground">
                <Coffee className="h-6 w-6 text-primaryColor" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primaryColor">
                Hospitality
              </h3>
              <p className="text-neutral-400">
                In Yemeni culture, guests are a blessing. We strive to make
                every visitor feel welcomed and valued, just as they would in a
                Yemeni home.
              </p>
            </div>

            <div className="rounded-lg bg-card p-6 shadow-md transition-transform hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-card-foreground">
                <MapPin className="h-6 w-6 text-primaryColor" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-primaryColor">
                Community
              </h3>
              <p className="text-neutral-400">
                Our restaurant serves as a cultural bridge, bringing together
                people from different backgrounds to share in the joy of Yemeni
                cuisine.
              </p>
            </div>
          </div>
        </div>

        
      
      </div>
    </div>
  );
};

export default AboutUs;
