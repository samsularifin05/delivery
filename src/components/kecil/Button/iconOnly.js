import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {IcFacebook, IcGoogle} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    let image = '';
    if (icon === 'google') {
      image = IcGoogle;
    }
    if (icon === 'facebook') {
      image = IcFacebook;
    }
    return <Image source={image} style={{width: 25, height: 25}} />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
