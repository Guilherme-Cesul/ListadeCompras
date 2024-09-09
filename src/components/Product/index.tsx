import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  name: string;
  quantity: number;
  onRemove: () => void;
};

export function Product({ name, quantity, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
      {name}  
      </Text>
      < Text style={styles.quantity}>
      Quantidade: {quantity}

      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color="#F2F2F2"
        />
      </TouchableOpacity>
    </View>
  );
}

