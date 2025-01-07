import { Text, StyleSheet } from 'react-native';
//import

function Title({ children }) {
    console.log('Children in Title:', children);
    return <Text style={styles.title}>{children}</Text>;
}
// function Title({ children }) {
//     if (typeof children !== 'string' && typeof children !== 'number') {
//         console.error(
//             'Invalid children passed to Title. Expected string or number.'
//         );
//     } else {
//         console.log('Children in Title:', children);
//     }
//     return null;
//     // return <Text style={styles.title}>{children}</Text>;
// }

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 44,
        //fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
    },
});
