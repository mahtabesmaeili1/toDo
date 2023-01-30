import React, { useState } from "react";
import { TextInput, Button, View } from "react-native";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
        placeholder="Enter task title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button
        title="Add Task"
        onPress={() => {
          onAddTask(title);
          setTitle("");
        }}
      />
    </View>
  );
};

export default TaskForm;
