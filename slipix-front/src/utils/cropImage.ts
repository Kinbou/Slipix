const createImage = (url: any) => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener('load', () => resolve(image));
  image.addEventListener('error', (error) => reject(error));
  image.setAttribute('crossOrigin', 'anonymous');
  image.src = url;
});

function getRadianAngle(degreeValue: any) {
  return (degreeValue * Math.PI) / 100;
}

/**
 * Image crop function
 * @param {File} imgSrc - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {Object} resize - Optional output size
 * @param {string} imgType - Optional image type
 * @param {number} rotation - Optional rotation parameter
 */
export default async function getCroppedImage(
  imgSrc: any,
  pixelCrop: any,
  resize = { width: 500, height: 500 },
  imgType = 'image/jpeg',
  rotation = 0,
) {
  const image = await createImage(imgSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // @ts-ignore
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));
  const midSafeArea = safeArea / 2;

  canvas.width = safeArea;
  canvas.height = safeArea;

  // @ts-ignore
  ctx.translate(midSafeArea, midSafeArea);
  // @ts-ignore
  ctx.rotate(getRadianAngle(rotation));
  // @ts-ignore
  ctx.translate(-midSafeArea, -midSafeArea);

  // @ts-ignore
  ctx.drawImage(image, midSafeArea - (image.width * 0.5), midSafeArea - (image.height * 0.5));
  // @ts-ignore
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // @ts-ignore
  ctx.putImageData(
    data,
    // @ts-ignore
    Math.round(0 - midSafeArea + (image.width * 0.5) - pixelCrop.x),
    // @ts-ignore
    Math.round(0 - midSafeArea + (image.height * 0.5) - pixelCrop.y),
  );

  return new Promise((resolve) => {
    const oc = document.createElement('canvas');
    const octx = oc.getContext('2d');

    oc.width = resize.width;
    oc.height = resize.height;

    // @ts-ignore
    octx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, resize.width, resize.height);

    oc.toBlob((file) => {
      resolve(URL.createObjectURL(file));
    }, imgType);
  });
}
