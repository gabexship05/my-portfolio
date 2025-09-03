import React from "react";

export default function Typewriter({
  words = [],
  typingSpeed = 70,     // ms per character when typing
  deletingSpeed = 40,   // ms per character when deleting
  pauseTime = 900,      // ms to pause when a word is complete
  className = "",
  loop = true,
}) {
  const [i, setI] = React.useState(0);       // which word
  const [text, setText] = React.useState(""); // current substring
  const [del, setDel] = React.useState(false);

  const longest = React.useMemo(
    () => (words.length ? Math.max(...words.map(w => w.length)) : 0),
    [words]
  );

  React.useEffect(() => {
    if (!words.length) return;

    const current = words[i % words.length];
    let t;

    if (!del) {
      // typing
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        // word finished → pause then start deleting
        t = setTimeout(() => setDel(true), pauseTime);
      }
    } else {
      // deleting
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      } else {
        // next word
        setDel(false);
        if (i + 1 < words.length || loop) setI((i + 1) % words.length);
      }
    }

    return () => clearTimeout(t);
  }, [text, del, i, words, typingSpeed, deletingSpeed, pauseTime, loop]);

  return (
    <span
      className={`whitespace-nowrap ${className}`}
      aria-live="polite"
      style={{ minWidth: longest ? `${longest}ch` : undefined }}
    >
      {text}
      <span className="tw-caret" aria-hidden="true">|</span>
    </span>
  );
}
