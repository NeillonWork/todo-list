import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { CirclePlus, ClipboardList } from "lucide-react-native";

export function Home() {
  const [createTask, setCreateTask] = useState("");
  const [listTask, setListTask] = useState<string[]>([
    //   "trabalho",
    // "escola",
    //  "feira",
  ]);

  return (
    <View style={styles.container}>
      {/*Logo*/}
      <View style={styles.logoBox}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.containerVerticalSpace}>
        {/*Input*/}
        <View style={styles.form}>
          <TextInput
            placeholder="Adicioner uma nova tarefa"
            placeholderTextColor={"#808080"}
            style={styles.inputText}
          />
          <TouchableOpacity style={styles.button}>
            <Text>
              <CirclePlus color={"#F2F2F2"} size={20} />
            </Text>
          </TouchableOpacity>
        </View>
        {/*Contadores*/}
        <View style={styles.progress}>
          <Text style={styles.progressTextCreate}>Criadas </Text>
          <Text style={styles.count}>
            <Text style={styles.countText}>10</Text>
          </Text>

          <Text style={styles.progressTextCompleted}>Concluídas </Text>
          <Text style={styles.count}>
            <Text style={styles.countText}>25</Text>
          </Text>
        </View>

        {/*Lista*/}
        <FlatList
          data={listTask}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.EmptyText}>
              <Image
                source={require("../../../assets/list.png")}
                style={styles.listImage}
              />

              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyTextRegular}>
                Crie tarefas e organize seus itens a fazer{" "}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
