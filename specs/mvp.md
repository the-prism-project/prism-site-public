# PRISM/MVP — Product Validation Landscape Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/MVP is a framework for describing, governing, and evolving a product's validation journey as a structured, navigable landscape. It answers the question no existing product framework addresses as a coherent landscape: *who are we building for, what problem are we solving, what are we betting on, what do we believe but haven't proven, and what are we actually learning?*

Existing approaches each cover a subset:

| Approach | What it does | What it misses |
|----------|-------------|----------------|
| **MVP Canvas** | Single-page visual: segments, value props, channels, assumptions, experiments | Flat structure — no hierarchy, no validation lifecycle, no cross-referencing, no temporal arc |
| **Lean Startup** | Build-measure-learn loop | No structured landscape; no assumption prioritization; no connection to technical reality |
| **OKRs** | Outcome-based goal setting | Tells you what to achieve, not how to validate the assumptions behind the goals |
| **User Story Mapping** | Visual backlog structure | Output-focused (features), not outcome-focused (validation); no assumption tracking |
| **Product Backlog (Scrum)** | Feature priority queue | Assumes you know what to build; no room for the "is this the right thing?" question |
| **Shape Up** | Bet-based six-week cycles | Build-focused; no hypothesis lifecycle; no market or value modeling |

PRISM/MVP is text-first, git-native, and schema-validated. It models the full product validation landscape — not just what the product does, but the organizational beliefs behind it, the experiments testing those beliefs, and the learning trajectory from hypothesis to validated product.

### What makes PRISM/MVP different

**Hypotheses as the unit of work.** Not features, not stories, not tickets. Every capability we build is a bet on an underlying hypothesis. PRISM/MVP makes those hypotheses explicit, versioned, and validated (or invalidated) through the git history.

**Learning velocity over feature throughput.** The north star of PRISM/MVP is not how many features shipped — it's how fast the team is invalidating assumptions. Invalidating a risky assumption is a product success even if the feature is killed.

**Bets not backlogs.** PRISM/MVP replaces must/should/could as a priority scheme with investment decisions. Each bet has a rationale ("we're betting on this because..."), a linked hypothesis ("the assumption this tests is..."), and an opportunity cost ("by doing this, we're not doing..."). A bet without a rationale is a guess. A guess should not be in the landscape.

**Temporal arc across the validation journey.** Every hypothesis has a lifecycle: `unvalidated` → `in-progress` → `validated` or `invalidated`. The landscape captures this arc, preserving what was learned even after invalidation. Deleted hypotheses are invisible learnings. PRISM/MVP keeps them.

**Exclusions are first-class artifacts.** Most product frameworks ignore what you decided NOT to build. PRISM/MVP models exclusions explicitly — with rationale. This prevents the "why didn't we build X?" conversation from happening twice.

**Cross-framework integration.** Bets link to PRISM/A components (what we're actually building). Market segments link to PRISM EA stakeholders (who we're building for). Signal metrics link to PRISM/A quality SLOs (measuring the right thing at the system level). PRISM/MVP is not a standalone canvas — it is part of the PRISM ecosystem.

### What PRISM/MVP is not

- **Not a backlog.** PRISM/MVP describes *what you're learning* and *why you're building it*. Sprint tasks, user stories, and acceptance criteria live in Jira, Linear, or your issue tracker.
- **Not a roadmap.** Roadmaps describe what you plan to deliver on a timeline. PRISM/MVP describes what you're validating on a learning arc. They are compatible but not the same thing.
- **Not a business case.** PRISM/MVP doesn't prove ROI before building. It structures the learning process that produces the evidence for ROI decisions.
- **Not a research repository.** PRISM/MVP captures structured learnings, not raw research artifacts. Transcripts, session recordings, and survey data live in your research tool.

### Relationship to PRISM (Enterprise Architecture)

| Concern | Framework |
|---------|-----------|
| Stakeholders, capabilities, systems, intent, signals, movement | PRISM EA |
| Customer segments, value propositions, product bets, hypotheses, learning signals | PRISM/MVP |

PRISM EA's `People/stakeholders` lists who's involved in the enterprise. PRISM/MVP's `Market` dimension describes those same people through a product lens — their jobs to be done, their pain points, and how they're reached. Cross-reference PRISM EA stakeholder IDs using the `prism_ea_stakeholder` link field.

PRISM EA's `Intent` layer captures strategic goals and drivers. PRISM/MVP's `Value` dimension captures the product-level problem statements those goals generate. They are complementary: Intent is "why the enterprise" and Value is "why this product."

### Relationship to PRISM/A (Application Architecture)

PRISM/A describes the applications being built. PRISM/MVP describes why those applications are the right bets. Bets in PRISM/MVP's `Bets` dimension link to PRISM/A component IDs — connecting the product decision to the technical implementation.

---

## 2. Foundational Principles

PRISM/MVP inherits three principles from PRISM EA.

### 2.1 YAML for Artifacts, JSON for Schemas

Product landscapes are authored in YAML. Product managers, designers, engineers, and business stakeholders all need to read and write these files without specialized tooling. YAML's comments, block scalars, and minimal syntax noise make this tractable.

### 2.2 Git-Native Learning (Architecture as Code)

Product architecture in PRISM/MVP is architecture as code: hypotheses and bets live in git, not a slide deck that goes stale the day after the review.

| Git concept | PRISM/MVP meaning |
|-------------|------------------|
| Branch | Exploration of a product direction or hypothesis variant |
| Commit | An assumption formed, tested, or concluded |
| Pull request | Product review — PM, design, engineering, and stakeholder alignment |
| Tag | Published learning milestone: "we know enough to proceed" |
| Diff | Change in product understanding since last review |
| History | Audit trail of what was believed, tested, and learned |

Every invalidated hypothesis is a preserved learning. Every pivot is a pull request with a reviewer discussion. Every "why did we build this?" question is answerable from the git log.

### 2.3 Temporal Axis

| State | Meaning |
|-------|---------|
| `baseline` | Current understanding — hypotheses formed, product in initial state |
| `transition` | Validation in progress — experiments running, learnings accumulating |
| `target` | Validated state — hypotheses confirmed or product direction set |

Hypotheses declare their own validation state. An assumption under active testing is different from one that's been invalidated. The landscape tracks both — without deletion.

### 2.4 Jobs-to-Be-Done as the Customer Model

PRISM/MVP frames customers through *what they're trying to accomplish*, not just demographics. A "26–35 year old urban professional" is an incomplete customer model. "When I file a complex insurance claim, I want to understand where it stands without calling an agent, so I can plan my recovery financially" is actionable.

Every segment in PRISM/MVP includes a Jobs-to-Be-Done (JTBD) statement. Personas are optional enrichment; the JTBD is the core.

JTBD format: `When [situation], I want [motivation], so I can [outcome].`

---

## 3. The Five Dimensions

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Market** | Who are we building for, and what is their context? | Segments, personas, channels, engagement models |
| **Value** | What problem are we solving, and what value do we deliver? | Problem statements, value propositions, differentiators, outcomes |
| **Bets** | What are we building, and what are we choosing NOT to build? | Feature bets (must/should/could as investment decisions), exclusions, alternatives |
| **Hypotheses** | What do we believe but haven't proven? | Assumptions, risks, unknowns |
| **Signals** | What are we learning? | Metrics, experiments, results, learnings, pivots |

### Why five?

**Market precedes Value** because understanding who you're building for is not the same as understanding what they need. A segment is defined by context and JTBD; the value proposition is the response to that context. Conflating them produces "customer segment: people who need insurance" which is not a product insight.

**Value precedes Bets** because every product bet should be traceable to a problem. A bet with no linked problem is output without outcome. The Value dimension forces the "what problem does this solve?" question before any scope decision is made.

**Bets are investment decisions, not a backlog.** Must/should/could in PRISM/MVP are not priority tiers on a feature list — they are degrees of investment certainty. A `must` bet is something non-negotiable for the value proposition — cutting it invalidates the core. A `should` bet adds significant value but is negotiable. A `could` bet is an option held open pending signal. This framing prevents scope creep disguised as reprioritization.

**Hypotheses stand alone** because assumptions are the highest-leverage artifact in product development. Most products fail not because they shipped badly, but because they shipped the wrong thing — a consequence of untested assumptions. By making hypotheses a first-class dimension, PRISM/MVP forces assumption articulation *before* bets are decided, and preserves invalidated assumptions as organizational learning.

**Signals are last** because they synthesize the other four. A metric is only meaningful if you know which segment you're measuring, which problem you're trying to solve, which bet you're validating, and which assumption you're testing. A "north star metric" without the context of Market, Value, and Hypotheses is a number without a story.

---

## 4. Dimensions — Artifact Types

### 4.1 Market

| Artifact type | Description |
|---------------|-------------|
| `segment` | A defined group of people or organizations with a shared context and JTBD |
| `persona` | An archetype within a segment — optional enrichment with behavioral detail |
| `channel` | How we reach and serve this segment: direct, partner, marketplace, product-led |
| `engagement_model` | How customers interact with the product: self-serve, high-touch, community, hybrid |

**Key fields on market artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| `jtbd` | string | Jobs-to-Be-Done statement: "When [situation], I want [motivation], so I can [outcome]" |
| `segment_type` | enum | `primary` \| `secondary` \| `negative` — Primary: who we're optimizing for. Secondary: benefiting but not the focus. Negative: explicitly NOT building for this group |
| `size` | enum | `large` \| `medium` \| `niche` — qualitative market size; do not fabricate numbers |
| `validation_state` | enum | `assumed` \| `observed` \| `validated` — how much evidence we have for this segment |
| `evidence` | string | What evidence exists for this segment's existence and need |
| `prism_ea_stakeholder` | string | Reference to PRISM EA stakeholder ID |

**Segment types:**

- `primary` — The segment the product is optimized for. When in doubt, optimize for this group.
- `secondary` — Benefits from the product but is not the primary focus. Features for secondary segments should not compromise primary segment experience.
- `negative` — Explicitly out of scope. Identifying negative segments prevents feature drift toward the wrong audience. Documenting them prevents the "why didn't we build X?" conversation.

### 4.2 Value

| Artifact type | Description |
|---------------|-------------|
| `problem` | A specific pain point, friction, or unmet need experienced by a segment |
| `value_proposition` | What we deliver in response to a problem: gain creator, pain reliever, or new possibility |
| `differentiator` | What makes our solution distinctive vs. alternatives a customer would otherwise use |
| `outcome` | The measurable result we expect the customer to achieve when the value proposition is realized |

**Key fields on value artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| `segment_id` | string | Problems link to the segment that experiences them |
| `value_type` | enum | `gain` \| `pain_relief` \| `new_possibility` — which type of value does this create |
| `evidence` | string | What evidence exists that this problem is real and worth solving |
| `validation_state` | enum | `assumed` \| `observed` \| `validated` |
| `alternative` | string | What does the customer do today instead of using our solution |
| `linked_problem` | string | For value propositions: which problem does this address |

**Validation states on problems and value propositions:**

- `assumed` — We believe this problem exists but have no direct evidence.
- `observed` — We have indirect evidence (analytics, support tickets, secondary research).
- `validated` — We have direct primary evidence (user research, interviews, experiments).

Problems that are still `assumed` should be the first thing validated — before building anything.

### 4.3 Bets

| Artifact type | Description |
|---------------|-------------|
| `bet` | A feature, capability, or design decision we're investing in — with rationale and linked hypothesis |
| `exclusion` | An explicit decision NOT to include something, preserved with rationale |
| `alternative` | An option considered and rejected, with the reason for rejection |

**Key fields on bet artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| `tier` | enum | `must` \| `should` \| `could` — investment certainty, not priority |
| `rationale` | string | Why are we making this bet? What do we believe it will achieve? |
| `linked_hypothesis` | string | ID of the hypothesis this bet is designed to test |
| `linked_value` | string | ID of the problem or value proposition this bet addresses |
| `opportunity_cost` | string | What are we NOT doing by making this bet? |
| `status` | enum | `active` \| `validated` \| `invalidated` \| `parked` |
| `ai_specific` | boolean | True if this is an AI feature bet — enables AI assumption tracking |
| `prism_a_component` | string | Reference to PRISM/A component ID (what we're actually building) |
| `depends_on` | string[] | IDs of hypotheses this bet depends on |

**The must/should/could model in PRISM/MVP:**

Unlike traditional prioritization, PRISM/MVP's tier is fixed at bet creation time and changes only when a learning or strategic decision explicitly revises it. A `must` bet that gets deprioritized must become an `exclusion` with rationale — not silently moved down a list. A `could` bet that receives validating signal is explicitly promoted to `should` or `must`. This creates a decision audit trail.

**Bet status lifecycle:**

```
active → validated   (bet delivered, hypothesis confirmed)
       → invalidated (hypothesis disproven; bet killed or revised)
       → parked      (deferred pending signal; not killed)
```

### 4.4 Hypotheses

| Artifact type | Description |
|---------------|-------------|
| `assumption` | Something believed to be true that, if wrong, would materially change the product direction |
| `risk` | The consequence if a specific assumption is invalidated |
| `unknown` | A known unknown: something we know we don't know yet, but need to before deciding |

**Key fields on hypothesis artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| `assumption_type` | enum | `desirability` \| `viability` \| `feasibility` \| `usability` \| `ai-behavior` |
| `risk_level` | enum | `critical` \| `high` \| `medium` \| `low` — how bad is it if this is wrong? |
| `validation_state` | enum | `unvalidated` \| `in-progress` \| `validated` \| `invalidated` |
| `validation_criteria` | string | How will we know if this assumption is true? What evidence is sufficient? |
| `linked_bet` | string | ID of the bet this hypothesis supports |
| `discovery_date` | date | When this assumption was first articulated |
| `resolution_date` | date | When validation concluded (validated or invalidated) |
| `linked_learning` | string | ID of the learning that resolved this assumption |

**Assumption types:**

| Type | What it tests |
|------|--------------|
| `desirability` | Do customers actually want this? |
| `viability` | Can we build a sustainable business on this? |
| `feasibility` | Can we build this with our current capability? |
| `usability` | Will customers be able to use this effectively? |
| `ai-behavior` | Will the AI component perform as needed? (accuracy, trust, bias, hallucination) |

**Assumption prioritization:** Test the riskiest (`critical`) and least validated (`unvalidated`) assumptions first. An assumption that is `low` risk if wrong does not need to be tested before shipping. An assumption that is `critical` and `unvalidated` is the most dangerous artifact in the landscape — it represents a product bet with no foundation.

### 4.5 Signals

| Artifact type | Description |
|---------------|-------------|
| `metric` | A measurement used to track product health, validate hypotheses, or guide decisions |
| `experiment` | A structured test designed to validate or invalidate a specific assumption |
| `result` | The outcome of an experiment: what was observed, measured, and recorded |
| `learning` | The interpretation of a result: what this means for the product direction |
| `pivot` | A significant change in direction based on learnings |

**Key fields on signal artifacts:**

| Field | Type | Description |
|-------|------|-------------|
| `metric_type` | enum | `north_star` \| `guardrail` \| `diagnostic` |
| `linked_hypothesis` | string | The assumption this experiment or metric is testing |
| `linked_bet` | string | The bet this signal is validating |
| `method` | enum | `a_b_test` \| `usability_study` \| `survey` \| `interview` \| `prototype` \| `dogfood` \| `beta` \| `shadow` |
| `result_state` | enum | `pending` \| `supports` \| `refutes` \| `inconclusive` |
| `confidence` | enum | `high` \| `medium` \| `low` |
| `n` | integer | Sample size (if applicable) |
| `pivot_type` | enum | For pivots: `zoom-in` \| `zoom-out` \| `customer-segment` \| `value` \| `channel` \| `platform` \| `business-model` \| `persist` |

**Metric types:**

- `north_star` — What moves the business. One primary metric that captures product health. Example: time-to-first-decision.
- `guardrail` — What we cannot let worsen. Protects against optimizing one metric at the cost of another. Example: AI accuracy must not fall below 85%.
- `diagnostic` — Understanding why. Explains changes in the north star. Example: adjudicator triage time saved per day.

**The Learning Loop:**

```
Market + Value (understanding)
       ↓
   Hypotheses (articulating beliefs)
       ↓
     Bets (investment decisions)
       ↓
   Signals (validation)
       ↓
   Learnings (interpretation)
       ↓
  Pivot / Persist (direction)
       ↓
 [update Market, Value, Hypotheses, Bets]
```

Each loop iteration is a version of the landscape. The git history IS the learning history.

**Pivot types (adapted from Lean Startup):**

| Type | Meaning |
|------|---------|
| `zoom-in` | What was a feature becomes the whole product |
| `zoom-out` | What was the whole product becomes a feature of something bigger |
| `customer-segment` | We had the right product for the wrong customer |
| `value` | The problem we're solving isn't the one customers care about |
| `channel` | The product is right, the distribution is wrong |
| `platform` | A feature becomes a platform (or vice versa) |
| `business-model` | Same value, different revenue structure |
| `persist` | Learnings confirm current direction; continue as planned |

---

## 5. File Structure

```
<org-name>/
  .prism-mvp/
    config.yaml             # landscape metadata
  market/
    landscape.yaml
  value/
    landscape.yaml
  bets/
    landscape.yaml
  hypotheses/
    landscape.yaml
  signals/
    landscape.yaml
```

### `.prism-mvp/config.yaml`

```yaml
prism_mvp_version: "1.0"
organization: "ACME, INC"
product: "AI Claims Triage"
description: "MVP validation landscape for AI-assisted claims triage and routing"
domain: insurance
scope: product          # enterprise | product | feature
temporal_state: transition
as_of: "2025-01-01"
active_dimensions:
  - market
  - value
  - bets
  - hypotheses
  - signals
target_segments:
  - seg-claims-adjudicators
  - seg-policyholders-claimants
learning_cadence: "2-week sprint"
```

### Dimension landscape file structure

```yaml
# hypotheses/landscape.yaml
dimension: hypotheses
as_of: "2025-01-01"
temporal_state: transition

assumptions:
  - id: hyp-adjuster-trust
    name: "Adjuster AI Trust Threshold"
    type: assumption
    assumption_type: usability
    risk_level: critical
    validation_state: in-progress
    description: >
      Claims adjusters will trust AI triage scores enough to use them as a primary
      routing signal — provided accuracy exceeds 85% on historical claims.
    validation_criteria: >
      > 70% of adjusters in pilot cohort route claims using AI score without manual
      override within 30 days of exposure. Manual override rate < 40%.
    linked_bet: bet-ai-intake-scoring
    discovery_date: "2024-11-15"

risks:
  - id: risk-trust-failure
    name: "Adjudicators Reject AI → Feature Abandoned"
    type: risk
    risk_level: critical
    linked_assumption: hyp-adjuster-trust
    mitigation: >
      SHAP explanations included in MVP. Weekly sync with pilot lead.
      Override tracking to identify patterns in rejected scores.

unknowns:
  - id: unk-workload-context
    name: "Does AI Trust Vary by Workload Level?"
    type: unknown
    planned_investigation: "Segment pilot results by daily claim volume."
```

---

## 6. The Learning Loop

The Learning Loop is the core operating principle of PRISM/MVP. It connects the five dimensions into a closed validation cycle.

Every experiment references a hypothesis. Every result has a confidence level. Every learning interprets a result. Every pivot or persist decision references a learning. The chain is traversable in both directions:

- From a hypothesis: find all experiments designed to test it
- From a pivot: trace back to the learning and experiment that caused it
- From a bet: find all hypotheses it rests on (its foundation) and all experiments testing those hypotheses (its validation status)

**Learning velocity:** A team running 3 experiments per sprint and invalidating 2 assumptions is moving faster than a team shipping 10 features. PRISM/MVP makes learning velocity visible: the ratio of `validated | invalidated` hypotheses to `unvalidated` hypotheses, tracked over time.

**Preserving invalidated hypotheses:** An invalidated assumption is not a failure — it is an asset. It tells the next product team why a direction was tried and abandoned. PRISM/MVP never deletes assumptions; invalidated ones are marked `invalidated` with a resolution date and linked learning.

---

## 7. Cross-Referencing

PRISM/MVP artifacts link to other PRISM framework artifacts:

```yaml
# market/landscape.yaml
- id: seg-claims-adjudicators
  links:
    prism_ea_stakeholder: stk-claims-adjusters    # PRISM EA People/stakeholders

# bets/landscape.yaml
- id: bet-ai-intake-scoring
  links:
    prism_a_component: comp-claims-ai-triage      # PRISM/A Components
    prism_ea_system: sys-claims-ai                # PRISM EA Reality/systems

# signals/landscape.yaml
- id: metric-time-to-decision
  links:
    prism_a_slo: slo-claims-ai-accuracy           # PRISM/A Quality/SLOs
```

Cross-references are soft — no schema enforcement across frameworks. PRISM/MVP does not import other frameworks' schemas.

---

## 8. Dependency Modeling and Blast Radius

PRISM/MVP uses `depends_on` to model the validation chain:

```yaml
# bets depend on hypotheses
- id: bet-ai-intake-scoring
  depends_on: [hyp-adjuster-trust, hyp-ai-accuracy-threshold]

# experiments depend on bets
- id: exp-adjudicator-pilot-cohort
  depends_on: [bet-ai-intake-scoring]

# learnings depend on results
- id: learn-model-accuracy-89pct
  depends_on: [result-model-backtest]
```

**Invalidation blast radius:** If a critical assumption (`hyp-adjuster-trust`) is invalidated, every bet that depends on it is at risk. Selecting the assumption in the landscape shows all dependent bets — the full blast radius of the invalidation.

Forward traversal: select a hypothesis → see which bets rest on it → see which experiments are testing it.
Backward traversal: select a bet → see which results support or refute its foundation.

---

## 9. Validation State Lifecycle

Hypotheses follow a validation lifecycle:

```
unvalidated → in-progress → validated
                          └→ invalidated
```

Bets follow a parallel lifecycle driven by their hypothesis outcomes:

```
active → validated    (bet delivered, core hypothesis confirmed)
       → invalidated  (core hypothesis disproven — bet killed or fundamentally revised)
       → parked       (deferred pending signal — not killed, not advancing)
```

```yaml
- id: hyp-adjuster-trust
  validation_state: validated
  resolution_date: "2025-03-15"
  linked_learning: learn-trust-with-explainability

- id: hyp-policyholder-self-serve
  validation_state: invalidated
  resolution_date: "2025-02-01"
  linked_learning: learn-self-serve-not-preferred-by-over-60s
```

Invalidated hypotheses are preserved. The linked learning explains what was found. The linked bet record explains what was decided differently.

---

## 10. AI-Native Assumption Types

PRISM/MVP recognizes that AI features carry a unique class of assumption not covered by traditional product frameworks:

| AI assumption subtype | What it tests |
|----------------------|--------------|
| **Accuracy threshold** | Will the model be accurate enough for users to trust it? |
| **Trust formation** | Under what conditions will users override AI vs. follow it? |
| **Bias and fairness** | Does the model produce equitable outcomes across user groups? |
| **Explainability** | Can users understand why the AI made a specific decision? |
| **Failure modes** | How does the system behave when the model is wrong? Is the failure safe? |
| **Data availability** | Is training data available, labeled, and of sufficient quality? |
| **Hallucination tolerance** | How much variance or confabulation will users accept? |

These assumptions use `assumption_type: ai-behavior` and should carry `risk_level: critical` by default. AI feature failures are often invisible until user trust is lost — and lost trust is rarely recoverable.

```yaml
- id: hyp-ai-accuracy-threshold
  assumption_type: ai-behavior
  risk_level: critical
  description: >
    Adjusters will trust AI triage recommendations if model accuracy on
    historical claims exceeds 85%. Below 85%, manual override rate exceeds
    60% and the feature does not deliver the projected time savings.
  validation_criteria: >
    Backtest model on last 6 months of labeled claims.
    Accuracy ≥ 85% = hypothesis supported.
    Run adjuster trust study with real routing data.
```

---

## 11. What PRISM/MVP Does Not Cover

- **Sprint planning.** PRISM/MVP describes what you're validating, not how you're building it sprint by sprint. Jira, Linear, and GitHub Issues manage that.
- **Roadmaps and release planning.** PRISM/MVP is a learning landscape, not a delivery plan. Roadmaps are outputs; PRISM/MVP tracks the inputs to roadmap decisions.
- **Financial modeling.** Market size estimates in PRISM/MVP are qualitative. Revenue projections, unit economics, and business case modeling live in your financial tools.
- **Raw research artifacts.** Interview transcripts, session recordings, and survey responses are inputs to PRISM/MVP learnings — not the learnings themselves. Store them in Dovetail, Notion, or your research repo; reference them from `result` artifacts.
- **Legal and compliance.** Regulatory requirements affecting the product are captured in PRISM EA's Intent layer (`constraints[]`). PRISM/MVP focuses on product-market validation, not compliance validation.
- **Live usage analytics.** PRISM/MVP records that a metric is being measured and what was found; the live data lives in your analytics platform (Mixpanel, Amplitude, Segment, etc.).

---

## 12. Glossary

| Term | Definition |
|------|-----------|
| **Bet** | An investment decision in a feature, capability, or design approach — with rationale, linked hypothesis, and declared opportunity cost |
| **Hypothesis** | An assumption held about the market, customer, or product that, if wrong, would change product direction |
| **JTBD** | Jobs-to-Be-Done: the functional or emotional goal a customer is trying to accomplish in a given situation |
| **Learning velocity** | The rate at which the team is validating or invalidating hypotheses — the PRISM/MVP measure of product momentum |
| **Pivot** | A structured change in product direction based on signal from experiments, with a declared pivot type and rationale |
| **Persist** | A decision to continue current direction, supported by signal — the outcome when learning confirms the hypothesis |
| **North star metric** | The single primary metric that captures whether the product is delivering value to its primary segment |
| **Guardrail metric** | A metric that must not worsen; protects against optimizing one dimension at the cost of another |
| **Negative segment** | A customer segment explicitly identified as NOT the target — prevents feature drift toward the wrong audience |
| **Exclusion** | An explicit decision not to include a feature or capability, preserved in the landscape with rationale |
| **Blast radius** | The set of bets that become at risk when a critical assumption is invalidated |
| **Validation state** | The lifecycle state of a hypothesis: unvalidated, in-progress, validated, or invalidated |
| **Assumption type** | The category of an assumption: desirability, viability, feasibility, usability, or ai-behavior |

## Paper

Palakurthi, V.G. (2026). *PRISM: Enterprise architecture frameworks for the source-first era.*

- Site: https://prism-framework.org/
- PDF: https://prism-framework.org/PRISM_Framework_V1.0.pdf
- SSRN: https://ssrn.com/abstract=7037719
- Zenodo (DOI): https://doi.org/10.5281/zenodo.21325668
