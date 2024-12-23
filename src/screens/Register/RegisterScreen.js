import axios from 'axios';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../contexts/ThemeContext';

export default function RegisterScreen({ navigation }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido!');
      return;
    }

    try {
      const response = await axios.post(
        'https://6740e385d0b59228b7f1adeb.mockapi.io/users',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        Alert.alert('Sucesso!', 'Conta criada com sucesso!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', 'Ocorreu um problema ao criar a conta.');
      }
    } catch (error) {
      console.error('Erro no registro:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível criar sua conta. Tente novamente mais tarde.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/b3/31/f5/b331f538d29019dfbc69fa3f564eb99f.jpg' }}
      style={[styles.container, { backgroundColor: isDark ? '#121212' : '#f5f5f5' }]}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Image source={{ uri: 'https://i.imgur.com/ULWXfpT.png' }} style={styles.logo} />

        <Text style={[styles.title, { color: isDark ? '#fff' : '#333' }]}>Cadastrar</Text>

        <TextInput
          style={[styles.input, { backgroundColor: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000' }]}
          placeholder="Email"
          placeholderTextColor={isDark ? '#bbb' : '#999'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={[styles.input, { backgroundColor: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000' }]}
          placeholder="Senha"
          placeholderTextColor={isDark ? '#bbb' : '#999'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          maxLength={6}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.registerRow}>
          <Text style={[styles.text, { color: isDark ? '#fff' : '#333' }]}>Possui uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerText}>Faça o Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="instagram" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="facebook" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 30,
  },
  backgroundImage: {
    opacity: 0.8,
  },
  logo: {
    width: 130,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e9a0b8',
    marginBottom: 15,
    fontSize: 18,
    width: '100%',
  },
  button: {
    backgroundColor: '#e9a0b8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  text: {},
  registerText: {
    color: '#e9a0b8',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#e9a0b8',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
