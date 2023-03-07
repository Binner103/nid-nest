export default () => {
  return {
    jwt: {
      publicKey: Buffer.from(process.env.JWT_PUBLIC_KEY, 'base64').toString(),
      privateKey: Buffer.from(process.env.JWT_PRIVATE_KEY, 'base64').toString(),
    },
  };
};
