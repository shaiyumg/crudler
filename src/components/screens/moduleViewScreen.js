import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";


const ModuleViewScreen = ({navigation, route}) => {
  //Intialisations
  const {module} = route.params;
  //View
  return(
    <Screen>
      <ModuleView module = {module} />
    </Screen>
  );
};

export default ModuleViewScreen;