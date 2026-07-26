# PRISM Framework — Full Specification

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

> **Note:** PRISM EA Framework is an independent framework. It is not a revision or successor of the 1986 PRISM.

---

## 1. Overview

PRISM is a methodology for describing, governing, and evolving an enterprise architecture across five distinct but interrelated layers. Each layer answers a specific question. Together they provide a complete picture of the enterprise — who it involves, what it does, why it exists, how its parts connect, and where it's going.

PRISM is intentionally generic. "Enterprise" means any organized system with stakeholders, operations, intent, and change — not just an IT department. A hospital, a logistics network, a government agency, a software product company: all are valid PRISM subjects.

---

## 1.1 How Nine Architectural Dimensions Map to Five Layers

Enterprise architecture practice identifies at least nine distinct concerns that a complete architectural description must address. PRISM consolidates these into five layers, grouping concerns that are tightly coupled rather than forcing artificial separation.

| Architectural dimension | PRISM layer | Where it lives |
|------------------------|-------------|----------------|
| **Who** — People, roles, organizational units | **P** | `stakeholders[]` |
| **Where** — Geographies, environments, jurisdictions | **P** | `geographies[]`, `environments[]` |
| **What** — Capabilities, products, deliverables | **R** | `capabilities[]` |
| **How** — Processes, systems, pipelines | **R** | `processes[]`, `systems[]`, `data_assets[]` |
| **Why / When** — Strategic rationale, timing (optional) | **I** | `drivers[]`, `timelines[]` |
| **If-Then** — Risks, goals, constraints | **I** | `risks[]`, `goals[]`, `constraints[]` |
| **Exchange** — Integration, APIs, data flow | **S** | `apis[]`, `events[]`, `data_contracts[]` |
| **Pulse** — Ethics, adoption, sentiment, social impact | **M → Pulse** | `adoption_signals[]`, `sentiment[]`, `ethics_markers[]` |
| **Legacy** — History, trajectory, decisions | **M → Trajectory** | `decisions[]`, `transition_programs[]`, baseline/target descriptions |

### Why five and not nine?

**P groups Who + Where** because stakeholders without location are incomplete and locations without stakeholders are inert. A regulator without a jurisdiction is not a useful architectural artifact.

**R groups What + How** because capabilities and the systems that deliver them are inseparable in practice. Separating them into distinct layers creates artificial maintenance overhead without analytical benefit.

**I groups Why/When + If-Then** because both address the same concern: the strategic constraints on what the architecture must achieve and by when. Risks, goals, and constraints are all expressions of the same layer: *what the enterprise needs to be true, and what threatens that*.

**M groups Pulse + Legacy** because human adoption and chronological trajectory are interdependent. A technically complete target architecture that ignores change readiness will fail in delivery. Movement holds both the human signal (present) and the architectural journey (past-to-future).

**S stands alone** because exchange contracts are the most consequential architectural decisions an enterprise makes — they outlive the systems that implement them, and they deserve their own governance concern.

---

## 2. Foundational Principles

### 2.1 Source-First Architecture

Architecture artifacts in PRISM are plain-text files. YAML for structured data. Markdown for narrative. The filesystem is the model. This has concrete benefits:

- Any developer tool works: editors, diff viewers, grep, CI pipelines.
- No proprietary database or export step between "the model" and "the file."
- The file is the source of truth, not a rendering of one.

#### Why YAML for artifacts, JSON for schemas

Schemas (validation) use JSON. Artifacts (authoring) use YAML. These are separate concerns serving different audiences.

**JSON for schemas because:**
- JSON Schema is the validation standard — tooling (`ajv`, IDE plugins, CI validators) expects JSON Schema in JSON.
- Schemas are machine-read, rarely authored directly by practitioners.
- Strict syntax makes schema errors unambiguous.

**YAML for artifacts because:**

| Problem with JSON for human authors | YAML solution |
|-------------------------------------|---------------|
| No comments — can't annotate `# decommissioning in 2026` | Native `#` comment support |
| Every string needs quotes — `"name": "Claims System"` | `name: Claims System` — no quotes needed |
| Multi-line strings require escape sequences — rationale fields become unreadable | Block scalars (`>` or `\|`) for clean prose |
| Trailing commas break the file | Indentation-based — no commas |
| Syntactic noise: `{}`, `[]`, `""` everywhere | Clean indent structure |

Concrete example — the same architectural decision in both formats:

```json
{
  "id": "dec-kafka-adoption",
  "title": "Adopt Apache Kafka",
  "rationale": "Evaluated Kafka, AWS SQS, and Azure Service Bus. Kafka selected for throughput requirements and vendor neutrality.",
  "date": "2024-03-15"
}
```

```yaml
- id: dec-kafka-adoption
  title: "Adopt Apache Kafka"
  rationale: >
    Evaluated Kafka, AWS SQS, and Azure Service Bus.
    Kafka selected for throughput requirements and vendor neutrality.
  date: "2024-03-15"
```

The YAML version is writable by a business analyst. The JSON version looks like code.

PRISM's authoring principle: non-technical stakeholders must be able to create and edit these files. YAML clears that bar; JSON doesn't.

**Compatibility note:** YAML is a superset of JSON. Valid JSON is valid YAML. Teams whose tooling requires JSON artifacts can author in JSON and remain PRISM-compliant.

### 2.2 Git-Native Workflow

PRISM treats git not as a backup mechanism but as the governance engine.

| Git concept | PRISM meaning |
|-------------|---------------|
| Branch | Exploration of an architectural option |
| Commit | A decision made |
| Pull request | A governance review checkpoint |
| Tag | A published architecture baseline or target |
| Diff | Change impact analysis |
| History | Audit trail |

An organization's architecture history is its git log. No separate change register needed.

### 2.3 Schema-Based Validation

Every PRISM artifact validates against a JSON Schema. This provides:

- Structural consistency across teams and projects
- Automated validation in CI pipelines
- Self-documentation through schema descriptions
- Clear contracts for tooling (renderers, dashboards, analyzers)

Schemas live in `schema/` and are versioned alongside the framework.

### 2.4 Authorable Landscapes

A PRISM landscape is a set of layer files describing one enterprise (or one bounded context within one). It must be authorable by:

- An enterprise architect (technical detail)
- A business analyst (capabilities and intent)
- A product owner (stakeholders and signals)
- A CIO (movement and trajectory)

YAML was chosen because it reads like structured prose. No modeling language expertise required.

### 2.5 Domain Agnosticism

PRISM layers are defined in terms that apply outside of IT:

- "System" can mean a hospital department, a production line, or a software application.
- "Stakeholder" can mean a citizen, an employee, a regulator, or a machine.
- "Signal" can mean an API, a physical goods transfer, a policy directive, or a service contract.

---

## 3. Framework Layers

### 3.1 P — People & Place

**Core question:** Who uses this, and from where?

This is the foundation layer. Before describing what an enterprise does, PRISM establishes who's involved and where they operate. This draws from Zachman's Who and Where columns.

**Sub-dimensions:**

- **Stakeholders** — Roles, personas, organizational units, external parties, regulators. Includes human actors and organizational entities.
- **Geographies** — Physical locations, regions, regulatory jurisdictions, virtual or logical environments.
- **Environments** — Operating contexts (production, staging, development, field operations, disaster recovery).

**Authoring note:** Don't try to list every individual person. List roles and org units. Specificity matters at the boundary — who's external vs. internal, who holds regulatory authority, who can trigger change.

---

### 3.2 R — Reality

**Core question:** What exists, and how does it run?

The operational layer. This covers what the enterprise actually has and does, drawing from TOGAF's architecture domains (business, application, data, technology) without mandating their full scope.

**Sub-dimensions:**

- **Capabilities** — What the enterprise can do, expressed as business outcomes (e.g., "process insurance claims," "manufacture automotive components").
- **Systems** — The operational units delivering capabilities — applications, machines, teams, processes, services.
- **Data** — The core information assets, their owners, classifications, and flow patterns.
- **Processes** — How work moves through the enterprise: workflows, procedures, value streams.

**Authoring note:** Describe what's real today, not what was planned. Reality is your baseline. Use the temporal dimension to express the gap between now and target.

---

### 3.3 I — Intent

**Core question:** Why does it exist, and when does it matter?

This layer is optional but valuable for governance decisions and investment justification. It captures the strategic rationale behind architectural choices, drawing from Zachman's Why and When columns.

**Sub-dimensions:**

- **Drivers** — Business motivations: market forces, regulatory requirements, cost pressures, strategic bets.
- **Goals** — Desired outcomes tied to drivers, expressed as measurable targets where possible.
- **Timelines** — When things matter: compliance deadlines, market windows, fiscal cycles, event-driven triggers.
- **Constraints** — Non-negotiable boundaries: budget caps, legal mandates, technical debt ceilings, policy limits.
- **Risks** — If-Then conditions: what could go wrong, the impact if it does, and the chosen response strategy (mitigate, accept, transfer, avoid). Risks are architectural — they constrain what goals are achievable and on what timeline.

**Authoring note:** Intent decays. Revisit this layer when drivers change. A system without documented intent becomes a legacy system — everyone runs it, nobody knows why.

---

### 3.4 S — Signal

**Core question:** How do the parts communicate?

The exchange layer. This captures the contracts, protocols, and patterns through which systems, teams, and stakeholders exchange information and value. It's the connective tissue of the enterprise.

**Sub-dimensions:**

- **APIs** — Synchronous interfaces: REST, GraphQL, gRPC, SOAP, internal function calls with external contracts.
- **Events** — Asynchronous signals: message queues, event streams, pub/sub topics, webhooks.
- **Data Contracts** — Agreements about data shape, ownership, latency, and quality across system boundaries.
- **Integration Patterns** — Architectural patterns in use: choreography vs. orchestration, request-reply vs. event-driven, batch vs. streaming.
- **Service Agreements** — SLAs, SLOs, SLIs between producers and consumers.

**Authoring note:** Model signals at the boundary, not the implementation. The exchange contract matters more than the internal mechanism. If the signal layer is empty or undocumented, the enterprise is operating on implicit contracts — a governance risk.

---

### 3.5 M — Movement

**Core question:** Are people adopting it, and where is it headed?

Movement is PRISM's most novel layer. It is the only layer in any major EA framework that treats human adoption signals as a first-class architectural concern alongside systems, integrations, and strategic rationale.

**Important:** M is not "legacy." M = Movement. It has two distinct sub-dimensions:

```
M — Movement
├── Pulse        ← present-tense human signal (adoption, sentiment, ethics, change readiness)
└── Trajectory   ← chronological arc (baseline → transition → target, decisions log)
```

"Legacy" or "chronological" maps to Trajectory. But Pulse is equally first-class — it is what distinguishes PRISM from any existing framework. Every previous EA framework documents the architecture. PRISM also documents whether people are actually using it.

**Pulse sub-dimension:**

- **Adoption signals** — How deeply stakeholders are actually using systems and processes, not just whether they've been deployed. Six levels: none, aware, exploring, partial, active, embedded.
- **Sentiment** — The dominant emotional signal from stakeholder groups: enthusiasm, skepticism, confusion, resistance, fatigue.
- **Change readiness** — Organizational capacity to absorb change at a given point in time. Readiness is not permanent — it rises and falls with organizational load.
- **Ethics markers** — Known concerns: bias in automated decisions, privacy gaps, fairness issues, accessibility failures, accountability gaps. Naming the concern is the first step to addressing it.

**Trajectory (Chronological sub-dimension):**

- **Baseline description** — Narrative anchor: what did this enterprise look like at the start of the current era?
- **Transition programs** — Active change initiatives with status, dates, and affected PRISM layers.
- **Target description** — Desired end state in plain language, readable by a business stakeholder.
- **Decisions log** — Key architectural decisions with rationale and git commit SHA references.

**Why combine Pulse and Trajectory in one layer?**

A migration that ignores sentiment fails. A transformation that ignores trajectory is blind to how far it has to travel. Separating them produces two thin layers. Combining them produces one meaningful one: the human and temporal dimensions of architectural change are inseparable in practice.

---

## 4. Temporal Dimension

Every layer in PRISM operates across three temporal states:

| State | Meaning |
|-------|---------|
| `baseline` | The architecture as it exists today |
| `transition` | An intermediate state during a planned change |
| `target` | The desired future state |

Each artifact in a PRISM landscape declares its temporal state in its front matter:

```yaml
prism:
  layer: reality
  temporal_state: baseline
  as_of: "2025-01-01"
```

Git tags mark published baselines and targets:

```
git tag prism/baseline/2025-01
git tag prism/target/2027-q2
```

Branches hold transition work:

```
git branch prism/transition/cloud-migration
```

This approach replaces heavyweight architecture change management tools with version control semantics that teams already understand.

---

## 5. A PRISM Landscape

A landscape is a populated instance of PRISM for a specific enterprise or bounded domain. It consists of:

1. A `.prism/config.yaml` declaring the organization, domain, and active layers.
2. One or more YAML artifact files per active layer.
3. A git repository holding all of the above.

Landscapes can be:
- **Full** — All five layers populated.
- **Partial** — Only the layers relevant to the current concern (e.g., P + R + S for an integration review).
- **Scoped** — Bounded to a department, product line, or capability area.

---

## 6. Schema Governance

PRISM schemas are versioned. When a schema changes in a breaking way, the major version increments. Landscapes declare which schema version they target:

```yaml
prism:
  schema_version: "1.0"
```

Schema validation can run locally:

```bash
ajv validate -s prism/schema/reality.schema.json -d my-enterprise/reality/landscape.yaml
```

Or in CI:

```yaml
# .github/workflows/prism-validate.yml
- name: Validate PRISM artifacts
  run: ajv validate -s prism/schema/*.schema.json -d landscape/**/*.yaml
```

---

## 7. PRISM and Non-IT Domains

PRISM was designed without assuming IT context. Here's how the layers translate across domains:

| Layer | IT context | Healthcare context | Manufacturing context |
|-------|-----------|-------------------|-----------------------|
| P | Dev teams, SREs, regions, environments | Clinical staff, patients, hospitals, wards | Factory workers, suppliers, plants, zones |
| R | Applications, databases, APIs, infrastructure | Clinical workflows, EHR systems, formularies | Production lines, BOMs, equipment, logistics |
| I | Product roadmap, compliance mandates | Patient outcomes, regulatory requirements | Quality targets, cost reduction programs |
| S | REST APIs, event streams, data contracts | HL7/FHIR messages, referral protocols | EDI transactions, MES integrations |
| M | Adoption metrics, tech debt, migration trajectory | Clinician adoption, change fatigue, EHR rollout | Workforce readiness, lean transition, factory baseline |

---

## 8. Limitations and Known Gaps

- PRISM v1.0 does not prescribe a rendering or visualization standard. Diagrams are out of scope; the text model is the primary artifact.
- Tooling (CLI, dashboard) is roadmap. Current validation relies on third-party JSON Schema validators.
- The Pulse sub-dimension of M requires qualitative input that cannot be schema-validated. PRISM captures the structure; organizations supply the signal.
- PRISM does not currently define a maturity model. Maturity levels are planned for v1.1.

---

## 9. Glossary

| Term | Definition |
|------|-----------|
| Landscape | A populated PRISM instance for a specific enterprise or domain |
| Layer | One of the five PRISM dimensions (P/R/I/S/M) |
| Temporal state | The point-in-time status of an artifact: baseline, transition, or target |
| Signal | Any exchange contract between parts of an enterprise |
| Pulse | The qualitative human signal within an enterprise: sentiment, readiness, adoption |
| Trajectory | The chronological arc from baseline through transition to target |
| Schema | A JSON Schema document that validates a PRISM artifact's structure |
| Artifact | A YAML or Markdown file containing PRISM layer data |
| Decommissioning | An artifact in active transition toward retirement. Still operational but targeted for removal |
| Decommissioned | An artifact that has been retired. Retained in the model for blast radius traceability and audit |
| DependsOn | A declared dependency between artifacts. Enables blast radius analysis when a dependency changes or is decommissioned |
| Blast radius | The set of artifacts flagged as impacted when a dependency is decommissioned or changed |
| Compliance framework | A structured reference to a named regulatory or control framework (GDPR, CCPA, PCI-DSS, etc.) attached to an artifact |
| Classification | The sensitivity level of an artifact: none, public, internal, proprietary, confidential, or secret |
| Tags | An array of free-form strings attached to any artifact for filtering, indexing, and tooling |
| Flow direction | Whether a signal is inbound (entering the enterprise), outbound (leaving), or bidirectional |
| Integration mode | The style of coupling between systems: embedded (in-process), handoff (ownership transfer), or deep-link (UI-level cross-system linking) |
| Kind | The semantic type of a capability artifact: capability, process, system, or function |
| Tier | A free-form environment label that supplements the structured environment type |
| Cloud region | A geography of type cloud-region, data-center, or availability-zone, linked to a cloud provider and provider-specific region identifier |

---

## 10. Extended Concepts

These concepts extend PRISM's core schema. All fields are optional — existing artifacts validate without changes.

---

### 10.1 Decommissioning and Decommissioned States

Systems, capabilities, and processes can now express lifecycle transition explicitly:

- `decommissioning` — in active transition toward retirement. Still operational.
- `decommissioned` — retired. Retained in the model for blast radius traceability and audit trail.

Previously, `legacy` and `deprecated` existed but didn't distinguish between "on the way out" and "already gone." This gap made it impossible to represent partial transitions accurately.

```yaml
- id: sys-legacy-billing
  status: decommissioning   # still running, targeted for removal

- id: sys-old-reporting
  status: decommissioned    # retired — kept for dependency traceability
```

---

### 10.2 DependsOn and Blast Radius

Any artifact in the R layer (systems, capabilities, processes, data assets) can now declare explicit dependencies via `depends_on`. Each dependency entry names an artifact ID and its type.

```yaml
- id: cap-claims-processing
  depends_on:
    - id: sys-claims-app
      type: system
    - id: sys-claims-db
      type: system
```

**Blast radius:** when a system's status changes to `decommissioning` or `decommissioned`, tooling can traverse `depends_on` references across the landscape to surface all artifacts that are impacted. This makes the consequences of a decommission visible before it happens, not after.

The `type` field on each dependency enables cross-dimension traversal: a process can depend on a system, a capability can depend on a data asset, and so on.

---

### 10.2b AI-Native System Types

PRISM recognizes that modern enterprises run AI systems as first-class operational units. Three new values in `systems.type` cover this:

| Type | Meaning |
|------|---------|
| `ai-agent` | An autonomous AI system acting on behalf of a role — perceives inputs, reasons, takes actions, may call tools or other agents |
| `llm` | A large language model serving inference — provides language understanding, generation, classification, or extraction |
| `agentic-workflow` | An orchestrated multi-agent pipeline — coordinates multiple AI agents toward a shared outcome |

AI systems participate in the full Reality schema: they have owners, `depends_on` dependencies, `compliance_frameworks`, `classification`, and `trigger_mode`. They appear in `system_ids` on capabilities and processes just like any other system.

```yaml
- id: sys-claims-triage-agent
  name: "Claims Triage AI Agent"
  type: ai-agent
  description: "Autonomous agent that reads incoming claim documents, classifies severity, and routes to the appropriate adjudicator queue."
  status: active
  classification: confidential
  trigger_mode: event-driven
  depends_on:
    - id: sys-claims-db
      type: system
  compliance_frameworks:
    - framework: HIPAA
      scope: "PHI processing in claim documents"
      status: applicable
```

Capabilities delivered by AI agents use `kind: ai-agent`:

```yaml
- id: cap-ai-triage
  name: "Automated Claims Triage"
  kind: ai-agent
  description: "AI-driven classification and routing of incoming claims."
```

---

### 10.2c Process Execution Mode

Processes now carry an `execution_mode` field:

| Mode | Meaning |
|------|---------|
| `manual` | Entirely human-driven. No system automation. |
| `automatic` | Fully system-driven. No human intervention required. |
| `semi-automatic` | Human initiates, approves, or monitors — system executes steps. |

This field makes PRISM a direct input to automation initiatives. Listing all `manual` processes gives an immediate automation backlog.

```yaml
- id: proc-claim-adjudication
  execution_mode: semi-automatic   # human reviewer, system validates and routes
```

---

### 10.2d System Trigger Mode

Systems now carry a `trigger_mode` field to express how execution is initiated:

| Mode | Meaning |
|------|---------|
| `manual` | A human triggers execution (button click, script run, etc.) |
| `scheduled` | Time-based (cron job, batch window) |
| `event-driven` | Triggered by an event or message on a queue/stream |
| `api-driven` | Triggered by an incoming API call |
| `continuous` | Always running; no discrete trigger |
| `real-time` | Streaming; sub-second response expected |

Systems with `trigger_mode: manual` are automation candidates — especially when their corresponding processes are `execution_mode: manual`.

```yaml
- id: sys-billing-reconcile
  trigger_mode: manual   # finance team runs this monthly by hand
```

---

### 10.3 Compliance Frameworks

PRISM v1.0 had free-text `regulatory_constraints` on data assets. That's not enough for modern governance environments where multiple frameworks apply simultaneously and their status needs to be tracked individually.

v1.1 adds a structured `compliance_frameworks` array to systems, capabilities, and data assets:

```yaml
compliance_frameworks:
  - framework: GDPR
    scope: "Personal data of EU residents — Articles 5-11, 17, 20"
    status: in-progress
  - framework: CCPA
    scope: "California consumer data rights"
    status: applicable
  - framework: PCI-DSS
    scope: "Cardholder data environment"
    status: certified
    certification_date: "2024-11-01"
```

Supported frameworks: `GDPR`, `CCPA`, `PDPA`, `DPDP`, `PCI-DSS`, `SOC2`, `ISO-27001`, `NIST-CSF`, `HIPAA`, `SOX`, `FedRAMP`, `LGPD`, `PIPEDA`, `POPIA`, `other`.

Status options: `applicable`, `certified`, `in-progress`, `exempt`.

The existing `regulatory_constraints` free-text array on data assets is preserved for backward compatibility. `compliance_frameworks` is the structured equivalent and the preferred approach going forward.

---

### 10.4 Classification

A unified `classification` field is now available on systems, capabilities, and data assets. For data assets, the existing classification enum is expanded. For systems and capabilities, classification is new.

| Value | Meaning |
|-------|---------|
| `none` | No sensitivity designation |
| `public` | Freely shareable outside the enterprise |
| `internal` | Internal use only — not for external distribution |
| `proprietary` | Competitive or IP-sensitive — restricted even internally |
| `confidential` | Limited distribution — need-to-know basis |
| `secret` | Highest sensitivity — strictest controls required |
| `restricted` | Access-controlled subset (data assets only) |
| `regulated` | Subject to a compliance framework (data assets only) |

```yaml
- id: sys-claims-app
  classification: confidential

- id: da-ip-pricing-model
  classification: proprietary
```

---

### 10.5 Environment (Generic)

The environment `type` enum is expanded to cover QA, pre-production, and performance testing — contexts that exist in virtually every delivery pipeline but were previously uncategorized:

New types: `qa`, `pre-production`, `performance`.

A new `tier` string field allows organizations to add free-form labels on top of the structured type — useful for multi-region or multi-tier production setups where `type: production` alone is insufficient:

```yaml
- id: prod-eu
  type: production
  tier: "prod-eu-tier-1"
  geography_id: dc-aws-eu-west-1
```

---

### 10.6 Tags

Every artifact item across all three schema layers (R, S, P) now supports a `tags` array. Tags are free-form strings for filtering, indexing, and tooling:

```yaml
tags:
  - core
  - customer-facing
  - regulated
  - decommissioning
```

Tags are intentionally unstructured — they don't replace typed fields like `classification` or `status`, but they provide a lightweight mechanism for cross-cutting concerns that don't fit the formal taxonomy.

---

### 10.7 Flow Direction

APIs and events in the S layer now support a `direction` field:

| Value | Meaning |
|-------|---------|
| `inbound` | Signal enters the enterprise from outside |
| `outbound` | Signal leaves the enterprise |
| `bidirectional` | Signal flows both ways |

This replaces the ambiguous upstream/downstream terminology, which carries different meaning depending on whether you're reading from the producer's or consumer's perspective. Inbound and outbound are unambiguous relative to the enterprise boundary.

```yaml
- id: api-payment-gateway
  direction: outbound   # this enterprise calls out to a payment provider

- id: api-claims-intake
  direction: inbound    # partners POST claims into this enterprise
```

---

### 10.8 Artifact Kind

Capabilities in the R layer now support a `kind` field to express what type of artifact a capability functionally represents:

| Value | Meaning |
|-------|---------|
| `capability` | A business outcome the enterprise can deliver (default) |
| `process` | A workflow or procedure that is the capability |
| `system` | A system that functions as the capability |
| `function` | A discrete, bounded function within a larger capability |

This is useful when the enterprise's capability map blurs into process or system territory — common in non-IT domains where a "capability" might be a manual process or an operational team.

```yaml
- id: cap-billing
  kind: process   # billing IS the process; there's no separate system to reference
```

---

### 10.9 Integration Mode

APIs and integration patterns in the S layer, and systems in the R layer, now support `integration_mode`:

| Value | Meaning |
|-------|---------|
| `embedded` | In-process coupling. Components share context and runtime. Tightest coupling. |
| `handoff` | One system transfers ownership to another. Work moves across a boundary. |
| `deep-link` | UI-level cross-system linking. No shared context — each side authenticates independently. |

`api`, `event`, and `batch` are also available on systems as additional integration modes for systems that primarily exchange through those mechanisms.

```yaml
- id: api-portal-to-claims
  integration_mode: handoff   # portal hands claim submission to claims system

- id: pat-portal-deeplink
  integration_mode: deep-link  # portal links into claims detail page
```

---

### 10.10 Regions and Cloud Infrastructure

The geography `type` enum is extended with three new types to support cloud and infrastructure topology:

| New type | Meaning |
|----------|---------|
| `cloud-region` | A named cloud provider region (e.g., AWS us-east-1) |
| `data-center` | A physical or logical data center |
| `availability-zone` | A sub-region zone within a cloud region |

Two new fields support cloud-specific identification:

- `cloud_provider` — enum: `aws`, `azure`, `gcp`, `oracle`, `alibaba`, `on-premises`, `multi-cloud`, `other`
- `cloud_region_id` — the provider-specific identifier (e.g., `"us-east-1"`, `"eu-west-2"`, `"eastus"`)

```yaml
- id: dc-aws-eu-west-1
  type: cloud-region
  cloud_provider: aws
  cloud_region_id: "eu-west-1"
  parent_id: region-emea
  regulatory_zone: "GDPR"
```

The `parent_id` field supports containment hierarchy, so availability zones nest inside cloud regions, cloud regions nest inside geographic regions, and the full topology is navigable.

---

### 10.11 Data Sensitivity

The `classification` field (§10.4) describes access control — who is permitted to see an artifact. Data sensitivity is a separate concern: **what category of personal or regulated data** does this artifact process, store, or transmit?

PRISM adds a `data_sensitivity` field as a string array. Values are additive — a system can handle multiple data categories simultaneously.

| Value | Definition | Regulatory triggers |
|-------|-----------|---------------------|
| `pii` | **Personally Identifiable Information** — any data that can identify an individual: name, email address, IP address, phone number, national ID number, device identifier | GDPR, CCPA, PIPEDA, LGPD, PDPA, and equivalent privacy laws |
| `spii` | **Sensitive PII** — PII whose disclosure could cause significant harm: financial account numbers, biometric data, health records, SSN, criminal history, precise geolocation, sexual orientation, religious beliefs | Same privacy laws with heightened controls required |
| `phi` | **Protected Health Information** — health and medical records under HIPAA jurisdiction | HIPAA |
| `pci` | **Payment Card Industry data** — cardholder numbers, CVVs, card account data | PCI-DSS |

SPII is a subset of PII. An artifact with `data_sensitivity: [spii]` implicitly handles PII. Declare both (`[pii, spii]`) when explicit labeling helps; omit `pii` when `[spii]` alone is sufficient.

```yaml
# System handling personal identifiers but not financial/biometric/health data
- id: sys-claims-portal
  data_sensitivity: [pii]
  classification: confidential
  compliance_frameworks:
    - framework: GDPR
      scope: "Claimant personal data — EU policyholders"
      status: in-progress

# System handling financial account records (SPII) and personal identifiers (PII)
- id: sys-billing
  data_sensitivity: [pii, spii]
  compliance_frameworks:
    - framework: GDPR
      scope: "Policyholder billing records"
      status: in-progress
    - framework: SOX
      scope: "Financial transaction records"
      status: certified
      certification_date: "2024-11-15"
```

**Where it applies:** `data_sensitivity` can be set on any artifact type across PRISM layers. The most impactful placements:

- **R layer — `systems[]`:** operational units that process or transmit PII/SPII
- **R layer — `data_assets[]`:** stores holding PII/SPII at rest
- **S layer — `apis[]`, `events[]`, `data_contracts[]`:** signals carrying PII/SPII across system boundaries

**Relationship to `classification` and `compliance_frameworks`:**

| Field | What it answers |
|-------|----------------|
| `data_sensitivity` | What type of personal or regulated data is here? |
| `classification` | Who is permitted to access this artifact? |
| `compliance_frameworks` | Which regulatory regimes formally apply, and what is their certification status? |

`data_sensitivity: [pii]` is the signal that GDPR-class privacy law applies. `compliance_frameworks` is how you track whether you're certified. The two are complementary, not duplicative.

## Paper

Palakurthi, V.G. (2026). *PRISM: Enterprise architecture frameworks for the source-first era.*

- Site: https://prism-framework.org/
- PDF: https://prism-framework.org/PRISM_Framework_V1.0.pdf
- SSRN: https://ssrn.com/abstract=7037719
- Zenodo (DOI): https://doi.org/10.5281/zenodo.21325668
