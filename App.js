import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { mainAppStyle } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={mainAppStyle.container}>
        <Text style={mainAppStyle.HeaderText}>To-do List</Text>
        <TextInput 
          style={mainAppStyle.inputField}
          placeholder='Enter task'
          placeholderTextColor='grey'
        />
        <Button
          title='Create task'
        />
        <View style={mainAppStyle.mainItemWrap}>
          <Text style={mainAppStyle.notifier}>Tap on item to delete!</Text>
          <View style={mainAppStyle.itemWrap}>
            <Text style={mainAppStyle.itemFont}>Eat something spicy!</Text>
          </View>
          <View style={mainAppStyle.itemWrap}>
            <Text style={mainAppStyle.itemFont}>Create a publication tomorrow</Text>
          </View>
          <View style={mainAppStyle.itemWrap}>
            <Text style={mainAppStyle.itemFont}>Use Paystack SDK on FW</Text>
          </View>
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
