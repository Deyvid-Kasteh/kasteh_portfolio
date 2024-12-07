import React from "react";
import MinhaFoto from "./common/fotoDeyvidKasteh";

const SobreMim: React.FC = () => {
  return (
    <>
      <div>
        <MinhaFoto height={500} width={500} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span>Oi, eu sou</span>
        <span className="text-[50px] font-extrabold">Deyvid Kasteh</span>
        <span className="text-[35px] font-bold">
          Desenvolvedor FullStack
        </span>
      </div>
    </>
  );
};

export default SobreMim;
