import { StyleSheet, Text, View } from 'react-native';

export default function Stopwatch ({ seconds, isRunning}) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime}</Text>

            {isRunning ? (
                <Text style={styles.running}>Running</Text>
            ) : (
                <Text style={styles.paused}>Paused</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {marginverical: 15, alignItems: 'center'},
    time: {fontSize: 30, fontWeight: 'bold'},
    running: {color: 'green', fontSize: 18, marginVertical: 5, fontWeight: 'bold'},
    paused: {color: 'red', fontSize: 18, marginVertical: 5, fontWeight: 'bold'},
});
