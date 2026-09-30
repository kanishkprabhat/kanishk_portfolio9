/* ─────────────────────────────────────────────────────────────────────
   PortfolioTerminal — data module
   Virtual filesystem, ASCII art, color palettes.
   Pure ES module — no DOM, no React.
   ───────────────────────────────────────────────────────────────────── */

/* ─── ASCII logo (ANSI Shadow) ─────────────────────────────────────── */
const _KANISHK = [
  "██╗  ██╗ █████╗ ███╗   ██╗██╗███████╗██╗  ██╗ ██╗  ██╗",
  "██║ ██╔╝██╔══██╗████╗  ██║██║██╔════╝██║  ██║ ██║ ██╔╝",
  "█████╔╝ ███████║██╔██╗ ██║██║███████╗███████║ █████╔╝ ",
  "██╔═██╗ ██╔══██║██║╚██╗██║██║╚════██║██╔══██║ ██╔═██╗ ",
  "██║  ██╗██║  ██║██║ ╚████║██║███████║██║  ██║ ██║  ██╗",
  "╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝  ╚═╝ ╚═╝  ╚═╝"
];
const _PRABHAT = [
  "██████╗ ██████╗  █████╗ ██████╗ ██╗  ██╗ █████╗ ████████╗",
  "██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║  ██║██╔══██╗╚══██╔══╝",
  "██████╔╝██████╔╝███████║██████╔╝███████║███████║   ██║   ",
  "██╔═══╝ ██╔══██╗██╔══██║██╔══██╗██╔══██║██╔══██║   ██║   ",
  "██║     ██║  ██║██║  ██║██████╔╝██║  ██║██║  ██║   ██║   ",
  "╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   "
];
export const LOGO_LINES = [..._KANISHK, ..._PRABHAT];

/* ─── palettes ─────────────────────────────────────────────────────── */
export const PALETTES = {
  fire:   ["#ff0000", "#ff4500", "#ff7f00", "#ffa500", "#ffd700", "#ffff00"],
  sunset: ["#ff5e62", "#ff9966", "#ffb86b", "#ffd28d", "#ffe9b3", "#fff4d6"],
  matrix: ["#003b00", "#008f11", "#00bb1f", "#00ff41", "#39ff14", "#aaffaa"],
  ocean:  ["#0b1d51", "#1a3e8a", "#2a6fdb", "#3aa9ff", "#7ed6ff", "#d6f0ff"],
  nebula: ["#3b0d5b", "#6a1b9a", "#9c27b0", "#e040fb", "#ff77ff", "#ffd9ff"],
  gold:   ["#5b3a00", "#8a5a00", "#c98600", "#f5b400", "#ffd24a", "#fff2a8"],
  mono:   ["#cccccc", "#bdbdbd", "#ababab", "#9a9a9a", "#888888", "#777777"]
};

/* ─── SL locomotive ────────────────────────────────────────────────── */
export const SL_FRAME = [
  "      ====        ________                ___________ ",
  "  _D _|  |_______/        \\__I_I_____===__|_________| ",
  "   |(_)---  |   H\\________/ |   |        =|___ ___|   ",
  "   /     |  |   H  |  |     |   |         ||_| |_||   ",
  "  |      |  |   H  |__--------------------| [___] |   ",
  "  | ________|___H__/__|_____/[][]~\\_______|       |   ",
  "  |/ |   |-----------I_____I [][] []  D   |=======|__ "
];
export const SL_WHEELS = [
  "__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__",
  " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ",
  "  \\_/      \\O=====O=====O=====O_/      \\_/            "
];

/* ─── header banner ────────────────────────────────────────────────── */
export const HEADER_BANNER = [
  "# ─────────────────────────────────────────────────────────────────────",
  "#  type `help` to list commands",
  "# ─────────────────────────────────────────────────────────────────────",
  "#   ls            list files in the current directory",
  "#   cd <dir>      change directory  (work / .. / ~)",
  "#   cat <file>    print file to stdout  (try cv.md / contact.md)",
  "#   vim <file>    open file in a basic vim viewer  (:q to quit)",
  "#   pwd           print working directory",
  "#   whoami        print current user",
  "#   clear         clear the screen",
  "#   sl            fun cmd: steam locomotive",
  "#   help          show this list anytime",
  "# ─────────────────────────────────────────────────────────────────────"
];

/* ─── virtual filesystem ───────────────────────────────────────────── */
export const FS_TREE = {
  "~": {
    type: "dir",
    children: ["work", "cv.md", "contact.md", "README.md"]
  },

  "~/README.md": {
    type: "file",
    content:
`Hi, I'm Kanishk.

You're standing in my home directory. One folder, three files.

  work/         ← my projects (run \`cd work && ls\`)
  cv.md         ← who I am, skills, education
  contact.md    ← where to find me

Try \`vim work/01_PRPilot\` to read a project. Or \`sl\` if you're bored.
`
  },

  // ───────────── work/ ─────────────
  "~/work": {
    type: "dir",
    children: [
      "01_PRPilot",
      "02_auctus",
      "03_D3Careers",
      "04_BSI_Solutionz",
      "05_Likit",
      "06_Scout",
      "07_Qeue",
      "08_Fluo",
      "09_EVLOS-OPS"
    ]
  },

  "~/work/01_PRPilot": {
    type: "file",
    tag: "[ TypeScript · AWS Lambda · GitHub App ]",
    content:
`PRPilot
=======

A self-hosted GitHub App that checks pull requests before a human
reviewer spends time on them. Fast, rule-based feedback published
right back into the PR as a GitHub Check Run.

The "fast lane"
---------------
The main review path is the fast lane. It is designed to be the
required check in the normal PR flow. It looks at:

    - changed files
    - workflow files
    - package files
    - lockfile changes
    - risky patterns

If it can review the PR honestly, it reports success / warning /
failure. If it cannot complete a full review, it says so clearly
instead of pretending everything passed.

Self-hosted by design
---------------------
The deployment owner runs the GitHub App in their own AWS account
and controls the selected repositories, runtime policy, logs,
storage, and cost limits — suitable for private repos where code
should never leave for a third-party AI service.

Stack
-----
TypeScript · Node.js · AWS Lambda · API Gateway · SQS · DynamoDB ·
Parameter Store · Octokit · Zod · Vitest.

Includes webhook signature verification, selected-repo checks,
delivery deduplication, safe queue handoff, short-lived metadata
storage, and clear GitHub Check Run output.
`
  },

  "~/work/02_auctus": {
    type: "file",
    tag: "[ Next.js · Supabase · Funding discovery ]",
    content:
`auctus
======

A Canadian funding discovery platform that helps people find
opportunities that match who they are and what they need.

Three audiences, three flows
----------------------------
    businesses → grants and support programs
    students   → scholarships and bursaries
    professors → research funding

Each role gets pages and filters built for its needs instead of
forcing every user through one generic search.

What it includes
----------------
    - Supabase authentication
    - profile onboarding
    - saved funding preferences
    - profile-based match scoring
    - funding detail pages with official application links
    - a dashboard (recommendations, deadlines, profile, forum)

Community forum
---------------
Threads, replies, and upvotes on helpful answers. A scraper
package ingests official Canadian funding sources.

The database lives behind Supabase migrations — profiles,
role-specific tables, funding records, preferences, forum data,
scrape metadata, row-level security, and tag backfills for
better matching.
`
  },

  "~/work/03_D3Careers": {
    type: "file",
    tag: "[ React · D3 Sankey · MongoDB ]",
    content:
`D3Careers
=========

A full-stack career exploration app that helps students understand
how people move from majors into first jobs and later roles.

The hero is a D3 Sankey diagram of career movement. Filter by major
and background, browse alumni profiles, and use the app as a
starting point for mentor chats.

Public vs protected
-------------------
Public pages work without login:
    - career pathway page
    - career map
    - alumni cards
    - alumni profile pages

Login gates only the protected stuff: dashboards, profile
completion, booking-related actions.

Stack
-----
React · Vite · Node.js · Express · MongoDB · JWT · Cal.com

Data started from a real Kaggle careers dataset, cleaned and
reshaped into believable career paths with major weights and
background tags. The backend turns alumni timelines into nodes
and links — the frontend renders the visual career map.

Also includes protected routes, role-based flows, password
hashing, rate limiting, input validation, CORS setup, ID checks,
and backend tests.
`
  },

  "~/work/04_BSI_Solutionz": {
    type: "file",
    tag: "[ Astro · React islands · Tailwind ]",
    content:
`BSI Solutionz
=============

A public business website for a hoist, crane, generator, and
material-handling dealer. The goal: make it dead simple for
visitors to understand what BSI offers and contact the business
without friction.

Why Astro
---------
Most pages are content-focused. Astro keeps the site fast and
avoids shipping a full app when most pages only need static HTML.
React is used only where interaction is needed — mainly the
enquiry UI. Tailwind handles styling.

The enquiry flow
----------------
    visitor fills form
        │
        ▼
    Zod + React Hook Form  (client-side validation)
        │
        ▼
    Astro API route        (validates, cleans, never trusts client)
        │
        ▼
    Resend                 (server-side secret — never exposed)

Product discovery, clear enquiry capture, fast loading pages,
easy hosting. No more, no less.
`
  },

  "~/work/05_Likit": {
    type: "file",
    tag: "[ Workflow kit · AI as mentor ]",
    content:
`Likit
=====

A lightweight workflow kit that helps students build software
projects with AI as a *mentor*, not a code writer.

Designed for tools like Claude Code and Codex — but the point is
NOT to let AI write the project for you.

The setup
---------
Before implementation starts, Likit runs a structured questionnaire:
    - project idea
    - skill level
    - tech stack
    - features
    - architecture
    - constraints

Then it critiques the answers, finds gaps, and turns the idea into
a clearer build plan.

Gates
-----
The project is built around gates — checkpoints that must pass
before moving forward. Each gate has proof requirements: command
output, test results, working demos, or clear explanations. You
cannot skip the hard parts or say "it's done" without evidence.

    Gate 0       setup questionnaire → planning files
    Gate 1..17   build phases, each focused on one piece

Progress is tracked across sessions so you can return in a new
chat and continue without losing context.

Professional habits enforced
----------------------------
walking skeleton first · vertical slices · clear commits ·
test core logic · keep functions and names clean · avoid
unnecessary features · document important decisions · debug
with method · end sessions with small working progress.
`
  },

  "~/work/06_Scout": {
    type: "file",
    tag: "[ MCP · TypeScript · AI · WIP ]",
    content:
`Scout
=====

Prototype MCP that turns a company URL into a grounded discovery
deliverable with ranked AI/automation opportunities, tool
mappings, and a ready-to-import implementation plan.

----------
<Please visit documentation on github, will be updating the summary here soon>
`
  },

  "~/work/07_Qeue": {
    type: "file",
    tag: "[ Java · Microservices · WIP ]",
    content:
`Qeue
====

An in-progress Java microservice project for publishing events and
reserving seats *safely*. The focus: service boundaries, auth,
gateway routing, database migrations, and capacity-safe
registration.

Services
--------
    event         event records + lifecycle
    identity      register, login, /me, password hashing, JWT
    gateway       JWT validation, role guards, proxy + header forwarding
    registration  reservation APIs, capacity-safe reserves,
                  cancellation, PostgreSQL storage, outbox rows

Current state
-------------
Work through Phase 10. Event, identity, gateway, and registration
services are in place with tests and migrations across the board.
The registration service uses Testcontainers for PostgreSQL-backed
integration testing. Flyway keeps DB changes versioned and
repeatable.

Also living in the repo
-----------------------
    - draft OpenAPI and AsyncAPI contracts
    - Docker Compose for shared local infra
      (PostgreSQL, RabbitMQ, MailHog)

Planned in later gated phases:
    RabbitMQ publishing · React web client · Kubernetes manifests · CI
`
  },

  "~/work/08_Fluo": {
    type: "file",
    tag: "[ Blockchain · Solidity · WIP ]",
    content:
`Fluo
====

Proof of concept for a defence procurement workflow with audit
logging on blockchain, taken to the Dual Use Hackathon 2026.

----------
<Please visit documentation on github, will be updating the summary here soon>
`
  },

  "~/work/09_EVLOS-OPS": {
    type: "file",
    tag: "[ ArcGIS · Python · GIS planning ]",
    content:
`EVLOS-OPS
=========

An educational GIS decision-support prototype for EVLOS-style
drone corridor planning in Fredericton, New Brunswick.

It maps possible drone pilot staging points and visual observer
positions using terrain visibility, coverage gaps, scoring rules,
and Python exports.

What it is NOT
--------------
    ✗ flight approval
    ✗ a substitute for legal review
    ✗ live airspace monitoring
    ✗ a complete aviation safety system

It shows how GIS can support planning by identifying where
visibility may be strong, weak, or missing.

The workflow
------------
    1. Prepare open spatial data in ArcGIS Pro (city boundary,
       roads, trails, hydro, buildings, parks, corridors, DEM)
    2. Generate planning corridors + target points along them
    3. Generate candidate observer points from trails/parks/roads
    4. Build observer↔target pairs with distance limits + sector logic
    5. Run line-of-sight on a bare-earth DEM

Coverage classes
----------------
    blind   no visible observer
    weak    one visible observer
    strong  two or more

Pilot/staging candidates are scored on observer support, nearby
coverage, access context, distance to the corridor, and general
suitability. A Python script then ranks nearby candidates and
exports cleaned JSON + GeoJSON for downstream software.
`
  },

  // ───────────── cv.md ─────────────
  "~/cv.md": {
    type: "file",
    content:
`Kanishk Prabhat
===============
Digital Marketing | Performance Marketing
New Delhi, India · +91-9102395579 · kanishkprabha31@gmail.com
LinkedIn: https://linkedin.com/in/kanishk-prabhat

Summary
-------
Entry-level digital marketer focused on paid acquisition and performance
marketing. Hands-on experience planning and running Meta Ads and Google
Ads campaigns, including audience and creative strategy, lead generation,
and conversion tracking. Working knowledge of GA4, GTM, SEO, WordPress,
Canva, and AI-assisted marketing and website workflows.

Skills
------
Paid Media
    Google Ads · Meta Ads · LinkedIn Ads · Lead Generation ·
    Audience Targeting · Campaign Optimization

Analytics
    GA4 · Google Tag Manager · Conversion Tracking ·
    Campaign Performance Analysis

Digital Marketing
    SEO · WordPress · Canva · Landing Page Strategy ·
    Creative Strategy · Funnel Strategy · A/B Testing

AI & Automation
    AI Website & Landing Page Creation · AI Agents · Antigravity ·
    AI-Assisted Marketing Workflows · Marketing Automation

Tools & Platforms
    Google Ads · Meta Ads Manager · LinkedIn Ads · HubSpot ·
    Google Analytics 4 · Google Tag Manager · WordPress · Canva ·
    Antigravity · Spreadsheets

Projects
--------
Dwell Construction — Meta Ads Lead Generation (Real Client) [Aug 2026]
    • Ran a Meta lead-generation campaign across Delhi NCR and Meerut,
      owning campaign structure, targeting, budgets, creative assignment,
      lead forms, WhatsApp conversion flow, launch, and optimization.
    • Generated 31 Instant Form leads at ₹66.19/lead and 38 WhatsApp
      conversations at ₹35.21/conversation from a ₹3,389.80 spend.
    • Client issued roughly 8–10 quotations to prospects sourced from
      the campaign.

JSN Silicon Valley — Meta Ads WhatsApp Lead Generation (Real Client) [Sep 2026]
    • Ran a Meta WhatsApp lead-generation campaign for a residential
      solar company in Sambhal, managing campaign structure, targeting,
      creative strategy, launch, and performance analysis.
    • Generated 238 messaging conversations at ₹18.01/conversation from
      ₹4,287.42 spend, with 190,564 impressions and 83,608 reach.
    • Analyzed creative and placement performance to identify lower-cost
      conversation acquisition opportunities.

ThePetNest — Google Display Network TOFU Strategy (Simulated)
    • Planned a top-of-funnel awareness campaign covering audience
      segmentation, custom intent, geographic targeting, creative angles,
      budget assumptions, KPIs, landing-page considerations, and remarketing.

Experience
----------
Sikharthy Infotech Pvt. Ltd. — Marketing Intern [May 2023 – Jul 2023]
    • Researched B2B prospects and supported outreach, pitching,
      content, and marketing activities.
    • Helped convert 2 key clients through prospecting and marketing support.

Nblik — Community Manager / Reporting Manager Intern [Apr 2023 – Jun 2023]
    • Onboarded 75+ active users in 48 hours and managed community
      engagement across writers and readers.
    • Promoted to Reporting Manager within 14 days; managed and mentored
      10+ community managers and supported retention and reporting initiatives.

Education
---------
Advanced Digital Marketing
    Delhi Institute of Digital Marketing [Apr 2026 – Aug 2026]

Bachelor of Business Administration (BBA)
    Sikkim Manipal Institute of Technology (SMU) [2021 – 2024]

Class XII, Commerce/Business
    Doon Senior Secondary School [2019 – 2021]

Certifications
--------------
    • Google Ads Search Certification — Google Digital Academy (Skillshop) (2026)
    • Fundamentals of Digital Marketing — Google
    • Become an AI-Powered Marketer
    • Introduction to Prompt Engineering for Generative AI
    • Master Your Brand Voice — Jack Appleby
`
  },

  // ───────────── contact.md ─────────────
  "~/contact.md": {
    type: "file",
    content:
`Contact
=======

Name
    Kanishk Prabhat

Phone
    +91-9102395579

Email
    kanishkprabha31@gmail.com

LinkedIn
    https://linkedin.com/in/kanishk-prabhat

Location
    New Delhi, India
`
  }
};

/* ─── path helpers ─────────────────────────────────────────────────── */
export function fsResolve(cwd, target) {
  if (!target || target === "." || target === "./") return cwd.join("/");
  if (target === "~" || target === "/" || target === "/~") return "~";
  let parts;
  if (target.startsWith("~/") || target === "~") {
    parts = target.split("/").filter(Boolean);
  } else if (target.startsWith("/")) {
    parts = ["~"].concat(target.split("/").filter(Boolean));
  } else {
    parts = cwd.slice();
    for (const seg of target.split("/").filter(Boolean)) {
      if (seg === ".") continue;
      if (seg === "..") { if (parts.length > 1) parts.pop(); continue; }
      parts.push(seg);
    }
  }
  return parts.join("/");
}

export function fsGet(path) {
  return FS_TREE[path] || null;
}
