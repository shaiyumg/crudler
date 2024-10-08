import { StyleSheet, Text, View } from "react-native";
import FullWidthImage from "react-native-fullwidth-image";
<<<<<<< Updated upstream

const ModuleView = ({ module }) => {
    return(
        <View style = {styles.container}>
        <FullWidthImage source={{uri: module.ModuleImage}} style={styles.image}/>
        
        <View style = {styles.infoTray}> 
            <Text style = {styles.boltText}>
            {module.ModuleCode} {module.ModuleName}
            </Text>
            <Text style = {styles.text}> Level {module.ModuleLevel} </Text>
            <Text style = {styles.text}>
            {module.ModuleLeaderName} <Text style={styles.dimText}>(Module Leader)</Text>
            </Text>
        </View>
    </View>
    );
};

const styles= StyleSheet.create({
    container: {
        gap: 15,
      },
      image: {
        borderRadius: 3.
      },
      infoTray: {
        gap: 5,
      },
      text: {
        fontSize: 16,
      },
      boltText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      dimText:{
        color: 'grey'
      },
    });
    
    export default ModuleView;
=======
const ModuleView = ({ module }) => {
  // Initialisations ---------------------
  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: module.ModuleImage }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.moduleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}> Level {module.Modulelevel} </Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName}
          <Text style={styles.dimText}>(Module Leader)</Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  image: {
    borderRadius: 3,
  },
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  boldText: {
    fontiSize: 16,
    fontWight: "bold",
  },
  dimText: {
    color: "grey",
  },
});

export default ModuleView;
>>>>>>> Stashed changes
