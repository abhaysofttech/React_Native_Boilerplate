import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Button } from 'react-native';

import Container from './src/components/Container'

interface State {
  emailTextInput: string,
  passwordTextInput: string
}
interface Props {

}
enum InputType {
  Email = 'Email',
  Password = 'Password'
}
export class App extends React.Component<Props, State>{
  constructor(props) {
    super(props);
    this.state = {
      emailTextInput: '',
      passwordTextInput: ''
    }
  }

  updateTextInput = (val, type) => {
    switch (type) {
      case InputType.Email: {
        this.setState({
          emailTextInput: val,
        })
        break;
      }
      case InputType.Password: {
        this.setState({
          passwordTextInput: val,
        })
        break;
      }
    }

  }

  handleLogin() {
    console.log('login')
  }
  render() {
    return (

      <Container containerStyles={{ alignItems: 'center', backgroundColor: '#ccc' }}>
        <TextInput
          onChangeText={(val) => this.updateTextInput(val, InputType.Email)}
          style={style.textInput}
          placeholder={'Email'}
          value={this.state.emailTextInput} />

        <TextInput
          onChangeText={(val) => this.updateTextInput(val, InputType.Password)}
          style={style.textInput}
          placeholder={'Password'}
          value={this.state.passwordTextInput} />

        <Button title={'Login'} onPress={this.handleLogin} />
      </Container>
    );
  }
}


const style = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    width: 300, borderWidth: 1
  }
})