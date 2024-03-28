import React from "react";
import MinhaFoto from "./common/fotoDeyvidKasteh";

const SobreMim: React.FC = () => {
  return (
    <>
      <div>
        <MinhaFoto height={500} width={500} />
      </div>
      <div className="flex ">
        <span>(tempo), eu sou</span>
        <span>Deyvid Kasteh</span>
        <span>Desenvolvedor FullStack</span>
      </div>
    </>
  );
};

export default SobreMim;
