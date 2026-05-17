import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const MENU = [
  { id: 1, cat: '🍔 Hambúrgueres', name: 'O Clássico', desc: 'Blend 180g, cheddar, alface, tomate, molho especial', price: 11 },
  { id: 2, cat: '🍔 Hambúrgueres', name: 'O Bacon Lover', desc: 'Blend 180g, bacon crocante, cheddar duplo, cebola caramelizada', price: 13 },
  { id: 3, cat: '🍔 Hambúrgueres', name: 'O Picante', desc: 'Blend 180g, jalapeños, molho sriracha, pepper jack', price: 12 },
  { id: 4, cat: '🍔 Hambúrgueres', name: 'O Veggie', desc: 'Burger de grão, queijo, alface, tomate, molho de iogurte', price: 11 },
  { id: 5, cat: '🍟 Acompanhamentos', name: 'Batata Frita', desc: 'Frita na hora, com flor de sal', price: 3.5 },
  { id: 6, cat: '🍟 Acompanhamentos', name: 'Batata Doce Frita', desc: 'Com molho de mel e mostarda', price: 4 },
  { id: 7, cat: '🥤 Bebidas', name: 'Coca-Cola', desc: 'Lata 330ml', price: 2 },
  { id: 8, cat: '🥤 Bebidas', name: 'Água', desc: 'Garrafa 50cl', price: 1 },
  { id: 9, cat: '🥤 Bebidas', name: 'Sumo Natural', desc: 'Laranja ou maçã', price: 3 },
];

export default function MenuScreen({ navigation }) {
  const [cart, setCart] = useState({});
  const categories = [...new Set(MENU.map(i => i.cat))];
  const total = Object.entries(cart).reduce((sum, [id, qty]) => sum + MENU.find(i => i.id == id).price * qty, 0);
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const add = (id) => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const remove = (id) => setCart(c => { const n = { ...c }; if (n[id] > 1) n[id]--; else delete n[id]; return n; });

  return (
    <SafeAreaView style={s.container}>
      <ScrollView style={s.scroll}>
        {categories.map(cat => (
          <View key={cat}>
            <Text style={s.catTitle}>{cat}</Text>
            {MENU.filter(i => i.cat === cat).map(item => (
              <View key={item.id} style={s.card}>
                <View style={s.info}>
                  <Text style={s.name}>{item.name}</Text>
                  <Text style={s.desc}>{item.desc}</Text>
                  <Text style={s.price}>{item.price.toFixed(2)}€</Text>
                </View>
                <View style={s.controls}>
                  {cart[item.id] ? (
                    <>
                      <TouchableOpacity style={s.btn} onPress={() => remove(item.id)}>
                        <Text style={s.btnT}>−</Text>
                      </TouchableOpacity>
                      <Text style={s.qty}>{cart[item.id]}</Text>
                    </>
                  ) : null}
                  <TouchableOpacity style={[s.btn, s.btnAdd]} onPress={() => add(item.id)}>
                    <Text style={s.btnT}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>

      {totalItems > 0 && (
        <TouchableOpacity style={s.cartBtn} onPress={() => navigation.navigate('Pagamento', { total })}>
          <Text style={s.cartBtnText}>Ver pedido · {totalItems} {totalItems === 1 ? 'item' : 'itens'} · {total.toFixed(2)}€</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  scroll: { flex: 1, padding: 16 },
  catTitle: { color: '#c8860a', fontSize: 14, fontWeight: 'bold', letterSpacing: 2, textTransform: 'uppercase', marginTop: 20, marginBottom: 10 },
  card: { backgroundColor: '#1a1a1a', borderRadius: 10, padding: 14, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  info: { flex: 1 },
  name: { color: '#f5f0e8', fontSize: 15, fontWeight: 'bold' },
  desc: { color: '#666', fontSize: 12, marginTop: 2 },
  price: { color: '#c8860a', fontSize: 14, fontWeight: 'bold', marginTop: 6 },
  controls: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  btn: { backgroundColor: '#2a2a2a', borderRadius: 8, width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  btnAdd: { backgroundColor: '#c8860a' },
  btnT: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  qty: { color: '#fff', fontSize: 16, fontWeight: 'bold', minWidth: 20, textAlign: 'center' },
  cartBtn: { position: 'absolute', bottom: 24, left: 16, right: 16, backgroundColor: '#c8860a', borderRadius: 12, padding: 18, alignItems: 'center' },
  cartBtnText: { color: '#0f0f0f', fontWeight: 'bold', fontSize: 16 },
});
