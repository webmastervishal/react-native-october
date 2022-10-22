import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { styles } from "./../styles";

const Items = ({ item }) => {
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

export default Items;
