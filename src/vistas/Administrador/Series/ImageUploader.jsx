import React, { useRef } from 'react';

const ImageUploader = ({ onImageUpload, image }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="w-full max-w-full">
      <div className="border border-gray-400 rounded-lg pl-10 p-10 bg-white text-center mb-4">
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Subida"
            className="block mx-auto max-w-full h-auto border rounded shadow"
          />
        )}
      </div>
      <div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white  px-5 py-2 rounded-lg"
        >
          Agregar imagen
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
