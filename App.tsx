import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet, Button, Text, Dimensions } from 'react-native';

import Container from './src/components/Container';
import CustomButton from './src/components/CustomButton';
import If from './src/components/if';
import CustomText from './src/components/CustomText';
import { Formik } from "formik";
import { validators } from './src/utils/validators';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';
import { Utils } from './src/utils/utils';

import { pComponentStyles, lComponentStyles, Typography } from './src/styles/Global'

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
        <CustomText style={[
          Typography.title,
          { letterSpacing: 5, marginBottom: hp('2%') }]}
        >
          Login</CustomText>

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
                    Utils.dynamicStyle(pComponentStyles().textInput, lComponentStyles().textInput, this.state.orientation)
                  }
                  placeholder={'Email'}
                  value={props.values.emailTextInput}
                  onBlur={() => props.setFieldTouched('emailTextInput')} />

                {/* Single responsiblity component */}
                <If show={props.dirty && props.touched.emailTextInput}>
                  <CustomText style={[Typography.errorText]}>
                    {props.errors.emailTextInput}
                  </CustomText>
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
                    Utils.dynamicStyle(pComponentStyles().textInput, lComponentStyles().textInput, this.state.orientation)

                  }
                  placeholder={'Password'}
                  value={props.values.passwordTextInput}
                  onBlur={() => props.setFieldTouched('passwordTextInput')} />

                <If show={props.dirty && props.touched.passwordTextInput}>
                  <CustomText style={[Typography.errorText]}>
                    {props.errors.passwordTextInput}
                  </CustomText>
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

  });
};


const landScapeStyles = () => {
  return StyleSheet.create({

  })
};