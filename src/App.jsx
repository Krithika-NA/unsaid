import { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyze = () => {
    if (!text.trim()) return;

    const signals = [];
    const explanations = [];
    const rewriteTips = [];

    // --- Soft deadline detection ---
    if (text.includes("if possible") || text.includes("try")) {
      signals.push("Soft deadline detected");
      explanations.push(
        "Phrases like 'try' or 'if possible' weaken urgency and increase the risk of delays."
      );
      rewriteTips.push(
        "Use a firm deadline (e.g., 'by tomorrow EOD') without softening language."
      );

      // Intent event (Generative UI ready)
      window.dispatchEvent(
        new CustomEvent("tambo:intent", {
          detail: "soft_deadline",
        })
      );
    }

    // --- Ownership ambiguity detection ---
    if (text.includes("someone") || text.includes("anyone")|| text.includes("somebody")) {
      signals.push("No clear ownership");
      explanations.push(
        "When ownership is not explicitly assigned, tasks are often ignored due to shared responsibility."
      );
      rewriteTips.push(
        "Assign the task to a specific person or role."
      );

      // Intent event (Generative UI ready)
      window.dispatchEvent(
        new CustomEvent("tambo:intent", {
          detail: "ownership_risk",
        })
      );
    }

    // --- Decision deferral detection ---
    if (text.includes("we should")) {
      signals.push("Decision deferral detected");
      explanations.push(
        "'We should' often signals postponement rather than a concrete commitment."
      );
      rewriteTips.push(
        "Convert suggestions into clear action items with timelines."
      );
    }

    // --- Risk level + explanation ---
    let riskLabel = "";
    let riskExplanation = "";

    if (signals.length >= 2) {
      riskLabel = "HIGH";
      riskExplanation =
        "Likely to cause delay, confusion, or missed accountability.";
    } else if (signals.length === 1) {
      riskLabel = "MEDIUM";
      riskExplanation =
        "May lead to misalignment or follow-ups if not clarified.";
    } else {
      riskLabel = "LOW";
      riskExplanation =
        "Message is clear and unlikely to cause issues.";
    }

    setResult({
      signals:
        signals.length > 0
          ? signals
          : ["No major communication risks detected"],
      explanations,
      riskLabel,
      riskExplanation,
      rewrite:
        rewriteTips.length > 0
          ? rewriteTips.join(" ")
          : "No changes needed. The message is clear and actionable.",
    });
  };

  return (
    <div className="container">
      <h1>Unsaid</h1>
      <p className="subtitle">
        Reveal hidden risks in workplace communication
      </p>

      {/* BIG TEXT AREA */}
      <textarea
        placeholder="Paste the full email or message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div className="card">
          <h2>Hidden Signals</h2>
          <ul>
            {result.signals.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          {result.explanations.length > 0 && (
            <>
              <h2>Why This Matters</h2>
              <ul>
                {result.explanations.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </>
          )}

          <h3>
            Risk Level: {result.riskLabel} — {result.riskExplanation}
          </h3>

          <h2>Suggested Improvement</h2>
          <p>{result.rewrite}</p>
        </div>
      )}
    </div>
  );
}
