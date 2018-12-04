import React from 'react'
import { FontAwesomeIcon }   from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default class Todo extends React.Component {
    render() {
        return <div>
            <div className="wrapper">
              <aside className="sidebar">
                <div className="navigation-block">
                  <ul className="navigation-list">
                    <li className="navigation-item navigation-item_active">
                      <button>
                        <FontAwesomeIcon icon={faTrophy} />
                      </button>
                    </li>
                    <li className="navigation-item">
                      <button>
                        <FontAwesomeIcon icon={faTrophy} />
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
                  </div>
                  <button>Добавить</button>
                </section>

                <section className="dashboard-item">
                  <div className="dashboard-item__header dashboard-item__header_purple">
                    <p>Лидеры</p>
                  </div>
                  <div className="dashboard-item__body dashboard-item__body_leaders">
                    <div className="personal-item">
                      <div className="personal-item__information">
                        <p>Пётр Иванов</p>
                        <p>8901 очков</p>
                      </div>
                      <div className="personal-item__cup">
                        
                      </div>
                    </div>
                    <div className="dashboard-item__pagination">
                      <ul>
                        <li>
                          <button />
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>;
    }
}