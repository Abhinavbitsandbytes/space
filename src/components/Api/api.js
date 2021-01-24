import axios from 'axios';

const makeApiCall = async (url) => {
  try {
    let res = await axios.get(url);
    return res.data;
  } catch (error) {
    return 'error';
  }
};

export default makeApiCall;
