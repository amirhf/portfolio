# Portfolio to Company Website Transition Plan

## Goal

Turn the current Amir Firouz portfolio into a company website for AandZ.tech: the public website for A&Z Technology Solutions, a small specialist AI, cloud, and distributed-systems engineering studio led by Amir Firouzmanesh.

The new site should feel like a credible consulting company, while still using Amir's experience, achievements, and project work as the main trust signal.

## Resolved Brand Decisions

- Legal company name: `A&Z Technology Solutions`.
- Public website brand: `AandZ.tech`.
- Domain: `https://aandz.tech`.
- Company model: small specialist studio, founder-led by Amir.
- Voice: use "we" across the site, including founder-led sections.
- Contact CTA: use the existing form-to-email flow rather than an external scheduling tool.
- Public logos: Microsoft and AWS logos can be used where they clearly refer to founder experience.
- Public claims: Microsoft, AWS, and Property Finder claims are approved for public wording.

## Current State

The site already contains most of the raw material for the company version:

- A company name appears in the homepage hero: `AandZ.tech`.
- The service areas are already defined on `/services`.
- Strong proof points already exist:
  - Microsoft Windows Photos AI features contributed to roughly `+20%` MAU.
  - Property Finder credits/subscriptions work reduced support tickets by more than `50%`.
  - AWS work covers RDS SQL Server security features and Marketplace reporting pipelines.
  - DataGardens/DR automation improved onboarding from `1h` to `10m`.
- The projects section already contains a good mix of:
  - Real employment/customer-scale achievements.
  - Reference implementations that demonstrate consulting patterns.
- The current brand still reads as an individual portfolio because of labels like:
  - `Amir Firouz - Portfolio`
  - `Independent Senior Software Engineer`
  - Footer copy centered on Amir rather than AandZ.tech.

## Target Positioning

Recommended positioning:

> AandZ.tech helps product and platform teams ship reliable AI features, resilient distributed systems, and cloud architecture that can survive production.

Shorter homepage version:

> AI and cloud engineering for teams that need production systems, not prototypes.

Founder-led credibility line:

> A small specialist studio led by Amir Firouzmanesh, a senior software engineer with experience shipping AI and platform systems at Microsoft, AWS, Property Finder, and DataGardens.

## Brand Tone

The site should sound like a serious specialist firm, not a generic agency.

Use:

- "AandZ.tech" for the company and service promises.
- "We" throughout the site for company capabilities, delivery process, client outcomes, and founder-led sections.
- "Amir" only when naming the founder's background, experience, or technical leadership directly.
- "Small specialist studio" when describing the company model.
- Concrete engineering language: latency, reliability, cost, observability, service boundaries, production readiness.
- Outcome-driven phrasing: ship, stabilize, reduce risk, reduce cost, improve reliability, unblock teams.

Avoid:

- Implying AandZ.tech is a large agency or current Microsoft/AWS partner.
- Generic agency language like "digital transformation" or "world-class solutions."
- Making every section about Amir personally.
- Hiding Amir entirely, because his background is the strongest proof asset.

Suggested phrasing pattern:

> AandZ.tech is a small specialist engineering studio. We are founder-led by Amir Firouzmanesh, with senior technical leadership at the center of every engagement and trusted specialists brought in when a project needs additional capacity.

## Audience

Primary audience:

- CTOs, VPs of Engineering, Heads of Product, and founders at SaaS, marketplace, fintech, real estate, retail, and AI-enabled product companies.

Likely buying triggers:

- "We need to add AI features, but our team is worried about cost, latency, hallucinations, and production risk."
- "Our credit, billing, or entitlement logic is becoming fragile."
- "We are moving from monolith to services and need clean boundaries."
- "Our reporting or data pipelines are hard to trust."
- "We need a senior/principal engineer for a short, high-leverage engagement."

## Service Architecture

Keep the existing service areas, but package them with clearer commercial framing.

### 1. AI Product Integration

Current basis: AI Integration & GenAI Product Features.

Position as:

> Practical LLM, RAG, agent, image, and search features that fit existing products without becoming research projects.

Offer examples:

- AI assistants and copilots.
- RAG and grounded generation.
- Agent workflows with structured outputs.
- Image/content AI features.
- AI feature routing for latency and cost control.
- Evaluation, telemetry, fallback, and guardrail design.

Proof to attach:

- Microsoft Windows Photos AI.
- LearnPath.
- Retail AI / Feature Router.
- Writing post on local-first AI.

### 2. Distributed Systems & Microservices

Current basis: Event-Driven Systems & Microservices.

Position as:

> Event-driven architectures, service boundaries, and reliable workflows for teams outgrowing fragile backends.

Offer examples:

- Domain and service boundary reviews.
- CQRS and transactional outbox implementation.
- Idempotent consumers and retry-safe workflows.
- Kafka, RabbitMQ, SQS/SNS, Kinesis, and Redpanda patterns.
- Observability for distributed flows.

Proof to attach:

- Credit Ledger.
- Property Finder credits/subscriptions.
- Writing post on outbox/idempotency.

### 3. Cloud, Data & Reporting Architecture

Current basis: AWS & Cloud Architecture plus Data, Reporting & Analytics Pipelines.

Position as:

> Cloud architecture and data pipelines that are secure, observable, and understandable by the team that has to operate them.

Offer examples:

- AWS architecture reviews.
- RDS/Aurora, S3, ECS/EKS/Lambda, API Gateway.
- ETL and reporting reliability.
- Usage, billing, and marketplace analytics.
- Data contracts, late-event handling, report SLAs.

Proof to attach:

- AWS RDS SQL Server.
- AWS Marketplace seller reporting.
- Property Finder analytics/credits.

### 4. Fractional Principal Engineer

Current basis: Architecture Reviews & Mentoring.

Position as:

> Senior technical leadership for teams that need a principal/staff-level engineer for a focused period.

Offer examples:

- Architecture reviews.
- Design doc coaching.
- Technical roadmap support.
- Code review and risk assessment.
- Mentoring for tech leads and senior ICs.
- Delivery leadership for 3-12 week engagements.

Proof to attach:

- Microsoft, AWS, Property Finder, DataGardens career narrative.
- Reference architectures as examples of thinking quality.

## Recommended Site Structure

### Home

Purpose: convert visitors quickly by explaining what AandZ.tech does, why it is credible, and what action to take.

Recommended sections:

1. Hero
  - Brand: `AandZ.tech`
   - Headline: production AI, cloud, and distributed systems.
   - Small specialist studio trust line.
   - CTAs: `Start a project` and `View case studies`.
2. Trust strip
   - Microsoft, AWS, Property Finder, DataGardens.
   - Use Microsoft and AWS logos only under a clear label such as `Founder experience includes`.
3. Service cards
   - AI Product Integration.
   - Distributed Systems & Microservices.
   - Cloud, Data & Reporting Architecture.
   - Fractional Principal Engineer.
4. Proof metrics
   - `+20%` MAU, `-50%` support tickets, `1h -> 10m` onboarding.
5. Featured case studies
   - Windows Photos AI.
   - Credit Ledger.
   - Retail AI Feature Router.
   - LearnPath.
6. Engagement model
   - Discovery.
   - Architecture/prototype.
   - Production hardening.
   - Handover/mentoring.
7. Final CTA
   - `Tell us about your project`.

### Services

Purpose: help buyers recognize their problem and understand what an engagement could look like.

Recommended changes:

- Convert the current six service cards into four stronger service groups.
- Add "Typical engagement" under each group:
  - Strategy sprint: 1-2 weeks.
  - Prototype/MVP: 3-6 weeks.
  - Production hardening: 4-8 weeks.
  - Fractional principal support: monthly retainer or fixed scope.
- Add "Best fit when..." bullets for each service.
- Add linked proof beneath each service.

### Projects / Case Studies

Purpose: shift from portfolio gallery to company proof.

Recommended changes:

- Rename page from `Projects` to `Case Studies`.
- Split projects into two categories:
  - `Industry Work`: Microsoft Photos AI, AWS RDS/Marketplace, Property Finder credits.
  - `Reference Architectures`: Credit Ledger, Retail AI Feature Router, LearnPath.
- For each case card, show:
  - Business problem.
  - Technical approach.
  - Result or proof point.
  - Related service.
- Fix empty project link for Property Finder by either adding a full case page or making the card non-clickable until ready.

### About

Purpose: explain the company model and make Amir's background feel like an advantage, not a portfolio leftover.

Recommended sections:

1. Company intro
   - AandZ.tech is the public brand of A&Z Technology Solutions, a small specialist engineering studio based in the UAE.
2. Why founder-led
   - Direct senior involvement, faster decisions, fewer handoffs, and the ability to bring in trusted specialists when needed.
3. Amir's background
   - Microsoft, AWS, Property Finder, DataGardens.
   - PhD and senior engineering experience.
4. Working principles
   - Production over prototypes.
   - Observable systems.
   - Clear service boundaries.
   - Practical AI.
   - Documentation and handover.
5. Technology stack
   - Keep the existing stack list, but make it secondary.

### Contact

Purpose: collect qualified project leads.

Recommended changes:

- Retitle from `Tell me about your project` to `Start a project with AandZ.tech`.
- Route primary CTAs to the contact form instead of an external scheduling tool.
- Replace any "Book a 20-min call" placeholder link with a form link or remove it.
- Add a `service interest` field:
  - AI Product Integration.
  - Distributed Systems.
  - Cloud/Data Architecture.
  - Fractional Principal Engineer.
  - Not sure yet.
- Keep budget range and deadline fields.
- Add expectation-setting microcopy:
  - "You will hear back within 1-2 business days."
  - "Best fit: focused projects, architecture reviews, MVPs, and production hardening."

### Writing

Purpose: support authority and SEO.

Recommended changes:

- Rename navigation label to `Insights` or keep `Writing` if you want a more personal feel.
- Frame posts as field notes from AandZ.tech.
- Add posts that map to buying concerns:
  - "When to Use RAG vs Fine-Tuning for Product Features"
  - "The AI Feature Router Pattern"
  - "How to Design Credits Without Spreadsheet Chaos"
  - "A Practical Outbox Pattern for SaaS Platforms"
  - "What CTOs Should Ask Before Adding Agents to Production"

## Navigation and Branding Changes

Recommended header:

- Logo/wordmark: `AandZ.tech`
- Small suffix if needed: `AI & Cloud Engineering`
- Navigation:
  - Services
  - Case Studies
  - Insights
  - About
  - Contact
- Primary CTA:
  - `Start a project`

Recommended footer:

- `© {year} AandZ.tech. A&Z Technology Solutions. Founder-led by Amir Firouzmanesh.`
- Add links:
  - Services
  - Case Studies
  - About
  - Contact
  - GitHub
  - LinkedIn

Recommended SEO defaults:

- Site name: `AandZ.tech`
- Description: `AI, cloud, and distributed systems engineering for product teams that need production-ready systems.`
- URL: `https://aandz.tech`.

## Case Study Messaging Template

Use this structure for every project:

1. Problem
   - What business or product risk existed?
2. Role
   - What did Amir/AandZ.tech contribute?
3. Architecture
   - What patterns, systems, and trade-offs mattered?
4. Result
   - What improved?
5. Relevance
   - Which service does this prove?

Example mapping:

| Case study | Main service proof | Outcome |
| --- | --- | --- |
| Windows Photos AI | AI Product Integration | AI editing features shipped to tens of millions of users, contributing to `+20%` MAU |
| Credit Ledger | Distributed Systems & Microservices | Reference architecture for reliable credits, ledgers, idempotency, and observability |
| Retail AI Feature Router | AI Product Integration | Hybrid search and cost-aware AI routing with sub-100ms target latency |
| LearnPath | AI Product Integration | Planner-executor agents, structured outputs, RAG, and Go/Python production split |
| Property Finder Credits | Distributed Systems & Microservices | Support tickets reduced by more than `50%` |
| AWS RDS/Marketplace | Cloud, Data & Reporting Architecture | Secure RDS SQL Server configuration and more reliable seller reporting pipelines |

## Copy Direction

### Homepage Hero Draft

Eyebrow:

> AandZ.tech

Headline:

> Production AI and cloud engineering for product teams.

Supporting copy:

> We help SaaS, marketplace, and platform teams ship practical AI features, resilient distributed systems, and cloud architecture that can be operated with confidence. AandZ.tech is a small specialist studio, founder-led by Amir Firouzmanesh, whose work spans Microsoft, AWS, Property Finder, and DataGardens.

CTA:

> Start a project

Secondary CTA:

> View case studies

### About Intro Draft

> AandZ.tech is the public brand of A&Z Technology Solutions, a small specialist studio focused on AI integration, distributed systems, and cloud architecture. We are founder-led by Amir Firouzmanesh and bring senior engineering experience from Microsoft, AWS, Property Finder, and DataGardens to focused consulting engagements.

### Services Intro Draft

> We work with product and platform teams on short, high-leverage engagements: shipping AI features, stabilizing distributed systems, hardening cloud/data platforms, and giving engineering leaders principal-level support when the stakes are high.

## Implementation Phases

### Phase 1: Rebrand the Shell

- Status: implemented.
- Updated site metadata in `lib/seo.ts`.
- Updated header brand from `Amir Firouz - Portfolio` to `AandZ.tech`.
- Updated footer copy.
- Renamed `Projects` navigation label to `Case Studies` while keeping the existing `/projects` route.
- Renamed `Writing` navigation label to `Insights` while keeping the existing `/writing` route.
- Updated site URL from the placeholder to `https://aandz.tech`.

### Phase 2: Rewrite Core Pages

- Status: implemented.
- Rewrote homepage around company positioning, services, proof, engagement model, and contact CTA.
- Rewrote `/services` around four service groups, best-fit signals, engagement types, and linked proof.
- Rewrote `/about` around A&Z Technology Solutions, the small specialist studio model, and founder credibility.
- Rewrote `/contact` to support qualified inbound leads with service interest, budget, deadline, and project summary.

### Phase 3: Strengthen Proof

- Status: implemented.
- Finished the Property Finder case study page and linked it from the case-study index.
- Added business outcome blocks to each project page.
- Tagged each case study with the related service area.
- Added a stronger proof strip on the homepage mapping outcomes to case studies.

### Phase 4: Conversion and Trust

- Status: implemented.
- Routed primary CTAs, including case-study CTAs, to the contact form.
- No public testimonials were provided, so this remains deferred.
- Added company-domain contact consistency with `hello@aandz.tech`.
- Added Microsoft and AWS only in a founder-experience context, with language clarifying they are not current clients, partners, or endorsements.
- Added a lightweight FAQ:
  - "How does the small specialist studio model work?"
  - "What project sizes are a fit?"
  - "Can you work with our existing engineering team?"
  - "Do you implement or only advise?"

### Phase 5: SEO and Content

- Status: implemented.
- Confirmed `https://aandz.tech` is used as the metadata base and sitemap/robots base URL.
- Added page-specific titles and descriptions for services, case studies, insights, about, contact, and insight posts.
- Published five total insight entries tied to the service areas.
- Added structured data for organization, person, and professional service.

### Phase 6: Launch Routing and Case-Study Polish

- Status: implemented.
- Created `/case-studies` as the public case-study index.
- Redirected the legacy `/projects` index to `/case-studies` while preserving existing individual case-study URLs under `/projects/...`.
- Updated navigation, homepage CTAs, about links, project-page back links, and sitemap entries to use `/case-studies`.
- Split the case-study index into `Industry Work` and `Reference Architectures` so employment-scale proof and implementation examples are clearly framed.

## Remaining Decisions

- Decide whether to add testimonials later.
- Decide the best contact email address for form delivery and footer display.
- Resolved: use `/case-studies` as the public index and preserve `/projects/...` for individual case-study URLs.

## Definition of Done

The transition is successful when:

- The first viewport clearly says this is AandZ.tech, not an individual portfolio.
- Amir's experience is still visible as a trust signal.
- Each service maps to at least one credible case study or reference implementation.
- The contact flow invites a real business inquiry.
- The tone feels senior, specific, and company-like without pretending to be a large agency.
