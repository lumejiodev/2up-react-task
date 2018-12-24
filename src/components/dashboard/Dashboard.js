import React from 'react'
import SliderPagination from 'components/pagination/SliderPagination'
import ButtonAdd from 'components/buttons/ButtonAdd'
import DashboardHeader from 'components/dashboard/DashboardHeader'
import TrophyCup from 'components/trophyCup/trophyCup'

import 'css/personalItem.sass';
import 'css/inputBlock.sass';
import 'css/dashboard.sass';
import 'css/logo.sass';
import 'css/main.sass';

export default function MainBlockWrapper(){
    return (
        <main className="main">
              
            <section className="dashboard-item">
                <DashboardHeader headerTitle="Добавить участника" color="green"/>
                <div className="dashboard-item__body dashboard-item__body_add">
                    <div className="input-block">
                        <label htmlFor="name">Имя и фамилия</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="points">Количество очков</label>
                        <input type="text" id="points" name="points" />
                    </div>

                    <ButtonAdd/>
                
                </div>
            </section>

            <section className="dashboard-item">
                <DashboardHeader headerTitle="Лидеры" color="purple"/>
                <div className="dashboard-item__body dashboard-item__body_leaders">
                    <div className="personal-item">
                        <div className="personal-item__information">
                            <p className="personal-item__information-title">
                                Пётр Иванов
                            </p>
                            <p className="personal-item__information-score">
                                8901 очков
                            </p>
                        </div>
                        <TrophyCup cup="gold"></TrophyCup>
                    </div>
                    <div className="personal-item">
                        <div className="personal-item__information">
                            <p className="personal-item__information-title">
                                Максим Кальченко
                            </p>
                            <p className="personal-item__information-score">
                                7890 очков
                            </p>
                        </div>
                        <TrophyCup cup="gray"></TrophyCup>
                    </div>
                    <div className="personal-item">
                        <div className="personal-item__information">
                            <p className="personal-item__information-title">
                                Виталий Янкевич
                            </p>
                            <p className="personal-item__information-score">
                                7699 очков
                            </p>
                        </div>
                        <TrophyCup cup="brown"></TrophyCup>
                    </div>
                    <div className="personal-item">
                        <div className="personal-item__information">
                            <p className="personal-item__information-title">
                                Максим Кальченко
                            </p>
                            <p className="personal-item__information-score">
                                7890 очков
                            </p>
                        </div>
                    </div>

                    <SliderPagination />
                    
                </div>
            </section>
        </main>
    )
}