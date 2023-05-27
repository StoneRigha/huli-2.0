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

module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    
  },
  reactStrictMode: true,
  images:{
    loader:'akamai',
    path: '',
    unoptimized: true,
    domains: ["links.papareact.com", "image.tmdb.org"], 
  },
  
};




