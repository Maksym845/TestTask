import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { Colors } from "utils/colors";

interface Props {
  containerStyle?: ViewStyle,
}

export const MaterialButton: React.FC<Props> = ({ containerStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]}>
      <Text style={styles.buttonText}>Material Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 17,
    backgroundColor: Colors.deepGreen,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.white,
    textAlign: 'center',
  },
});
