import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";

const ContactPage = () => {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/assets/bg.svg')] opacity-10 pointer-events-none" />

        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto pt-24 lg:pt-32 pb-16 px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium w-fit">
                <Star className="h-4 w-4 mr-2 fill-primary" />
                <span>Get in Touch</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Contact
                <span className="text-primaryColor relative mx-3">
                  Us
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-primaryColor/20 rounded-full" />
                </span>
              </h1>

              <p className="text-muted-foreground text-lg lg:text-xl max-w-md">
                {`We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.`}
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i =>
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  )}
                </div>
                <div className="text-sm">
                  <span className="font-bold">24/7</span> customer support
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

              {/* Contact Form */}
              <div className="relative z-10 bg-gradient-to-b from-background/5 to-background/20 p-8 rounded-2xl backdrop-blur-sm border border-border/40">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium mb-2"
                      >
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+32 *** ** ** **"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>

                {/* Featured badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground font-medium px-4 py-1 rounded-full text-sm shadow-lg">
                  Quick Reply
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="container mx-auto py-16 px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                description: "Bd Jamar 17, 1060 Saint-Gilles",
                detail: "Open daily for dine-in"
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "+32 465 41 18 84",
                detail: "Available 24/7"
              },
              {
                icon: Mail,
                title: "Email Us",
                description: "info@yemenalsaid.com",
                detail: "We reply within 2 hours"
              },
              {
                icon: Clock,
                title: "Opening Hours",
                description: "Every day: 12AM - 12PM",
                detail: "Kitchen closes at 11:30PM"
              }
            ].map((contact, i) =>
              <Card
                key={i}
                className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground mb-1">
                    {contact.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {contact.detail}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto py-16 px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {`Located in the heart of Sana'a, we're easy to find and always
              ready to welcome you.`}
            </p>
          </div>

          <div className="bg-gradient-to-b from-background/5 to-background/20 p-6 rounded-2xl backdrop-blur-sm border border-border/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1757092293522!6m8!1m7!1stIG9duUgQcCgWG4v7KBqPg!2m2!1d50.83925130273833!2d4.339153068691845!3f19.81206394065555!4f-18.740522626832785!5f0.41993765733252697"
              width="600"
              height="450"
              loading="lazy"
              className="w-full rounded-2xl"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
