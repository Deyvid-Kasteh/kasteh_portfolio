import React from "react"
import minhafoto from "../../../../public/deyvidKaseth.jpg"
import Image from "next/image"


const MinhaFoto: React.FC = () => {
    return <Image src={minhafoto} alt="Foto de Deyvid Kasteh" />;
}

export de