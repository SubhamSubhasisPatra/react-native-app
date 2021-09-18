import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import colors from '../config/colors';

function Card({title, subtitle, image}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailsContent}>
            <Text style={styles.title}>{title}</Text>
            <Text>{subtitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContent: {
        padding: 20,
    },
    image: {
        width:"100%",
        height:200,
    },
    title: {
        marginBottom: 10,
    }
})

export default Card;