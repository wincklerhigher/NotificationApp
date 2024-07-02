import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import PropTypes from 'prop-types';
import styles from "../Styles/TelaInicialStyles";

export default class TelaInicial extends Component {
  static propTypes = {
    Enviar: PropTypes.func.isRequired,
    Cancelar: PropTypes.func.isRequired,
  };

  render() {
    const { Enviar, Cancelar } = this.props;
    return (
      <View style={styles.container}>
        <Button
          mode="contained"
          style={[styles.button, styles.enviarButton]}
          labelStyle={styles.buttonText}
          onPress={Enviar}
          accessibilityLabel="Enviar notificação"
        >
          Enviar notificação
        </Button>

        <Button
          mode="contained"
          style={[styles.button, styles.cancelarButton]}
          labelStyle={styles.buttonText}
          onPress={Cancelar}
          accessibilityLabel="Cancelar notificações"
        >
          Cancelar notificações
        </Button>
      </View>
    );
  }
}