import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcHome, IcKeranjang, IcKeranjangActive, IconHomeActive, IcPesan, IcPesanActive} from '../../../assets';
import { colors } from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IcHome /> : <IconHomeActive />;
    }
    if (label === 'Pesan') {
      return isFocused ? <IcPesan /> : <IcPesanActive />;
    }
    if (label === 'Keranjang') {
      return isFocused ? <IcKeranjang /> : <IcKeranjangActive />;
    }
    return <IcHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <View style={styles.iconStyle(isFocused)}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopRightRadius: 30,
  },
  iconStyle: active => ({
    backgroundColor: active ? '#fff' : colors.primary,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
