import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo1 from "./exercises/FetchDemo";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          {/**Add the exercise components you create for each exercise
           * using the key you used for the matching button  */}
          <div className="exercise-style">
            {selectedView == "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            {selectedView == "props1" ? (
              <PropsDemo title="Exercise 1"></PropsDemo>
            ) : null}
            {selectedView == "list1" ? (
              <ListDemo title="Exercise 2"></ListDemo>
            ) : null}
            {selectedView == "button1" ? (
              <EventDemo1 title="Exercise 3"></EventDemo1>
            ) : null}
            {selectedView == "forms1" ? (
              <FormUncontrolled title="Exercise 4"></FormUncontrolled>
            ) : null}
            {selectedView == "state1" ? (
              <StateDemo1 title="Exercise 5a"></StateDemo1>
            ) : null}
            {selectedView == "state2" ? (
              <StateDemo2 title="Exercise 5b"></StateDemo2>
            ) : null}
            {selectedView == "state3" ? (
              <StateDemo3 title="Exercise 5c"></StateDemo3>
            ) : null}
            {selectedView == "useEffect1" ? (
              <UseEffectDemo title="Exercise 6"></UseEffectDemo>
            ) : null}
            {selectedView == "fetch1" ? (
              <FetchDemo1 title="Exercise 7"></FetchDemo1>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list1")}>
        List demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("button1")}>
        Button demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("forms1")}>
        Forms demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useEffect1")}>
        useEffect demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch1")}>
        Fetch demo1
      </button>
    </>
  );
};
