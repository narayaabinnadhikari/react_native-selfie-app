import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Root_Layout = () => {
  return (
        <Stack screenOptions={{headerStyle: {backgroundColor: "#ddd"}, headerTintColor: '#333',  }}>
            <Stack.Screen name='index' options={{title: 'Home', headerShown: false} } />
            <Stack.Screen name='about' options={{title: 'About'}} />
            <Stack.Screen name='contact' options={{title: 'Contact' }} />
        </Stack>
  )
}

export default Root_Layout

const styles = StyleSheet.create({})