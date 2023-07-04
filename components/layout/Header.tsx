"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { HeaderNavLinks } from "./HeaderNavLinks";
import { buttonVariants } from "../ui/button";
import { PanelLeftOpen } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="w-full mx-auto px-8 flex h-14 items-center">
        <Sheet>
          <SheetTrigger>
            {" "}
            <PanelLeftOpen className="md:hidden cursor-pointer" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            Header
          </Link>
          <HeaderNavLinks />
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ThemeToggle />
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline" })}
          >
            Login / Signup
          </Link>
        </div>
      </div>
    </header>
  );
}
