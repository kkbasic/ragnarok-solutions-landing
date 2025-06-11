// "use client";

// import type React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowLeft, Briefcase } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Portfolio() {
//   const portfolioItems = [
//     {
//       title: "AI-Powered Analytics Platform",
//       category: "AI Development",
//       description:
//         "A comprehensive analytics platform utilizing machine learning to provide real-time business insights and predictive analytics. Features include customizable dashboards, automated reporting, and predictive modeling.",
//       technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
//       image: "images/big.jpeg",
//       challenges:
//         "Integrated complex ML models with real-time data processing while maintaining high performance.",
//       results:
//         "Increased client decision-making efficiency by 40% and reduced operational costs by 25%.",
//     },
//     {
//       title: "E-Commerce Web Application",
//       category: "Web Development",
//       description:
//         "A fully responsive e-commerce platform with advanced search capabilities, secure payment integration, and an intuitive admin panel for inventory management.",
//       technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
//       image: "images/big.jpeg",
//       challenges:
//         "Ensuring seamless performance across devices and secure transaction processing.",
//       results:
//         "Improved user retention by 30% and increased sales conversions by 20%.",
//     },
//     {
//       title: "Fitness Tracking Mobile App",
//       category: "Mobile App Development",
//       description:
//         "A cross-platform mobile application offering real-time fitness tracking, personalized workout plans, and integration with wearable devices for comprehensive health monitoring.",
//       technologies: ["React Native", "Firebase", "GraphQL", "TypeScript"],
//       image: "/images/cite.jpeg",
//       challenges:
//         "Synchronizing real-time data across multiple devices with minimal latency.",
//       results:
//         "Achieved over 100,000 downloads and a 4.8-star rating in app stores.",
//     },
//     {
//       title: "Interactive 3D Product Showcase",
//       category: "3D Websites",
//       description:
//         "An immersive 3D web experience allowing users to interact with products through dynamic visualizations, animations, and customizable options.",
//       technologies: ["Three.js", "React", "WebGL", "Blender"],
//       image: "/images/geo.jpeg",
//       challenges:
//         "Optimizing 3D rendering performance for smooth interactions on various devices.",
//       results:
//         "Enhanced user engagement by 50% and reduced bounce rates by 15%.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Briefcase className="h-6 w-6 text-blue-500" />
//             <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
//               RAGNAROK SOLUTIONS
//             </span>
//           </div>
//           <Link href="/">
//             <Button
//               variant="outline"
//               className="border-white/20 hover:bg-white/10 text-white"
//             >
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Home
//             </Button>
//           </Link>
//         </div>
//       </header>

//       {/* Portfolio Content */}
//       <section className="pt-24 pb-24 relative overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 rounded-full filter blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h1 className="text-3xl md:text-4xl font-bold mb-4">
//               Our Portfolio
//             </h1>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Explore our collection of innovative projects that showcase our
//               expertise in delivering cutting-edge software solutions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {portfolioItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl hover:bg-zinc-800/80 transition-colors"
//               >
//                 <div className="mb-6">
//                   <div className="w-full h-64 bg-zinc-700 rounded-lg overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
//                 <p className="text-blue-400 text-sm mb-4">{item.category}</p>
//                 <p className="text-gray-400 mb-4">{item.description}</p>
//                 <div className="mb-4">
//                   <h3 className="text-lg font-semibold mb-2">
//                     Technologies Used
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {item.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <h3 className="text-lg font-semibold mb-2">Challenges</h3>
//                   <p className="text-gray-400">{item.challenges}</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">Results</h3>
//                   <p className="text-gray-400">{item.results}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 border-t border-white/10">
//         <div className="container mx-auto px-4">
//           <div className="text-center text-gray-500 text-sm">
//             <p>
//               © {new Date().getFullYear()} Ragnarok Solutions. All rights
//               reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import type React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "My IARE",
      category: "Mobile App Development",
      description:
        "A powerful app designed to streamline student records, attendance, results, and marks. Built with Flutter and Firebase, it ensures secure authentication, real-time updates, and seamless communication for students. Easily manage academic activities, monitor campus operations, and enhance efficiency with an intuitive interface.",
      technologies: ["Flutter", "Firebase", "Dart"],
      image: "/images/myIare-portfolio.jpeg",
      challenges:
        "Ensuring real-time synchronization of data across multiple users while maintaining security and performance.",
      results:
        "Improved campus operation efficiency by 35% and enhanced student engagement with academic updates.",
    },
    {
      title: "Geoprospector",
      category: "AI Development",
      description:
        "A software solution developed to identify potential natural resource locations using Google Maps satellite images. It utilizes advanced algorithms and machine learning techniques to analyze imagery and pinpoint areas suitable for renewable energy infrastructure like solar power plants and windmills.",
      technologies: ["Python", "Google Maps API", "TensorFlow", "Scikit-learn"],
      image: "/images/geo.jpeg",
      challenges:
        "Processing large-scale satellite imagery efficiently and ensuring high accuracy in resource identification.",
      results:
        "Achieved 85% accuracy in identifying suitable locations, reducing site scouting time by 40%.",
    },
    {
      title: "CMS Bot",
      category: "Web Development",
      description:
        "A Telegram bot designed for campus management, providing a range of services and information to students, faculty, and staff. It facilitates quick access to updates, schedules, and resources, enhancing communication within the campus community.",
      technologies: ["Python", "Telegram API", "Node.js"],
      image: "/images/cms.jpeg",
      challenges:
        "Integrating the bot with existing campus systems and ensuring reliable, real-time responses.",
      results:
        "Reduced administrative query response time by 50% and improved accessibility for campus stakeholders.",
    },
    {
      title: "BiG App",
      category: "Mobile App Development",
      description:
        "A Flutter-based mobile application designed for gated communities to streamline secure access control, visitor management, and resident communication. It provides a seamless and secure experience for residents and administrators alike.",
      technologies: ["Flutter", "Firebase", "Dart"],
      image: "/images/bigPortfolio.jpeg",
      challenges:
        "Implementing robust security features for access control while ensuring a user-friendly interface.",
      results:
        "Enhanced community security by 30% and improved resident satisfaction through efficient communication.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              RAGNAROK SOLUTIONS
            </span>
          </div>
          <Link href="/">
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10 text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Portfolio Content */}
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our collection of innovative projects that showcase our
              expertise in delivering cutting-edge software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 border border-white/10 p-8 rounded-xl hover:bg-zinc-800/80 transition-colors"
              >
                <div className="mb-6">
                  <div className="w-full h-64 bg-zinc-700 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-blue-400 text-sm mb-4">{item.category}</p>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                  <p className="text-gray-400">{item.challenges}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Results</h3>
                  <p className="text-gray-400">{item.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Ragnarok Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
