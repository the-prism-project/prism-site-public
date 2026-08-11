# PRISM/AI — AI Architecture Landscape Framework

> **Version:** 1.0  
> **Status:** Active  
> **Licence:** CC BY-SA 4.0  
> **Family:** PRISM Frameworks

---

## § 1 Overview

AI is now in production across every industry. Organizations have models, agents, RAG pipelines, fine-tuned LLMs, and autonomous workflows — often with no consistent architectural view of what exists, how it's evaluated, whether it's safe, or what breaks when a model drifts.

PRISM/AI is a **landscape view of your AI architecture**: every model deployed, every AI-powered system built on those models, how they move through lifecycle stages, what trust controls govern them, and what's being measured in production. It covers the full stack from foundation model selection to drift detection.

PRISM/AI is not a training tracker, not a compliance framework, not a model registry. It's the architectural map that connects all of those — committed to git, designed for cross-team visibility, and linked to PRISM/D for data provenance and PRISM/A for application context.

### What PRISM/AI replaces (and what it doesn't)

| Framework / Tool | What it does | Where it falls short | PRISM/AI stance |
|---|---|---|---|
| MLflow / Weights & Biases | Experiment tracking, model registry, artifact management | Training-run-centric, no architectural landscape, no trust/safety layer, no system-level view | Complementary — PRISM/AI's Lifecycle dimension references these; they don't replace it |
| ISO/IEC 42001 | AI management system standard | Process/governance framework, not an architecture mapping tool | Different concern — compliance attestation vs. architecture visibility |
| NIST AI RMF | Risk framework for responsible AI | Risk taxonomy and process, no landscape view, not git-native | Risk categories inform PRISM/AI Trust dimension; frameworks are different concerns |
| EU AI Act | Regulatory compliance for AI systems | Compliance obligations, not architecture documentation | PRISM/AI maps what EU AI Act requires you to document; they're complementary |
| PRISM/A | Application architecture landscape | Treats AI components as `system_type: ai-agent` — no model lifecycle, no trust controls, no eval suites | PRISM/AI adds what PRISM/A deliberately leaves out |
| PRISM (EA) | Enterprise architecture | Has AI systems as capability types; no depth on models, evals, guardrails, observability | PRISM/AI is the deep dive the EA view references |

### The core assertion

AI architecture has exactly five concerns. Every AI architecture decision maps to one of them.

1. **What models exist** — model inventory, capability, provenance, deployment target
2. **What systems are built on those models** — the applications, agents, RAG pipelines, copilots
3. **How models move through lifecycle** — training, evaluation, deployment, monitoring, deprecation
4. **What trust controls govern AI behavior** — guardrails, bias assessment, alignment, red-team
5. **What's being measured in production** — accuracy, latency, drift, override rates, incidents

These five concerns become five dimensions.

---

## § 2 Foundational Principles

### Git-native (Architecture as Code)

Every PRISM/AI landscape lives in a directory committed to source control. A new model version, a guardrail update, a red-team finding — all committed, all traceable. AI architecture decisions are first-class code — this is architecture as code applied to AI systems.

### Models are architecture, not experiments

The ML community treats models as experiment outputs. PRISM/AI treats models as **architectural assets**: versioned, with declared dependencies, serving specific systems, governed by trust controls, and observable in production. A model version is as significant an architectural decision as a database schema.

### Trust is non-negotiable and explicit

Every AI system has a trust posture — whether you've documented it or not. PRISM/AI makes trust explicit: accuracy thresholds, bias assessments, explainability requirements, human override availability, and red-team findings are first-class artifacts with enforcement states.

### AI behavior assumption type

PRISM/AI recognizes a category of architectural uncertainty that doesn't exist in traditional software: **AI behavior assumptions** — correctness thresholds, hallucination rates, emergent behavior under distribution shift. These aren't bugs to fix; they're statistical properties to monitor. PRISM/AI's Trust and Observability dimensions provide the vocabulary.

### Human-in-the-loop as a declared architectural property

Whether a human must review AI output before it takes effect is an architectural decision, not an implementation detail. `human_in_loop` is a first-class field on every AI system artifact. Its presence or absence determines deployment risk class and regulatory scope.

### Schema version: "1.0"

---

## § 3 Five Dimensions — The Why

Each dimension answers exactly one question. Together they answer everything about an AI architecture.

| # | Dimension | The one question it answers |
|---|---|---|
| 1 | **Models** | What AI models are deployed, and what are they capable of? |
| 2 | **Systems** | What AI-powered applications are built on those models? |
| 3 | **Lifecycle** | How do models train, evaluate, deploy, monitor, and retire? |
| 4 | **Trust** | What controls ensure AI behavior is safe, fair, and aligned? |
| 5 | **Observability** | What is being measured in production, and what has gone wrong? |

**Why five, not more?**

"Data" is not a sixth dimension — PRISM/D covers training data, feature stores, and data governance. PRISM/AI's Models dimension references the data products from PRISM/D. "Security" is not a sixth dimension — AI-specific security concerns (prompt injection, data extraction, adversarial inputs) belong in the Trust dimension and link to PRISM/CY.

"Cost" is not a sixth dimension — token cost, inference cost, and compute cost are observability signals in the Observability dimension. Adding a Cost dimension would split what is naturally unified monitoring.

**Why not fewer?**

Four dimensions loses the distinction between Trust and Observability — they address fundamentally different concerns. Trust defines the controls that should hold ("SHAP must be shown to every adjudicator"). Observability measures whether they do ("override rate is 44%, target <40%"). Merging them collapses design intent with empirical measurement.

---

## § 4 Dimensions and Artifact Types

### 4.1 Models

**The question:** What AI models are deployed, and what are they capable of?

The Models dimension is the inventory of every AI model — foundation models, fine-tuned variants, custom-trained models, embedding models, and specialized classifiers — that the organization deploys or depends on.

| Artifact Type | Purpose |
|---|---|
| `foundation_model` | A pre-trained general-purpose model from a provider (GPT-4o, Claude, Gemini) |
| `fine_tuned_model` | A provider model fine-tuned on organization-specific data |
| `custom_model` | A model trained from scratch or from open-source base on org data |
| `embedding_model` | A model that produces vector representations (text-embedding-3-small, BGE) |
| `classifier` | A specialized classification model (sentiment, routing, severity) |
| `explainability_layer` | A post-hoc explainability wrapper (SHAP, LIME, integrated gradients) |

Key fields:

| Field | Values | Required |
|---|---|---|
| `model_provider` | `anthropic \| openai \| google \| meta \| open-source \| proprietary` | Yes |
| `capability_type` | `generation \| classification \| embedding \| reasoning \| vision \| multimodal \| structured-output` | Yes |
| `lifecycle_stage` | `research \| training \| evaluation \| staging \| production \| deprecated \| retired` | Yes |
| `version` | Model version string | Yes |
| `training_data_source` | Where training data comes from — links to PRISM/D domain IDs | Recommended |
| `license` | License type (`proprietary-api \| open-source-permissive \| open-source-restricted`) | Yes |
| `ai_model` | `true` — signals AI card rendering | Yes |
| `maturity` | `initial \| developing \| defined \| managed \| optimizing` | Optional |

**lifecycle_stage for models:**
- `research` — being explored, not yet in any deployment pipeline
- `training` — actively being trained or fine-tuned
- `evaluation` — in eval suite, not yet deployed
- `staging` — deployed to non-production, acceptance testing
- `production` — live, serving real traffic
- `deprecated` — still running, actively being replaced
- `retired` — decommissioned, no longer running

`maturity` is a separate axis from `lifecycle_stage`: lifecycle_stage tracks where the model sits in its deployment pipeline, `maturity` tracks how disciplined the governance around it is (monitoring, retraining cadence, evaluation rigor) — a `production` model can still be `initial` maturity if it ships with no monitoring or retraining process.

### 4.2 Systems

**The question:** What AI-powered applications are built on those models?

Systems are the applications, services, and workflows that use models to deliver value to users. A single model can power multiple systems. A system can chain multiple models. The key distinction from PRISM/A: Systems in PRISM/AI are AI-centric — they exist to deliver AI capability, not just to use AI as a component.

| Artifact Type | Purpose |
|---|---|
| `ai_system` | A deployed AI-powered service or application |
| `rag_pipeline` | A retrieval-augmented generation pipeline |
| `copilot` | A human-facing AI assistant embedded in a product |
| `classifier_service` | An API that serves classification decisions at scale |
| `autonomous_workflow` | A multi-step workflow with AI decision points and minimal human review |
| `ai_agent` | An agent with tool access and autonomous action-taking capability |

Key fields:

| Field | Values | Required |
|---|---|---|
| `primary_model` | ID of the primary model artifact | Yes |
| `architecture_pattern` | `rag \| zero-shot \| few-shot \| fine-tuned \| agentic \| ensemble \| hybrid` | Yes |
| `human_in_loop` | boolean — must a human approve output before it takes effect? | Yes |
| `failure_mode` | What happens when the AI system fails or produces low-confidence output | Yes |
| `lifecycle_stage` | Same as Models above | Yes |
| `depends_on` | Model artifact IDs this system uses | Yes |

### 4.3 Lifecycle

**The question:** How do models train, evaluate, deploy, monitor, and retire?

Lifecycle covers the operational processes that move models from research to production and eventually to retirement. These are architecture decisions: retraining cadence, evaluation methodology, deployment strategy, and monitoring frequency directly determine model quality and risk.

| Artifact Type | Purpose |
|---|---|
| `training_run` | A recurring model training or fine-tuning process |
| `eval_suite` | A defined evaluation methodology (benchmarks, holdout tests, backtests) |
| `deployment` | The process for deploying model versions to an environment |
| `monitoring_job` | A recurring process that checks model health in production |
| `experiment` | A time-bounded model experiment (A/B, shadow, canary) |

Key fields:

| Field | Values | Required |
|---|---|---|
| `lifecycle_stage` | Which stage of AI lifecycle this artifact manages | Yes |
| `cadence` | Frequency (`daily \| weekly \| monthly \| per-release \| event-driven`) | Yes |
| `responsible_team` | Team accountable for running this process | Yes |
| `trigger` | `scheduled \| event-driven \| manual \| drift-triggered` | Yes |
| `depends_on` | Model or eval suite IDs | Recommended |

### 4.4 Trust

**The question:** What controls ensure AI behavior is safe, fair, and aligned?

Trust is the most distinctively AI-native dimension. It covers the controls that constrain, evaluate, and document AI behavior — guardrails, bias assessments, red-team findings, explainability requirements, and alignment controls. Trust artifacts are not optional: every AI system in production must have at least one linked trust artifact.

| Artifact Type | Purpose |
|---|---|
| `guardrail` | A hard constraint on model behavior (accuracy threshold, content filter, output schema) |
| `bias_assessment` | A documented evaluation of model outputs for demographic or group-level disparities |
| `red_team_finding` | A documented vulnerability or adversarial finding from red-teaming |
| `alignment_control` | A control that keeps AI behavior within intended boundaries (human override, scope limits) |
| `explainability_config` | A declared explainability requirement and how it's implemented |

Key fields:

| Field | Values | Required |
|---|---|---|
| `trust_type` | `accuracy \| alignment \| fairness \| safety \| explainability \| privacy` | Yes |
| `enforcement` | `blocking \| soft-block \| logging \| alerting \| advisory` | Yes |
| `severity` | `critical \| high \| medium \| low` (for red-team findings) | For red_team_finding |
| `remediation_status` | `open \| mitigated \| resolved \| accepted` | Yes |
| `depends_on` | Model or system IDs this control applies to | Yes |

**enforcement levels:**
- `blocking` — model or system cannot deploy/operate if this control fails
- `soft-block` — output is flagged and routed for human review
- `logging` — control failure is recorded but does not interrupt flow
- `alerting` — control failure triggers an alert to on-call
- `advisory` — recommended, not enforced

### 4.5 Observability

**The question:** What is being measured in production, and what has gone wrong?

AI observability goes beyond traditional SRE monitoring. Model accuracy, token cost, hallucination rate, override frequency, demographic drift, and output distribution are all signals that require purpose-built measurement. Observability artifacts declare what's being measured, current values, thresholds, and linked incidents.

| Artifact Type | Purpose |
|---|---|
| `eval_metric` | A production measurement of model or system quality |
| `drift_detector` | A process that compares current model behavior to a reference baseline |
| `alert_rule` | A threshold-based alerting rule linked to an eval metric |
| `ai_incident` | A documented production incident involving AI behavior |
| `trace_config` | A declared tracing or logging configuration for AI request/response chains |

Key fields:

| Field | Values | Required |
|---|---|---|
| `signal_type` | `accuracy \| latency \| cost \| drift \| override-rate \| hallucination-rate \| toxicity \| confidence` | Yes |
| `current_value` | Current measured value | Recommended |
| `threshold` | Alert or action threshold | Yes |
| `aggregation` | `real-time \| hourly \| daily \| weekly \| per-batch` | Yes |
| `linked_guardrail` | Trust guardrail ID this metric enforces | Recommended |
| `depends_on` | Model, system, or eval suite IDs | Yes |

---

## § 5 File Structure

```
ai-architecture/
└── examples/
    └── acme-insurance/
        ├── .prism-ai/
        │   └── config.yaml          # meta: org, product, temporal_state, as_of
        ├── models/
        │   └── landscape.yaml       # foundation_model, custom_model, embedding_model artifacts
        ├── systems/
        │   └── landscape.yaml       # ai_system, rag_pipeline, copilot, classifier_service
        ├── lifecycle/
        │   └── landscape.yaml       # training_run, eval_suite, deployment, monitoring_job
        ├── trust/
        │   └── landscape.yaml       # guardrail, bias_assessment, red_team_finding, alignment_control
        └── observability/
            └── landscape.yaml       # eval_metric, drift_detector, alert_rule, ai_incident
```

### config.yaml example

```yaml
prism_ai_version: "1.0"
organization: "ACME, INC"
product: "AI Claims Triage — Architecture Landscape"
domain: insurance
scope: product
temporal_state: transition
as_of: "2025-01-01"
active_dimensions: [models, systems, lifecycle, trust, observability]
ai_risk_class: high           # EU AI Act risk classification
human_in_loop_required: true  # all customer-facing decisions require human review
```

---

## § 6 The AI Lifecycle Loop

AI systems don't ship once — they cycle continuously through training, evaluation, deployment, and monitoring.

```
Research (model selection / prototyping)
    ↓
Training (data → model artifact)
    ↓
Evaluation (eval suite → pass/fail against trust guardrails)
    ↓
Staging (canary / shadow deployment)
    ↓
Production (live serving)
    ↓
Monitoring (accuracy, drift, override rate, incidents)
    ↓
Drift detected or performance degraded
    ↓
Retrain → Evaluation → Staging → Production (loop)
```

PRISM/AI's `depends_on` links connect lifecycle artifacts to the models and systems they manage, making blast radius traversal possible: change a training data source → see every downstream eval suite, deployment, and monitoring job at risk.

---

## § 7 Trust Framework

Trust in PRISM/AI is structured across five types, each addressing a different failure mode:

| Trust type | Failure mode addressed | Example control |
|---|---|---|
| `accuracy` | Model predictions are wrong too often | ≥87% accuracy blocks deployment |
| `alignment` | Model acts outside intended scope | Human override always available |
| `fairness` | Model outputs differ across demographic groups | Demographic parity assessment monthly |
| `safety` | Model produces harmful, toxic, or dangerous outputs | Content filter with blocking enforcement |
| `explainability` | Model decisions are opaque to affected users | SHAP mandatory for adjudicator-facing scores |
| `privacy` | Model leaks training data or enables re-identification | PII scrubbing in training + inference |

**Risk levels for trust findings:**
- `critical` — immediate deployment block or incident escalation
- `high` — requires resolution within current sprint
- `medium` — tracked, scheduled for resolution
- `low` — acknowledged, accepted or deferred

---

## § 8 Cross-Referencing

PRISM/AI connects to the broader PRISM framework family:

| Cross-reference | How |
|---|---|
| **PRISM (EA)** | AI systems appear as AI capabilities in the Reality (R) layer; strategic AI adoption signals in the Signal (S) layer |
| **PRISM/D** | Models depend on training data domains and feature store products declared in PRISM/D; link via `training_data_source` field |
| **PRISM/I** | Model serving infrastructure (GPU clusters, inference endpoints) is declared in PRISM/I's Runtime and Control dimensions |
| **PRISM/A** | Application components that embed AI use `system_type: ai-agent`; they link to PRISM/AI system artifacts for full depth |
| **PRISM/CY** | AI security threats (prompt injection, data extraction, adversarial inputs) link to threat artifacts in PRISM/CY |
| **PRISM/MVP** | AI-behavior assumptions in PRISM/MVP hypotheses link to trust guardrails in PRISM/AI for validation evidence |

---

## § 9 AI-Native Risk Classification

PRISM/AI recognizes five categories of AI-specific architectural risk not found in traditional software:

| Risk category | Description | Mitigation approach |
|---|---|---|
| **Model drift** | Distribution shift between training data and production inputs degrades accuracy over time | Drift detector in Observability + scheduled retraining in Lifecycle |
| **Hallucination** | Generative models produce confident but factually incorrect outputs | Confidence thresholds, retrieval grounding (RAG), HITL for high-stakes outputs |
| **Demographic bias** | Model outcomes differ unfairly across demographic groups | Bias assessments in Trust + disaggregated eval metrics in Observability |
| **Adversarial input** | Crafted inputs manipulate model behavior (prompt injection, evasion attacks) | Red-team findings in Trust + input sanitization controls |
| **Training data leakage** | Model memorizes and outputs training data containing PII/SPII | Privacy trust controls + data minimization in PRISM/D governance |

---

## § 10 What PRISM/AI Does Not Cover

| Excluded concern | Why | Where it belongs |
|---|---|---|
| Training data management and governance | Covered by PRISM/D — data domains, contracts, and governance | PRISM/D |
| Experiment tracking and hyperparameter search | Run-level tracking belongs in tooling | MLflow, W&B, Comet |
| Model weight storage and artifact versioning | Implementation detail | MLflow Model Registry, Hugging Face, S3 + DVC |
| Prompt library management | Prompt engineering is operational, not architecture | Prompt management tools |
| AI product strategy and roadmap | Product decisions belong in PRISM/MVP | PRISM/MVP Bets and Hypotheses dimensions |
| Cloud infrastructure for AI compute | Declared in PRISM/I | PRISM/I Runtime dimension |
| Application integration patterns | AI component integration belongs in PRISM/A | PRISM/A Integrations dimension |

---

## § 11 Glossary

| Term | Definition |
|---|---|
| **Foundation model** | A large pre-trained model from a provider, used as-is or fine-tuned (GPT-4o, Claude Sonnet, Gemini Pro) |
| **Fine-tuned model** | A foundation model further trained on organization-specific data to improve performance on a target task |
| **RAG (Retrieval-Augmented Generation)** | An architecture pattern that grounds LLM outputs in retrieved documents or knowledge bases to reduce hallucination |
| **Guardrail** | A hard or soft constraint on AI behavior with a declared enforcement level (blocking/logging/alerting) |
| **Human-in-the-loop (HITL)** | An architectural pattern where a human must review or approve AI output before it takes effect |
| **Model drift** | Statistical shift between the distribution of inputs seen during training and inputs seen in production |
| **Bias assessment** | An evaluation of model outputs across demographic or categorical groups to detect unfair disparities |
| **Red-team finding** | A documented vulnerability discovered by intentionally adversarial testing of an AI system |
| **Alignment control** | A control that keeps AI behavior within intended scope and values (human override, scope restrictions, refusal rules) |
| **Explainability** | The degree to which an AI system's decisions can be understood and explained to affected users |
| **lifecycle_stage** | The current stage of a model's operational lifecycle: `research → training → evaluation → staging → production → deprecated → retired` |
| **Blast radius (AI)** | The set of systems, evaluations, and monitoring jobs at risk if a model changes, degrades, or fails |

## Paper

Palakurthi, V.G. (2026). *PRISM: Enterprise architecture frameworks for the source-first era.*

- Site: https://prism-framework.org/
- PDF: https://prism-framework.org/PRISM_Framework_V1.0.pdf
- SSRN: https://ssrn.com/abstract=7037719
- Zenodo (DOI): https://doi.org/10.5281/zenodo.21325668
