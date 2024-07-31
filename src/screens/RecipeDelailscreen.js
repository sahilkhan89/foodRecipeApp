import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CashedImage } from '../helpers/image';
import { ChevronLeftIcon, ClockIcon, FireIcon, Square2StackIcon, Square3Stack3DIcon, UserIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from '../components/loading';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
// import YoutubeIframe from 'react-native-youtube-iframe';
// import YoutubePlayer from "react-native-youtube-iframe";


export default function RecipeDelailscreen(props) {
    console.log(props.route.params);

    let item = props.route.params;
    const [isFavourite, setIsFavourite] = useState(false);
    const navigation = useNavigation();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMealData(item.idMeal)
    }, [])

    const getMealData = async (id) => {
        try {
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            //   console.log('got MealData : ', response.data);
            if (response && response.data) {
                setMeal(response.data.meals[0]);
                setLoading(false);
            }


        } catch (err) {
            console.log('error', err.massage);
        }
    }

    const ingredientsIndex = (meal) => {
        if (!meal) return [];
        let indexs = [];
        for (let i = 1; i <= 20; i++) {
            if (meal['strIngredient' + i]) {
                indexs.push(i);
            }
        }
        return indexs;
    }
    const getYoutubeVideoId=uri=>{
        const regex =/[?&]v=([^&]+)/;
        const match = uri.match(regex);
        if(match && match[1]){
            return match[1];
        }
        return null;
    }
    return (
        <ScrollView
            className="bg-white flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 30 }}
        >
            <StatusBar style="light" />

            <View className="flax-row justify-center"style={{marginLeft:hp(1)}}>
            {/* <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} > */}
                <CashedImage
                    uri={item.strMealThumb}
                    sharedTransitionTag={item.strMeal}
                    style={{ width: wp(96), height: hp(50), borderRadius: 53, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginTop: 6}}
                />

{/* </TouchableOpacity> */}
            </View>

            {/* back button */}
            <Animated.View  entering={FadeIn.delay(200).duration(1000)} className="w-full absolute flex-row justify-between items-center pt-14" style={{position: 'absolute'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 rounded-full ml-5 bg-white"
                style={{ padding:hp(1),marginLeft:hp(2.5), backgroundColor:"white",borderRadius: 9999 }}
                >
                    <ChevronLeftIcon size={hp(3.5)} strokeWidth={4.5} color="#fbbf24" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} className="p-2 rounded-full mr-5 bg-white"
                    style={{padding:hp(1), marginRight: hp(2),marginLeft:hp(34), backgroundColor:"white",borderRadius: 9999 }}
                >
                    <HeartIcon size={hp(3.5)} strokeWidth={4.5} color={isFavourite ? "red" : "gray"} />
                </TouchableOpacity>
            </Animated.View>

            {/* meal description */}
            {
                loading ? (
                    <Loading size="large" className="mt-16" />
                ) : (
                    <View className="px-4 flex justify-between space-y-4 pt-8" style={{paddingLeft:hp(1.5), paddingTop:hp(1)}}>
                        {/* name and area */}
                        <Animated.View  entering={FadeInDown.duration(700).springify().damping(12)} className="space-y-2" style={{padding:hp(1)}}>
                            <Text style={{ fontSize: hp(3) }} className="font-bold flex-1 text-neutral-700">
                                {meal?.strMeal}

                            </Text>
                            <Text style={{ fontSize: hp(2) }} className="font-medium flex-1 text-neutral-500">
                                {meal?.strArea}

                            </Text>


                        </Animated.View>

                        {/* mice */}
                        <Animated.View  entering={FadeInDown.delay(100).duration(700).springify().damping(12)} className="flex-row justify-around">
                            <View className="flex rounded-full bg-amber-300 p-2" style={{ backgroundColor: '#fbbf24', padding: hp(0.5), marginRight: hp(5), marginLeft: hp(1.2) }}>
                                <View

                                    style={{ height: hp(6.5), width: hp(6.5) }}
                                    className="bg-white rounded-full items-center justify-center"
                                >
                                    <ClockIcon size={hp(4)} strokeWidth={2.5} color='#525252' />
                                </View>
                                <View className="flex items-center py-2 space-y-1">
                                    <Text style={{ fontSize: hp(2) }} className="font-bold text-neutral-700">
                                        35
                                    </Text>
                                    <Text style={{ fontSize: hp(1.3),padding:hp(0.5) }} className="font-bold text-neutral-700">
                                        Mins
                                    </Text>
                                </View>
                            </View>


                            <View className="flex rounded-full bg-amber-300 p-2" style={{ backgroundColor: '#fbbf24', padding: hp(0.5), marginRight: hp(5) }}>
                                <View

                                    style={{ height: hp(6.5), width: hp(6.5) }}
                                    className="bg-white rounded-full items-center justify-center"
                                >
                                    <UserIcon size={hp(4)} strokeWidth={2.5} color='#525252' />
                                </View>
                                <View className="flex items-center py-2 space-y-1">
                                    <Text style={{ fontSize: hp(2) }} className="font-bold text-neutral-700">
                                        03
                                    </Text>
                                    <Text style={{ fontSize: hp(1.3) }} className="font-bold text-neutral-700">
                                        Serving
                                    </Text>
                                </View>
                            </View>


                            <View className="flex rounded-full bg-amber-300 p-2" style={{ backgroundColor: '#fbbf24', padding: hp(0.5), marginRight: hp(5) }}>
                                <View

                                    style={{ height: hp(6.5), width: hp(6.5) }}
                                    className="bg-white rounded-full items-center justify-center"
                                >
                                    <FireIcon size={hp(4)} strokeWidth={2.5} color='#525252' />
                                </View>
                                <View className="flex items-center py-2 space-y-1">
                                    <Text style={{ fontSize: hp(2) }} className="font-bold text-neutral-700">
                                        103
                                    </Text>
                                    <Text style={{ fontSize: hp(1.3) }} className="font-bold text-neutral-700">
                                        Cal
                                    </Text>
                                </View>
                            </View>


                            <View className="flex rounded-full bg-amber-300 p-2" style={{ backgroundColor: '#fbbf24', padding: hp(0.5) }}>
                                <View

                                    style={{ height: hp(6.5), width: hp(6.5) }}
                                    className="bg-white rounded-full items-center justify-center"
                                >
                                    <Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color='#525252' />
                                </View>
                                <View className="flex items-center py-2 space-y-1">
                                    <Text style={{ fontSize: hp(2) }} className="font-bold text-neutral-700">

                                    </Text>
                                    <Text style={{ fontSize: hp(1.3) }} className="font-bold text-neutral-700">
                                        Easy
                                    </Text>
                                </View>
                            </View>
                        </Animated.View>

                        
                        {/* ingredients */}
                        <Animated.View  entering={FadeInDown.delay(200).duration(700).springify().damping(12)}  className="space-y-4" style={{padding:hp(1)}}>
                            <Text style={{ fontSize: hp(2.5) , paddingTop:hp(2.5)}} className="font-bold flex-1 text-neutral-700">
                                Ingredients
                            </Text>
                            {/* style={{paddingLeft:hp(1.5), paddingTop:hp(1)}} */}
                            <View className="space-y-2 ml-3">
                                {
                                    ingredientsIndex(meal).map(i => {
                                        return (
                                            <View key={i} className="flex-row spce-x-4"  style={{paddingLeft:hp(1.5)}}>
                                                <View style={{ height: hp(1.5), width: hp(1.5), backgroundColor: '#fbbf24', marginTop: hp(0.6), marginRight:hp(0.5) }}
                                                    className="bg-amber-300 rounded-full" />
                                                <View className="flex-row space-x-2">
                                                    <Text style={{ fontSize: hp(1.8), fontWeight: 600 }} className="font-extrabold text-neutral-700">{meal['strMeasure' + i]}</Text>
                                                    <Text style={{ fontSize: hp(1.7), fontWeight: 400 }} className="font-medium text-neutral-600"> - {meal['strIngredient' + i]}</Text>

                                                </View>

                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </Animated.View>



                        <Animated.View  entering={FadeInDown.delay(300).duration(700).springify().damping(12)}  className="space-y-4">
                            <Text style={{ fontSize: hp(2.5) }} className="font-bold flex-1 text-neutral-700">
                                Instructions
                            </Text>
                            <Text style={{ fontSize: hp(1.7) }} className="font-bold flex-1 text-neutral-700">
                                {meal.strInstructions}
                            </Text>

                        </Animated.View>


                        {/* youtybe video */}
                        {/* {
                            meal.strYoutube && (
                                <View className="space-y-4">
                                    <Text style={{ fontSize: hp(2.5) }} className="font-bold flex-1 text-neutral-700">
                                        Recipe Video
                                    </Text>
                                     <View>
                                        <YoutubeIframe 
                                        // videoId={getYoutubeVideoId[meal.strYoutube]}
                                        videoId='4aZr5hZXP_s'
                                        height={hp(30)}
                                        /> 
                                        
                                    </View>
                                </View>
                            )
                        } */}
                    </View>
                )
                // loading ? (
                //     <Loading size="large" style={{ marginTop: 16 }} />
                //   ) : (
                //     <View style={{ paddingHorizontal: 16, justifyContent: 'space-between', marginTop: 8 }}>
                //       {/* name and area */}
                //       <View style={{ marginBottom: 8 }}>
                //         <Text style={{ fontSize: hp(3) }}>
                //           {/* {meal?.strMeal} */}
                //           {meal ? meal.strMeal : 'Loading...'}
                //         </Text>
                //       </View>
                //     </View>
                //   )
            }

        </ScrollView>
    )
}