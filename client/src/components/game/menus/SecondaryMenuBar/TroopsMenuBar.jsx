import React, { useState } from 'react'
// Data
import { TroopsAvailableArray } from '../../../../utils/gameData/TroopsData'
// Components
import TroopItem from './TroopItem'

function TroopsMenuBar() {
  const [troopsAvailable, setTroopsAvailable] = useState(TroopsAvailableArray)
  
  return (
    <section className='grid h-full w-full overflow-hidden'>
      <div className='overflow-x-auto w-full h-full p-1 bg-blue-600 rounded-lg overflow-y-hidden'>
        <div className='grid grid-flow-col gap-1.5 h-full '>
          {troopsAvailable.map((troop, index) => (
            <TroopItem key={index} troop={troop} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TroopsMenuBar