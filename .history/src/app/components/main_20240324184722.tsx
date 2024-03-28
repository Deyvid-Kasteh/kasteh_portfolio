import React from 'react'
import MinhaFoto from './common/fotoDeyvidKasteh';

const Main: React.FC = () => {
  return (
    <main className="bg-customGrayComponents flex justify-around items-center py-4 rounded-xl w-64 h-32">
      <MinhaFoto height={100} width={100}/>

    </main>
  );
}

export default Main