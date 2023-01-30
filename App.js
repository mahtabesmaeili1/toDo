import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import { View, Text } from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    setTasks([...tasks, { title, id: Math.random().toString() }]);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TaskForm onAddTask={addTask} />
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.title}</Text>
        </View>
      ))}
    </View>
  );
}
