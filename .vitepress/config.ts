import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Template code",
  description: "Snippet code for all language",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/javascript/intro" },
    ],

    sidebar: [
      {
        text: "Javascript",
        items: [
          { text: "Introduction", link: "/javascript/intro" },
          {
            text: "Core",
            link: "/javascript/core/index",
            collapsed: true,
            items: [
              {
                text: "camelCase",
                link: "/javascript/core/camel-case",
              },
              {
                text: "flatten",
                link: "/javascript/core/flatten",
              },
              {
                text: "copyToClipboard",
                link: "/javascript/core/copy-to-clipboard",
              },
              {
                text: "copyImage",
                link: "/javascript/core/copy-image",
              },
              {
                text: "randomHexColor",
                link: "/javascript/core/random-hex-color",
              },
              {
                text: "formatVideoTime",
                link: "/javascript/core/format-video-time",
              },
              {
                text: "formatFileSize",
                link: "/javascript/core/format-file-size",
              },
              {
                text: "byteSize",
                link: "/javascript/core/byte-size",
              },
              {
                text: "countOccurrences",
                link: "/javascript/core/count-occurrences",
              },
              {
                text: "difference",
                link: "/javascript/core/difference",
              },
            ],
          },
          {
            text: "Validates",
            link: "/javascript/validates/index",
            collapsed: true,
            items: [
              {
                text: "File extension",
                link: "/javascript/validates/file-extension",
              },
            ],
          },
          {
            text: "Download",
            link: "/javascript/download/index",
            collapsed: true,
            items: [
              {
                text: "Force download file",
                link: "/javascript/download/force-download-file",
              },
            ],
          },
          {
            text: "Date",
            link: "/javascript/date/index",
            collapsed: true,
            items: [
              {
                text: "Day of year",
                link: "/javascript/date/day-of-year",
              },
            ],
          },
        ],
        collapsed: true,
      },
      {
        text: "Algorithm & Performance",
        items: [{ text: "Introduction", link: "/algorithm-performance/intro" }],
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
