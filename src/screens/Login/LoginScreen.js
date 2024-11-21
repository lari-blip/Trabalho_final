import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando FontAwesome icons

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
    } else if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido!');
    } else if (password.length !== 6) {
      Alert.alert('Erro', 'A senha deve ter 6 caracteres!');
    } else {
      Alert.alert('Erro', 'Você está não tem cadastro!');
      navigation.navigate('Main');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign in</Text>
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
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.registerRow}>
        <Text style={styles.text}>Você não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Login Icons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={30} color="#5E3B26" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="instagram" size={30} color="#5E3B26" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={30} color="#5E3B26" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Fundo transparente
    padding: 15,
    justifyContent: 'center',
  },
  logo: {
    width: 130,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: '#5E3B26',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'transparent', // Fundo transparente
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2, // Borda colorida
    borderColor: '#5E3B26', // Cor da borda
    marginBottom: 15,
    fontSize: 16,
    color: '#363636',
  },
  button: {
    backgroundColor: '#5E3B26',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#333',
  },
  registerText: {
    color: '#5E3B26',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  socialButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#5E3B26',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});