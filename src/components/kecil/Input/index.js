import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native';
import {hide, view} from '../../../assets';
import { colors } from '../../../utils';

const Input = ({
  label,
  placeholder,
  type,
  secureTextEntry,
  value,
  onChangeText,
  disabled,
}) => {
  const [password, setPassword] = useState(secureTextEntry);

  const setPasswordVisibility = () => {
    setPassword(!password);
  };
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.primary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <>
      <Text style={styles.label}> {label} </Text>
      <View style={styles.container}>
        <View style={styles.textBoxContainer}>
          <TextInput
            onFocus={onFocusForm}
            onBlur={onBlurForm}
            underlineColorAndroid="transparent"
            secureTextEntry={password}
            style={styles.input(border)}
            placeholder={placeholder}
            keyboardType={type}
            value={value}
            onChangeText={onChangeText}
            editable={!disabled}
            selectTextOnFocus={!disabled}
          />
          {secureTextEntry && (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touachableButton}
              onPress={setPasswordVisibility}>
              <Image
                source={password ? hide : view}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    color: colors.text.dark,
    marginTop: 10,
  },
  input: border => ({
    padding: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: border,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    paddingVertical: 0,
  }),
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 30
  },

  textBoxContainer: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    height: '70%',
    width: '70%',
  },
});