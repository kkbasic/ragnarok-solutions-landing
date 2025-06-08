"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Laptop,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Box,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function Home() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !message || !name) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });

    setEmail("");
    setMessage("");
    setName("");
    setIsSubmitting(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "AI Development",
      description:
        "We create cutting-edge AI solutions to automate processes and enhance decision-making for your business.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description:
        "Building responsive, scalable, and modern web applications tailored to your business needs.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App Development",
      description:
        "Crafting intuitive and high-performance mobile apps for iOS and Android platforms.",
    },
    {
      icon: <Box className="h-10 w-10" />,
      title: "3D Websites",
      description:
        "Designing immersive and interactive 3D web experiences to captivate your audience.",
    },
  ];

  const teamMembers = [
    // {
    //   name: "Sophia Chen",
    //   role: "Lead Web Developer",
    //   bio: "Expert in modern web technologies, delivering seamless and scalable web solutions.",
    // },
    {
      name: "Dheeraj Krishna",
      role: "Mobile App Specialist",
      bio: "Veteran developer with a focus on creating high-performance mobile applications.",
    },
    {
      name: "Dhruv Chopra",
      role: "Software Architect",
      bio: "4+ years of experience in software engineering, specializing in AI and full-stack development.",
    },
    {
      name: "Karan Kasarla",
      role: "3D Design Lead",
      bio: "Creative designer specializing in immersive 3D web experiences and UI/UX.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We analyze your requirements and business goals to identify the best software solutions.",
    },
    {
      number: "02",
      title: "Planning",
      description:
        "We create a detailed roadmap and select the optimal technologies for your project.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our team designs intuitive interfaces and robust architectures for your software.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "We build your solution using agile methodologies and best coding practices.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Rigorous testing ensures your software is reliable, secure, and bug-free.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "We provide ongoing maintenance and updates to keep your software performing optimally.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Box className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                RAGNAROK SOLUTIONS
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#team"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Team
              </a>
              <a
                href="#process"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 pt-20 mobile-menu">
          <nav className="flex flex-col items-center space-y-6 p-8">
            <a
              href="#services"
              className="text-lg hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-lg hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#team"
              className="text-lg hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#process"
              className="text-lg hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white w-full mt-4">
              Get Started
            </Button>
          </nav>
        </div>
      )}
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-4 z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block">Empowering Your Business</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                With Innovative Software Solutions
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver custom software solutions, from AI to 3D websites, to
              drive innovation and growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 text-lg h-auto">
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-white px-8 py-6 text-lg h-auto"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="animate-bounce">
                <ChevronRight className="h-8 w-8 rotate-90 text-white/50" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="pt-20">
        {/* Services Section */}
        <section id="services" className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive software solutions to tackle your toughest
                business challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl hover:bg-zinc-800/80 transition-colors"
                >
                  <div className="text-blue-500 mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Ragnarok Solutions
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine technical expertise with innovative thinking to
                  deliver software that drives results.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full h-fit">
                      <Laptop className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Comprehensive Expertise
                      </h3>
                      <p className="text-gray-400">
                        Our team excels in AI, web, mobile, and 3D technologies
                        to meet all your software needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-teal-500/20 p-3 rounded-full h-fit">
                      <Code className="h-5 w-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Tailored Solutions
                      </h3>
                      <p className="text-gray-400">
                        Every project is custom-built to align with your unique
                        business objectives.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full h-fit">
                      <Box className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Innovative Approach
                      </h3>
                      <p className="text-gray-400">
                        We leverage the latest technologies to create
                        cutting-edge solutions that stand out.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 p-1">
                  <div className="w-full h-full rounded-xl bg-zinc-900 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Box className="h-24 w-24 mx-auto mb-6 text-blue-500" />
                      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="text-gray-400">
                        To empower businesses with innovative software solutions
                        that drive growth and efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-1 z-[-1]">
                  <div className="w-full h-full rounded-xl bg-zinc-900"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A talented team dedicated to delivering innovative software
                solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl hover:bg-zinc-800/80 transition-colors"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center">
                    <div className="w-[90px] h-[90px] rounded-full bg-zinc-800 flex items-center justify-center">
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-sm mb-4 text-center">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-center">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A streamlined approach to delivering high-quality software
                solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 border border-white/10 p-8 rounded-xl relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-black font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Ready to transform your business with custom software? Let's
                  connect.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <a
                      href="mailto:ragnaroksolution@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      ragnaroksolution@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <Laptop className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-gray-300">India </span>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://github.com/RagnarokSolutions"
                            className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="https://www.linkedin.com/company/ragnaroksolutions/about/?viewAsMember=true"
                            className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl"
                >
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-zinc-900/50 border-white/10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-zinc-900/50 border-white/10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-zinc-900/50 border-white/10 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white",
                        isSubmitting && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Box className="h-5 w-5 text-blue-500" />
                  <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    RAGNAROK SOLUTIONS
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Empowering businesses with innovative software solutions for
                  growth and efficiency.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      AI Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      3D Websites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Custom Software
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-3">
                  <li className="text-gray-400">
                    <Mail className="h-4 w-4 inline-block mr-2" />
                    <a
                      href="mailto:ragnaroksolution@gmail.com"
                      className="hover:text-blue-400 transition-colors"
                    >
                      ragnaroksolution@gmail.com
                    </a>
                  </li>
                  <li className="text-gray-400">
                    <Laptop className="h-4 w-4 inline-block mr-2" />
                    India
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
              <p>
                © {new Date().getFullYear()} Ragnarok Solutions. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </div>
  );
}
