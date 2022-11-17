import { useEffect, useState, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableHighlight } from 'react-native';
import ModalView from './modal';
import { StatusBar } from 'expo-status-bar';
import { mainAppStyle } from './styles';
import Lottie from 'lottie-react-native';

export default function App() {

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [listItem, setListItem] = useState([])
  const [inputItem, setInputItem] = useState('')

  let mockArray = [...listItem];

  // Toggle Modal

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])

  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  // Handle Add Item
  const handleAddItem = () => {
    if (inputItem !== ''){
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
      {
        loading ?

          <Lottie 
            progress={animationProgress.current}
            source={require('./assets/loader.json')} 
            backgroundColor='#000'
            loop={true}
            autoPlay={true}
          />

          :
      
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
        }
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
