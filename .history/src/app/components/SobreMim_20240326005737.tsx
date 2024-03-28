import React from "react";
import MinhaFoto from "./common/fotoDeyvidKasteh";

const SobreMim: React.FC = () => {
  return (
    <>
      <div>
        <MinhaFoto height={500} width={500} />
      </div>
      <div>
        <span>(tempo), eu</span>
        <span>(tempo)</span>
        <span>(tempo)</span>
        <span>(tempo)</span>, eu sou Deyvid Kasteh, desenvolvedor fullstack
      </div>
    </>
  );
};

export default SobreMim;
