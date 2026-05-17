import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ETAPAS = [
  { id: 0, icon: '📋', label: 'Pedido recebido', desc: 'O teu pedido foi confirmado!' },
  { id: 1, icon: '👨‍🍳', label: 'A ser preparado', desc: 'O Caio está a fazer o teu burger!' },
  { id: 2, icon: '🛵', label: 'Saiu para entrega', desc: 'A caminho da tua morada!' },
  { id: 3, icon: '✅', label: 'Entregue!', desc: 'Bom apetite! 🍔' },
];

export default function AcompanhamentoScreen({ navigation }) {
  const [etapa, setEtapa] = useState(0);

  useEffect(() => {
    if (etapa < 3) {
      const t = setTimeout(() => setEtapa(e => e + 1), 4000);
      return () => clearTimeout(t);
    }
  }, [etapa]);

  return (
    <SafeAreaView style={s.container}>
      <View style={s.inner}>
        <Text style={s.titulo}>O teu pedido</Text>

        {ETAPAS.map((e, i) => (
          <View key={e.id} style={[s.etapa, i === etapa && s.etapaAtiva, i < etapa && s.etapaFeita]}>
            <Text style={s.icon}>{e.icon}</Text>
            <View style={s.info}>
              <Text style={[s.label, i === etapa && s.labelAtiva]}>{e.label}</Text>
              {i === etapa && <Text style={s.desc}>{e.desc}</Text>}
            </View>
            {i < etapa && <Text style={s.checkmark}>✓</Text>}
          </View>
        ))}

        {etapa === 3 && (
          <TouchableOpacity style={s.btn} onPress={() => navigation.navigate('Home')}>
            <Text style={s.btnText}>Fazer novo pedido</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  inner: { flex: 1, padding: 24, justifyContent: 'center' },
  titulo: { color: '#f5f0e8', fontSize: 24, fontWeight: 'bold', marginBottom: 32, textAlign: 'center' },
  etapa: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#2a2a2a', opacity: 0.4 },
  etapaAtiva: { borderColor: '#c8860a', opacity: 1 },
  etapaFeita: { opacity: 0.7 },
  icon: { fontSize: 28, marginRight: 14 },
  info: { flex: 1 },
  label: { color: '#888', fontSize: 15, fontWeight: 'bold' },
  labelAtiva: { color: '#f5f0e8' },
  desc: { color: '#c8860a', fontSize: 12, marginTop: 4 },
  checkmark: { color: '#27ae60', fontSize: 20, fontWeight: 'bold' },
  btn: { backgroundColor: '#c8860a', borderRadius: 10, padding: 18, alignItems: 'center', marginTop: 24 },
  btnText: { color: '#0f0f0f', fontWeight: 'bold', fontSize: 16 },
});
