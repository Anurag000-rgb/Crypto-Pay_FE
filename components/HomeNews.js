import React from 'react';
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
    return(
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold',color:"black"}}> News </Text>
            {/* <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                style={{ paddingTop: 20 }}
            ></ScrollView> */}
            <View>
                <View style={{height:460,width:"100%",borderWidth:0.5,borderRadius:10,borderColor:"#ddd"}}>
                    {NewsMetaData().NewsFeeds.forEach((news) => (
                        <View key={news.project.id}>
                            <View style={{flexDirection:'row',paddingTop:15,paddingHorizontal:15,justifyContent:"space-between",paddingBottom:20}}>
                                <View>
                                    <Image
                                    source={{uri:news.project.image.small}}
                                    style={{width:35,height:35}}/>
                                </View>
                                <View style={{paddingLeft:15,flex:1}}>
                                <Text style={{fontSize:16,fontWeight:"400"}}>{coin.name}</Text>
                                    <Text style={{fontSize:15,fontWeight:"400",color:"#5d616d"}}>{news.description}</Text>
                                </View>   
                                <View style={{paddingLeft:15,}}>
                                    <Text style={{fontSize:16,}}>${news.user}</Text>
                                </View>   
                            </View>

                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default HomeNews;
