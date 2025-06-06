"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// FloatingPaths component to generate animated SVG paths
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Ragnarok Solutions</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

interface BackgroundPathsProps {
  title?: string;
}

export default function BackgroundPaths({
  title = "Ragnarok Solutions",
}: BackgroundPathsProps) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#05050a] to-[#0f0825]">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Button
              variant="ghost"
              onClick={() => {
                window.location.href = "/home";
              }}
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Discover Excellence
              </span>
              <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                →
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

////////
///////
// another option

// "use client";

// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// // Interface for particle properties
// interface Particle {
//   id: number;
//   x: number;
//   y: number;
//   size: number;
//   type: "dot" | "comet";
//   gradient: string;
//   glow: string;
// }

// // Helper function to generate particles along the top with comet-like properties
// const generateParticles = (
//   numParticles: number,
//   type: "dot" | "comet",
//   gradient: string,
//   glow: string
// ): Particle[] => {
//   const particles: Particle[] = [];
//   const viewportWidth =
//     typeof window !== "undefined" ? window.innerWidth : 1920;
//   const padding = 50;

//   for (let i = 0; i < numParticles; i++) {
//     const x = padding + Math.random() * (viewportWidth - 2 * padding); // Random x along top
//     const y = 0; // Start at top
//     const size = type === "dot" ? 2 + Math.random() * 4 : 5 + Math.random() * 5; // Dots: 2-6, Comets: 5-10
//     particles.push({ id: i, x, y, size, type, gradient, glow });
//   }
//   return particles;
// };

// // Define particle groups with comet-like visuals
// const particleGroups = [
//   {
//     id: 1,
//     numParticles: 200,
//     type: "dot" as const,
//     gradient: "wave1",
//     glow: "0 0 15px rgba(100, 200, 255, 0.9), 0 0 30px rgba(100, 200, 255, 0.7)",
//   },
//   {
//     id: 2,
//     numParticles: 150,
//     type: "dot" as const,
//     gradient: "wave2",
//     glow: "0 0 12px rgba(200, 100, 255, 0.9), 0 0 25px rgba(200, 100, 255, 0.7)",
//   },
//   {
//     id: 3,
//     numParticles: 50,
//     type: "comet" as const,
//     gradient: "wave3",
//     glow: "0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.8)",
//   },
// ];

// // Generate particles for each group
// const particleGroupsWithPositions = particleGroups.map((group) => ({
//   ...group,
//   particles: generateParticles(
//     group.numParticles,
//     group.type,
//     group.gradient,
//     group.glow
//   ),
// }));

// interface BackgroundPathsProps {
//   title: string;
// }

// export default function BackgroundPaths({ title }: BackgroundPathsProps) {
//   const router = useRouter();
//   const viewportWidth =
//     typeof window !== "undefined" ? window.innerWidth : 1920;
//   const viewportHeight =
//     typeof window !== "undefined" ? window.innerHeight : 1080;
//   const padding = 50;

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#05050a] to-[#0f0825]">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2.5 }}
//         className="absolute inset-0 z-0"
//       >
//         <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
//           <defs>
//             <radialGradient id="wave1" cx="50%" cy="50%" r="50%">
//               <stop
//                 offset="0%"
//                 style={{ stopColor: "#80d4ff", stopOpacity: 1 }}
//               />{" "}
//               {/* Bright cyan */}
//               <stop
//                 offset="100%"
//                 style={{ stopColor: "#4a9bff", stopOpacity: 0.8 }}
//               />
//             </radialGradient>
//             <radialGradient id="wave2" cx="50%" cy="50%" r="50%">
//               <stop
//                 offset="0%"
//                 style={{ stopColor: "#cc80ff", stopOpacity: 1 }}
//               />{" "}
//               {/* Bright purple */}
//               <stop
//                 offset="100%"
//                 style={{ stopColor: "#9b4aff", stopOpacity: 0.8 }}
//               />
//             </radialGradient>
//             <radialGradient id="wave3" cx="50%" cy="50%" r="50%">
//               <stop
//                 offset="0%"
//                 style={{ stopColor: "#ffffff", stopOpacity: 1 }}
//               />{" "}
//               {/* White for comets */}
//               <stop
//                 offset="100%"
//                 style={{ stopColor: "#d4d4ff", stopOpacity: 0.8 }}
//               />
//             </radialGradient>
//             <filter id="cometTrail">
//               <feGaussianBlur in="SourceGraphic" stdDeviation="10" />{" "}
//               {/* Strong trail for comets */}
//               <feColorMatrix
//                 type="matrix"
//                 values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.9 0"
//               />
//             </filter>
//             <filter id="dotGlow">
//               <feGaussianBlur in="SourceGraphic" stdDeviation="5" />{" "}
//               {/* Subtle glow for dots */}
//               <feColorMatrix
//                 type="matrix"
//                 values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.7 0"
//               />
//             </filter>
//           </defs>
//           {particleGroupsWithPositions.map((group) => (
//             <motion.g
//               key={group.id}
//               initial={{ opacity: 0.8 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 opacity: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 5 + group.id * 2,
//                   ease: "easeInOut",
//                 },
//               }}
//             >
//               {group.particles.map((particle) => (
//                 <motion.circle
//                   key={`${group.id}-${particle.id}`}
//                   cx={particle.x}
//                   cy={particle.y}
//                   r={particle.size}
//                   fill={`url(#${group.gradient})`}
//                   style={{
//                     filter:
//                       particle.type === "comet"
//                         ? `drop-shadow(${group.glow}) url(#cometTrail)`
//                         : `drop-shadow(${group.glow}) url(#dotGlow)`,
//                   }}
//                   initial={{ x: particle.x, y: particle.y, opacity: 0.7 }}
//                   animate={{
//                     x: [
//                       particle.x,
//                       Math.max(
//                         padding,
//                         Math.min(
//                           viewportWidth - padding,
//                           particle.x +
//                             Math.sin(Date.now() * 0.001 + particle.id) * 20
//                         )
//                       ),
//                       particle.x,
//                     ],
//                     y: [
//                       particle.y,
//                       Math.max(
//                         padding,
//                         Math.min(viewportHeight - padding, viewportHeight)
//                       ),
//                       particle.y,
//                     ],
//                     opacity: [0.7, 1, 0.7],
//                     scale: [1, 1.3, 1], // Sparkle effect
//                   }}
//                   transition={{
//                     x: {
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       duration: 3 + Math.random() * 2,
//                       ease: "easeInOut",
//                     },
//                     y: {
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       duration: 5 + Math.random() * 3,
//                       ease: "linear",
//                     },
//                     opacity: {
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       duration: 2 + Math.random() * 1.5,
//                       ease: "easeInOut",
//                     },
//                     scale: {
//                       repeat: Infinity,
//                       repeatType: "loop",
//                       duration: 1.5 + Math.random() * 1,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 />
//               ))}
//             </motion.g>
//           ))}
//         </svg>
//       </motion.div>

//       <motion.div
//         initial={{ y: 80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1.8, delay: 1.2 }}
//         className="relative z-10 flex flex-col items-center text-center px-6"
//       >
//         <motion.h1
//           initial={{ scale: 0.75, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.8, delay: 1.5 }}
//           className="inline-block text-white font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight"
//         >
//           {title}
//         </motion.h1>

//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.5, delay: 1.8 }}
//           className="mt-16"
//         >
//           <button
//             onClick={() => router.push("/home")}
//             className="text-white text-lg font-medium transition-all duration-200"
//           >
//             Discover Excellence
//           </button>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }
