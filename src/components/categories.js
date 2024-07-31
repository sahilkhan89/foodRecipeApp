import { View, Text, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// import "../../global.css"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { categoryData } from "../constants/Index"
import Animated, {FadeInDown} from 'react-native-reanimated'
import { CashedImage } from '../helpers/image';

export default function Categories({ categories,activeCategory, handleChangeCategory }) {
    return (
       <Animated.View entering={FadeInDown.duration(500).springify()}>
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-4 bg-slate-600" style={{marginBottom: 12}} >
            {
                categories.map((cat, index) => {
                    let isActive = cat.strCategory == activeCategory;
                    let activeButtonClass = isActive ? ' bg-amber-400' : ' bg-black/10';
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleChangeCategory(cat.strCategory)}
                            className="flex items-center space-y-1"
                        >
                            <View className={"rounded-full p-[6px]" + activeButtonClass}  style={{ paddingLeft: hp(1.8) }} >
                                {/* <Image
                                    source={{ uri: cat.strCategoryThumb }}
                                    style={{ width: hp(6), height: hp(6) }
                                    } /> */}
                                    <CashedImage
                                      uri= {cat.strCategoryThumb }
                                     style={{ width: hp(6), height: hp(6) ,borderRadius: 9999 }
                                     } 
                                    />
                            </View>
                            <Text className="text-neutral-600" style={{ fontSize: hp(1.6), paddingLeft: hp(1.8) }}>
                                {cat.strCategory}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
       </Animated.View>
    )
}