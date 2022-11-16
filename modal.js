import React from 'react';
import { Modal, TextInput, Button, View, Image } from 'react-native';
import { mainAppStyle, ModalStyle } from './styles';
import { StatusBar } from 'expo-status-bar';

const ModalView = ({visible, handleVisible, handleInput, handleAddItem, inputItem}) => {
    return(
        <>
            <StatusBar style='inverted' />
            <Modal visible={visible} animationType='slide'>
                <View style={ModalStyle.mainModal}>
                    <Image 
                        style={mainAppStyle.emptyImg}
                        source={require('./assets/to-do-list.png')}
                    />
                    <TextInput 
                        style={mainAppStyle.inputField}
                        placeholder='Enter task'
                        placeholderTextColor='grey'
                        value={inputItem}
                        onChangeText={handleInput}
                    />
                    <View style={mainAppStyle.flexed}>
                        <Button
                            title='Create task'
                            onPress={() => handleAddItem()}
                        />
                        <Button
                            title='Cancel'
                            color='#c82b38'
                            onPress={() => handleVisible()}
                        />
                    </View>

                </View>
            </Modal>
        </>
    )
}

export default ModalView;