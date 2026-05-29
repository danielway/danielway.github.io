module.exports = {
  eleventyComputed: {
    date: (data) => data.updatedDate ?? data.createdDate,
    eleventyNavigation: {
      key: (data) => data.title ?? data.eleventyNavigation.key,
      parent: () => "Projects",
    },
  },
};
