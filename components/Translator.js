import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Picker } from 'react-native';
import { speak } from 'expo-speech';

export const Translator = () =>
{
    const [ text, setText ] = useState( '' );

    const [ language, setLanguage ] = useState( 'en' );
    const [ rate, setRate ] = useState( .8 );

    const speakText = () =>
    {
        const options = {
            language: language,
            rate: rate,
        };
        console.log( language );
        speak( text, options );
    };

    return (
        <View>
            <Picker
                selectedValue={ language }
                onValueChange={ setLanguage }
            >
                <Picker.Item label="English" value="en-US" />
                <Picker.Item label="Español" value="es-ES" />
                <Picker.Item label="Français" value="fr" />
                <Picker.Item label="Pусский" value="ru" />
                <Picker.Item label="Português" value="pt" />
                <Picker.Item label="Deutsch" value="de" />
                <Picker.Item label="Italiano" value="it" />
            </Picker>
            <TextInput
                placeholder="Type text here"
                onChangeText={ setText }
                value={ text }
            />
            <Button title="Speak" onPress={ speakText } />
        </View>
    );
};
