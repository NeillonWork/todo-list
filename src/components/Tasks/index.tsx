import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Circle, CircleCheck, Trash2 } from "lucide-react-native";

type Props = {
  taskText: string;
  onRemove: () => void;
  taskCompleted: () => void;
  completed: boolean;
};

export function Tasks({ taskText, onRemove, taskCompleted, completed }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.card, completed && styles.completedCard]}>
        <TouchableOpacity style={styles.cardCircle} onPress={taskCompleted}>
          {completed ? (
            <CircleCheck color={"#5E60CE"} size={17.45} />
          ) : (
            <Circle color={"#4EA8DE"} size={17.45} />
          )}
        </TouchableOpacity>
        <Text style={[styles.cardText, completed && styles.completedText]}>
          {taskText}
        </Text>
        <TouchableOpacity style={styles.cardTrash} onPress={onRemove}>
          <Trash2 color={"#808080"} size={17.45} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
