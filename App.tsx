import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Button, Text } from 'react-native';

import Container from './src/components/Container';
import CustomButton from './src/components/CustomButton';
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
  private passwordInputRef;
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
        <Text style={{ fontSize: 30, marginBottom: 10, letterSpacing: 5 }}>Login</Text>
        <TextInput
          onSubmitEditing={() => this.passwordInputRef.focus()}
          returnKeyType={'next'}
          onChangeText={(val) => this.updateTextInput(val, InputType.Email)}
          style={style.textInput}
          placeholder={'Email'}
          value={this.state.emailTextInput} />

        <TextInput
        onSubmitEditing={this.handleLogin}
          ref={ref => this.passwordInputRef = ref}
          returnKeyType={'done'}
          onChangeText={(val) => this.updateTextInput(val, InputType.Password)}
          style={style.textInput}
          placeholder={'Password'}
          value={this.state.passwordTextInput} />

        <CustomButton onPress={this.handleLogin} title="Login" />

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