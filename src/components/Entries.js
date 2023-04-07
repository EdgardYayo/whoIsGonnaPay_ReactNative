import React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from 'expo-font';
import { MainLogo } from '../utils/tools';

import { Formik } from "formik";
import * as Yup from 'yup';
import { Input, Button, ListItem, Text } from 'react-native-elements'; 

const Entries = ({ addPlayer, players, removePlayer, nextStage }) => {

    const [loaded] = useFonts({
        "Pacifico-Regular": require('../../assets/fonts/Pacifico-Regular.ttf'),
      });

    const renderPlayers = () => (
        players?.map((item, idx) => (
            <ListItem
                key={idx}
                bottomDivider
                style={{ width: "100%" }}
                onLongPress={() => removePlayer(idx) }
            >
                <ListItem.Chevron/>
                <ListItem.Content>
                    <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ))
    )

    if(!loaded){
        return null
    }

  return (
    <>
    <Formik
        initialValues={{ player: ''}}
        validationSchema={Yup.object({
            player:Yup.string()
            .min(3, 'Must be more than 3 characters')
            .max(15, 'Must be more less than 15 characters')
            .required('Sorry, the name is required')
        })}
        onSubmit={(values, { resetForm }) => {
            addPlayer(values.player)
            resetForm()
        }}
    >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
            <>
                <MainLogo/>

                <Input
                    placeholder='Add names here'
                    leftIcon={{type: 'antdesign', name: 'adduser'}}
                    inputContainerStyle={{
                        marginHorizontal:50,
                        marginTop:50
                    }}

                    //Errors
                    renderErrorMessage={errors.player && touched.player}
                    errorMessage={errors.player}
                    errorStyle={{
                        marginHorizontal:50,
                        marginBottom: 20
                    }}

                    onChangeText={handleChange('player')}
                    onBlur={handleBlur('player')}
                    value={values.player}
                />

                <Button
                    buttonStyle={styles.button}
                    title="Add player"
                    onPress={handleSubmit}
                />
            </>
        )}
    </Formik>
    <View style={{ padding:20, width:"100%"}}>
        {
            players && players.length > 0 ? 
            <>
            <Text>List of players</Text>
            { renderPlayers()}
            <Button
                buttonStyle={styles.button}
                title="Get the looser"
                onPress={() => nextStage()}
            />
            </>
            : null
        }
    </View>

            </>
  );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#DB3EB1"
    }
})


export default Entries;