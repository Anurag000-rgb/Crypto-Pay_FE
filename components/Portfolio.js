import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';

const Portfolio = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/')
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    //#4169e1
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{flex: 1}}>
                <View style={{paddingTop:30,paddingHorizontal:20, marginBottom:90}}>
                    <Text style={{ color: '#5d616f', fontSize: 18, fontWeight: "600"}}>
                        Portfolio Balance
                    </Text>
                    <Text style={{ color: '#090C0D', fontSize: 32, fontWeight: "bold", paddingTop: 3, marginBottom: 20}}>
                        $0.00
                    </Text>
                    {data.map((coin) => (
                        <View key={coin.id}>
                            <View style={{paddingTop: 25, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <View>
                                    <Image
                                        source={{uri:coin.image.large}}
                                        style={{width: 35, height: 35, borderRadius: 16, borderWidth:0.5, borderColor:"#ddd"}}
                                    />
                                </View>
                                <View style={{flex:1, paddingLeft: 15}}>
                                    <Text style={{fontSize:17, fontWeight:'500'}}>{coin.name}</Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold', fontSize:16}}>$0.00</Text>
                                    <Text style={{fontSize:14, color:"#4961e1"}}>0 {coin.symbol}</Text>
                                </View>
                            </View>
                            
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Portfolio;