import React from "react";
import axios from "axios";
import styles from "./Homepage.module.css";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

const BASE_URL = "https://api.spaceXdata.com/v3/launches?limit=100"

class Homepage extends React.Component {
  state = {
    missionData: [],
    isLoading:false
  };
  componentDidMount() {
      this.setState({isLoading:true})
      this.makeApiCall(BASE_URL)
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
        this.makeApiCall(`${BASE_URL}&${this.props.location.search.substring(1)}`)
    }  
  }

  makeApiCall =(url) => {
    axios
    .get(url)
    .then((res) => {
      this.setState({ missionData: res.data, isLoading:false });
    }).catch(e => {
      alert('Something went wrong');
      this.setState({isLoading:false})
    });

  }

  handleFilterChange=(querry) =>{
    this.props.history.push({
        search: querry,
      });
    }

  render() {
    const { missionData } = this.state;
    return (
      <div>
        <div className={styles.homepage_main_content}>
          <h2>SpaceX Launch Programs</h2>
          <div className={styles.filter_and_cards}>
            <Filter handleFilterChange={(querry)=>{this.handleFilterChange(querry)}} history={this.props.history}></Filter>
            <div className={styles.cards_section}>
              {missionData && missionData.length > 0 && (
                <Cards missionData={missionData}></Cards>
              )}
            </div>
          </div>
        </div>
        <footer className={styles.footer_section}>
          <p>Developed By : Abhinav</p>
        </footer>
      </div>
    );
  }
}
export default Homepage;