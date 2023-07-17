// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: "export",
//   exportPathMap: async function (
//     defaultPathMap,
//     {dev,dir, outDir, distDir, buildId}
//     ){
//       return{
//         '/':{page: '/'}
//       }
//     },
//   images: {
//     loader: "akamai",
//     path: "",
//     unoptimized: "true",
//     domains: ["links.papareact.com", "image.tmdb.org"],
//   },
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// };

// module.export = nextConfig;

// module.export = {
//   exportPathMap: async function () {
//     const paths = {
//     "/": { page: "/" },
//     };
//     return paths;
//     },
// }

module.exports = {
  exportPathMap: async function (
    //     defaultPathMap,
        {dev,dir, outDir, distDir, buildId}
        ){
          return{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            '/':{page: '/'}
          }
        },
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