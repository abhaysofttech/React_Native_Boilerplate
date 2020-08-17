import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Button, Text, Dimensions } from 'react-native';

import Container from './src/components/Container';
import CustomButton from './src/components/CustomButton';
import If from './src/components/if';

import { Formik } from "formik";
import { validators } from './src/utils/validators';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';
import { Utils } from './src/utils/utils';


interface State {
  form: {
    emailTextInput: string,
    passwordTextInput: string,
  };
  orientation: string;
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
      form: {
        emailTextInput: '',
        passwordTextInput: ''
      },
      orientation: 'portrait'
    };
  }

  componentDidMount() {
    listenOrientationChange(this);
  }
  componentWillUnmount() {
    removeOrientationListener()
  }

  render() {
    const pStyles = portraitStyles();
    const lStyles = landScapeStyles();
    console.log(this.state)
    return (

      <Container containerStyles={{ alignItems: 'center', backgroundColor: '#ccc' }}>
        <Text style={{ fontSize: 30, marginBottom: 10, letterSpacing: 5 }}>Login</Text>

        <Formik
          initialValues={this.state.form}
          validateOnMount={true}
          validateOnChange={true}
          isInitialValid={false}
          onSubmit={() => (console.log('on submit'))}
          validationSchema={validators.loginValidator}
        >
          {(props) => {
            return (
              <View style={{ alignItems: 'center' }}>
                <TextInput
                  onSubmitEditing={() => this.passwordInputRef.focus()}
                  returnKeyType={'next'}
                  onChangeText={props.handleChange('emailTextInput')}
                  style={
                    Utils.dynamicStyle(pStyles.textInput, lStyles.textInput, this.state.orientation)
                  }
                  placeholder={'Email'}
                  value={props.values.emailTextInput}
                  onBlur={() => props.setFieldTouched('emailTextInput')} />
                
                {/* Single responsiblity component */}
                <If show={props.dirty && props.touched.emailTextInput}>
                  <Text style={{ color: 'red' }}>
                    {props.errors.emailTextInput}
                  </Text>
                </If>

                <TextInput
                  onSubmitEditing={() => {
                    if (props.isValid) {
                      console.log('is Valid')
                    } else {
                      console.log('form is Not Valid')
                    }
                  }}
                  ref={ref => this.passwordInputRef = ref}
                  returnKeyType={'done'}
                  onChangeText={props.handleChange('passwordTextInput')}
                  style={
                    Utils.dynamicStyle(pStyles.textInput, lStyles.textInput, this.state.orientation)

                  }
                  placeholder={'Password'}
                  value={props.values.passwordTextInput}
                  onBlur={() => props.setFieldTouched('passwordTextInput')} />

                <If show={props.dirty && props.touched.passwordTextInput}>
                  <Text style={{ color: 'red' }}>
                    {props.errors.passwordTextInput}
                  </Text>
                </If>
                <CustomButton
                  disabled={!props.isValid}
                  title="Login"
                  onPress={() => {
                    if (props.isValid) {
                      console.log('is Valid')
                      return props.handleSubmit();
                    } else {
                      console.log('form is Not Valid', props.errors)
                    }
                  }} />
              </View>
            )
          }}
        </Formik>
      </Container>
    );
  }
}


const portraitStyles = () => {
  return StyleSheet.create({
    textInput: {
      marginBottom: 10,
      width: wp('70%'),
      borderWidth: 1
    }
  });
};


const landScapeStyles = () => {
  return StyleSheet.create({
    textInput: {
      ...portraitStyles().textInput,
      width: wp('60%'),
      borderColor: 'red'
    }
  })
};