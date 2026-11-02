export default function SectionHead({ num, label, id }) {
  return (
    <div className="section__head reveal">
      <span className="section__num" aria-hidden="true">{num}</span>
      <span className="rule-short" aria-hidden="true" />
      <span className="label" id={id}>{label}</span>
    </div>
  );
}
