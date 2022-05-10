const accounts = [
  {
    id: "1",
    userName: "samia",
    email: "samia@gmail.com",
    password: "1234",
  },
  { id: "2", userName: "sara", email: "sara@gmail.com", password: "5678" },
];

//Resolvers
const resolvers = {
  Query: {
    getAccount(_, { userName, email }) {
      const existingAccount = accounts.find(
        (account) => account.userName === userName && account.email === email
      );

      if (existingAccount) {
        console.log(`welcome ${existingAccount.userName}  `);
      } else {
        console.log("your account doesn't belong to our system ");
      }

      return existingAccount;
    },

    getAllAccounts: () => {
      return accounts;
    },

    // getAccountJWT: (parent, args, context) => {
    //   const account = accounts.find(
    //     (account) => account.password == context.userPassword
    //   );

    //   return account;
    // },
  },
  Mutation: {
    createAccount: (_, { userName, email, password }) => {
      accounts.push({ id: accounts.length + 1, userName, email, password });
      return accounts.find((account)=>account.userName === userName)
    },
  },
};

module.exports.resolvers = resolvers;
