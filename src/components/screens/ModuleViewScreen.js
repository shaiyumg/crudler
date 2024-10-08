import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
<<<<<<< Updated upstream
import ModuleView from "../entity/modules/ModuleView";


const ModuleViewScreen = ({navigation, route}) => {
  //Intialisations
  const {module} = route.params;
  //View
  return(
    <Screen>
      <ModuleView module = {module} />
=======
import ModuleView from "../enity/modules/ModuleView";
const ModuleViewScreen = ({ navigate, route }) => {
  // Initialisations ---------------------
  const { module } = route.params;
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------

  return (
    <Screen>
      <ModuleView module={module} />
>>>>>>> Stashed changes
    </Screen>
  );
};

<<<<<<< Updated upstream
=======
const styles = StyleSheet.create({});

>>>>>>> Stashed changes
export default ModuleViewScreen;