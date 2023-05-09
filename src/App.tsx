import { ChangeEvent, useState } from "react";
import { marked } from "marked";
function App() {
  const [markdown, setMarkdown] = useState(
    "# Markdown Previewer \n\n## FreeCodeCamp challenge\n `<div>html<div>` \n ```const add = (a = 1,b = 1)=> a + b``` \n ***bold*** _itallic_ **_both_  \n [freecodecamp](https://www.freecodecamp.org) ~~crossing stuff out~~  \n > Block Quotes! Wild Header | Crazy Header | Another Header? \n - And of course there are lists.\n - Some are bulleted. \n  - With different indentation levels.  - That look like this. \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
  );

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(event.target.value);
  }
  return (
    <main id="app">
      {" "}
      <div className="input">
        <header>Editor</header>
        <textarea id="editor" value={markdown} onChange={handleChange} />
      </div>
      <div className="output">
        <header>Previewer</header>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </main>
  );
}

export default App;
