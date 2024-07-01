import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import footerLinks from "./config/footer-links.json";
import navbarLinks from "./config/navbar-links.json";
import "dotenv/config";

const config: Config = {
  title: "EcoEarn Docs",
  tagline: "Official documentation for EcoEarn.",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  // Set the production url of your site here
  url: "https://docs.ecoearn.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "EcoEarn", // Usually your GitHub org/user name.
  projectName: "ecoearn-doc", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  // themes: ["docusaurus-theme-search-typesense"],
  themeConfig: {
    // Replace with your project's social card
    image: "img/aelficon.png",
    navbar: {
      logo: {
        alt: "aelf",
        src: "img/ecoearn-normal.svg",
        srcDark: "img/ecoearn-white.svg",
      },
      items: [
        ...navbarLinks.links,
        {
          href: "https://github.com/EcoEarn/ecoearn-interface",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "csharp",
        "java",
        "json",
        "php",
        "protobuf",
      ],
    },
    docs: {
      sidebar: {
        hideable: true, // https://docusaurus.io/docs/sidebar#hideable-sidebar
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
