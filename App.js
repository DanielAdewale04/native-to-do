import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { mainAppStyle } from './styles';

export default function App() {

  const [listItem, setListItem] = useState([])
  const [inputItem, setInputItem] = useState('')

  const mockArray = [...listItem];

  // Handle Add Item
  const handleAddItem = () => {
    if (inputItem !== ''){
      mockArray.push(inputItem);
      setListItem(mockArray)
      setInputItem('')
    }
  }

  // Handle Set input
  const handleInput = (userInput) => {
    setInputItem(userInput)
  }

  // Handle Delete
  const handleDelete = (index) => {
    listItem.splice(index, 1)
    setListItem([...listItem])
  }
  
  return (
    <View style={styles.container}>
      <View style={mainAppStyle.container}>
        <Text style={mainAppStyle.HeaderText}>To-do List</Text>
        <TextInput 
          style={mainAppStyle.inputField}
          placeholder='Enter task'
          placeholderTextColor='grey'
          value={inputItem}
          onChangeText={handleInput}
        />
        <Button
          title='Create task'
          onPress={() => handleAddItem()}
        />
        <View style={mainAppStyle.mainItemWrap}>
          <Text style={mainAppStyle.notifier}>Tap on item to delete!</Text>
          {
            listItem && listItem.length > 0 ?
              listItem.map((item, index) => (
                <View 
                  style={mainAppStyle.itemWrap}
                  key={index}
                  onPress={() => handleDelete(index)}
                >
                  <Text style={mainAppStyle.itemFont}>{item}</Text>
                </View>
              ))

              : 
              
              <View style={mainAppStyle.itemWrap}>
                <Text style={mainAppStyle.noItemMsg}>Nothing to show yet!</Text>
              </View>
          }
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    color: 'silver'
  },
});
