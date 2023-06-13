module.exports = {
  name: 'bank',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
