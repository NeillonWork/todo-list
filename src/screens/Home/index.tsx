import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { CirclePlus } from "lucide-react-native";
import { Tasks } from "../../components/Tasks";

export function Home() {
  const [listTask, setListTask] = useState<string[]>([]);
  const [createTask, setCreateTask] = useState("");
  const [taskCompleted, setTTaskCompleted] = useState<{
    [key: string]: boolean;
  }>({});

  //CALCULA CONCLUIDAS
  const countCompletedTasks = Object.keys(taskCompleted).length;

  //ADICIONAR
  function handleTaskAdd() {
    if (createTask === "" || listTask.includes(createTask)) {
      Alert.alert(
        "Atenção",
        "Campo vazio ou tarefa repetida. Preencha o campo com uma tarefa valida!"
      );
      return;
    }
    setListTask((oldListTask) => [...oldListTask, createTask]);

    setCreateTask("");
  }
  //REMOVER
  function handleTaskRemove(task: string) {
    // filtra minha listTask e retorna todos os createTask menos o task
    // return console.log(listTask.filter(createTask => createTask !== task))
    Alert.alert(
      "Excluir tarefa",
      `Deseja realmente deletar esta tarefa? ${task}`,
      [
        {
          text: "Sim",
          onPress: () =>
            setListTask((oldListTask) =>
              oldListTask.filter((createTask) => createTask !== task)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }
  //CONCLUIR
  function handletaskCompleted(taskComplet: string) {
    const updateTaskCompleted = { ...taskCompleted, [taskComplet]: true };

    setTTaskCompleted(updateTaskCompleted);
  }

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
            placeholder="Adicionar uma nova tarefa"
            placeholderTextColor={"#808080"}
            style={styles.inputText}
            value={createTask}
            onChangeText={setCreateTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <CirclePlus color={"#F2F2F2"} size={20} />
          </TouchableOpacity>
        </View>
        {/*Contadores*/}
        <View style={styles.progress}>
          <Text style={styles.progressTextCreate}>Criadas </Text>
          <Text style={styles.count}>
            <Text style={styles.countText}>{listTask.length}</Text>
          </Text>

          <Text style={styles.progressTextCompleted}>Concluídas </Text>
          <Text style={styles.count}>
            <Text style={styles.countText}>{countCompletedTasks}</Text>
          </Text>
        </View>

        {/*Lista */}
        <FlatList
          data={listTask}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Tasks
              key={item}
              taskText={item}
              onRemove={() => handleTaskRemove(item)}
              taskCompleted={() => handletaskCompleted(item)}
              completed={taskCompleted[item] || false}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
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
