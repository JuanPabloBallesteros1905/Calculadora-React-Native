import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, styles} from '../themes/app-theme';

interface Props {
  label: string;
  color?: string;
  black?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

export const CustomButton = ({
  doubleSize = false,
  label,
  color = colors.darkgray,
  black = false,
onPress

}: Props) => {
  return (
    <Pressable
        onPress={()=> onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 170 : 80,
      })}>
      <Text style={{...styles.buttonText, color: black ? 'black' : 'white'}}>
        {label}
      </Text>
    </Pressable>
  );
};
