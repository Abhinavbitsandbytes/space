import React from 'react'
import styles from './Cards.module.css'

class Cards extends React.Component{
    render(){
        return(
        <>
{ this.props.missionData.map(({links, mission_name, flight_number,mission_id,launch_year,launch_success,launch_landing} )=>{
    return(
        <>
            <div className={styles.card_content}>
              <div className={styles.card_image_section}>
                  <img className={styles.card_image} src={links.mission_patch_small} alt=""></img>
              </div>
              <p className={styles.mission_name_id}>{`${mission_name?mission_name:''} #${flight_number?flight_number:''}`}</p>
              <span>Mission ids:</span>
              {<ul className={styles.mission_ids_list}>
                  {mission_id && mission_id.length>0 && mission_id.map((id)=>{
                      return(<li>{id}</li>)
                  })}</ul>}
              <div>{`Launch Year: ${launch_year?launch_year:''}`}</div>
              <div>{`Successful Launch: ${launch_success}`}</div>
              <div>{`Successful Landing: ${launch_landing}`}</div>
</div>
            </>
    )
}) 
  }
        </>
        )
    }
}
export default Cards