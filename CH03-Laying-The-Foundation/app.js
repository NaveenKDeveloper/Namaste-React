import React from "react";
import ReactDOM from "react-dom/client";

//const headings = <h1>Using JSX</h1> // single line

//React Element
/* const headings = (<h1>
    Using JSX</h1>
    ) // multiple line mandatory to use ()
 */
//React Component

const title = "React Element";
const headingComponent = <h1>{title}</h1>;

const Container = () => (
  <div id="container">
    {headingComponent}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
