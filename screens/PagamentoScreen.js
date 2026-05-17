import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function PagamentoScreen({ navigation, route }) {
  const { total } = route.params;
  const [metodo, setMetodo] = useState(null);

  const metodos = [
    { id: 'mbway', label: '📱 MB Way' },
    { id: 'cartao', label: '💳 Cartão' },
    { id: 'dinheiro', label: '💵 Dinheiro na entrega' },
  ];

  return (
    <SafeAreaView style={s.container}>
      <View style={s.inner}>
        <Text style={s.title}>Como queres pagar?</Text>

        {metodos.map(m => (
          <TouchableOpacity key={m.id} style={[s.option, metodo === m.id && s.selected]} onPress={() => setMetodo(m.id)}>
            <Text style={s.optionText}>{m.label}</Text>
            {metodo === m.id && <Text style={s.check}>✓</Text>}
          </TouchableOpacity>
        ))}

        <View style={s.resumo}>
          <Text style={s.resumoLabel}>Total do pedido</Text>
          <Text style={s.resumoTotal}>{total.toFixed(2)}€</Text>
        </View>

        <TouchableOpacity
          style={[s.btn, !metodo && s.btnDisabled]}
          disabled={!metodo}
          onPress={() => navigation.navigate('Acompanhamento')}>
          <Text style={s.btnText}>Confirmar pedido</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  inner: { flex: 1, padding: 24 },
  title: { color: '#f5f0e8', fontSize: 22, fontWeight: 'bold', marginBottom: 24, marginTop: 8 },
  option: { backgroundColor: '#1a1a1a', borderRadius: 10, padding: 18, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#2a2a2a' },
  selected: { borderColor: '#c8860a' },
  optionText: { color: '#f5f0e8', fontSize: 16 },
  check: { color: '#c8860a', fontSize: 18, fontWeight: 'bold' },
  resumo: { backgroundColor: '#1a1a1a', borderRadius: 10, padding: 18, marginTop: 16, marginBottom: 24, flexDirection: 'row', justifyContent: 'space-between' },
  resumoLabel: { color: '#888', fontSize: 15 },
  resumoTotal: { color: '#c8860a', fontSize: 20, fontWeight: 'bold' },
  btn: { backgroundColor: '#c8860a', borderRadius: 10, padding: 18, alignItems: 'center' },
  btnDisabled: { backgroundColor: '#333' },
  btnText: { color: '#0f0f0f', fontWeight: 'bold', fontSize: 16 },
});
