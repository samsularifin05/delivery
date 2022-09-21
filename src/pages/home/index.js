import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {
  BackgroundImageHome,
} from '../../assets';
import {colors} from '../../utils';

const Home = () => {
  return (
    <View style={styles.pages}>
      <ImageBackground
        resizeMode="stretch"
        source={BackgroundImageHome}
        style={styles.background}
      />
      <View style={styles.content}>

      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  desc: {
    fontSize: 14,
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  background: {
    height: 700,
    paddingTop: 30,
  },
  pages: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 50,
    marginTop: -420,
    paddingTop: 15,
  },
});
