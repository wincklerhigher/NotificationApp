import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
        <TouchableOpacity 
          style={styles.button} 
          onPress={Enviar}
          accessible={true}
          accessibilityLabel="Enviar notificação"
        >
          <Text style={styles.buttonText}>Enviar notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={Cancelar}
          accessible={true}
          accessibilityLabel="Cancelar notificações"
        >
          <Text style={styles.buttonText}>Cancelar notificações</Text>
        </TouchableOpacity>
      </View>
    );
  }
}