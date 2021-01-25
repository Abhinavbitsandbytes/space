import React from "react";
import styles from "./Homepage.module.css";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import makeApiCall from "../Api/api";
const queryString = require("query-string");
const BASE_URL = "https://api.spaceXdata.com/v3/launches?limit=100";
const HEADING = "SpaceX Launch Programs";
const LOADER_MSG = "Loading...";
const NO_DATA_MSG = "No Data Found...";
const DEVELOPER = "Abhinav";
class Homepage extends React.Component {
  state = {
    missionData: [],
    isLoading: false,
  };
  componentDidMount() {
    let parsed = queryString.parse(this.props.history.location.search);
    let querry = "";
    if (Object.keys(parsed).length !== 0) {
      querry = `&${Object.keys(parsed)
        .map((key) => `${key}=${parsed[key]}`)
        .join("&")}`;
    }

    this.setState({ isLoading: true });
    this.getData(`${BASE_URL}${querry}`);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.getData(`${BASE_URL}&${this.props.location.search.substring(1)}`);
    }
  }

  getData = async (url) => {
    this.setState({ isLoading: true });
    let result = await makeApiCall(url);
    if (Array.isArray(result)) {
      this.setState({ missionData: result, isLoading: false });
    } else {
      this.setState({ isLoading: false });
      alert(result);
      return;
    }
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
          <h2>{HEADING}</h2>
          <div className={styles.filter_and_cards}>
            <Filter
              handleFilterChange={(querry) => {
                this.handleFilterChange(querry);
              }}
              history={this.props.history}
            ></Filter>
            {isLoading ? (
              <div>{LOADER_MSG}</div>
            ) : (
              <div className={styles.cards_section}>
                {missionData && missionData.length > 0 ? (
                  <Cards missionData={missionData}></Cards>
                ) : (
                  <p>{NO_DATA_MSG}</p>
                )}
              </div>
            )}
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
