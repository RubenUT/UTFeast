// import React, { createContext, useState, useContext } from 'react';

// interface ImageContextType {
//   image: File | null;
//   imagePreview: string | null;
//   setImage: (file: File | null) => void;
//   setImagePreview: (url: string | null) => void;
// }

// const ImageContext = createContext<ImageContextType | undefined>(undefined);

// export const ImageProvider: React.FC = ({ children }) => {
//   const [image, setImage] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);

//   return (
//     <ImageContext.Provider value={{ image, imagePreview, setImage, setImagePreview }}>
//       {children}
//     </ImageContext.Provider>
//   );
// };

// export const useImageContext = (): ImageContextType => {
//   const context = useContext(ImageContext);
//   if (!context) {
//     throw new Error('useImageContext must be used within an ImageProvider');
//   }
//   return context;
// };