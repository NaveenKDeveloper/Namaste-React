import React from 'react';
import ReactDOM from 'react-dom/client';

/* <div id="parent">
    <div id="child">
        <h1>

        </h1>
        <h2>

        </h2>
    </div>
</div> */

const nestedElement = React.createElement("div",{id:"parent"},
                        [React.createElement("div",{id:"child"},
                            [React.createElement("h1",{},"h1"),
                            React.createElement("h2",{},"h2")]),
                            React.createElement("div",{id:"child2"},
                            [React.createElement("h1",{},"h1"),
                            React.createElement("h2",{},"h2")])]);

//const heading = React.createElement("h1",{className:'heading'},"Hello, World!");
//console.log(heading) //it doesnt create html element, it created react element which is a javascript object which html browser understand
const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(heading);
root.render(nestedElement);