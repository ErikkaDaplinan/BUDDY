import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-orange-500 h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View className="px-6 flex-1 justify-center items-center">
         
          <Image
            source={images.logo}
            className="w-[280px] h-[84px] mb-8"
            resizeMode="contain"
          />
          <Text className="text-2xl  text-white text-center mb-4">
           Make a New Friend!
          </Text>

          <CustomButton
            title="Adopt Now"
            handlePress={() => router.push('/auth/login')}
            containerStyles="w-full px-6 py-3 bg-orange-200 rounded-lg shadow-md"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
