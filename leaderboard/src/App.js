import React, { Component } from 'react';
import './Common-styles.css';
import Header from './Header/Header';
import ParticipantCard from './ParticipantCard/ParticipantCard';
import LeaderCard from './LeaderCard/LeaderCard';
import cup from './LeaderCard/cup.svg';

class App extends Component {
  render() {

    // const lightGreen = {
    //   backgroundColor: '#7AD18A'
    // }

    // const purple = {
      //   backgroundColor: '#847AD1'
      // }

    return (
      <div className="App Board__container">
        <div className='Board'>
          <Header title='Добавить участника' />
          <ParticipantCard title='Имя и фамилия'/>
          <ParticipantCard title='Количество очков'/>
          <button className='button'>Добавить</button>
        </div>

        <div className='Board'>
          <Header title='Лидеры'/>

          <div className='leadersContainer'>
            <LeaderCard name='Пётр Иванов' score='8901 очков' img={cup}/>
            <LeaderCard name='Максим Кальченко' score='7890 очков' img={cup}/>
            <LeaderCard name='Алёна Михалкова' score='7801 очков' img={cup}/>
            <LeaderCard name='Виталий Янкевич' score='7699 очков'/>
            <LeaderCard name='Богдан Емельянов' score='5641 очков'/>
            <LeaderCard name='Владимир Жванецкий' score='5278 очков'/>
            <LeaderCard name='Лев Ямских' score='4804 очков'/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
