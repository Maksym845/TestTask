import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";

interface Props {
  containerStyle?: ViewStyle,
  onChangeSearch?: (value: string) => void,
}

export const SearchBar: React.FC<Props> = ({
  containerStyle,
  onChangeSearch,
}) => {
  const [text, setText] = useState('');

  const onTextChange = useCallback((value: string) => {
    setText(value);
    if (onChangeSearch) {
      onChangeSearch(value);
    }
  }, [onChangeSearch]);

  return (
    <View style={containerStyle}>
      <TextInput
        value={text}
        onChangeText={onTextChange}
        style={styles.input}
        placeholder={'Search'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
