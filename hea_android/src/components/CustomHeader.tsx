// components/CustomHeader.js
import * as React from 'react';
// import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const CustomHeader = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.headerContainer}>
            <StatusBar />
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" size={30} color="white" />
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Ache seus produtos aqui!!"
                onChangeText={(text) => console.log(text)}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                    style={{ width: 90, height: 50 }}
                    source={require('../../assets/Hea.png')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 56, // Altura padrão do cabeçalho do React Navigation
        backgroundColor: '#5CB4C2',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        textAlign: 'center',
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
    },
});

export default CustomHeader;
