import React, {useState, useEffect} from 'react';
import  {View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
//import Portfolio from './Portfolio';
import axios from 'axios';

const Prices = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <View style={{paddingTop:30,paddingHorizontal:20, marginBottom:90}}>
                    <Text style={{color:'#5d616f', fontSize: 18, fontWeight:700}}>Market Prices</Text>
                {coins.map((coin) => (
                        <View key={coin.current_price}>
                            <View style={{paddingTop: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <View>
                                    <Image
                                        source={{uri:coin.image}}
                                        style={{width: 35, height: 35, borderRadius: 16, borderWidth:0.5, borderColor:"#ddd"}}
                                    />
                                </View>
                                <View style={{flex:1, paddingLeft: 15}}>
                                    <Text style={{fontSize:17, fontWeight:'500'}}>{coin.name}</Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold', fontSize:16}}>₹{coin.current_price +(coin.current_price)%5}</Text>
                                    <Text style={{color: "#ff0000"}}>{coin.price_change_percentage_24h}%</Text>
                                </View>
                            </View>
                            
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Prices;