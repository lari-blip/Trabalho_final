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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }
  
    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido!');
      return;
    }
  
    try {
      const response = await axios.get(
        `https://6740e385d0b59228b7f1adeb.mockapi.io/users`,
        {
          params: {
            email: email,
            password: password,
          },
        }
      );
  
      if (response.data.length > 0) {
        Alert.alert('Bem-vindo!', `Olá, ${response.data[0].email}`);
        navigation.navigate('Main');
      } else {
        Alert.alert('Erro', 'E-mail ou senha inválidos!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
      console.error(error);
    }
  };

  return (

    <ImageBackground 
      source={{uri: 'https://i.pinimg.com/736x/b3/31/f5/b331f538d29019dfbc69fa3f564eb99f.jpg'}}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Image source={{uri: 'https://i.imgur.com/ULWXfpT.png'}} style={styles.logo} />
        
        <Text style={styles.title}>Entrar</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          maxLength={6}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={styles.registerRow}>
          <Text style={styles.text}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.registerText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        {/* Ícones de login social */}
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
    color: '#fff',
    fontFamily: 'Poppins', 

    textAlign: 'center',
    marginBottom: 20,
  },
  input: {

    backgroundColor: 'transparent', 
    paddingVertical: 15, 
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e9a0b8',
    borderColor: '#F2AA7D',
    marginBottom: 15,
    fontSize: 18, 
    color: '#fff', 
    width: '100%', 
  },
  button: {
    backgroundColor: '#e9a0b8',
    backgroundColor: '#F2AA7D',
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
  text: {
    color: '#fff',
  },
  registerText: {
    color: '#e9a0b8',
    color: '#F2AA7D',

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
    borderColor: '#F2AA7D',

    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

