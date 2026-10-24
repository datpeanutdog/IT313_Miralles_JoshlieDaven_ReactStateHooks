Lab Timer & Practice Tracker (React Native / Expo)

Project Structure
- App.js: entry point that renders LabScreen.
- LabScreen: owns the solved state (starts at 0) and the isRunning state (starts at false). It calls useStopwatch(isRunning) and passes values down as props.
- PracticeTracker: receives solved, onSolve, and onReset as props. Shows "Solved: {solved}", the "Solve +1" and "Reset" buttons, and "Great job!" once solved reaches 5.
- Stopwatch: receives seconds and isRunning as props. Shows the elapsed time (MM:SS) and "Running..." or "Paused".
- useStopwatch(isRunning): custom hook that keeps seconds in useState and uses useEffect with setInterval to add 1 every 1000ms while isRunning is true.

React Concepts Used
- useState: stores solved, isRunning, and seconds.
- Functional update: Solve +1 uses setSolved(s => s + 1) so the update is always based on the latest value.
- useEffect with cleanup: the interval is cleared when isRunning becomes false and when the component unmounts, so no timers keep running in the background.
- Custom hook: useStopwatch separates the timer logic from the screen.
- Conditional rendering: "Running..." / "Paused" in Stopwatch, and "Great job!" in PracticeTracker.
- Lifting state up: PracticeTracker and Stopwatch are siblings that stay in sync through their shared parent, LabScreen.
- Event handling: onPress handlers are passed as function references (onPress={handleSolve}), never called directly in the JSX.

Expected Behavior
- On load: "Solved: 0", "00:00", "Paused", and the Solve +1 / Reset / Start / Stop buttons are visible.
- Pressing Solve +1 five times shows "Great job!". Pressing Reset sets the counter back to 0 and does not affect the timer.
- Pressing Start begins counting every second and shows "Running...". Pressing Stop freezes the timer and shows "Paused".

How to Run in Expo Go
1. Install Node.js on your computer.
2. Install the Expo Go app on your phone (Android or iOS).
3. Open a terminal in the project folder and install dependencies: npm install
4. Start the app: npx expo start