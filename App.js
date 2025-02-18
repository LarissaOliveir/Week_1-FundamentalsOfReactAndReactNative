import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import Tasks from "./components/Tasks";

export default function App() {
  const [user, setUser] = useState("Lari");
  const taskTitle = "Title task";
  const taskDescription = "Description... bla bla bla bla... bla bla bla...";
  const date = new Date();
  const colors = {
    taskPendente: "#f39c12",
    taskConcluida: "#27ae60",
    taskAtrasada: "#e74c3c",
    taskEmAndament: "#3498db",
    taskARevisar: "#9b59b6",
  };
  const [statusTask, setStatusTask] = useState(colors.taskPendente);
  const [openView, setOpenView] = useState(false);

  const tasks = [
    {
      id: "1",
      title: "TASK 1",
      description: "Description... bla bla bla bla... bla bla bla...",
      status: colors.taskPendente,
      date: date.toDateString(),
    },
    {
      id: "2",
      title: "TASK 2",
      description: "Description... bla bla bla bla... bla bla bla...",
      status: colors.taskEmAndament,
      date: date.toDateString(),
    },
    {
      id: "3",
      title: "TASK 3",
      description: "Description... bla bla bla bla... bla bla bla...",
      status: colors.taskARevisar,
      date: date.toDateString(),
    },
    {
      id: "4",
      title: "TASK 4",
      description: "Description... bla bla bla bla... bla bla bla...",
      status: colors.taskAtrasada,
      date: date.toDateString(),
    },
    {
      id: "5",
      title: "TASK 5",
      description: "Description... bla bla bla bla... bla bla bla...",
      status: colors.taskConcluida,
      date: date.toDateString(),
    },
  ];

  function addingTask() {
    // reeber os dados do formulario
    // e setar o valor do status de acordo com a cor da task
    // setStatusTask()
  }

  function removeTask() {}

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#f6efee",
          flexDirection: "row",
          height: 100,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", margin: 20 }}
        >
          <Ionicons name={"account-circle"} size={35} color={"black"} />
          <Text style={styles.name}>Olá, {user}</Text>
        </View>
      </View>

      <View style={{ marginTop: "10%", backgroundColor: "#f6efee" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "10%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tasks</Text>
          <IconButton icon={"plus"} size={25} />
        </View>

        <Tasks data={tasks} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#f6efee",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  name: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
