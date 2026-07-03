# Antigravity Portfolio Website Prompt for AI Code

I want you to act as a **senior product designer + senior frontend engineer + technical storytelling editor** and build a **complete portfolio website** for me, optimized for applying to **Antigravity** / high-bar applied AI engineering roles.

You are **not** just generating a landing page.  
You are building a **case-study-driven technical portfolio website** that positions me as an **AI Engineer who ships production-grade LLM systems**.

---

# 1. YOUR GOAL

Build a portfolio website that makes a recruiter / hiring manager quickly understand that I am:

- an **AI Engineer**, not just a student with side projects
- someone who has already worked on **production AI systems**
- strong in **LLM applications, RAG / GraphRAG, workflow automation, backend AI systems, evaluation, and orchestration**
- capable of owning **end-to-end systems**: ingestion → retrieval → prompting → evaluation → APIs → deployment
- a good fit for teams like **Antigravity** that value:
  - shipping
  - high ownership
  - agentic / applied AI systems
  - reliable AI workflows, not toy demos

This website should feel like a **technical product portfolio**, not a generic personal website and not a plain online resume.

---

# 2. CORE POSITIONING — DO NOT DRIFT FROM THIS

Use this as the **main narrative** of the portfolio:

> **I build production AI systems that convert messy, unstructured inputs into reliable workflows people can actually use.**

Everything in the site should reinforce that narrative.

My positioning should feel like:

- **AI systems builder**
- **applied AI engineer**
- **workflow + retrieval + orchestration + evaluation**
- **high ownership / startup-ready**
- **cares about reliability, not just demos**

Avoid positioning me as:
- “AI enthusiast”
- “student exploring AI”
- “prompt engineer only”
- “ML researcher”
- “generic full-stack developer”

---

# 3. INPUT DATA ABOUT ME

Use the following information as the primary source of truth.

## Resume facts
I am **Pham Trung Truc**.  
I’m an AI Engineer with hands-on experience building and shipping AI systems.

### Resume highlights
- Built **3 production-grade AI applications**
- Worked on:
  1. **Text-to-CAD / engineering workflow automation**
  2. **Privacy Policy Compliance Assistant** using **Hybrid GraphRAG (Neo4j + Qdrant)**
  3. **AI Chemistry Video**
- Built systems involving:
  - FastAPI
  - REST APIs
  - Celery / Redis
  - Airflow
  - Qdrant
  - Neo4j
  - OpenAI / LLM integration
  - structured outputs
  - prompt engineering
  - evaluation workflows

### Metrics / impact to surface
- Reduced engineering drawing generation time by **10x+**
- Reduced irrelevant retrievals by **~40%**
- Achieved **95%+ Faithfulness**
- Achieved **1.0 Context Precision**
- Built **3 production-grade AI applications**

### Important resume framing
- I have worked across **LLM orchestration, backend APIs, document pipelines, GraphRAG, evaluation, and workflow automation**
- I should be presented as someone who can **own systems end-to-end**
- Tone should be **strong, technical, credible, not inflated**

---

# 4. PROJECT PRIORITY — VERY IMPORTANT

Do **not** treat all projects equally.

## Hero project #1
**Privacy Policy Compliance Assistant**  
This should be the strongest case study because it best demonstrates:
- Hybrid GraphRAG
- retrieval system design
- reliability / groundedness
- evaluation mindset
- ingestion pipelines
- modular LLM architecture

## Hero project #2
**HybionX / Text-to-CAD / AI engineering workflow automation**  
This should be the second major case study because it demonstrates:
- real-world workflow automation
- multimodal / technical input handling
- production integration
- business impact
- structured output + post-processing + orchestration

## Supporting project
**AI Chemistry Video**  
This should be a smaller supporting project unless the repository clearly contains enough substance for a larger case study.

---

# 5. WHAT I WANT YOU TO BUILD

Build a **multi-section portfolio website** with the following structure.

## Required pages / sections
1. **Homepage**
2. **Selected Work / Projects section**
3. **Case Study page for Privacy Policy Compliance Assistant**
4. **Case Study page for HybionX / Text-to-CAD workflow**
5. **Compact project section or page for AI Chemistry Video**
6. **About page / About section**
7. **Contact section**

If it is cleaner to implement this as a **single-page portfolio with deep case-study sections**, that is acceptable **only if the information architecture is still very clear**.

---

# 6. REQUIRED WEBSITE CONTENT STRUCTURE

## A. Homepage must include these blocks in this order

### 1) Hero section
Must clearly position me as an AI Engineer shipping reliable LLM systems.

Include:
- headline
- subheadline
- CTA buttons
- short intro

### 2) Metrics strip
Show the strongest metrics immediately:
- 10x+ faster engineering drawing generation
- 95%+ faithfulness
- 1.0 context precision
- 3 production-grade AI applications

### 3) What I build
Three buckets:
- Retrieval & knowledge systems
- Workflow automation with LLMs
- Production AI infrastructure

### 4) Selected projects
Feature the 3 projects in this order:
1. Privacy Policy Compliance Assistant
2. HybionX / Text-to-CAD workflow
3. AI Chemistry Video

### 5) How I work / Why I’m different
This section should emphasize:
- I treat AI as a **systems problem**
- I care about reliability and evaluation
- I like turning messy inputs into usable workflows
- I think in terms of architecture, failure modes, and shipped outcomes

### 6) Contact CTA
Simple, clean, technical, direct.

---

## B. Privacy Policy Compliance Assistant case study must include

### Required sections
1. Problem / context
2. Why this problem matters
3. My role & ownership
4. Constraints
5. System architecture
6. Key technical decisions
7. Retrieval / GraphRAG / answer pipeline design
8. Evaluation and failure modes
9. Results / impact
10. What I’d improve next

### Core points that must be reflected
- moved beyond baseline vector search into **Hybrid GraphRAG**
- modeled cross-document relationships with **Neo4j + Qdrant**
- designed **quote-before-answer / evidence-first answering**
- measured quality with **Ragas**
- improved faithfulness and context precision
- built ingestion workflows for heterogeneous documents
- preserved spreadsheet structure via metadata-aware processing
- decoupled LLM provider layer for flexibility

### Tone for this case study
This must feel like:
> “I built a reliability-focused retrieval system for high-stakes document QA”

It must **not** read like:
> “I made a chatbot over PDFs.”

---

## C. HybionX / Text-to-CAD case study must include

### Required sections
1. Workflow problem / business context
2. Why engineering workflow automation matters
3. My role & ownership
4. Constraints of technical / multimodal inputs
5. System architecture
6. How the LLM layer was used
7. Structured output / post-processing / validation logic
8. Failure modes and iteration
9. Results / impact
10. What I’d improve next

### Core points that must be reflected
- this is **not** just a CAD chatbot
- it is an **AI-assisted engineering workflow automation system**
- it handled messy technical inputs and turned them into structured outputs
- it connected AI inference with real engineering workflows / downstream CAD execution
- it improved operational efficiency in a real team
- it used validation / filtering / orchestration around the model

### Tone for this case study
This must feel like:
> “I used AI to automate a high-friction technical workflow under real constraints.”

It must **not** read like:
> “I asked GPT to generate CAD drawings.”

---

## D. AI Chemistry Video project must be smaller and concise

This project should be presented as a **supporting project** unless there is strong evidence that it deserves a full case study.

Structure:
1. Problem
2. Pipeline / approach
3. Interesting technical challenge
4. Demo / output
5. What I learned

---

# 7. WRITING REQUIREMENTS

Write the website copy in **natural, high-quality English**.

The tone should be:
- technical
- sharp
- credible
- startup-ready
- high ownership
- not corporate
- not fluffy
- not arrogant

The copy should sound like someone who has **actually built AI systems**, not someone trying to imitate startup language.

Whenever possible, emphasize:
- end-to-end ownership
- system thinking
- reliability
- retrieval quality
- orchestration
- evaluation
- real-world constraints
- measurable impact

---

# 8. DESIGN + UX REQUIREMENTS

## Design style
The site should feel:
- modern
- technical
- clean
- slightly premium
- minimal but not empty
- suitable for an AI engineer portfolio, not a designer portfolio

## Suggested visual direction
- dark or neutral theme is acceptable
- typography should feel sharp and readable
- use cards, sections, diagrams, and callout blocks
- avoid flashy gradients unless used subtly
- emphasize readability of technical case studies

## Important UX principles
- recruiter should understand my value in **under 30 seconds**
- homepage should be skimmable
- case studies should be structured with strong headings and diagrams
- the site should feel like it was designed for **technical hiring evaluation**

---

# 9. IMPLEMENTATION REQUIREMENTS

You are not only designing. You must **build the website code**.

## Build requirements
- Create a production-quality portfolio site codebase
- Make it easy to edit content later
- Use reusable components for sections / project cards / case study blocks
- Use a clean folder structure
- Use semantic naming
- Ensure responsive layout for desktop and mobile

## Preferred stack
Use one of these if not otherwise specified:
- **Next.js + TypeScript + Tailwind CSS**
or
- **React + TypeScript + Tailwind CSS**

Prefer **Next.js** if you think it improves structure and routing for case study pages.

## Strong preference
Use a structure like:
- `/`
- `/projects/privacy-policy-compliance-assistant`
- `/projects/hybionx`
- `/projects/ai-chemistry-video`

If you decide a single-page structure is better, justify it and still organize the code cleanly.

---

# 10. VERY IMPORTANT: CONTENT VS UNKNOWN DETAILS

You may not know every detail of my GitHub repos or LinkedIn.  
Do **not** invent fake technical details.

Instead, follow this rule:

## If a detail is strongly supported by the resume or clear context
Write it confidently.

## If a detail is plausible but not fully certain
Use safe wording.

## If a detail is missing and important for a case study
Insert a clearly labeled placeholder like:

- `TODO: Add screenshot of retrieval pipeline`
- `TODO: Replace with actual architecture diagram`
- `TODO: Confirm exact corpus size / number of evaluation questions`
- `TODO: Add real example of CAD input → structured output`

I want the site to be **honest and structurally strong**, even if a few details are still placeholders.

---

# 11. OUTPUT I WANT FROM YOU

I want you to do the following in order:

## STEP 1 — PLAN
Before coding, produce a brief but concrete implementation plan:
- site architecture
- page structure
- component structure
- styling direction
- content strategy
- where placeholders will be used

## STEP 2 — CONTENT DRAFTING
Draft the actual portfolio copy for:
- homepage
- project cards
- about section
- case study sections

## STEP 3 — BUILD
Generate the actual code for the portfolio website.

## STEP 4 — FILE ORGANIZATION
Show the final file tree and clearly indicate:
- which files are page files
- which files are reusable components
- which files contain content / constants / data

## STEP 5 — TODO HANDOFF
At the end, give me a concise list of:
- what screenshots I need to add
- what metrics I should verify
- what project details I should fill in manually
- what sections are strongest already vs still incomplete

---

# 12. HARD CONSTRAINTS

## Do not do these things
- Do not make it sound like a generic student portfolio
- Do not make all 3 projects equal
- Do not over-focus on visual flair at the expense of technical clarity
- Do not fill the site with buzzwords
- Do not invent fake metrics, fake deployment claims, fake users, or fake architectural details
- Do not reduce the portfolio to a résumé pasted into cards

## Must do these things
- Make **Privacy Policy Compliance Assistant** the strongest case study
- Make **HybionX** the second strongest
- Make the site communicate **production AI systems**, not demos
- Make the writing feel like a strong **applied AI engineer portfolio**
- Make the structure easy for me to extend later

---

# 13. FINAL INSTRUCTION

Your job is to help me **win an Antigravity-style AI engineering application**.

So optimize for this question:

> **If a hiring manager only spent 3–5 minutes on this portfolio, what structure, writing, and code would most strongly convince them that I can build reliable applied AI systems with high ownership?**

Now start with **STEP 1 — implementation plan**, then proceed through the rest.

---

# Recommended Add-on

Use these repositories as implementation references for project content if available:
- `HybionX`
- `privacy-policy-compliance-assistant`
- `AI-Chemistry-Video`

When extracting project details, prioritize:
1. README
2. architecture diagrams
3. API / backend structure
4. ingestion / orchestration code
5. evaluation logic
6. screenshots / demo assets

If repository details conflict with the summary above, flag the conflict explicitly instead of silently choosing one.
