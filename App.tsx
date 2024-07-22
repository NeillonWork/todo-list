import { Home } from "@screens/Home";
import { ActivityIndicator, StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontLoaded ? <Home /> : <ActivityIndicator />}
    </>
  );
}
