import axios from "axios";

const makeApiCall =(url) => {
    axios
    .get(url)
    .then((res) => {
    //   this.setState({ missionData: res.data, isLoading:false });
    return res
    }).catch(e => {
      alert('Something went wrong');
    //   this.setState({isLoading:false})
    });

  }

  export default makeApiCall