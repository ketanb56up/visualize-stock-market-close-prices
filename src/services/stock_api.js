import axios from "axios";

const showStock = async (data) => {
  return axios
    .get(`${process.env.REACT_APP_URL}/api/stock/`+data)
    .then((resp) => resp.data)
    .catch((error) => {
      return [];
    });
};

export { showStock };
