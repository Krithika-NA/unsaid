# Unsaid — Intent-Driven Generative UI using Tambo

Unsaid is a web application that analyzes everyday workplace messages to reveal **hidden execution risks** such as soft deadlines, unclear ownership, and decision deferral.

The project is built using **Generative UI principles with Tambo**, where detected user intent dynamically determines which UI components are rendered — instead of relying on static screens or hardcoded UI flows.

---

## 🧠 Problem Statement

A large portion of workplace inefficiency is not caused by lack of effort or skill, but by **unclear communication**.

Polite and well-intentioned messages often hide risks such as:
- No clear ownership
- Weak or soft deadlines
- Deferred decisions

These hidden signals frequently lead to delays, confusion, and follow-ups across teams.

---

## 💡 Solution

Unsaid addresses this problem by analyzing messages **at the moment communication happens**.

It:
- Detects hidden communication risks
- Explains why they matter
- Suggests clearer alternatives

Most importantly, the UI adapts dynamically based on the *meaning* of each message using **intent-driven Generative UI powered by Tambo**.

---

## ✨ Key Features

- Large text input area for full message visibility  
- Rule-based intent detection for explainable behavior  
- Risk classification: **LOW / MEDIUM / HIGH**  
- Clear explanations for detected risks  
- Actionable suggestions to improve clarity  
- **Intent-driven UI rendering using Tambo**

---

## 🧩 How Tambo Is Used (Core of the Project)

Unsaid follows an **intent-first Generative UI architecture**:

1. The user pastes a workplace message in natural language  
2. The system detects **intent signals** such as:
   - Soft deadlines  
   - Missing ownership  
   - Ambiguous responsibility  
3. These detected intents are emitted as **intent events**
4. **Tambo acts as the UI decision layer**, dynamically determining:
   - Which analysis components to render  
   - What risk indicators to show  
   - Which suggestions appear  

Instead of hardcoding UI flows, **Tambo enables the interface to adapt based on intent**, making the UI responsive to meaning rather than clicks.

---

## 🔄 Architecture Overview
User Input (Workplace Message)
        ↓
Intent Detection Layer (Rule-Based)
        ↓
Intent Events (soft_deadline, ownership_risk, etc.)
        ↓
Tambo (Generative UI Orchestration)
        ↓
Adaptive UI Components (Risk Cards, Suggestions, Severity)


## 🛠️ Tech Stack

- **Frontend:** React, JavaScript  
- **Generative UI Framework:** Tambo  
- **Styling:** CSS (minimal, clean UI)  
- **Build Tool:** Vite  
- **Deployment:** Vercel  
