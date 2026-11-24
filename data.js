window.RADAR_DATA = {
  "meta": {
    "title": "WBG Technology & Innovation Radar",
    "checked": "2026-11-23",
    "edition": "November 2026 · Expanded edition",
    "version": "2026.11.24.5",
    "description": "Technology intelligence for development outcomes, ITS capabilities and the wider frontier.",
    "automaticUpdates": false,
    "previousEdition": {
      "trends": 32,
      "companies": 89,
      "version": "2026.11.23.2"
    },
    "horizonMeaning": {
      "now": "Products or methods are available to explore in a bounded setting; suitability still needs local validation.",
      "next": "Practical use is emerging, with integration, reliability or deployment evidence still developing.",
      "horizon": "Broader relevance depends on substantial technical, economic or operational milestones."
    },
    "coverageSummary": "A curated starting point, not an exhaustive market map. Coverage connects WBG development priorities with institutional technology needs and consequential frontier advances. It is strongest in AI and enterprise software, digital public services, climate and Earth observation, energy and infrastructure, health and learning, financial inclusion, skills and productive firms. The directory includes startups, scaleups and explicitly identified public-good builders because relevant digital infrastructure is not built by companies alone.",
    "coverageGaps": [
      "Tourism and value-added manufacturing beyond a small number of examples.",
      "Urban mobility, housing and municipal waste.",
      "Gender, disability accessibility and fragility-specific service delivery.",
      "Country-by-country deployment, procurement and total-cost evidence."
    ],
    "spotlightsChecked": "2026-11-24",
    "refreshScope": "Five company spotlights, twelve concrete WBG anchors and selected source refreshes. The full 102-company landscape has not been exhaustively re-researched on this date.",
    "interfaceVersion": "2026.11.24.6"
  },
  "domains": [
    {
      "id": "enterprise",
      "name": "Enterprise & work",
      "shortName": "Enterprise & work",
      "color": "#47B8F4",
      "description": "How agents reshape software, workflows and the way organizations operate."
    },
    {
      "id": "trust",
      "name": "Trust & AI foundations",
      "shortName": "Trust & foundations",
      "color": "#A6A4FF",
      "description": "The context, evaluation, access controls and infrastructure that make AI usable."
    },
    {
      "id": "inclusion",
      "name": "Digital public services",
      "shortName": "Digital public services",
      "color": "#64D6C3",
      "description": "Accessible services, local languages, identity and accountable supervision."
    },
    {
      "id": "climate",
      "name": "Climate & Earth",
      "shortName": "Climate & Earth",
      "color": "#A5D87F",
      "description": "Observation and evidence for resilience, natural resources and environmental decisions."
    },
    {
      "id": "resources",
      "name": "Energy & essentials",
      "shortName": "Energy & essentials",
      "color": "#F4C36F",
      "description": "Practical innovation for agriculture, health, reliable energy and water."
    },
    {
      "id": "frontier",
      "name": "Frontier systems",
      "shortName": "Frontier systems",
      "color": "#F19DBB",
      "description": "Robotics, world models and quantum capabilities to follow as evidence develops."
    }
  ],
  "trends": [
    {
      "id": "software-agents",
      "title": "Software agents across the development cycle",
      "shortTitle": "Software agents",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its",
        "frontier"
      ],
      "summary": "AI systems that plan, edit, test and maintain software using the same development tools as engineers.",
      "whyNow": "The product scope is expanding from code suggestions to longer tasks and ongoing maintenance. Replit announced Missions on 17 November 2026: agents plan, build, test and iterate within user-set budgets and boundaries.",
      "application": "Use a supervised agent to repair a sandbox application, generate tests or modernize a small internal service; engineers retain review and release authority.",
      "experiment": "Compare an agent-assisted team with the existing process on 10 small repository tasks, using the same acceptance criteria and code review.",
      "measure": "Accepted task completion, reviewer time, introduced defects, elapsed time and cost per accepted change.",
      "watchouts": [
        "Incorrect changes that pass weak tests",
        "Secrets and production access",
        "Code ownership and dependency hygiene",
        "Review capacity becoming the bottleneck"
      ],
      "companyIds": [
        "cognition",
        "factory",
        "replit",
        "mechanical-orchard"
      ],
      "sourceIds": [
        "cognition-about",
        "factory-home",
        "replit-missions",
        "factory-azure"
      ],
      "verified": "2026-11-23",
      "applicationsByLens": {
        "its": "Test a software agent on a real maintenance backlog within existing source-control, identity, test and review controls.",
        "frontier": "Examine how longer-running software agents change the economics of building and maintaining products, and where review becomes the limiting factor."
      },
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-software",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "enterprise-agents",
      "title": "Agents that complete evidence-based knowledge work",
      "shortTitle": "Enterprise knowledge agents",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its"
      ],
      "summary": "AI systems that combine organizational knowledge and connected tools to complete a defined business process, with explicit limits on their actions.",
      "whyNow": "Current platforms combine knowledge, tool use, memory and workflow control in deployable products. The practical question is which tasks they can finish reliably under an organization's permissions.",
      "application": "Prepare an evidence-linked portfolio briefing from approved project documents, flag conflicting information and route proposed external actions to a person for approval.",
      "experiment": "Give an analyst and an agent the same 20 bounded research questions and approved document set. Compare their evidence, synthesis, revisions and elapsed time without allowing external messages or changes.",
      "measure": "Evidence accuracy, completeness, analyst correction time, successful completion and cost per accepted brief.",
      "watchouts": [
        "Permissions crossing team boundaries",
        "Unclear accountability",
        "Tool errors compounding across steps",
        "Automation of a poorly defined process"
      ],
      "companyIds": [
        "seekr",
        "dust",
        "glean",
        "syntes",
        "lindy",
        "sierra",
        "resolve-ai",
        "unstructured",
        "n8n",
        "mistral-ai",
        "cohere"
      ],
      "sourceIds": [
        "seekr-agents",
        "dust-enterprise",
        "glean-agents"
      ],
      "verified": "2026-11-23",
      "applicationsByLens": {
        "its": "Connect approved knowledge sources to a briefing or technical-research assistant, retaining source permissions and human review of consequential actions.",
        "wbg": "Help a sector team compare project evidence and lessons across an approved document collection, with every important assertion linked to its source."
      },
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-knowledge",
        "wbg": "wbg-services",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "context-memory",
      "title": "Context graphs and persistent agent memory",
      "shortTitle": "Context & memory",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "summary": "Systems that preserve relevant facts, relationships and prior decisions across tasks, sometimes recording when a fact was true and where it came from.",
      "whyNow": "Agents handling continuing work need more than a long conversation history. Current graph and stateful-agent products make it possible to test retrieval of changing facts and remembered decisions.",
      "application": "Create a project assistant that distinguishes an approved current decision from a superseded draft and cites the underlying document.",
      "experiment": "Build a small, permissioned project corpus with deliberately conflicting dated records; compare standard retrieval with temporal or structured memory.",
      "measure": "Correct handling of superseded facts, source accuracy, deletion behavior, access-control fidelity and retrieval cost.",
      "watchouts": [
        "Stale or poisoned memory",
        "Personal data retained too long",
        "Unsupported inferred relationships",
        "Cross-project information leakage"
      ],
      "companyIds": [
        "glean",
        "syntes",
        "zep",
        "letta",
        "sierra",
        "cohere"
      ],
      "sourceIds": [
        "syntes-home",
        "zep-memory",
        "letta-state"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-knowledge",
        "frontier": "frontier-foundations"
      }
    },
    {
      "id": "agent-interoperability",
      "title": "Interoperable agents and permissioned tools",
      "shortTitle": "Agent interoperability",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier"
      ],
      "summary": "Common interfaces through which agents find tools, access systems and delegate tasks while preserving identity and authorization.",
      "whyNow": "MCP published a revised specification on 28 July 2026, and A2A provides a protocol for communication between independent agents. Runtime and integration vendors are packaging these capabilities.",
      "application": "Connect a portfolio-research assistant to approved document search and a calculation service, with separate permissions and an auditable record for every tool call.",
      "experiment": "Connect two approved read-only systems and one specialist agent; verify identity propagation, denied actions, cancellation and complete audit records.",
      "measure": "Integration effort, successful task handoffs, unauthorized-action rejection and diagnosability of failures.",
      "watchouts": [
        "Protocol compatibility mistaken for trust",
        "Excessive scopes",
        "Malicious tool descriptions or results",
        "Credential and supply-chain exposure"
      ],
      "companyIds": [
        "composio",
        "arcade",
        "langchain",
        "noma-security",
        "aembit",
        "n8n"
      ],
      "sourceIds": [
        "mcp-spec",
        "a2a-spec",
        "composio-docs",
        "arcade-developers",
        "langsmith-server"
      ],
      "verified": "2026-11-23",
      "applicationsByLens": {
        "its": "Connect approved search, analytics and specialist tools without giving an agent broad credentials or rebuilding each integration.",
        "frontier": "Follow whether common protocols produce interchangeable tools and agents across vendors while preserving identity, cancellation and clear accountability."
      },
      "horizon": "next",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-trust",
        "frontier": "frontier-foundations"
      }
    },
    {
      "id": "agent-evaluation",
      "title": "Evaluation and observability for agent behavior",
      "shortTitle": "Agent assurance",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "its",
        "wbg"
      ],
      "summary": "Tools that record an agent's actions and test whether complete tasks meet defined standards for quality, safety and cost.",
      "whyNow": "Multi-step agents can produce a convincing answer after taking an incorrect action. Current platforms make traces, evaluation datasets and release checks part of the development workflow.",
      "application": "Evaluate a complaints-supervision assistant for evidence fidelity, multilingual quality, correct tool use and proper escalation before deployment.",
      "experiment": "Create 50 expert-reviewed cases, including ambiguous and adversarial examples, and compare two candidate systems using identical rubrics.",
      "measure": "End-to-end success, false confidence, permission violations, latency, cost and agreement between automated scores and expert review.",
      "watchouts": [
        "Test sets that do not represent actual users",
        "Evaluator bias",
        "Sensitive information in traces",
        "Optimizing a score without improving outcomes"
      ],
      "companyIds": [
        "langchain",
        "arize",
        "braintrust",
        "galileo",
        "noma-security",
        "credo-ai"
      ],
      "sourceIds": [
        "arize-home",
        "braintrust-home",
        "galileo-product"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-trust",
        "wbg": "wbg-services",
        "frontier": "frontier-foundations"
      }
    },
    {
      "id": "lean-ai-native",
      "title": "Lean companies designed around AI agents",
      "shortTitle": "AI-native operating models",
      "domain": "enterprise",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier"
      ],
      "summary": "Businesses that organize delivery around software agents and a small number of accountable human operators.",
      "whyNow": "Ravenopus describes a single operator overseeing specialized marketing agents; Polsia offers AI-driven business workflows; Lindy offers connected-tool task execution. These are useful operating-model cases to examine, with claims to test.",
      "application": "Use a founder-led demonstration to examine where work moves faster, which roles change, and how one accountable person reviews an increasing volume of outputs.",
      "experiment": "Ask a founder to walk through one real deliverable, including prompts, human edits, approvals, failed attempts and total cost.",
      "measure": "Human review minutes, accepted output quality, rework, unit cost and the number of tasks that still require specialist judgment.",
      "watchouts": [
        "Vendor demonstrations mistaken for repeatable economics",
        "Unclear labor and accountability implications",
        "Overstated autonomy",
        "Dependence on one operator or provider"
      ],
      "companyIds": [
        "replit",
        "ravenopus",
        "polsia",
        "lindy"
      ],
      "sourceIds": [
        "ravenopus-home",
        "polsia-terms",
        "lindy-docs"
      ],
      "verified": "2026-11-23",
      "horizon": "next",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-knowledge",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "agentic-security",
      "title": "AI agents in security operations",
      "shortTitle": "Agentic security",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "summary": "Specialized agents that assemble evidence, investigate security alerts and prepare or execute explicitly permitted response steps.",
      "whyNow": "Products now cover investigation and coordinated workflows across existing security tools. Their readiness should be judged on local evidence quality and controlled response behavior.",
      "application": "Support security analysts with a draft case file for a phishing alert, including the evidence consulted and recommended next steps.",
      "experiment": "Run historical alerts through an isolated evaluation environment; compare case quality with analyst decisions before considering live integrations.",
      "measure": "Missed threats, false escalations, evidence quality, analyst review time and policy-compliant action selection.",
      "watchouts": [
        "Incorrect containment disrupting services",
        "Sensitive logs exposed to models",
        "Adversarial instructions in evidence",
        "Blind spots hidden by plausible summaries"
      ],
      "companyIds": [
        "bricklayer",
        "dropzone",
        "torq"
      ],
      "sourceIds": [
        "bricklayer-platform",
        "dropzone-product",
        "torq-platform"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-trust",
        "frontier": "frontier-foundations"
      }
    },
    {
      "id": "physical-ai",
      "title": "General-purpose robot policies",
      "shortTitle": "Physical AI",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "summary": "AI models that translate perception and instructions into robot actions, aiming to transfer skills across tasks or hardware.",
      "whyNow": "Physical Intelligence made robotics models available through an API beta in October 2026; Figure and Skild are developing broader robot-control capabilities. Demonstrations still need to be distinguished from reliable field operation.",
      "application": "Explore future applications in infrastructure inspection, repetitive handling and worker safety, including how costs and labor impacts differ in developing economies.",
      "experiment": "With a robotics partner, specify one constrained inspection or handling task and benchmark against an established specialized solution.",
      "measure": "Successful cycles without intervention, safety incidents, recovery time, total operating cost and performance in unfamiliar conditions.",
      "watchouts": [
        "Physical safety",
        "Weak transfer from demonstrations to field settings",
        "Maintenance and connectivity requirements",
        "Unequal economic and employment effects"
      ],
      "companyIds": [
        "figure",
        "physical-intelligence",
        "skild",
        "wayve"
      ],
      "sourceIds": [
        "figure-helix02",
        "pi-api",
        "skild-home"
      ],
      "verified": "2026-11-23",
      "horizon": "next",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "frontier": "frontier-physical",
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "world-models",
      "title": "World models and synthetic environments",
      "shortTitle": "World models",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "summary": "Models and simulators that generate or predict environments and their evolution so people or agents can explore scenarios and test behavior.",
      "whyNow": "Odyssey introduced its Odyssey-3 research preview in October 2026. Wayve and Waabi use world-modeling or neural simulation approaches for driving development and evaluation.",
      "application": "Explore training and participatory scenario communication; any engineering, transport or disaster-risk decision would still need validated physical and geospatial models.",
      "experiment": "Compare a synthetic scenario with a measured reference environment and document where geometry, dynamics or rare events diverge.",
      "measure": "Consistency, reproducibility, domain validation, coverage of failure scenarios and cost of creating useful test environments.",
      "watchouts": [
        "Visual realism mistaken for physical accuracy",
        "Simulation-to-reality gaps",
        "Unsupported causal conclusions",
        "Bias in generated scenarios"
      ],
      "companyIds": [
        "odyssey",
        "wayve",
        "waabi"
      ],
      "sourceIds": [
        "odyssey3",
        "wayve-gaia3",
        "waabi-technology"
      ],
      "verified": "2026-11-23",
      "horizon": "horizon",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "frontier": "frontier-physical"
      }
    },
    {
      "id": "fault-tolerant-quantum",
      "title": "Error-corrected quantum computing",
      "shortTitle": "Quantum computing",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "summary": "Hardware and software designed to suppress quantum errors long enough to run useful computations reliably.",
      "whyNow": "Progress is increasingly discussed in terms of logical qubits, correction systems and full architectures. Alice & Bob updated its roadmap on 18 November 2026; its 2030 milestones remain targets.",
      "application": "Build literacy for future research in materials or energy and distinguish that horizon from the separate, nearer-term task of assessing cryptographic migration.",
      "experiment": "Commission a short use-case assessment comparing classical methods, realistic quantum resources and the evidence required to establish an advantage.",
      "measure": "Evidence for logical error rates, realistic resource estimates and a credible advantage over strong classical baselines.",
      "watchouts": [
        "Roadmaps presented as achieved capability",
        "Unclear practical advantage",
        "High infrastructure requirements",
        "Premature spending on speculative use cases"
      ],
      "companyIds": [
        "psiquantum",
        "riverlane",
        "alice-bob"
      ],
      "sourceIds": [
        "psiquantum-architecture",
        "riverlane-home",
        "riverlane-qec-loop",
        "alicebob-roadmap",
        "alicebob-results"
      ],
      "verified": "2026-11-23",
      "horizon": "horizon",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "frontier": "frontier-compute"
      }
    },
    {
      "id": "local-language-ai",
      "title": "AI in local languages and everyday phones",
      "shortTitle": "Local-language AI",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "summary": "Speech, translation and task-specific AI delivered in the languages and channels people already use.",
      "whyNow": "September 2026 announcements from Sarvam and Viamo show progress in multilingual speech and AI accessed through ordinary phone calls. WDR 2026 highlights adapting AI to local constraints.",
      "application": "Make agricultural guidance, public-service information and feedback analysis accessible in a country's working languages, with local experts reviewing translation and terminology.",
      "experiment": "Run a supervised pilot against a fixed set of approved service information in two local languages; include noisy calls, dialects and code-switching.",
      "measure": "Measure factual correctness, task completion, escalation rate and cost per resolved enquiry against existing channels.",
      "watchouts": [
        "Language coverage is not equal quality. Consent, wrong answers, accents, call costs and the human escalation path need local evaluation. Phone access without internet on the user's device still requires network and backend services."
      ],
      "companyIds": [
        "sarvam",
        "lelapa",
        "viamo"
      ],
      "sourceIds": [
        "wbg-wdr",
        "sarvam-v4",
        "viamo"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-models",
        "frontier": "frontier-models"
      }
    },
    {
      "id": "geospatial-intelligence",
      "title": "Earth observation becomes decision infrastructure",
      "shortTitle": "Earth intelligence",
      "domain": "climate",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "summary": "Combine satellite imagery, specialist sensors and analytical models to see changes in land, infrastructure and environmental conditions.",
      "whyNow": "Commercial hyperspectral imagery is operating, and October 2026 access to SatVu thermal imagery through SkyFi lowers a practical procurement and discovery barrier.",
      "application": "screen heat exposure, crop stress or infrastructure conditions, building on GeoLab workflows and local field evidence.",
      "experiment": "Compare public imagery with one commercial sensor over a small, well-characterized area; ask whether it changes an actual investment or supervision decision.",
      "measure": "Measure useful information gained, turnaround time, spatial coverage and agreement with independent ground observations.",
      "watchouts": [
        "Clouds, revisit frequency, licensing, calibration and local validation constrain usefulness. Heat signatures or spectral signals are indicators, not direct proof of economic or social outcomes."
      ],
      "companyIds": [
        "pixxel",
        "satvu",
        "chloris",
        "satsure",
        "premise",
        "aidash"
      ],
      "sourceIds": [
        "wbg-geo",
        "pixxel-nasa",
        "satvu"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "climate-adaptation",
      "title": "From climate risk maps to anticipatory action",
      "shortTitle": "Climate adaptation",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "summary": "Connect forecasts and hazard models to operational triggers, adaptation options and pre-arranged finance.",
      "whyNow": "Weather, flood and asset-risk providers increasingly package data into usable workflows. WBG’s September 2026 resilience guidance emphasizes connecting scientific data to local decisions.",
      "application": "prioritise exposed schools and clinics, rehearse early-action protocols or assess parametric cover for a defined hazard.",
      "experiment": "Back-test a single hazard and district using historical events, local loss data and the exact decision or payout trigger.",
      "measure": "Measure warning lead time, missed events, false alarms, exposure coverage and basis risk.",
      "watchouts": [
        "Forecast error, poorly mapped assets and basis risk can create false confidence. Long-term scenario loss estimates need transparent assumptions; local institutions must be able to act on alerts."
      ],
      "companyIds": [
        "tomorrow",
        "floodbase",
        "climate-x",
        "pula",
        "aidash"
      ],
      "sourceIds": [
        "wbg-climate",
        "tomorrow-noaa",
        "floodbase",
        "climatex-sep"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "sovereign-data-ai",
      "title": "Locally governed data and AI infrastructure",
      "shortTitle": "Local data & compute",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "wbg",
        "its"
      ],
      "summary": "Make data, compute and AI workloads usable under local governance, while preserving interoperability and viable operating costs.",
      "whyNow": "The October 2026 WBG Digital Strategy and AI Infrastructure and Readiness Initiative make affordable compute and local data capability explicit priorities. Amini’s current offering spans digitisation, governed data, compute and applications.",
      "application": "help a ministry digitise and govern one critical dataset, then compare regional/shared compute with local deployment.",
      "experiment": "Benchmark one bounded document workflow across feasible deployment options; include data residency, data exit, skills transfer and full operating cost.",
      "measure": "Measure extraction quality, cost per completed task, uptime, staff operability and portability.",
      "watchouts": [
        "Local hosting alone does not ensure sovereignty, security or sustainability. Power, maintenance, procurement, vendor dependence and local skills can dominate the economics."
      ],
      "companyIds": [
        "amini",
        "sarvam",
        "mistral-ai",
        "cohere"
      ],
      "sourceIds": [
        "wbg-digital",
        "wbg-data",
        "amini"
      ],
      "verified": "2026-11-23",
      "horizon": "next",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-cloud"
      }
    },
    {
      "id": "inclusive-digital-services",
      "title": "Trusted digital identity and inclusive finance",
      "shortTitle": "Identity & inclusion",
      "domain": "inclusion",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "summary": "Reusable identity, secure data exchange and financial platforms help people access services and businesses enter digital markets.",
      "whyNow": "WBG’s 2026 DPI program promotes interoperable identity, payments and data sharing. Commercial identity and finance platforms illustrate complementary delivery options.",
      "application": "prototype inclusive onboarding for a social service or small-business finance journey, with alternatives for people who cannot pass a digital check.",
      "experiment": "Map the full user journey and test onboarding with representative users, including low-quality documents, limited connectivity and assisted channels.",
      "measure": "Measure completion, false rejection, time to service, appeal resolution and differences across user groups.",
      "watchouts": [
        "Biometric bias, exclusion, excessive data collection and debt distress require attention. Private KYC services are not interchangeable with national foundational ID or public infrastructure."
      ],
      "companyIds": [
        "smile-id",
        "yoti",
        "jumo",
        "newlogic",
        "satsure",
        "moniepoint",
        "m-kopa",
        "mojaloop"
      ],
      "sourceIds": [
        "wbg-dpi",
        "smile",
        "yoti",
        "jumo"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-services"
      }
    },
    {
      "id": "agriculture-intelligence",
      "title": "AI that reaches the farm decision",
      "shortTitle": "Agricultural intelligence",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "summary": "Combine crop imagery, field records, weather and specialist knowledge to support agronomy, supply planning and risk protection.",
      "whyNow": "Cropin launched OrbitAI in July 2026; Plantix exposes crop-diagnosis APIs; WBG’s September AgriConnect plan reinforces the need for usable digital agriculture.",
      "application": "improve extension triage, crop monitoring and smallholder risk management with local agronomists and farmer feedback.",
      "experiment": "Choose one crop and district; compare an assisted advisory workflow with the current practice through a season, using approved recommendations.",
      "measure": "Measure advice accuracy, adoption, service cost and agronomic outcomes with a suitable comparison group.",
      "watchouts": [
        "Images and satellite data may not generalise to local crops or plots. Mistaken treatment advice, weather uncertainty, data ownership and insurance basis risk need field testing."
      ],
      "companyIds": [
        "cropin",
        "plantix",
        "pula",
        "boomitra",
        "satsure"
      ],
      "sourceIds": [
        "wbg-agriconnect",
        "wbg-agri",
        "cropin",
        "plantix",
        "pula"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-food"
      }
    },
    {
      "id": "frontline-health",
      "title": "Digitally enabled primary care",
      "shortTitle": "Frontline health",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "summary": "Support frontline clinics with diagnostic assistance, connected workflows and better access to medicines.",
      "whyNow": "The WBG Health Target Implementation Plan 2026 centres on digitally enabled primary care. Vendors now address both clinical interpretation and the operational gaps around clinics and supplies.",
      "application": "assess supervised screening, clinic digitisation or pooled procurement against a locally defined care bottleneck.",
      "experiment": "Pick one pathway and measure the whole journey: referral, diagnosis, treatment access and follow-up, alongside a clinician-reviewed evaluation.",
      "measure": "Measure time to appropriate care, missed follow-up, service availability and total cost; evaluate clinical sensitivity and specificity where relevant.",
      "watchouts": [
        "Clinical validation and applicable approvals are setting- and product-specific. Bias, privacy, workforce capacity, medicine quality and referral capacity affect real outcomes."
      ],
      "companyIds": [
        "qure-ai",
        "ilara-health",
        "axmed"
      ],
      "sourceIds": [
        "wbg-health",
        "wbg-healthfaq",
        "qure-study",
        "ilara-undp",
        "axmed"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-health"
      }
    },
    {
      "id": "distributed-energy",
      "title": "Software and finance for distributed energy",
      "shortTitle": "Distributed energy",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "summary": "Use demand forecasting, remote operations and financing infrastructure to expand solar, storage and minigrids.",
      "whyNow": "Mission 300 combines infrastructure, distributed renewables, utility performance and private investment. Husk and Nithio show how software can support operations and capital allocation.",
      "application": "improve minigrid site assessment, benchmark operating reliability or assess whether financing reaches underserved households and businesses.",
      "experiment": "Compare forecast and repayment performance on a documented pilot portfolio; stress-test tariffs, defaults, downtime and productive-use demand.",
      "measure": "Measure reliability, delivered energy cost, service affordability, repayment fairness and additional connections.",
      "watchouts": [
        "Data quality, tariff affordability, regulation, currency risk and maintenance can matter more than model sophistication. A repayment score should not become an unchallengeable exclusion mechanism."
      ],
      "companyIds": [
        "husk",
        "nithio",
        "sun-king",
        "aidash"
      ],
      "sourceIds": [
        "wbg-energy",
        "husk",
        "nithio-undp",
        "sunking"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "intelligent-water",
      "title": "Water systems that detect and respond",
      "shortTitle": "Intelligent water",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "summary": "Sensors and analytics help operators find losses and manage demand; distributed technologies can supplement drinking-water supply in specific settings.",
      "whyNow": "FIDO’s October 2026 update adds offline leak correlation and confidence indicators. WBG Digital Water already includes active leakage detection and predictive maintenance in its utility toolkit.",
      "application": "test a leak-to-repair workflow with a utility; separately assess distributed drinking-water supply only where lifecycle economics make sense.",
      "experiment": "Instrument a small zone, verify suspected leaks in the field and compare water recovered with the full intervention cost.",
      "measure": "Measure verified water recovered, false positives, repair time, energy use and cost per cubic metre.",
      "watchouts": [
        "Detection creates value only if repairs happen. Sensor maintenance, network maps and connectivity are constraints. Atmospheric water is site-dependent and is not a replacement for bulk municipal supply."
      ],
      "companyIds": [
        "fido-tech",
        "wint",
        "source-global",
        "egov-digit"
      ],
      "sourceIds": [
        "wbg-water",
        "fido-oct",
        "wint",
        "source"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "nature-mrv",
      "title": "Digital measurement for nature and carbon",
      "shortTitle": "Nature & carbon evidence",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "summary": "Combine satellites, models and field samples to estimate carbon stocks and changes and support independent verification.",
      "whyNow": "The September 2026 ICVCM–World Bank work on digital MRV recognises potential gains in traceability and monitoring while preserving verification and integrity requirements.",
      "application": "compare evidence for forest restoration or soil-carbon projects, with transparent uncertainty and community data rights.",
      "experiment": "Blind-test two providers against independent field measurements and a clearly specified accounting boundary; keep verification separate from project sales.",
      "measure": "Measure uncertainty, reproducibility, coverage, total monitoring cost and agreement with independent reference data.",
      "watchouts": [
        "Digital estimates do not establish additionality, permanence or rights by themselves. Model bias, baselines, sampling and verification independence remain material."
      ],
      "companyIds": [
        "chloris",
        "sylvera",
        "boomitra"
      ],
      "sourceIds": [
        "wbg-mrv",
        "chloris",
        "sylvera",
        "boomitra"
      ],
      "verified": "2026-11-23",
      "horizon": "next",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "supervisory-casework",
      "title": "AI-assisted supervision and public casework",
      "shortTitle": "SupTech & casework",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "summary": "Turn complaints, regulatory documents and linked records into structured evidence, case prioritisation and signals for human review.",
      "whyNow": "The World Bank’s July 2026 account of work in Egypt, Ecuador and Peru describes AI-assisted classification, validation and enrichment of complaint data, with emerging risks escalated for human judgement.",
      "application": "Identify recurring complaint patterns, link evidence and prepare supervisory questions for expert review. The adjacent companies cover compliance automation, investigations and financial-network analysis; those capabilities are distinct.",
      "experiment": "Build a de-identified, expert-labelled case set. Compare extraction, classification and emerging-pattern detection with the existing process; require linked evidence and a reviewer decision at every consequential step.",
      "measure": "Measure classification quality by language and complaint type, evidence accuracy, reviewer correction rate, handling time and early-warning usefulness.",
      "watchouts": [
        "Complaint data is sensitive and not necessarily representative. Wrong entity links, invented evidence or opaque prioritisation can harm people. RegTech for firms, SupTech for regulators and complaint casework are related but not interchangeable."
      ],
      "companyIds": [
        "fna",
        "regulativ",
        "quantexa"
      ],
      "sourceIds": [
        "wbg-suptech",
        "fna",
        "regulativ",
        "quantexa-gov"
      ],
      "verified": "2026-11-23",
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-decisions"
      }
    },
    {
      "id": "on-device-ai",
      "title": "Small models and AI that runs locally",
      "shortTitle": "Small & on-device AI",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "wbg",
        "its",
        "frontier"
      ],
      "summary": "Compact models and local runtimes perform selected AI tasks on a laptop, phone or edge device, reducing dependence on a continuous cloud connection.",
      "whyNow": "Liquid AI released its LFM3 family on 27 October 2026. Cactus now offers compact models for voice, vision and tool use; local runtimes make it easier to compare them on actual devices.",
      "application": "Test a field assistant that classifies a form or retrieves approved guidance on a modest device, with a human checking the result before it enters a public-service workflow.",
      "experiment": "Run one narrow task on a representative low-cost device with cloud fallback disabled. Compare the local model with a hosted baseline and test after disconnecting the network.",
      "measure": "Task accuracy, memory use, battery demand, response time, offline completion and total cost of maintaining the device fleet.",
      "watchouts": [
        "Small models can lose accuracy on unfamiliar languages and complex reasoning.",
        "Local inference still needs secure devices, maintained models and appropriate licenses.",
        "Hybrid products may send requests to the cloud; verify the exact data path and configuration."
      ],
      "companyIds": [
        "liquid-ai",
        "cactus",
        "ollama"
      ],
      "sourceIds": [
        "liquid-lfm3",
        "cactus-main",
        "ollama-faq",
        "wbg-digital"
      ],
      "verified": "2026-11-23",
      "applicationsByLens": {
        "wbg": "Test an accessible field assistant on a representative low-cost device and local-language task with the network disconnected.",
        "its": "Compare local and hosted models on a bounded task, including quality, support effort and data-path requirements.",
        "frontier": "Track which voice, vision and reasoning tasks can move from hosted models onto ordinary devices, and what that changes for product design."
      },
      "horizon": "now",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-models",
        "frontier": "frontier-models"
      }
    },
    {
      "id": "conversational-voice-agents",
      "title": "Voice agents that carry out real workflows",
      "shortTitle": "Conversational voice",
      "domain": "frontier",
      "frontierTheme": "Human–AI interfaces",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "frontier",
        "its"
      ],
      "summary": "Spoken interfaces that listen, manage interruptions, retrieve information and use tools to complete a task during a conversation.",
      "whyNow": "Cartesia launched Managed Agents on 29 October 2026. ElevenLabs documents an integrated multimodal-agent platform and announced expanded enterprise and government deployment work on 11 November.",
      "application": "Explore service desks, booking and product-support journeys where speaking is easier than navigating forms.",
      "example": "A caller changes an appointment request mid-sentence; the agent confirms the new intention, checks availability and explains the next step.",
      "experiment": "Run the same service task through two systems, including interruptions, silence, noisy audio, unusual names and a request for a human.",
      "measure": "Completed tasks, correct confirmations, error recovery, turn-taking latency and successful handoff across relevant languages.",
      "milestone": "Reliable completion across difficult calls, with transparent transfer to a person and verifiable tool actions.",
      "watchouts": [
        "Natural speech can hide incorrect reasoning",
        "Accent and language performance varies",
        "Voice identity and consent",
        "Recording and transcript retention"
      ],
      "companyIds": [
        "elevenlabs",
        "cartesia"
      ],
      "sourceIds": [
        "elevenagents-overview",
        "elevenlabs-nvidia-20261111",
        "cartesia-managed-20261029"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "frontier": "frontier-models",
        "its": "its-models",
        "wbg": "wbg-services"
      }
    },
    {
      "id": "experimental-scientific-ai",
      "title": "Scientific AI that learns from experiments",
      "shortTitle": "AI-driven discovery",
      "domain": "frontier",
      "frontierTheme": "Science & materials",
      "ring": "watch",
      "horizon": "horizon",
      "lenses": [
        "frontier"
      ],
      "summary": "Systems that propose candidates or experiments, check them through physical or simulated tests, and feed the results into the next research cycle.",
      "whyNow": "Periodic introduced a model trained on laboratory data in September 2026; LILA reported an AI-directed catalyst campaign; CuspAI launched a materials-discovery network in July.",
      "application": "Explore how laboratories might discover catalysts, membranes, magnets or chip materials with fewer unsuccessful research cycles.",
      "example": "A model proposes a composition, the lab makes and measures it, and successful and failed results shape the next batch.",
      "experiment": "Study one complete campaign, including negative results, human interventions, material costs and validation outside the originating lab.",
      "measure": "Time and cost per validated candidate, reproducibility, negative-result data and transfer to real operating conditions.",
      "milestone": "An independently reproduced discovery with practical performance, manufacturability and durability; increasingly complete lab execution with disclosed human work.",
      "watchouts": [
        "Candidates may fail during scale-up",
        "Lab automation still involves human work",
        "Proprietary data can limit reproducibility",
        "Simulation gains may not transfer to experiments"
      ],
      "companyIds": [
        "lila-sciences",
        "periodic-labs",
        "cuspai"
      ],
      "sourceIds": [
        "lila-catalyst-20260925",
        "periodic-neon-20260915",
        "cusp-foundry-20260720"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "frontier": "frontier-science"
      }
    },
    {
      "id": "ai-engineering-simulation",
      "title": "AI models accelerate engineering simulation",
      "shortTitle": "AI for engineering",
      "domain": "frontier",
      "frontierTheme": "Industrial systems",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "frontier",
        "wbg"
      ],
      "summary": "Models that learn physical behavior from simulations or experiments and help engineers explore designs, predict performance and optimize systems.",
      "whyNow": "PhysicsX combines simulation, learned physics and engineering applications and expanded its Fortescue partnership in October 2026. BeyondMath offers AI-based simulation of physical fields.",
      "application": "Explore cooling systems, aerodynamic shapes, machinery and industrial processes where each conventional simulation is expensive.",
      "example": "An engineer searches heat-exchanger designs with a fast model, then checks shortlisted designs using a trusted solver and measurements.",
      "experiment": "Compare predictions on held-out geometries and operating conditions with a validated numerical model and physical measurements.",
      "measure": "Error in decision-critical outputs, uncertainty calibration, failure detection, design-cycle time and computational cost.",
      "milestone": "Documented accuracy boundaries and reliable fallback when a design lies outside the validated domain.",
      "watchouts": [
        "Fast predictions can extrapolate poorly",
        "Training data may omit critical conditions",
        "Validation requirements vary by industry",
        "Simulation accuracy and operational value are separate questions"
      ],
      "companyIds": [
        "physicsx",
        "beyondmath"
      ],
      "sourceIds": [
        "physicsx-platform",
        "physicsx-fortescue-20261027",
        "beyondmath-platform"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "frontier": "frontier-science",
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "efficient-compute-hardware",
      "title": "New hardware for the power and data bottlenecks of AI",
      "shortTitle": "Efficient AI compute",
      "domain": "frontier",
      "frontierTheme": "Compute & infrastructure",
      "ring": "watch",
      "horizon": "horizon",
      "lenses": [
        "frontier"
      ],
      "summary": "Architectures that improve data movement or computation, including optical interconnects, specialized inference chips and probabilistic hardware.",
      "whyNow": "d-Matrix announced Corsair production in June 2026, Lightmatter demonstrated optical systems in October, and Extropic is developing probabilistic hardware with larger systems targeted for 2027.",
      "application": "Explore which workloads need better processors, faster connections, or a different computing model.",
      "example": "Lightmatter targets communication between chips; d-Matrix targets inference execution; Extropic explores probabilistic sampling as a computing primitive.",
      "experiment": "Compare a complete workload at matched output quality, including memory, networking, utilization, software effort, cooling and system power.",
      "measure": "Energy and cost per useful result, model coverage, latency, utilization, reliability and migration effort.",
      "milestone": "Repeatable customer-scale efficiency on real workloads, with clear integration costs and a credible manufacturing and support path.",
      "watchouts": [
        "Chip-level efficiency may not translate to system savings",
        "Roadmaps and demonstrations differ in maturity",
        "Software portability affects economics",
        "Supply, serviceability and cooling constrain deployment"
      ],
      "companyIds": [
        "lightmatter",
        "d-matrix",
        "extropic"
      ],
      "sourceIds": [
        "lightmatter-passage",
        "lightmatter-ocp-20261012",
        "dmatrix-production-20260609",
        "extropic-hardware"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "frontier": "frontier-compute",
        "its": "its-cloud"
      }
    },
    {
      "id": "project-supervision",
      "title": "Project supervision with visual and local evidence",
      "shortTitle": "Project verification",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "summary": "Combining time-stamped site imagery, satellite observations and local field checks to make project progress and service delivery easier to verify.",
      "whyNow": "Commercial tools now connect site captures with construction schedules and turn Earth observations into parcel or corridor information. Local contributor networks can test what remote signals miss.",
      "application": "Give project teams a traceable evidence packet showing where reported progress, physical observations and local conditions agree or diverge; direct scarce site visits to unresolved questions.",
      "experiment": "Use a completed or consenting active project. Compare three reporting dates and a sample of physical milestones with an engineer's independent assessment, keeping the source evidence visible.",
      "measure": "Material discrepancies detected, false alarms, lead time to identify slippage, reviewer minutes and the cost of capturing and checking evidence.",
      "watchouts": [
        "Observation is not certification",
        "Incomplete plans, cloud cover or missing captures",
        "Contributor and site-worker privacy",
        "Field access and sampling bias"
      ],
      "companyIds": [
        "satsure",
        "buildots",
        "premise"
      ],
      "sourceIds": [
        "buildots-product",
        "buildots-dot",
        "satsure-home",
        "premise-how",
        "wbg-geo"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "resilient-digital-operations",
      "title": "Evidence-led reliability and cloud optimization",
      "shortTitle": "Reliable digital operations",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "frontier"
      ],
      "summary": "Using operational AI, workload optimization and explicit access controls to investigate service failures and improve the economics of running digital services.",
      "whyNow": "ResolveAI announced its SRE-1 incident model in November 2026, while cloud optimization and agent identity products offer concrete, testable controls around operational assistance.",
      "application": "Help ITS engineers shorten supported incident diagnosis, compare cloud-cost options and enforce bounded access to operational tools.",
      "experiment": "Start with archived-incident replay and agentless cost discovery. Move only validated, low-impact recommendations to a noncritical workload under an engineer's control.",
      "measure": "Correct root cause and supporting evidence; cost per successful request; latency and errors; operator effort; successful enforcement of forbidden and revoked access.",
      "watchouts": [
        "Correlated failures outside the replay set",
        "Privileged tools and wide credentials",
        "Cost reductions that degrade service",
        "Unsupported integrations and vendor benchmark claims"
      ],
      "companyIds": [
        "resolve-ai",
        "cast-ai",
        "anomalo",
        "aembit"
      ],
      "sourceIds": [
        "resolve-incidents",
        "resolve-sre1",
        "cast-cloud-connect",
        "aembit-ai-agents"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-cloud",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "legacy-modernization",
      "title": "Modernization verified against observed behavior",
      "shortTitle": "Verified modernization",
      "domain": "enterprise",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "its",
        "frontier"
      ],
      "summary": "Capturing how an existing application behaves and using that evidence to check a replacement, rather than relying only on code translation.",
      "whyNow": "Mechanical Orchard's Imogen platform and 2026 releases make transaction-level behavior capture and comparison a commercial product capability. Data-quality tools can expose changes in the outputs feeding downstream users.",
      "application": "Assess a bounded legacy component with explicit acceptance criteria before deciding whether a broader replacement is justified.",
      "experiment": "Reimplement one isolated interface or batch calculation using sanitized historical cases. Add rare and adverse cases deliberately and have business owners adjudicate every unexplained difference.",
      "measure": "Agreement on critical outputs, important case coverage, unexplained exceptions, integration defects, engineer effort and estimated operating cost.",
      "watchouts": [
        "Observed cases do not cover every business rule",
        "Timing and external side effects",
        "Legacy defects that should not be preserved",
        "Lock-in and underestimated integration work"
      ],
      "companyIds": [
        "mechanical-orchard",
        "anomalo"
      ],
      "sourceIds": [
        "mechanical-platform",
        "mechanical-july-release",
        "anomalo-home"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-software",
        "wbg": "wbg-services",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "foundation-forecasting",
      "title": "Foundation models for planning and forecasting",
      "shortTitle": "Foundation forecasting",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg",
        "its",
        "frontier"
      ],
      "summary": "Pretrained time-series models that can forecast many kinds of sequential data, with uncertainty estimates and task-specific adaptation.",
      "whyNow": "TimeGPT's Microsoft Foundry listing adds another deployment route for forecasting models. Their practical value can be tested against established statistical methods on the same historical decisions.",
      "application": "Evaluate forecasts for service demand, utility load, cash-flow planning or computing capacity, linking errors to the decisions that depend on them.",
      "experiment": "Run rolling-origin backtests at the real planning horizon against a seasonal-naive baseline and a strong conventional model. Use only information that would have been available at each forecast date.",
      "measure": "Horizon-specific error, interval coverage, performance around disruptions, data preparation time, inference cost and the cost of under- or over-planning.",
      "watchouts": [
        "Future-information leakage",
        "Sparse data and structural breaks",
        "Poorly calibrated intervals",
        "Hosting, licensing and remote-API data flows"
      ],
      "companyIds": [
        "anomalo",
        "nixtla"
      ],
      "sourceIds": [
        "nixtla-foundry",
        "nixtla-microsoft-catalog",
        "nixtla-sdk",
        "anomalo-home"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "its": "its-data",
        "wbg": "wbg-decisions",
        "frontier": "frontier-models"
      }
    },
    {
      "id": "adaptive-learning",
      "title": "Adaptive foundational learning with teachers",
      "shortTitle": "Foundational learning",
      "domain": "inclusion",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "summary": "Digital practice and teacher analytics that adapt to a learner's progress in bounded skills such as mathematics or early literacy.",
      "whyNow": "Programs and evaluations now provide concrete evidence about curriculum-aligned adaptive tools, while offline-capable designs widen the set of implementation conditions worth testing.",
      "application": "Help teachers target practice and support without assuming that every child has a connected personal device or that a general chatbot is an effective tutor.",
      "experiment": "Choose a curriculum-matched learning unit and compare equivalent instructional time using independent assessments, with documented teacher support and device access.",
      "measure": "Independent learning improvement, continued use, teacher workload, participation gaps, implementation fidelity and full recurring cost per learner.",
      "watchouts": [
        "Curriculum and language mismatch",
        "Children's data and accessibility",
        "Implementation effects mistaken for model effects",
        "Vendor learning-gain claims that do not transfer"
      ],
      "companyIds": [
        "eduten",
        "eidu"
      ],
      "sourceIds": [
        "eduten-about",
        "eduten-unicef",
        "eidu-platform",
        "eidu-developer"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-health"
      }
    },
    {
      "id": "supply-chain-intelligence",
      "title": "Connected trade data for essential-supply resilience",
      "shortTitle": "Supply-chain intelligence",
      "domain": "enterprise",
      "ring": "assess",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "summary": "Combining trade and business records into connected networks to reveal concentration, dependencies and potential disruption pathways.",
      "whyNow": "Commercial platforms package relationship mapping and scenario analysis for government and enterprise users. The useful question is now whether their underlying evidence covers a specific development decision.",
      "application": "Identify fragile import or supplier dependencies for essential medicines, energy equipment or other critical inputs and test realistic alternatives with sector specialists.",
      "experiment": "Map one narrowly defined commodity or component chain. Validate a sample of important links independently and compare the result with existing trade and procurement analysis.",
      "measure": "Verified dependencies found, coverage gaps, false links, analyst effort and whether the additional evidence changes a practical sourcing or resilience decision.",
      "watchouts": [
        "Opaque or licensed underlying data",
        "Inferred relationships mistaken for facts",
        "Uneven country and informal-sector coverage",
        "Automated compliance judgments without review"
      ],
      "companyIds": [
        "altana"
      ],
      "sourceIds": [
        "altana-government",
        "altana-fedramp"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Source-linked technology research",
      "domainsByLens": {
        "wbg": "wbg-decisions"
      }
    },
    {
      "id": "skills-to-work",
      "title": "Skills intelligence connects learning with work",
      "shortTitle": "Skills to work",
      "domain": "inclusion",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "wbg",
        "its"
      ],
      "domainsByLens": {
        "wbg": "wbg-health",
        "its": "its-knowledge"
      },
      "summary": "Platforms link skills, learning and work opportunities so people can identify practical next steps and institutions can understand changing capability needs.",
      "whyNow": "Skills and employment are explicit WBG digital priorities. Commercial platforms now combine career guidance, matching, learning and internal opportunities; the open question is whether those connections improve access and sustained outcomes.",
      "application": "Explore which combinations of information, training and employer engagement help a defined group reach suitable opportunities. For ITS, examine voluntary development pathways for staff adapting to AI-enabled work.",
      "applicationsByLens": {
        "wbg": "Help a workforce program connect its training offer with observable employer demand and usable guidance for jobseekers.",
        "its": "Map voluntary skills-development pathways and project opportunities as work changes, keeping people in control of their profiles and choices."
      },
      "experiment": "Use anonymized role requirements and opt-in participant profiles to compare suggested learning and opportunities with expert guidance. Review relevance and access barriers before any live employment decisions.",
      "measure": "Useful recommendations, pathway completion, access across participant groups and later employment or internal-mobility outcomes; do not equate matches with jobs created.",
      "watchouts": [
        "Biased or incomplete skills profiles",
        "Matching quality is not job creation",
        "Demand and access vary by labour market",
        "Transparency, consent and correction of personal profiles"
      ],
      "companyIds": [
        "fuzu",
        "gloat"
      ],
      "sourceIds": [
        "wbg-jobs-strategy",
        "wbg-digital",
        "fuzu-employers",
        "fuzu-learn",
        "gloat-talent",
        "gloat-product"
      ],
      "verified": "2026-11-23",
      "evidenceLabel": "Commercial capabilities; development and institutional fit require evaluation",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "productive-small-firms",
      "title": "Digital operating tools for productive small firms",
      "shortTitle": "Productive small firms",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-decisions"
      },
      "summary": "Accessible devices, digital payments, records and sales channels help small businesses participate in markets and manage daily operations.",
      "whyNow": "The WBG jobs agenda emphasizes productive firms and entrepreneurship. Existing providers illustrate different routes: integrated merchant tools, hospitality distribution and device financing designed around irregular earnings.",
      "application": "Examine the bottleneck for a particular group of firms before choosing technology: accepting payments, maintaining stock records, reaching guests or obtaining a usable connected device.",
      "experiment": "Follow a small consenting cohort through one complete operating cycle. Compare time, errors, net costs and business outcomes with its previous practice, including continued manual or offline options.",
      "measure": "Active use, reconciliation or stock errors, staff time, net selling costs and earnings after fees and financing; separate growth from seasonal demand changes.",
      "watchouts": [
        "Total fees and financing cost",
        "Platform dependence and data portability",
        "Connectivity and support burden",
        "Adoption does not establish additional jobs"
      ],
      "companyIds": [
        "moniepoint",
        "hotelrunner",
        "m-kopa"
      ],
      "sourceIds": [
        "wbg-jobs-faq",
        "wbg-digital",
        "moniepoint-business",
        "hotelrunner-about",
        "hotelrunner-pms",
        "mkopa-products",
        "mkopa-2026-milestone"
      ],
      "verified": "2026-11-23",
      "evidenceLabel": "Existing commercial services; proposed development applications",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "interoperable-public-infrastructure",
      "title": "Reusable public infrastructure connects services and payments",
      "shortTitle": "Interoperable public infrastructure",
      "domain": "inclusion",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-services"
      },
      "summary": "Shared registries, service components and interoperable payment infrastructure allow institutions to build connected services without recreating every foundation.",
      "whyNow": "The WBG Global DPI Program treats identity, payments and secure data sharing as reusable foundations. Public-good ecosystems provide reference implementations that make architecture and operating choices tangible.",
      "application": "Assess how a public service can use shared identity, records and payment capabilities while retaining clear institutional responsibility, exception handling and accessible channels.",
      "experiment": "Build one synthetic service journey in a sandbox: verify a record, calculate an authorized charge or benefit, route a simulated payment and reconcile the result. Deliberately test missing records and interrupted transactions.",
      "measure": "Reusable components, integration effort, reconciliation accuracy, exception recovery and ability to switch or extend providers; never infer country readiness from a working demo.",
      "watchouts": [
        "Operating governance matters as much as code",
        "Open source does not remove implementation cost",
        "Exclusion through missing or mismatched records",
        "Privacy, access controls and payment-scheme rules"
      ],
      "companyIds": [
        "egov-digit",
        "mojaloop"
      ],
      "sourceIds": [
        "wbg-dpi",
        "egov-digit-platform",
        "egov-about",
        "mojaloop-mission",
        "mojaloop-merchant-2026"
      ],
      "verified": "2026-11-23",
      "evidenceLabel": "Open-source public-good platforms; local deployment requires implementation and governance",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "document-intelligence",
      "title": "Document intelligence that preserves usable evidence",
      "shortTitle": "Document intelligence",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "wbg"
      ],
      "domainsByLens": {
        "its": "its-knowledge",
        "wbg": "wbg-decisions"
      },
      "summary": "Turn scans, tables, forms and long reports into structured records that preserve their location and meaning in the original document.",
      "whyNow": "Dedicated document tools expose layout, structured fields and source coordinates. Unstructured introduced its rebuilt Transform parser in October 2026, while Reducto and Mistral document services provide concrete alternatives to test on difficult files.",
      "application": "Make project reports and supporting annexes easier to search and compare without detaching a figure, date or statement from its original table, page and document version.",
      "applicationsByLens": {
        "its": "Improve the document pipeline feeding institutional search and agents, including difficult PDFs and tables, with traceable extraction and retained source permissions.",
        "wbg": "Compare indicators across public project reports and annexes while retaining page-level evidence and flagging changes in definitions, reporting periods and units."
      },
      "experiment": "Use 50 public reports with scanned pages, multilingual text and complex tables. Build a human-checked reference set of fields and supporting page regions, then compare two extraction approaches on the same files.",
      "measure": "Correct fields with correct units and periods; preserved table relationships; unsupported values; usable source locations; reviewer time and cost per accepted record.",
      "watchouts": [
        "Correct text assigned to the wrong column",
        "Source permissions lost during indexing",
        "Unsupported languages or degraded scans",
        "Confidence scores mistaken for verified correctness"
      ],
      "companyIds": [
        "unstructured",
        "reducto",
        "mistral-ai"
      ],
      "sourceIds": [
        "unstructured-transform-2026",
        "reducto-developers",
        "mistral-ocr41"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "ai-portfolio-governance",
      "title": "Connected governance for deployed AI and agents",
      "shortTitle": "AI portfolio governance",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its"
      ],
      "domainsByLens": {
        "its": "its-trust"
      },
      "summary": "Connect an AI use to its models, agents, tools, vendors and review evidence so a change in one component can trigger the right reassessment.",
      "whyNow": "Agent systems create dependencies that a flat application list misses. Credo AI's November 2026 release explicitly connects agents, MCP servers and deployment platforms with use cases and governance records.",
      "application": "Answer which institutional services rely on a changed model or tool, what was evaluated, who approved the deployment and whether the relevant evidence is still current.",
      "experiment": "Map five existing sandbox applications and their actual dependencies. Introduce a model-version change, a revoked tool and an expired evaluation; check which affected applications and reviewers the system identifies.",
      "measure": "Dependency coverage, missed affected applications, time to locate valid evidence, duplicated review effort and clarity of the decision history.",
      "watchouts": [
        "A complete-looking registry with missing systems",
        "Policy templates treated as institutional approval",
        "Recorded reviews without effective technical controls",
        "Governance effort that exceeds the risk being managed"
      ],
      "companyIds": [
        "credo-ai"
      ],
      "sourceIds": [
        "credo-agent-governance-2026",
        "credo-platform"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.3"
    }
  ],
  "companies": [
    {
      "id": "cognition",
      "name": "Cognition",
      "website": "https://cognition.com/",
      "category": "AI software engineering",
      "summary": "Develops Devin, which plans, writes, tests and delivers code changes within a team's codebase and development tools.",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "software-agents"
      ],
      "region": "",
      "proposedUse": "Supervised maintenance tasks for internal prototypes and software services.",
      "sourceIds": [
        "cognition-about",
        "cognition-series-e"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-software",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "factory",
      "name": "Factory",
      "website": "https://factory.com/",
      "category": "AI software engineering",
      "summary": "Develops Droids that plan, build, review and validate software changes across development tools, with enterprise deployment and governance options.",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "software-agents"
      ],
      "region": "",
      "proposedUse": "Evaluate a bounded software-maintenance task in an Azure sandbox, including pull-request review in Azure DevOps and workload isolation.",
      "sourceIds": [
        "factory-home",
        "factory-azure",
        "factory-company-news",
        "wbg-govtech-country-work"
      ],
      "verified": "2026-11-24",
      "availability": "Commercial platform; deployment options depend on configuration",
      "note": "",
      "distinctive": "Software agents paired with documented Azure deployment, Azure DevOps and Microsoft workflow integration; useful to compare within an existing enterprise engineering environment.",
      "evaluationQuestion": "On the same maintenance backlog, what proportion of changes passes tests and human review, and how much reviewer time does each accepted change require?",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-software",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "replit",
      "name": "Replit",
      "website": "https://replit.com/",
      "category": "Agentic software platform",
      "summary": "Combines cloud development and AI agents; Missions coordinates agents to plan, build, test and iterate toward a specified outcome.",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "software-agents",
        "lean-ai-native"
      ],
      "region": "",
      "proposedUse": "Prototype bounded internal tools, then assess security, maintainability and operational cost before wider use.",
      "sourceIds": [
        "replit-missions"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial platform; check feature availability",
      "note": "",
      "distinctive": "A connected environment for building, iterating and deploying applications, including longer-running Missions; relevant to the full prototype-to-operation workflow.",
      "evaluationQuestion": "Can a team revise and maintain the delivered application, and what controls, costs and external dependencies remain after the demonstration?",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-software",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "seekr",
      "name": "Seekr",
      "website": "https://www.seekr.com/",
      "category": "Enterprise AI platform",
      "summary": "SeekrFlow Agents supports planning, tool use and controlled execution for enterprise agent workflows.",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "enterprise-agents"
      ],
      "region": "",
      "proposedUse": "Evaluate a supervised workflow that retrieves organizational knowledge and drafts a decision brief.",
      "sourceIds": [
        "seekr-agents"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge"
      }
    },
    {
      "id": "dust",
      "name": "Dust",
      "website": "https://dust.tt/",
      "category": "Enterprise agent platform",
      "summary": "Provides enterprise AI agents with organizational integrations, access controls, audit logs and APIs for custom workflows.",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "enterprise-agents"
      ],
      "region": "",
      "proposedUse": "Compare an evidence-linked team-research assistant on approved project documents and technical guidance, with source permissions preserved.",
      "sourceIds": [
        "dust-enterprise"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge"
      }
    },
    {
      "id": "glean",
      "name": "Glean",
      "website": "https://www.glean.com/",
      "category": "Enterprise knowledge and agents",
      "summary": "Combines knowledge, instructions, tools and context in reusable agents, with adaptive and explicit workflow modes.",
      "domain": "enterprise",
      "ring": "experiment",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "enterprise-agents",
        "context-memory"
      ],
      "region": "",
      "proposedUse": "Assess permission-aware knowledge discovery and repeatable document preparation.",
      "sourceIds": [
        "glean-agents"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product; features depend on deployment",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge"
      }
    },
    {
      "id": "syntes",
      "name": "Syntes AI",
      "website": "https://syntes.ai/",
      "category": "Context engineering and agentic applications",
      "summary": "Builds graph-based enterprise context and AI applications that connect data, documents and operational workflows.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "context-memory",
        "enterprise-agents"
      ],
      "region": "Maryland, United States",
      "proposedUse": "Explore how an ontology could connect project, process and decision records for a bounded process-improvement workflow.",
      "sourceIds": [
        "syntes-home",
        "syntes-tedco"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial platform",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge"
      }
    },
    {
      "id": "zep",
      "name": "Zep",
      "website": "https://www.getzep.com/",
      "category": "Agent memory infrastructure",
      "summary": "Provides temporal knowledge-graph infrastructure for agent memory, recording relationships, changing facts and provenance.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "context-memory"
      ],
      "region": "",
      "proposedUse": "Test whether project assistants correctly distinguish current decisions from superseded information.",
      "sourceIds": [
        "zep-memory"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial platform and open-source components",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge"
      }
    },
    {
      "id": "letta",
      "name": "Letta",
      "website": "https://www.letta.com/",
      "category": "Stateful agent infrastructure",
      "summary": "Builds stateful agents with persistent memory, tool configuration and identity across conversations and interfaces.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "context-memory"
      ],
      "region": "",
      "proposedUse": "Prototype a long-running project assistant with inspectable memory and explicit retention rules.",
      "sourceIds": [
        "letta-state"
      ],
      "verified": "2026-11-23",
      "availability": "Developer platform",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge"
      }
    },
    {
      "id": "composio",
      "name": "Composio",
      "website": "https://composio.dev/",
      "category": "Agent integrations and authentication",
      "summary": "Provides tools and per-user authentication for agents to access connected applications, with scoped sessions and MCP support.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "agent-interoperability"
      ],
      "region": "",
      "proposedUse": "Assess the feasibility of safely connecting a bounded agent to approved business systems.",
      "sourceIds": [
        "composio-docs"
      ],
      "verified": "2026-11-23",
      "availability": "Developer platform",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust",
        "frontier": "frontier-foundations"
      }
    },
    {
      "id": "arcade",
      "name": "Arcade",
      "website": "https://www.arcade.dev/",
      "category": "Agent tool authorization and runtime",
      "summary": "Provides agent tool execution, per-action authorization and MCP gateways across connected services.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "agent-interoperability"
      ],
      "region": "",
      "proposedUse": "Test user-scoped authorization and explicit write permissions for workflow agents.",
      "sourceIds": [
        "arcade-developers"
      ],
      "verified": "2026-11-23",
      "availability": "Developer platform",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust",
        "frontier": "frontier-foundations"
      }
    },
    {
      "id": "langchain",
      "name": "LangChain",
      "website": "https://www.langchain.com/",
      "category": "Agent orchestration and deployment",
      "summary": "Develops agent frameworks and LangSmith; Agent Server provides durable execution, approvals, memory and agent protocol support.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier",
        "wbg"
      ],
      "trendIds": [
        "agent-interoperability",
        "agent-evaluation"
      ],
      "region": "",
      "proposedUse": "Implement and inspect a multi-step workflow with checkpoints, human decisions and recoverable execution.",
      "sourceIds": [
        "langsmith-server"
      ],
      "verified": "2026-11-23",
      "availability": "Open-source frameworks and commercial platform",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust",
        "frontier": "frontier-foundations",
        "wbg": "wbg-services"
      }
    },
    {
      "id": "arize",
      "name": "Arize AI",
      "website": "https://arize.com/",
      "category": "AI observability and evaluation",
      "summary": "Provides agent tracing and evaluation; its OpenInference work is built on OpenTelemetry, with Phoenix available for local or self-hosted use.",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "its",
        "wbg"
      ],
      "trendIds": [
        "agent-evaluation"
      ],
      "region": "",
      "proposedUse": "Instrument a WBG prototype and measure task success, tool behavior and model quality.",
      "sourceIds": [
        "arize-home"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial platform and open-source Phoenix",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust",
        "wbg": "wbg-services"
      }
    },
    {
      "id": "braintrust",
      "name": "Braintrust",
      "website": "https://www.braintrust.dev/",
      "category": "AI evaluation and observability",
      "summary": "Connects agent traces, datasets, experiments and automated or human scoring to investigate behavior and evaluate changes.",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "its",
        "wbg"
      ],
      "trendIds": [
        "agent-evaluation"
      ],
      "region": "",
      "proposedUse": "Compare prompts and models against an expert-reviewed set of project tasks.",
      "sourceIds": [
        "braintrust-home"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial platform",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust",
        "wbg": "wbg-services"
      }
    },
    {
      "id": "galileo",
      "name": "Galileo",
      "website": "https://galileo.ai/",
      "category": "AI observability, evaluation and guardrails",
      "summary": "Offers agent observability, evaluation metrics, failure analysis and runtime guardrails.",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "its",
        "wbg"
      ],
      "trendIds": [
        "agent-evaluation"
      ],
      "region": "",
      "proposedUse": "Test reliability and sensitive-data handling for a bounded knowledge assistant.",
      "sourceIds": [
        "galileo-product"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial platform",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust",
        "wbg": "wbg-services"
      }
    },
    {
      "id": "ravenopus",
      "name": "Ravenopus",
      "website": "https://ravenopus.com/",
      "category": "AI-native marketing agency",
      "summary": "Describes a marketing agency in which one human operator oversees specialized AI agents and reviews the work delivered.",
      "domain": "enterprise",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "lean-ai-native"
      ],
      "region": "",
      "proposedUse": "Discuss human review limits, accountability and service economics through a founder-led demonstration of one completed deliverable.",
      "sourceIds": [
        "ravenopus-home"
      ],
      "verified": "2026-11-23",
      "availability": "Service business; operating model is self-described",
      "note": "A company-described single-operator delivery model, not independently verified total legal headcount. Public performance claims have not been reproduced here.",
      "distinctive": "A vendor-described delivery model in which one operator oversees specialized agents, making the human review and business economics an informative case to examine.",
      "evaluationQuestion": "Walk through one completed deliverable, including human edits, failed attempts, total cost and the work that still required a specialist.",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "A company-described single-operator delivery model, not independently verified total legal headcount. Public performance claims have not been reproduced here.",
      "domainsByLens": {
        "its": "its-knowledge",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "polsia",
      "name": "Polsia",
      "website": "https://polsia.com/",
      "category": "AI business operations platform",
      "summary": "Offers AI-driven workflows for business planning, content creation, task execution and connected-service actions, subject to user-configured permissions.",
      "domain": "enterprise",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "lean-ai-native"
      ],
      "region": "",
      "proposedUse": "Study bounded entrepreneurial workflows using a fictional business and no live external commitments.",
      "sourceIds": [
        "polsia-terms"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial service; capabilities depend on configuration",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "lindy",
      "name": "Lindy",
      "website": "https://www.lindy.ai/",
      "category": "AI work assistant",
      "summary": "Executes tasks across connected tools, supporting personal assistance, shared-team work and recurring routines.",
      "domain": "enterprise",
      "ring": "assess",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "lean-ai-native",
        "enterprise-agents"
      ],
      "region": "",
      "proposedUse": "Observe how a small team delegates repetitive coordination work while retaining approvals.",
      "sourceIds": [
        "lindy-docs"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-knowledge",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "bricklayer",
      "name": "Bricklayer AI",
      "website": "https://www.bricklayer.ai/",
      "category": "Agentic security operations",
      "summary": "Coordinates specialized agents across security tools, data and operating procedures for investigation and related workflows.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "agentic-security"
      ],
      "region": "",
      "proposedUse": "Review an analyst-led security investigation demonstration with full evidence and action records.",
      "sourceIds": [
        "bricklayer-platform"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust"
      }
    },
    {
      "id": "dropzone",
      "name": "Dropzone AI",
      "website": "https://www.dropzone.ai/",
      "category": "AI security investigations",
      "summary": "Investigates security alerts using evidence from connected security tools and returns case findings for analyst review.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "agentic-security"
      ],
      "region": "",
      "proposedUse": "Benchmark evidence quality and analyst review time on historical alerts in an isolated evaluation.",
      "sourceIds": [
        "dropzone-product"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust"
      }
    },
    {
      "id": "torq",
      "name": "Torq",
      "website": "https://torq.io/",
      "category": "Security automation and AI agents",
      "summary": "Combines automation, specialized agents and case management for security triage, investigation and response.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "agentic-security"
      ],
      "region": "",
      "proposedUse": "Assess controlled orchestration across existing security tools, starting with read-only investigations.",
      "sourceIds": [
        "torq-platform"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial product",
      "note": "",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "its": "its-trust"
      }
    },
    {
      "id": "figure",
      "name": "Figure",
      "website": "https://www.figure.ai/",
      "category": "Humanoid robotics",
      "summary": "Develops humanoid robots and Helix models that integrate perception with whole-body manipulation and movement.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "physical-ai"
      ],
      "region": "",
      "proposedUse": "Track physical task automation and its implications for industrial productivity, safety and jobs.",
      "sourceIds": [
        "figure-helix02"
      ],
      "verified": "2026-11-23",
      "availability": "Development and deployment programs; assess task-specific readiness",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-physical"
      }
    },
    {
      "id": "physical-intelligence",
      "name": "Physical Intelligence",
      "website": "https://www.pi.website/",
      "category": "Robotics foundation models",
      "summary": "Develops generalist robot-control models; its API beta supports data uploads, fine-tuning and hosted inference for robots.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "physical-ai"
      ],
      "region": "",
      "proposedUse": "Explore whether reusable robot models can lower the cost of a constrained inspection or handling task.",
      "sourceIds": [
        "pi-api"
      ],
      "verified": "2026-11-23",
      "availability": "Research and API beta; access via waitlist",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-physical"
      }
    },
    {
      "id": "skild",
      "name": "Skild AI",
      "website": "https://www.skild.ai/",
      "category": "Robotics intelligence",
      "summary": "Develops a shared robotics model across hardware types, with applications including inspection, mobile manipulation and packing.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "physical-ai"
      ],
      "region": "",
      "proposedUse": "Track adaptable robotics for infrastructure inspection and industrial safety; request task-specific field evidence.",
      "sourceIds": [
        "skild-home"
      ],
      "verified": "2026-11-23",
      "availability": "Development and commercial applications",
      "note": "",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-physical"
      }
    },
    {
      "id": "odyssey",
      "name": "Odyssey",
      "website": "https://odyssey.systems/",
      "category": "Foundation world models",
      "summary": "Develops interactive world models that predict how objects and situations change; Odyssey-3 was introduced in October 2026.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "world-models"
      ],
      "region": "",
      "proposedUse": "Explore scenario communication and training, while testing consistency and avoiding unvalidated engineering claims.",
      "sourceIds": [
        "odyssey3"
      ],
      "verified": "2026-11-23",
      "availability": "Research preview; developer access varies",
      "note": "",
      "horizon": "horizon",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-physical"
      }
    },
    {
      "id": "wayve",
      "name": "Wayve",
      "website": "https://wayve.ai/",
      "category": "Embodied AI and autonomous driving",
      "summary": "Develops AI for autonomous driving and GAIA world models for simulated evaluation and validation.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "world-models",
        "physical-ai"
      ],
      "region": "",
      "proposedUse": "Study evaluation methods and transfer limits relevant to future transport and road-safety research.",
      "sourceIds": [
        "wayve-gaia3"
      ],
      "verified": "2026-11-23",
      "availability": "Development and industry partnerships",
      "note": "",
      "horizon": "horizon",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-physical"
      }
    },
    {
      "id": "waabi",
      "name": "Waabi",
      "website": "https://waabi.ai/",
      "category": "Autonomous mobility and simulation",
      "summary": "Uses Waabi World, a neural simulator, to train and test its autonomous-driving models across synthetic scenarios.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "world-models"
      ],
      "region": "",
      "proposedUse": "Examine how simulation evidence is constructed and validated for transport applications.",
      "sourceIds": [
        "waabi-technology"
      ],
      "verified": "2026-11-23",
      "availability": "Development and deployment programs",
      "note": "",
      "horizon": "horizon",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-physical"
      }
    },
    {
      "id": "psiquantum",
      "name": "PsiQuantum",
      "website": "https://www.psiquantum.com/",
      "category": "Photonic quantum computing",
      "summary": "Develops a photonic architecture aimed at large-scale, fault-tolerant quantum computing.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "fault-tolerant-quantum"
      ],
      "region": "",
      "proposedUse": "Follow credible technical milestones and resource requirements for longer-term scientific applications.",
      "sourceIds": [
        "psiquantum-architecture"
      ],
      "verified": "2026-11-23",
      "availability": "Research and system development",
      "note": "",
      "horizon": "horizon",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-compute"
      }
    },
    {
      "id": "riverlane",
      "name": "Riverlane",
      "website": "https://www.riverlane.com/",
      "category": "Quantum error correction",
      "summary": "Develops the hardware and software stack used to detect and correct quantum errors in computing systems.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "fault-tolerant-quantum"
      ],
      "region": "",
      "proposedUse": "Understand error-correction progress and how it changes realistic quantum-computing timelines.",
      "sourceIds": [
        "riverlane-home",
        "riverlane-qec-loop"
      ],
      "verified": "2026-11-23",
      "availability": "Hardware, software and research partnerships",
      "note": "",
      "horizon": "horizon",
      "evidenceLabel": "Company product information",
      "evidenceNote": "",
      "domainsByLens": {
        "frontier": "frontier-compute"
      }
    },
    {
      "id": "alice-bob",
      "name": "Alice & Bob",
      "website": "https://alice-bob.com/",
      "category": "Cat-qubit quantum computing",
      "summary": "Develops superconducting cat-qubit systems to pursue fault-tolerant computing; its updated roadmap sets future logical-qubit targets.",
      "domain": "frontier",
      "ring": "watch",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "fault-tolerant-quantum"
      ],
      "region": "Paris, France and Boston, United States",
      "proposedUse": "Use as a technical horizon-scan case, clearly separating demonstrated results from roadmap targets.",
      "sourceIds": [
        "alicebob-roadmap",
        "alicebob-results"
      ],
      "verified": "2026-11-23",
      "availability": "Research systems and development roadmap",
      "note": "Its October 2026 prototype report states that the logical error rate was not yet below threshold; later roadmap targets are not delivered utility-scale systems.",
      "horizon": "horizon",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Its October 2026 prototype report states that the logical error rate was not yet below threshold; later roadmap targets are not delivered utility-scale systems.",
      "domainsByLens": {
        "frontier": "frontier-compute"
      }
    },
    {
      "id": "amini",
      "name": "Amini",
      "website": "https://www.amini.ai/",
      "category": "Locally governed data and AI infrastructure",
      "summary": "Builds a stack covering record digitisation, governed data, local compute and AI applications for Global South governments and enterprises.",
      "domain": "trust",
      "ring": "assess",
      "lenses": [
        "wbg",
        "its"
      ],
      "trendIds": [
        "sovereign-data-ai"
      ],
      "region": "Global South",
      "location": "Nairobi office evidenced on company site",
      "proposedUse": "govern and digitise fragmented ministry records before introducing an AI service.",
      "sourceIds": [
        "amini"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Validate deployed references, interoperability, power requirements and lifetime operating costs.",
      "distinctive": "An Africa-focused data and compute proposition linking locally relevant datasets, infrastructure and AI applications.",
      "evaluationQuestion": "Which local datasets, hosting arrangements and operating capabilities are available for the specific country use case?",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Validate deployed references, interoperability, power requirements and lifetime operating costs.",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-cloud"
      }
    },
    {
      "id": "pixxel",
      "name": "Pixxel",
      "website": "https://www.pixxel.space/",
      "category": "Hyperspectral Earth imagery",
      "summary": "Operates hyperspectral Earth-observation satellites and software for accessing and analysing spectral imagery.",
      "domain": "climate",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "geospatial-intelligence"
      ],
      "region": "Global",
      "location": "Bengaluru, India; US operations also described by company",
      "proposedUse": "investigate crop stress, water quality or environmental change where spectral information adds value.",
      "sourceIds": [
        "pixxel",
        "pixxel-nasa",
        "pixxel-contact"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Check revisit, cloud cover, licensing and field calibration for the specific decision.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Check revisit, cloud cover, licensing and field calibration for the specific decision.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "satvu",
      "name": "SatVu",
      "website": "https://www.satellitevu.com/",
      "category": "Thermal Earth imagery",
      "summary": "Supplies high-resolution thermal satellite imagery; archived and newly tasked HotSat-2 captures are accessible through SkyFi.",
      "domain": "climate",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "geospatial-intelligence"
      ],
      "region": "Global",
      "location": "United Kingdom",
      "proposedUse": "assess urban heat and industrial or infrastructure thermal signatures.",
      "sourceIds": [
        "satvu"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "HotSat-3 tasking was described in October 2026 as expected in early 2027; do not present it as generally available now.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "HotSat-3 tasking was described in October 2026 as expected in early 2027; do not present it as generally available now.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "tomorrow",
      "name": "Tomorrow.io",
      "website": "https://www.tomorrow.io/",
      "category": "Weather intelligence",
      "summary": "Combines weather modelling, satellite observations and operational weather-intelligence services.",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "climate-adaptation"
      ],
      "region": "Global",
      "location": null,
      "proposedUse": "evaluate hazard-specific early warning for a transport, agriculture or resilience operation.",
      "sourceIds": [
        "tomorrow",
        "tomorrow-noaa"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Compare local skill and lead time against national meteorological services and independent data.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Compare local skill and lead time against national meteorological services and independent data.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "floodbase",
      "name": "Floodbase",
      "website": "https://www.floodbase.com/",
      "category": "Flood data and risk finance",
      "summary": "Produces flood monitoring and intelligence to design, monitor and trigger parametric flood insurance.",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "climate-adaptation"
      ],
      "region": "Global",
      "location": null,
      "proposedUse": "assess whether event triggers improve financial protection for a defined exposed area.",
      "sourceIds": [
        "floodbase"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Quantify basis risk: the trigger can differ from actual household or asset loss.",
      "distinctive": "Flood mapping and risk data with applications in parametric insurance, connecting an observed hazard to a financial instrument.",
      "evaluationQuestion": "How closely would the proposed trigger match observed local losses, including events that a model or satellite view misses?",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Quantify basis risk: the trigger can differ from actual household or asset loss.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "climate-x",
      "name": "Climate X",
      "website": "https://www.climate-x.com/",
      "category": "Physical climate risk analytics",
      "summary": "Provides asset-level physical climate-risk and financial-loss analytics, alongside adaptation assessment tools.",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "climate-adaptation"
      ],
      "region": "Global",
      "location": null,
      "proposedUse": "compare adaptation options for a documented public-asset portfolio.",
      "sourceIds": [
        "climatex",
        "climatex-sep"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Treat loss and cost estimates as modelled scenarios; inspect local asset data and assumptions.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Treat loss and cost estimates as modelled scenarios; inspect local asset data and assumptions.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "sarvam",
      "name": "Sarvam AI",
      "website": "https://www.sarvam.ai/",
      "category": "Multilingual AI models",
      "summary": "Develops Indian-language speech, dictation, translation and document APIs; its November releases add edited dictation and structured extraction with source locations.",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg",
        "its"
      ],
      "trendIds": [
        "local-language-ai",
        "sovereign-data-ai"
      ],
      "region": "India / South Asia",
      "location": "Bengaluru, India",
      "proposedUse": "evaluate language accessibility in service enquiries and document workflows.",
      "sourceIds": [
        "sarvam",
        "sarvam-v4",
        "sarvam-location",
        "sarvam-dictate-20261123",
        "sarvam-extract-20261124",
        "sarvam-saaras-docs",
        "wbg-dpi-program-2026"
      ],
      "verified": "2026-11-24",
      "availability": "Commercial offering; verify local availability",
      "note": "Evaluate the actual target languages and scripts; vendor benchmark leadership is not proof of local task performance.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Evaluate the actual target languages and scripts; vendor benchmark leadership is not proof of local task performance.",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-models"
      }
    },
    {
      "id": "lelapa",
      "name": "Lelapa AI",
      "website": "https://lelapa.ai/",
      "category": "African-language AI",
      "summary": "Offers Vulavula APIs for speech transcription and translation across supported African languages.",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "local-language-ai"
      ],
      "region": "Africa",
      "location": "Johannesburg, South Africa",
      "proposedUse": "transcribe and triage service feedback in selected African languages.",
      "sourceIds": [
        "lelapa",
        "lelapa-location"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Supported languages and quality vary; build a locally representative evaluation set.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Supported languages and quality vary; build a locally representative evaluation set.",
      "domainsByLens": {
        "wbg": "wbg-services"
      }
    },
    {
      "id": "viamo",
      "name": "Viamo",
      "website": "https://viamo.io/",
      "category": "Information services by phone",
      "summary": "Delivers voice services and AI-assisted information through ordinary mobile calls, including basic feature phones.",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "local-language-ai"
      ],
      "region": "Africa and Asia",
      "location": "Saskatoon, Canada (announcement dateline)",
      "proposedUse": "reach people excluded by smartphone, literacy or mobile-data requirements.",
      "sourceIds": [
        "viamo",
        "viamo-ava"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "'No internet' describes the caller’s device access, not an internet-free backend; verify country and language availability.",
      "distinctive": "A phone-based delivery channel that can reach people without requiring a smartphone application.",
      "evaluationQuestion": "Can representative users obtain and understand verified information in their language and connectivity conditions?",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "'No internet' describes the caller’s device access, not an internet-free backend; verify country and language availability.",
      "domainsByLens": {
        "wbg": "wbg-services"
      }
    },
    {
      "id": "smile-id",
      "name": "Smile ID",
      "website": "https://smile.id/",
      "category": "Digital identity verification",
      "summary": "Provides identity verification using documents, biometrics and other signals, with products designed around local market conditions.",
      "domain": "inclusion",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "inclusive-digital-services"
      ],
      "region": "Africa / emerging markets",
      "location": null,
      "proposedUse": "test assisted digital onboarding and fraud controls for an inclusive service journey.",
      "sourceIds": [
        "smile"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Check country coverage, demographic false-rejection rates, legal basis and a non-biometric fallback.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Check country coverage, demographic false-rejection rates, legal basis and a non-biometric fallback.",
      "domainsByLens": {
        "wbg": "wbg-services"
      }
    },
    {
      "id": "yoti",
      "name": "Yoti",
      "website": "https://www.yoti.com/",
      "category": "Digital identity",
      "summary": "Provides reusable digital identity and identity-verification services.",
      "domain": "inclusion",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "inclusive-digital-services"
      ],
      "region": "Global, subject to document and country coverage",
      "location": null,
      "proposedUse": "examine selective identity sharing and reusable verification for a defined service.",
      "sourceIds": [
        "yoti"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "A commercial credential is not national ID; check coverage, privacy and accessibility.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "A commercial credential is not national ID; check coverage, privacy and accessibility.",
      "domainsByLens": {
        "wbg": "wbg-services"
      }
    },
    {
      "id": "jumo",
      "name": "JUMO",
      "website": "https://jumo.world/",
      "category": "Financial services infrastructure",
      "summary": "Provides software infrastructure that enables banks, mobile-money operators and platforms to deliver digital credit and savings.",
      "domain": "inclusion",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "inclusive-digital-services"
      ],
      "region": "Emerging markets, including Africa",
      "location": null,
      "proposedUse": "study the economics and consumer outcomes of small-business financial access.",
      "sourceIds": [
        "jumo",
        "jumo-finance"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Assess effective costs, affordability, explainability, complaints and over-indebtedness alongside access.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Assess effective costs, affordability, explainability, complaints and over-indebtedness alongside access.",
      "domainsByLens": {
        "wbg": "wbg-services"
      }
    },
    {
      "id": "newlogic",
      "name": "Newlogic",
      "website": "https://newlogic.com/",
      "category": "Digital public infrastructure implementation",
      "summary": "Designs and implements digital identity, cash-transfer and open-source digital public infrastructure systems.",
      "domain": "inclusion",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "inclusive-digital-services"
      ],
      "region": "Southeast Asia / international programs",
      "location": "Singapore; offices across Southeast Asia",
      "proposedUse": "an implementation reference for interoperable registration and benefit-delivery workflows.",
      "sourceIds": [
        "newlogic"
      ],
      "verified": "2026-11-23",
      "availability": "Implementation provider",
      "note": "Listed as an ecosystem implementation provider, not claimed to be a venture-stage startup.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Listed as an ecosystem implementation provider, not claimed to be a venture-stage startup.",
      "domainsByLens": {
        "wbg": "wbg-services"
      }
    },
    {
      "id": "cropin",
      "name": "Cropin",
      "website": "https://www.cropin.com/",
      "category": "Agricultural intelligence",
      "summary": "Combines field, satellite and weather data with agricultural models and OrbitAI agents for food-system decisions.",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "agriculture-intelligence"
      ],
      "region": "Global, with India origins",
      "location": "Bengaluru, India / Palo Alto, US (announcement locations)",
      "proposedUse": "support evidence-linked crop monitoring and extension workflows.",
      "sourceIds": [
        "cropin"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Distinguish currently available agents from planned domains and independently validate recommendations.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Distinguish currently available agents from planned domains and independently validate recommendations.",
      "domainsByLens": {
        "wbg": "wbg-food"
      }
    },
    {
      "id": "plantix",
      "name": "Plantix",
      "website": "https://plantix.net/",
      "category": "Crop health AI",
      "summary": "Offers image-based crop-health diagnosis and related APIs for supported crops.",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "agriculture-intelligence"
      ],
      "region": "Smallholder agriculture / global product",
      "location": null,
      "proposedUse": "help extension workers triage photographed crop problems.",
      "sourceIds": [
        "plantix"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Verify supported crops, image quality and local treatment guidance before field use.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Verify supported crops, image quality and local treatment guidance before field use.",
      "domainsByLens": {
        "wbg": "wbg-food"
      }
    },
    {
      "id": "pula",
      "name": "Pula",
      "website": "https://www.pula-advisors.com/",
      "category": "Agricultural risk protection",
      "summary": "Designs agricultural insurance and data services for smallholder farmers, governments and businesses.",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "agriculture-intelligence",
        "climate-adaptation"
      ],
      "region": "Africa and Asia",
      "location": "Nairobi service centre; Swiss operating headquarters described in IFC disclosure",
      "proposedUse": "examine insurance delivery, basis risk and data quality within a smallholder resilience program.",
      "sourceIds": [
        "pula",
        "pula-ifc"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Check payout design, farmer understanding and whether coverage reaches excluded groups.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Check payout design, farmer understanding and whether coverage reaches excluded groups.",
      "domainsByLens": {
        "wbg": "wbg-food"
      }
    },
    {
      "id": "qure-ai",
      "name": "Qure.ai",
      "website": "https://www.qure.ai/",
      "category": "Clinical imaging AI",
      "summary": "Develops medical-imaging AI, including qXR chest X-ray analysis and tools supporting tuberculosis care pathways.",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "frontline-health"
      ],
      "region": "Global, including low- and middle-income settings",
      "location": "India",
      "proposedUse": "assess clinician-supervised screening support in a specific care pathway.",
      "sourceIds": [
        "qure",
        "qure-study"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Validate clinical performance and applicable approvals for the intended population and workflow.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Validate clinical performance and applicable approvals for the intended population and workflow.",
      "domainsByLens": {
        "wbg": "wbg-health"
      }
    },
    {
      "id": "ilara-health",
      "name": "Ilara Health",
      "website": "https://www.ilarahealth.com/",
      "category": "Primary-care technology and services",
      "summary": "Combines clinic software, diagnostic equipment access, medicine supply and financing for primary-care providers.",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "frontline-health"
      ],
      "region": "Africa, with documented Kenya use",
      "location": null,
      "proposedUse": "study whether an integrated clinic package improves service readiness and referral continuity.",
      "sourceIds": [
        "ilara",
        "ilara-undp"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Evaluate equipment maintenance, staff adoption, financing terms and patient-data governance.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Evaluate equipment maintenance, staff adoption, financing terms and patient-data governance.",
      "domainsByLens": {
        "wbg": "wbg-health"
      }
    },
    {
      "id": "axmed",
      "name": "Axmed",
      "website": "https://www.axmed.com/",
      "category": "Medicine procurement",
      "summary": "Runs a medicines procurement marketplace linking institutional buyers with prequalified suppliers and aggregating demand.",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "frontline-health"
      ],
      "region": "Low- and middle-income markets",
      "location": null,
      "proposedUse": "evaluate pooled purchasing and supply reliability for a defined essential-medicines basket.",
      "sourceIds": [
        "axmed"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Confirm local regulatory requirements, supplier quality, delivered cost and fulfilment performance.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Confirm local regulatory requirements, supplier quality, delivered cost and fulfilment performance.",
      "domainsByLens": {
        "wbg": "wbg-health"
      }
    },
    {
      "id": "husk",
      "name": "Husk",
      "website": "https://www.huskpowersystems.com/",
      "category": "Distributed solar and storage",
      "summary": "Operates solar and storage assets with software for demand forecasting and distributed-energy operations.",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "distributed-energy"
      ],
      "region": "Africa and Asia",
      "location": null,
      "proposedUse": "assess minigrid operating models and productive-use demand in an energy-access program.",
      "sourceIds": [
        "husk"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Compare actual reliability, tariffs, maintenance capacity and financial performance at comparable sites.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Compare actual reliability, tariffs, maintenance capacity and financial performance at comparable sites.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "nithio",
      "name": "Nithio",
      "website": "https://nithio.com/",
      "category": "Energy financing analytics",
      "summary": "Uses repayment and geospatial data with risk analytics to support financing for distributed clean-energy businesses.",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "distributed-energy"
      ],
      "region": "Africa",
      "location": null,
      "proposedUse": "study whether better risk information expands affordable capital for underserved energy customers.",
      "sourceIds": [
        "nithio",
        "nithio-undp"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Test model fairness, portfolio stress scenarios and the relationship between finance cost and consumer affordability.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Test model fairness, portfolio stress scenarios and the relationship between finance cost and consumer affordability.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "sun-king",
      "name": "Sun King",
      "website": "https://sunking.com/",
      "category": "Off-grid solar",
      "summary": "Supplies solar-energy products with pay-as-you-go payment plans that spread upfront customer costs.",
      "domain": "resources",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "distributed-energy"
      ],
      "region": "Energy-access markets, with country-specific offerings",
      "location": null,
      "proposedUse": "benchmark last-mile distribution and payment design for household energy access.",
      "sourceIds": [
        "sunking"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Payment plans differ by country; evaluate lifetime customer cost and service continuity.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Payment plans differ by country; evaluate lifetime customer cost and service continuity.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "fido-tech",
      "name": "FIDO Tech",
      "website": "https://fido.tech/",
      "category": "Acoustic water-leak intelligence",
      "summary": "Analyses acoustic water-network data to identify and locate leaks and support utility fieldwork.",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "intelligent-water"
      ],
      "region": "Global utility markets",
      "location": null,
      "proposedUse": "run a bounded leak-detection and repair pilot with a municipal water utility.",
      "sourceIds": [
        "fido",
        "fido-oct"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Use verified repair and recovery results rather than relying on a vendor’s model-accuracy headline.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Use verified repair and recovery results rather than relying on a vendor’s model-accuracy headline.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "wint",
      "name": "Wint",
      "website": "https://wint.ai/",
      "category": "Water monitoring and control",
      "summary": "Uses sensors, signal processing and AI to detect unusual water use and support leak prevention in buildings.",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "intelligent-water"
      ],
      "region": "Buildings and facilities",
      "location": null,
      "proposedUse": "evaluate water-loss reduction in a campus, hospital or public-building portfolio.",
      "sourceIds": [
        "wint"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Assess installation effort, false alarms and operational controls before any automatic shutoff.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Assess installation effort, false alarms and operational controls before any automatic shutoff.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "source-global",
      "name": "SOURCE Global",
      "website": "https://source.co/",
      "category": "Distributed drinking-water technology",
      "summary": "Makes solar-powered Hydropanels that collect atmospheric moisture and supply drinking water.",
      "domain": "resources",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "intelligent-water"
      ],
      "region": "Site-specific distributed drinking-water applications",
      "location": null,
      "proposedUse": "compare a remote-site drinking-water option with feasible local alternatives.",
      "sourceIds": [
        "source"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Output depends on conditions; validate water quality, maintenance and lifecycle cost per litre. This is not bulk municipal water supply.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Output depends on conditions; validate water quality, maintenance and lifecycle cost per litre. This is not bulk municipal water supply.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "chloris",
      "name": "Chloris Geospatial",
      "website": "https://www.chloris.earth/",
      "category": "Biomass measurement",
      "summary": "Uses satellite data and machine learning to estimate annual forest carbon stocks, gains and losses.",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "nature-mrv",
        "geospatial-intelligence"
      ],
      "region": "Global forest landscapes",
      "location": null,
      "proposedUse": "compare restoration or forest-carbon monitoring evidence against independent field plots.",
      "sourceIds": [
        "chloris"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Inspect uncertainty, geographic validation and sensitivity to degradation and canopy change.",
      "distinctive": "Satellite-based measurement of woody biomass and change, distinct from a carbon-credit marketplace or project-rating service.",
      "evaluationQuestion": "How well do the estimates and uncertainty bounds agree with independent local field measurements?",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Inspect uncertainty, geographic validation and sensitivity to degradation and canopy change.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "sylvera",
      "name": "Sylvera",
      "website": "https://www.sylvera.com/",
      "category": "Carbon data and ratings",
      "summary": "Provides carbon-project ratings, market data and geospatial analytics including biomass and land-use information.",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "nature-mrv"
      ],
      "region": "Global carbon markets",
      "location": null,
      "proposedUse": "structure due diligence questions for nature-based project evidence.",
      "sourceIds": [
        "sylvera"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Ratings are assessments, not guarantees; inspect methodology and conflicts of interest.",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Ratings are assessments, not guarantees; inspect methodology and conflicts of interest.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "boomitra",
      "name": "Boomitra",
      "website": "https://boomitra.com/",
      "category": "Soil-carbon measurement",
      "summary": "Combines satellite imagery, AI and soil-sample data for soil-carbon measurement and carbon-project development.",
      "domain": "climate",
      "ring": "assess",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "nature-mrv",
        "agriculture-intelligence"
      ],
      "region": "Agricultural landscapes / Global South relevance",
      "location": null,
      "proposedUse": "assess the measurement cost and uncertainty of soil-carbon monitoring in a defined farming context.",
      "sourceIds": [
        "boomitra"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Separate developer incentives from verification; satellite estimates require calibration and do not eliminate ground sampling needs.",
      "horizon": "next",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Separate developer incentives from verification; satellite estimates require calibration and do not eliminate ground sampling needs.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "fna",
      "name": "FNA",
      "website": "https://fna.fi/",
      "category": "Financial supervisory analytics",
      "summary": "Provides network analytics, knowledge graphs and simulation tools for central-bank and financial-authority supervision.",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "supervisory-casework"
      ],
      "region": "Financial authorities / international",
      "location": null,
      "proposedUse": "examine network-risk analytics and supervisory-data integration as an adjacent pattern for a regulator’s analytical toolkit.",
      "sourceIds": [
        "fna"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Its core supervisory examples concern prudential and payment-system oversight; do not imply a complaint-management product or WBG deployment.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Its core supervisory examples concern prudential and payment-system oversight; do not imply a complaint-management product or WBG deployment.",
      "domainsByLens": {
        "wbg": "wbg-decisions"
      }
    },
    {
      "id": "regulativ",
      "name": "Regulativ",
      "website": "https://www.regulativ.ai/",
      "category": "RegTech compliance automation",
      "summary": "Offers AI-assisted regulatory monitoring, obligation management, controls and compliance-evidence workflows.",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "supervisory-casework"
      ],
      "region": "Regulated enterprises / international",
      "location": null,
      "proposedUse": "demonstrate how regulatory requirements can be linked to controls and traceable evidence.",
      "sourceIds": [
        "regulativ"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Primarily a RegTech offering for compliance teams; require a separate fit assessment for a supervisory authority or complaint workflow.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Primarily a RegTech offering for compliance teams; require a separate fit assessment for a supervisory authority or complaint workflow.",
      "domainsByLens": {
        "wbg": "wbg-decisions"
      }
    },
    {
      "id": "quantexa",
      "name": "Quantexa",
      "website": "https://www.quantexa.com/",
      "category": "Public-sector data and investigations",
      "summary": "Combines data integration, entity resolution and analytics for investigations, fraud detection and public-sector services.",
      "domain": "inclusion",
      "ring": "experiment",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "supervisory-casework"
      ],
      "region": "Public and private sectors / international",
      "location": null,
      "proposedUse": "test evidence-linked investigation or cross-source case triage using a bounded, de-identified dataset.",
      "sourceIds": [
        "quantexa",
        "quantexa-gov"
      ],
      "verified": "2026-11-23",
      "availability": "Commercial offering; verify local availability",
      "note": "Validate entity-linking errors, proportionality, access controls and the ability to challenge an analytical finding.",
      "distinctive": "Entity resolution and connected-data investigations; potentially useful when the problem is linking fragmented records rather than generating a text answer.",
      "evaluationQuestion": "What are the false-match and missed-match rates on local names, addresses and deliberately ambiguous records?",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Validate entity-linking errors, proportionality, access controls and the ability to challenge an analytical finding.",
      "domainsByLens": {
        "wbg": "wbg-decisions"
      }
    },
    {
      "id": "liquid-ai",
      "name": "Liquid AI",
      "website": "https://www.liquid.ai/",
      "category": "Compact foundation models",
      "summary": "Develops compact language and multimodal models with downloadable weights and local deployment options, including the LFM3 family.",
      "proposedUse": "Compare a small model for form classification or approved-knowledge retrieval on representative field devices.",
      "sourceIds": [
        "liquid-lfm3"
      ],
      "availability": "Downloadable model weights and hosted services",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "wbg",
        "its",
        "frontier"
      ],
      "trendIds": [
        "on-device-ai"
      ],
      "region": "",
      "verified": "2026-11-23",
      "note": "Evaluate actual device performance and verify whether the selected configuration uses cloud services.",
      "distinctive": "Compact model families intended for specialized tasks and constrained deployment environments, including downloadable weights.",
      "evaluationQuestion": "Does a compact model meet the task's quality threshold on the actual device, language and power budget?",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Evaluate actual device performance and verify whether the selected configuration uses cloud services.",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-models",
        "frontier": "frontier-models"
      }
    },
    {
      "id": "cactus",
      "name": "Cactus Compute",
      "website": "https://www.cactuscompute.com/",
      "category": "AI on everyday devices",
      "summary": "Builds compact models and deployment technology for local voice, vision and tool use on consumer and edge hardware, with optional hybrid cloud routing.",
      "proposedUse": "Test an accessible voice or form-processing interface under device, power and network constraints.",
      "sourceIds": [
        "cactus-main"
      ],
      "availability": "Published models and developer tooling",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "wbg",
        "its",
        "frontier"
      ],
      "trendIds": [
        "on-device-ai"
      ],
      "region": "",
      "verified": "2026-11-23",
      "note": "Evaluate actual device performance and verify whether the selected configuration uses cloud services.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Evaluate actual device performance and verify whether the selected configuration uses cloud services.",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-models",
        "frontier": "frontier-models"
      }
    },
    {
      "id": "ollama",
      "name": "Ollama",
      "website": "https://ollama.com/",
      "category": "Local model runtime",
      "summary": "Provides software to download, configure and run supported AI models locally, alongside separate cloud offerings.",
      "proposedUse": "Create a reproducible local-model evaluation environment for a bounded internal or public-service prototype.",
      "sourceIds": [
        "ollama-faq"
      ],
      "availability": "Downloadable local runtime; cloud services separately available",
      "domain": "trust",
      "ring": "experiment",
      "lenses": [
        "wbg",
        "its",
        "frontier"
      ],
      "trendIds": [
        "on-device-ai"
      ],
      "region": "",
      "verified": "2026-11-23",
      "note": "Evaluate actual device performance and verify whether the selected configuration uses cloud services.",
      "horizon": "now",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Evaluate actual device performance and verify whether the selected configuration uses cloud services.",
      "domainsByLens": {
        "wbg": "wbg-services",
        "its": "its-models",
        "frontier": "frontier-models"
      }
    },
    {
      "id": "elevenlabs",
      "name": "ElevenLabs",
      "website": "https://elevenlabs.io/",
      "category": "Voice and multimodal agent platform",
      "domain": "frontier",
      "frontierTheme": "Human–AI interfaces",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "frontier",
        "its"
      ],
      "trendIds": [
        "conversational-voice-agents"
      ],
      "summary": "ElevenAgents combines speech, language models, knowledge and tools in agents deployed across telephone, web and other channels.",
      "distinctive": "A useful reference for how voice quality, conversation management and actual task execution fit together in one product.",
      "whatToExplore": "Build a fictional booking or helpdesk journey; test interruptions, corrections, a tool failure and human transfer in two relevant languages.",
      "evaluationQuestion": "Does the spoken confirmation reliably match the action performed, including after a caller changes their mind?",
      "milestone": "Stable completion and handoff quality across difficult calls, with verifiable tool actions.",
      "proposedUse": "Compare conversational interfaces with existing forms or text assistants for a bounded service task.",
      "availability": "Commercial APIs and agent platform; enterprise deployment options require confirmation.",
      "evidenceNote": "Current pages disagree on language counts. No single language count or blanket accuracy or compliance claim is reproduced.",
      "sourceIds": [
        "elevenagents-overview",
        "elevenlabs-nvidia-20261111"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 6,
      "evidenceLabel": "Commercial APIs and agent platform; enterprise deployment options require confirmation.",
      "note": "Current pages disagree on language counts. No single language count or blanket accuracy or compliance claim is reproduced.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-models",
        "its": "its-models"
      }
    },
    {
      "id": "cartesia",
      "name": "Cartesia",
      "website": "https://www.cartesia.ai/",
      "category": "Real-time voice models and agents",
      "domain": "frontier",
      "frontierTheme": "Human–AI interfaces",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "frontier",
        "its"
      ],
      "trendIds": [
        "conversational-voice-agents"
      ],
      "summary": "Develops speech models and Managed Agents, combining turn-taking, reasoning, tool use, telephony and evaluation.",
      "distinctive": "Its integrated speech and agent stack helps test how latency and conversational timing affect task completion.",
      "whatToExplore": "Compare a simple voice pipeline with a managed agent on interruptions, order-number readback, accents and a multi-system support request.",
      "evaluationQuestion": "Does better conversational timing improve completed tasks and error recovery at comparable cost?",
      "milestone": "Measured gains in completed calls and recovery from interruptions at comparable response quality.",
      "proposedUse": "Prototype a voice workflow and benchmark the full conversation against the same task in text.",
      "availability": "Commercial APIs and managed agent platform; Managed Agents launched 29 October 2026.",
      "evidenceNote": "Vendor benchmark rankings and advertised latency or cost multipliers are omitted.",
      "sourceIds": [
        "cartesia-managed-20261029",
        "cartesia-agents"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 4,
      "evidenceLabel": "Commercial APIs and managed agent platform; Managed Agents launched 29 October 2026.",
      "note": "Vendor benchmark rankings and advertised latency or cost multipliers are omitted.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-models",
        "its": "its-models"
      }
    },
    {
      "id": "sierra",
      "name": "Sierra",
      "website": "https://sierra.ai/",
      "category": "Customer-facing enterprise agents",
      "domain": "enterprise",
      "frontierTheme": "Autonomous enterprise",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "frontier",
        "its"
      ],
      "trendIds": [
        "enterprise-agents",
        "context-memory"
      ],
      "summary": "Provides customer-facing agents; Horizon coordinates interactions and context over longer-running customer journeys.",
      "distinctive": "Shows how an agent resumes a case over days as circumstances and customer instructions change.",
      "whatToExplore": "Replay a fictional service case with changed requirements, cancellation and human takeover; inspect context and contact permissions.",
      "evaluationQuestion": "Can the agent pursue an outcome while correctly recognizing consent changes, cancellation and stopping conditions?",
      "milestone": "Verified whole-journey outcomes with correct stopping conditions and accountable intervention.",
      "proposedUse": "Study long-running case management and how outcome-based contracts define success.",
      "availability": "Commercial enterprise platform; Horizon introduced 16 July 2026.",
      "evidenceNote": "Learning and customer-impact claims remain vendor descriptions; revenue and ROI figures are omitted.",
      "sourceIds": [
        "sierra-horizon-20260716"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 7,
      "evidenceLabel": "Commercial enterprise platform; Horizon introduced 16 July 2026.",
      "note": "Learning and customer-impact claims remain vendor descriptions; revenue and ROI figures are omitted.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-work",
        "its": "its-knowledge"
      }
    },
    {
      "id": "noma-security",
      "name": "Noma Security",
      "website": "https://noma.security/",
      "category": "Runtime security and governance for agents",
      "domain": "trust",
      "frontierTheme": "Agent infrastructure",
      "ring": "assess",
      "horizon": "now",
      "lenses": [
        "frontier",
        "its"
      ],
      "trendIds": [
        "agent-interoperability",
        "agent-evaluation"
      ],
      "summary": "Monitors agent actions and session context, applying policies to supported tool calls, data access and runtime behavior.",
      "distinctive": "Protects agents as they use tools, complementing security-operations agents already on the radar.",
      "whatToExplore": "Test a sandbox workflow with read and write tools; verify that policy blocks an unnecessary write while preserving legitimate work.",
      "evaluationQuestion": "Which actual tool paths are governed, and what proportion of legitimate actions are incorrectly blocked?",
      "milestone": "Low false-block rates, high action-path coverage, complete logs and acceptable latency.",
      "proposedUse": "Evaluate runtime controls before a bounded agent receives consequential write access.",
      "availability": "Commercial platform; available enforcement depends on the integration.",
      "evidenceNote": "AWS's 17 November guide limits visibility to gateway-routed traffic; internal calls require separate routing.",
      "sourceIds": [
        "noma-runtime-control",
        "noma-aws-20261117"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 5,
      "evidenceLabel": "Commercial platform; available enforcement depends on the integration.",
      "note": "AWS's 17 November guide limits visibility to gateway-routed traffic; internal calls require separate routing.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-foundations",
        "its": "its-trust"
      }
    },
    {
      "id": "lila-sciences",
      "name": "LILA Sciences",
      "website": "https://www.lila.ai/",
      "category": "AI-directed experimental science",
      "domain": "frontier",
      "frontierTheme": "Science & materials",
      "ring": "watch",
      "horizon": "horizon",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "experimental-scientific-ai"
      ],
      "summary": "Develops scientific AI linked to experimental facilities that propose, test and learn from research candidates.",
      "distinctive": "Makes physical-world feedback concrete through a reported catalyst-discovery campaign.",
      "whatToExplore": "Trace a cycle from candidate selection to measurement and the next decision; count human interventions and examine negative results.",
      "evaluationQuestion": "What improvement survives independent replication and the move from laboratory samples to industrial conditions?",
      "milestone": "Independent reproduction, industrial durability and reduced manual handling across a campaign.",
      "proposedUse": "Explore the changing economics and organization of materials and energy research.",
      "availability": "Research and partner-led scientific programs.",
      "evidenceNote": "The September catalyst report describes a discovery rather than a scaled product; humans still transferred samples between instruments.",
      "sourceIds": [
        "lila-tech",
        "lila-catalyst-20260925",
        "lila-catalyst-preprint-20260925",
        "wbg-esmap-electrolyzers-2026"
      ],
      "verified": "2026-11-24",
      "discoveryPriority": 8,
      "evidenceLabel": "Research and partner-led scientific programs.",
      "note": "The September catalyst report describes a discovery rather than a scaled product; humans still transferred samples between instruments.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-science"
      }
    },
    {
      "id": "periodic-labs",
      "name": "Periodic Labs",
      "website": "https://periodic.com/",
      "category": "Scientific AI and autonomous laboratories",
      "domain": "frontier",
      "frontierTheme": "Science & materials",
      "ring": "watch",
      "horizon": "horizon",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "experimental-scientific-ai"
      ],
      "summary": "Builds physical-science laboratories and models trained on experimental data; Periodic Neon analyzes X-ray diffraction results.",
      "distinctive": "Laboratory measurements improve a model that helps interpret later experiments and guide research.",
      "whatToExplore": "Examine diffraction-analysis results on held-out materials and how uncertain outputs reach a scientist.",
      "evaluationQuestion": "Does specialized analysis improve a complete discovery campaign on genuinely new material families?",
      "milestone": "Reproducible improvements across new materials and an end-to-end discovery campaign.",
      "proposedUse": "Study whether scientific specialists make expensive experimental workflows more informative.",
      "availability": "Research and industry engagement; public research announced 15 September 2026.",
      "evidenceNote": "The demonstration concerns experimental analysis. Broader autonomous campaign design is work being extended.",
      "sourceIds": [
        "periodic-neon-20260915"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 2,
      "evidenceLabel": "Research and industry engagement; public research announced 15 September 2026.",
      "note": "The demonstration concerns experimental analysis. Broader autonomous campaign design is work being extended.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-science"
      }
    },
    {
      "id": "cuspai",
      "name": "CuspAI",
      "website": "https://cusp.ai/",
      "category": "AI-powered materials discovery",
      "domain": "frontier",
      "frontierTheme": "Science & materials",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "experimental-scientific-ai"
      ],
      "summary": "Develops materials against target properties and connects simulation with synthesis and validation through its materials network.",
      "distinctive": "An inverse-design story: specify a property, then search for structures that could provide it.",
      "whatToExplore": "Select a property specification, inspect candidate ranking, and follow synthesis, stability and production constraints.",
      "evaluationQuestion": "Can the resulting candidate be made reliably at useful scale while retaining the required properties?",
      "milestone": "A validated material meeting performance and manufacturability requirements outside the discovery workflow.",
      "proposedUse": "Explore research partnerships in membranes, catalysts, energy or semiconductor materials.",
      "availability": "Partner-led discovery platform; AI Materials Foundry announced July 2026.",
      "evidenceNote": "Partner announcements do not establish commercial scale for proposed materials.",
      "sourceIds": [
        "cusp-platform",
        "cusp-foundry-20260720"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 9,
      "evidenceLabel": "Partner-led discovery platform; AI Materials Foundry announced July 2026.",
      "note": "Partner announcements do not establish commercial scale for proposed materials.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-science"
      }
    },
    {
      "id": "physicsx",
      "name": "PhysicsX",
      "website": "https://www.physicsx.ai/",
      "category": "AI for industrial engineering",
      "domain": "frontier",
      "frontierTheme": "Industrial systems",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "ai-engineering-simulation"
      ],
      "summary": "Combines simulation management, learned physics models and engineering applications for design, manufacturing and operations.",
      "distinctive": "A substantial industrial application beyond office automation, linking engineering data to design and operational decisions.",
      "whatToExplore": "Compare a learned model with a trusted solver on unseen cooling or flow geometries; assess how faster iteration changes the design.",
      "evaluationQuestion": "What are the validated accuracy boundaries, and does the faster search produce a better engineering outcome?",
      "milestone": "Documented accuracy limits and measurable benefit across an industrial design cycle.",
      "proposedUse": "Examine workflows for energy equipment, infrastructure components and industrial processes.",
      "availability": "Commercial enterprise platform and implementation partnerships.",
      "evidenceNote": "The October Fortescue announcement establishes expanded collaboration, not independently demonstrated gains.",
      "sourceIds": [
        "physicsx-platform",
        "physicsx-fortescue-20261027"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 1,
      "evidenceLabel": "Commercial enterprise platform and implementation partnerships.",
      "note": "The October Fortescue announcement establishes expanded collaboration, not independently demonstrated gains.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-science"
      }
    },
    {
      "id": "beyondmath",
      "name": "BeyondMath",
      "website": "https://beyondmath.com/",
      "category": "Physics-based AI simulation",
      "domain": "frontier",
      "frontierTheme": "Industrial systems",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "ai-engineering-simulation"
      ],
      "summary": "Develops a simulation platform that accepts geometry and predicts fields such as pressure, velocity and temperature.",
      "distinctive": "A second engineering-AI approach emphasizing direct physics modeling and rapid design evaluation.",
      "whatToExplore": "Test a transient thermal or flow problem with reference measurements, an unusual geometry and a difficult operating condition.",
      "evaluationQuestion": "How does error change outside the demonstrated cases, and can the system recognize its own limits?",
      "milestone": "Independent error characterization and repeatability on demanding cases beyond selected demonstrations.",
      "proposedUse": "Explore fast simulation for early design choices before detailed validation.",
      "availability": "Commercial engagement and research collaborations; access and validated domains require confirmation.",
      "evidenceNote": "First-of-kind, engineering-grade and thousandfold-speedup claims are omitted.",
      "sourceIds": [
        "beyondmath-platform",
        "beyondmath-company"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 10,
      "evidenceLabel": "Commercial engagement and research collaborations; access and validated domains require confirmation.",
      "note": "First-of-kind, engineering-grade and thousandfold-speedup claims are omitted.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-science"
      }
    },
    {
      "id": "lightmatter",
      "name": "Lightmatter",
      "website": "https://lightmatter.com/",
      "category": "Photonic interconnects for AI systems",
      "domain": "frontier",
      "frontierTheme": "Compute & infrastructure",
      "ring": "watch",
      "horizon": "next",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "efficient-compute-hardware"
      ],
      "summary": "Develops optical links, packaging and light-source technology that connect processors in AI systems.",
      "distinctive": "Shows why moving data efficiently between chips matters alongside improving processors.",
      "whatToExplore": "Compare optical and conventional links at system level, including lasers, serviceability, cooling and workload utilization.",
      "evaluationQuestion": "How much benefit remains when the complete rack and its operating workload are measured?",
      "milestone": "Customer-scale production evidence with measured reliability and whole-system energy benefits.",
      "proposedUse": "Understand infrastructure constraints shaping AI cost, power requirements and location.",
      "availability": "Passage partner early access; October systems included validation and demonstration hardware.",
      "evidenceNote": "A demonstration and a path to volume production are distinct from broad deployment.",
      "sourceIds": [
        "lightmatter-passage",
        "lightmatter-ocp-20261012"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 3,
      "evidenceLabel": "Passage partner early access; October systems included validation and demonstration hardware.",
      "note": "A demonstration and a path to volume production are distinct from broad deployment.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-compute"
      }
    },
    {
      "id": "d-matrix",
      "name": "d-Matrix",
      "website": "https://www.d-matrix.ai/",
      "category": "Specialized AI inference hardware",
      "domain": "frontier",
      "frontierTheme": "Compute & infrastructure",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "efficient-compute-hardware"
      ],
      "summary": "Develops Corsair inference accelerators and associated software and system components for data-center AI.",
      "distinctive": "A commercial comparison for specialized inference hardware alongside conventional GPU infrastructure.",
      "whatToExplore": "Benchmark identical models, quality and demand, including prefill, decoding, memory and system power.",
      "evaluationQuestion": "At realistic utilization, which workloads have better cost and energy per useful result?",
      "milestone": "Repeatable production results across representative models with transparent total-cost measurements.",
      "proposedUse": "Understand when specialized architectures change the economics of serving models and agents.",
      "availability": "Corsair production announced June 2026; offered to select qualified customers.",
      "evidenceNote": "General purchasing access and advertised speed or efficiency multipliers are not assumed.",
      "sourceIds": [
        "dmatrix-production-20260609"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 11,
      "evidenceLabel": "Corsair production announced June 2026; offered to select qualified customers.",
      "note": "General purchasing access and advertised speed or efficiency multipliers are not assumed.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-compute"
      }
    },
    {
      "id": "extropic",
      "name": "Extropic",
      "website": "https://extropic.ai/",
      "category": "Thermodynamic computing",
      "domain": "frontier",
      "frontierTheme": "Compute & infrastructure",
      "ring": "watch",
      "horizon": "horizon",
      "lenses": [
        "frontier"
      ],
      "trendIds": [
        "efficient-compute-hardware"
      ],
      "summary": "Develops probabilistic hardware and software that use physical fluctuations to sample programmable distributions.",
      "distinctive": "An exploratory approach asking whether some AI work suits a fundamentally different computing substrate.",
      "whatToExplore": "Use its open-source software to study a small probabilistic model and identify operations that map to the proposed hardware.",
      "evaluationQuestion": "Can useful workloads retain quality while delivering a measured system-level energy benefit on real hardware?",
      "milestone": "Larger chips running reproducible useful workloads; Z1 early access is targeted for 2027.",
      "proposedUse": "Track unconventional computing and the software ecosystem needed to make it useful.",
      "availability": "Research prototypes and open-source software now; larger Z1 hardware remains on a roadmap.",
      "evidenceNote": "Simulation access is not production Z1 access. Large projected efficiency gains are omitted.",
      "sourceIds": [
        "extropic-hardware",
        "extropic-software",
        "extropic-research-20261001"
      ],
      "verified": "2026-11-23",
      "discoveryPriority": 12,
      "evidenceLabel": "Research prototypes and open-source software now; larger Z1 hardware remains on a roadmap.",
      "note": "Simulation access is not production Z1 access. Large projected efficiency gains are omitted.",
      "region": "",
      "addedInEdition": "2026.11.23.2",
      "domainsByLens": {
        "frontier": "frontier-compute"
      }
    },
    {
      "id": "satsure",
      "name": "SatSure",
      "website": "https://www.satsure.co/",
      "category": "Satellite intelligence for finance and infrastructure",
      "summary": "Turns satellite, aerial and other data into parcel- and corridor-level information for agricultural finance, insurance, infrastructure and natural resources.",
      "distinctive": "Connects Earth observation with farm-credit and infrastructure decisions, extending the radar beyond imagery providers.",
      "evaluationQuestion": "Does the derived parcel or corridor signal improve a decision after cloud cover, small plots, local practices and field verification are accounted for?",
      "domain": "climate",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "geospatial-intelligence",
        "project-supervision",
        "inclusive-digital-services",
        "agriculture-intelligence"
      ],
      "region": "India",
      "proposedUse": "Test whether historical crop and land-use evidence can help a participating rural lender review thin-file agricultural borrowers, or help a project team identify corridor segments needing a field visit. Assess false exclusions and retain human decisions.",
      "availability": "Commercial geospatial analytics and APIs. Geography, historical coverage, refresh frequency and licensing require confirmation for the selected task.",
      "note": "Current analytics offerings are distinct from any planned satellite launches; no owned operational constellation or lending outcome is inferred.",
      "sourceIds": [
        "satsure-home",
        "satsure-about",
        "satsure-public-sector",
        "satsure-utilities-v5",
        "wbg-gems-2026"
      ],
      "verified": "2026-11-24",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Current analytics offerings are distinct from any planned satellite launches; no owned operational constellation or lending outcome is inferred.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "buildots",
      "name": "Buildots",
      "website": "https://buildots.com/",
      "category": "Visual construction progress intelligence",
      "summary": "Uses site captures and construction plans or models to track progress, identify sequencing issues and support evidence-based project reporting.",
      "distinctive": "Compares physical work with the construction schedule; its Dot assistant answers questions using the project's captured progress evidence.",
      "evaluationQuestion": "Can the system detect material slippage earlier than the current reporting process while keeping false alarms and capture effort acceptable?",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "project-supervision"
      ],
      "region": "",
      "proposedUse": "For a consenting hospital, school or other building project, compare independently reviewed site captures with the contractor's progress report and schedule. Use differences to focus engineering questions and visits.",
      "availability": "Commercial construction platform; the October 2026 Dot upgrades were announced as rolling out. Capture procedures, usable geometry, schedule quality and support for incomplete BIM need assessment.",
      "note": "Visual progress estimates support supervision; they do not establish workmanship, environmental and social compliance, payment eligibility or completion certification.",
      "sourceIds": [
        "buildots-product",
        "buildots-reporting",
        "buildots-dot"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Visual progress estimates support supervision; they do not establish workmanship, environmental and social compliance, payment eligibility or completion certification.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "premise",
      "name": "Premise",
      "website": "https://premise.com/",
      "category": "Local field data and program verification",
      "summary": "Uses a distributed contributor network to collect location-linked observations, surveys and photographs, with quality controls and exportable data.",
      "distinctive": "Adds local ground observations to a radar otherwise dominated by models, satellites and vendor reports.",
      "evaluationQuestion": "Are observations timely and verifiable in the specific locations of interest, and where do smartphone access and contributor selection leave coverage gaps?",
      "domain": "inclusion",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "project-supervision",
        "geospatial-intelligence"
      ],
      "region": "",
      "proposedUse": "Verify a small sample of service points, water assets or essential-goods prices, then compare observations with project records and a supervised field audit. Use results to identify where reported service delivery and observed conditions diverge.",
      "availability": "Commercial data-collection service. Country coverage, task feasibility, contributor protections and quality-control methods must be checked for each deployment.",
      "note": "A contributor marketplace is not automatically a representative survey sample. Avoid collecting unnecessary personal data or treating geotagged observations as conclusive evidence.",
      "sourceIds": [
        "premise-development",
        "premise-how"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "A contributor marketplace is not automatically a representative survey sample. Avoid collecting unnecessary personal data or treating geotagged observations as conclusive evidence.",
      "domainsByLens": {
        "wbg": "wbg-infrastructure"
      }
    },
    {
      "id": "aidash",
      "name": "AiDASH",
      "website": "https://www.aidash.com/",
      "category": "Satellite-assisted utility resilience",
      "summary": "Combines satellite and other data to support vegetation management, asset inspection and wildfire or storm risk decisions for infrastructure operators.",
      "distinctive": "Links remote sensing to utility inspection and maintenance priorities rather than stopping at a hazard map.",
      "evaluationQuestion": "Do its ranked spans or assets identify more field-confirmed hazards per inspection than the utility's current prioritization method?",
      "domain": "resources",
      "ring": "assess",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "geospatial-intelligence",
        "distributed-energy",
        "climate-adaptation"
      ],
      "region": "",
      "proposedUse": "With a participating electricity utility, compare vegetation-risk rankings on a limited network area with field inspections and historical outage causes. Test whether scarce maintenance crews can address more material risks per visit.",
      "availability": "Commercial utility products; local imagery, network asset maps, inspection records and implementation services are dependencies.",
      "note": "Potential contribution concerns reliability of existing infrastructure. It is not direct evidence of additional electricity connections, and satellite refresh does not equal continuous real-time observation.",
      "sourceIds": [
        "aidash-home",
        "aidash-evolve"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Potential contribution concerns reliability of existing infrastructure. It is not direct evidence of additional electricity connections, and satellite refresh does not equal continuous real-time observation.",
      "domainsByLens": {
        "wbg": "wbg-climate"
      }
    },
    {
      "id": "altana",
      "name": "Altana",
      "website": "https://altana.ai/",
      "category": "Trade and supply-chain intelligence",
      "summary": "Combines trade, commercial and other datasets into networks that help organizations investigate supply-chain dependencies, trade flows and disruptions.",
      "distinctive": "Moves analysis from a list of suppliers to connected production and trade relationships, where hidden concentration can become visible.",
      "evaluationQuestion": "Which critical dependencies are supported by traceable underlying evidence, and which remain uncertain or inferred links?",
      "domain": "enterprise",
      "ring": "assess",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "supply-chain-intelligence"
      ],
      "region": "",
      "proposedUse": "Map concentration and alternative sourcing for one essential import chain, such as medicines or power-system components. Validate a sample of inferred links with procurement specialists and public trade or registry evidence before using the analysis in resilience advice.",
      "availability": "Commercial enterprise and government offering. Dataset access, country coverage and the right to use underlying records are material requirements.",
      "note": "Its February 2026 FedRAMP High announcement applies to the specified AWS GovCloud offering; it does not establish WBG approval or equivalent availability in every hosting environment.",
      "sourceIds": [
        "altana-government",
        "altana-fedramp"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Its February 2026 FedRAMP High announcement applies to the specified AWS GovCloud offering; it does not establish WBG approval or equivalent availability in every hosting environment.",
      "domainsByLens": {
        "wbg": "wbg-decisions"
      }
    },
    {
      "id": "eduten",
      "name": "Eduten",
      "website": "https://eduten.com/",
      "category": "Adaptive mathematics and teacher analytics",
      "summary": "Provides curriculum-aligned digital mathematics practice, adaptive learning and analytics that help teachers understand student progress.",
      "distinctive": "A bounded learning task with teacher involvement and externally studied deployments offers a clearer evaluation target than a general-purpose classroom chatbot.",
      "evaluationQuestion": "Does the platform improve independently measured mathematics learning under local curriculum, teacher-training, connectivity and device constraints?",
      "domain": "inclusion",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "adaptive-learning"
      ],
      "region": "Finland",
      "proposedUse": "Compare a curriculum-matched mathematics pilot with the current teaching approach, including teacher training and comparable instructional time. Measure independent learning outcomes and participation across relevant student groups.",
      "availability": "Commercial platform. Confirm current language, curriculum, connectivity, accessibility and offline capabilities rather than relying on older product roadmaps.",
      "note": "UNICEF's evaluation describes an adaptive-learning version, not an open-ended generative-AI tutor. Published pilot findings do not automatically transfer to another education system.",
      "sourceIds": [
        "eduten-about",
        "eduten-agency",
        "eduten-unicef"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "UNICEF's evaluation describes an adaptive-learning version, not an open-ended generative-AI tutor. Published pilot findings do not automatically transfer to another education system.",
      "domainsByLens": {
        "wbg": "wbg-health"
      }
    },
    {
      "id": "eidu",
      "name": "EIDU",
      "website": "https://www.eidu.com/",
      "category": "Foundational-learning platform organization",
      "summary": "Develops an offline-capable platform that combines personalized foundational learning, teacher support and learning data for education systems.",
      "distinctive": "Designed around school and government implementation with low-connectivity conditions, rather than assuming every child has a personal connected device.",
      "evaluationQuestion": "Can schools sustain effective use with their actual device-sharing, charging, teacher-support and connectivity constraints?",
      "domain": "inclusion",
      "ring": "assess",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "trendIds": [
        "adaptive-learning"
      ],
      "region": "",
      "proposedUse": "Assess a limited foundational literacy and numeracy program where devices are shared and connectivity is intermittent. Evaluate teacher workload, sustained use, independent learning measures and the full recurring cost per learner.",
      "availability": "Existing education programs and a platform designed for offline use. Confirm specific content, languages, implementation geography and contracting entity.",
      "note": "Public legal information lists EIDU GmbH and EIDU Global Education Initiatives e.V.; treat it as an ecosystem organization and do not invent a venture stage. 'Offline-capable' does not mean every function operates indefinitely without synchronization.",
      "sourceIds": [
        "eidu-platform",
        "eidu-developer",
        "eidu-legal"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Public legal information lists EIDU GmbH and EIDU Global Education Initiatives e.V.; treat it as an ecosystem organization and do not invent a venture stage. 'Offline-capable' does not mean every function operates indefinitely without synchronization.",
      "domainsByLens": {
        "wbg": "wbg-health"
      }
    },
    {
      "id": "resolve-ai",
      "name": "ResolveAI",
      "website": "https://resolve.ai/",
      "category": "AI-assisted production incident investigation",
      "summary": "Investigates software incidents using observability and operational context, proposes root causes and supports engineer-directed resolution.",
      "distinctive": "Focuses on causal investigation across logs, metrics and system changes; its SRE-1 model was announced on 18 November 2026.",
      "evaluationQuestion": "Can the system find the supported root cause of previously resolved incidents without inventing evidence or recommending unsafe actions?",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "resilient-digital-operations",
        "enterprise-agents"
      ],
      "region": "",
      "proposedUse": "Replay de-identified historical service incidents with the final diagnosis hidden. Compare evidence quality, root-cause accuracy and investigator time with the current operational process before considering live incident assistance.",
      "availability": "Commercial platform. The SRE-1 and primary-on-call announcements are new; confirm contracted feature access and actual support for the observability tools in scope.",
      "note": "Vendor benchmarks do not establish production reliability. Azure Monitor integration and compatibility with the WBG tool stack have not been verified.",
      "sourceIds": [
        "resolve-incidents",
        "resolve-sre1"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Vendor benchmarks do not establish production reliability. Azure Monitor integration and compatibility with the WBG tool stack have not been verified.",
      "domainsByLens": {
        "its": "its-cloud",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "cast-ai",
      "name": "Cast AI",
      "website": "https://cast.ai/",
      "category": "Kubernetes optimization and cloud economics",
      "summary": "Analyzes and optimizes Kubernetes infrastructure and workloads, with support for cloud environments including Azure Kubernetes Service.",
      "distinctive": "Connects resource choices with running workload demand; an agentless discovery option allows an initial account-level assessment before enabling optimization.",
      "evaluationQuestion": "Does measured cost per successful request improve while latency, error rate and operational effort remain within agreed limits?",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "resilient-digital-operations"
      ],
      "region": "",
      "proposedUse": "Baseline a noncritical AKS workload against native cloud and autoscaling options, then test selected rightsizing or node policies under representative load. Track actual billing and service performance together.",
      "availability": "Commercial product with AKS documentation and a read-only Cloud Connect discovery mode. Write permissions are needed for automated infrastructure changes.",
      "note": "The in-cluster 'read-only agent' has some permissions to manage its own deployment. Use the documented agentless discovery mode for a strictly non-mutating initial assessment and inspect the actual permission set.",
      "sourceIds": [
        "cast-getting-started",
        "cast-cloud-connect",
        "cast-kubernetes-permissions"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "The in-cluster 'read-only agent' has some permissions to manage its own deployment. Use the documented agentless discovery mode for a strictly non-mutating initial assessment and inspect the actual permission set.",
      "domainsByLens": {
        "its": "its-cloud"
      }
    },
    {
      "id": "mechanical-orchard",
      "name": "Mechanical Orchard",
      "website": "https://www.mechanical-orchard.com/",
      "category": "Behavior-verified legacy modernization",
      "summary": "Its Imogen platform captures how existing software behaves, supports reimplementation and compares the new system with observed legacy behavior.",
      "distinctive": "Uses observed transactions and interfaces as modernization evidence, making preservation of behavior an explicit evaluation target.",
      "evaluationQuestion": "How much important behavior is covered by captured examples, and does the new implementation preserve edge cases, failure modes and business rules?",
      "domain": "enterprise",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "its",
        "frontier"
      ],
      "trendIds": [
        "legacy-modernization",
        "software-agents"
      ],
      "region": "",
      "proposedUse": "If a suitable legacy service exists, select one bounded batch job or interface and replay sanitized historical transactions against a replacement in a sandbox. Include rare errors, rounding and boundary cases in the acceptance set.",
      "availability": "Commercial platform and engineering-led modernization offering. Target runtime, hosting, data access and delivery effort require a workload-specific assessment.",
      "note": "No WBG legacy-system inventory is asserted. Behavior observed in production is incomplete evidence unless supplemented with important unobserved cases; a successful replay is not permission for a live cutover.",
      "sourceIds": [
        "mechanical-platform",
        "mechanical-july-release"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "No WBG legacy-system inventory is asserted. Behavior observed in production is incomplete evidence unless supplemented with important unobserved cases; a successful replay is not permission for a live cutover.",
      "domainsByLens": {
        "its": "its-software",
        "frontier": "frontier-work"
      }
    },
    {
      "id": "anomalo",
      "name": "Anomalo",
      "website": "https://www.anomalo.com/",
      "category": "Data quality and observability",
      "summary": "Monitors data tables for freshness, schema and distribution issues and provides tools to investigate problems and document data.",
      "distinctive": "Addresses whether the underlying data can support an analysis, complementing tools that evaluate the model's final answer.",
      "evaluationQuestion": "Does it find material data defects earlier, with fewer false alarms and less analyst effort, than the existing checks?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "wbg"
      ],
      "trendIds": [
        "foundation-forecasting",
        "legacy-modernization",
        "resilient-digital-operations"
      ],
      "region": "",
      "proposedUse": "Use a copied, approved dataset that feeds a forecast or portfolio briefing. Introduce known missing periods, changed units, duplicated rows and code shifts, then compare detection and investigation effort with current validation rules.",
      "availability": "Commercial platform with SaaS and in-VPC options described by the vendor. Specific feature availability, supported data platforms and model configuration require confirmation.",
      "note": "The current homepage labels dashboard reporting, KPI monitoring and experiment evaluation as coming soon. Do not present all announced agents as generally available.",
      "sourceIds": [
        "anomalo-home",
        "anomalo-platform-launch"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "The current homepage labels dashboard reporting, KPI monitoring and experiment evaluation as coming soon. Do not present all announced agents as generally available.",
      "domainsByLens": {
        "its": "its-data",
        "wbg": "wbg-decisions"
      }
    },
    {
      "id": "aembit",
      "name": "Aembit",
      "website": "https://aembit.io/",
      "category": "Workload identity and agent access",
      "summary": "Provides identity-based access policies and short-lived credentials for workloads and AI agents, including access through MCP integrations.",
      "distinctive": "Treats an agent and its delegated user as identifiable actors, making resource access and auditability separate from the agent's reasoning.",
      "evaluationQuestion": "Can the system enforce the intended user-agent-resource boundary, including denied, expired and revoked access, without shared long-lived secrets?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its"
      ],
      "trendIds": [
        "agent-interoperability",
        "resilient-digital-operations"
      ],
      "region": "",
      "proposedUse": "For one sandbox research or operations agent, grant time-limited read access to a narrowly scoped data source. Test permitted, forbidden and revoked requests and inspect whether audit records preserve both user and agent context.",
      "availability": "Commercial identity platform with documented AI-agent and MCP use cases. Confirm the exact runtime, target-service and identity-provider support.",
      "note": "Identity controls reduce particular access risks; they do not establish that an agent's reasoning or data handling is safe.",
      "sourceIds": [
        "aembit-ai-agents",
        "aembit-faq"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "Identity controls reduce particular access risks; they do not establish that an agent's reasoning or data handling is safe.",
      "domainsByLens": {
        "its": "its-trust"
      }
    },
    {
      "id": "nixtla",
      "name": "Nixtla",
      "website": "https://www.nixtla.io/",
      "category": "Time-series foundation models",
      "summary": "Provides TimeGPT for forecasting and related time-series tasks, alongside open-source forecasting libraries and a client SDK.",
      "distinctive": "Tests whether a pretrained model can produce useful forecasts across many series with less model-specific engineering, while still allowing local baselines and backtesting.",
      "evaluationQuestion": "At the actual decision horizon, does TimeGPT improve forecast error, uncertainty calibration and total effort over a seasonal baseline and a strong conventional model?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg",
        "its",
        "frontier"
      ],
      "trendIds": [
        "foundation-forecasting"
      ],
      "region": "",
      "proposedUse": "Backtest one decision-relevant series family, such as utility demand, cash-flow planning or computing capacity. Preserve time order, withhold future information and compare both predictive accuracy and the downstream planning cost.",
      "availability": "Commercial TimeGPT models, including a Microsoft Foundry listing announced in July 2026. Self-hosted or on-premises options are advertised for specific offerings and require confirmation of license, hardware and support.",
      "note": "The open-source SDK is not the closed-source TimeGPT model. Standard client integrations may call a remote API; a marketplace listing does not imply WBG approval or eliminate data-governance review.",
      "sourceIds": [
        "nixtla-foundry",
        "nixtla-microsoft-catalog",
        "nixtla-sdk"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.2",
      "evidenceLabel": "Company product information",
      "evidenceNote": "The open-source SDK is not the closed-source TimeGPT model. Standard client integrations may call a remote API; a marketplace listing does not imply WBG approval or eliminate data-governance review.",
      "domainsByLens": {
        "wbg": "wbg-decisions",
        "its": "its-data",
        "frontier": "frontier-models"
      }
    },
    {
      "id": "fuzu",
      "name": "Fuzu",
      "website": "https://www.fuzu.com/",
      "category": "Career, learning and recruitment platform",
      "organizationType": "Company",
      "summary": "Connects jobseekers with career guidance, learning and employment opportunities, while providing employers with candidate matching and recruitment tools.",
      "distinctive": "Brings the jobseeker and employer sides together, making the connection between training and actual demand a useful question to examine.",
      "evaluationQuestion": "Are recommendations useful and accessible to the target population, and do they lead to sustained outcomes beyond applications or matches?",
      "domain": "inclusion",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-health"
      },
      "trendIds": [
        "skills-to-work"
      ],
      "region": "African labour markets; wider employer offerings",
      "proposedUse": "Examine how a youth employment or adult-skills program could connect its guidance to relevant job opportunities and learning options, with participant consent and human oversight.",
      "availability": "Commercial employer services and a public jobseeker platform. Market coverage, accessible channels and data terms require local review.",
      "note": "A platform match or course completion is not evidence of a job or higher earnings. Do not use inferred personality or automated rankings as an unexamined basis for consequential decisions.",
      "evidenceLabel": "Company platform and product information",
      "evidenceNote": "Reported matching capabilities have not been independently evaluated here.",
      "sourceIds": [
        "fuzu-home",
        "fuzu-employers",
        "fuzu-learn"
      ],
      "verified": "2026-11-23",
      "entityType": "scaleup",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "gloat",
      "name": "Gloat",
      "website": "https://gloat.com/",
      "category": "Workforce skills and internal opportunity platform",
      "organizationType": "Company",
      "summary": "Offers workforce intelligence, skills development and a talent marketplace connecting employees with learning, projects, mentorship and internal roles.",
      "distinctive": "Extends the AI conversation to how people develop and move into changing work, rather than only automating tasks.",
      "evaluationQuestion": "Can staff understand, correct and benefit from the skills model, and do suggested pathways improve real learning or mobility?",
      "domain": "enterprise",
      "ring": "assess",
      "horizon": "next",
      "lenses": [
        "its"
      ],
      "domainsByLens": {
        "its": "its-knowledge"
      },
      "trendIds": [
        "skills-to-work"
      ],
      "region": "Enterprise organizations internationally",
      "proposedUse": "Explore voluntary pathways for staff to build relevant AI, data or product skills and find suitable practice opportunities inside an institution.",
      "availability": "Commercial enterprise platform. Integrations, profile data requirements and the current scope of each module need confirmation.",
      "note": "Use as a workforce-development candidate; no verified WBG deployment or suitability for personnel decisions is implied.",
      "evidenceLabel": "Company platform documentation",
      "evidenceNote": "Workforce outcomes and implementation burden require local validation.",
      "sourceIds": [
        "gloat-talent",
        "gloat-product"
      ],
      "verified": "2026-11-23",
      "entityType": "scaleup",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "moniepoint",
      "name": "Moniepoint",
      "website": "https://www.moniepoint.com/",
      "category": "Merchant payments and small-business operations",
      "organizationType": "Company",
      "summary": "Provides business banking and payment services; its Nigerian Moniebook offering combines sales, inventory, bookkeeping and customer-management functions.",
      "distinctive": "Connects everyday merchant operations with payment records, illustrating practical digitalization for small firms beyond standalone credit scoring.",
      "evaluationQuestion": "Do merchants use the operating tools consistently, and do net benefits remain after transaction fees, support effort and financing costs?",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-decisions"
      },
      "trendIds": [
        "productive-small-firms",
        "inclusive-digital-services"
      ],
      "region": "Nigeria-specific business product reviewed",
      "proposedUse": "Study how small retailers reconcile payments and maintain stock records, comparing integrated merchant tools with their current process.",
      "availability": "Commercial financial and merchant services through relevant local entities. The reviewed business product is Nigeria-specific; country authorization and features are not assumed elsewhere.",
      "note": "The provider describes Moniebook as offline-first and mobile-ready; test the exact offline functions and synchronization behavior.",
      "evidenceLabel": "Official local business and payments product pages",
      "evidenceNote": "No independent claim of merchant income or job gains is made.",
      "sourceIds": [
        "moniepoint-business",
        "moniepoint-payments"
      ],
      "verified": "2026-11-23",
      "entityType": "scaleup",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "hotelrunner",
      "name": "HotelRunner",
      "website": "https://hotelrunner.com/",
      "category": "Digital operations and distribution for hospitality",
      "organizationType": "Company",
      "summary": "Provides a connected platform for hospitality sales, property operations, reservations and distribution across booking channels.",
      "distinctive": "Adds a concrete tourism-sector example: helping smaller properties manage inventory and reach customers through digital channels.",
      "evaluationQuestion": "Can a small property operate the system reliably, and does improved distribution outweigh subscription, channel and payment costs?",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-decisions"
      },
      "trendIds": [
        "productive-small-firms"
      ],
      "region": "Hospitality markets internationally",
      "proposedUse": "Explore digital operations with a small-hotel or guesthouse development program, measuring booking reconciliation, staff time and net revenue after channel fees.",
      "availability": "Commercial SaaS products for different property types. Local payments, language support, package features and connectivity requirements need checking.",
      "note": "This profile covers documented property and distribution functions. It does not treat all advertised autonomous or AI features as equally mature.",
      "evidenceLabel": "Official company and product documentation",
      "evidenceNote": "Product availability does not establish gains for a particular tourism market.",
      "sourceIds": [
        "hotelrunner-about",
        "hotelrunner-pms"
      ],
      "verified": "2026-11-23",
      "entityType": "scaleup",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "m-kopa",
      "name": "M-KOPA",
      "website": "https://www.m-kopa.com/",
      "category": "Device financing and embedded digital services",
      "organizationType": "Company",
      "summary": "Finances smartphones and offers connected financial and device services for customers with everyday or irregular earnings in selected African markets.",
      "distinctive": "Addresses the ability to obtain and use a device, an essential precondition for many digital services on this radar.",
      "evaluationQuestion": "Does the financed bundle provide affordable, sustained access after total repayments, data costs, missed-payment effects and alternative purchase options are considered?",
      "domain": "inclusion",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-services"
      },
      "trendIds": [
        "productive-small-firms",
        "inclusive-digital-services"
      ],
      "region": "Kenya, Uganda, Nigeria, Ghana and South Africa",
      "proposedUse": "Compare device-access models for microentrepreneurs and underserved users, examining total cost, continued connectivity and productive use rather than device distribution alone.",
      "availability": "Commercial financing and services in specific markets. Offerings and contract terms vary by country and customer eligibility.",
      "note": "Customer growth and survey findings in the company's impact reporting do not establish causal income effects. Assess repayment burden and conditions before drawing affordability conclusions.",
      "evidenceLabel": "Official product information and dated company announcement",
      "evidenceNote": "Reported reach and customer outcomes are company statements.",
      "sourceIds": [
        "mkopa-products",
        "mkopa-2026-milestone"
      ],
      "verified": "2026-11-23",
      "entityType": "scaleup",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "egov-digit",
      "name": "eGov Foundation / DIGIT",
      "website": "https://egov.org.in/digit/",
      "category": "Public-good builder · digital public services",
      "organizationType": "Nonprofit / digital public good",
      "summary": "Maintains DIGIT, an open-source platform of reusable components and sector solutions for public services, including local government, public finance, health, water and sanitation.",
      "distinctive": "Makes the shared infrastructure behind service delivery visible: reusable components and registries can support multiple services.",
      "evaluationQuestion": "Which components can be reused in the local institutional setting, and who can maintain, secure and operate the resulting service?",
      "domain": "inclusion",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-services"
      },
      "trendIds": [
        "interoperable-public-infrastructure",
        "intelligent-water"
      ],
      "region": "India-origin platform; adaptable open-source ecosystem",
      "proposedUse": "Examine a reusable public-service pattern such as water connections or sanitation-service tracking, including records, payment reconciliation and exceptions.",
      "availability": "Open-source public-good platform and implementation ecosystem. It requires configuration, integration, operational capability and a sustainable support model.",
      "note": "eGov Foundation is an ecosystem organization, not a startup. DIGIT service software is distinct from water-treatment hardware and leakage-detection products elsewhere on the radar.",
      "evidenceLabel": "Maintainer documentation and sector product information",
      "evidenceNote": "A public-good designation is not certification of a particular deployment.",
      "sourceIds": [
        "egov-about",
        "egov-digit-platform",
        "egov-water-sanitation"
      ],
      "verified": "2026-11-23",
      "entityType": "ecosystem",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "mojaloop",
      "name": "Mojaloop Foundation",
      "website": "https://mojaloop.io/",
      "category": "Public-good builder · interoperable instant payments",
      "organizationType": "Nonprofit / open-source ecosystem",
      "summary": "Maintains open-source software and an implementation community for interoperable instant payment systems linking participating financial-service providers.",
      "distinctive": "Provides infrastructure beneath payment products, with reference architecture and scheme-level considerations that a vendor-only landscape would miss.",
      "evaluationQuestion": "Can the proposed scheme operate sustainably across providers, including liquidity, reconciliation, fraud response and consumer redress?",
      "domain": "inclusion",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "wbg"
      ],
      "domainsByLens": {
        "wbg": "wbg-services"
      },
      "trendIds": [
        "interoperable-public-infrastructure",
        "inclusive-digital-services"
      ],
      "region": "Global open-source ecosystem; financial-inclusion focus",
      "proposedUse": "Explore a synthetic interoperable payment and merchant-acceptance journey with local payment specialists, including exceptions and accessibility constraints.",
      "availability": "Open-source platform, reference material and implementer ecosystem. A working national or commercial scheme needs additional governance, operators, providers and local compliance arrangements.",
      "note": "Mojaloop Foundation is a nonprofit, not a startup or a retail payment service. Its September 2026 merchant overview distinguishes merchant functions from the core payment hub.",
      "evidenceLabel": "Maintainer mission, FAQ and dated technical overview",
      "evidenceNote": "Documentation establishes an approach; implementation costs and outcomes vary by scheme.",
      "sourceIds": [
        "mojaloop-mission",
        "mojaloop-faq",
        "mojaloop-merchant-2026"
      ],
      "verified": "2026-11-23",
      "entityType": "ecosystem",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "unstructured",
      "name": "Unstructured",
      "website": "https://unstructured.io/",
      "category": "Document preparation for enterprise AI",
      "summary": "Provides parsing and data pipelines that turn enterprise files into structured content for search, retrieval and AI applications.",
      "distinctive": "Focuses on the document pipeline, including layout and table structure, rather than treating ingestion as a simple text-copy step.",
      "evaluationQuestion": "Does better parsing measurably improve supported answers on the institution's hardest reports, while preserving source access and version information?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "wbg"
      ],
      "domainsByLens": {
        "its": "its-knowledge",
        "wbg": "wbg-decisions"
      },
      "trendIds": [
        "document-intelligence",
        "enterprise-agents"
      ],
      "region": "United States",
      "proposedUse": "Prepare a small public project-report collection for an evidence-linked knowledge assistant, comparing retrieval quality with the existing parser and checking permissions before using restricted files.",
      "availability": "Commercial API and pipelines; dedicated-instance and in-VPC options are listed for Business customers. Confirm the chosen feature and deployment combination.",
      "note": "Transform benchmark results are vendor-reported. The pricing page still labels a separate structured-data-extraction feature as coming soon; do not assume every schema-extraction or media feature is available in every deployment.",
      "evidenceLabel": "Product documentation and dated vendor release",
      "evidenceNote": "Transform announcement: 21 October 2026; institutional performance has not been evaluated here.",
      "sourceIds": [
        "unstructured-transform-2026",
        "unstructured-pricing",
        "unstructured-location"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "reducto",
      "name": "Reducto",
      "website": "https://reducto.ai/",
      "category": "Structured extraction from complex documents",
      "summary": "Offers document APIs for parsing, field extraction, classification, splitting and editing, with source coordinates for inspecting results.",
      "distinctive": "Separates layout-aware parsing from extraction against a specified JSON schema, making errors in named fields easier to test.",
      "evaluationQuestion": "Can it return the correct value, unit, reporting period and source region for a field across tables and multilingual scans?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "wbg"
      ],
      "domainsByLens": {
        "its": "its-knowledge",
        "wbg": "wbg-decisions"
      },
      "trendIds": [
        "document-intelligence"
      ],
      "region": "United States",
      "proposedUse": "Extract a bounded set of indicators from public project reports into a reviewer-checked comparison table, linking every value to the source page rather than accepting a fluent summary as evidence.",
      "availability": "Commercial API; enterprise pricing lists VPC and on-premises deployments. Confirm endpoint, model, region and retention settings for the intended configuration.",
      "note": "Coordinates and citations locate output; they do not prove the extracted value or its interpretation is correct. Platform performance claims require a local reference set.",
      "evidenceLabel": "Primary product and deployment documentation",
      "evidenceNote": "Capability verified from current documentation; no WBG deployment or independently measured local accuracy is claimed.",
      "sourceIds": [
        "reducto-developers",
        "reducto-pricing",
        "reducto-location",
        "wbg-documents-reports",
        "wbg-govtech-country-work"
      ],
      "verified": "2026-11-24",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "credo-ai",
      "name": "Credo AI",
      "website": "https://www.credo.ai/",
      "category": "AI portfolio and agent governance",
      "summary": "Provides an AI governance platform linking use cases, models, vendors, agents, MCP servers and deployment platforms with assessments and review records.",
      "distinctive": "Adds dependency-level accountability and evidence management to the radar's existing model-evaluation and runtime-security capabilities.",
      "evaluationQuestion": "When a model, tool or vendor changes, can the team identify all affected uses and the specific evidence that needs renewal?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its"
      ],
      "domainsByLens": {
        "its": "its-trust"
      },
      "trendIds": [
        "ai-portfolio-governance",
        "agent-evaluation"
      ],
      "region": "United States",
      "proposedUse": "Map the dependencies and review evidence for a small portfolio of institutional AI applications, then test whether a changed component produces the right reassessment questions.",
      "availability": "Commercial governance platform; the vendor announced connected agent, MCP-server and deployment-platform records on 17 November 2026.",
      "note": "A governance platform supports accountable decisions; its policy mappings, registry records and reports do not themselves establish compliance or enforce every runtime control.",
      "evidenceLabel": "Recent vendor product announcement",
      "evidenceNote": "New governance entities are vendor-reported; effectiveness depends on inventory coverage, integrations and the institution's review process.",
      "sourceIds": [
        "credo-agent-governance-2026",
        "credo-platform",
        "credo-location"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "n8n",
      "name": "n8n",
      "website": "https://n8n.io/",
      "category": "Configurable workflow and AI orchestration",
      "summary": "Connects application integrations, code, models, agents and human approval steps in configurable workflows, with cloud and self-hosted editions.",
      "distinctive": "Makes deterministic steps and bounded AI steps visible together, giving teams an option between a single-purpose assistant and a fully custom orchestration service.",
      "evaluationQuestion": "Can the workflow complete a useful task with recoverable failures, correctly scoped credentials and a trace of the inputs and actions?",
      "domain": "enterprise",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its"
      ],
      "domainsByLens": {
        "its": "its-knowledge"
      },
      "trendIds": [
        "enterprise-agents",
        "agent-interoperability"
      ],
      "region": "Germany",
      "proposedUse": "Assemble a weekly source-linked portfolio briefing from approved repositories: validate structured data, use an AI step only for synthesis, and let a reviewer approve the finished brief before distribution.",
      "availability": "Hosted service and self-hosted Community, Business and Enterprise editions. Collaboration, identity, secrets and operational features differ by edition.",
      "note": "Community is distributed under the Sustainable Use License, not a blanket open-source license. Self-hosting retains an operational burden; enterprise license connectivity and model/API dependencies need review. OpenTelemetry tracing is listed as preview.",
      "evidenceLabel": "Product, hosting and edition documentation",
      "evidenceNote": "Feature availability is configuration- and plan-specific; a self-hosted workflow does not make connected external model calls local.",
      "sourceIds": [
        "n8n-ai-docs",
        "n8n-hosting",
        "n8n-plans",
        "n8n-license",
        "n8n-press"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "mistral-ai",
      "name": "Mistral AI",
      "website": "https://mistral.ai/",
      "category": "Models, document AI and enterprise agents",
      "summary": "Develops language and document models alongside tools for building agents and workflows, with multiple inference and enterprise deployment arrangements.",
      "distinctive": "Offers a model-and-document stack to assess when languages, deployment control and task-specific processing matter alongside general assistant quality.",
      "evaluationQuestion": "Which exact components can run in the chosen environment, under which licenses, and at what quality and operating cost on the target documents and languages?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "wbg"
      ],
      "domainsByLens": {
        "its": "its-models",
        "wbg": "wbg-services"
      },
      "trendIds": [
        "sovereign-data-ai",
        "document-intelligence",
        "enterprise-agents"
      ],
      "region": "France",
      "proposedUse": "Compare a locally controlled document-processing and retrieval setup for a selected public-service or institutional task, including its actual language mix, hardware needs and source evidence.",
      "availability": "Commercial APIs and enterprise arrangements; OCR 4.1 is documented as generally available. Model hosting, document-model self-deployment and Studio worker hosting are separate decisions.",
      "note": "Self-hosted Studio workers still use Mistral orchestration. Do not equate this with an entirely on-premises or disconnected platform. Model licensing and enterprise self-deployment terms must be checked for the selected product.",
      "evidenceLabel": "Official model and deployment documentation",
      "evidenceNote": "OCR 4.1 documentation is dated 16 July 2026; vendor benchmarks are not a substitute for language- and task-specific evaluation.",
      "sourceIds": [
        "mistral-ocr41",
        "mistral-ocr4-release",
        "mistral-studio-deployments",
        "mistral-inference-deployment",
        "mistral-location"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.3"
    },
    {
      "id": "cohere",
      "name": "Cohere",
      "website": "https://cohere.com/",
      "category": "Private enterprise search, models and agents",
      "summary": "Builds enterprise models and North, an AI workspace combining organizational knowledge, reusable agents and workflows with configurable deployment options.",
      "distinctive": "Brings an integrated enterprise stack and explicitly documented private deployments into the comparison with knowledge assistants and individual model providers.",
      "evaluationQuestion": "Does a private deployment deliver useful, cited answers while maintaining document permissions, an acceptable operational burden and predictable cost?",
      "domain": "trust",
      "ring": "experiment",
      "horizon": "now",
      "lenses": [
        "its",
        "wbg"
      ],
      "domainsByLens": {
        "its": "its-knowledge",
        "wbg": "wbg-services"
      },
      "trendIds": [
        "enterprise-agents",
        "sovereign-data-ai",
        "context-memory"
      ],
      "region": "Canada",
      "proposedUse": "Evaluate a controlled institutional knowledge workspace against a defined set of multilingual questions, source-permission tests and evidence-linked briefing tasks; compare the full operating cost with a modular alternative.",
      "availability": "Commercial enterprise platform. Vendor documentation distinguishes Cohere-managed Model Vault, customer-managed VPC and on-premises deployments; scope and terms require confirmation.",
      "note": "Private deployment and product controls do not by themselves establish institutional approval or local accuracy. North connectors, external data licenses and feature availability must be checked individually.",
      "evidenceLabel": "Official platform documentation and dated release",
      "evidenceNote": "North 2 was announced on 5 October 2026. Its performance and operating-benefit descriptions remain vendor claims until tested locally.",
      "sourceIds": [
        "cohere-north",
        "cohere-north2",
        "cohere-private",
        "cohere-about"
      ],
      "verified": "2026-11-23",
      "addedInEdition": "2026.11.23.3"
    }
  ],
  "sources": [
    {
      "id": "cognition-about",
      "title": "About Cognition",
      "url": "https://cognition.com/about",
      "publisher": "cognition.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "replit-missions",
      "title": "Introducing Replit Missions",
      "url": "https://replit.com/blog/introducing-replit-missions",
      "publisher": "replit.com",
      "date": "2026-11-17",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "seekr-agents",
      "title": "SeekrFlow Agents",
      "url": "https://www.seekr.com/seekrflow/agents/",
      "publisher": "seekr.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "dust-enterprise",
      "title": "Dust for Enterprise",
      "url": "https://dust.tt/home/enterprise",
      "publisher": "dust.tt",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "glean-agents",
      "title": "How agents work",
      "url": "https://docs.glean.com/agents/overview/how-agents-work",
      "publisher": "docs.glean.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "syntes-home",
      "title": "Syntes AI platform",
      "url": "https://syntes.ai/",
      "publisher": "syntes.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "syntes-tedco",
      "title": "TEDCO Invests in Syntes AI",
      "url": "https://www.tedcomd.com/press-release/tedco-invests-syntes-ai",
      "publisher": "tedcomd.com",
      "date": "2026-09-16",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "zep-memory",
      "title": "What Is a Temporal Knowledge Graph?",
      "url": "https://www.getzep.com/ai-agents/temporal-knowledge-graph/",
      "publisher": "getzep.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "letta-state",
      "title": "Stateful agents",
      "url": "https://docs.letta.com/concepts/stateful-agents",
      "publisher": "docs.letta.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "composio-docs",
      "title": "Composio developer documentation",
      "url": "https://docs.composio.dev/",
      "publisher": "docs.composio.dev",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "arcade-developers",
      "title": "Arcade for developers: API, MCP, and CLI",
      "url": "https://www.arcade.dev/developers/",
      "publisher": "arcade.dev",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "langsmith-server",
      "title": "LangSmith Agent Server",
      "url": "https://www.langchain.com/langsmith/agent-server",
      "publisher": "langchain.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "Page states LangSmith Deployment was renamed Agent Server in November 2026.",
      "kind": "Primary source"
    },
    {
      "id": "arize-home",
      "title": "Arize AI agent observability and evaluation platform",
      "url": "https://arize.com/",
      "publisher": "arize.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "braintrust-home",
      "title": "Braintrust observability and evaluation platform",
      "url": "https://www.braintrust.dev/home",
      "publisher": "braintrust.dev",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "galileo-product",
      "title": "Galileo AI observability and evaluation platform",
      "url": "https://galileo.ai/lp/ai-observability-and-evaluation",
      "publisher": "galileo.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "ravenopus-home",
      "title": "Ravenopus: The agency that ships",
      "url": "https://ravenopus.com/",
      "publisher": "ravenopus.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "Operating model and team-size statements are company self-description; performance multipliers excluded.",
      "kind": "Primary source"
    },
    {
      "id": "polsia-terms",
      "title": "Polsia Terms of Service: services and AI features",
      "url": "https://polsia.com/terms",
      "publisher": "polsia.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "Homepage loads through JavaScript; official terms establish service functionality without relying on unverified traction claims.",
      "kind": "Primary source"
    },
    {
      "id": "lindy-docs",
      "title": "What is Lindy?",
      "url": "https://www.lindy.ai/docs",
      "publisher": "lindy.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "bricklayer-platform",
      "title": "Bricklayer AI platform",
      "url": "https://www.bricklayer.ai/platform/",
      "publisher": "bricklayer.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "dropzone-product",
      "title": "Dropzone AI SOC Analyst",
      "url": "https://www.dropzone.ai/product/ai-soc-analyst",
      "publisher": "dropzone.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "torq-platform",
      "title": "The Torq AI SOC Platform",
      "url": "https://torq.io/ai-soc-platform/",
      "publisher": "torq.io",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "figure-helix02",
      "title": "Introducing Helix 02: Full-Body Autonomy",
      "url": "https://www.figure.ai/news/helix-02",
      "publisher": "figure.ai",
      "date": "2026-01-27",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "skild-home",
      "title": "Skild AI: General Purpose Robotic Intelligence",
      "url": "https://www.skild.ai/",
      "publisher": "skild.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "odyssey3",
      "title": "Meet Odyssey-3: Our Most Powerful Foundation World Model",
      "url": "https://odyssey.systems/meet-odyssey-3",
      "publisher": "odyssey.systems",
      "date": "2026-10-08",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "wayve-gaia3",
      "title": "Wayve launches GAIA-3, advancing world models from simulation to evaluation",
      "url": "https://wayve.ai/press/wayve-launches-gaia3/",
      "publisher": "wayve.ai",
      "date": "2025-12-02",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "waabi-technology",
      "title": "Waabi technology: simulation and physical AI",
      "url": "https://waabi.ai/technology",
      "publisher": "waabi.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "psiquantum-architecture",
      "title": "PsiQuantum architecture",
      "url": "https://www.psiquantum.com/architecture",
      "publisher": "psiquantum.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "riverlane-home",
      "title": "Riverlane quantum error correction",
      "url": "https://www.riverlane.com/",
      "publisher": "riverlane.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "alicebob-roadmap",
      "title": "Alice & Bob unveils accelerated roadmap on modular architecture",
      "url": "https://alice-bob.com/newsroom/alice-bob-accelerates-roadmap/",
      "publisher": "alice-bob.com",
      "date": "2026-11-18",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "mcp-spec",
      "title": "The 2026-07-28 Model Context Protocol Specification",
      "url": "https://blog.modelcontextprotocol.io/posts/2026-07-28/",
      "publisher": "blog.modelcontextprotocol.io",
      "date": "2026-07-28",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "a2a-spec",
      "title": "Agent2Agent Protocol Specification v1.0.0",
      "url": "https://a2a-protocol.org/v1.0.0/specification/",
      "publisher": "a2a-protocol.org",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "riverlane-qec-loop",
      "title": "Riverlane and Qblox have closed a full real-time QEC loop",
      "url": "https://www.riverlane.com/blog/riverlane-and-qblox-have-closed-a-full-real-time-qec-loop",
      "publisher": "riverlane.com",
      "date": "2026-09-11",
      "checked": "2026-11-23",
      "note": "Demonstration used emulated qubit measurement data; do not describe as an end-to-end live-qubit demonstration.",
      "kind": "Primary source"
    },
    {
      "id": "factory-home",
      "title": "Factory: Agent-Native Software Development",
      "url": "https://factory.com/",
      "publisher": "factory.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "factory-azure",
      "title": "Factory Expands Collaboration with Microsoft to Bring Autonomous Software Engineering to Enterprises",
      "url": "https://factory.com/news/microsoft-collaboration",
      "publisher": "factory.com",
      "date": "2026-11-18",
      "checked": "2026-11-24",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "factory-company-news",
      "title": "Factory company news",
      "url": "https://factory.com/news?category=company",
      "publisher": "factory.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "Current company news lists a 15 September 2026 funding announcement; this is used for corporate context without quoting amounts.",
      "kind": "Primary source"
    },
    {
      "id": "cognition-series-e",
      "title": "Do it all with Devin: Announcing our Series E",
      "url": "https://cognition.com/blog/series-e",
      "publisher": "cognition.com",
      "date": "2026-09-08",
      "checked": "2026-11-23",
      "note": "Explicitly describes Cognition as an independent agent lab. Funding and valuation figures are omitted from the directory.",
      "kind": "Primary source"
    },
    {
      "id": "alicebob-results",
      "title": "Alice & Bob shares first results from France’s PROQCIMA quantum programme",
      "url": "https://alice-bob.com/newsroom/alice-bob-results/",
      "publisher": "alice-bob.com",
      "date": "2026-10-20",
      "checked": "2026-11-23",
      "note": "States that measured logical error rate was not yet below threshold in these demonstrators.",
      "kind": "Primary source"
    },
    {
      "id": "pi-api",
      "title": "Frontier Models for Every Robot: Announcing our API beta",
      "url": "https://www.pi.website/blog/api-beta",
      "publisher": "pi.website",
      "date": "2026-10-13",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "cursor-acquired",
      "title": "Cursor is now a part of SpaceX",
      "url": "https://cursor.com/en-US/blog/joining-spacex",
      "publisher": "cursor.com",
      "date": "2026-08-14",
      "checked": "2026-11-23",
      "note": "Retained as ecosystem context only; Cursor removed from the startup scouting roster.",
      "kind": "Primary source"
    },
    {
      "id": "wbg-digital",
      "title": "WBG Digital Strategy launch",
      "url": "https://www.worldbank.org/en/news/press-release/2026/10/20/world-bank-group-launches-first-digital-strategy-to-expand-access-and-create-jobs",
      "publisher": "World Bank Group",
      "date": "2026-10-20",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-wdr",
      "title": "World Development Report 2026: The Promise of AI",
      "url": "https://www.worldbank.org/en/publication/wdr2026",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-foundations",
      "title": "Strengthening AI Foundations",
      "url": "https://www.worldbank.org/en/news/factsheet/2025/11/21/strengthening-ai-foundations-emerging-opportunities-for-developing-countries",
      "publisher": "World Bank Group",
      "date": "2025-11-21",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-dpi",
      "title": "Global DPI Program",
      "url": "https://www.worldbank.org/en/results/2026/05/06/global-digital-public-infrastructure-program",
      "publisher": "World Bank Group",
      "date": "2026-05-06",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-data",
      "title": "Building Data Infrastructure for AI Readiness",
      "url": "https://www.worldbank.org/en/results/2026/05/06/data-infrastructure-for-ai",
      "publisher": "World Bank Group",
      "date": "2026-05-06",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-climate",
      "title": "Combining Data, Local Knowledge and Action for Climate Resilience",
      "url": "https://www.worldbank.org/en/brief/2026/09/29/combining-data-local-knowledge-and-action-for-stronger-climate-resilience",
      "publisher": "World Bank Group",
      "date": "2026-09-29",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-geo",
      "title": "World Bank GeoLab capabilities",
      "url": "https://www.worldbank.org/en/programs/geo-lab/overview",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-agri",
      "title": "Harnessing AI for Agricultural Transformation",
      "url": "https://www.worldbank.org/en/topic/agriculture/publication/harnessing-artificial-intelligence-for-agricultural-transformation",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-agriconnect",
      "title": "AgriConnect Implementation Plan 2026",
      "url": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099083126084511951",
      "publisher": "World Bank Group",
      "date": "2026-09-01",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-health",
      "title": "Health Target Implementation Plan 2026",
      "url": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099092526213524678",
      "publisher": "World Bank Group",
      "date": "2026-07-08",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-healthfaq",
      "title": "Health Works FAQ",
      "url": "https://www.worldbank.org/ext/en/health-works/faq",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-energy",
      "title": "Mission 300 FAQ",
      "url": "https://www.worldbank.org/ext/en/energizingafrica/faq",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-24",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-water",
      "title": "World Bank Digital Water",
      "url": "https://www.worldbank.org/en/programs/digital-water/about-us",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "wbg-mrv",
      "title": "ICVCM and World Bank report on digital MRV integrity",
      "url": "https://www.icvcm.org/new-report-explores-integrity-requirements-for-digital-monitoring-reporting-and-verification-dmrv/",
      "publisher": "icvcm.org",
      "date": "2026-09-22",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "wbg-carbon",
      "title": "Measuring Climate Results, November 2026 update",
      "url": "https://www.worldbank.org/en/topic/climatechange/publication/common-approach-to-measuring-climate-results",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "amini",
      "title": "Amini infrastructure and intelligence stack",
      "url": "https://www.amini.ai/",
      "publisher": "amini.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "pixxel",
      "title": "Pixxel satellites and Earth observation platform",
      "url": "https://www.pixxel.space/",
      "publisher": "pixxel.space",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "pixxel-contact",
      "title": "Pixxel contact locations",
      "url": "https://www.pixxel.space/contact",
      "publisher": "pixxel.space",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "pixxel-nasa",
      "title": "NASA Commercial Satellite Data Acquisition: Pixxel",
      "url": "https://science.nasa.gov/earth-science/csda/csda-vendor-pixxel/",
      "publisher": "science.nasa.gov",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "satvu",
      "title": "SatVu thermal imagery accessible through SkyFi",
      "url": "https://www.satellitevu.com/news/skyfi-integrates-satvu-to-deliver-high-resolution-thermal-satellite-imagery",
      "publisher": "satellitevu.com",
      "date": "2026-10-22",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "tomorrow",
      "title": "Tomorrow.io satellite data",
      "url": "https://www.tomorrow.io/satellite-data/",
      "publisher": "tomorrow.io",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "tomorrow-noaa",
      "title": "NOAA selects Tomorrow.io",
      "url": "https://noaa.gov/news-release/noaa-selects-tomorrowio-to-help-advance-us-weather-forecasting",
      "publisher": "noaa.gov",
      "date": "2026-09-17",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "floodbase",
      "title": "Floodbase flood intelligence engine",
      "url": "https://www.floodbase.com/product",
      "publisher": "floodbase.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "climatex",
      "title": "Climate X Spectra methodology",
      "url": "https://www.climate-x.com/spectra/methodology/",
      "publisher": "climate-x.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "climatex-sep",
      "title": "Climate X September 2026 release notes",
      "url": "https://releases.climate-x.com/releases/2026/september-2026/",
      "publisher": "releases.climate-x.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "sarvam",
      "title": "Sarvam model documentation",
      "url": "https://docs.sarvam.ai/api/getting-started/models",
      "publisher": "docs.sarvam.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "sarvam-v4",
      "title": "Sarvam Saaras V4 announcement",
      "url": "https://www.sarvam.ai/blogs/introducing-saaras-v4",
      "publisher": "sarvam.ai",
      "date": "2026-09-25",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "sarvam-location",
      "title": "Sarvam privacy policy and registered office",
      "url": "https://www.sarvam.ai/privacy-policy",
      "publisher": "sarvam.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "lelapa",
      "title": "Lelapa Vulavula documentation",
      "url": "https://docs.lelapa.ai/overview/introduction",
      "publisher": "docs.lelapa.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "lelapa-location",
      "title": "Lelapa privacy notice and Johannesburg base",
      "url": "https://lelapa.ai/privacy",
      "publisher": "lelapa.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "viamo",
      "title": "Viamo and Google: AI by phone call",
      "url": "https://viamo.io/viamo-platform/viamo-and-google-partner-to-bring-ai-over-a-phone-call/",
      "publisher": "viamo.io",
      "date": "2026-09-23",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "viamo-ava",
      "title": "Ask Viamo Anything",
      "url": "https://viamo.io/ask-viamo-anything/",
      "publisher": "viamo.io",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "smile",
      "title": "Smile ID verification platform",
      "url": "https://smile.id/",
      "publisher": "smile.id",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "yoti",
      "title": "Yoti digital identity and verification product privacy descriptions",
      "url": "https://www.yoti.com/privacy/products/",
      "publisher": "yoti.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "newlogic",
      "title": "Newlogic expertise and DPI",
      "url": "https://newlogic.com/",
      "publisher": "newlogic.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "jumo",
      "title": "JUMO financial technology platform",
      "url": "https://jumo.world/about-us/",
      "publisher": "jumo.world",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "jumo-finance",
      "title": "JUMO and Standard Bank Social Finance Framework",
      "url": "https://jumo.world/press-release/jumo-and-standard-bank-launch-social-finance-framework-to-scale-inclusive-finance-in-africa/",
      "publisher": "jumo.world",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "cropin",
      "title": "Cropin and Google Cloud launch OrbitAI",
      "url": "https://www.cropin.com/press-release/cropin-and-google-cloud-launch-orbitai-the-worlds-first-agentic-ai-platform-for-food-and-agriculture/",
      "publisher": "cropin.com",
      "date": "2026-07-14",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "plantix",
      "title": "Plantix Crop Health API toolkit",
      "url": "https://plantix.net/en/plantix-intelligence/api-toolkit/",
      "publisher": "plantix.net",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "pula",
      "title": "Pula agricultural insurance and data",
      "url": "https://www.pula-advisors.com/",
      "publisher": "pula-advisors.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "pula-ifc",
      "title": "IFC Pula Series B disclosure",
      "url": "https://disclosures.ifc.org/project-detail/SII/48446/pula-series-b",
      "publisher": "disclosures.ifc.org",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "qure",
      "title": "Qure.ai qXR chest X-ray tool",
      "url": "https://www.qure.ai/product/qxr",
      "publisher": "qure.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "qure-study",
      "title": "AI-enabled community TB screening in Nigeria study",
      "url": "https://link.springer.com/article/10.1186/s44263-026-00313-7",
      "publisher": "link.springer.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "ilara",
      "title": "Ilara Health clinic platform",
      "url": "https://www.ilarahealth.com/",
      "publisher": "ilarahealth.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "ilara-undp",
      "title": "UNDP Digital X: Ilara Health Operating System",
      "url": "https://digitalx.undp.org/ilara-health-operating-system_1.html",
      "publisher": "digitalx.undp.org",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "axmed",
      "title": "Axmed medicines marketplace",
      "url": "https://www.axmed.com/solutions/marketplace",
      "publisher": "axmed.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "husk",
      "title": "Husk: AI and distributed energy operations",
      "url": "https://www.huskpowersystems.com/How-We-Do-It",
      "publisher": "huskpowersystems.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "nithio",
      "title": "Nithio risk analytics and energy finance",
      "url": "https://nithio.com/",
      "publisher": "nithio.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "nithio-undp",
      "title": "UNDP: AI-enabled financing to scale energy access",
      "url": "https://www.undp.org/climate-aggregation-platform/ai-enabled-financing-scale-energy-access",
      "publisher": "undp.org",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "sunking",
      "title": "Sun King EasyBuy payment model",
      "url": "https://sunking.com/payment-options/",
      "publisher": "sunking.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "fido",
      "title": "FIDO AI acoustic water-leak analysis",
      "url": "https://fido.tech/platform/fido-ai/",
      "publisher": "fido.tech",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "fido-oct",
      "title": "FIDO app 3.5.0: offline correlation and confidence indicators",
      "url": "https://fido.tech/news/whats-new-in-fidosmart-app-version-3-5-0/",
      "publisher": "fido.tech",
      "date": "2026-10-12",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "wint",
      "title": "Wint water intelligence technology",
      "url": "https://wint.ai/product/technology/",
      "publisher": "wint.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "source",
      "title": "SOURCE Hydropanel technology",
      "url": "https://source.co/pages/how-it-works",
      "publisher": "source.co",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "chloris",
      "title": "Chloris platform documentation",
      "url": "https://app.chloris.earth/docs/1.9.4/index.html",
      "publisher": "app.chloris.earth",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "sylvera",
      "title": "Sylvera carbon data products",
      "url": "https://www.sylvera.com/carbon-data",
      "publisher": "sylvera.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "boomitra",
      "title": "Boomitra science and technology",
      "url": "https://boomitra.com/science-and-tech/",
      "publisher": "boomitra.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "wbg-suptech",
      "title": "WBG: proactive market conduct supervision",
      "url": "https://blogs.worldbank.org/en/psd/innovative-data-driven-approaches-for-more-proactive-market-cond",
      "publisher": "World Bank Group",
      "date": "2026-07-14",
      "checked": "2026-11-23",
      "note": "",
      "kind": "Institutional source"
    },
    {
      "id": "fna",
      "title": "FNA Supervisory Intelligence",
      "url": "https://fna.fi/products/supervisory-intelligence",
      "publisher": "fna.fi",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "regulativ",
      "title": "Regulativ compliance automation platform",
      "url": "https://www.regulativ.ai/",
      "publisher": "regulativ.ai",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "quantexa",
      "title": "Quantexa public-sector solutions",
      "url": "https://www.quantexa.com/industries/public-sector/",
      "publisher": "quantexa.com",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "quantexa-gov",
      "title": "UK Government: Quantexa fraud-detection contract",
      "url": "https://www.gov.uk/government/news/cutting-edge-data-and-ai-tech-to-help-government-hunt-down-fraudsters",
      "publisher": "gov.uk",
      "date": null,
      "checked": "2026-11-23",
      "note": "",
      "kind": "Primary source"
    },
    {
      "id": "liquid-lfm3",
      "title": "Introducing LFM3: Every Modality for Specialized Intelligence",
      "url": "https://www.liquid.ai/blog/lfm3",
      "publisher": "Liquid AI",
      "date": "2026-10-27",
      "checked": "2026-11-23",
      "kind": "Company announcement",
      "note": ""
    },
    {
      "id": "cactus-main",
      "title": "Cactus Compute: models and on-device capabilities",
      "url": "https://www.cactuscompute.com/",
      "publisher": "Cactus Compute",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Company source",
      "note": ""
    },
    {
      "id": "ollama-faq",
      "title": "Ollama local runtime documentation",
      "url": "https://docs.ollama.com/faq",
      "publisher": "Ollama",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Technical documentation",
      "note": ""
    },
    {
      "id": "elevenagents-overview",
      "title": "ElevenAgents documentation overview",
      "url": "https://elevenlabs.io/docs/eleven-agents/overview/",
      "date": null,
      "publisher": "elevenlabs.io",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "elevenlabs-nvidia-20261111",
      "title": "ElevenLabs and NVIDIA expand enterprise and government voice-agent collaboration",
      "url": "https://elevenlabs.io/blog/nvidia",
      "date": "2026-11-11",
      "publisher": "elevenlabs.io",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "cartesia-managed-20261029",
      "title": "Introducing Managed Agents",
      "url": "https://www.cartesia.ai/blog/managed-agents",
      "date": "2026-10-29",
      "publisher": "www.cartesia.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "cartesia-agents",
      "title": "Cartesia Managed Agents",
      "url": "https://www.cartesia.ai/agents",
      "date": null,
      "publisher": "www.cartesia.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "sierra-horizon-20260716",
      "title": "The next Horizon in agents",
      "url": "https://sierra.ai/blog/horizon",
      "date": "2026-07-16",
      "publisher": "sierra.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "noma-runtime-control",
      "title": "Noma Agent Runtime Security",
      "url": "https://noma.security/solutions/agent-behavior-runtime-control",
      "date": null,
      "publisher": "noma.security",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "noma-aws-20261117",
      "title": "Runtime governance for AI agents with Noma Security and AgentCore Gateway",
      "url": "https://aws.amazon.com/blogs/apn/runtime-governance-for-ai-agents-with-noma-security-and-agentcore-gateway/",
      "date": "2026-11-17",
      "note": "Partner implementation guide; coverage depends on routed traffic, supported formats and configured enforcement.",
      "publisher": "aws.amazon.com",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "lila-tech",
      "title": "LILA technology",
      "url": "https://www.lila.ai/tech",
      "date": null,
      "publisher": "www.lila.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "lila-catalyst-20260925",
      "title": "How an AI-run lab cracked open green hydrogen's catalyst problem",
      "url": "https://www.lila.ai/news/how-an-ai-run-lab-cracked-open-green-hydrogens-catalyst-problem",
      "date": "2026-09-25",
      "note": "Company research report discloses manual sample transfers and remaining commercial scale-up work.",
      "publisher": "www.lila.ai",
      "checked": "2026-11-24",
      "kind": "Primary source"
    },
    {
      "id": "periodic-neon-20260915",
      "title": "Building Labs that Learn",
      "url": "https://periodic.com/news/building-labs-that-learn",
      "date": "2026-09-15",
      "publisher": "periodic.com",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "cusp-foundry-20260720",
      "title": "Launching our AI Materials Foundry",
      "url": "https://cusp.ai/blog/launching-our-ai-materials-foundry-and-450-million-series-b/",
      "date": "2026-07-20",
      "publisher": "cusp.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "cusp-platform",
      "title": "CuspAI materials discovery",
      "url": "https://cusp.ai/",
      "date": null,
      "publisher": "cusp.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "physicsx-platform",
      "title": "PhysicsX platform",
      "url": "https://www.physicsx.ai/platform",
      "date": null,
      "publisher": "www.physicsx.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "physicsx-fortescue-20261027",
      "title": "PhysicsX and Fortescue expand partnership for industrial innovation",
      "url": "https://www.physicsx.ai/resources/physicsx-and-fortescue-expand-partnership-to-accelerate-industrial-innovation-with-ai",
      "date": "2026-10-27",
      "publisher": "www.physicsx.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "beyondmath-platform",
      "title": "BeyondMath Generative Physics Engine",
      "url": "https://beyondmath.com/",
      "date": null,
      "publisher": "beyondmath.com",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "beyondmath-company",
      "title": "BeyondMath company and research collaboration announcement",
      "url": "https://beyondmath.com/news/seed-round-announcement",
      "date": null,
      "note": "Exact publication date not visible; funding and performance multipliers omitted.",
      "publisher": "beyondmath.com",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "lightmatter-passage",
      "title": "Lightmatter Passage photonic interconnect platform",
      "url": "https://lightmatter.com/products/passage/",
      "date": null,
      "note": "Product page states early access for partners.",
      "publisher": "lightmatter.com",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "lightmatter-ocp-20261012",
      "title": "Lightmatter open rack CPO switch and XPU scale-up systems",
      "url": "https://lightmatter.com/press-release/lightmatter-delivers-open-rack-cpo-switch-and-xpu-scale-up-server-through-independent-collaborations-with-flex-and-other-industry-partners/",
      "date": "2026-10-12",
      "note": "Describes validation and demonstration systems and a path to volume production.",
      "publisher": "lightmatter.com",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "dmatrix-production-20260609",
      "title": "d-Matrix Corsair inference platform enters production",
      "url": "https://www.d-matrix.ai/announcements/d-matrix-corsair-ai-inference-platform-enters-full-production-to-meet-customer-demand/",
      "date": "2026-06-09",
      "note": "Availability limited to select qualified customers.",
      "publisher": "www.d-matrix.ai",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "extropic-hardware",
      "title": "Extropic thermodynamic hardware",
      "url": "https://extropic.ai/hardware",
      "date": null,
      "note": "Z1 early access marked 2027; X0 and XTR-0 are prototype/research systems.",
      "publisher": "extropic.ai",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "extropic-software",
      "title": "Extropic software",
      "url": "https://extropic.ai/software",
      "date": null,
      "publisher": "extropic.ai",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "extropic-research-20261001",
      "title": "First Sparks of Thermodynamic Recursive Intelligence",
      "url": "https://extropic.ai/writing/baby-thermo-rsi/",
      "date": "2026-10-01",
      "note": "Describes research and future use of larger chips in 2027.",
      "publisher": "extropic.ai",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "satsure-home",
      "title": "SatSure: satellite intelligence and solutions",
      "url": "https://www.satsure.co/",
      "publisher": "SatSure",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "satsure-about",
      "title": "About SatSure",
      "url": "https://www.satsure.co/about-us/",
      "publisher": "SatSure",
      "date": null,
      "note": "Company capability and Bengaluru address; no funding or traction claim used.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "satsure-public-sector",
      "title": "Rodic Digital Advisory signs MoU with SatSure",
      "url": "https://www.satsure.co/press-release/rodic-digital-advisory-signs-mou-with-satsure-to-bring-earth-observation-intelligence-to-indias-public-sector/",
      "publisher": "SatSure",
      "date": "2026-04-01",
      "note": "An announced collaboration, not independently proven deployment outcomes.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "buildots-product",
      "title": "Buildots product",
      "url": "https://buildots.com/product/",
      "publisher": "Buildots",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "buildots-reporting",
      "title": "Buildots progress reporting",
      "url": "https://buildots.com/solutions/progress-reporting/",
      "publisher": "Buildots",
      "date": null,
      "note": "Assess support for incomplete BIM rather than assuming a universal full-BIM prerequisite.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "buildots-dot",
      "title": "Buildots upgrades Dot into an on-demand construction analyst",
      "url": "https://www.prnewswire.com/news-releases/buildots-upgrades-dot-turning-its-ai-assistant-into-an-on-demand-construction-analyst-for-project-teams-302915371.html",
      "publisher": "Buildots via PR Newswire",
      "date": "2026-10-21",
      "note": "Company-authored announcement; rollout and outcome claims are not independent validation.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "premise-development",
      "title": "Premise international development solutions",
      "url": "https://premise.com/solutions/international-development/",
      "publisher": "Premise",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "premise-how",
      "title": "How Premise works",
      "url": "https://premise.com/how-premise-works/",
      "publisher": "Premise",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "aidash-home",
      "title": "AiDASH satellite-first infrastructure intelligence",
      "url": "https://www.aidash.com/",
      "publisher": "AiDASH",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "aidash-evolve",
      "title": "AiDASH Evolve 2026 welcome address",
      "url": "https://www.aidash.com/evolve-2026-welcome-address-abhishek-vinod-singh-co-founder-and-ceo-aidash/",
      "publisher": "AiDASH",
      "date": null,
      "note": "Describes product modules; exact publication date not established.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "altana-government",
      "title": "Altana for government",
      "url": "https://altana.ai/solutions/for-government",
      "publisher": "Altana",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "altana-fedramp",
      "title": "Altana achieves FedRAMP High authorization",
      "url": "https://altana.ai/resources/altana-achieves-fedramp-high-authorization",
      "publisher": "Altana",
      "date": "2026-02-09",
      "note": "Scope stated as AWS GovCloud; no WBG approval inference.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "eduten-about",
      "title": "About Eduten",
      "url": "https://eduten.com/about",
      "publisher": "Eduten",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "eduten-agency",
      "title": "Exploring Finnish digital education: Eduten",
      "url": "https://www.oph.fi/en/exploring-finnish-digital-education/solutions/solutions-eduten",
      "publisher": "Finnish National Agency for Education",
      "date": null,
      "note": "Older roadmap statements do not verify current offline availability.",
      "kind": "Institutional source",
      "checked": "2026-11-23"
    },
    {
      "id": "eduten-unicef",
      "title": "Transforming Math Learning with EdTech",
      "url": "https://www.unicef.org/digitaleducation/media/1206/file/UNICEF_Transforming%20Math%20Learning%20with%20EdTech_final.pdf.pdf",
      "publisher": "UNICEF",
      "date": null,
      "note": "Evaluation describes adaptive learning and analytics in tested deployments; do not recast as evidence for an open-ended generative tutor.",
      "kind": "Institutional source",
      "checked": "2026-11-23"
    },
    {
      "id": "eidu-platform",
      "title": "The EIDU platform",
      "url": "https://www.eidu.com/solution/our-platform",
      "publisher": "EIDU",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "eidu-developer",
      "title": "EIDU developer documentation",
      "url": "https://dev.eidu.com/",
      "publisher": "EIDU",
      "date": null,
      "note": "Most features designed for offline use; indefinite wholly disconnected operation is not assumed.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "eidu-legal",
      "title": "EIDU legal notice",
      "url": "https://www.eidu.com/legal-notice",
      "publisher": "EIDU",
      "date": null,
      "note": "Lists company and association entities; avoid invented venture-stage classification.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "resolve-incidents",
      "title": "ResolveAI incident investigation",
      "url": "https://resolve.ai/product/incidents",
      "publisher": "ResolveAI",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "resolve-sre1",
      "title": "ResolveAI introduces SRE-1 and primary on-call",
      "url": "https://resolve.ai/news/introduces-SRE-1-model-and-primary-on-call",
      "publisher": "ResolveAI",
      "date": "2026-11-18",
      "note": "New company announcement, not independent evaluation of reliability or benchmark superiority.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "cast-getting-started",
      "title": "Cast AI getting started",
      "url": "https://docs.cast.ai/docs/getting-started",
      "publisher": "Cast AI",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "cast-cloud-connect",
      "title": "Cast AI Cloud Connect",
      "url": "https://docs.cast.ai/docs/cloud-connect",
      "publisher": "Cast AI",
      "date": null,
      "note": "Agentless read-only discovery differs from enabling automated optimization.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "cast-kubernetes-permissions",
      "title": "Cast AI Kubernetes permissions",
      "url": "https://docs.cast.ai/docs/kubernetes-permissions",
      "publisher": "Cast AI",
      "date": null,
      "note": "The in-cluster read-only agent has limited self-management permissions; inspect exact role bindings.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "mechanical-platform",
      "title": "Mechanical Orchard Imogen platform",
      "url": "https://www.mechanical-orchard.com/platform",
      "publisher": "Mechanical Orchard",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "mechanical-july-release",
      "title": "Mechanical Orchard releases Imogen platform improvements",
      "url": "https://www.mechanical-orchard.com/insights/mechanical-orchard-releases-imogen-platform-improvements",
      "publisher": "Mechanical Orchard",
      "date": "2026-07-09",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "anomalo-home",
      "title": "Anomalo data platform",
      "url": "https://www.anomalo.com/",
      "publisher": "Anomalo",
      "date": null,
      "note": "Distinguish available agents from dashboard reporting, KPI monitoring and experiment evaluation labelled coming soon.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "anomalo-platform-launch",
      "title": "Introducing self-driving data and the Anomalo agentic platform",
      "url": "https://www.anomalo.com/blog/introducing-self-driving-data-and-the-new-anomalo-agentic-platform/?llm_view=1",
      "publisher": "Anomalo",
      "date": "2026-04-02",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "aembit-ai-agents",
      "title": "Aembit AI-agent access use cases",
      "url": "https://docs.aembit.io/get-started/use-cases/ai-agents/",
      "publisher": "Aembit",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "aembit-faq",
      "title": "Aembit frequently asked questions",
      "url": "https://aembit.io/faq",
      "publisher": "Aembit",
      "date": "2026-07-24",
      "note": "Date is the page's stated update date.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "nixtla-foundry",
      "title": "TimeGPT is now available on Microsoft Foundry",
      "url": "https://www.nixtla.io/blog/timegpt-azure-marketplace",
      "publisher": "Nixtla",
      "date": "2026-07-15",
      "note": "Do not repeat marketing that marketplace availability removes an organization's vendor-review obligations.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "nixtla-microsoft-catalog",
      "title": "Microsoft Foundry model catalog: TimeGPT-2.1",
      "url": "https://ai.azure.com/catalog/models/TimeGPT-2.1?publisher=Nixtla",
      "publisher": "Microsoft",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": ""
    },
    {
      "id": "nixtla-sdk",
      "title": "Nixtla TimeGPT SDK and forecasting documentation",
      "url": "https://github.com/Nixtla/nixtla",
      "publisher": "Nixtla",
      "date": null,
      "note": "The SDK is open source; the TimeGPT model is closed source, with separately offered deployment options.",
      "checked": "2026-11-23",
      "kind": "Primary source"
    },
    {
      "id": "wbg-jobs-strategy",
      "title": "World Bank Group Annual Report 2026: Jobs Strategy",
      "url": "https://www.worldbank.org/en/about/annual-report/jobs-strategy",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Current strategy context, not evidence that any listed company is a WBG partner."
    },
    {
      "id": "wbg-jobs-faq",
      "title": "Creating Jobs for a Better Future: WBG jobs and MSME approach",
      "url": "https://www.worldbank.org/ext/en/jobs/faq",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Institutional source",
      "note": "Policy context for jobs and productive firms."
    },
    {
      "id": "fuzu-home",
      "title": "Fuzu: job matching, learning and career guidance",
      "url": "https://www.fuzu.com/",
      "publisher": "Fuzu",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Company description; not independent outcome validation."
    },
    {
      "id": "fuzu-employers",
      "title": "Fuzu employer platform",
      "url": "https://www.fuzu.com/employers",
      "publisher": "Fuzu",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Current product page; no pricing or population-size claims reproduced."
    },
    {
      "id": "fuzu-learn",
      "title": "Fuzu Learn: learning and career planning",
      "url": "https://www.fuzu.com/learn",
      "publisher": "Fuzu",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Product description."
    },
    {
      "id": "gloat-talent",
      "title": "Gloat Talent Marketplace",
      "url": "https://gloat.com/platform/the-talent-marketplace/",
      "publisher": "Gloat",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Company feature descriptions."
    },
    {
      "id": "gloat-product",
      "title": "Gloat platform: work, workforce and skills",
      "url": "https://gloat.com/product/",
      "publisher": "Gloat",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Current product page; implementation results not independently verified."
    },
    {
      "id": "moniepoint-business",
      "title": "Moniepoint Nigeria: business banking and Moniebook",
      "url": "https://www.moniepoint.com/ng/business",
      "publisher": "Moniepoint",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Nigeria-specific commercial product information."
    },
    {
      "id": "moniepoint-payments",
      "title": "Moniepoint payments for businesses",
      "url": "https://www.moniepoint.com/payments",
      "publisher": "Moniepoint",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Descriptive capabilities only; no financial-product recommendation."
    },
    {
      "id": "hotelrunner-about",
      "title": "HotelRunner: company and hospitality platform",
      "url": "https://hotelrunner.com/en/about/",
      "publisher": "HotelRunner",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Company description."
    },
    {
      "id": "hotelrunner-pms",
      "title": "HotelRunner property management system",
      "url": "https://hotelrunner.com/en/products/property-management-system/",
      "publisher": "HotelRunner",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Core property-management functions; no blanket claim about autonomous product maturity."
    },
    {
      "id": "mkopa-products",
      "title": "M-KOPA: device financing and connected services",
      "url": "https://www.m-kopa.com/",
      "publisher": "M-KOPA",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Country terms and eligibility vary."
    },
    {
      "id": "mkopa-2026-milestone",
      "title": "M-KOPA reaches 10 million customers across five markets",
      "url": "https://www.m-kopa.com/newsroom/m-kopa-reaches-10-million-customers-across-5-markets",
      "publisher": "M-KOPA",
      "date": "2026-07-22",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Dated company announcement; reach and survey statements are attributed, not independent causal evidence."
    },
    {
      "id": "egov-about",
      "title": "eGov Foundation: organization and DIGIT approach",
      "url": "https://egov.org.in/about-us/who-we-are/",
      "publisher": "eGov Foundation",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Public-good ecosystem organization, not a venture-backed startup classification."
    },
    {
      "id": "egov-digit-platform",
      "title": "DIGIT open-source public-service platform",
      "url": "https://egov.org.in/digit/",
      "publisher": "eGov Foundation",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Maintainer documentation; local implementation still requires capacity and governance."
    },
    {
      "id": "egov-water-sanitation",
      "title": "DIGIT water and sanitation solutions",
      "url": "https://egov.org.in/water-sanitation/",
      "publisher": "eGov Foundation",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Service and sanitation operations software; not water-treatment hardware."
    },
    {
      "id": "mojaloop-mission",
      "title": "Mojaloop Foundation mission",
      "url": "https://mojaloop.io/foundation/mission/",
      "publisher": "Mojaloop Foundation",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Nonprofit and open-source ecosystem status."
    },
    {
      "id": "mojaloop-faq",
      "title": "Mojaloop Foundation FAQ and payment-system approach",
      "url": "https://mojaloop.io/foundation/faq/",
      "publisher": "Mojaloop Foundation",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Reference approach; not an operated retail payment service."
    },
    {
      "id": "mojaloop-merchant-2026",
      "title": "Mojaloop Merchant Payments: A Practical Overview",
      "url": "https://mojaloop.io/mojaloop-merchant-payments-overview-release/",
      "publisher": "Mojaloop Foundation",
      "date": "2026-09-16",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Formal overview of merchant functions separate from the core payment hub."
    },
    {
      "id": "unstructured-transform-2026",
      "title": "Unstructured Transform: rebuilt parsing pipelines",
      "url": "https://unstructured.io/blog/unstructured-transform-faster-more-accurate-for-your-hardest-documents",
      "publisher": "Unstructured",
      "date": "2026-10-21",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Product release; benchmark results are vendor-reported."
    },
    {
      "id": "unstructured-pricing",
      "title": "Unstructured deployment options and feature availability",
      "url": "https://unstructured.io/pricing/",
      "publisher": "Unstructured",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Plan-specific availability; some structured extraction and media features remain labelled coming soon."
    },
    {
      "id": "unstructured-location",
      "title": "Unstructured company contact details",
      "url": "https://unstructured.io/privacy-policy",
      "publisher": "Unstructured",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Used for country location only."
    },
    {
      "id": "reducto-developers",
      "title": "Reducto document APIs and deployment options",
      "url": "https://reducto.ai/developers",
      "publisher": "Reducto",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Primary source",
      "note": "Official API capability descriptions; performance claims not independently verified."
    },
    {
      "id": "reducto-pricing",
      "title": "Reducto enterprise plans and extraction capabilities",
      "url": "https://reducto.ai/pricing/",
      "publisher": "Reducto",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Enterprise deployment and retention terms require confirmation."
    },
    {
      "id": "reducto-location",
      "title": "Reducto company location",
      "url": "https://reducto.ai/office/terms",
      "publisher": "Reducto",
      "date": "2026-10-22",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Used for company location only; Reducto Office terms are distinct from enterprise processing terms."
    },
    {
      "id": "credo-agent-governance-2026",
      "title": "Credo AI: governance for agents, MCP servers and platforms",
      "url": "https://www.credo.ai/blog/agentic-ai-governance-govern-agents-mcp-servers-and-platforms",
      "publisher": "Credo AI",
      "date": "2026-11-17",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Vendor announcement; policy coverage is not an institutional compliance determination."
    },
    {
      "id": "credo-platform",
      "title": "Credo AI governance platform",
      "url": "https://www.credo.ai/",
      "publisher": "Credo AI",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Official platform description."
    },
    {
      "id": "n8n-ai-docs",
      "title": "n8n: integrate models, agents, tools and memory",
      "url": "https://docs.n8n.io/build/integrate-ai",
      "publisher": "n8n",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Current official documentation; advanced-ai redirects to this section."
    },
    {
      "id": "n8n-hosting",
      "title": "n8n: self-hosted deployment and editions",
      "url": "https://docs.n8n.io/deploy/host-n8n",
      "publisher": "n8n",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Self-hosting keeps infrastructure operation with the customer."
    },
    {
      "id": "n8n-plans",
      "title": "n8n plans and feature availability",
      "url": "https://n8n.io/pricing/",
      "publisher": "n8n",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Used for edition-specific controls, human tool approval and tracing preview status; no price comparison asserted."
    },
    {
      "id": "n8n-license",
      "title": "n8n: which license is needed for a use case",
      "url": "https://support.n8n.io/article/can-i-use-your-license-for-my-use-case",
      "publisher": "n8n",
      "date": "2026-10-06",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "The Community edition uses the Sustainable Use License; organization-specific licensing requires review."
    },
    {
      "id": "n8n-press",
      "title": "n8n company information",
      "url": "https://n8n.io/press/",
      "publisher": "n8n",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Company location and product positioning."
    },
    {
      "id": "mistral-ocr41",
      "title": "Mistral OCR 4.1 model documentation",
      "url": "https://docs.mistral.ai/models/ocr-4-1",
      "publisher": "Mistral AI",
      "date": "2026-07-16",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Documented GA service with source bounding boxes, structural labels and confidence scores."
    },
    {
      "id": "mistral-ocr4-release",
      "title": "Mistral OCR 4 and enterprise self-deployment",
      "url": "https://mistral.ai/news/ocr-4/",
      "publisher": "Mistral AI",
      "date": "2026-06-23",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Release announcement; private deployment is an enterprise arrangement, and benchmark claims require local validation."
    },
    {
      "id": "mistral-studio-deployments",
      "title": "Mistral Studio deployment modes",
      "url": "https://docs.mistral.ai/studio/deployments",
      "publisher": "Mistral AI",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Self-hosted workers are explicitly distinct from an entirely on-premises Studio platform."
    },
    {
      "id": "mistral-inference-deployment",
      "title": "Mistral model inference deployment",
      "url": "https://docs.mistral.ai/inference/deployment",
      "publisher": "Mistral AI",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Model deployment is separate from agent or workflow worker hosting."
    },
    {
      "id": "mistral-location",
      "title": "Mistral AI legal notice",
      "url": "https://mistral.ai/legal/",
      "publisher": "Mistral AI",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Used for country location only."
    },
    {
      "id": "cohere-north",
      "title": "Cohere North enterprise AI platform",
      "url": "https://cohere.com/north",
      "publisher": "Cohere",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Official platform capabilities; benefits remain vendor assertions until evaluated locally."
    },
    {
      "id": "cohere-north2",
      "title": "Cohere introduces North 2",
      "url": "https://cohere.com/blog/introducing-north-2",
      "publisher": "Cohere",
      "date": "2026-10-05",
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Dated platform announcement. Some connectors in this original announcement were planned rather than released."
    },
    {
      "id": "cohere-private",
      "title": "Cohere private deployment options",
      "url": "https://cohere.com/private-deployments",
      "publisher": "Cohere",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Distinguishes managed Model Vault, customer-managed VPC and on-premises deployments."
    },
    {
      "id": "cohere-about",
      "title": "About Cohere",
      "url": "https://cohere.com/about",
      "publisher": "Cohere",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Company origin and location context."
    },
    {
      "id": "credo-location",
      "title": "Credo AI company location",
      "url": "https://www.credo.ai/legal/privacy-policy",
      "publisher": "Credo AI",
      "date": null,
      "checked": "2026-11-23",
      "kind": "Primary source",
      "note": "Used for country headquarters only."
    },
    {
      "id": "sarvam-dictate-20261123",
      "title": "Introducing Sarvam Dictate",
      "url": "https://www.sarvam.ai/blogs/sarvam-dictate",
      "publisher": "Sarvam AI",
      "date": "2026-11-23",
      "checked": "2026-11-24",
      "kind": "Primary source",
      "note": "Vendor release; no benchmark superiority is asserted."
    },
    {
      "id": "sarvam-extract-20261124",
      "title": "Introducing Sarvam Extract",
      "url": "https://www.sarvam.ai/blogs/extract-api",
      "publisher": "Sarvam AI",
      "date": "2026-11-24",
      "checked": "2026-11-24",
      "kind": "Primary source",
      "note": "Vendor release verified on publication day; local accuracy remains to be tested."
    },
    {
      "id": "sarvam-saaras-docs",
      "title": "Saaras speech recognition documentation",
      "url": "https://docs.sarvam.ai/api/api-guides-tutorials/models/saaras",
      "publisher": "Sarvam AI",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Primary source",
      "note": "Documents 22 Indian languages plus English and multiple transcription output modes."
    },
    {
      "id": "satsure-utilities-v5",
      "title": "SatSure: Utilities and Critical Infrastructure",
      "url": "https://www.satsure.co/solutions/utilities-and-critical-infrastructure/",
      "publisher": "SatSure",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Primary source",
      "note": "Company capability descriptions; no quantitative performance claim or WBG deployment is inferred."
    },
    {
      "id": "wbg-dpi-program-2026",
      "title": "Global Digital Public Infrastructure Program: From Foundations to Scale",
      "url": "https://www.worldbank.org/en/results/2026/05/06/global-digital-public-infrastructure-program",
      "publisher": "World Bank Group",
      "date": "2026-05-06",
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Institutional context; not evidence that Sarvam is a WBG supplier or partner."
    },
    {
      "id": "wbg-gems-2026",
      "title": "GEMS: Geo-Enabling initiative for Monitoring and Supervision",
      "url": "https://www.worldbank.org/en/brief/2021/06/24/geo-enabling-initiative-for-monitoring-and-supervision-gems",
      "publisher": "World Bank Group",
      "date": "2021-06-24",
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Page carries implementation information as of October 2026. GEMS uses low-cost open-source tools and field evidence; no SatSure integration is asserted."
    },
    {
      "id": "wbg-digital-strategy-20261020",
      "title": "World Bank Group Launches First Digital Strategy to Expand Access and Create Jobs",
      "url": "https://www.worldbank.org/en/news/press-release/2026/10/20/world-bank-group-launches-first-digital-strategy-to-expand-access-and-create-jobs",
      "publisher": "World Bank Group",
      "date": "2026-10-20",
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Supports four priorities: connectivity, affordability, services and skills, and readiness for AI."
    },
    {
      "id": "wbg-agriconnect-honduras-20261119",
      "title": "Honduras, the World Bank Group, and CABEI Launch Plan to Give 400,000 Farmers Access to Financing and Data",
      "url": "https://www.worldbank.org/en/news/press-release/2026/11/19/gobierno-de-honduras-grupo-banco-mundial-bcie-lanzan-plan-agriconnect",
      "publisher": "World Bank Group",
      "date": "2026-11-19",
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "A current country example connecting agricultural finance, market access and digital tools."
    },
    {
      "id": "wbg-govtech-country-work",
      "title": "GovTech country work and innovation challenges",
      "url": "https://www.worldbank.org/en/programs/govtech/projects",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Includes core-system modernization and the 2026 Morocco public audit / procurement controls challenges; not a partnership claim for any radar company."
    },
    {
      "id": "wbg-govtech-ai-bootcamp-2026",
      "title": "GovTech AI Bootcamp for Governance and Public Administration",
      "url": "https://www.worldbank.org/en/programs/govtech/govtech-bootcamp-for-ai-in-governance-and-public-administration",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Ten teams selected for the forthcoming 7–11 December 2026 bootcamp; not reported as a completed event."
    },
    {
      "id": "wbg-documents-reports",
      "title": "Documents & Reports: official disclosure collection",
      "url": "https://www.worldbank.org/en/publication/documents-reports",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Provides the public project-document context for a proposed extraction experiment."
    },
    {
      "id": "wbg-public-institutions-ai-2026",
      "title": "Public Institutions in the Age of AI: Emerging Practices",
      "url": "https://www.worldbank.org/en/programs/govtech/ai-in-governance",
      "publisher": "World Bank Group",
      "date": null,
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Institutional guidance on putting responsible AI into practice, with country examples."
    },
    {
      "id": "wbg-esmap-electrolyzers-2026",
      "title": "Electrolyzers for Hydrogen Production: Technical and Economic Characteristics — Executive Summary",
      "url": "https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099022426180019815",
      "publisher": "World Bank / ESMAP",
      "date": "2026-02-24",
      "checked": "2026-11-24",
      "kind": "Institutional source",
      "note": "Official metadata describes technology selection for developers, investors and policymakers. This is an analytical connection to LILA, not a WBG use or partnership claim."
    },
    {
      "id": "lila-catalyst-preprint-20260925",
      "title": "AI-guided high-throughput discovery of iridium- and ruthenium-free palladium-oxide catalysts for durable acidic oxygen evolution",
      "url": "https://arxiv.org/abs/2609.30133",
      "publisher": "LILA Sciences research team / arXiv",
      "date": "2026-09-25",
      "checked": "2026-11-24",
      "kind": "Primary source",
      "note": "Author preprint; human-supervised laboratory research, not a certified or scaled electrolyzer product."
    }
  ],
  "highlights": [
    {
      "title": "Software agents move into Azure workflows",
      "date": "2026-11-18",
      "text": "Factory announced Azure deployment and Azure DevOps integration. A concrete option for testing governed software delivery.",
      "sourceIds": [
        "factory-azure"
      ],
      "trendId": "software-agents"
    },
    {
      "title": "Compact models broaden local AI options",
      "date": "2026-10-27",
      "text": "Liquid AI introduced LFM3. Test the quality and hardware requirements on the devices people actually use.",
      "sourceIds": [
        "liquid-lfm3"
      ],
      "trendId": "on-device-ai"
    },
    {
      "title": "A new WBG digital strategy",
      "date": "2026-10-20",
      "text": "Connectivity, affordable access, useful services and practical small AI provide the development lens for this edition.",
      "sourceIds": [
        "wbg-digital"
      ],
      "trendId": "local-language-ai"
    }
  ],
  "signals": [
    {
      "title": "Speech and documents become structured workflow inputs",
      "date": "2026-11-24",
      "text": "Sarvam released Extract on 24 November after Dictate on 23 November. Explore service access and document workflows with field-level evidence and human review.",
      "sourceIds": [
        "sarvam-extract-20261124",
        "sarvam-dictate-20261123"
      ],
      "trendId": "local-language-ai"
    },
    {
      "title": "Factory expands Azure and Microsoft workflow integration",
      "date": "2026-11-18",
      "text": "A concrete path to assess coding agents inside existing Azure, identity and review workflows; institutional approval and local validation are still required.",
      "sourceIds": [
        "factory-azure"
      ],
      "trendId": "software-agents"
    },
    {
      "title": "Alice & Bob updates its quantum roadmap",
      "date": "2026-11-18",
      "text": "A new future target, not an achieved utility-scale machine.",
      "sourceIds": [
        "alicebob-roadmap"
      ],
      "trendId": "fault-tolerant-quantum"
    },
    {
      "date": "2026-11-18",
      "title": "ResolveAI introduces SRE-1 and primary on-call",
      "summary": "A recent domain-specific operational model release makes incident replay a timely evaluation; vendor claims still need local testing.",
      "trendIds": [
        "resilient-digital-operations"
      ],
      "companyIds": [
        "resolve-ai"
      ],
      "sourceIds": [
        "resolve-sre1"
      ],
      "trendId": "resilient-digital-operations",
      "text": "A recent domain-specific operational model release makes incident replay a timely evaluation; vendor claims still need local testing."
    },
    {
      "title": "Replit introduces Missions",
      "date": "2026-11-17",
      "text": "A concrete example of coding platforms expanding into coordinated, outcome-directed agent work.",
      "sourceIds": [
        "replit-missions"
      ],
      "trendId": "software-agents"
    },
    {
      "date": "2026-11-17",
      "title": "Agent security moves to runtime action checks",
      "text": "AWS and Noma published a concrete gateway integration for evaluating actions against task context. Coverage of actual tool paths is a key trial question.",
      "sourceIds": [
        "noma-aws-20261117"
      ],
      "trendId": "agent-interoperability"
    },
    {
      "date": "2026-11-17",
      "title": "AI governance expands to agent and tool dependencies",
      "summary": "Credo AI announced connected records for agents, MCP servers and deployment platforms. A useful test is whether a component change identifies the right affected applications and review evidence.",
      "trendIds": [
        "ai-portfolio-governance"
      ],
      "companyIds": [
        "credo-ai"
      ],
      "sourceIds": [
        "credo-agent-governance-2026"
      ],
      "trendId": "ai-portfolio-governance",
      "text": "Credo AI announced connected records for agents, MCP servers and deployment platforms. A useful test is whether a component change identifies the right affected applications and review evidence."
    },
    {
      "date": "2026-11-11",
      "title": "Voice agents expand enterprise deployment choices",
      "text": "ElevenLabs and NVIDIA announced expanded deployment work. Language performance and architecture still require case-specific checks.",
      "sourceIds": [
        "elevenlabs-nvidia-20261111"
      ],
      "trendId": "conversational-voice-agents"
    },
    {
      "date": "2026-10-29",
      "title": "Cartesia launches Managed Agents",
      "text": "The platform combines speech and workflow execution. A complete-task evaluation should follow a compelling voice demonstration.",
      "sourceIds": [
        "cartesia-managed-20261029"
      ],
      "trendId": "conversational-voice-agents"
    },
    {
      "title": "Compact models broaden local AI options",
      "date": "2026-10-27",
      "text": "Liquid AI introduced LFM3. Test the quality and hardware requirements on the devices people actually use.",
      "sourceIds": [
        "liquid-lfm3"
      ],
      "trendId": "on-device-ai"
    },
    {
      "date": "2026-10-27",
      "title": "Physics AI moves deeper into industry",
      "text": "PhysicsX expanded its Fortescue collaboration. Seek validated benefit in a particular engineering or operations workflow.",
      "sourceIds": [
        "physicsx-fortescue-20261027"
      ],
      "trendId": "ai-engineering-simulation"
    },
    {
      "title": "Thermal satellite data becomes easier to access",
      "date": "2026-10-22",
      "text": "SatVu and SkyFi announced archive access and HotSat-2 tasking. HotSat-3 tasking remained expected in early 2027.",
      "sourceIds": [
        "satvu"
      ],
      "trendId": "geospatial-intelligence"
    },
    {
      "date": "2026-10-21",
      "title": "Buildots expands its Dot construction assistant",
      "summary": "Announced investigation and reporting capabilities connect conversational analysis with captured construction progress.",
      "trendIds": [
        "project-supervision"
      ],
      "companyIds": [
        "buildots"
      ],
      "sourceIds": [
        "buildots-dot"
      ],
      "trendId": "project-supervision",
      "text": "Announced investigation and reporting capabilities connect conversational analysis with captured construction progress."
    },
    {
      "date": "2026-10-21",
      "title": "Dedicated document parsing gets a new comparison point",
      "summary": "Unstructured introduced rebuilt Transform pipelines focused on difficult layouts and tables. Compare accepted fields and source evidence on local documents; vendor benchmark results do not establish institutional accuracy.",
      "trendIds": [
        "document-intelligence"
      ],
      "companyIds": [
        "unstructured"
      ],
      "sourceIds": [
        "unstructured-transform-2026"
      ],
      "trendId": "document-intelligence",
      "text": "Unstructured introduced rebuilt Transform pipelines focused on difficult layouts and tables. Compare accepted fields and source evidence on local documents; vendor benchmark results do not establish institutional accuracy."
    },
    {
      "title": "WBG launches its first Digital Strategy",
      "date": "2026-10-20",
      "text": "The strategy links connectivity, affordability, digital services and AI foundations to access and jobs; a new initiative also targets shared affordable compute.",
      "sourceIds": [
        "wbg-digital"
      ],
      "trendId": "sovereign-data-ai"
    },
    {
      "title": "Physical Intelligence announces Pi API beta",
      "date": "2026-10-13",
      "text": "Robot models are being offered as a reusable developer layer; beta access is not general field readiness.",
      "sourceIds": [
        "pi-api"
      ],
      "trendId": "physical-ai"
    },
    {
      "title": "Leak-location fieldwork gains offline capability",
      "date": "2026-10-12",
      "text": "FIDO app 3.5.0 added offline acoustic correlation, confidence indicators and an updated leak-sizing model.",
      "sourceIds": [
        "fido-oct"
      ],
      "trendId": "intelligent-water"
    },
    {
      "title": "Odyssey introduces Odyssey-3",
      "date": "2026-10-08",
      "text": "Interactive world simulation remains a frontier to assess for fidelity, consistency and practical use.",
      "sourceIds": [
        "odyssey3"
      ],
      "trendId": "world-models"
    },
    {
      "date": "2026-10-05",
      "title": "Private enterprise AI combines knowledge and reusable agents",
      "summary": "Cohere announced North 2 with reusable agent capabilities and multiple deployment arrangements. Evaluate permissions, quality and total operating cost on a defined institutional task.",
      "trendIds": [
        "enterprise-agents",
        "sovereign-data-ai"
      ],
      "companyIds": [
        "cohere"
      ],
      "sourceIds": [
        "cohere-north2"
      ],
      "trendId": "enterprise-agents",
      "text": "Cohere announced North 2 with reusable agent capabilities and multiple deployment arrangements. Evaluate permissions, quality and total operating cost on a defined institutional task."
    },
    {
      "title": "Multilingual speech models improve their interfaces",
      "date": "2026-09-25",
      "text": "Sarvam introduced Saaras V4 with multiple transcription modes and support for Indian-language and English speech. Quality claims remain vendor benchmarks.",
      "sourceIds": [
        "sarvam-v4"
      ],
      "trendId": "local-language-ai"
    },
    {
      "title": "AI access through a basic phone call",
      "date": "2026-09-23",
      "text": "Viamo and Google announced work to bring voice AI through existing phones and mobile networks.",
      "sourceIds": [
        "viamo"
      ],
      "trendId": "local-language-ai"
    },
    {
      "title": "Digital MRV gets an integrity framework",
      "date": "2026-09-22",
      "text": "ICVCM and the World Bank published findings on applying carbon-market integrity principles to digital measurement and verification.",
      "sourceIds": [
        "wbg-mrv"
      ],
      "trendId": "nature-mrv"
    },
    {
      "date": "2026-09-16",
      "title": "Mojaloop documents a merchant-payment layer",
      "summary": "A formal merchant-payments overview separates merchant-specific functions from the core payment hub, giving teams a more concrete architecture to examine.",
      "trendIds": [
        "interoperable-public-infrastructure",
        "productive-small-firms"
      ],
      "companyIds": [
        "mojaloop"
      ],
      "sourceIds": [
        "mojaloop-merchant-2026"
      ],
      "trendId": "interoperable-public-infrastructure",
      "text": "A formal merchant-payments overview separates merchant-specific functions from the core payment hub, giving teams a more concrete architecture to examine."
    },
    {
      "date": "2026-09-15",
      "title": "Laboratory data trains a scientific specialist",
      "text": "Periodic introduced Neon for diffraction analysis. Watch whether specialized analysis produces more reproducible discoveries.",
      "sourceIds": [
        "periodic-neon-20260915"
      ],
      "trendId": "experimental-scientific-ai"
    },
    {
      "title": "AgriConnect sets a digital implementation direction",
      "date": "2026-09-01",
      "text": "The 2026 implementation plan includes AgTech and interoperable digital public infrastructure among its delivery pillars.",
      "sourceIds": [
        "wbg-agriconnect"
      ],
      "trendId": "agriculture-intelligence"
    },
    {
      "title": "MCP publishes a revised specification",
      "date": "2026-07-28",
      "text": "Agent connectivity is standardizing, while authorization and interoperability still require implementation checks.",
      "sourceIds": [
        "mcp-spec"
      ],
      "trendId": "agent-interoperability"
    },
    {
      "date": "2026-07-22",
      "title": "M-KOPA reports broader device-financing reach",
      "summary": "The company announced 10 million customers across five African markets. The relevant question is sustained, affordable access and productive use, not reach alone.",
      "trendIds": [
        "productive-small-firms",
        "inclusive-digital-services"
      ],
      "companyIds": [
        "m-kopa"
      ],
      "sourceIds": [
        "mkopa-2026-milestone"
      ],
      "trendId": "productive-small-firms",
      "text": "The company announced 10 million customers across five African markets. The relevant question is sustained, affordable access and productive use, not reach alone."
    },
    {
      "date": "2026-07-15",
      "title": "TimeGPT becomes available through Microsoft Foundry",
      "summary": "A new procurement and deployment route broadens evaluation options; model hosting, data flows and organizational approval remain separate questions.",
      "trendIds": [
        "foundation-forecasting"
      ],
      "companyIds": [
        "nixtla"
      ],
      "sourceIds": [
        "nixtla-foundry",
        "nixtla-microsoft-catalog"
      ],
      "trendId": "foundation-forecasting",
      "text": "A new procurement and deployment route broadens evaluation options; model hosting, data flows and organizational approval remain separate questions."
    },
    {
      "title": "Agricultural intelligence moves into agent workflows",
      "date": "2026-07-14",
      "text": "Cropin and Google Cloud announced OrbitAI; the company page was updated on November 11, 2026.",
      "sourceIds": [
        "cropin"
      ],
      "trendId": "agriculture-intelligence"
    },
    {
      "title": "Complaint data becomes supervisory intelligence",
      "date": "2026-07-14",
      "text": "The WBG described work with Egypt, Ecuador and Peru on granular complaint data and AI-assisted analytical workflows with human decision points.",
      "sourceIds": [
        "wbg-suptech"
      ],
      "trendId": "supervisory-casework"
    },
    {
      "date": "2026-07-09",
      "title": "Mechanical Orchard releases Imogen improvements",
      "summary": "Its release emphasizes behavior-based modernization and integration with modernization workflows.",
      "trendIds": [
        "legacy-modernization"
      ],
      "companyIds": [
        "mechanical-orchard"
      ],
      "sourceIds": [
        "mechanical-july-release"
      ],
      "trendId": "legacy-modernization",
      "text": "Its release emphasizes behavior-based modernization and integration with modernization workflows."
    },
    {
      "date": "2026-04-02",
      "title": "Anomalo announces its agentic data platform",
      "summary": "Data observability and quality are available capabilities; several additional homepage agents remain marked coming soon.",
      "trendIds": [
        "foundation-forecasting",
        "resilient-digital-operations"
      ],
      "companyIds": [
        "anomalo"
      ],
      "sourceIds": [
        "anomalo-platform-launch",
        "anomalo-home"
      ],
      "trendId": "foundation-forecasting",
      "text": "Data observability and quality are available capabilities; several additional homepage agents remain marked coming soon."
    }
  ],
  "opportunities": [
    {
      "id": "accessible-services-by-voice",
      "title": "Reach people through local-language voice services",
      "lenses": [
        "wbg"
      ],
      "problem": "Useful public information can remain inaccessible when people cannot read it easily, do not use the dominant language or have only basic phones.",
      "users": "Public-service teams, agricultural extension workers and local language specialists.",
      "outcome": "More people understand and complete a specific service-information task in the language and channel they already use.",
      "approach": "Combine a reachable phone channel, local-language speech technology and a small approved knowledge base. Test dialect and terminology coverage with local experts before expanding scope.",
      "experiment": "Choose one non-sensitive information service. Have representative speakers ask realistic questions, including unclear and unanswerable ones, over ordinary phones.",
      "measure": "Correct information, user comprehension, successful task completion, failure to answer safely, call cost and performance by language and device.",
      "companyIds": [
        "viamo",
        "lelapa",
        "sarvam"
      ],
      "trendIds": [
        "local-language-ai"
      ],
      "sourceIds": [
        "wbg-wdr",
        "sarvam-v4",
        "viamo",
        "viamo-ava",
        "lelapa",
        "lelapa-location",
        "sarvam",
        "sarvam-location"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "climate-exposure-evidence",
      "title": "Combine climate-risk screening with observable local evidence",
      "lenses": [
        "wbg"
      ],
      "problem": "A project-level risk score can hide uncertainty about local exposure, changing conditions and who is affected.",
      "users": "Climate specialists, infrastructure teams, risk-finance teams and country counterparts.",
      "outcome": "A more defensible explanation of which assets or communities warrant closer assessment and what evidence is missing.",
      "approach": "Compare modeled physical risk with observed flood or weather data. Use imagery and local records to investigate discrepancies rather than treating one score as the answer.",
      "experiment": "Review a small known asset set across observed historical events. Ask a specialist to adjudicate the cases where model outputs and local experience disagree.",
      "measure": "Missed high-risk assets, false alarms, spatial coverage, uncertainty, analyst effort and consistency with observed events.",
      "companyIds": [
        "climate-x",
        "floodbase",
        "tomorrow",
        "pixxel"
      ],
      "trendIds": [
        "climate-adaptation",
        "geospatial-intelligence"
      ],
      "sourceIds": [
        "wbg-climate",
        "tomorrow-noaa",
        "floodbase",
        "climatex-sep",
        "wbg-geo",
        "pixxel-nasa",
        "satvu",
        "climatex",
        "tomorrow",
        "pixxel",
        "pixxel-contact"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "software-maintenance-evidence",
      "title": "Find where software agents save engineering time",
      "lenses": [
        "its"
      ],
      "problem": "A fast coding demonstration does not show whether an agent can produce maintainable changes under an institution's actual test, review and release controls.",
      "users": "Engineering teams, platform engineers, security reviewers and application owners.",
      "outcome": "A clear view of which maintenance tasks benefit from an agent and where supervision or rework erodes the benefit.",
      "approach": "Give different software-agent products the same bounded backlog in isolated copies of a representative repository. Include tests, change explanations and code review in the comparison.",
      "experiment": "Compare ten maintenance issues of different types, including documentation, tests, dependency updates and a small bug fix. Require normal human review before any merge.",
      "measure": "Accepted changes, introduced defects, test coverage, reviewer minutes, elapsed time and total cost per accepted issue.",
      "companyIds": [
        "factory",
        "cognition",
        "replit"
      ],
      "trendIds": [
        "software-agents",
        "agent-evaluation"
      ],
      "sourceIds": [
        "cognition-about",
        "factory-home",
        "replit-missions",
        "factory-azure",
        "arize-home",
        "braintrust-home",
        "galileo-product",
        "factory-company-news",
        "cognition-series-e"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "portfolio-brief-with-evidence",
      "title": "Turn project documents into a traceable portfolio briefing",
      "lenses": [
        "wbg",
        "its"
      ],
      "problem": "Analysts spend time finding and reconciling project evidence, while fluent summaries can conceal missing, outdated or conflicting information.",
      "users": "Sector teams, knowledge specialists, technical researchers and portfolio analysts.",
      "outcome": "A useful briefing whose substantive claims can be checked quickly against the underlying evidence.",
      "approach": "Compare permission-aware knowledge platforms on the same approved corpus and questions. Require page-level references, explicit uncertainty and visibility into conflicting documents.",
      "experiment": "Use 20 questions with expert-authored reference answers, including questions the corpus cannot answer. Review completeness and citations independently of writing style.",
      "measure": "Supported claims, missing evidence, permission violations, correction time and time to an accepted briefing.",
      "companyIds": [
        "glean",
        "dust",
        "seekr"
      ],
      "trendIds": [
        "enterprise-agents",
        "context-memory",
        "agent-evaluation"
      ],
      "sourceIds": [
        "seekr-agents",
        "dust-enterprise",
        "glean-agents",
        "syntes-home",
        "zep-memory",
        "letta-state",
        "arize-home",
        "braintrust-home",
        "galileo-product"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "supervisory-patterns",
      "title": "Find emerging conduct risks in complaint evidence",
      "lenses": [
        "wbg"
      ],
      "problem": "Complaints arrive in different formats and languages, making recurring patterns hard to see without losing the details of individual cases.",
      "users": "Consumer-protection supervisors, analysts and public-sector investigators.",
      "outcome": "Earlier identification of patterns worth a supervisor's attention, backed by retrievable evidence and an explanation of uncertainty.",
      "approach": "Evaluate document classification and evidence linking as separate tasks. Quantexa is an adjacent candidate for record linking and investigations; do not assume it supplies a complete complaint-classification system.",
      "experiment": "Replay expert-labelled historical cases, including ambiguous entities and low-frequency complaint types. Keep consequential judgments with a supervisor.",
      "measure": "Classification quality by language, false entity links, evidence accuracy, emerging-pattern usefulness and analyst correction time.",
      "companyIds": [
        "quantexa"
      ],
      "trendIds": [
        "supervisory-casework",
        "local-language-ai"
      ],
      "sourceIds": [
        "wbg-suptech",
        "quantexa-gov"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "engineering-simulation",
      "title": "Explore faster design comparisons with physics-informed AI",
      "lenses": [
        "frontier",
        "wbg"
      ],
      "problem": "Detailed engineering simulations can constrain how many design alternatives a team can examine, especially when compute or specialist capacity is limited.",
      "users": "Engineering specialists, infrastructure researchers and technical partners.",
      "outcome": "Understand whether an AI surrogate can screen design alternatives reliably before conventional simulation and engineering approval.",
      "approach": "Compare learned simulation models against a trusted physical simulator and held-out conditions. Keep numerical error, boundary conditions and out-of-distribution cases visible.",
      "experiment": "Use one non-critical component or flow problem with established reference simulations; test held-out geometries rather than repeating training examples.",
      "measure": "Error on important physical quantities, robustness outside training conditions, setup effort and compute cost per acceptable comparison.",
      "companyIds": [
        "physicsx",
        "beyondmath"
      ],
      "trendIds": [
        "ai-engineering-simulation"
      ],
      "sourceIds": [
        "physicsx-platform",
        "physicsx-fortescue-20261027",
        "beyondmath-platform",
        "beyondmath-company"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "compute-economics",
      "title": "Understand what could change the cost of AI inference",
      "lenses": [
        "frontier",
        "its"
      ],
      "problem": "Model prices alone do not explain the cost of an AI service; memory movement, utilization, power and deployment support also matter.",
      "users": "AI platform architects, infrastructure teams and technology strategy specialists.",
      "outcome": "A grounded view of which hardware or interconnect innovations deserve further attention for a specified workload.",
      "approach": "Compare published availability and architecture claims, then request repeatable workload measurements when hardware is actually accessible. Separate shipping products from early-access systems and future roadmaps.",
      "experiment": "Define a representative workload and the required quality, latency and throughput. Use that same specification to assess supplier evidence; do not treat vendor peak numbers as an operational benchmark.",
      "measure": "Quality-constrained throughput, latency, energy per completed task, utilization, total system cost and integration effort.",
      "companyIds": [
        "lightmatter",
        "d-matrix",
        "extropic"
      ],
      "trendIds": [
        "efficient-compute-hardware"
      ],
      "sourceIds": [
        "lightmatter-passage",
        "lightmatter-ocp-20261012",
        "dmatrix-production-20260609",
        "extropic-hardware",
        "extropic-software",
        "extropic-research-20261001"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "verify-project-progress",
      "title": "Verify project progress with traceable evidence",
      "lenses": [
        "wbg"
      ],
      "problem": "A project team may receive consistent narrative reports while lacking timely, comparable evidence of physical progress or service availability.",
      "users": "Task teams, implementing agencies, engineers and monitoring specialists.",
      "outcome": "A concise, source-linked briefing that separates verified progress, conflicting observations and questions requiring a site visit.",
      "approach": "Combine the right evidence for the asset: Buildots for a building site, SatSure for parcels or corridors, and Premise for limited local ground checks. These are complementary candidates, not a required bundled purchase.",
      "experiment": "Select one project and three reporting dates. Ask an independent reviewer to establish reference findings for a defined set of milestones. Produce the same briefing with and without the additional tools, recording disputed claims and collection effort.",
      "measure": "Material discrepancies correctly detected; false alarms; time to flag slippage; review and field-collection effort; proportion of claims linked to usable evidence. Keep certification and disbursement decisions with authorized reviewers.",
      "companyIds": [
        "buildots",
        "satsure",
        "premise"
      ],
      "trendIds": [
        "project-supervision",
        "geospatial-intelligence"
      ],
      "sourceIds": [
        "buildots-product",
        "buildots-dot",
        "satsure-home",
        "premise-how",
        "wbg-geo"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "reliable-cost-aware-services",
      "title": "Make digital services more reliable and cost-aware",
      "lenses": [
        "its"
      ],
      "problem": "Service teams must investigate failures quickly while managing cloud costs, but a plausible diagnosis or a lower bill alone does not establish a better service.",
      "users": "Site-reliability engineers, platform teams, service owners and cloud-finance specialists.",
      "outcome": "An evidence-based decision on which incident-assistance and optimization capabilities improve operational outcomes.",
      "approach": "Evaluate ResolveAI on historical investigations, Cast AI on cloud-resource alternatives, and Aembit where an operational agent needs scoped access. Keep reliability, economics and access-control results visible separately.",
      "experiment": "Replay ten de-identified resolved incidents with diagnoses withheld. In parallel, run an agentless cost assessment and a controlled rightsizing test on one noncritical AKS workload. For any agent tool connection, test allowed, forbidden and revoked access in a sandbox.",
      "measure": "Supported root-cause accuracy, investigator minutes and fabricated evidence; actual cost per successful request, p95 latency and errors; audit completeness and access-policy failures. Compare with current tools and native-cloud options.",
      "companyIds": [
        "resolve-ai",
        "cast-ai",
        "aembit"
      ],
      "trendIds": [
        "resilient-digital-operations",
        "agent-interoperability"
      ],
      "sourceIds": [
        "resolve-incidents",
        "resolve-sre1",
        "cast-cloud-connect",
        "cast-getting-started",
        "aembit-ai-agents"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "prove-modernization-before-cutover",
      "title": "Prove a modernization before committing to a cutover",
      "lenses": [
        "its"
      ],
      "problem": "Legacy replacement can lose undocumented business behavior, while code-generation demos provide little evidence about real integration and exception handling.",
      "users": "Application owners, enterprise architects, software engineers and business process specialists.",
      "outcome": "A bounded replacement with an explicit record of behavior preserved, differences explained and remaining uncertainty.",
      "approach": "Assess Mechanical Orchard's behavior-capture and replay approach for a suitable legacy component. Use Anomalo where output tables need independent data-quality checks.",
      "experiment": "If an appropriate legacy workload exists, choose one batch calculation or interface. Replay sanitized historical transactions, deliberately add critical edge cases and compare every material output. Estimate the work needed to cover missing cases before any production decision.",
      "measure": "Critical behavior coverage, unexplained output differences, rounding and boundary-case correctness, integration failures, engineering effort and operating-cost assumptions. Count accepted behavior, not lines of generated code.",
      "companyIds": [
        "mechanical-orchard",
        "anomalo"
      ],
      "trendIds": [
        "legacy-modernization",
        "software-agents"
      ],
      "sourceIds": [
        "mechanical-platform",
        "mechanical-july-release",
        "anomalo-home"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "forecast-for-a-real-decision",
      "title": "Test better forecasts against a real planning decision",
      "lenses": [
        "wbg",
        "its"
      ],
      "problem": "A forecast can look accurate on average yet fail at the horizon, disruption or asymmetric planning cost that matters to its user.",
      "users": "Economists, public-finance and utility teams, operational analysts, and ITS capacity planners.",
      "outcome": "A reproducible choice of forecasting approach, including evidence that a foundation model is or is not worth its cost for the selected decision.",
      "approach": "Use Nixtla as one candidate against seasonal-naive and established statistical or machine-learning baselines. Use Anomalo only if data defects are a material source of error.",
      "experiment": "Choose a series family and the actual planning horizon. Run rolling-origin backtests with no future information, preserve a final untouched period, and separately inspect disruption periods and poorly observed series.",
      "measure": "Horizon-specific error, forecast-interval coverage, cost of over- and under-planning, preparation and maintenance effort, compute and license cost. Document when the simpler baseline wins.",
      "companyIds": [
        "nixtla",
        "anomalo"
      ],
      "trendIds": [
        "foundation-forecasting"
      ],
      "sourceIds": [
        "nixtla-foundry",
        "nixtla-microsoft-catalog",
        "nixtla-sdk",
        "anomalo-home"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "foundational-learning-in-real-schools",
      "title": "Evaluate foundational learning in real school conditions",
      "lenses": [
        "wbg"
      ],
      "problem": "Low foundational learning and constrained teacher time require evidence about what works under actual curriculum, device and connectivity conditions.",
      "users": "Education task teams, ministries, school leaders, teachers and independent evaluators.",
      "outcome": "A locally relevant assessment of learning benefit, implementation requirements, equity and recurring cost.",
      "approach": "Consider Eduten for curriculum-aligned mathematics and EIDU for foundational learning with offline-capable delivery. Select candidates according to the curriculum and school environment rather than treating their offers as interchangeable.",
      "experiment": "Pilot one clearly defined learning unit with comparable instructional time and a credible comparison group. Record teacher preparation, shared-device use, connectivity failures and independent baseline and endline assessments.",
      "measure": "Learning change on independent assessments, sustained participation, teacher workload, gaps between relevant learner groups and full recurring cost per learner. Confirm child-data handling and accessibility before enrollment.",
      "companyIds": [
        "eduten",
        "eidu"
      ],
      "trendIds": [
        "adaptive-learning"
      ],
      "sourceIds": [
        "eduten-about",
        "eduten-unicef",
        "eidu-platform",
        "eidu-developer",
        "eidu-legal"
      ],
      "evidenceNote": "Proposed application. Linked sources describe capabilities and context; this is not evidence of a WBG implementation."
    },
    {
      "id": "connect-skills-to-opportunities",
      "title": "Connect skills programs to useful work opportunities",
      "lenses": [
        "wbg",
        "its"
      ],
      "problem": "Training can be disconnected from the skills that employers or internal teams need, leaving participants without a clear next step.",
      "users": "Workforce program teams, learning specialists, employers and participating staff or jobseekers.",
      "outcome": "A clearer pathway from an identified skills gap to relevant learning and a practical opportunity, with evidence about where the pathway fails.",
      "approach": "Use Fuzu as an external labour-market example and Gloat as an internal workforce-development example. They address different settings and are not interchangeable procurement options.",
      "experiment": "Start with one occupation or institutional capability. Use opt-in profiles and expert-reviewed requirements, compare suggested pathways with the current approach, and follow outcomes beyond initial matching.",
      "measure": "Recommendation usefulness, pathway completion, participant access and sustained outcomes. Keep employment and personnel decisions with accountable people.",
      "companyIds": [
        "fuzu",
        "gloat"
      ],
      "trendIds": [
        "skills-to-work"
      ],
      "sourceIds": [
        "wbg-jobs-strategy",
        "fuzu-employers",
        "fuzu-learn",
        "gloat-talent"
      ],
      "evidenceNote": "Proposed application; no deployment or employment impact is asserted."
    },
    {
      "id": "small-firm-digital-productivity",
      "title": "Make digital tools useful to small firms",
      "lenses": [
        "wbg"
      ],
      "problem": "A small firm may have a payment account or a smartphone yet still lose time and income through fragmented records, inaccessible sales channels or high operating costs.",
      "users": "MSME development teams, business associations and participating merchants or hospitality operators.",
      "outcome": "Evidence of which specific digital capability improves the firm's daily work after the cost of adoption is included.",
      "approach": "Compare distinct bottlenecks: Moniepoint for merchant operations, HotelRunner for hospitality sales and reservations, or M-KOPA for device access. Select the relevant model for the country and firm type.",
      "experiment": "Observe a small cohort before and after one defined change over a full operating cycle. Record staff effort, failed transactions, fees and support needs alongside business outcomes.",
      "measure": "Sustained use, time saved, reconciliation errors and net earnings or sales after fees. Test whether the effect persists and whether participants can switch providers.",
      "companyIds": [
        "moniepoint",
        "hotelrunner",
        "m-kopa"
      ],
      "trendIds": [
        "productive-small-firms"
      ],
      "sourceIds": [
        "wbg-jobs-faq",
        "moniepoint-business",
        "hotelrunner-pms",
        "mkopa-products"
      ],
      "evidenceNote": "Proposed comparison of operating models; commercial and development outcomes require local evaluation."
    },
    {
      "id": "public-service-shared-foundations",
      "title": "Connect a public service to shared digital foundations",
      "lenses": [
        "wbg"
      ],
      "problem": "Separate service portals can reproduce records and payment logic, making a simple citizen journey hard to complete and reconcile across institutions.",
      "users": "Digital government teams, service owners, payment specialists and implementation partners.",
      "outcome": "An understandable service journey showing which components can be reused, where integration is needed and who resolves exceptions.",
      "approach": "Review DIGIT for service components and Mojaloop for interoperable payment architecture. These illustrate different layers; a direct prebuilt integration is not assumed.",
      "experiment": "Use synthetic records to demonstrate a water-connection fee or another bounded service. Test verification, simulated payment, reconciliation, missing records and interrupted transactions.",
      "measure": "Integration effort, reconciliation accuracy, exception recovery, reusable components and accessible alternatives for people without complete digital records.",
      "companyIds": [
        "egov-digit",
        "mojaloop"
      ],
      "trendIds": [
        "interoperable-public-infrastructure"
      ],
      "sourceIds": [
        "wbg-dpi",
        "egov-digit-platform",
        "egov-water-sanitation",
        "mojaloop-merchant-2026"
      ],
      "evidenceNote": "An illustrative architecture exercise, not a claim of an existing integration or endorsed national stack."
    },
    {
      "id": "trace-project-report-data",
      "title": "Build a project evidence table that reviewers can verify",
      "lenses": [
        "wbg",
        "its"
      ],
      "problem": "Indicators spread across scanned reports and annexes are difficult to compare, and a copied figure can silently lose its unit, reporting period or qualifying footnote.",
      "users": "Project analysts, monitoring specialists and institutional knowledge teams.",
      "outcome": "A comparison table with every accepted value linked to its page and source region, plus unresolved discrepancies for a reviewer.",
      "approach": "Compare Unstructured's preparation pipeline, Reducto's schema extraction and Mistral's document model on the same public files. They represent alternative or complementary layers; this is not a required bundled purchase.",
      "experiment": "Select 50 public reports and 10 fields with a manually checked reference. Include changed definitions, merged table cells, missing pages and more than one language. Require reviewers to accept or correct each extracted record.",
      "measure": "Accepted values with correct units and periods; source-location accuracy; unsupported fields; review time; processing cost; errors that remain after review.",
      "companyIds": [
        "unstructured",
        "reducto",
        "mistral-ai"
      ],
      "trendIds": [
        "document-intelligence"
      ],
      "sourceIds": [
        "unstructured-transform-2026",
        "reducto-developers",
        "mistral-ocr41"
      ],
      "evidenceNote": "Proposed experiment based on public product capabilities; no WBG deployment or measured benefit is asserted."
    },
    {
      "id": "map-ai-service-dependencies",
      "title": "See which AI services a component change could affect",
      "lenses": [
        "its"
      ],
      "problem": "An agent can depend on several models, tools and data sources; changing one component may affect services whose reviewers do not know they share it.",
      "users": "AI platform teams, application owners, architecture, security and responsible-AI reviewers.",
      "outcome": "An evidence-backed dependency map showing affected services, current evaluations and the decisions that require review.",
      "approach": "Use Credo AI as a candidate governance layer for a small actual application portfolio. Link it to existing evaluation evidence rather than duplicating every test or treating registry completion as approval.",
      "experiment": "Map five sandbox services. Replay a model-version change, a revoked tool and an expired evaluation against an independently prepared dependency list; compare which reviews are triggered.",
      "measure": "Missed dependencies; unnecessary reviews; time to retrieve valid evidence; time to identify affected services; completeness of the decision record.",
      "companyIds": [
        "credo-ai"
      ],
      "trendIds": [
        "ai-portfolio-governance",
        "agent-evaluation"
      ],
      "sourceIds": [
        "credo-agent-governance-2026",
        "credo-platform"
      ],
      "evidenceNote": "Proposed governance test, not a claim that a vendor policy library establishes WBG compliance."
    }
  ],
  "benchmarks": [
    {
      "name": "Thoughtworks Technology Radar",
      "url": "https://www.thoughtworks.com/radar",
      "lesson": "Explain the significance of each signal, synthesize edition themes and distinguish new evidence from a change in recommendation."
    },
    {
      "name": "Zalando Tech Radar",
      "url": "https://opensource.zalando.com/tech-radar/",
      "lesson": "Make the basis for each assessment explicit. Organizational adoption labels require actual organizational experience."
    },
    {
      "name": "DHL Logistics Trend Radar",
      "url": "https://www.dhl.com/us-en/home/innovation-in-logistics/logistics-trend-radar.html",
      "lesson": "Connect technology shifts with sector outcomes, human implications and horizons for practical relevance."
    }
  ],
  "lensDomains": {
    "wbg": [
      {
        "id": "wbg-services",
        "name": "Public services & inclusion",
        "shortName": "Public services & inclusion",
        "color": "#64D6C3",
        "description": "Reach people through accessible services, local languages and usable digital infrastructure."
      },
      {
        "id": "wbg-climate",
        "name": "Climate & Earth",
        "shortName": "Climate & Earth",
        "color": "#A5D87F",
        "description": "Use observable evidence to understand exposure, resilience and changes in natural assets."
      },
      {
        "id": "wbg-food",
        "name": "Agriculture & food",
        "shortName": "Agriculture & food",
        "color": "#F4C36F",
        "description": "Improve agricultural information, crop decisions and smallholder resilience."
      },
      {
        "id": "wbg-health",
        "name": "Health, skills & jobs",
        "shortName": "Health, skills & jobs",
        "color": "#F19DBB",
        "description": "Support health, learning, skills development and access to employment."
      },
      {
        "id": "wbg-infrastructure",
        "name": "Energy & infrastructure",
        "shortName": "Energy & infrastructure",
        "color": "#47B8F4",
        "description": "Understand project progress and the reliability of energy, water and physical assets."
      },
      {
        "id": "wbg-decisions",
        "name": "Finance, firms & trade",
        "shortName": "Finance, firms & trade",
        "color": "#A6A4FF",
        "description": "Improve financial inclusion, productive firms, supervision and the evidence used for decisions."
      }
    ],
    "its": [
      {
        "id": "its-software",
        "name": "Software & modernization",
        "shortName": "Software & modernization",
        "color": "#47B8F4",
        "description": "Build and maintain software while preserving behavior and engineering quality."
      },
      {
        "id": "its-knowledge",
        "name": "Knowledge & agents",
        "shortName": "Knowledge & agents",
        "color": "#64D6C3",
        "description": "Turn approved institutional knowledge into useful, traceable work."
      },
      {
        "id": "its-data",
        "name": "Data & forecasting",
        "shortName": "Data & forecasting",
        "color": "#A5D87F",
        "description": "Improve the quality of structured evidence and forecasts used for decisions."
      },
      {
        "id": "its-trust",
        "name": "Trust & identity",
        "shortName": "Trust & identity",
        "color": "#A6A4FF",
        "description": "Evaluate models, govern agent actions and preserve identity and permissions."
      },
      {
        "id": "its-cloud",
        "name": "Cloud & reliability",
        "shortName": "Cloud & reliability",
        "color": "#F4C36F",
        "description": "Understand incidents, infrastructure cost and the operational requirements of AI."
      },
      {
        "id": "its-models",
        "name": "Models & interfaces",
        "shortName": "Models & interfaces",
        "color": "#F19DBB",
        "description": "Choose suitable models and interaction channels for specific tasks and constraints."
      }
    ],
    "frontier": [
      {
        "id": "frontier-work",
        "name": "Work & agents",
        "shortName": "Work & agents",
        "color": "#47B8F4",
        "description": "Follow changes in software creation, AI-native businesses and human-agent work."
      },
      {
        "id": "frontier-models",
        "name": "Models & interfaces",
        "shortName": "Models & interfaces",
        "color": "#64D6C3",
        "description": "Explore new ways to interact with AI and run it on ordinary devices."
      },
      {
        "id": "frontier-foundations",
        "name": "Agent foundations",
        "shortName": "Agent foundations",
        "color": "#A6A4FF",
        "description": "Track the interfaces, context and controls that let agent ecosystems work together."
      },
      {
        "id": "frontier-physical",
        "name": "Physical & spatial AI",
        "shortName": "Physical & spatial AI",
        "color": "#F19DBB",
        "description": "Understand robots, world models and intelligent behavior in physical environments."
      },
      {
        "id": "frontier-science",
        "name": "Science & simulation",
        "shortName": "Science & simulation",
        "color": "#A5D87F",
        "description": "Investigate AI-driven experimentation, materials discovery and engineering models."
      },
      {
        "id": "frontier-compute",
        "name": "Compute & quantum",
        "shortName": "Compute & quantum",
        "color": "#F4C36F",
        "description": "Watch physical advances in computing, data movement and quantum error correction."
      }
    ]
  }
};
