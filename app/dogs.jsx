import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Dogs = () => {
  return (
    <View className="flex-1 bg-orange-500">
      <View className="top-4 left-4">
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 60, height: 60 }}
          resizeMode="contain"
          className="ml-32 mt-1 mb-8"
        />
      </View>
      <Text className="text-xl font-light ml-2">Dogs available for adoption</Text>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="bg-blue-950 p-4 mb-4 rounded-lg shadow-lg">
          <Image
            source={require('../assets/images/spaniel.png')}
            style={{ width: '100%', height: 250, borderRadius: 8 }}
            resizeMode="contain"
          />
          <View style={{ width: '100%', height: 200 }} className="bg-white flex-1 w-full rounded-lg shadow-md p-4 items-start justify-between">
            <Text className="text-xl font-normal mt-2">Max</Text>
            <Text className="text-gray-700 font-light">Breed: Spaniel</Text>
            <Text className="text-gray-700 font-light">Age: 2 years</Text>
            <Text className="text-gray-700 font-light">Personality: Friendly and Playful</Text>
            <Text className="text-gray-700 font-light">Distance: 2km</Text>
            <View className="flex-row justify-between mt-4">
              <TouchableOpacity className="bg-orange-500 py-3 px-6 w-3/4 rounded-full shadow-lg flex-row items-center justify-center mr-4">
                <Image
                  source={require('../assets/images/adoptdog.png')}
                  style={{ width: 20, height: 20, marginRight: 40 }}
                  resizeMode="contain"
                />
                <Text className="text-white text-lg">Adopt</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-300 py-4 px-4 rounded-full shadow-lg flex-row items-center justify-center">
                <Image
                  source={require('../assets/images/heart.png')}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="bg-blue-950 p-4 mb-4 rounded-lg shadow-lg">
          <Image
            source={require('../assets/images/goldenret.png')}
            style={{ width: '100%', height: 250, borderRadius: 8 }}
            resizeMode="contain"
          />
          <View style={{ width: '100%', height: 200 }} className="bg-white flex-1 w-full rounded-lg shadow-md p-4 items-start justify-between">
            <Text className="text-xl font-normal mt-2">Rex</Text>
            <Text className="text-gray-700 font-light">Breed: Golden Retriever</Text>
            <Text className="text-gray-700 font-light">Age: 4 years</Text>
            <Text className="text-gray-700 font-light">Personality: Loyal and Affectionate</Text>
            <Text className="text-gray-700 font-light">Distance: 4km</Text>
            <View className="flex-row justify-between mt-4">
              <TouchableOpacity className="bg-orange-500 py-3 px-6 w-3/4 rounded-full shadow-lg flex-row items-center justify-center mr-4">
                <Image
                  source={require('../assets/images/adoptdog.png')}
                  style={{ width: 20, height: 20, marginRight: 40 }}
                  resizeMode="contain"
                />
                <Text className="text-white text-lg">Adopt</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-300 py-4 px-4 rounded-full shadow-lg flex-row items-center justify-center">
                <Image
                  source={require('../assets/images/heart.png')}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="bg-blue-950 p-4 mb-4 rounded-lg shadow-lg">
          <Image
            source={require('../assets/images/germanshep.png')}
            style={{ width: '100%', height: 250, borderRadius: 8 }}
            resizeMode="contain"
          />
          <View style={{ width: '100%', height: 200 }} className="bg-white flex-1 w-full rounded-lg shadow-md p-4 items-start justify-between">
            <Text className="text-xl font-normal mt-2">Vino</Text>
            <Text className="text-gray-700 font-light">Breed: German Shepherd</Text>
            <Text className="text-gray-700 font-light">Age: 2 years</Text>
            <Text className="text-gray-700 font-light">Personality: Intelligent and Courageous</Text>
            <Text className="text-gray-700 font-light">Distance: 6km</Text>
            <View className="flex-row justify-between mt-4">
              <TouchableOpacity className="bg-orange-500 py-3 px-6 w-3/4 rounded-full shadow-lg flex-row items-center justify-center mr-4">
                <Image
                  source={require('../assets/images/adoptdog.png')}
                  style={{ width: 20, height: 20, marginRight: 40 }}
                  resizeMode="contain"
                />
                <Text className="text-white text-lg">Adopt</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-300 py-4 px-4 rounded-full shadow-lg flex-row items-center justify-center">
                <Image
                  source={require('../assets/images/heart.png')}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="bg-blue-950 p-4 mb-4 rounded-lg shadow-lg">
          <Image
            source={require('../assets/images/french.png')}
            style={{ width: '100%', height: 250, borderRadius: 8 }}
            resizeMode="contain"
          />
          <View style={{ width: '100%', height: 200 }} className="bg-white flex-1 w-full rounded-lg shadow-md p-4 items-start justify-between">
            <Text className="text-xl font-normal mt-2">Leo</Text>
            <Text className="text-gray-700 font-light">Breed: French Bulldog</Text>
            <Text className="text-gray-700 font-light">Age: 1 year</Text>
            <Text className="text-gray-700 font-light">Personality: Adaptable and Playful</Text>
            <Text className="text-gray-700 font-light">Distance: 8km</Text>
            <View className="flex-row justify-between mt-4">
              <TouchableOpacity className="bg-orange-500 py-3 px-6 w-3/4 rounded-full shadow-lg flex-row items-center justify-center mr-4">
                <Image
                  source={require('../assets/images/adoptdog.png')}
                  style={{ width: 20, height: 20, marginRight: 40 }}
                  resizeMode="contain"
                />
                <Text className="text-white text-lg">Adopt</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-300 py-4 px-4 rounded-full shadow-lg flex-row items-center justify-center">
                <Image
                  source={require('../assets/images/heart.png')}
                  style={{ width: 20, height: 20 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dogs;
