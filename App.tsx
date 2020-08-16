import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet } from 'react-native';


interface State {
  textInputValue: string
}
interface Props {

}
export class App extends React.Component<Props, State>{
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: ''
    }
  }

  updateTextInputValue = (val) => {
    this.setState({
      textInputValue: val
    })

  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            onChangeText={this.updateTextInputValue}
            style={{ width: 300, borderWidth: 1, alignSelf: 'center' }}
            placeholder={'Email'}
            value={this.state.textInputValue} />
        </View>
      </SafeAreaView>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'stretch'
  }
})