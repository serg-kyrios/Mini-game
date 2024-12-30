import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
    return (
        <LinearGradient
            colors={['#640233', '#E09F12FF']}
            style={styles.rootScreen}
        >
            <StartGameScreen />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: '#E09F12FF',
    },
});
