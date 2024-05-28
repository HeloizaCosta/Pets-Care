import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './LoginStyle';

const logo = require('../../assets/logo.png')

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeTab, setActiveTab] = useState('email');

  return (
    <LinearGradient colors={['#9C51FD', '#2B1240']}style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'email' && styles.activeTab]}
            onPress={() => setActiveTab('email')}>
            <Text style={[styles.textChange, activeTab === 'email' && styles.activeTabText]}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'phoneNumber' && styles.activeTab]}
            onPress={() => setActiveTab('phoneNumber')}>
            <Text style={[styles.textChange, activeTab === 'phoneNumber' && styles.activeTabText]}>Telefone</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>{activeTab === 'email' ? 'Email' : 'Telefone'}</Text>
        <TextInput
          style={styles.input}
          placeholder={activeTab === 'email' ? 'Email' : 'Telefone'}
          value={activeTab === 'email' ? email : phoneNumber}
          onChangeText={value => activeTab === 'email' ? setEmail(value) : setPhoneNumber(value)}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a Senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};