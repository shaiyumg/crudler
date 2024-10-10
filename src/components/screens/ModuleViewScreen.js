import {StyleSheet} from 'react-native';
import Screen from '../layout/Screen.js';
import ModuleView from '../entity/modules/ModuleView.js';

const ModuleViewScreen= ({navigation, route}) => {
  // Initializations
  const {module, onDelete} = route.params;
   ///View
   return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete}/>
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default ModuleViewScreen;