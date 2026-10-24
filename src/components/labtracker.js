import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useStopwatch } from '../hooks/useStopwatch';
import PracticeTracker from './practicetracker';
import Stopwatch from './stopwatch';

export default function LabTracker() {
    // State definitions
    const [solved, setSolved] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Custom hook for stopwatch
    const { seconds } = useStopwatch(isRunning);

    // Event handlers (passed as function references)
    const handleSolve = () => setSolved(s => s + 1);
    const handleReset = () => setSolved(0);
    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lab Tracker</Text>

            {/* Stopwatch component */}
            <Stopwatch seconds={seconds} isRunning={isRunning} />

            {/* Control buttons */}
            <View style={styles.buttonRow}>
                <Button title="Start" onPress={handleStart} />
                <Button title="Stop" onPress={handleStop} color="orange" />
            </View>

            {/* Practice tracker component */}
            <PracticeTracker 
                solved={solved} 
                onSolve={handleSolve} 
                onReset={handleReset} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20 
    },
    title: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 20 
    },
    buttonRow: { 
        flexDirection: 'row', 
        gap: 10, 
        marginBottom: 20 
    }
});