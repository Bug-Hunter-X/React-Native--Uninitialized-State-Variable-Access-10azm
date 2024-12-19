```javascript
// Correct
function MyComponent() {
  const [count, setCount] = useState(0); // Initial value provided

  return (
    <View>
      <Text>{count}</Text> 
    </View>
  );
}
```

```javascript
// Correct with conditional rendering
function MyComponent() {
  const [count, setCount] = useState(null);
  
  if (count === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{count}</Text> 
    </View>
  );
}
```