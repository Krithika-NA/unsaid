function SoftDeadlineCard() {
  return (
    <div className="card">
      <h2>Soft Deadline Risk</h2>
      <p>
        Phrases like <b>“try”</b> or <b>“if possible”</b> weaken urgency and often
        cause delays.
      </p>
      <p>
        <b>Suggestion:</b> Use a firm deadline and remove softening language.
      </p>
    </div>
  );
}

SoftDeadlineCard.propsSchema = {};
SoftDeadlineCard.intent = ["soft_deadline"];

export default SoftDeadlineCard;
