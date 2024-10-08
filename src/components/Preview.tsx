import { FC } from "react";

import closeIcon from "../assets/imgs/close-icon.svg";
interface IPreview {
  src: string;
  onClose?: () => void;
}

const Preview: FC<IPreview> = ({ src, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 backdrop-blur-xl bg-black bg-opacity-70 flex items-center justify-center p-5">
      <div className="relative">
        <button
          className="fixed top-10 right-10 z-999 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
          onClick={onClose}
        >
          <img src={closeIcon} alt="close" className="w-6 h-6 " />
        </button>
        <img
          src={src}
          alt="preview"
          className="max-w-full max-h-screen rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Preview;
