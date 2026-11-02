/** Small editorial marker: number, hairline, label. */
export default function SectionMark({ num, label, id }) {
  return (
    <p className="mark" id={id}>
      <span className="mark__num">{num}</span>
      <span className="mark__rule" aria-hidden="true" />
      <span className="mark__label">{label}</span>
    </p>
  );
}
