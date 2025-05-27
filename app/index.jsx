//rnfes
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      <Text style={[styles.title, {color: 'green'}]}>Home</Text>
      <Text style={{color: 'red', marginTop: 10, marginBottom: 20}}>This looks like a flexbox </Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginVertical: 20,
        borderColor: 'maroon',
        borderWidth: 5,
        borderRadius: 10

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})