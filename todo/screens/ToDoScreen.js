import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function ToDoScreen({ navigation }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks(prev => [...prev, { id: Date.now().toString(), text: task }]);
    setTask("");
  };

  const handleLogout = () => {
    navigation.replace("Login"); // volta para o login e limpa o histórico
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      {/* Botão de Sair */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f0f4f7" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  inputContainer: { flexDirection: "row", marginBottom: 20 },
  input: { flex: 1, backgroundColor: "#fff", padding: 12, borderRadius: 6, borderWidth: 1, borderColor: "#ccc" },
  addButton: { backgroundColor: "#2196F3", padding: 12, marginLeft: 8, borderRadius: 6, justifyContent: "center", alignItems: "center" },
  addText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  task: { backgroundColor: "#fff", padding: 12, marginBottom: 8, borderRadius: 6 },
  logoutButton: { backgroundColor: "#e53935", padding: 14, borderRadius: 6, alignItems: "center", marginTop: 20 },
  logoutText: { color: "#fff", fontWeight: "bold" },
});
