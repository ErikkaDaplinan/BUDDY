import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Feed = () => {
  return (
    
    <View className="flex-1 bg-orange-500">
     
      <Text className="text-2xl font-light ml-6 mt-6 text-white">Community Feed</Text>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        
        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Angelique Mahidlawon</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Training your dog can be a fun experience! Here are some tips.</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">James Kent Dacuyan</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Hydration is just as important and always provide fresh water!</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Rizza Lynn Repompo</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Considering getting a cat? Here are some family - friendly breeds.</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Erikka Laine Daplinan</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Keep an eye on your pet's weight and obesity can lead to health issues.</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Angelique Mahidlawon</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Remember to socialize your pets regularly for a balanced behavior!</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">James Kent Dacuyan</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Make sure to have the right supplies before bringing a new pet home.</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Rizza Lynn Repompo</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">A balanced diet is crucial for your pet's health.</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/user.png')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Erikka Laine Daplinan</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Regular vet check-ups are important for your pet's well-being.</Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/like.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Like</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/comment.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center">
              <Image source={require('../../assets/share.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
              <Text className="text-gray-700">Share</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Feed;
