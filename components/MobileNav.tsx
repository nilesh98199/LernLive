"use client"

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { sidebarLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Dialog>
        <DialogTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/50" />
          <DialogContent className="fixed left-0 top-0 h-full w-72 bg-dark-1 p-4">
            <DialogTitle>
              <VisuallyHidden>Mobile Navigation</VisuallyHidden>
            </DialogTitle>
            <Link href="/" className="flex items-center gap-1 mb-6">
              <Image
                src="/icons/Camera.svg"
                width={20}
                height={20}
                alt="LernLiv Logo"
                className="max-sm:size-10"
              />
              <p className="text-[26px] font-extrabold text-white">LERNLIVE</p>
            </Link>

            <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
              <DialogClose asChild>
                <section className="flex h-full flex-col gap-6 pt-4 text-white">
                  {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route;
                    return (
                        <DialogClose asChild key={link.route}>
                            <Link
                                href={link.route}
                                key={link.label}
                                className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", {
                                    "bg-blue-1": isActive,
                                })}
                            >
                                <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                                <p className="font-semibold">{link.label}</p>
                            </Link>
                        </DialogClose>
                    );
                  })}
                </section>
              </DialogClose>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </section>
  ); 
};

export default MobileNav;