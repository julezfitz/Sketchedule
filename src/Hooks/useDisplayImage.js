import { useState } from 'react';

function useDisplayImage() {
  const [uploadedImage, setUploadedImage] = useState('');

  function uploader(e) {
    const imageFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', (f) => {
      setUploadedImage(f.target.result);
    });

    reader.readAsDataURL(imageFile);
  }

  return { uploadedImage, uploader };
}

export default useDisplayImage;
