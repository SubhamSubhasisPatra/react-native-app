import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../config/colors';

function ListItem({title , subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        marginTop: 20,
    },
    image : {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium
    },
    title : {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 15,
    }
})

export default ListItem;