import React, { Component } from 'react';
import 'components/LeaderBoard/LeaderBoard.scss';
import Header from 'components/Header/Header';
import Pagination from 'components/Pagination/Pagination';
import ParticipantCard from 'components/ParticipantCard/ParticipantCard';
import LeaderCard from 'components/LeaderCard/LeaderCard';
import cup from 'components/LeaderCard/cup.svg';
import ButtonAdd from 'components/Button/ButtonAdd';

class LeaderBoard extends Component {
  state = {
    persons: [
      {name:'Пётр Иванов', score: 8901, img: cup, imgColor:'gold' },
      {name:'Максим Кальченко', score: 7890, img: cup, imgColor:'grey' },
      {name:'Алёна Михалкова', score: 7801, img: cup, imgColor:'brown' },
      {name:'Виталий Янкевич', score: 7699 },
      {name:'Богдан Емельянов', score: 5641 },
      {name:'Владимир Жванецкий', score: 5278 },
      {name:'Лев Ямских', score: 4804 }
    ],

    participantsInfo: [
      {title: 'Имя и фамилия'},
      {title: 'Количество очков'}
    ]
  }
  render() {

    return (
      <div className="Board__container">
        <div className='Board'>
          <Header title='Добавить участника' color='green' />

          {this.state.participantsInfo.map(infoBlock => {
            return <ParticipantCard title={infoBlock.title} />
          })}

          <ButtonAdd />
        </div>

        <div className='Board'>
          <Header title='Лидеры' color='purple' />

          <div className='Leaders__container'>
            {this.state.persons.map(person => {
              return <LeaderCard 
                name={person.name}
                score={person.score}
                img={person.img}
                imgColor={person.imgColor} />
            })}
          </div>

          <Pagination />

        </div>
      </div>
    );
  }
}

export default LeaderBoard;