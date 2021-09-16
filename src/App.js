import React, { useState } from "react";
import data from "./data";
import List from "./List";

/*
function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => console.log("you clicked me")}>all clear</button>
      </section>
    </main>
  );
}

export default App;
*/

/*
const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>all clear</button>
        </section>
      </main>
    </>
  );
};

export default App;
*/

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>0 birthdays</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>all clear</button>
        </section>
      </main>
    </>
  );
};

export default App;
