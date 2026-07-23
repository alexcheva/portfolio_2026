import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage =
  isGithubPages &&
  Boolean(repositoryName) &&
  !repositoryName.endsWith(".github.io");
const basePath = isProjectPage ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath ?? "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
