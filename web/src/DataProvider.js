import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = process.env.REACT_APP_API_URL;
const DataProvider = simpleRestProvider(apiUrl);
export default DataProvider;