import React from 'react'
import MinhaFoto from './common/fotoDeyvidKasteh';

const Main: React.FC = () => {
  return (
    <main className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl">
      <MinhaFoto height={100} width={100}/>

    </main>
  );
}

export default Main