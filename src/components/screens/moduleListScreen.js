import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen.js';
import ModuleList from '../entity/modules/ModuleList.js';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
import initalModules from '../../data/modules.js';

 const ModuleListScreen = () => {
  ///Initialisations 
  const modules = initalModules;
  ///Handlers
  const handleSelect =(module) => alert(`Item ${module.ModuleCode} selected`);
=======
import initialModules from '../../data/modules.js';
const ModuleListScreen = ({navigation}) => {
  // Initializations
  // State
  const [modules, setModules] = useState(initialModules);

  // Handlers
  const handleSelect = (module) => navigation.navigate ('ModuleViewScreen',{ module });
  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };
>>>>>>> Stashed changes
=======
import initialModules from '../../data/modules.js';
const ModuleListScreen = ({navigation}) => {
  // Initializations
  // State
  const [modules, setModules] = useState(initialModules);

  // Handlers
  const handleSelect = () => navigation.navigate('ModuleViewScreen', {module});
  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };
>>>>>>> Stashed changes

  // View  
  return (
    <Screen>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <ModuleList modules={modules} onSelect={handleSelect}/>
=======
      <ModuleList modules={modules} onSelect={handleSelect} />
>>>>>>> Stashed changes
=======
      <ModuleList modules={modules} onSelect={handleSelect} />
>>>>>>> Stashed changes
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
