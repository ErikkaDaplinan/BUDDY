import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const Home = () => {
  return (
    <View className="flex-1 bg-orange-500">
      {/* Wrapping content in ScrollView for scrolling */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        <View className="items-center mt-10">
          <Image
            source={require('../../assets/images/logo.png')} 
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center justify-center mt-6 mx-6 bg-white rounded-full shadow px-4 py-2">
          <TextInput
            placeholder="Search pet to adopt"
            className="flex-1 p-3"
          />
          <Image
            source={require('../../assets/images/search.png')} 
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </View>

        {/* Greeting Section */}
        <View className="items-center mt-4">
          <Text className="text-3xl font-bold text-center text-white">Hi, Erikka Laine!</Text>
          <Text className="text-lg font-light text-white mt-2 text-center">
            We will help you to find your suitable pets
          </Text>
        </View>

        {/* Button Section */}
        <View className="bg-[#C2C2C2] mt-8 px-6 py-6 w-full rounded-t-lg shadow-lg">
          <View className="flex-row justify-between mb-4">
            <Link href="/dogs" asChild>
              <TouchableOpacity className="bg-blue-950 flex-1 py-4 mx-2 rounded-2xl shadow-lg items-center">
                <Image
                  source={require('../../assets/images/dog.png')}  
                  style={{ width: 40, height: 40, marginBottom: 8 }}
                  resizeMode="contain"
                />
                <Text className="text-white text-lg">Dog</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/cats" asChild>
              <TouchableOpacity className="bg-orange-500 flex-1 py-4 mx-2 rounded-2xl shadow-lg items-center">
                <Image
                  source={require('../../assets/images/cat.png')}  
                  style={{ width: 40, height: 40, marginBottom: 8 }}
                  resizeMode="contain"
                />
                <Text className="text-white text-lg">Cat</Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Pet Care Section */}
          <Link href="/petcare" asChild>
            <TouchableOpacity className="bg-white flex-row items-center p-4 shadow-lg rounded-2xl mt-4">
              <Image
                source={require('../../assets/images/petcare.png')} 
                style={{ width: 60, height: 60, marginRight: 12 }}
                resizeMode="contain"
              />
              <Text className="text-gray-700 text-base flex-1">Match a pet and adopt</Text>
            </TouchableOpacity>
          </Link>

          {/* Nearby Pet Shop Section */}
          <TouchableOpacity className="bg-white flex-row items-center p-4 shadow-lg rounded-2xl mt-4">
            <Image
              source={require('../../assets/images/petstore.jpg')}  
              style={{ width: 60, height: 60, marginRight: 12 }}
              resizeMode="contain"
            />
            <Text className="text-gray-700 text-base flex-1">New pet shop is nearby. Check it out!</Text>
          </TouchableOpacity>

          {/* Numerical Data Button */}
          <Link href="/numerical" asChild>
            <TouchableOpacity className="bg-red-600 flex-row justify-center items-center p-4 shadow-lg mt-4 rounded-2xl">
              <Image
                source={require('../../assets/images/datas.png')}  
                style={{ width: 40, height: 40, marginRight: 12 }}
                resizeMode="contain"
              />
              <Text className="text-white text-lg">Dashboard</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
