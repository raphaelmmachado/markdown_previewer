import { ChangeEvent, useState } from "react";
import { marked } from "marked";
function App() {
  const [markdown, setMarkdown] = useState("");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(event.target.value);
  }
  return (
    <main id="app">
      {" "}
      <div className="input">
        <header>Editor</header>
        <textarea value={markdown} onChange={handleChange} />
      </div>
      <div className="output">
        <header>Previewer</header>
        <div
          id="previewer"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </main>
  );
}

export default App;
