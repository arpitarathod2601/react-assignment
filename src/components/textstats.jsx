function TextStats({ text }) {
  const characterCount = text.length;

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  return (
    <div className="stats">
      <p>Number of Characters: {characterCount}</p>
      <p>Number of Words: {wordCount}</p>
    </div>
  );
}

export default TextStats;