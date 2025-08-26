import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,FlatList,StyleSheet,Alert,} from 'react-native';

export default function App() {
  const [cadastros, setCadastros] = useState([]);
  const [tela, setTela] = useState('cadastro');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSalvar = () => {
    if (!nome.trim() || !email.trim()) {
      Alert.alert('Atenção', 'Preencha nome e email!');
      return;
    }

    const novo = {
      id: Date.now().toString(),
      nome: nome.trim(),
      email: email.trim(),
    };

    setCadastros((prev) => [novo, ...prev]);
    setNome('');
    setEmail('');
    setTela('lista'); 
  };

  const TelaCadastro = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastro</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome"
        style={styles.input}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
        keyboardType="email-address"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#666' }]}
        onPress={() => setTela('lista')}
      >
        <Text style={styles.buttonText}>VER LISTA</Text>
      </TouchableOpacity>
    </View>
  );

  const TelaLista = () => (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Cadastros</Text>

      {cadastros.length === 0 ? (
        <Text style={{ marginTop: 20 }}>Nenhum cadastro ainda.</Text>
      ) : (
        <FlatList
          data={cadastros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>Nome: {item.nome}</Text>
              <Text style={styles.itemText}>Email: {item.email}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => setTela('cadastro')}
      >
        <Text style={styles.buttonText}>NOVO CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );

  return tela === 'cadastro' ? <TelaCadastro /> : <TelaLista />;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#f0f4f7',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 14,
  },
});
