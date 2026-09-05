import { useEffect, useState } from "react";
import TextStats from "./textstats";

function TextAnalyzer() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = `${text.length} Characters`;
  }, [text]);

  return (
    <div className="analyzer">
      <h2>Text Analyzer</h2>

      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <TextStats text={text} />
    </div>
  );
}

export default TextAnalyzer;