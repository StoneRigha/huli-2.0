// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'export',
//   // Optional: Add a trailing slash to all paths `/about` -> `/about/`
//   // trailingSlash: true,
//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// };

// // module.exports = {
// //   exportPathMap: async function (
// //     defaultPathMap,
// //     { dev, dir, outDir, distDir, buildId },
    
    
// //   ) {
    
// //   },
// //   reactStrictMode: true,
// //   images:{
// //     loader:'akamai',
// //     path: '',
// //     unoptimized: true,
// //     domains: ["links.papareact.com", "image.tmdb.org"], 
// //   },
  
// // };

// // module.exports = {
// //   exportPathMap: async function (
// //     defaultPathMap,
// //     { dev, dir, outDir, distDir, buildId },
// //   ) {
// //     exportPathMap: async function() {
// //       const paths = {
// //         '/': { page: '/' }
// //       };
// //       return paths; 
// //     }
// //   },
// //   reactStrictMode: true,
// //   images:{
// //     loader:'akamai',
// //     path: '',
// //     unoptimized: true,
// //     domains: ["links.papareact.com", "image.tmdb.org"], 
// //   },
// // };

// module.exports = {
//   reactStrictMode: true,
//   exportPathMap: async function (
//         defaultPathMap,
//         { dev, dir, outDir, distDir, buildId },
//       ) {
//         // exportPathMap: async function() {
//         //   const paths = {
//         //     '/': { page: '/' }
//         //   };
//         //   return paths; 
//         // }
//       },
//   images: {
//     domains: ['links.papareact.com','image.tmdb.org'],
//   },
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// }


module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['links.papareact.com','image.tmdb.org'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}