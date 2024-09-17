import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {


const [amount, setAmount] = useState(0);
const [from, setFrom] = useState("");
const [to, setTo] = useState("EUR");
const [output, setOutput] = useState(0);
const [loading, setLoading] = useState(false);

const handleFetch = () => {
  setLoading(true);
  fetchRepositories(rates)
    .then(data => {
      if (data && data.meals) {
        setOutput(data.meals);
      } else {
        console.error("Unexpected API response:", data);
        setOutput([]);
      }
    })
    .catch(err => {
      console.error("Error fetching data:", err);
      setOutput([]);
    })
    .finally(() => {
      setRates("");
      setLoading(false);
    });
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
