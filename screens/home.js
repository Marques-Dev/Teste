import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Home = props => {
  return (
    <View> 
        <Text style={styles.container}> Digite seu nome </Text>
        <TextInput />
        <TouchableOpacity>
            <Text>Entrar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    Text:{

    }
})
