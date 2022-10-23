import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrencies } from "./../components/action";

const Currency = (props) => {
  const [value, setValue] = useState("");
  const { currencies } = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  console.log("currencies", currencies);

  const handleValue = (text) => {
    setValue(text);
  };

  useEffect(() => {
    dispatch(
      fetchCurrencies("https://webmaster-fake-api.herokuapp.com/currencies")
    );
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={Styles.itemWrapper}>
        <Text>{item.symbol + item.name}</Text>
        <Text>{item.rate}</Text>
        <Text>{(item.rate * value).toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View>
      <TextInput
        style={Styles.input}
        value={value}
        onChangeText={handleValue}
      />

      <FlatList
        data={currencies}
        keyExtractor={(item) => item.symbol}
        renderItem={renderItem}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 30,
    marginTop: 20,
  },
  itemWrapper: {
    flexDirection: "row",
    width: 320,
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    padding: 5,
    margin: 5,
  },
});

export default Currency;
