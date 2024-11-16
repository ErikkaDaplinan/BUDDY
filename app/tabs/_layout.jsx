import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';
//Tab Layout
const TabIcon = ({ icon, color }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: color }} 
            />
        </View>
    );
};

const TabLayout = () => {
    return (
        <Tabs
        screenOptions={{
            tabBarStyle: { backgroundColor: '#fdfdfd' },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="store"
                options={{
                    title: 'Store',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.store}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="feed"
                options={{
                    title: 'Feed',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.feed}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="care"
                options={{
                    title: 'Care',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.care}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="missing"
                options={{
                    title: 'Lost Pets',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.missing}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabLayout;