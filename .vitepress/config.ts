import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Template code",
  description: "Snippet code for all language",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/js/intro" },
    ],

    sidebar: [
      {
        text: "Javascript",
        items: [
          { text: "Introduction", link: "/js/intro" },
          {
            text: "Core",
            link: "/js/core/index",
            collapsed: true,
            items: [
              {
                text: "camelCase.js",
                link: "/js/core/camel-case.js",
              },
              {
                text: "flatten.js",
                link: "/js/core/flatten.js",
              },
            ],
          },
        ],
        collapsed: true,
      },
      {
        text: "Algorithm & Performance",
        items: [{ text: "Introduction", link: "/ap/intro" }],
        collapsed: true,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/truongnat/snippet" },
    ],
    search: {
      provider: "local",
    },
  },
  lastUpdated: true,
});
