import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');

        console.log('Resetting...');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                //show alert
                'Please enter a number between 1 and 99.',
                'Please enter a valid number!',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    },
                ]
            );
            return;
        }
        console.log('Valid number!');
        onPickNumber(chosenNumber);
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>
                        Reset
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
}
export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#4E0B2CFF',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 10, //android
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black', //ios
        shadowOffset: { width: 0, height: 2 }, //ios
        shadowRadius: 6, //ios
        shadowOpacity: 0.25, //ios
    },
    numberInput: {
        height: 65,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
//ios
