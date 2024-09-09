import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Product } from "../../components/Product";

type ProductType = {
  name: string;
  quantity: number;
};

export function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [productName, setProductName] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<string>("");

  function handleProductAdd() {
    if (products.some(({ name }) => name === productName)) {
      return Alert.alert(
        "Produto já cadastrado!",
        "Já existe um produto na lista com este nome."
      );
    }
    if (productName.trim().length === 0) {
      return Alert.alert("Adicione um produto!");
    }

    const quantity = Number(productQuantity);

    if (productQuantity.trim().length === 0) {
      return Alert.alert("Adicione uma Quantidade válida!");
    }

    setProducts((prevState) => [
      ...prevState,
      { name: productName, quantity },
    ]);

    setProductName("");
    setProductQuantity("");
  }

  function handleProductRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setProducts((prevState) =>
            prevState.filter((product) => product.name !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Logo} />
        <Text style={styles.title}>Lista de Compras</Text>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={productName}
          onChangeText={setProductName}
          placeholder="Nome do produto"
        />
        <TextInput
          style={styles.inputQuantity}
          value={productQuantity}
          onChangeText={setProductQuantity}
          placeholder="Quantidade"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleProductAdd}>
          <AntDesign name="pluscircleo" size={18} color="#f2f2f2" />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Product
              name={item.name}
              quantity={item.quantity} 
              onRemove={() => handleProductRemove(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={products.length <= 0 && styles.list}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Text style={styles.boldText}>
                Você ainda não tem produtos na lista de compras
              </Text>
              <Text style={styles.subtitleText}>
                Adicione produtos e organize sua lista de compras
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
