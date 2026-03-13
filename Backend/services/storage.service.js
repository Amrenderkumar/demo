import ImageKit from '@imagekit/nodejs';

const imagekit = new ImageKit({
  privateKey: "private_CtFAaf2x0pIq9KeyhejMWiYFQ4Y=",
});

async function uploadImage(buffer) {
  const result = await imagekit.files.upload({
    file: buffer.toString('base64'),
    fileName: 'image.jpg',
  });

  return result;
}

export default uploadImage;