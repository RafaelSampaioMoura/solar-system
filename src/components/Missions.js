import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid='missions'>
        <Title headline='Missões' />
        <div className='mission-container'>
          {missions.map((mission) => (
            <div className='mission-card'>
              <MissionCard
                key={mission.name}
                name={mission.name}
                year={mission.year}
                country={mission.country}
                destination={mission.destination}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
