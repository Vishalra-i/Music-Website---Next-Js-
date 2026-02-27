"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed m-2  top-10 inset-x-0 font-black font-mono text-xl  max-w-2xl mx-auto  z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={'/'}>
               <MenuItem setActive={setActive} active={active}  item="Home">
               </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
              {/* //Our Course drop-menu items  */}
              <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/courses">Products</HoveredLink>
                  <HoveredLink href="/courses">
                    Tiles
                  </HoveredLink>
                  <HoveredLink href="/courses">
                      Bathroom Accessories

                  </HoveredLink>
                  <HoveredLink href="/courses">
                      wall tiles
                  </HoveredLink>
                  <HoveredLink href="/courses">
                      Wash Basin
                  </HoveredLink>
               </div>
            </MenuItem>
            <Link href={'/contact'}>
               <MenuItem setActive={setActive} active={active} item="Contact Us">
               </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar
