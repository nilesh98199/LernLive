"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GDPR() {
  return (
    <main className="min-h-screen bg-gray-900 text-whites">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-white">GDPR Compliance</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Your Rights Under GDPR</h2>
            <p className="text-gray-600 mb-4 text-white">
              Under GDPR, you have the right to access, correct, or delete your personal data.
              You also have the right to data portability and to withdraw consent at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Data Processing</h2>
            <p className="text-gray-600 mb-4 text-white">
              We process your data in accordance with GDPR principles, ensuring it is processed
              lawfully, fairly, and transparently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. International Data Transfers</h2>
            <p className="text-gray-600 mb-4 text-white">
              When we transfer data outside the EU, we ensure appropriate safeguards are in place
              to protect your personal information in compliance with GDPR requirements.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 