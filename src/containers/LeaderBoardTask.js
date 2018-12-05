import React from 'react'
import { FontAwesomeIcon }   from "@fortawesome/react-fontawesome";
import { faTrophy, faStar, faGem, faAnchor } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Cup} from "img/rhombus.svg";
import { ReactComponent as ButtonArrow} from "img/button_arrow.svg";

export default class LeaderBoardTask extends React.Component {
    render() {
        return <div>
            <div className="wrapper">
              <aside className="sidebar">
                <div className="navigation-block">
                  <div className="logo" />
                  <ul className="navigation-list navigation-list_mt">
                    <li className="navigation-item navigation-item_active">
                      <button className="button">
                        <FontAwesomeIcon icon={faTrophy} />
                      </button>
                    </li>
                    <li className="navigation-item">
                      <button className="button">
                        <FontAwesomeIcon icon={faStar} />
                      </button>
                    </li>
                    <li className="navigation-item">
                      <button className="button">
                        <FontAwesomeIcon icon={faGem} />
                      </button>
                    </li>
                    <li className="navigation-item">
                      <button className="button">
                        <FontAwesomeIcon icon={faAnchor} />
                      </button>
                    </li>
                  </ul>
                </div>
              </aside>

              <main className="main">
                <section className="dashboard-item">
                  <div className="dashboard-item__header dashboard-item__header_green">
                    <p>Добавить участника</p>
                  </div>
                  <div className="dashboard-item__body dashboard-item__body_add">
                    <div className="input-block">
                      <label htmlFor="name">Имя и фамилия</label>
                      <input type="text" id="name" name="name" />
                    </div>
                    <div className="input-block">
                      <label htmlFor="points">Количество очков</label>
                      <input type="text" id="points" name="points" />
                    </div>

                    <button className="button button_green dashboard-item_add-btn">
                      <span>Добавить</span>
                      <ButtonArrow />
                    </button>
                  </div>
                </section>

                <section className="dashboard-item">
                  <div className="dashboard-item__header dashboard-item__header_purple">
                    <p>Лидеры</p>
                  </div>
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
                      <div className="personal-item__cup">
                        <Cup />
                      </div>
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
                      <div className="personal-item__cup">
                        <Cup />
                      </div>
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
                      <div className="personal-item__cup">
                        <Cup />
                      </div>
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
                    
                    <ul className="pagination dashboard-item_pagination">
                      <li>
                        <button className="button button__pagination button__pagination_active" />
                      </li>
                      <li>
                        <button className="button button__pagination" />
                      </li>
                      <li>
                        <button className="button button__pagination" />
                      </li>
                    </ul>
                  </div>
                </section>
              </main>
            </div>
          </div>;
    }
}