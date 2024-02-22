import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AppNav from "./src/routes/AppNav";

export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
