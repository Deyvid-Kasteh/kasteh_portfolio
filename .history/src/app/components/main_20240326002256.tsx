import React from 'react'
import MinhaFoto from './common/fotoDeyvidKasteh';

const Main: React.FC = () => {
  return (
    <main className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl">
      <div>
        <MinhaFoto height={500} width={500} />
      </div>
      <div>Boa tarde, eu sou Deyvid Kasteh, desenvolvedor fullstack</div>
    </main>
  );
}

export default Main