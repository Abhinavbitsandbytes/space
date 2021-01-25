import React from 'react';
import styles from './Cards.module.css';

const Cards = (props) => {

    return (
      <>
        {props.missionData &&
          props.missionData.map(
            ({
              links,
              mission_name,
              flight_number,
              mission_id,
              launch_year,
              launch_success,
              launch_landing,
            }) => {
              return (
                <React.Fragment key={flight_number}>
                  <div className={styles.card_content}>
                    <div className={styles.card_image_section}>
                      <img
                        className={styles.card_image}
                        src={links.mission_patch_small}
                        alt=""
                      ></img>
                    </div>
                    <p className={styles.mission_name_id}>{`${
                      mission_name ? mission_name : ''
                    } #${flight_number ? flight_number : ''}`}</p>
                    <b>Mission ids:</b>
                    {
                      <ul className={styles.mission_ids_list}>
                        {mission_id &&
                          mission_id.length > 0 &&
                          mission_id.map((id) => {
                            return <li key={id}>{id}</li>;
                          })}
                      </ul>
                    }
                    <div className={styles.card_bottom_content}>
                      <div>
                        <p>
                          <b>Launch Year:</b>
                          <span className={styles.title_value}>
                            {launch_year ? launch_year : ''}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>Successful Launch:</b>
                          <span className={styles.title_value}>
                            {`${launch_success}`}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>Successful Landing:</b>
                          <span className={styles.title_value}>
                            {`${
                              launch_landing === undefined ? '' : launch_landing
                            }`}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          )}
      </>
    );

}
export default Cards;
