import PushNotification from 'react-native-push-notification';

class NotificationService {
    
    messages = [
        "Mensagem de cupom disponível",
        "Mensagem bem-humorada sobre a próxima refeição",
        "Mensagem de ofertas"
    ];
    
    messageIndex = 0;

    // Serviço de notificação
    configurar = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token)
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification)                
            }
        });
    }

    // Canal de notificação
    criarCanal = () => {
        PushNotification.createChannel(
            {
                channelId: "notificador",
                channelName: "Notificador do app",
                channelDescription: "Meu canal de notificações do aplicativo."
            },
            (created) => console.log(`createChannel returned '${created}'`)
        );
    }

    // Agendando notificações a cada 5 minutos
    agendarNotificacoes = () => {
        setInterval(() => {
            this.mostrarNotificacao();
        }, 5 * 60 * 1000); // 5 minutos
    }

    // Método para exibir notificações alternadas
    mostrarNotificacao = () => {
        const message = this.messages[this.messageIndex];
        this.messageIndex = (this.messageIndex + 1) % this.messages.length;

        PushNotification.localNotification({
            channelId: "notificador",
            title: "Título da Notificação",
            message: message,
            playSound: true,
        });
    }

    // Método para cancelar todas as notificações
    cancelarTodasNotificacoes = () => {
        PushNotification.cancelAllLocalNotifications();
    }

    setNavigation = (novoNavegador) => {
        navegador = novoNavegador
    }
}

export const Notification = new NotificationService();