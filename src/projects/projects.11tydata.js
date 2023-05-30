module.exports = {
  eleventyComputed: {
    date: (data) => data.updatedDate,
    eleventyNavigation: {
      key: (data) => data.title ?? data.eleventyNavigation.key,
      parent: (data) => {
        if (data.page.url === "/projects/") {
          return undefined;
        }

        return "Projects";
      },
    },
  },
};
