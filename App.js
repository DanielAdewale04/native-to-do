import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableHighlight } from 'react-native';
import ModalView from './modal';
import { StatusBar } from 'expo-status-bar';
import { mainAppStyle } from './styles';

export default function App() {

  const [openModal, setOpenModal] = useState(false);
  const [listItem, setListItem] = useState([])
  const [inputItem, setInputItem] = useState('')

  let mockArray = [...listItem];

  // Toggle Modal

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  // Handle Add Item
  const handleAddItem = () => {
    if (inputItem !== ''){
      console.log('it is working')
      mockArray.push(inputItem);
      setListItem(mockArray)
      setInputItem('')
      setOpenModal(false)
    }
  }

  // Handle Set input
  const handleInput = (userInput) => {
    setInputItem(userInput)
  }

  // Handle Delete
  const handleDelete = (itemIndex) => {
    mockArray = []
    for (let i = 0; i < listItem.length; i++){
      if (i !== itemIndex){
        mockArray.push(listItem[i])
      }
    }
    setListItem(mockArray)
  }
  
  return (
    <>
      <StatusBar style='inverted' />
      <View style={styles.container}>
        <View style={mainAppStyle.container}>
          <View style={mainAppStyle.flexApart}>
            <Text style={mainAppStyle.HeaderText}>To-do List</Text>
            <Text 
              style={mainAppStyle.noItemMsg}
              onPress={() => toggleModal()}
            >Add</Text>
          </View>

          {/* Modal Section */}

            <ModalView 
              visible={openModal}
              handleVisible={toggleModal}
              inputItem={inputItem}
              handleAddItem={handleAddItem}
              handleInput={handleInput}
            />

          {/* End of Modal section */}
          
          <View style={mainAppStyle.mainItemWrap}>
            <Text style={mainAppStyle.notifier}>Tap on item to delete!</Text>
            {
              listItem && listItem.length > 0 ?
                listItem.map((item, index) => (
                  <TouchableHighlight key={index} onPress={() => handleDelete(index)}>
                    <View 
                      style={mainAppStyle.itemWrap}
                    >
                      <Text style={mainAppStyle.itemFont}>{item}</Text>
                    </View>
                  </TouchableHighlight>
                ))

                : 
                
                <View style={mainAppStyle.imageWrap}>
                  <Image 
                    style={mainAppStyle.emptyImg}
                    source={require('./assets/box.png')}
                  />
                  <Text style={mainAppStyle.noItemMsg}>Nothing to show yet!</Text>
                </View>
            }
            
          </View>
        </View>
      </View>
    </>
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
