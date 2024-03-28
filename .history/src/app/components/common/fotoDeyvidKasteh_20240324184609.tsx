import React from "react"
import minhafoto from "../../../../public/deyvidKaseth.jpg"
import Image from "next/image"


interface ImageProps {
  width: number;
  height: number;
}


const MinhaFoto: React.FC<ImageProps> = ({ width, height }) => {
  return (
    <Image
      src={minhafoto}
      alt="Foto de Deyvid Kasteh"
      width={width}
      height={height}
      className="rounded-full"
    />
  );
};

export default MinhaFoto