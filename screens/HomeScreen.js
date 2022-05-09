import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tailwind`bg-white h-full`}>
      <View style={tailwind`pt-14 px-5`}>
        <Image
          style={{ width: 120, height: 120, resizeMode: 'contain' }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }} />

        <NavOptions />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({}) 