import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tailwind`bg-white h-full`}>
      <View style={tailwind`pt-10 px-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }} />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({}) 