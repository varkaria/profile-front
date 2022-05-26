export const toLetter = (letter: string) => {
  const letters = letter.split("");
  const spans = letters.map((l, i) => {
    return (
      <span key={i} className="letter">
        {l}
      </span>
    );
  });
  return spans;
};
