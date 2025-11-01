"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import MobileNav from "./mobile-nav";
import LoginModal from "./login-modal";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function SiteHeader() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#features", label: "Features" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#testimonials", label: "Recommendation" },
        { href: "#feedback", label: "Feedback" },
    ];

    return (
        <>
            <header className="bg-dark-1 shadow-md py-4 fixed w-full z-10">
                <div className="container mx-auto flex h-10 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <Image src="/images/Camera.png" alt="LernLive Logo" width={40} height={40} />
                            <span className="text-2xl font-bold text-white">LernLive</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-white hover:text-blue-200 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth Buttons - Desktop */}
                    <div className="flex space-x-4">
                        <SignedOut>
                            <a href="/sign-in" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</a>
                            <a href="/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
                        </SignedOut>
                        <SignedIn>
                            {mounted && <UserButton />}
                        </SignedIn>
                    </div>

                    {/* Mobile Navigation */}
                    <MobileNav onLoginClick={() => setIsLoginModalOpen(true)} />
                </div>
            </header>

            {/* Login Modal */}
            <LoginModal
                isOpen={isLoginModalOpen}
                onCloseAction={() => setIsLoginModalOpen(false)}
            />
        </>
    );
}
