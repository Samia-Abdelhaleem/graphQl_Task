let posts = [
  {
    id: 1,
    content: " graphQl last version ",
    comments: [{ text: " so excited to learn it " }, { text: " nice news " }],
    likes: 300,
  },
  {
    id: 2,
    content: " graphQl & Redux ",
    comments: [
      { text: " can we use both together " },
      { text: " which one is better ?" },
    ],
    likes: 500,
  },
];

//Resolvers
const resolvers = {
  Query: {
    posts: () => {
      return posts;
    },
  },
  Mutation: {
    createPost: (__, { content }) => {
      const newId = posts.length;
      posts.push({ id: newId + 1, content, likes: 0, comments: [] });
      return posts[newId];
    },
  },
};

module.exports.resolvers = resolvers;
