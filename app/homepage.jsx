import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <View className="bg-orange-500 flex-1 justify-between items-center font-j_variable">
      <View className="mt-60">
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        />
      </View>
      <View style={{
        backgroundColor: '#C2C2C2',
        width: '100%',
        height: '50%',
        padding: 8,
        marginHorizontal: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <Link href="/" asChild>
          <TouchableOpacity style={{ position: 'absolute', top: 16, right: 16 }}>
            <Image
              source={require('../assets/images/x.png')}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>
        <Link href="login" asChild>
          <TouchableOpacity className="bg-blue-950 py-3 w-64 rounded-full mb-4 flex items-center justify-center flex-row">
            <Image
              source={require('../assets/images/log.png')}
              style={{ width: 24, height: 24, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-light">Sign In</Text>
          </TouchableOpacity>
        </Link>
        <Link href="signup" asChild>
          <TouchableOpacity className="bg-orange-500 py-3 w-64 rounded-full mb-4 flex items-center justify-center flex-row">
            <Image
              source={require('../assets/images/sign.png')}
              style={{ width: 24, height: 22, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-light">Sign Up</Text>
          </TouchableOpacity>
        </Link>

        <Text className="mb-4 text-neutral-950">or</Text>
        <Link href="/home" asChild>
          <TouchableOpacity className="bg-blue-950 py-3 w-64 rounded-full flex items-center justify-center flex-row">
            <Image
              source={require('../assets/images/fb.png')}
              style={{ width: 35, height: 30, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text className="text-white text-lg font-light">Sign In with Facebook</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default HomePage;
