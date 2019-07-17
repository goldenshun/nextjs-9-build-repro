console.log('next.config.js MY_VAR', process.env.MY_VAR);

module.exports = {
  publicRuntimeConfig: {
    MY_VAR: process.env.MY_VAR,
  },
};
