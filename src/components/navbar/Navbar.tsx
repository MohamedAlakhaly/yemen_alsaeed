"use client"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import { ModeToggle } from "../ModeToggle"


export default function Navbar() {
  
  const pathname = usePathname()


  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex justify-between items-center px-6 sm:px-8 md:px-12 lg:px-16 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            className="w-10 h-10 group-hover:rotate-12 duration-300"
            src="/assets/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <div className="text-md md:text-xl  font-bold md:block ml-2">
            YEMEN <span className="text-primary">AL</span>SAID
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <Link
                  href="/"
                  className={
                    isActive("/")
                      ? "text-base font-medium border-b-2 border-primary pb-1"
                      : "text-base text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/menu"
                  className={
                    isActive("/menu") || pathname!.startsWith("/menu/")
                      ? "text-base font-medium border-b-2 border-primary pb-1"
                      : "text-base text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  Menu
                </Link>
              </NavigationMenuItem>

              

              <NavigationMenuItem>
                <Link
                  href="/about"
                  className={
                    isActive("/about")
                      ? "text-base font-medium border-b-2 border-primary pb-1"
                      : "text-base text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  About Us
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className={
                    isActive("/contact")
                      ? "text-base font-medium border-b-2 border-primary pb-1"
                      : "text-base text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Action Buttons */}
        <div className="flex items-center gap-2">
          
        
          {/* Theme Toggle */}
          <ModeToggle/>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {/* Navigation Links Section */}
                <DropdownMenuItem asChild>
                  <Link
                    href="/"
                    className={`w-full flex px-2 py-1.5 text-sm ${isActive("/") ? "font-medium text-primary" : "hover:text-primary duration-200"}`}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/menu"
                    className={`w-full flex px-2 py-1.5 text-sm ${isActive("/menu") || pathname!.startsWith("/menu/") ? "font-medium text-primary" : "hover:text-primary duration-200"}`}
                  >
                    Menu
                  </Link>
                </DropdownMenuItem>
              
                <DropdownMenuItem asChild>
                  <Link
                    href="/about"
                    className={`w-full flex px-2 py-1.5 text-sm ${isActive("/about") ? "font-medium text-primary" : "hover:text-primary duration-200"}`}
                  >
                    About Us
                  </Link>
                </DropdownMenuItem>

                
              
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
