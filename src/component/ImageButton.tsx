import { ImageButtonProps } from "../types";

export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return (
    <button className="imageButton" onClick={onClick}>
      <img src={image} alt="no image" />
    </button>
  );
}
