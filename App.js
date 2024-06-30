// Componentes base
import React, {Component} from "react"

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Importação de telas e serviços
import TelaDestino from "./android/app/src/Telas/TelaDestino";
import TelaInicial from "./android/app/src/Telas/TelaInicial";
import { Notification } from "./android/app/src/Componentes/NotificationService";

// Declaração de constantes
const notificador = Notification;
const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacoes()
  }

  onPressEnviarNotificacao = () => {
    notificador.mostrarNotificacao(
      1, 
      "Lar, doce lar! 🏠", 
      "👉 Essa é a minha primeira notificação sendo disparada.", 
      {}, 
      {}
    ),
    notificador.mostrarNotificacao(
      2,
      "Olá, mundo! 👋",
      "Essa é a minha segunda mensagem.",
      {},
      {}
    )
  }

  onPressCancelarNotificacoes = () => {
    notificador.cancelarTodasNotificacoes()
  }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {
              ({navigation}) => {
                notificador.setNavigation(navigation)
                return(
                  <TelaInicial
                    Enviar={this.onPressEnviarNotificacao}
                    Cancelar={this.onPressCancelarNotificacoes}
                  />
                )
              }
            }
          </Stack.Screen>
          <Stack.Screen name="Tela de redirecionamento" component={TelaDestino} />
          <Stack.Screen name="Olá, mundo! 👋" component={TelaInicial} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}