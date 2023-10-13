import React, { useState } from 'react';
// Components
import CloseTechMenuButton from '../SecondaryMenuBar/CloseTechMenuButton';
// Data
import { TechnologyDataArray } from '../../../../utils/gameData/TechnologyData';

function TechMenuBar() {
  const [technologies, setTechnologies] = useState(TechnologyDataArray);

  return (
    <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-black bg-white rounded-xl h-[500px] w-[500px] p-2 grid'>
      <div className='relative grid w-full h-full overflow-hidden'>
        <CloseTechMenuButton />
        <section className='grid grid-rows-reg p-1 gap-2 overflow-hidden'>
          <div className='text-center'>
            <h4>Technology Tree</h4>
          </div>
          <section className='grid p-[2px] grid-cols-3 gap-4 outline outline-1 outline-black h-full w-full rounded-lg overflow-y-scroll'>
            {technologies.map((tech, index) => {
              return (
                <article
                  key={index}
                  className='grid outline outline-1 outline-black grid-rows-a1a p-1 rounded-lg hover:brightness-105 bg-gray-100 cursor-pointer'
                >
                  <div className='leading-4 text-sm font-semibold'>
                    <h6>{tech.title}</h6>
                  </div>
                  <div className='grid items-center justify-center'>
                    <img
                      className='h-[50px] w-[50px] object-contain'
                      src={tech.imageUrl}
                      alt={tech.name}
                    />
                  </div>
                  <div className='w-full leading-4 text-sm font-semibold'>{tech.improvementTitle}</div>
                </article>
              );
            })}
          </section>
        </section>
      </div>
    </section>
  );
}

export default TechMenuBar;
