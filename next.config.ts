import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  /* deixando a imagem com 100 de qualidade */
  images: {
    //define a qualidade das imagens
    qualities: [75, 100],
    
    //permite imagens de links externos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'

      }]
  },

};

export default nextConfig;
