# PRISM/D — Data Architecture Landscape Framework

> **Version:** 1.0  
> **Status:** Active  
> **Licence:** CC BY-SA 4.0  
> **Family:** PRISM Frameworks

---

## § 1 Overview

Most organizations have data catalogs, governance policies, quality tools, and lineage diagrams — all in separate systems, all out of sync. PRISM/D is not another catalog. It's a **landscape view of your data architecture**: who owns what data, how it moves, where it lives, what governs it, and how those pieces connect.

PRISM/D treats data architecture the way PRISM treats enterprise architecture: as a living landscape committed to git, with explicit ownership, cross-cutting blast radius, and no orphaned artifacts.

### What PRISM/D replaces (and what it doesn't)

| Framework / Tool | What it does | Where it falls short | PRISM/D stance |
|---|---|---|---|
| DAMA-DMBOK | Comprehensive data governance process framework | Committee-centric, heavy, not git-native, no landscape view | Different concern — DAMA defines process, PRISM/D maps architecture |
| Data Catalogs (Collibra, Alation) | Metadata discovery and search | Tooling-centric, not an architecture document, expensive, requires data crawling | Complementary — catalog for discovery, PRISM/D for design and architecture decisions |
| Data Mesh | Domain ownership principles | Principles only, no standard for mapping or documenting the mesh | PRISM/D is the mapping standard for a data mesh architecture |
| Great Expectations / dbt | Data quality enforcement, transformation | Implementation-level, not architecture-level | Data contracts in PRISM/D reference these tools; they don't replace each other |
| PRISM (EA) | Enterprise architecture landscape | Treats data as a sub-artifact type — no data domain ownership, pipeline lineage, or governance model | PRISM/D adds depth the EA view lacks |
| PRISM/I | Infrastructure landscape | Storage platforms appear as infra; data domains, flows, contracts, governance don't | Complementary — PRISM/I shows where data lives physically; PRISM/D shows what data exists and how it's governed |

### The core assertion

Data architecture has exactly five concerns. Every data architecture decision maps to one of them.

1. **Who owns what data** — without domain ownership, data governance is theater
2. **How data moves** — pipelines, streams, and syncs are architecture decisions, not plumbing
3. **Where data lives** — platform choice has cascade effects on cost, compliance, and performance
4. **What agreements govern exchange** — schemas and SLAs are contracts; contracts have states
5. **Who can access what, under what rules** — access, retention, PII, lineage: the governance layer

These five concerns become five dimensions.

---

## § 2 Foundational Principles

### Git-native

Every PRISM/D landscape lives in a directory committed to source control. Data architecture decisions are first-class code: reviewed, versioned, merged. A schema deprecation, a domain ownership transfer, a new pipeline — all committed, all traceable.

### Domain ownership as a first-class concept

Data Mesh taught the industry that domain ownership matters more than centralized data teams. PRISM/D operationalizes this: every dataset and data product has a declared owning team. Ownership determines SLA accountability, access policy authority, and incident response routing.

### Data products over raw datasets

PRISM/D distinguishes raw datasets from **data products** — intentionally designed, versioned, and served datasets with a declared consumer, schema contract, and SLA. A raw claims dump is a dataset. A curated feature vector served to an AI model is a data product.

### Lineage as architecture

End-to-end lineage — from source domain to pipeline to platform to consumer — is an architecture concern, not a metadata search result. PRISM/D captures lineage as explicit `depends_on` links, making blast radius traversal possible: change a source schema → see every downstream consumer at risk.

### PII/SPII/PHI are first-class fields

Sensitive data classification isn't a compliance checkbox bolted on later. `data_sensitivity`, `data_classification`, and `compliance_frameworks` are required fields on any artifact that touches regulated data. The landscape renders them visually.

### Schema version: "1.0"

---

## § 3 Five Dimensions — The Why

Each dimension answers exactly one question. Together they answer everything about a data architecture.

| # | Dimension | The one question it answers |
|---|---|---|
| 1 | **Domains** | What data exists and who owns it? |
| 2 | **Flows** | How does data move from source to consumer? |
| 3 | **Platforms** | Where is data stored and processed? |
| 4 | **Contracts** | What agreements govern data exchange? |
| 5 | **Governance** | Who can access what, under what rules? |

**Why five, not more?**

A sixth dimension always reduces to one of these five. "Data quality" belongs in Contracts (quality rules are contract terms). "Data observability" belongs in Contracts or Governance (breach detection is contract enforcement). "MDM" belongs in Domains (master data is a domain concern). "Reporting" belongs in Flows and Platforms. Every proposed sixth dimension was an artifact type within an existing dimension, not a new dimension.

**Why not fewer?**

Four dimensions loses the distinction between Contracts and Governance — they look similar but aren't. Contracts define the rules of exchange between producer and consumer. Governance defines who is allowed to exchange at all. Merging them hides accountability.

---

## § 4 Dimensions and Artifact Types

### 4.1 Domains

**The question:** What data exists and who owns it?

Domains define the bounded contexts of data ownership. A domain owns its source data, publishes data products for consumers, and is accountable for the SLAs of its products. This is the Data Mesh ownership model operationalized.

| Artifact Type | Purpose |
|---|---|
| `data_domain` | A bounded data ownership context — claims, policy, customer, etc. |
| `data_product` | A versioned, intentionally designed dataset served to external consumers |
| `dataset` | A raw or intermediate dataset owned by a domain (not served externally) |

Key fields:

| Field | Values | Required |
|---|---|---|
| `owner` | Team or domain name | Yes |
| `domain_type` | `source \| derived \| aggregate \| event` | Yes |
| `data_classification` | `public \| internal \| confidential \| restricted` | Yes |
| `data_sensitivity` | `[pii, spii, phi, pci]` (list) | When applicable |
| `compliance_frameworks` | `[GDPR, CCPA, HIPAA, SOX, PCI-DSS, APRA]` | When applicable |
| `depends_on` | List of upstream domain/product IDs | When applicable |

**domain_type explained:**
- `source` — originates data from a system of record (CRM, claims system, IoT)
- `derived` — computed from one or more source domains (feature store, ML features)
- `aggregate` — combines multiple domains into a unified view (customer 360, MDM)
- `event` — produces event streams rather than stored datasets

### 4.2 Flows

**The question:** How does data move from source to consumer?

Flows are the pipelines, event streams, and syncs that move data between domains, platforms, and consumers. They are architecture decisions: frequency, latency SLA, transformation pattern, and failure mode all matter.

| Artifact Type | Purpose |
|---|---|
| `pipeline` | Batch or streaming transformation pipeline (Spark, dbt, Flink) |
| `event_stream` | Real-time event bus or message queue (Kafka, Kinesis, Pub/Sub) |
| `sync` | Direct system-to-system sync or CDC process |
| `data_api` | Synchronous data serving API (OLTP-style, REST/GraphQL) |

Key fields:

| Field | Values | Required |
|---|---|---|
| `source` | Source domain or system ID | Yes |
| `destination` | Target platform or consumer ID | Yes |
| `frequency` | `real-time \| near-real-time \| hourly \| daily \| weekly \| on-demand` | Yes |
| `latency_sla` | Human-readable SLA (e.g. `<200ms`, `T+1h`, `T+24h`) | Yes |
| `transformation_type` | `raw \| filtered \| aggregated \| enriched \| normalized \| feature-engineered` | Yes |
| `failure_mode` | What happens on pipeline failure | Recommended |

### 4.3 Platforms

**The question:** Where is data stored and processed?

Platforms are the storage and compute systems that data moves through. Platform choice determines compliance scope, cost model, query capability, and operational complexity.

| Artifact Type | Purpose |
|---|---|
| `data_lake` | Object-based raw data storage (S3 + Delta Lake, GCS + Iceberg) |
| `data_warehouse` | Columnar analytical store (Snowflake, BigQuery, Redshift) |
| `feature_store` | ML feature serving and storage (Feast, Tecton, Vertex Feature Store) |
| `stream_platform` | Event streaming infrastructure (Kafka, Kinesis, Pub/Sub) |
| `data_cache` | Low-latency serving layer (Redis, Memcached) |
| `lakehouse` | Unified lake + warehouse (Databricks Delta, Apache Iceberg on S3) |

Key fields:

| Field | Values | Required |
|---|---|---|
| `technology` | Technology name | Yes |
| `platform_type` | `lake \| warehouse \| lakehouse \| feature_store \| stream \| cache` | Yes |
| `deployment` | `cloud \| on-prem \| hybrid \| managed-saas` | Yes |
| `managed_by` | Team or vendor | Yes |
| `data_classification_max` | Highest classification allowed on this platform | Yes |
| `compliance_scope` | Which compliance regimes this platform is certified for | When applicable |

### 4.4 Contracts

**The question:** What agreements govern data exchange?

A contract defines the mutual commitment between a data producer and a data consumer. Schema version, quality thresholds, SLAs, and change management protocol are all contract terms. Contracts have states: a `breached` contract is an incident, not a footnote.

| Artifact Type | Purpose |
|---|---|
| `data_contract` | Formal schema + SLA agreement between producer and consumer |
| `schema_def` | Versioned schema definition (standalone, referenced by contracts) |
| `quality_rule` | Data quality assertion (completeness, uniqueness, freshness, accuracy) |
| `sla` | Service level agreement (freshness, availability, latency) |

Key fields:

| Field | Values | Required |
|---|---|---|
| `producer` | Domain or system that produces the data | Yes |
| `consumer` | Team or system consuming the data | Yes |
| `schema_version` | Semantic version string | Yes |
| `contract_state` | `draft \| proposed \| agreed \| enforced \| breached \| retired` | Yes |
| `enforcement` | `advisory \| enforced \| breaking` | Yes |
| `quality_threshold` | Human-readable quality requirement | Recommended |
| `change_protocol` | What happens when producer changes the schema | Recommended |

**Contract state lifecycle:**
```
draft → proposed → agreed → enforced
                         ↘ breached → (remediate) → enforced
                                    ↘ retired
```

### 4.5 Governance

**The question:** Who can access what, under what rules?

Governance covers the four enforcement mechanisms that protect data: access control, PII/SPII/PHI classification, retention rules, and regulatory compliance obligations. These aren't policy documents — they're architecture artifacts that link to specific domains, platforms, and flows.

| Artifact Type | Purpose |
|---|---|
| `pii_register` | Inventory of PII fields by domain, with legal basis |
| `spii_register` | Inventory of SPII/PHI/PCI fields — elevated risk |
| `access_policy` | Who can access which data, under what conditions |
| `retention_rule` | How long data is retained, under which regulation |
| `lineage_map` | End-to-end data lineage from source to consumer |
| `compliance_control` | Specific compliance obligation and its implementation |

Key fields:

| Field | Values | Required |
|---|---|---|
| `data_classification` | `public \| internal \| confidential \| restricted` | Yes |
| `legal_basis` | `consent \| legitimate-interest \| legal-obligation \| contract` | For PII |
| `regulation` | `GDPR \| CCPA \| HIPAA \| SOX \| PCI-DSS \| APRA \| state-law` | When applicable |
| `retention_period` | Duration and trigger (e.g. `7 years from claim close`) | For retention rules |
| `audit_required` | boolean — whether access must be logged for audit | When applicable |
| `depends_on` | Linked domain or platform IDs | Yes for lineage maps |

---

## § 5 File Structure

```
data-architecture/
└── examples/
    └── acme-insurance/
        ├── .prism-d/
        │   └── config.yaml          # meta: org, product, temporal_state, as_of
        ├── domains/
        │   └── landscape.yaml       # data_domain, data_product artifacts
        ├── flows/
        │   └── landscape.yaml       # pipeline, event_stream, sync artifacts
        ├── platforms/
        │   └── landscape.yaml       # data_lake, warehouse, feature_store artifacts
        ├── contracts/
        │   └── landscape.yaml       # data_contract, sla, quality_rule artifacts
        └── governance/
            └── landscape.yaml       # pii_register, access_policy, retention_rule, lineage_map
```

### config.yaml example

```yaml
prism_d_version: "1.0"
organization: "ACME, INC"
product: "Enterprise Data Architecture"
domain: multi-domain
scope: enterprise
temporal_state: baseline
as_of: "2025-01-01"
active_dimensions: [domains, flows, platforms, contracts, governance]
data_mesh_topology: federated-with-central-platform
primary_cloud: aws
```

---

## § 6 The Data Governance Loop

Data governance isn't a checkpoint — it's a continuous loop connecting domains, flows, platforms, and contracts.

```
Domain declares ownership
    ↓
Pipeline moves data (Flow)
    ↓
Data lands on Platform
    ↓
Contract governs the exchange
    ↓
Governance enforces access, retention, and compliance
    ↓
Lineage map proves the chain → audit / incident response
    ↑
Schema change → contract version bump → consumers notified
```

**Blast radius in PRISM/D:**

Select a source domain → see every downstream flow, platform, and consumer that depends on it. Select a data contract → see which AI model, BI report, or analytics pipeline breaks if the schema changes. The `depends_on` field on flows, contracts, and governance artifacts creates the traversable graph.

---

## § 7 Data Product Model

PRISM/D distinguishes between **data domains** (ownership units) and **data products** (served outputs). A data product is:

- Intentionally designed for a specific consumer
- Versioned with a schema contract
- Served with a declared SLA
- Owned by a domain team that is accountable for its quality

This is the Data Mesh data-as-a-product principle made concrete. The data product artifact links:
- Its owning domain
- Its upstream dependencies (source datasets/pipelines)
- Its consumers (downstream models, reports, APIs)
- Its active contract

---

## § 8 Cross-Referencing

PRISM/D connects to the broader PRISM framework family:

| Cross-reference | How |
|---|---|
| **PRISM (EA)** | Data flows appear as `data_contract` events in the Signal (S) layer; domains map to capabilities in the Reality (R) layer |
| **PRISM/I** | Platforms (lakes, warehouses, streams) are the storage artifacts in PRISM/I's State dimension; PRISM/D owns the data governance of those stores |
| **PRISM/A** | Application components that produce or consume data link to PRISM/D domains via declared data contracts |
| **PRISM/AI** | The AI Feature Store domain and feature vector data products link directly to model artifacts in PRISM/AI's Models dimension |
| **PRISM/MVP** | Market signals, experiment results, and learning artifacts in PRISM/MVP depend on analytics data products declared in PRISM/D |

Cross-referencing uses soft links — reference the ID of an artifact in the other framework. No circular imports, no tight coupling.

---

## § 9 PII / SPII / PHI Classification

All four sensitivity tiers are first-class in PRISM/D:

| Tier | Definition | Examples | Renderer chip |
|---|---|---|---|
| `pii` | Personally identifiable information | Name, email, address, date of birth, phone | 🔒 PII (blue) |
| `spii` | Sensitive PII — elevated risk on exposure | SSN, financial account numbers, biometrics, government ID | 🔐 SPII (red) |
| `phi` | Protected health information (HIPAA) | Medical records, diagnosis codes, treatment history | 🏥 PHI (green) |
| `pci` | Payment card industry data | Card numbers, CVV, cardholder data | 💳 PCI (amber) |

**data_classification** sets the baseline access tier:

| Classification | Meaning |
|---|---|
| `public` | Freely shareable, no access restrictions |
| `internal` | ACME employees only, no NDA required |
| `confidential` | Need-to-know basis, NDA or role-based access |
| `restricted` | Highest protection — PII/SPII/PHI + regulatory data |

---

## § 10 What PRISM/D Does Not Cover

| Excluded concern | Why | Where it belongs |
|---|---|---|
| Data quality implementation | PRISM/D declares quality thresholds in contracts; Great Expectations/dbt enforce them | Your data quality toolchain |
| Data catalog and search | PRISM/D is a design artifact, not a discovery tool | Collibra, Atlan, DataHub, or similar |
| BI report inventory | Reports are consumers of data products, not architecture | BI platform metadata |
| ML experiment tracking | Model training runs and experiment logs | MLflow, W&B, or PRISM/AI Lifecycle dimension |
| Live data monitoring | PRISM/D references monitoring SLAs; it doesn't run them | Observability stack or PRISM/AI Observability dimension |
| Database schema migration scripts | PRISM/D documents schema contracts; migrations are implementation | Flyway, Alembic, or dbt |

---

## § 11 Glossary

| Term | Definition |
|---|---|
| **Data domain** | A bounded context of data ownership, accountable for declared data products and SLAs |
| **Data product** | A versioned, intentionally designed dataset served to external consumers with a declared schema and SLA |
| **Data contract** | A formal agreement between a data producer and consumer specifying schema, quality, SLA, and change management |
| **Feature store** | A storage and serving system for ML model input features, providing point-in-time correctness and low-latency retrieval |
| **Lakehouse** | A storage architecture combining data lake scale (cheap object storage) with data warehouse query performance (table format like Delta Lake or Iceberg) |
| **Lineage map** | An end-to-end trace from data origin to consumption, enabling impact analysis and audit compliance |
| **PII** | Personally identifiable information — data that can identify a natural person |
| **SPII** | Sensitive PII — PII that carries elevated risk on exposure (SSN, biometrics, financial account numbers) |
| **PHI** | Protected health information — medical data protected under HIPAA |
| **Data mesh** | An organizational and architectural paradigm where domain teams own and serve their data as products |
| **Contract state** | The current enforcement status of a data contract: `draft → proposed → agreed → enforced` (or `breached` / `retired`) |
| **Blast radius** | The set of downstream artifacts that are impacted by a change to or failure of an upstream artifact |
