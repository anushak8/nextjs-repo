/*import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   config options here 
};

export default nextConfig;
*/
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  },
};

export default nextConfig;
