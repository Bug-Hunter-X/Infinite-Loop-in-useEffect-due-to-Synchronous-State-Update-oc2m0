# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications where an infinite loop occurs within the useEffect hook due to an attempt to synchronously update state based on its previous value.

## Description
The `MyComponent` component uses the `useState` hook to manage a count.  Inside the `useEffect` hook, there's an attempt to increment the count. However, the incorrect logic causes the component to re-render infinitely because React will not rerender until the next cycle after useState is updated.