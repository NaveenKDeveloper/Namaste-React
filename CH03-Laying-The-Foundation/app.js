import React from 'react';
import ReactDOM from 'react-dom/client';

//const headings = <h1>Using JSX</h1> // single line

//React Element
/* const headings = (<h1>
    Using JSX</h1>
    ) // multiple line mandatory to use ()
 */
//React Component


 const HeadingComponent = () => (
    <h1>Component</h1>
 )

 const ParagraphComponent = () => (
    <div id="container">
        <HeadingComponent />
       <p>Functional Components</p>
    </div>
    )
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ParagraphComponent/>)