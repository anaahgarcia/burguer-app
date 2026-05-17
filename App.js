import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.emoji}>🍔</Text>
        <Text style={styles.title}>Burguer App</Text>
        <Text style={styles.subtitle}>Delivery em Matosinhos</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>ou</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.btnGoogle}>
          <Text style={styles.btnGoogleText}>🔵  Continuar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkCadastro}>
          <Text style={styles.linkText}>Não tens conta? <Text style={styles.linkBold}>Regista-te</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  inner: { flex: 1, padding: 28, justifyContent: 'center' },
  emoji: { fontSize: 56, textAlign: 'center', marginBottom: 8 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#c8860a', textAlign: 'center', letterSpacing: 2 },
  subtitle: { fontSize: 13, color: '#888', textAlign: 'center', marginBottom: 40, letterSpacing: 1 },
  input: { backgroundColor: '#1a1a1a', color: '#fff', borderRadius: 10, padding: 16, marginBottom: 14, fontSize: 15, borderWidth: 1, borderColor: '#2a2a2a' },
  btnLogin: { backgroundColor: '#c8860a', borderRadius: 10, padding: 16, alignItems: 'center', marginTop: 4 },
  btnLoginText: { color: '#0f0f0f', fontWeight: 'bold', fontSize: 16 },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
  line: { flex: 1, height: 1, backgroundColor: '#2a2a2a' },
  orText: { color: '#555', marginHorizontal: 12, fontSize: 13 },
  btnGoogle: { backgroundColor: '#1a1a1a', borderRadius: 10, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: '#2a2a2a' },
  btnGoogleText: { color: '#fff', fontSize: 15 },
  linkCadastro: { marginTop: 28, alignItems: 'center' },
  linkText: { color: '#666', fontSize: 14 },
  linkBold: { color: '#c8860a', fontWeight: 'bold' },
});
