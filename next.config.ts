import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['wed-gallery.s3.us-east-1.amazonaws.com'],
  },
};

export default withFlowbiteReact(nextConfig);