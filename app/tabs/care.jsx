import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const Care = () => {
  return (
    <View className="flex-1 bg-orange-500">
      {/* Content for your pet care tips */}
      <Text className="text-2xl font-light ml-6 mt-6 text-white">Pet Care Tips</Text>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        
        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/nutri.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Nutrition</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">A balanced diet is crucial for your pet's health. Consult your veterinarian to determine the best food for your pet's age, breed, and activity level. Offer fresh, clean water at all times.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/shelter.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Shelter</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Provide a safe and comfortable environment for your pet. This includes a clean, well-ventilated space, a comfortable bed, and appropriate toys. Ensure the space is free of hazards like poisonous plants or sharp objects.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/hygiene.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Hygiene</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Regular grooming is essential for maintaining your pet's health and appearance. This includes brushing, bathing, nail trimming, and dental care. Consult your veterinarian for specific grooming recommendations for your pet's breed.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/exercise.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Exercise</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Regular exercise is vital for your pet's physical and mental well-being. The amount of exercise needed varies based on breed and age. Provide opportunities for playtime, walks, or other activities that encourage movement.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/training.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Training</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Training is essential for both your pet's safety and your relationship. Basic commands like "sit," "stay," and "come" are crucial for controlling your pet in various situations. Consider professional training or online resources to learn effective techniques.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/vetcare.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Veterinary Care</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Regular checkups are essential for early detection of health issues. Vaccinations are also crucial for protecting your pet from contagious diseases.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/safe.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Safe Playtime</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Provide age-appropriate toys and supervise playtime to prevent injuries.</Text>
        </View>

        <View className="bg-white p-4 mb-4 rounded-2xl shadow-md">
          <View className="flex-row items-center">
            <Image
              source={require('../../assets/images/social.png')} // Updated filepath
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text className="text-lg font-semibold ml-4 text-gray-900">Socialization</Text>
          </View>
          <Text className="text-gray-700 mt-2 leading-6">Introduce your pet to other animals and people in a controlled and safe environment.</Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default Care;
