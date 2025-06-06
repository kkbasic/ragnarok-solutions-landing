// "use client";

// import type React from "react";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Brain,
//   Code,
//   Database,
//   Github,
//   Linkedin,
//   Mail,
//   Menu,
//   MessageSquare,
//   Sparkles,
//   Twitter,
//   X,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Toaster } from "@/components/ui/toaster";
// import { useToast } from "@/hooks/use-toast";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";

// ("use client");

// export default function Home() {
//   const { toast } = useToast();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [name, setName] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !message || !name) {
//       toast({
//         title: "Missing information",
//         description: "Please fill in all required fields",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       toast({
//         title: "Invalid email",
//         description: "Please enter a valid email address",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     toast({
//       title: "Message sent!",
//       description: "We'll get back to you soon.",
//     });

//     setEmail("");
//     setMessage("");
//     setName("");
//     setIsSubmitting(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as HTMLElement;
//       if (
//         mobileMenuOpen &&
//         !target.closest(".mobile-menu") &&
//         !target.closest(".menu-button")
//       ) {
//         setMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [mobileMenuOpen]);

//   const services = [
//     {
//       icon: <Brain className="h-10 w-10" />,
//       title: "AI Strategy Consulting",
//       description:
//         "We help businesses identify opportunities for AI integration and develop comprehensive strategies for implementation.",
//     },
//     {
//       icon: <Code className="h-10 w-10" />,
//       title: "Custom AI Development",
//       description:
//         "Our team builds bespoke AI solutions tailored to your specific business needs and challenges.",
//     },
//     {
//       icon: <Database className="h-10 w-10" />,
//       title: "Data Engineering",
//       description:
//         "We design and implement robust data pipelines and infrastructure to power your AI initiatives.",
//     },
//     {
//       icon: <MessageSquare className="h-10 w-10" />,
//       title: "Conversational AI",
//       description:
//         "Create intelligent chatbots and virtual assistants that provide exceptional customer experiences.",
//     },
//   ];

//   const teamMembers = [
//     {
//       name: "Alex Morgan",
//       role: "Founder & AI Architect",
//       bio: "Former research scientist with 10+ years experience in machine learning and AI systems.",
//     },
//     {
//       name: "Sophia Chen",
//       role: "Lead Data Scientist",
//       bio: "PhD in Computer Science specializing in natural language processing and computer vision.",
//     },
//     {
//       name: "Marcus Johnson",
//       role: "Engineering Director",
//       bio: "Veteran software engineer with expertise in scalable AI infrastructure and deployment.",
//     },
//     {
//       name: "Olivia Rodriguez",
//       role: "UX/UI Design Lead",
//       bio: "Award-winning designer focused on creating intuitive interfaces for complex AI systems.",
//     },
//   ];

//   const processSteps = [
//     {
//       number: "01",
//       title: "Discovery",
//       description:
//         "We begin by understanding your business objectives, challenges, and data landscape to identify AI opportunities.",
//     },
//     {
//       number: "02",
//       title: "Strategy",
//       description:
//         "Our team develops a comprehensive AI roadmap aligned with your business goals and technical requirements.",
//     },
//     {
//       number: "03",
//       title: "Development",
//       description:
//         "We build, train, and fine-tune AI models using state-of-the-art techniques and your specific data.",
//     },
//     {
//       number: "04",
//       title: "Integration",
//       description:
//         "Our engineers seamlessly integrate AI solutions into your existing systems and workflows.",
//     },
//     {
//       number: "05",
//       title: "Deployment",
//       description:
//         "We ensure smooth deployment with comprehensive testing and monitoring systems in place.",
//     },
//     {
//       number: "06",
//       title: "Optimization",
//       description:
//         "Continuous improvement through performance monitoring, retraining, and feature enhancement.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <Sparkles className="h-6 w-6 text-purple-500" />
//               <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
//                 NEURALUX
//               </span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <a
//                 href="#services"
//                 className="text-sm hover:text-purple-400 transition-colors"
//               >
//                 Services
//               </a>
//               <a
//                 href="#about"
//                 className="text-sm hover:text-purple-400 transition-colors"
//               >
//                 About
//               </a>
//               <a
//                 href="#team"
//                 className="text-sm hover:text-purple-400 transition-colors"
//               >
//                 Team
//               </a>
//               <a
//                 href="#process"
//                 className="text-sm hover:text-purple-400 transition-colors"
//               >
//                 Process
//               </a>
//               <a
//                 href="#contact"
//                 className="text-sm hover:text-purple-400 transition-colors"
//               >
//                 Contact
//               </a>
//               <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
//                 Get Started
//               </Button>
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden menu-button"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-40 bg-black/95 pt-20 mobile-menu">
//           <nav className="flex flex-col items-center space-y-6 p-8">
//             <a
//               href="#services"
//               className="text-lg hover:text-purple-400 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Services
//             </a>
//             <a
//               href="#about"
//               className="text-lg hover:text-purple-400 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About
//             </a>
//             <a
//               href="#team"
//               className="text-lg hover:text-purple-400 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Team
//             </a>
//             <a
//               href="#process"
//               className="text-lg hover:text-purple-400 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Process
//             </a>
//             <a
//               href="#contact"
//               className="text-lg hover:text-purple-400 transition-colors"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Contact
//             </a>
//             <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white w-full mt-4">
//               Get Started
//             </Button>
//           </nav>
//         </div>
//       )}

//       {/* Main Content (No Hero Section Here) */}
//       <div className="pt-20">
//         {/* Services Section */}
//         <section id="services" className="py-24 bg-zinc-900">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Our Services
//               </h2>
//               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                 Comprehensive AI solutions designed to address your most complex
//                 business challenges.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl hover:bg-zinc-800/80 transition-colors"
//                 >
//                   <div className="text-purple-500 mb-6">{service.icon}</div>
//                   <h3 className="text-xl font-bold mb-4">{service.title}</h3>
//                   <p className="text-gray-400">{service.description}</p>
//                   <div className="mt-6">
//                     <a
//                       href="#contact"
//                       className="inline-flex items-center text-purple-400 hover:text-purple-300"
//                     >
//                       Learn more <ArrowRight className="ml-2 h-4 w-4" />
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-16 text-center">
//               <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8">
//                 View All Services
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-24 relative overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 rounded-full filter blur-3xl"></div>
//           </div>

//           <div className="container mx-auto px-4 relative z-10">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Why Choose NEURALUX
//                 </h2>
//                 <p className="text-xl text-gray-300 mb-8">
//                   We combine deep technical expertise with strategic business
//                   thinking to deliver AI solutions that create real value.
//                 </p>

//                 <div className="space-y-6">
//                   <div className="flex gap-4">
//                     <div className="bg-purple-500/20 p-3 rounded-full h-fit">
//                       <Sparkles className="h-5 w-5 text-purple-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2">
//                         Cutting-Edge Expertise
//                       </h3>
//                       <p className="text-gray-400">
//                         Our team includes PhDs and industry veterans with
//                         experience at leading AI research labs and tech
//                         companies.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
//                       <Code className="h-5 w-5 text-cyan-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2">
//                         Custom Solutions
//                       </h3>
//                       <p className="text-gray-400">
//                         We don't believe in one-size-fits-all. Every solution we
//                         build is tailored to your specific business context.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-4">
//                     <div className="bg-purple-500/20 p-3 rounded-full h-fit">
//                       <Database className="h-5 w-5 text-purple-400" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2">
//                         Data-Driven Approach
//                       </h3>
//                       <p className="text-gray-400">
//                         We help you leverage your data assets to create AI
//                         systems that deliver measurable business outcomes.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1">
//                   <div className="w-full h-full rounded-xl bg-zinc-900 p-8 flex items-center justify-center">
//                     <div className="text-center">
//                       <Brain className="h-24 w-24 mx-auto mb-6 text-purple-500" />
//                       <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
//                       <p className="text-gray-400">
//                         To democratize artificial intelligence by making
//                         advanced AI capabilities accessible and actionable for
//                         businesses of all sizes.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-1 z-[-1]">
//                   <div className="w-full h-full rounded-xl bg-zinc-900"></div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section id="team" className="py-24 bg-zinc-900">
//           <div className="container mx-auto px-4">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Meet Our Team
//               </h2>
//               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                 Brilliant minds working together to push the boundaries of
//                 what's possible with AI.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {teamMembers.map((member, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl hover:bg-zinc-800/80 transition-colors"
//                 >
//                   <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
//                     <div className="w-[90px] h-[90px] rounded-full bg-zinc-800 flex items-center justify-center">
//                       <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
//                         {member.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")}
//                       </span>
//                     </div>
//                   </div>
//                   <h3 className="text-xl font-bold mb-2 text-center">
//                     {member.name}
//                   </h3>
//                   <p className="text-purple-400 text-sm mb-4 text-center">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-400 text-center">{member.bio}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Process Section */}
//         <section id="process" className="py-24 relative overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
//           </div>

//           <div className="container mx-auto px-4 relative z-10">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Our Process
//               </h2>
//               <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                 A systematic approach to developing AI solutions that deliver
//                 real business value.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {processSteps.map((step, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="bg-zinc-900/50 border border-white/10 p-8 rounded-xl relative"
//                 >
//                   <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-black font-bold">
//                     {step.number}
//                   </div>
//                   <h3 className="text-xl font-bold mb-4 mt-2">{step.title}</h3>
//                   <p className="text-gray-400">{step.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-24 bg-zinc-900">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                   Get In Touch
//                 </h2>
//                 <p className="text-xl text-gray-300 mb-8">
//                   Ready to explore how AI can transform your business? Let's
//                   start a conversation.
//                 </p>

//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4">
//                     <div className="bg-purple-500/20 p-3 rounded-full">
//                       <Mail className="h-5 w-5 text-purple-400" />
//                     </div>
//                     <a
//                       href="mailto:info@neuralux.ai"
//                       className="text-gray-300 hover:text-purple-400 transition-colors"
//                     >
//                       info@neuralux.ai
//                     </a>
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <div className="bg-purple-500/20 p-3 rounded-full">
//                       <Sparkles className="h-5 w-5 text-purple-400" />
//                     </div>
//                     <span className="text-gray-300">
//                       San Francisco • New York • London
//                     </span>
//                   </div>

//                   <div className="flex gap-4 mt-8">
//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <a
//                             href="#"
//                             className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
//                             aria-label="Twitter"
//                           >
//                             <Twitter className="h-5 w-5" />
//                           </a>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Twitter</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <a
//                             href="#"
//                             className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
//                             aria-label="LinkedIn"
//                           >
//                             <Linkedin className="h-5 w-5" />
//                           </a>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>LinkedIn</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>

//                     <TooltipProvider>
//                       <Tooltip>
//                         <TooltipTrigger asChild>
//                           <a
//                             href="#"
//                             className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
//                             aria-label="GitHub"
//                           >
//                             <Github className="h-5 w-5" />
//                           </a>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>GitHub</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <form
//                   onSubmit={handleSubmit}
//                   className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl"
//                 >
//                   <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

//                   <div className="space-y-4">
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-medium mb-2"
//                       >
//                         Name
//                       </label>
//                       <Input
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500"
//                         placeholder="Your name"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium mb-2"
//                       >
//                         Email
//                       </label>
//                       <Input
//                         id="email"
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500"
//                         placeholder="your.email@example.com"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="message"
//                         className="block text-sm font-medium mb-2"
//                       >
//                         Message
//                       </label>
//                       <Textarea
//                         id="message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500 min-h-[120px]"
//                         placeholder="Tell us about your project..."
//                       />
//                     </div>

//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className={cn(
//                         "w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white",
//                         isSubmitting && "opacity-70 cursor-not-allowed"
//                       )}
//                     >
//                       {isSubmitting ? "Sending..." : "Send Message"}
//                     </Button>
//                   </div>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="py-12 border-t border-white/10">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-4 gap-8">
//               <div>
//                 <div className="flex items-center gap-2 mb-4">
//                   <Sparkles className="h-5 w-5 text-purple-500" />
//                   <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
//                     NEURALUX
//                   </span>
//                 </div>
//                 <p className="text-gray-400 mb-6">
//                   Transforming business through artificial intelligence and
//                   machine learning solutions.
//                 </p>
//                 <div className="flex gap-4">
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     <Twitter className="h-5 w-5" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     <Linkedin className="h-5 w-5" />
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-400 hover:text-purple-400 transition-colors"
//                   >
//                     <Github className="h-5 w-5" />
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Services</h4>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       AI Strategy
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Custom AI Development
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Data Engineering
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Conversational AI
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Computer Vision
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Company</h4>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="#about"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#team"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Team
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-400 hover:text-purple-400 transition-colors"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-lg font-semibold mb-4">Contact</h4>
//                 <ul className="space-y-3">
//                   <li className="text-gray-400">
//                     <Mail className="h-4 w-4 inline-block mr-2" />
//                     <a
//                       href="mailto:info@neuralux.ai"
//                       className="hover:text-purple-400 transition-colors"
//                     >
//                       info@neuralux.ai
//                     </a>
//                   </li>
//                   <li className="text-gray-400">
//                     <Sparkles className="h-4 w-4 inline-block mr-2" />
//                     San Francisco
//                   </li>
//                   <li className="text-gray-400">
//                     <Sparkles className="h-4 w-4 inline-block mr-2" />
//                     New York
//                   </li>
//                   <li className="text-gray-400">
//                     <Sparkles className="h-4 w-4 inline-block mr-2" />
//                     London
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
//               <p>© {new Date().getFullYear()} NEURALUX. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>

//         <Toaster />
//       </div>
//     </div>
//   );
// }

"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  ArrowRight,
  Brain,
  ChevronRight,
  Code,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  Sparkles,
  Twitter,
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
      icon: <Brain className="h-10 w-10" />,
      title: "AI Strategy Consulting",
      description:
        "We help businesses identify opportunities for AI integration and develop comprehensive strategies for implementation.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom AI Development",
      description:
        "Our team builds bespoke AI solutions tailored to your specific business needs and challenges.",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Engineering",
      description:
        "We design and implement robust data pipelines and infrastructure to power your AI initiatives.",
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Conversational AI",
      description:
        "Create intelligent chatbots and virtual assistants that provide exceptional customer experiences.",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & AI Architect",
      bio: "Former research scientist with 10+ years experience in machine learning and AI systems.",
    },
    {
      name: "Sophia Chen",
      role: "Lead Data Scientist",
      bio: "PhD in Computer Science specializing in natural language processing and computer vision.",
    },
    {
      name: "Marcus Johnson",
      role: "Engineering Director",
      bio: "Veteran software engineer with expertise in scalable AI infrastructure and deployment.",
    },
    {
      name: "Olivia Rodriguez",
      role: "UX/UI Design Lead",
      bio: "Award-winning designer focused on creating intuitive interfaces for complex AI systems.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business objectives, challenges, and data landscape to identify AI opportunities.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our team develops a comprehensive AI roadmap aligned with your business goals and technical requirements.",
    },
    {
      number: "03",
      title: "Development",
      description:
        "We build, train, and fine-tune AI models using state-of-the-art techniques and your specific data.",
    },
    {
      number: "04",
      title: "Integration",
      description:
        "Our engineers seamlessly integrate AI solutions into your existing systems and workflows.",
    },
    {
      number: "05",
      title: "Deployment",
      description:
        "We ensure smooth deployment with comprehensive testing and monitoring systems in place.",
    },
    {
      number: "06",
      title: "Optimization",
      description:
        "Continuous improvement through performance monitoring, retraining, and feature enhancement.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                NEURALUX
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-sm hover:text-purple-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-sm hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#team"
                className="text-sm hover:text-purple-400 transition-colors"
              >
                Team
              </a>
              <a
                href="#process"
                className="text-sm hover:text-purple-400 transition-colors"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white">
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
              className="text-lg hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-lg hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#team"
              className="text-lg hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#process"
              className="text-lg hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-purple-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white w-full mt-4">
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
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
              <span className="block">Transforming Business</span>
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                Through Artificial Intelligence
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
              We build intelligent solutions that drive innovation, efficiency,
              and growth for forward-thinking organizations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-6 text-lg h-auto">
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
                Comprehensive AI solutions designed to address your most complex
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
                  <div className="text-purple-500 mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-purple-600/10 rounded-full filter blur-3xl"></div>
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
                  Why Choose NEURALUX
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We combine deep technical expertise with strategic business
                  thinking to deliver AI solutions that create real value.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                      <Sparkles className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Cutting-Edge Expertise
                      </h3>
                      <p className="text-gray-400">
                        Our team includes PhDs and industry veterans with
                        experience at leading AI research labs and tech
                        companies.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-cyan-500/20 p-3 rounded-full h-fit">
                      <Code className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Custom Solutions
                      </h3>
                      <p className="text-gray-400">
                        We don't believe in one-size-fits-all. Every solution we
                        build is tailored to your specific business context.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full h-fit">
                      <Database className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Data-Driven Approach
                      </h3>
                      <p className="text-gray-400">
                        We help you leverage your data assets to create AI
                        systems that deliver measurable business outcomes.
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
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-1">
                  <div className="w-full h-full rounded-xl bg-zinc-900 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="h-24 w-24 mx-auto mb-6 text-purple-500" />
                      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                      <p className="text-gray-400">
                        To democratize artificial intelligence by making
                        advanced AI capabilities accessible and actionable for
                        businesses of all sizes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-1 z-[-1]">
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
                Brilliant minds working together to push the boundaries of
                what's possible with AI.
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
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="w-[90px] h-[90px] rounded-full bg-zinc-800 flex items-center justify-center">
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
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
                  <p className="text-purple-400 text-sm mb-4 text-center">
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
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A systematic approach to developing AI solutions that deliver
                real business value.
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
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-black font-bold">
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
                  Ready to explore how AI can transform your business? Let's
                  start a conversation.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <a
                      href="mailto:info@neuralux.ai"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      info@neuralux.ai
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <Sparkles className="h-5 w-5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">
                      San Francisco • New York • London
                    </span>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="#"
                            className="bg-zinc-800 hover:bg-zinc-700 p-3 rounded-full transition-colors"
                            aria-label="Twitter"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Twitter</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="#"
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

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href="#"
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
                        className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500"
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
                        className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500"
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
                        className="bg-zinc-900/50 border-white/10 focus:border-purple-500 focus:ring-purple-500 min-h-[120px]"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white",
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
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                    NEURALUX
                  </span>
                </div>
                <p className="text-gray-400 mb-6">
                  Transforming business through artificial intelligence and
                  machine learning solutions.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      AI Strategy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Custom AI Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Data Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Conversational AI
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Computer Vision
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
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
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
                      href="mailto:info@neuralux.ai"
                      className="hover:text-purple-400 transition-colors"
                    >
                      info@neuralux.ai
                    </a>
                  </li>
                  <li className="text-gray-400">
                    <Sparkles className="h-4 w-4 inline-block mr-2" />
                    San Francisco
                  </li>
                  <li className="text-gray-400">
                    <Sparkles className="h-4 w-4 inline-block mr-2" />
                    New York
                  </li>
                  <li className="text-gray-400">
                    <Sparkles className="h-4 w-4 inline-block mr-2" />
                    London
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} NEURALUX. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </div>
  );
}
