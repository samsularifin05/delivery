import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors,} from '../../../utils';
import IconOnly from './iconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
if (type === 'icon-only') { 
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disabledBg}>
        <Text style={styles.disabledTex}> {title} </Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}> {title} </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary' ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),

  text: type => ({
    fontSize: 16,
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
  disabledBg: {
    backgroundColor: colors.button.disabled.background,
    paddingVertical: 10,
    borderRadius: 10,
  },
  disabledTex : {
    fontSize: 16,
    textAlign: 'center',
    color: colors.button.disabled.text
  }
});