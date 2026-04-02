// src/notes/notes.11tydata.js
module.exports = {
  layout: "layouts/note.njk",
  tags: ["notes"],
  type: "note",
  eleventyComputed: {
    permalink: (data) => {
      if (!data.date || !data.slug) return false;
      const d = new Date(data.date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      return `/notes/${year}/${month}/${data.slug}/`;
    },
  },
};
