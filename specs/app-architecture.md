# PRISM/A — Application Architecture Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/A is a framework for describing, governing, and evolving an organization's application architecture as a landscape. It answers the question: *what applications exist, how are they structured, how do they relate to each other, how healthy are they, and where are they going?*

Existing approaches each cover a subset of this:

| Approach | What it does | What it misses |
|----------|-------------|----------------|
| **C4 Model** | Diagrams: system context, container, component, code | Diagram-first; no text model; no temporal state; no quality |
| **TOGAF Application Layer** | Application inventory and interface mapping | Heavyweight; no bounded context structure; no AI-native thinking |
| **Service Catalogs** | Lists what services exist | No design intent; no quality; no evolution arc |
| **ADRs** | Captures architectural decisions | Not connected to the resulting landscape; no cross-referencing |
| **OpenAPI Specs** | Interface contracts | Only the interface; nothing about component structure or quality |

PRISM/A is text-first, git-native, and schema-validated. It models the full application landscape — not just what exists, but the organizational intent behind it, the quality reality of it, and the trajectory it's following.

### What makes PRISM/A different

**Domain-Driven Design as the organizing principle.** PRISM/A treats bounded contexts (domains) as the primary architectural unit — not services, not layers, not teams. Services, events, and APIs are described *within* and *between* domains. This makes the domain model navigable by architects, product owners, and engineers.

**Quality as a first-class dimension.** Most architecture documentation describes what systems do, not how healthy they are. PRISM/A includes a Quality dimension: test coverage, SLO compliance, technical debt level, reliability, and security posture are architectural artifacts, not metrics-tool outputs.

**AI-native from day one.** AI systems (agents, LLMs, agentic workflows) participate fully in the application landscape. They have domains, components, integration contracts, quality metrics, and evolution plans — just like any other system.

**Evolution instead of future-state documents.** The Evolution dimension replaces separate "future state architecture" documents. ADRs, migration programs, API versioning plans, and deprecation roadmaps all live in the same landscape — connected to the current-state components they affect.

### Relationship to PRISM EA

| Concern | Framework |
|---------|-----------|
| Capabilities, systems (high-level), processes, data, signals, intent | PRISM EA |
| Bounded contexts, components, cross-domain integrations, quality, evolution | PRISM/A |

PRISM EA's `Reality/systems` lists what systems exist at a business level. PRISM/A's `Components` dimension describes their internal structure, tech stack, and runtime characteristics. They cross-reference by system ID.

PRISM EA's `Signal/apis` and `Signal/events` list external integration contracts. PRISM/A's `Integrations` dimension describes the full cross-domain integration graph — both internal and external.

### Relationship to PRISM/I (Infrastructure)

PRISM/I describes how infrastructure runs. PRISM/A describes what applications run on that infrastructure. Cross-reference PRISM/I runtime artifacts (clusters, services, topics) from PRISM/A components using the `prism_i_artifact` link field.

---

## 2. Foundational Principles

PRISM/A inherits three principles from PRISM EA.

### 2.1 YAML for Artifacts, JSON for Schemas

Application landscapes are authored in YAML. Engineers, architects, and tech leads need to read and write these files without a modeling tool. YAML's comments, block scalars, and minimal syntax noise make this tractable.

### 2.2 Git-Native Governance (Architecture as Code)

Application architecture in PRISM/A is architecture as code: the landscape lives in git, not a diagramming tool or wiki page.

| Git concept | PRISM/A meaning |
|-------------|----------------|
| Branch | Exploration of an architectural option |
| Commit | An architectural decision or refactor |
| Pull request | Architecture review — tech lead, staff engineer, architect |
| Tag | Published architecture baseline |
| Diff | Change impact analysis across the application estate |
| History | Audit trail for architectural decisions |

ADRs in the Evolution dimension reference git commit SHAs — making decisions traceable from the landscape to the exact commit where they were made.

### 2.3 Temporal Axis

| State | Meaning |
|-------|---------|
| `baseline` | The application landscape as it exists today |
| `transition` | An intermediate state during a refactor or migration |
| `target` | The desired future architecture |

Components being replaced are `decommissioning`. Planned future components are `planned`. The landscape describes the full arc from current to target.

### 2.4 Who & Where is Inherited

Application ownership and team structure live in PRISM EA's P layer. PRISM/A does not duplicate stakeholders or geographies. Component ownership references PRISM EA stakeholder IDs.

---

## 3. The Five Dimensions

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Domains** | What are the logical partitions? | Bounded contexts and their purpose, ownership, and relationships |
| **Components** | What are the building blocks? | Services, APIs, workers, UIs, AI models, adapters within domains |
| **Integrations** | How do they communicate? | Cross-domain contracts: synchronous APIs, async events, data contracts |
| **Quality** | How healthy is the estate? | Test coverage, SLOs, tech debt, reliability, security posture at app level |
| **Evolution** | Where is it going? | ADRs, migration programs, API versioning, deprecation roadmap |

### Why five?

**Domains precede components** because the domain model is the organizing principle. A service without a domain has no clear ownership, no clear boundary, and no clear evolution path. Naming domains first forces the architectural conversation that most service inventories skip.

**Components are inside domains.** Unlike service catalogs that list everything at the same level, PRISM/A places components within domains. This makes cross-domain coupling immediately visible — when an integration crosses a domain boundary, that's an explicit architectural decision.

**Integrations stand alone** because cross-domain contracts are the most consequential decisions in application architecture. They outlive the components that implement them. A separate dimension gives them the governance attention they deserve — just as PRISM EA's Signal layer does for enterprise signals.

**Quality is a dimension, not a metric.** Most architecture documentation is silent on health. By making quality a first-class dimension, PRISM/A forces organizations to describe the quality reality of their estate alongside its functional reality. A component with zero test coverage and critical tech debt is an architectural risk.

**Evolution replaces future-state documents** because separate "to-be architecture" documents go stale immediately. In PRISM/A, the evolution arc lives in the same file as the current state — connected to the components it affects via `depends_on` references.

---

## 4. Dimensions — Artifact Types

### 4.1 Domains

| Artifact type | Description |
|---------------|-------------|
| `domain` | A bounded context: a named, cohesive area of the application estate with clear ownership and language |

**Key fields on domain artifacts:**

| Field | Description |
|-------|-------------|
| `ubiquitous_language` | string[] — the key terms and concepts that define this domain |
| `owner_stakeholder_id` | Reference to PRISM EA stakeholder who owns this domain |
| `domain_type` | `core` \| `supporting` \| `generic` — DDD classification |
| `maturity` | `initial` \| `defined` \| `managed` — domain architecture maturity |

### 4.2 Components

| Artifact type | Description |
|---------------|-------------|
| `service` | Long-running workload: backend API, microservice, BFF (backend-for-frontend) |
| `ui` | User interface: web SPA, mobile app, desktop client, microfrontend |
| `worker` | Background workload: consumer, job, batch processor |
| `ai_model` | AI/ML model or AI agent: deployed model, LLM endpoint, agentic system |
| `adapter` | Integration adapter: anti-corruption layer, external system facade |
| `platform` | Third-party platform: SaaS product, vendor-managed system |

**Key fields on component artifacts:**

| Field | Description |
|-------|-------------|
| `domain_id` | Which domain this component belongs to |
| `tech_stack` | string[] — runtime, language, framework (e.g., [Java 21, Spring Boot, EKS]) |
| `system_type` | `ai-agent` \| `llm` \| `agentic-workflow` for AI components |
| `trigger_mode` | `event-driven` \| `api-driven` \| `scheduled` \| `continuous` \| `manual` |
| `prism_ea_system` | Reference to PRISM EA system ID |
| `prism_i_artifact` | Reference to PRISM/I runtime artifact |
| `data_sensitivity` | string[] — data categories this component processes: `pii` \| `spii` \| `phi` \| `pci` |
| `compliance_frameworks` | object[] — compliance frameworks applicable. Same structure as PRISM EA §10.3. |

### 4.3 Integrations

| Artifact type | Description |
|---------------|-------------|
| `api` | Synchronous API contract: REST, GraphQL, gRPC |
| `event` | Asynchronous event: Kafka topic, SNS/SQS message, webhook |
| `data_contract` | Structured data exchange agreement: batch feed, shared DB table, ETL pipeline |
| `adapter_contract` | Contract through an anti-corruption layer (adapter component) |

**Key fields on integration artifacts:**

| Field | Description |
|-------|-------------|
| `producer_domain` | Domain ID producing this integration |
| `consumer_domain` | Domain ID consuming this integration |
| `direction` | `inbound` \| `outbound` \| `bidirectional` |
| `coupling` | `synchronous` \| `asynchronous` \| `batch` |
| `schema_registry` | Whether the event/API schema is registered in a schema registry |
| `versioning` | `none` \| `url-versioned` \| `header-versioned` \| `schema-versioned` |
| `data_sensitivity` | string[] — data categories flowing through this integration: `pii` \| `spii` \| `phi` \| `pci` |

### 4.4 Quality

| Artifact type | Description |
|---------------|-------------|
| `quality_metric` | Snapshot of a component's quality: coverage, SLO, debt, reliability |
| `slo` | Service level objective: target, current measurement, breach history |
| `tech_debt_record` | Documented technical debt item with severity and resolution plan |

**Key fields on quality artifacts:**

| Field | Description |
|-------|-------------|
| `component_id` | Which component this quality artifact describes |
| `test_coverage` | Percentage — automated test coverage |
| `tech_debt_level` | `none` \| `low` \| `medium` \| `high` \| `critical` |
| `reliability` | `high` \| `medium` \| `low` — P99 latency and error rate assessment |
| `security_posture` | `strong` \| `moderate` \| `weak` — security hygiene of this component |
| `last_assessed` | Date of last quality assessment |

### 4.5 Evolution

| Artifact type | Description |
|---------------|-------------|
| `decision` | Architectural Decision Record (ADR): the decision, rationale, and trade-offs |
| `migration_program` | Planned migration or replacement: source → target component, timeline |
| `roadmap_item` | Planned new capability or feature: domain, component, expected delivery |
| `deprecation` | Deprecation notice for an API, event, or component version |

**Key fields on evolution artifacts:**

| Field | Description |
|-------|-------------|
| `status` | `active` \| `planned` \| `completed` \| `cancelled` |
| `target_date` | Expected completion or delivery date |
| `decision_date` | For ADRs: when the decision was made |
| `git_commit_sha` | For ADRs: the commit where this decision was first recorded |
| `replaces` | IDs of artifacts this evolution artifact supersedes |
| `superseded_by` | ID of the evolution artifact that superseded this one |

---

## 5. File Structure

```
<org-name>/
  .prism-a/
    config.yaml             # landscape metadata
  domains/
    landscape.yaml
  components/
    landscape.yaml
  integrations/
    landscape.yaml
  quality/
    landscape.yaml
  evolution/
    landscape.yaml
```

### `.prism-a/config.yaml`

```yaml
prism_a_version: "1.0"
organization: "ACME, INC"
description: "Application architecture — insurance operations platform"
domain: insurance
scope: enterprise
temporal_state: transition    # billing migration in progress
as_of: "2025-01-01"
active_dimensions:
  - domains
  - components
  - integrations
  - quality
  - evolution
tech_governance:
  schema_registry: true
  adr_required: true
  api_review_required: true
```

---

## 6. Domain Modeling

PRISM/A adopts three DDD domain classifications:

| Classification | Meaning |
|---------------|---------|
| `core` | The business differentiator. What the organization does that competitors can't easily replicate. |
| `supporting` | Enables core domains but is not differentiating. Often a good candidate for SaaS or package software. |
| `generic` | Commodity function. Should be bought or built with minimal investment. |

Classification guides investment and build-vs-buy decisions:

- `core` domains get greenfield investment and internal ownership.
- `supporting` domains may use package software with customization.
- `generic` domains should be SaaS-first.

```yaml
- id: dom-claims
  name: "Claims"
  type: domain
  domain_type: core         # claims adjudication is ACME's differentiator
  maturity: managed

- id: dom-billing
  name: "Billing"
  type: domain
  domain_type: supporting   # billing is essential but not differentiating
  maturity: initial         # z/OS migration constrains maturity

- id: dom-auth
  name: "Authentication"
  type: domain
  domain_type: generic      # buy: use Okta
  maturity: managed
```

---

## 7. Cross-Referencing

```yaml
- id: comp-claims-portal
  type: service
  links:
    prism_ea_system: sys-claims-portal    # PRISM EA Reality/systems
    prism_i_artifact: svc-claims-api      # PRISM/I Runtime/services
    prism_cy_surface: surf-claims-portal  # PRISM/CY Surface
```

---

## 8. Dependency Modeling and Blast Radius

Components and integrations use `depends_on` to declare runtime dependencies. This enables:

**Migration blast radius:** When `comp-billing-zos` is `decommissioning`, all integrations and components that depend on it are at risk. Selecting the legacy billing component shows every at-risk artifact.

**Evolution blast radius:** When a domain or component has a `migration_program` depending on it, selecting the artifact shows what programs are planned.

```yaml
- id: int-portal-billing
  type: api
  depends_on: [comp-billing-zos]   # at risk — billing z/OS decommissioning
```

---

## 9. What PRISM/A Does Not Cover

- **Code-level architecture.** PRISM/A describes components and their relationships. Internal code structure, class hierarchies, and module dependencies live in code and tooling (e.g., static analysis, dependency graphs).
- **Runtime topology.** PRISM/A records that a component runs on EKS; the actual pod spec lives in PRISM/I or your IaC repo.
- **API implementation.** PRISM/A records that an API exists and what integration contract it uses; the OpenAPI spec lives in your API gateway or schema registry.
- **Runbook content.** PRISM/A records that a runbook *exists* as a quality artifact; the runbook lives in your docs system.
- **Real-time health data.** PRISM/A is a landscape description, not a live dashboard. For live SLO tracking, use your observability platform.

## Paper

Palakurthi, V.G. (2026). *PRISM: Enterprise architecture frameworks for the source-first era.*

- Site: https://prism-framework.org/
- PDF: https://prism-framework.org/PRISM_Framework_V1.0.pdf
- SSRN: https://ssrn.com/abstract=7037719
- Zenodo (DOI): https://doi.org/10.5281/zenodo.21325668
