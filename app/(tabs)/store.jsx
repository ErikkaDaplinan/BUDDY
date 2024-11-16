import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'; 
import React from 'react'; 

const Store = () => { 
  return ( 
    <View className="flex-1 bg-orange-500"> 
    
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}> 
        <View className="items-center mt-10"> 
          <Image 
            source={require('../../assets/catlogo.png')} 
            style={{ width: 80, height: 80 }} 
            resizeMode="contain" 
          /> 
        </View> 
        <View className="flex-row items-center justify-center mt-6 mx-6 bg-white rounded-full shadow px-4 py-2"> 
          <TextInput 
            placeholder="Search for products" 
            className="flex-1 p-3" 
          /> 
          <Image 
            source={require('../../assets/search.png')} 
            style={{ width: 24, height: 24 }} 
            resizeMode="contain" 
          /> 
        </View> 

        <View className="items-start justify-center mt-4 mx-6"> 
          <Text className="text-2xl font-light text-white">Pet Supplies</Text> 
        </View> 

       
        <View className="p-4 mx-6 rounded-xl shadow-lg mb-4 bg-[#C2C2C2]"> 
          <View className="flex-column items-center justify-center p-5 mb-4"> 
            <Image 
              source={require('../../assets/products/cattoy.jpg')} 
              style={{ width: 200, height: 200 }} 
              resizeMode="contain" 
            /> 
            <View className="flex-1 mt-4 items-start"> 
              <Text className="text-xl font-semibold text-gray-900">Cat Toy</Text> 
              <Text className="text-lg font-medium text-gray-700 mt-1">$10.00</Text> 
              <Text className="text-sm text-white mt-1">Interactive toy to keep your cat entertained</Text>
              <TouchableOpacity 
                className="bg-blue-950 py-2 rounded mt-2 flex-row items-center justify-center" 
                style={{ width: 250 }}> 
                <Image 
                  source={require('../../assets/buy.png')} 
                  style={{ width: 20, height: 20, marginRight: 8 }} 
                /> 
                <Text className="text-white text-lg">Add to Cart</Text> 
              </TouchableOpacity> 
            </View> 
          </View>
        </View>

      
        <View className="p-4 mx-6 rounded-xl shadow-lg mb-4 bg-[#C2C2C2]"> 
          <View className="flex-column items-center justify-center p-5 mb-4"> 
            <Image 
              source={require('../../assets/products/catfood.jpg')} 
              style={{ width: 200, height: 200 }} 
              resizeMode="contain" 
            /> 
            <View className="flex-1 mt-4 items-start"> 
              <Text className="text-xl font-semibold text-gray-900">Cat Food</Text> 
              <Text className="text-lg font-medium text-gray-700 mt-1">$15.00</Text> 
              <Text className="text-sm text-white mt-1">Premium quality cat food for a balanced diet</Text>
              <TouchableOpacity 
                className="bg-blue-950 py-2 rounded mt-2 flex-row items-center justify-center" 
                style={{ width: 250 }}> 
                <Image 
                  source={require('../../assets/buy.png')} 
                  style={{ width: 20, height: 20, marginRight: 8 }} 
                /> 
                <Text className="text-white text-lg">Add to Cart</Text> 
              </TouchableOpacity> 
            </View> 
          </View>
        </View>

       
        <View className="p-4 mx-6 rounded-xl shadow-lg mb-4 bg-[#C2C2C2]"> 
          <View className="flex-column items-center justify-center p-5 mb-4"> 
            <Image 
              source={require('../../assets/products/catleash.jpg')} 
              style={{ width: 200, height: 200 }} 
              resizeMode="contain" 
            /> 
            <View className="flex-1 mt-4 items-start"> 
              <Text className="text-xl font-semibold text-gray-900">Cat Leash</Text> 
              <Text className="text-lg font-medium text-gray-700 mt-1">$8.00</Text> 
              <Text className="text-sm text-white mt-1">Durable leash for your outdoor cat adventures</Text>
              <TouchableOpacity 
                className="bg-blue-950 py-2 rounded mt-2 flex-row items-center justify-center" 
                style={{ width: 250 }}> 
                <Image 
                  source={require('../../assets/buy.png')} 
                  style={{ width: 20, height: 20, marginRight: 8 }} 
                /> 
                <Text className="text-white text-lg">Add to Cart</Text> 
              </TouchableOpacity> 
            </View> 
          </View>
        </View>

       
        <View className="p-4 mx-6 rounded-xl shadow-lg mb-4 bg-[#C2C2C2]"> 
          <View className="flex-column items-center justify-center p-5 mb-4"> 
            <Image 
              source={require('../../assets/products/dogtoy.jpg')} 
              style={{ width: 200, height: 200 }} 
              resizeMode="contain" 
            /> 
            <View className="flex-1 mt-4 items-start"> 
              <Text className="text-xl font-semibold text-gray-900">Dog Toy</Text> 
              <Text className="text-lg font-medium text-gray-700 mt-1">$12.00</Text> 
              <Text className="text-sm text-white mt-1">Chewable toy for dogs of all sizes</Text>
              <TouchableOpacity 
                className="bg-blue-950 py-2 rounded mt-2 flex-row items-center justify-center" 
                style={{ width: 250 }}> 
                <Image 
                  source={require('../../assets/buy.png')} 
                  style={{ width: 20, height: 20, marginRight: 8 }} 
                /> 
                <Text className="text-white text-lg">Add to Cart</Text> 
              </TouchableOpacity> 
            </View> 
          </View>
        </View>

      
        <View className="p-4 mx-6 rounded-xl shadow-lg mb-4 bg-[#C2C2C2]"> 
          <View className="flex-column items-center justify-center p-5 mb-4"> 
            <Image 
              source={require('../../assets/products/dogleash.jpg')} 
              style={{ width: 200, height: 200 }} 
              resizeMode="contain" 
            /> 
            <View className="flex-1 mt-4 items-start"> 
              <Text className="text-xl font-semibold text-gray-900">Dog Leash</Text> 
              <Text className="text-lg font-medium text-gray-700 mt-1">$10.00</Text> 
              <Text className="text-sm text-white mt-1">Comfortable leash for walking your dog</Text>
              <TouchableOpacity 
                className="bg-blue-950 py-2 rounded mt-2 flex-row items-center justify-center" 
                style={{ width: 250 }}> 
                <Image 
                  source={require('../../assets/buy.png')} 
                  style={{ width: 20, height: 20, marginRight: 8 }} 
                /> 
                <Text className="text-white text-lg">Add to Cart</Text> 
              </TouchableOpacity> 
            </View> 
          </View>
        </View>

       
        <View className="p-4 mx-6 rounded-xl shadow-lg mb-4 bg-[#C2C2C2]
        "> 
          <View className="flex-column items-center justify-center p-5 mb-4"> 
            <Image 
              source={require('../../assets/products/dogfood.jpg')} 
              style={{ width: 200, height: 200 }} 
              resizeMode="contain" 
            /> 
            <View className="flex-1 mt-4 items-start"> 
              <Text className="text-xl font-semibold text-gray-900">Dog Food</Text> 
              <Text className="text-lg font-medium text-gray-700 mt-1">$20.00</Text> 
              <Text className="text-sm text-white mt-1">Nutritious food for all dog breeds</Text>
              <TouchableOpacity 
                className="bg-blue-950 py-2 rounded mt-2 flex-row items-center justify-center" 
                style={{ width: 250 }}> 
                <Image 
                  source={require('../../assets/buy.png')} 
                  style={{ width: 20, height: 20, marginRight: 8 }} 
                /> 
                <Text className="text-white text-lg
                ">Add to Cart</Text> 
              </TouchableOpacity> 
            </View> 
          </View>
        </View>

      </ScrollView> 
    </View> 
  ); 
}; 

export default Store;
