import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/TelaDeNotificacoesStyles';

const TelaDeNotificacoes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela destino da notificação</Text>
    </View>
  );
};

export default TelaDeNotificacoes;