import React, { useState } from 'react';
// Componentss
import CloseTechMenuButton from './CloseTechMenuButton';
// Data
import { TechnologyDataArray } from '../../../../utils/gameData/TechnologyData';

function TechMenuBar() {
  const [technologies, setTechnologies] = useState(TechnologyDataArray);

  return (
    <section className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-black bg-white rounded-xl h-[500px] w-[500px] p-2 grid'>
      <div className='relative grid w-full h-full'>
        <CloseTechMenuButton />
        <section className='grid grid-rows-reg p-1 gap-2'>
          <div className='text-center'>
            <h4>Technology Tree</h4>
          </div>
          <section className='grid outline outline-1 outline-black h-full w-full rounded-lg'>
            {technologies.map((tech, index) => {
              return (
                <article key={index}>
                  <div>
                    <h6>{tech.title}</h6>
                  </div>
                  <div>{tech.improvementTitle}</div>
                  <div>
                    <img
                      className='h-[50px] w-[50px] object-contain'
                      src={tech.imageUrl}
                      alt={tech.name}
                    />
                  </div>
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
