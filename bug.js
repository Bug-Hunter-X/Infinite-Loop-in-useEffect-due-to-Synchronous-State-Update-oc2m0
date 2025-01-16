```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Trying to update the state based on the previous state synchronously
    setCount(count + 1); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```