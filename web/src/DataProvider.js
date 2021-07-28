import simpleRestProvider from 'ra-data-simple-rest';
require('dotenv').config()

const apiUrl = process.env.REACT_APP_API_URL;
const defaultDataProvider = simpleRestProvider(apiUrl);

const DataProvider = {
    ...defaultDataProvider,
    delete: (resource, params) => {
        console.log(params,"hehe",resource,"call");
        return fetch(apiUrl + "/" + resource + "/" + params.id, {
            method: "DELETE",
        }).then(res => res.json().then(resData => 
        Object({data: {...resData}}))
    )
      // return dataProvider.delete(resource,params)
    }
}  

export default DataProvider;