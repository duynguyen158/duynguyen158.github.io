// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Duy K. Nguyen",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: ({ title, data, path }) =>
    `
      <link rel="icon" href="balloon-32x32.png" type="image/png" sizes="32x32">
      <meta property="og:title" content="🎈 ${title || "Duy K. Nguyen"}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://duyknguyen.com${path}" />
      <meta property="og:description" content="Duy K. Nguyen is a data scientist, engineer, and journalist on the A.I. Initiatives team at The New York Times." />
    `,

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: ["parchment", "ocean-floor"],
  style: "global.css",
  header: '<span class="focus-gradient"><a href="/">Duy K. Nguyen</a></span>', // what to show in the header (HTML)
  footer: "Built with Observable.", // what to show in the footer (HTML)
  sidebar: false, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  pager: false, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
