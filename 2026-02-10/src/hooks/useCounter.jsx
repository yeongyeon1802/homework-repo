import { useState } from "react";

export default function useCounter(initalValue = 0, options = {}) {
  const { min, max } = options;

  const [count, setCount] = useState(initalValue);

  //증가 함수(undefined 고려하여 작성)
  const increment = () => {
    setCount((prev) => {
      if (max !== undefined && prev >= max) return prev;
      return prev + 1;
    });
  };

  //감소 함수(undefined 고려하여 작성)
  const decrement = () => {
    setCount((prev) => {
      if (min !== undefined && prev <= min) return prev;
      return prev - 1;
    });
  };

  //초기화 함수
  const reset = () => setCount(initalValue);

  return { count, increment, decrement, reset };
}
