import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function ListaScreen({ navigation, cadastros }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Cadastros</Text>

      {cadastros.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Nenhum cadastro ainda.</Text>
      ) : (
        <FlatList
          data={cadastros}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>Nome: {item.nome}</Text>
              <Text>Email: {item.email}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.buttonText}>NOVO CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f4f7' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, alignSelf: 'center' },
  item: { backgroundColor: '#fff', padding: 10, borderRadius: 6, marginBottom: 10 },
  button: { backgroundColor: '#2196F3', padding: 14, borderRadius: 6, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
