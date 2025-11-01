"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 mb-6 text-white">
              At LernLive, we take your privacy seriously. This Privacy Policy describes how we collect,
              use, process, and protect your personal information when you use our platform and services.
              By using LernLive, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Personal Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-white">We collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 text-white">
                <li>Account information (name, email, password)</li>
                <li>Profile information (profile picture, bio, educational background)</li>
                <li>Usage data (course progress, interaction history)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Communication data (messages, feedback, support inquiries)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-white">We use your personal information for:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 text-white">
                <li>Providing and improving our services</li>
                <li>Personalizing your learning experience</li>
                <li>Processing payments and transactions</li>
                <li>Communicating with you about our services</li>
                <li>Ensuring platform security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4 text-white">
              We do not sell your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 text-white">
              <li>Service providers who assist in platform operations</li>
              <li>Educational partners for course delivery</li>
              <li>Legal authorities when required by law</li>
              <li>Other users (limited to public profile information)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4 text-white">
              We implement appropriate technical and organizational measures to protect your personal
              information. These measures include encryption, access controls, and regular security assessments.
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
            <p className="text-gray-600 mb-4 text-white">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 text-white">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-4 text-white">
              We may update this Privacy Policy periodically. We will notify you of any material changes
              by posting the new Privacy Policy on this page and updating the "last updated" date.
              Your continued use of the platform after such modifications constitutes your acknowledgment
              of the modified Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4 text-white">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-600 text-white">
              Email: privacy@lernlive.com<br />
              Address: [Your Company Address]<br />
              Phone: [Your Contact Number]
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 