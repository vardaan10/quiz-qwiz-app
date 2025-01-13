import { Link } from "expo-router"
import React, { useState } from "react"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { SafeAreaView, Text, View, TextInput, Pressable, Button, Alert } from "react-native"

import { useAuth } from "@/lib/context/auth"

export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [otp, setOtp] = useState<string>("")
  const [checked, setChecked] = useState<boolean>(false)
  const [showOTPInput, setShowOTPInput] = useState<boolean>(false)

  const { requestOTP, verifyOTP } = useAuth()

  async function handleRequestOtp() {
    if (!username && checked) {
      Alert.alert("Alert", "Please enter a username")
    }

    if (!checked) {
      Alert.alert("Alert", "Terms and conditions are mandatory")
    }

    await requestOTP(username)
    setShowOTPInput(true)
  }

  async function handleVerifyOTP() {
    await verifyOTP(username, otp)
  }

  const toggleCheck = () => setChecked(!checked)

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View className="border rounded-md p-4 flex-col gap-4 w-3/4">
        <View className="flex-col gap-3">
          <Text className="font-bold text-xl">User</Text>
          <TextInput
            onChangeText={setUsername}
            placeholder="Enter username"
            value={username}
            className="border p-4 rounded-sm text-2xl"
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!showOTPInput}
          />
        </View>
        {!showOTPInput ? (
          <>
            <View className="flex-row items-center rounded-md">
              <Pressable onPress={toggleCheck}>
                {checked ? (
                  <MaterialIcons name="check-box" size={24} color="blue" />
                ) : (
                  <MaterialIcons name="check-box-outline-blank" size={24} color="black" />
                )}
              </Pressable>
              <Text className="text-lg">
                Agree with{" "}
                <Link href="/terms" className="underline pl-2 text-blue-600">
                  terms and conditions
                </Link>
              </Text>
            </View>

            <Button onPress={handleRequestOtp} title="Get OTP" />
          </>
        ) : (
          <>
            <View className="flex-col gap-3">
              <Text className="font-bold text-xl">OTP</Text>
              <TextInput
                onChangeText={setOtp}
                placeholder="Enter OTP"
                value={otp}
                className="border p-4 rounded-sm text-2xl"
                keyboardType="numeric"
              />
            </View>
            <Button onPress={handleVerifyOTP} title="Verify OTP" />
          </>
        )}
      </View>
    </SafeAreaView>
  )
}
