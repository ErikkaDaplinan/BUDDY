import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Missing = () => {
  return (
    <View className="flex-1 bg-orange-500">
   
      <Text className="text-2xl font-light ml-6 mt-6 text-white">Lost and Found Pets</Text>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        
        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Erikka Laine Daplinan</Text> 
          <Image
            source={require('../../assets/dogs/bulldog1.jpeg')}
            className="w-full h-64 rounded-md mb-2"
            resizeMode="cover"
          />
          <Text className="text-gray-700 mb-2">Home isn't the same without you. We'll keep searching until you're back.</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Rizza Lynn Repompo</Text>
          <Image
            source={require('../../assets/dogs/goldenretriever1.jpeg')}
            className="w-full h-64 rounded-md mb-2"
            resizeMode="cover"
          />
          <Text className="text-gray-700 mb-2">The love we share will guide you home. We're looking for you!</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

       
        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Angelique Mahidlawon</Text>
          <Image
            source={require('../../assets/dogs/aspin2.jpeg')}
            className="w-full h-64 rounded-md mb-2"
            resizeMode="cover"
          />
          <Text className="text-gray-700 mb-2">Hold on, buddy! We're out here searching for you. You're so loved!</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

       
        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <Text className="text-lg font-semibold text-gray-900 mb-2">James Kent Dacuyan</Text>
          <Image
            source={require('../../assets/cats/persian2.jpg')}
            className="w-full h-64 rounded-md mb-2"
            resizeMode="cover"
          />
          <Text className="text-gray-700 mb-2">Missing you more than words can say. Hoping for your safe return!</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

  
        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <Text className="text-lg font-semibold text-gray-900 mb-2">Erikka Laine Daplinan</Text>
          <Image
            source={require('../../assets/cats/spynx.jpeg')}
            className="w-full h-64 rounded-md mb-2"
            resizeMode="cover"
          />
          <Text className="text-gray-700 mb-2">With love and determination, we will find you!</Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} className="w-5 h-5 mr-1" />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Missing;
