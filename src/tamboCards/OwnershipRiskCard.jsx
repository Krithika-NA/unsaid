function OwnershipRiskCard() {
  return (
    <div className="card">
      <h2>Ownership Risk</h2>
      <p>
        Tasks without a clearly assigned owner are often ignored or delayed.
      </p>
      <p>
        <b>Suggestion:</b> Assign responsibility to a specific person.
      </p>
    </div>
  );
}

OwnershipRiskCard.propsSchema = {};
OwnershipRiskCard.intent = ["ownership_risk"];

export default OwnershipRiskCard;
