import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
