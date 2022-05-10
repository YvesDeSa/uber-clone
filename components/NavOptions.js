import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { Icon } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import "react-native-gesture-handler";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen"
  }
]

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tailwind`p-4 pl-8 pb-10 pt-6 bg-gray-200 m-2`}
          onPress={() => navigation.push(item.screen)}
        >
          <View>
            <Image
              style={{ width: 140, height: 140, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tailwind`mt-2 text-lg font-semibold`} >{item.title}</Text>
            <Icon
              style={tailwind`p-2 bg-black rounded-full w-10 mt-4 mb-1`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions