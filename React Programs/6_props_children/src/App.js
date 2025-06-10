/* props.children is a special prop (property) that lets a component display whatever you wrap inside it when you use it. 

example:If you create a component and put something between its opening <Component> and closing </Component> tags, that "something" becomes available to the component via props.children.*/

import Component from "./components/Component";

function App() {
  return (
    <center>
      <Component>
        <h1>Props Children</h1>
        <p>
          props.children is a special prop (property) that lets a component
          display whatever you wrap inside it when you use it.
        </p>
      </Component>
      <Component>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </Component>
    </center>
  );
}

export default App;
