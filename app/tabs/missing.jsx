import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

// Reusable Post Component
const Post = ({ userName, imageSource, description }) => (
  <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
    <Text className="text-lg font-semibold text-gray-900 mb-2">{userName}</Text>
    <Image
      source={imageSource}
      className="w-full h-64 rounded-md mb-2"
      resizeMode="cover"
      accessibilityLabel={`${userName}'s missing pet`}
    />
    <Text className="text-gray-700 mb-2">{description}</Text>
    <View className="flex-row justify-between">
      <ActionButton iconSource={require('../../assets/images/like.png')} label="Like" />
      <ActionButton iconSource={require('../../assets/images/comment.png')} label="Comment" />
      <ActionButton iconSource={require('../../assets/images/share.png')} label="Share" />
    </View>
  </View>
);

// Reusable Action Button Component
const ActionButton = ({ iconSource, label }) => (
  <TouchableOpacity className="flex-row items-center">
    <Image source={iconSource} className="w-5 h-5 mr-1" />
    <Text className="text-gray-700">{label}</Text>
  </TouchableOpacity>
);

const Missing = () => {
  return (
    <View className="flex-1 bg-orange-500">
      <Text className="text-2xl font-light ml-6 mt-6 text-white">Lost and Found Pets</Text>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        {/* Reusable Posts */}
        <Post
          userName="Erikka Laine Daplinan"
          imageSource={require('../../assets/images/bulldog1.jpeg')}
          description="Home isn't the same without you. We'll keep searching until you're back."
        />
        <Post
          userName="Rizza Lynn Repompo"
          imageSource={require('../../assets/images/goldenretriever1.jpeg')}
          description="The love we share will guide you home. We're looking for you!"
        />
        <Post
          userName="Angelique Mahidlawon"
          imageSource={require('../../assets/images/aspin2.jpeg')}
          description="Hold on, buddy! We're out here searching for you. You're so loved!"
        />
        <Post
          userName="James Kent Dacuyan"
          imageSource={require('../../assets/images/persian2.jpg')}
          description="Missing you more than words can say. Hoping for your safe return!"
        />
        <Post
          userName="Erikka Laine Daplinan"
          imageSource={require('../../assets/images/spynx.jpeg')}
          description="With love and determination, we will find you!"
        />
      </ScrollView>
    </View>
  );
};

export default Missing;
