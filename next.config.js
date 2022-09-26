const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
  scope: "/editor",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async () => ({
    "/": { page: "/Editor" }
  })
};

module.exports = withPWA(nextConfig);
