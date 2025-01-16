```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Using a functional update to update state asynchronously
    setCount(prevCount => prevCount + 1); 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```