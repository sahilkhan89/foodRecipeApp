import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import Animated from "react-native-reanimated";

export const CashedImage=(props)=>{
    const [casheSource, setCasheSource] =useState(null);
    const{uri}=props;

    useEffect(()=>{
        const getCachedImage= async ()=>{
            try {
                const CashedImageData = await AsyncStorage.getItem(uri);
                if(CashedImageData){
                    setCasheSource({uri: CacheStorageData});
                }else{
                    const response = await fetch(uri);
                    const imageBlob = await response.blob();
                    const base64Data = await new Promise((resolve)=>{
                        const reader=new FileReader();
                        reader.readAsDateURL(imageBlob);
                        reader.onloadend=()=>{
                            resolve(reader.result);
                        };
    
                    });
                    await AsyncStorage.setItem(uri, base64Data);
                    setCasheSource({uri: base64Data});
                }
                
            } catch (error) {
                // console.error('Error caching image', error);
                setCasheSource({uri});
            }
        } 
        getCachedImage();
    },[]);
    return <Animated.Image source={casheSource} {...props}/>
}