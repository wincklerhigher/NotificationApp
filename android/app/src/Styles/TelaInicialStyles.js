import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 30,
    paddingVertical: 14,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  enviarButton: {
    backgroundColor: '#FF6347',
  },
  cancelarButton: {
    backgroundColor: '#4682B4',
  },
});