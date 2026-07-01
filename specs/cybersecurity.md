# PRISM/CY — Cybersecurity Landscape Framework

Version: 1.0.0
Status: Draft
Licence: CC BY-SA 4.0

---

## 1. Overview

PRISM/CY is a framework for describing, governing, and evolving an organization's cybersecurity posture as a landscape. It answers a class of question that no existing security framework addresses: *what does our security posture look like right now, as a structured, navigable landscape?*

Existing security frameworks — NIST CSF, ISO 27001, SOC 2, CIS Controls — are **control checklists**. They tell you which controls you should have, and whether you've implemented them. They do not describe your actual landscape: which identities have access to what, what your attack surface looks like, what threats are actively targeting which surfaces, and how your posture is evolving over time.

PRISM/CY fills that gap. It is a text-first, git-native, schema-validated landscape description that any organization can author, version, and validate — without proprietary tooling.

### What PRISM/CY is not

- Not a control framework. It does not prescribe controls or measure gap-to-standard. Use NIST CSF or ISO 27001 for that.
- Not a live CSPM (Cloud Security Posture Manager). PRISM/CY describes the landscape as of `as_of`. For live drift detection, use Prisma Cloud, Wiz, or equivalent.
- Not a penetration testing methodology. PRISM/CY models your understanding of the attack surface; it doesn't enumerate all possible exploits.
- Not a ticketing system. Security programs and findings reference remediation work; they don't replace it.

### Relationship to PRISM (Enterprise Architecture)

PRISM/CY and PRISM EA are independent frameworks. They share authoring conventions and cross-reference by artifact ID.

| Concern | Framework |
|---------|-----------|
| Stakeholders, capabilities, systems, intent, signals, movement | PRISM EA |
| Identities, attack surface, controls, threats, posture | PRISM/CY |

PRISM EA's `Reality/systems` lists what systems exist. PRISM/CY's `Surface` dimension describes which of those systems are exposed and how. Cross-reference using the `prism_ea_system` link field — no schema enforcement, soft reference by ID.

### Relationship to PRISM/I (Infrastructure)

PRISM/I describes how infrastructure runs. PRISM/CY describes how it's secured. The relationship is:

- PRISM/I `Control` dimension: network-level controls (VPCs, firewalls, IAM policies, certificates)
- PRISM/CY `Controls` dimension: the full security control posture — technical + organizational

They overlap at network controls. Cross-reference PRISM/I control artifacts using the `prism_i_artifact` link field.

---

## 2. Foundational Principles

PRISM/CY inherits three principles from PRISM EA.

### 2.1 YAML for Artifacts, JSON for Schemas

Security landscapes are authored in YAML. Schemas are in JSON Schema format. YAML because security teams, architects, GRC analysts, and CISOs need to read and write these files — not just developers. Comments, block scalars, and minimal syntax noise matter.

### 2.2 Git-Native Governance

| Git concept | PRISM/CY meaning |
|-------------|-----------------|
| Branch | Exploration of a security posture change |
| Commit | A security decision or remediation step |
| Pull request | Security review — architecture, GRC, CISO sign-off |
| Tag | Published security baseline |
| Diff | Security posture change analysis |
| History | Audit trail for security decisions |

Security posture in a git repo means: every posture change is a commit with an author, timestamp, and reviewers. This is more auditable than a spreadsheet.

### 2.3 Temporal Axis

Every PRISM/CY landscape is positioned on a temporal axis.

| State | Meaning |
|-------|---------|
| `baseline` | Current as-is posture, verified at `as_of` date |
| `transition` | Posture in flux — remediation underway, migration in progress |
| `target` | Desired future posture, not yet fully realized |

Artifacts declare their own temporal state. A control being retired is `decommissioning`. A planned control is `planned`. The combination of artifact-level states describes the migration from current to target posture.

### 2.4 Who & Where is Inherited

Security teams and organizational structure live in PRISM EA's P layer. PRISM/CY does not duplicate stakeholders or geographies. It references them by ID.

This is intentional: the organization chart, geography, and jurisdiction structure is the same whether you're describing EA or security posture. PRISM/CY focuses on the security-specific concerns.

---

## 3. The Five Dimensions

| Dimension | Question | Scope |
|-----------|----------|-------|
| **Identity** | Who and what has access, and how? | IAM roles, service accounts, external identities, privileged access |
| **Surface** | What is exposed? | Public endpoints, internal APIs, legacy interfaces, data exposure points |
| **Controls** | What's protecting it? | Technical controls (WAF, SIEM, MFA, CSPM), organizational controls (policies, training) |
| **Threats** | What's threatening it? | Threat actors, active risks, EOL risks, AI risks, supply chain risks, regulatory risks |
| **Posture** | Where do we stand? | Compliance framework status, maturity, open programs, remediation trajectory |

### Why five?

**Identity stands alone** because identity is the new perimeter. In a cloud-native, zero-trust world, network boundaries are secondary to identity boundaries. Who (or what) has a credential matters more than where the traffic originates.

**Surface is separate from Identity** because exposure and access are different concerns. A system can be exposed without a credential (e.g., a misconfigured public S3 bucket). A credential can exist without a public exposure. Surface describes the shape of the attack surface; Identity describes who has keys to it.

**Controls stands alone** because controls are the defensive response. They span Identity (MFA enforces it), Surface (WAF protects it), and Threats (SIEM detects them). Burying controls inside another dimension obscures the governance question: "what's actually protecting us?"

**Threats stands alone** because active threat intelligence is a separate concern from the landscape it targets. A threat actor doesn't become irrelevant because the surface is patched — it stays in the landscape as a documented risk. Threats reference Surfaces and Identities but are not subordinate to them.

**Posture is last** because it synthesizes the other four. Posture artifacts describe where the organization stands relative to external compliance frameworks, and which programs are addressing identified gaps.

---

## 4. Dimensions — Artifact Types

### 4.1 Identity

| Artifact type | Description |
|---------------|-------------|
| `iam_role` | IAM role: AWS IAM role, Azure AD role, GCP service account role, Okta group |
| `service_account` | Non-human identity: CI/CD service account, workload identity, application service user |
| `external_identity` | Third-party or partner identity with system access |
| `privileged_access` | Privileged account: local admin, break-glass access, root credentials |
| `federation` | Federated identity configuration: SAML IdP, OIDC provider, SSO integration |

**Key fields on identity artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| `mfa_enforced` | `true` \| `false` | Whether MFA is required for this identity |
| `access_level` | `read` \| `write` \| `admin` \| `privileged` | Scope of access granted |
| `pam_controlled` | `true` \| `false` | Whether access is managed through PAM tooling |
| `data_sensitivity` | string[] | Data categories this identity is authorized to access: `pii` \| `spii` \| `phi` \| `pci` |
| `prism_ea_stakeholder` | string | Reference to PRISM EA stakeholder ID |

### 4.2 Surface

| Artifact type | Description |
|---------------|-------------|
| `public_endpoint` | Internet-facing endpoint: HTTPS, API gateway, webhook receiver |
| `internal_endpoint` | Private endpoint: VPC-internal API, service mesh endpoint |
| `legacy_interface` | Pre-modern interface: JCL batch, SFTP, mainframe terminal |
| `data_exposure_point` | Where data leaves a boundary: export API, partner data feed, S3 presigned URL |
| `admin_console` | Administrative interface: cloud console access, bastion host |

**Key fields on surface artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| `direction` | `inbound` \| `outbound` \| `bidirectional` | Traffic flow direction |
| `authentication` | `none` \| `api-key` \| `oauth2` \| `saml` \| `mfa-required` | Authentication mechanism |
| `waf_protected` | `true` \| `false` | Whether a WAF sits in front |
| `data_sensitivity` | string[] | Data categories this surface can expose: `pii` \| `spii` \| `phi` \| `pci` |
| `prism_ea_system` | string | Reference to PRISM EA system ID |

### 4.3 Controls

| Artifact type | Description |
|---------------|-------------|
| `technical_control` | Technology-implemented control: WAF, MFA, SIEM, CSPM, DLP, EDR, encryption |
| `org_control` | Organizationally-implemented control: access reviews, security training, vendor assessments, policy |
| `detective_control` | Control focused on detection: SIEM rules, anomaly detection, alerting thresholds |
| `preventive_control` | Control focused on prevention: WAF rules, IAM boundaries, network segmentation |
| `corrective_control` | Control focused on response: incident playbooks, auto-remediation, backup + restore |

**Key fields on control artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| `control_function` | `identify` \| `protect` \| `detect` \| `respond` \| `recover` | NIST CSF function alignment |
| `coverage` | `full` \| `partial` \| `planned` | How broadly this control is applied |
| `vendor` | string | Tool or service vendor implementing this control |

### 4.4 Threats

| Artifact type | Description |
|---------------|-------------|
| `threat` | Active or assessed threat: APT, insider, supply chain, regulatory, AI risk, EOL risk |
| `vulnerability` | Known vulnerability: CVE, misconfiguration, architectural weakness |
| `risk` | Assessed risk combining threat + likelihood + impact |

**Key fields on threat artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| `threat_category` | `external-actor` \| `insider` \| `supply-chain` \| `regulatory` \| `ai-risk` \| `eol-risk` \| `credential` | Type of threat |
| `likelihood` | `critical` \| `high` \| `medium` \| `low` | Assessed likelihood of exploitation |
| `impact` | `critical` \| `high` \| `medium` \| `low` | Business impact if exploited |
| `mitigated_by` | string[] | IDs of controls that mitigate this threat |

**Dependency modeling in Threats:**

Threat artifacts use `depends_on` to link to the surfaces, identities, or controls they exploit or reference. This enables blast radius analysis:

- Selecting a surface shows which threats target it (impacted threats)
- When a surface is decommissioned, linked threats light up as "at risk of becoming unresolvable" — the threat record may need closure or reassignment

```yaml
- id: threat-zos-eol
  type: threat
  threat_category: eol-risk
  depends_on: [surf-zos-jcl-batch]   # threat tied to this surface
  # if surf-zos-jcl-batch decommissions, this threat should be closed
```

### 4.5 Posture

| Artifact type | Description |
|---------------|-------------|
| `compliance` | Compliance framework status: GDPR, SOX, ISO 27001, SOC 2, PCI-DSS |
| `maturity_assessment` | Security maturity score against a framework domain |
| `security_program` | Active security remediation or improvement program |
| `finding` | Open finding from audit, pen test, or CSPM scan |

**Key fields on posture artifacts:**

| Field | Values | Meaning |
|-------|--------|---------|
| `framework` | `GDPR` \| `SOX` \| `ISO-27001` \| `SOC2` \| `PCI-DSS` \| `NIST-CSF` \| `HIPAA` \| etc. | Compliance framework |
| `status` | `certified` \| `in-progress` \| `applicable` \| `exempt` | Framework compliance status |
| `maturity_level` | `initial` \| `defined` \| `managed` \| `optimized` | Maturity rating |
| `target_date` | date | Target completion date for in-progress items |

---

## 5. File Structure

```
<org-name>/
  .prism-cy/
    config.yaml             # landscape metadata
  identity/
    landscape.yaml
  surface/
    landscape.yaml
  controls/
    landscape.yaml
  threats/
    landscape.yaml
  posture/
    landscape.yaml
```

### `.prism-cy/config.yaml`

```yaml
prism_cy_version: "1.0"
organization: "ACME, INC"
description: "Cybersecurity landscape — insurance operations, cloud migration"
domain: insurance
scope: enterprise
temporal_state: transition     # mid cloud migration; security posture in flux
as_of: "2025-01-01"
active_dimensions:
  - identity
  - surface
  - controls
  - threats
  - posture
security_frameworks:
  - GDPR
  - SOX
  - ISO-27001
```

### Dimension landscape file

```yaml
# identity/landscape.yaml
dimension: identity
as_of: "2025-01-01"
temporal_state: transition

iam_roles:
  - id: role-soc-analyst
    name: "SOC Analyst"
    type: iam_role
    ownership: self
    access_level: read
    mfa_enforced: true
    ...

service_accounts:
  - id: svc-acct-claims-ai
    name: "AI Claims Triage Service Account"
    type: service_account
    ownership: self
    pam_controlled: false
    ...
```

Each dimension file uses its artifact type as the top-level key (plural). The `id` must be unique within the landscape.

---

## 6. Cross-Referencing

PRISM/CY artifacts can reference artifacts from other PRISM frameworks using `links`:

```yaml
- id: surf-claims-portal
  type: public_endpoint
  links:
    prism_ea_system: sys-claims-portal    # PRISM EA Reality/systems
    prism_i_artifact: svc-claims-api      # PRISM/I Runtime/services
```

Cross-references are soft — no schema enforcement across frameworks. PRISM/CY does not import other frameworks' schemas.

---

## 7. Dependency Modeling and Blast Radius

PRISM/CY supports `depends_on` on all artifact types. The key use cases:

**Threat → Surface:** A threat depends on the surface it exploits. When the surface decommissions, the threat record should be closed.

**Security program → Threat:** A remediation program depends on the threat it addresses. When the threat is resolved, the program can be closed.

**Identity → Control:** A privileged identity depends on the PAM control managing it. If the control is decommissioned, the identity is unmanaged.

Blast radius analysis surfaces these relationships visually. Select any artifact to see what depends on it (impacted) and what it depends on (upstream).

---

## 8. Temporal Representation

```yaml
# threats/landscape.yaml
temporal_state: transition

threats:
  - id: threat-zos-eol
    name: "z/OS EOL Risk"
    type: threat
    status: active
    temporal_state: baseline   # this threat exists in current state
    target_resolution: "2025-12-31"

  - id: threat-zos-eol-resolved
    name: "z/OS EOL Risk (resolved)"
    type: threat
    status: decommissioned
    temporal_state: target      # when migration completes, this threat closes
```

---

## 9. What PRISM/CY Does Not Cover

- **Live security posture.** PRISM/CY is a landscape description, not a real-time dashboard. For live drift detection, use Wiz, Prisma Cloud, or equivalent.
- **Penetration test methodology.** PRISM/CY models your understanding of the surface; it doesn't enumerate all possible exploit paths.
- **Security event data.** PRISM/CY records that a SIEM exists and what it covers; the actual alerts live in your SIEM.
- **Detailed access policies.** PRISM/CY captures the *shape* of IAM (which roles exist, what access level, whether MFA-enforced); specific policy JSON/YAML lives in your IaC repo.
