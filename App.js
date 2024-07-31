import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css"
import AppNavigation from './src/navigation';
import WelcomeScreen from './src/screens/WelcomeScreen';
// import { View, Text, ScrollView, Image, TextInput } from 'react-native'
// import React from 'react'
// import { StatusBar } from 'expo-status-bar'

// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center bg-amber-500">
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <WelcomeScreen />
    <AppNavigation />
//     <View className="flex-1 bg-white" >
//     <StatusBar style="dark" />
//     <ScrollView
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={{ paddingBottom: 50 }}
//       className="space-y-6 pt-14"
//     >
//       {/*  avatar and bell icon */}
//       <View className="mx-4 flex-row justify-between items-start mb-2">
//         <Image source={require('./assets/man_4140061.png')} style={{ width: hp(5.5), height: hp(5)}} />

//         <BellIcon size={hp(4)} color='gray' />
//       </View>

//       {/* greeting and punchline */}
//       <View className="mx-4 space-y-2 mb-2">
//         <Text style={{fontSize:hp(1.7)}} className=" text-neutral-600">Hello, sahil!</Text>
// <View>
// <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-600">Make your own food,</Text>

// </View>
// <Text style={{fontSize:hp(3.8)}} className="font-semibold text-neutral-600">
// stay at <Text className="text-amber-400">home</Text></Text>

//       </View>

//       {/* search ber */}
//       <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
//         <TextInput 
//         placeholder='Search any recipe'
//         placeholderTextColor={'gray'}
//         style={{fontSize:hp(1.7)}}
//         className="flex-1 text-base mb-1 pl-3 tracking-wider"/>

//         <View className="bg-white rounded-full p-3">
//           <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray"/>
//         </View>
//       </View>
//     </ScrollView>
//   </View>
  ); 
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
