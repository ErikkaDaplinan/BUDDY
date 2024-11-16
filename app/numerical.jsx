import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Numerical = () => {
  return (
    <View className="flex-1 bg-orange-500">
      <ScrollView contentContainerStyle={{ padding: 16, marginTop: 10 }}>
        <Image 
          source={require('../assets/images/logo.png')} 
          style={{ width: '100%', height: 100, borderRadius: 10, marginBottom: 16, resizeMode: 'contain' }} 
        />
        <Text className="text-xl text-white mb-2">Number of Pets Adopted Year 2024</Text>
        <Image 
          source={require('../assets/images/piechart.png')} 
          style={{ width: '100%', height: 250, borderRadius: 10, marginBottom: 16, resizeMode: 'contain' }} 
        />

        <Text className="text-xl text-white mb-2">Number of Products Sold in March 2024</Text>
        <Image 
          source={require('../assets/images/linegraph.png')} 
          style={{ width: '100%', height: 250, borderRadius: 10, resizeMode: 'contain' }} 
        />
      </ScrollView>
    </View>
  );
};

export default Numerical;
