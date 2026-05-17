import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import PagamentoScreen from './screens/PagamentoScreen';
import AcompanhamentoScreen from './screens/AcompanhamentoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#1a1a1a' },
        headerTintColor: '#c8860a',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'A minha morada' }} />
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu 🍔' }} />
        <Stack.Screen name="Pagamento" component={PagamentoScreen} options={{ title: 'Pagamento' }} />
        <Stack.Screen name="Acompanhamento" component={AcompanhamentoScreen} options={{ title: 'O teu pedido' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
