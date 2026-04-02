// src/posts/posts.11tydata.js
module.exports = {
  layout: "layouts/post.njk",
  tags: ["posts"],
  type: "post",
  eleventyComputed: {
    permalink: (data) => {
      if (!data.date || !data.slug) return false;
      const d = new Date(data.date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      return `/posts/${year}/${month}/${data.slug}/`;
    },
  },
};
