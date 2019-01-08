import React, { Component } from 'react';
import './LeaderBoard.css';
import Header from '../Header/Header';
import Pagination from '../Pagination/Pagination';
import ParticipantCard from '../ParticipantCard/ParticipantCard';
import LeaderCard from '../LeaderCard/LeaderCard';
import cup from '../LeaderCard/cup.svg';
import ButtonAdd from '../Button/ButtonAdd';

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

          <div className='Leaders__container'>
            <LeaderCard name='Пётр Иванов' score={8901} img={cup} imgColor={'gold'} />
            <LeaderCard name='Максим Кальченко' score={7890} img={cup} imgColor={'grey'} />
            <LeaderCard name='Алёна Михалкова' score={7801} img={cup} imgColor={'brown'} />
            <LeaderCard name='Виталий Янкевич' score={7699}/>
            <LeaderCard name='Богдан Емельянов' score={5641}/>
            <LeaderCard name='Владимир Жванецкий' score={5278}/>
            <LeaderCard name='Лев Ямских' score={4804}/>
          </div>

          <Pagination />

        </div>
      </div>
    );
  }
}

export default LeaderBoard;