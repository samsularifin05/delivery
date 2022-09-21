import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {BackgroundImageHome, ImageLogin} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {colors} from '../../utils';
import useForm from '../../utils/useForm';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  return (
    <View style={styles.pages}>
      <ImageBackground
        resizeMode="stretch"
        source={BackgroundImageHome}
        style={styles.background}
      />
      <View style={styles.content}>
        <View
          style={{
            alignItems: 'center',
            marginTop: -100,
          }}>
          <Image source={ImageLogin} style={styles.ilustrasiLogin} />
        </View>
        <Gap height={30} />

        <View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 25}}> Silahkan Login </Text>
          </View>

          <Input
            label="Email"
            placeholder="Masukan Emasil"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={30} />
          <Input
            label="Password"
            secureTextEntry={true}
            placeholder="*******"
          />
          <Gap height={50} />
          <Button
            title={'Masuk'}
            type="primary"
            onPress={() => navigation.navigate('MyApp')}
          />
          <Gap height={20} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button type="icon-only" icon="google" />
            <Gap width={20} />
            <Button type="icon-only" icon="facebook" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  ilustrasiLogin: {
    width: 207,
    height: 172,
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
    paddingHorizontal: 16,
  },
});
