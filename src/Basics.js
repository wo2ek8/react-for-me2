// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  // useEffect(function () {
  //   console.log("hi :)");
  //   return function () {
  //     console.log("bye :(");
  //   };
  // }, []);
  return <h1>Hello</h1>;
}

function App() {
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);
  // console.log("i run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.");
  // };
  // useEffect(() => {
  //   console.log("I run only once.");
  // }, []);
  // useEffect(() => {
  //   // if (keyword !== "" && keyword.length > 5) {
  //   //   console.log("SEARCH FOR", keyword);
  //   // }
  //   console.log("I run when 'keyword' changes.");
  // }, [keyword]);
  // useEffect(() => {
  //   console.log("I run when 'counter' changes.");
  // }, [counter]);
  // useEffect(() => {
  //   console.log("I run when keyword & counter change");
  // }, [keyword, counter]);

  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} /> */}
      {/* <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button> */}

      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
