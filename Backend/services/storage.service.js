import dotenv from "dotenv";
dotenv.config();
import ImageKit from '@imagekit/nodejs';

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadImage(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString('base64'),
    fileName: 'image.jpg',
  });
 
  return result;
}

export default uploadImage;