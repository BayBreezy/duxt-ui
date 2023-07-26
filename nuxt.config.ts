// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "nuxt-headlessui",
    "@morev/vue-transitions/nuxt",
    "dayjs-nuxt",
  ],

  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
      },
    },
    highlight: {
      theme: {
        default: "github-light",
        dark: "material-theme-palenight",
      },
    },
  },

  headlessui: { prefix: "H" },

  app: {
    head: {
      title: "Duxt UI",
      titleTemplate: "%s - Duxt UI",
      link: [
        //Inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        // Mono font
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swa",
        },
      ],
    },
  },
});
