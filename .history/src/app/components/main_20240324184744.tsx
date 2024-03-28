import React from 'react'
import MinhaFoto from './common/fotoDeyvidKasteh';

const Main: React.FC = () => {
  return (
    <main className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl">
      <MinhaFoto height={1000} width={1000}/>

    </main>
  );
}

export default Main