
import React from 'react';
import {SafeAreaView,View,StyleSheet, Text, TouchableOpacity,FlatList, Switch} from "react-native"
import {ListItem} from "react-native-elements"

const strs = {
  kittyPets: "Kitty will receive Pets",
  kittyWalks: "Kitty will be taken on Walks",
  kittyDayCare: "Kitty will be socialized at Day Care",
}

function App(){
  const [status,setStatus] = React.useState(false)
  const timeout = React.useRef()
  const [formValues,setForm] = React.useState({
    kittyPets: false,
    kittyWalks: false,
    kittyDayCare: false,
  })

  React.useEffect(function(){
    console.log("Status -- ", status)
    return function(){
      clearTimeout(timeout.current)
    }
  },[status])


  timeout.current = setTimeout(function(){
    setStatus(true)
  },3000)

  return (
    <SafeAreaView
          accessibilityLabel="Kitty Configuration">
    <View style={{height:500}}>
    {Object.keys(formValues).map(function(item){
      return (

        <View style={s.container}  key={item}>
          <Text  >{strs[item]}</Text>

          <Switch
            accessibilityHint={`Toggles ${strs[item]} to ${!formValues[item]}`}
            accessibilityLabel={strs[item]}
             trackColor={{ false: "#767577", true: "#81b0ff" }}
             thumbColor="#f5dd4b"
             ios_backgroundColor="#3e3e3e"
             onValueChange={function(value){
               let newForm = {
                 ...formValues
               }
               newForm[item] = value
               setForm(newForm)
             }}
             value={formValues[item]}
             />
        </View>
      )
    })}
    </View>



    </SafeAreaView>
    )
}
const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  }
})


export default App;
