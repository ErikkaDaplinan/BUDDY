import React from "react";
import { Stack} from 'expo-router'

import {useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const MainLayout = () =>{

    const [fontsLoaded, error] = useFonts({
      });
      
      useEffect(() => {
        if (error) throw error;
      
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
      
      if (!fontsLoaded && !error) {
        return null;
      }
      

    return(
        <>
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="cats" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="dogs" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="homepage" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="numerical" options={{
                headerShown: false
            }}/>
        </Stack>
        </>
    )
}

export default MainLayout