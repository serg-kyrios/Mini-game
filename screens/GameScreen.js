import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumgerContainer';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(1, 100, 1);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.screen}>
            <Title>Opponent`s Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Opponent's Guess</Text>
            </View>
        </View>
    );
}
// function GameScreen() {
//     return (
//         <View style={styles.screen}>
//             <Title>Game Screen</Title>;
//         </View>
//     );
// }
export default GameScreen;

const styles = StyleSheet.create({
    screen: { flex: 1, padding: 24, alignItems: 'center' },
});
