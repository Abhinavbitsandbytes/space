import React from 'react';
import styles from './Homepage.module.css';
import Filter from '../Filter/Filter';
import Cards from '../Cards/Cards';
import makeApiCall from '../Api/api';
const BASE_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
const LOADER_MSG = "Loading..."
const NO_DATA_MSG = "No Data Found..."
const DEVELOPER = "Abhinav"
class Homepage extends React.Component {
  state = {
    missionData: [],
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData(BASE_URL);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getData(
        `${BASE_URL}&${this.props.location.search.substring(1)}`
      );
    }
  }

  getData = async (url) => {
      this.setState({isLoading:true})
    let result = await makeApiCall(url);
    this.setState({ missionData: result, isLoading: false });
  };

  handleFilterChange = (querry) => {
    this.props.history.push({
      search: querry,
    });
  };

  render() {
    const { missionData, isLoading } = this.state;
    return (
      <React.Fragment>
        <div className={styles.homepage_main_content}>
          <h2>SpaceX Launch Programs</h2>
          <div className={styles.filter_and_cards}>
            <Filter
              handleFilterChange={(querry) => {
                this.handleFilterChange(querry);
              }}
              history={this.props.history}
            ></Filter>
            {isLoading ? (<div>{LOADER_MSG}</div>) : (  <div className={styles.cards_section}>
                {(missionData && missionData.length > 0) ? (
                  <Cards missionData={missionData}></Cards>
                ) : (<p>{NO_DATA_MSG}</p>)}
              </div>)}
          </div>
        </div>
        <footer className={styles.footer_section}>
          <p>Developed By : {DEVELOPER}</p>
        </footer>
      </React.Fragment>
    );
  }
}
export default Homepage;
