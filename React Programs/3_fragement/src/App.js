import "./App.css";
function App() {
  return (
    <>
      <h1>Fragement</h1>
      <h3>What is fragement?</h3>
      <p>
        a Fragment is a way to group multiple elements together without adding
        an extra node (like a div) to the DOM
      </p>
      <ul class="list-group">
        <li class="list-group-item">
          first method is to add React class from react and enclose all tags
          between React.Fragment tag.
        </li>
        <li class="list-group-item">
          second method is enclose all tags between &lt;&gt; &lt;/&gt;
        </li>
      </ul>
    </>
  );
}

export default App;
