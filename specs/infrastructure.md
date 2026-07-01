# PRISM/I — Infrastructure Landscape Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/I is a framework for describing, governing, and evolving infrastructure landscapes. It answers a specific class of question that PRISM (Enterprise Architecture) does not: *what infrastructure runs the enterprise, who owns it, and where is it going?*

PRISM/I is intentionally vendor-agnostic. Cloud, on-premises, colocation, hybrid, bare-metal: all are valid PRISM/I subjects. AWS, GCP, Azure, VMware, Kubernetes, Nomad — these are implementations. PRISM/I describes the landscape they form, not the technology itself.

### Relationship to PRISM (Enterprise Architecture)

PRISM EA and PRISM/I are independent frameworks. They share authoring conventions but have separate dimensions, artifact types, and schemas.

| Concern | Framework |
|---------|-----------|
| Stakeholders, capabilities, intent, signals, movement | PRISM (Enterprise Architecture) |
| Teams, accounts, compute, data, networking, delivery | PRISM/I (Infrastructure) |

PRISM EA's `Reality/systems` dimension lists *what* systems exist. PRISM/I describes *how* those systems are hosted, connected, and operated. They cross-reference by system ID but neither imports the other's schema.

---

## 2. The Six Dimensions

PRISM/I organizes infrastructure concerns into six dimensions. Each dimension answers one question.

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Who** | Who owns this infrastructure? | Teams and providers responsible for infrastructure |
| **Where** | Where does it run? | Accounts, regions, environments, network zones |
| **Runtime** | What executes? | Compute, containers, functions, messaging, orchestration |
| **State** | What persists? | Databases, object storage, caches, data streams |
| **Control** | What governs access and traffic? | Networking, IAM, secrets, service mesh, certificates |
| **Operations** | How is it delivered and observed? | CI/CD, registries, monitoring, logging, tracing, alerting |

### Why six and not more?

**Who and Where are separate** because ownership and location answer different governance questions. Who owns infrastructure (team accountability) is independent of where it runs (region, compliance zone, jurisdiction). Splitting them makes ownership auditable separately from geography — particularly important when compliance zones (GDPR EU regions, SOX-scoped accounts) need to be queryable independently of team structure.

**Runtime and State are separate** because execution and persistence have different failure modes, scaling concerns, and ownership patterns. Conflating them produces landscapes where "the database" and "the service that queries it" share the same operational thinking — they don't.

**Control stands alone** because access and network policy are cross-cutting. A firewall rule spans Runtime *and* State. IAM governs all dimensions. Burying Control inside another dimension obscures the governance surface.

**Operations is last** because it operates on everything above it. CI/CD pipelines deploy Runtime. Monitoring covers State and Control. A separate dimension makes it possible to audit the delivery and observability posture independently.

---

## 3. Foundational Principles

PRISM/I inherits three principles from PRISM EA. They are not optional.

### 3.1 YAML for Artifacts, JSON for Schemas

Landscapes are authored in YAML. Schemas (validation rules) are in JSON Schema format.

YAML because infrastructure landscapes must be readable and writable by platform engineers, SREs, security teams, and architects — not just developers. Comments, block scalars, and minimal syntax noise matter.

JSON Schema because validation tooling (`ajv`, IDE plugins, CI validators) expects it.

### 3.2 Git-Native Governance

| Git concept | PRISM/I meaning |
|-------------|-----------------|
| Branch | Exploration of an infrastructure change |
| Commit | A provisioning or configuration decision |
| Pull request | Governance review (security, cost, compliance) |
| Tag | Published baseline or target landscape |
| Diff | Change impact analysis |
| History | Audit trail for infrastructure decisions |

PRISM/I landscapes live in git. No separate CMDB export step required.

### 3.3 Ownership Model

Every artifact in a PRISM/I landscape declares an owner.

| Ownership | Meaning |
|-----------|---------|
| `self` | Owned and operated by the primary organization's core teams |
| `internal` | Owned by another team or division within the same organization |
| `external` | Owned by a third party, vendor, or external authority |

Ownership determines who is responsible for the artifact's availability, security posture, and cost. It is not the same as who *uses* an artifact.

### 3.4 Temporal Axis

Every PRISM/I landscape is timestamped and positioned on a temporal axis.

| State | Meaning |
|-------|---------|
| `baseline` | Current as-is state, verified at `as_of` date |
| `transition` | Change in progress — baseline partially replaced |
| `target` | Desired to-be state, not yet fully realized |

A landscape in `transition` state documents *both* what exists now and what it is becoming. This is how PRISM/I captures migrations in flight — cloud migrations, platform consolidations, region expansions — without requiring a separate "future state" document.

---

## 4. Dimensions — Artifact Types

### 4.1 Who

| Artifact type | Description |
|---------------|-------------|
| `team` | Engineering, platform, or operations team responsible for infrastructure |
| `provider` | Infrastructure provider: AWS, GCP, Azure, on-prem datacenter, colocation facility |

### 4.2 Where

| Artifact type | Description |
|---------------|-------------|
| `account` | Cloud account, project, subscription, or on-prem tenant |
| `region` | Geographic deployment location |
| `environment` | Logical deployment environment: production, staging, development, DR |
| `network_zone` | Network boundary at the organization level: corp, dmz, restricted |

### 4.3 Runtime

| Artifact type | Description |
|---------------|-------------|
| `cluster` | Container orchestration cluster: Kubernetes, ECS, Nomad |
| `node_pool` | Group of compute nodes within a cluster |
| `service` | Long-running workload: microservice, API, background worker |
| `job` | Batch or scheduled workload |
| `function` | Serverless function or FaaS unit |
| `vm` | Virtual machine or instance outside cluster orchestration |
| `queue` | Message queue: SQS, RabbitMQ, Azure Service Bus |
| `topic` | Pub/sub topic or event stream: Kafka topic, SNS topic, Pub/Sub topic |
| `stream` | Ordered event stream with retention: Kafka, Kinesis, EventHub |
| `workflow_engine` | Workflow orchestration platform: Temporal, Airflow, Step Functions |

### 4.4 State

| Artifact type | Description |
|---------------|-------------|
| `database` | Relational, document, graph, time-series, or wide-column store |
| `object_store` | Object/blob storage: S3, GCS, Azure Blob |
| `file_system` | Network-attached or distributed file system: EFS, NFS, GCS FUSE |
| `cache` | In-memory cache or distributed cache: Redis, Memcached, DAX |
| `data_warehouse` | Analytical store: Snowflake, BigQuery, Redshift |
| `data_lake` | Raw data repository: S3-based, Delta Lake, GCS bucket |
| `search_index` | Full-text or vector search: Elasticsearch, OpenSearch, Pinecone |
| `backup` | Backup target or snapshot policy |

### 4.5 Control

| Artifact type | Description |
|---------------|-------------|
| `vpc` | Virtual private cloud, VNet, or equivalent network boundary |
| `subnet` | Subnet within a VPC — public, private, or isolated |
| `peering` | VPC peering, transit gateway, or cross-network link |
| `load_balancer` | Layer 4 or Layer 7 load balancer, API gateway |
| `cdn` | Content delivery network edge |
| `service_mesh` | East-west traffic control: Istio, Linkerd, Consul Connect |
| `dns` | DNS zone or resolver: Route53, Cloud DNS, internal DNS |
| `certificate` | TLS/SSL certificate or PKI authority |
| `iam_role` | IAM role, service account, or workload identity |
| `iam_policy` | Permission policy governing one or more roles |
| `secret_store` | Secrets management: Vault, AWS Secrets Manager, Azure Key Vault |
| `firewall_rule` | Security group, NACL, WAF rule, or firewall policy |

### 4.6 Operations

| Artifact type | Description |
|---------------|-------------|
| `pipeline` | CI/CD pipeline: GitHub Actions, Jenkins, Tekton, CircleCI |
| `registry` | Container or artifact registry: ECR, GCR, Artifactory, Harbor |
| `infrastructure_code` | IaC module or stack: Terraform, Pulumi, CDK, Helm chart |
| `metrics` | Metrics collection and storage: Prometheus, CloudWatch, Datadog |
| `logging` | Log aggregation: ELK, Loki, Splunk, CloudWatch Logs |
| `tracing` | Distributed tracing: Jaeger, Zipkin, Tempo, X-Ray |
| `alerting` | Alert routing and on-call: PagerDuty, OpsGenie, Alertmanager |
| `dashboard` | Observability dashboard: Grafana, Datadog dashboard, CloudWatch dashboard |
| `runbook` | Operational procedure or incident response document |
| `slo` | Service level objective definition |
| `chaos` | Chaos engineering tooling: Chaos Monkey, LitmusChaos, Gremlin |

---

## 5. File Structure

A PRISM/I landscape is a directory with one YAML file per dimension.

```
<org-name>/
  .prism-i/
    config.yaml           # landscape metadata
  who/
    landscape.yaml
  where/
    landscape.yaml
  runtime/
    landscape.yaml
  state/
    landscape.yaml
  control/
    landscape.yaml
  operations/
    landscape.yaml
```

### `.prism-i/config.yaml`

```yaml
prism_i_version: "1.0"
organization: "ACME, INC"
domain: insurance
scope: enterprise
temporal_state: baseline     # baseline | transition | target
as_of: "2025-01-01"
active_dimensions:
  - who
  - where
  - runtime
  - state
  - control
  - operations
```

### Dimension landscape file structure

```yaml
# who/landscape.yaml
dimension: who
as_of: "2025-01-01"
temporal_state: baseline

teams:
  - id: team-platform
    name: "Platform Engineering"
    ownership: self
    type: team
    ...

providers:
  - id: prov-aws
    name: "Amazon Web Services"
    ownership: external
    type: provider
    ...
```

```yaml
# where/landscape.yaml
dimension: where
as_of: "2025-01-01"
temporal_state: baseline

accounts:
  - id: acct-aws-prod
    name: "AWS Production Account"
    ownership: self
    type: account
    provider: aws
    ...

regions:
  - id: reg-us-east-1
    name: "US East (N. Virginia)"
    type: region
    provider: prov-aws
    ...
```

Each dimension file uses its artifact type as the top-level key (plural). Artifacts within each section follow the same pattern: `id`, `name`, `type`, `ownership`, plus dimension-specific fields.

---

## 6. Artifact Fields

### Required fields (all artifact types)

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique within the landscape. Kebab-case. |
| `name` | string | Human-readable display name |
| `type` | string | Artifact type from the dimension's type list |
| `ownership` | enum | `self` \| `internal` \| `external` |

### Common optional fields

| Field | Type | Description |
|-------|------|-------------|
| `description` | string | Prose description |
| `tags` | string[] | Free-form labels |
| `status` | enum | `active` \| `deprecated` \| `planned` \| `decommissioning` |
| `temporal_state` | enum | Override landscape-level temporal state for this artifact |
| `links` | object | Cross-references to PRISM EA artifacts by ID |
| `notes` | string | Free-form annotation |
| `data_sensitivity` | string[] | Data categories this artifact processes or stores: `pii` \| `spii` \| `phi` \| `pci`. Most relevant on State dimension artifacts (databases, object stores, data warehouses) and Control dimension artifacts (IAM roles protecting sensitive data, secret stores). |
| `compliance_frameworks` | object[] | Compliance frameworks applicable to this artifact. Array of `{framework, scope, status}` objects. Same structure as PRISM EA §10.3. Framework values: `GDPR`, `SOX`, `HIPAA`, `PCI-DSS`, `ISO-27001`, `SOC2`, `CCPA`, `FedRAMP`, `other`. |

### Cross-referencing PRISM EA

A PRISM/I artifact can reference a PRISM EA artifact by its ID using the `links` field:

```yaml
- id: svc-claims-api
  name: "Claims API"
  type: service
  ownership: self
  links:
    prism_ea_system: sys-claims-portal   # ID in PRISM EA Reality/systems
```

This is a soft reference — no schema enforcement across frameworks. PRISM/I does not import PRISM EA's schemas.

---

## 7. Temporal Representation

Infrastructure landscapes change constantly. PRISM/I captures change at the artifact level, not just the landscape level.

```yaml
# runtime/landscape.yaml
temporal_state: transition    # landscape is mid-migration

services:
  - id: svc-billing-zos
    name: "Legacy Billing z/OS"
    type: vm
    ownership: self
    status: decommissioning
    temporal_state: baseline   # this artifact is the old state

  - id: svc-billing-k8s
    name: "Billing Service (Kubernetes)"
    type: service
    ownership: self
    status: active
    temporal_state: target     # this artifact is the target state
```

A landscape in `transition` state shows baseline and target artifacts side by side. The diff between them is the migration.

---

## 8. Validation

PRISM/I landscapes validate against JSON Schemas in `schemas/`.

| Schema file | Validates |
|-------------|-----------|
| `config.schema.json` | `.prism-i/config.yaml` |
| `who.schema.json` | `who/landscape.yaml` |
| `where.schema.json` | `where/landscape.yaml` |
| `runtime.schema.json` | `runtime/landscape.yaml` |
| `state.schema.json` | `state/landscape.yaml` |
| `control.schema.json` | `control/landscape.yaml` |
| `operations.schema.json` | `operations/landscape.yaml` |

---

## 9. What PRISM/I Does Not Cover

- **Application architecture** — service-to-service dependencies, API contracts, domain models. These belong in PRISM EA (Signal layer) or architecture decision records.
- **Cost management** — cloud billing, reserved instance tracking, chargeback. PRISM/I captures artifact ownership (which enables cost attribution) but is not a cost tool.
- **Runbook content** — PRISM/I records that a runbook *exists* as an artifact. The runbook itself lives in your wiki or docs system.
- **Real-time state** — PRISM/I is a landscape description, not a live inventory. It describes what *should* be true as of `as_of`. For live state, use your cloud provider's asset inventory or a CMDB.
