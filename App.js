import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Settings from './components/Settings';
import Payment from './components/Payment';
import Portfolio from './components/Portfolio';
import Prices from './components/Prices';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 90,
          },
        }}
      >
        <Tab.Screen name="Home" component={Home}
           options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/icons/home.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
       <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/icons/portfolio.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  portfolio
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Payments"
          component={Payment}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/icons/transfer.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Prices"
          component={Prices}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/icons/prices.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Prices
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/icons/settings.png")}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Settings
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}