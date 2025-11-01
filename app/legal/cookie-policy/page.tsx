"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 mb-6 text-white">
              This Cookie Policy explains how LernLive ("we", "us", and "our") uses cookies and similar technologies
              to recognize you when you visit our platform. It explains what these technologies are and why we use them,
              as well as your rights to control our use of them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Essential Cookies</h3>
                <p className="text-gray-600 text-white">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually
                  set in response to actions made by you such as setting your privacy preferences, logging in, or filling
                  in forms.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Performance Cookies</h3>
                <p className="text-gray-600 text-white">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance
                  of our site. They help us know which pages are the most and least popular.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Functional Cookies</h3>
                <p className="text-gray-600 text-white">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences
                  and settings. They may be set by us or by third-party providers.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookie Management</h2>
            <p className="text-gray-600 mb-4 text-white">
              Most web browsers allow you to control cookies through their settings preferences. However,
              if you limit the ability of websites to set cookies, you may impact your overall user experience.
              To manage cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 text-white">
              <li>Access your browser settings</li>
              <li>Look for a section titled 'Privacy' or 'Cookies'</li>
              <li>Choose your preferred cookie settings</li>
              <li>Save your changes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 mb-4 text-white">
              We may update this Cookie Policy from time to time to reflect changes in technology,
              legislation, or our data practices. When we post changes to this policy, we will revise
              the "last updated" date at the top of the policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4 text-white">
              If you have any questions about our use of cookies, please contact us at privacy@lernlive.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 