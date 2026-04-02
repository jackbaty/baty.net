// src/journal/journal.11tydata.js
module.exports = {
  layout: "layouts/journal.njk",
  tags: ["journal"],
  type: "journal",
  eleventyComputed: {
    permalink: (data) => {
      if (!data.slug) return false;
      return `/journal/${data.slug}/`;
    },
  },
};
