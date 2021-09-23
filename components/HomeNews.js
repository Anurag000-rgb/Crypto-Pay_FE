import React,{useState, useEffect} from 'react';
import axios from 'axios';
import NewsMetaData from '../API/NewsApiAccess';
import { 
    View,
    Text, 
    Image, 
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet 
} from 'react-native';

const HomeNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/status_updates?category=general&per_page=20/')
            .then((res) => {
                setNews(res.data.status_updates);
                console.log(res.data.status_updates);
            })
            .catch((err) => console.log(err));
    }, []);
    return(
        <SafeAreaView style={{flex: 1}}>
            <Text style={{fontSize: 20, fontWeight: 'bold',color:"black"}}> News </Text>
            <View style={{height:460,width:"100%",borderWidth:0.5,borderRadius:10,borderColor:"#ddd"}}>
            <ScrollView style={{flex: 1}}>
                    {news.map((newss) => (
                        <View key={newss.project.id}>
                            <View style={{flexDirection:'row',paddingTop:15,paddingHorizontal:15,justifyContent:"space-between",paddingBottom:20}}>
                                <View>
                                    <Image
                                    source={{uri:newss.project.image.small}}
                                    style={{width:35,height:35}}/>
                                </View>
                                <View style={{paddingLeft:15,flex:1}}>
                                <Text style={{fontSize:16,fontWeight:"700"}}>{newss.project.name}</Text>
                                    <Text style={{fontSize:15,fontWeight:"400",color:"#5d616d"}}>{newss.description}</Text>
                                </View>
                                <View style={{paddingLeft:15,}}>
                                    <Text style={{fontSize:16,}}>${newss.user}</Text>
                                </View>   
                            </View>

                        </View>
                    ))}
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeNews;
