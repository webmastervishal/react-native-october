import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { styles } from "../../styles";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log("props", props);

  // [{
  //   id: 1,
  //   todo: "learn js"
  // },{
  //   id: 2,
  //   todo: "learn node js"
  // }]

  handleTodos = () => {
    setTodos([...todos, { id: todos.length + 1, todo }]);
    setTodo("");
  };

  handleDeleteTodo = (id) => {
    console.log("id to be deleted", id);
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const renderItems = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.todo}</Text>
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };

  const handleNav = () => {
    navigation.navigate("Currency", { name: "vishal shetty" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo Application</Text>

      <View style={styles.todoWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <Button onPress={handleTodos} title="Add Todo" />
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={todos}
          renderItem={renderItems}
          keyExtractor={(todo) => todo.id}
        />
      </View>

      <Button title="Go to currency screen" onPress={handleNav} />
      <StatusBar style="auto" />
    </View>
  );
}

{
  /* <input type="text" onChange={(e) => setTodo(e.target.value)} />; */
}
