var axios = require("axios");
import {useState} from 'react';


//const [news, setNews] = useState([]);

const NewsMetaData = () => {
    axios.get(
    'https://api.coingecko.com/api/v3/status_updates?category=general&per_page=20'
    ).then(res => {
    return res.status_updates
    }).catch(err => console.log(err));
}

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