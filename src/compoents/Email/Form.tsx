import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';
import Svg, { G, Path } from 'react-native-svg';

interface Props {
  containerStyle?: ViewStyle,
}

export const Form: React.FC<Props> = ({ containerStyle }) => {
  const [email, setEmail] = useState('');
  const [isCorrectEmail, setIsCorrectEmail] = useState<boolean>();
  const [timerId, setTimerId] = useState();

  const onChangeText = useCallback((value: string) => {
    setEmail(value);
    setIsCorrectEmail(undefined);

    clearTimeout(timerId);

    const timer = setTimeout(() => {
      const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (regEx.test(value)) {
        setIsCorrectEmail(true);
      } else {
        setIsCorrectEmail(false);
      }
    }, 300);

    setTimerId(timer);
  }, [timerId]);

  return (
    <View style={[styles.main, containerStyle]}>
      <Text style={styles.formTitle}>Email</Text>
      <View style={[
        styles.container,
        (!isCorrectEmail && isCorrectEmail !== undefined) ? styles.incorrect
          : isCorrectEmail ? styles.correct
            : undefined,
      ]}
      >
        <Svg width="20px" height="20px" viewBox="0 -2.5 20 20">
          <G id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <G id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#000000">
              <G id="icons" transform="translate(56.000000, 160.000000)">
                <Path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#1573]" />
              </G>
            </G>
          </G>
        </Svg>
        <TextInput
          placeholder={'Email'}
          value={email}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    gap: 10,
  },
  container: {
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 17,
  },
  formTitle: {
    color: Colors.deepGreen,
  },
  input: {
    paddingVertical: 10,
    width: '100%',
  },
  correct: {
    borderColor: Colors.green,
  },
  incorrect: {
    borderColor: Colors.error,
  },
});
