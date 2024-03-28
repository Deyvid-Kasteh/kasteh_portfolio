import React from "react"
import minhafoto from "../../../../public/deyvidKaseth.jpg"
import Image from "next/image"


interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}


const MinhaFoto: React.FC< = () => {
    return <Image src={minhafoto} alt="Foto de Deyvid Kasteh" />;
}

export default MinhaFoto