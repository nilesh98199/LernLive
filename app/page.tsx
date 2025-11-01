"use client";


import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SiteHeader from "@/components/ui/site-header";


export default function Home() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/home"); // Redirect to dashboard if authenticated
  };
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [rating, setRating] = useState(0);
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-dark-3 to-purple-600 text-white">
          <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex flex-col justify-center space-y-4 md:w-1/2">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn Anywhere, Live Anytime
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                LernLive offers a seamless virtual classroom experience with real-time interactions, and flexible access to learning materials.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <button onClick={handleGetStarted} className="mt-(-2) inline-block border-white bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-500">
                  Get Started
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/icons/Classroom.svg"
                  alt="Student learning with LernLive"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-blue-700">
                  About LernLive
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    LernLive was founded in 2023 with a simple mission: to make quality education accessible to everyone, everywhere, through innovative live learning experiences.
                  </p>
                  <p>
                    Our platform connects students with expert instructors from around the world in real-time interactive sessions. We believe that learning is most effective when it's engaging, collaborative, and personalized.
                  </p>
                  <p>
                    With LernLive, you're not just watching pre-recorded content—you're participating in dynamic classes where you can ask questions, receive immediate feedback, and connect with like-minded learners.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="#our-story">Our Story</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Link href="#team">Meet Our Team</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                      <circle cx="17" cy="7" r="5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">To democratize education through engaging live online experiences.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-700"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-600">A world where quality education is available to everyone, regardless of location.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-700"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Community</h3>
                  <p className="text-gray-600">A diverse global network of learners and educators supporting each other.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-700"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-gray-600">Excellence, innovation, inclusivity, and continuous improvement guide everything we do.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Choose LernLive
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Our platform offers unique features designed to enhance your learning journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle>Live Interactive Sessions</CardTitle>
                  <CardDescription>
                    Engage in real-time with instructors and peers for an immersive learning experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600">
                    Our platform allows you to ask questions, participate in discussions, and get immediate feedback during live sessions, creating an engaging classroom environment.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z" />
                      <path d="M13 2v7h7" />
                    </svg>
                  </div>
                  <CardTitle>On-demand Learning Materials</CardTitle>
                  <CardDescription>
                    Access recorded sessions and resources anytime, anywhere
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600">
                    Missed a class? No problem. All sessions are recorded and available for review, along with supplementary materials to enhance your understanding.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-700"
                    >
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2z" />
                      <path d="M12 8h.01" />
                      <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                  </div>
                  <CardTitle>Expert Instructors</CardTitle>
                  <CardDescription>
                    Learn from industry professionals and academics
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-600">
                    Our instructors bring real-world expertise and academic excellence to each class, providing you with valuable insights and practical knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How LernLive Works
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Getting started is easy - follow these simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-700 text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Account</h3>
                <p className="text-gray-600">Sign up for free and complete your profile to get personalized recommendations</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-700 text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Classes</h3>
                <p className="text-gray-600">Browse our catalog of courses and find the perfect match for your learning goals</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-700 text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Live Sessions</h3>
                <p className="text-gray-600">Attend interactive live classes and engage with instructors and fellow students</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-700 text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                <p className="text-gray-600">Monitor your learning journey and earn certificates upon course completion</p>
              </div>
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="#get-started">Start Your Learning Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Benefits of Learning with Us
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Experience the advantages that set LernLive apart from traditional learning methods
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
                  <p className="text-gray-600">Connect with like-minded learners, share insights, and build a network of professionals in your field.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Learning Path</h3>
                  <p className="text-gray-600">Our adaptive platform tailors content to your pace and learning style, maximizing retention and engagement.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
                  <p className="text-gray-600">Learn at your convenience with flexible scheduling options and on-demand access to course materials.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-teal-600"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-device Access</h3>
                  <p className="text-gray-600">Seamlessly switch between devices - learn on your laptop, tablet, or phone without losing your progress.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2">Ready to transform your learning experience?</h3>
                  <p className="text-blue-600">Join thousands of students who are already benefiting from our innovative learning platform.</p>
                </div>
                <div>
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="#get-started">Get Started Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What Our Students Say
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Hear from learners who have transformed their education with LernLive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">SP</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah P.</h4>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      className="inline-block mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The live interactive sessions made all the difference in my learning journey. Being able to ask questions in real-time helped me grasp complex concepts quickly."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-700 font-semibold">MJ</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Manish J.</h4>
                    <p className="text-sm text-gray-500">Business Student</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      className="inline-block mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The flexibility of LernLive allowed me to balance my studies with work. I could attend classes from anywhere and access recordings when I needed to review material."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-700 font-semibold">AK</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Aisha K.</h4>
                    <p className="text-sm text-gray-500">Data Scientist</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FFB800"
                      className="inline-block mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The expert instructors on LernLive have been instrumental in my career transition. Their industry knowledge and mentorship helped me land my dream job in data science."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Get answers to common questions about LernLive
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    How does LernLive differ from other online learning platforms?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    LernLive focuses on real-time interactive learning with live classes and direct instructor engagement. Unlike pre-recorded courses, our platform creates an immersive classroom experience online, allowing for immediate feedback, discussions, and personalized attention.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Do I need special equipment to participate in live classes?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    All you need is a computer or tablet with a stable internet connection. A webcam and microphone are recommended for full participation, but you can still benefit from classes without them by using the text chat feature.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    What if I miss a scheduled live class?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Don't worry! All live sessions are recorded and made available to enrolled students. You can watch the recording at your convenience and still have access to all course materials.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I interact with other students outside of class time?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, LernLive provides community forums for each course where you can connect with fellow students, share resources, and discuss course materials. Many courses also include group projects and study sessions to enhance collaboration.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    How do I get technical support if I encounter issues?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Our support team is available 24/7 through chat and email. For urgent matters, we offer phone support during business hours. Additionally, we have an extensive knowledge base with tutorials and troubleshooting guides.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        

        {/* Feedback Section */}
        <section id="feedback" className="w-full py-12 md:py-24 bg-gradient-to-r from-dark-3 to-purple-600 text-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Share Your Feedback
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                We value your thoughts and suggestions to improve our platform
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Feedback Category</label>
                    <select
                      id="icategory"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Feedback</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="content">Content Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Feedback
                  </label>
                  <textarea
                    id="feedback"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Share your thoughts, suggestions, or report issues..."
                  />
                </div>

                <div>
      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
        Rate Your Experience
      </label>
      <div className="flex space-x-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-700'}`}
          >
            ★
          </button>
        ))}
      </div>
    </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Submit Feedback
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-6 bg-gray-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">LernLive</h3>
                <p className="text-gray-400">
                  The leading platform for interactive online learning and live education.
                </p>
                <div className="flex space-x-4 mt-4">
                  {/* Social Media Icons */}
                  {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href={`https://www.${social}.com`}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${social} link`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {social === "twitter" && (
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        )}
                        {social === "facebook" && (
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        )}
                        {social === "instagram" && (
                          <>
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </>
                        )}
                        {social === "linkedin" && (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2">
                  {["How it Works", "Features", "About"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

  

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR", "Accessibility"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/legal/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© {new Date().getFullYear()} LernLive. All rights reserved.</p>
              <p className="text-gray-400 mt-4 md:mt-0">
                Made by Nilesh for learners worldwide
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}