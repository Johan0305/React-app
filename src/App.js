import "./App.css";
import Content from "./content";
import Header from "./header";
import Total from "./total";

const App = () => {
  const course = "Half Stack application development";

  return (
    <div className="App">
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
