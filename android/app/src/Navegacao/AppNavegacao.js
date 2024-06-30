import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from '../Telas/TelaInicial';
import TelaDeNotificacoes from '../Telas/TelaDeNotificacoes';
import { agendarNotificacao } from '../Componentes/NotificationService';

const Stack = createStackNavigator();

const AppNavegacao = () => {
  React.useEffect(() => {
    agendarNotificacao();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaDeNotificacoes" component={TelaDeNotificacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavegacao;