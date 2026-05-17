import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [morada, setMorada] = useState('');

  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;
  const isOpen = true;
 /* const isOpen = day >= 4 && hour >= 19 && hour < 22.5;*/

  return (
    <SafeAreaView style={s.container}>
      <View style={s.inner}>
        <View style={[s.badge, { backgroundColor: isOpen ? '#1a3a1a' : '#3a1a1a' }]}>
          <Text style={[s.badgeText, { color: isOpen ? '#27ae60' : '#e74c3c' }]}>
            {isOpen ? '🟢  Aberto agora' : '🔴  Fechado agora'}
          </Text>
          <Text style={s.hours}>Qui–Dom · 19h00–22h30</Text>
        </View>

        <Text style={s.label}>A tua morada</Text>
        <TextInput style={s.input} placeholder="Ex: Rua de Serralves, 45, Matosinhos"
          placeholderTextColor="#666" value={morada} onChangeText={setMorada} />

        <TouchableOpacity
          style={[s.btn, (!isOpen || !morada) && s.btnDisabled]}
          disabled={!isOpen || !morada}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={s.btnText}>{isOpen ? 'Ver Menu 🍔' : 'Fechado — volte quinta-feira!'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  inner: { flex: 1, padding: 24, justifyContent: 'center' },
  badge: { borderRadius: 12, padding: 16, marginBottom: 32, alignItems: 'center' },
  badgeText: { fontSize: 18, fontWeight: 'bold' },
  hours: { color: '#666', fontSize: 12, marginTop: 4 },
  label: { color: '#f5f0e8', fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  input: { backgroundColor: '#1a1a1a', color: '#fff', borderRadius: 10, padding: 16, fontSize: 15, borderWidth: 1, borderColor: '#2a2a2a', marginBottom: 20 },
  btn: { backgroundColor: '#c8860a', borderRadius: 10, padding: 16, alignItems: 'center' },
  btnDisabled: { backgroundColor: '#333' },
  btnText: { color: '#0f0f0f', fontWeight: 'bold', fontSize: 16 },
});
