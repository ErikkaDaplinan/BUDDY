import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const Login = () => {
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}

  return (
    <SafeAreaView className="bg-orange-500 h-full">
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-4 my-6">
              <Image source={images.logo}
                resizemode='contain'
                className="w-[170px] h-[159px] "
              />
              <Text className="text-3xl text-white mt-10 font-regular mr-60">Sign In</Text>
              <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-7"
                  keyboardType="email-address"
              />
              <FormField

                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-7"
              />
              <CustomButton
                  title="Sign In"
                  handlePress={submit}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />

        <View className="flex justify-center pt-5 flex-row      gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/auth/signup"
              className="text-lg font-u_bold text-white underline"
            >
              Sign Up
            </Link>
            <Text className="text-lg text-gray-100 font-pregular">
              or
            </Text>
            <Link
              href="/tabs/home"
              className="text-lg font-u_bold text-white underline"
            >
              Start
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default Login