import React, { Component } from 'react';
import '../Common-styles.css';
import './LeaderBoard.css';
import Header from '../components/Header/Header';
import ParticipantCard from '../components/ParticipantCard/ParticipantCard';
import LeaderCard from '../components/LeaderCard/LeaderCard';
import cup from '../components/LeaderCard/cup.svg';
import ButtonAdd from '../components/Button/ButtonAdd';

class LeaderBoard extends Component {
  render() {

    return (
      <div className="Board__container">
        <div className='Board'>
          <Header title='Добавить участника' color='green' />
          <ParticipantCard title='Имя и фамилия'/>
          <ParticipantCard title='Количество очков'/>
          <ButtonAdd />
        </div>

        <div className='Board'>
          <Header title='Лидеры' color='purple' />

          <div className='leadersContainer'>
            <LeaderCard name='Пётр Иванов' score={8901} img={cup}/>
            <LeaderCard name='Максим Кальченко' score={7890} img={cup}/>
            <LeaderCard name='Алёна Михалкова' score={7801} img={cup}/>
            <LeaderCard name='Виталий Янкевич' score={7699}/>
            <LeaderCard name='Богдан Емельянов' score={5641}/>
            <LeaderCard name='Владимир Жванецкий' score={5278}/>
            <LeaderCard name='Лев Ямских' score={4804}/>
          </div>

        </div>
      </div>
    );
  }
}

export default LeaderBoard;