import React from 'react';
import planetas from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid='solar-system' className='solar-system'>
        <Title headline='Planetas' />
        <div className='planets-container'>
          {planetas.map((planeta) => (
            <div key={planeta.name}>
              <PlanetCard
                planetImage={planeta.image}
                planetName={planeta.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
