"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4 text-white">
              By accessing and using LernLive's services, you agree to be bound by these Terms of Service.
              These terms govern your use of our platform and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <p className="text-gray-600 mb-4 text-white">
              Users are responsible for maintaining the confidentiality of their account information
              and for all activities that occur under their account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
            <p className="text-gray-600 mb-4 text-white">
              LernLive provides an online learning platform that enables users to participate in
              live educational sessions, access recorded content, and interact with instructors.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 