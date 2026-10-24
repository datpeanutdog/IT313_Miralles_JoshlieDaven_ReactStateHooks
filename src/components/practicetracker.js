import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Solved: {solved}</Text>
            {solved >= 5 && <Text style={styles.success}>Great job!</Text>}
            <View style={styles.buttonRow}>
                <Button title="Solve +1" onPress={onSolve} />
                <Button title="Reset" onPress={onReset} color="red" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    success: {
        color: 'green',
        fontSize: 18,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    },
});