"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Accessibility</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Our Commitment</h2>
            <p className="text-gray-600 mb-4 text-white">
              LernLive is committed to making our platform accessible to everyone, including
              people with disabilities. We strive to meet WCAG 2.1 guidelines.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Accessibility Features</h2>
            <p className="text-gray-600 mb-4 text-white">
              Our platform includes features such as keyboard navigation, screen reader compatibility,
              and customizable text sizes to ensure a better experience for all users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Feedback and Support</h2>
            <p className="text-gray-600 mb-4 text-white">
              We welcome your feedback on the accessibility of LernLive. Please let us know if you
              encounter any accessibility barriers or have suggestions for improvement.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 