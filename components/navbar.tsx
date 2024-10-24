"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Package2, LayoutGrid, Settings } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { MobileNav } from "@/components/mobile-nav";

export default function Navbar() {
  const pathname = usePathname();
  
  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: LayoutGrid,
      active: pathname === "/",
    },
    {
      href: "/products",
      label: "Products",
      icon: Package2,
      active: pathname === "/products",
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center md:hidden">
              <MobileNav />
            </div>
            <Link href="/" className="flex items-center space-x-2">
              <Package2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Inventory Pro</span>
            </Link>
            <div className="hidden md:flex md:space-x-2">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={route.active ? "default" : "ghost"}
                  asChild
                >
                  <Link href={route.href} className="flex items-center space-x-2">
                    <route.icon className="h-4 w-4" />
                    <span>{route.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}