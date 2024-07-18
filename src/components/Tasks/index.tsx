import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Circle, CircleCheck, Trash2 } from "lucide-react-native";

type Props = {
  taskText: string;
  onRemove: () => void;
};

export function Tasks({ taskText, onRemove }: Props) {
  return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.cardCircle}>
          <Circle color={"#4EA8DE"} size={17.45} />
        </TouchableOpacity>
        <Text style={styles.cardText}>{taskText}</Text>
        <TouchableOpacity style={styles.cardTrash} onPress={onRemove}>
          <Trash2 color={"#808080"} size={17.45} />
        </TouchableOpacity>
      </View>
  );
}
