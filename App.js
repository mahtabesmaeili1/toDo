import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's Tasks</Text>
      </View>
      <View style={styles.items}>
        {/* this is where the tasks will go */}
        <Task text={" Task 1"} />
        <Task text={" Task 2"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  tasksWrapper: {
    paddingTop: 88,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {},
});
