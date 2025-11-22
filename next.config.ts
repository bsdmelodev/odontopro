import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  /* deixando a imagem com 100 de qualidade */
   images: {
    qualities: [75, 100],
  },

};

export default nextConfig;
