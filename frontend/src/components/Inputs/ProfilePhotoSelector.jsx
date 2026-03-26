import { useState, useRef, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

function ProfilePhotoSelector({ image, setImage, preview, setPreview, disabled }) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);

      const url = URL.createObjectURL(file);
      setPreview(url);
      setPreviewUrl(url);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (setPreview) setPreview(null);
  };

  const onChooseFile = () => {
    if (!disabled) inputRef.current.click();
  };

  // 🔥 memory cleanup
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="flex justify-center items-center">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleImageChange}
      />

      {!image ? (
        <div className="relative group">
          
          {/* Avatar Circle */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-purple-100 
            flex items-center justify-center shadow-md border border-gray-200">
            
            <LuUser className="text-5xl text-blue-500 group-hover:scale-110 transition" />
          </div>

          {/* Upload Button */}
          <button
            type="button"
            onClick={onChooseFile}
            disabled={disabled}
            className={`absolute -bottom-1 -right-1 w-9 h-9 flex items-center justify-center 
              rounded-full shadow-lg transition 
              ${disabled 
                ? "bg-blue-300 cursor-not-allowed" 
                : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105"
              }`}
          >
            <LuUpload size={18} />
          </button>

        </div>
      ) : (
        <div className="relative group">

          {/* Image */}
          <img
            src={preview || previewUrl}
            alt="Profile Preview"
            className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-blue-100"
          />

          {/* Overlay effect */}
          <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

          {/* Remove Button */}
          <button
            type="button"
            onClick={handleRemoveImage}
            disabled={disabled}
            className={`absolute -bottom-1 -right-1 w-9 h-9 flex items-center justify-center 
              rounded-full shadow-lg transition 
              ${disabled 
                ? "bg-red-300 cursor-not-allowed" 
                : "bg-red-500 hover:bg-red-600 text-white hover:scale-105"
              }`}
          >
            <LuTrash size={18} />
          </button>

        </div>
      )}
    </div>
  );
}

export default ProfilePhotoSelector;