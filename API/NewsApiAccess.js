var axios = require("axios").default;
import {useState} from 'react';


//const [news, setNews] = useState([]);

var options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/status_updates',
  headers: {
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': '885be0c09dmsh102382e6ecb5b89p1e0f15jsna76311eec7f5'
  }
};

const NewsMetaData = async() => { 
    await axios.request(options).then(function (res) {
        //setNews = (res.data.status_updates);
        //console.log(News);
        //return NewsFeeds;
    }).catch(function (error) {
        console.error(error);
        return (null);
    });
};

    // console.log(NewsMetaData)//.status_updates);
    // console.log(NewsMetaData);
    // console.log(NewsMetaData[1]);
    //console.log(news);


// let NewsFeeds
// const NewsMetaData = axios.request(options);
// let NewsFunc = async(res) => {
//     NewsFeeds = await NewsMetaData.res.data;
// }


export default NewsMetaData;