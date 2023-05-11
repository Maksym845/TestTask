import React from 'react';
import { IPhoto } from 'types/photos';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "utils/colors";

interface Props {
  photo: IPhoto,
}

export const PhotoCard: React.FC<Props> = ({ photo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: photo.url }} style={styles.photo}/>
        <Text style={styles.title}>
          {photo.title.length > 15 ? photo.title.slice(0, 15) + '...' : photo.title}
        </Text>
      </View>
      <View style={styles.rightComponent}>
        <TouchableOpacity style={styles.button}>
          <Text>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  photo: {
    height: 80,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
  },
  rightComponent: {
    justifyContent: 'flex-end',
    paddingRight: 5,
    paddingBottom: 5,
  },
  button: {
    height: 40,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: 50,
  },
});
