import path from 'path';

export default () => {
  const dest = process.env.UPLOAD_DEST;
  const avatar = process.env.UPLOAD_AVATAR;

  return {
    upload: {
      dest,
      avatar: path.join(dest, avatar),
    },
  };
};
