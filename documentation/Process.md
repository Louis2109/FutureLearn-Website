# FUTURELEARN — AI BUILD PROCESS

## Purpose

This file contains the five prompts to execute sequentially in Google AI Studio.

IMPORTANT:

- Do not execute all five prompts simultaneously.
- Execute Prompt 01.
- Review the result.
- Then execute Prompt 02.
- Continue sequentially.
- Each prompt assumes that the previous prompt has already been completed.
- The AI must inspect the existing code before modifying it.
- Never restart the project unnecessarily.

---

# PROMPT 01 — FOUNDATION, ARCHITECTURE & DESIGN SYSTEM

## Objective

Prepare the project foundation before building the complete interface.

## Prompt

```text
You are now working on the FutureLearn web platform.

Before writing or modifying code, inspect the entire existing project and understand its current structure, dependencies and configuration.

Do not rebuild the project blindly.

Your first task is to establish a clean production-ready foundation for the FutureLearn website.

Follow the project documentation and AI coding instructions provided with this project.

OBJECTIVE

Create the architectural foundation and design system that all future pages and components will use.

TECHNICAL DIRECTION

Use:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui where useful
- Lucide React
- Framer Motion only where useful

Use the Next.js App Router.

Create a clean component architecture.

Separate business data from UI components.

Create a structure similar to:

src/
├── app/
├── components/
├── data/
├── lib/
└── ...

Prepare reusable data files for:

- services
- destinations
- professional training
- language courses
- testimonials

Do not duplicate business content inside multiple components.

DESIGN SYSTEM

Create a single clean/light theme.

DO NOT implement dark mode.

The visual identity must use only:

- yellow
- white
- black / near-black
- very light neutral gray where necessary

Do NOT introduce blue, purple, green or red as brand colors.

Yellow must be an accent, not the dominant background color.

Establish:

- typography scale
- spacing system
- container width
- border radius
- shadows
- button styles
- card styles
- input styles
- section spacing
- responsive breakpoints

VISUAL STYLE

The design should be:

- clean
- modern
- premium
- professional
- elegant
- spacious
- human
- conversion-oriented

Use the provided FutureLearn and easyTaxi visual references as inspiration for design quality, spacing and component discipline.

Do not copy their visual identity.

NAVBAR FOUNDATION

Prepare the main navbar with:

Logo
Accueil
Services
Destinations
Contact
FR / EN
Parler à un conseiller

Services must support a dropdown.

The navbar should be sticky and responsive.

Prepare the mobile navigation architecture.

CORE COMPONENTS

Create reusable components where appropriate:

- Navbar
- MobileMenu
- Button
- SectionHeading
- ServiceCard
- DestinationCard
- TrainingCard
- LanguageCard
- TestimonialCard
- ProcessStep
- FAQItem
- LeadForm foundation
- Footer

Do not overengineer.

Do not create components that do not have a clear reuse purpose.

ACCESSIBILITY

Build the foundation with:

- semantic HTML
- keyboard accessibility
- focus states
- accessible buttons
- proper form labels
- sufficient contrast

PERFORMANCE

Prefer server components.

Use client components only when interactivity requires them.

Avoid unnecessary dependencies.

At the end:

1. Verify the project builds.
2. Fix TypeScript errors.
3. Fix lint errors if configured.
4. Ensure there are no console errors.
5. Briefly summarize what you created.

Do not build the complete homepage yet.

STOP after completing the foundation.
```

---

# PROMPT 02 — HOMEPAGE UI / UX

## Objective

Build the complete homepage using the architecture created in Prompt 01.

## Prompt

```text
Continue from the existing FutureLearn project.

Do NOT restart the project.

Inspect the current implementation first and reuse the existing architecture and components.

Now build the complete FutureLearn homepage.

The homepage must follow this exact order:

01. Navbar
02. Hero
03. Nos Services
04. Pourquoi FutureLearn
05. Processus
06. Assistance Visa
07. Billets d'avion + Destinations
08. Formations professionnelles
09. Cours de langues
10. Auto-école
11. Témoignages
12. FAQ
13. Final CTA
14. Footer

DESIGN

Use the clean/light visual system established previously.

Only use:

- yellow
- white
- black
- subtle neutral gray

No blue.

No dark mode.

The website must have strong text/background contrast.

Use generous whitespace.

Avoid visual clutter.

Use subtle borders and shadows.

Glassmorphism may be used selectively for floating elements or navigation, but do not make everything glass.

HERO

Create a premium Hero section.

Headline:

"Votre projet sans frontières, avec FutureLearn."

Supporting copy should communicate:

- études
- voyage
- formation
- assistance visa
- cours de langues
- auto-école
- mobilité internationale

Primary CTA:

"Parler à un conseiller"

Secondary CTA:

"Découvrir nos services"

Use a realistic, premium image representing an African student or young professional preparing for international mobility.

Do not use generic cartoon illustrations.

SERVICES

Create five premium service cards:

1. Assistance Visa
2. Billets d'avion
3. Formation professionnelle
4. Cours de langues
5. Auto-école

Each card must be clickable.

Use:

- image
- title
- short description
- "Découvrir →"

Each card must link to its corresponding service page.

WHY FUTURELEARN

Create five trust pillars:

- Accompagnement personnalisé
- Expertise
- Solutions complètes
- Réseau international
- Satisfaction client

Do not invent statistics.

PROCESS

Create four visual steps:

01 — Vous nous contactez
02 — Nous analysons votre projet
03 — Nous vous accompagnons
04 — Vous avancez vers votre objectif

DESTINATIONS

Create a visually strong destination section.

Destinations:

France
Canada
Allemagne
Dubai
Belgique
Italie
Royaume-Uni
États-Unis
Chine
Espagne

Use high-quality destination imagery.

FORMATIONS

Show:

- Secrétariat bureautique
- Programmation web
- Infographie
- Marketing digital
- Comptabilité et gestion
- Auxiliaire de vie

LANGUAGES

Show:

- Allemand — Goethe-Zertifikat, ZDaF
- Anglais — IELTS, TOEFL, TOEIC
- Français — TCF, TEF
- Chinois — HSK
- Italien — CILS

Display:

"10h / semaine"

DO NOT display prices on the homepage.

AUTO-ÉCOLE

Show:

Permis A
Permis B

Use a visual and simple presentation.

TESTIMONIALS

Use the testimonial component architecture.

Do not fabricate client claims.

If real testimonial content is not yet available, use clearly marked neutral placeholders rather than fake testimonials.

FAQ

Only five questions:

1. Quels types de visas proposez-vous ?
2. Comment réserver un billet d'avion ?
3. Quelles formations professionnelles proposez-vous ?
4. Quels cours de langues enseignez-vous ?
5. Comment puis-je parler à un conseiller ?

CTA

Create a strong final CTA:

"Votre projet commence par une conversation."

Primary CTA:

"Parler à un conseiller"

FOOTER

Include:

- FutureLearn branding
- navigation
- services
- contact
- social links
- legal links

RESPONSIVE

The entire homepage must work perfectly on:

- mobile
- tablet
- desktop
- large desktop

Do not simply shrink desktop elements.

Create intentional mobile layouts.

ANIMATIONS

Add subtle animations:

- Hero reveal
- card hover
- section reveal
- button hover
- FAQ interaction

Keep animations restrained.

At the end:

- run build
- fix errors
- check responsive issues
- check console
- check links
- check accessibility

Then briefly report what was completed.

STOP after the homepage is complete.
```

---

# PROMPT 03 — SERVICE PAGES + CONTENT ARCHITECTURE

## Objective

Transform the five services into real conversion-oriented pages.

## Prompt

```text
Continue from the current FutureLearn project.

Do not rebuild the homepage.

Now implement the dedicated service pages.

Required routes:

/services/assistance-visa
/services/billets-avion
/services/formation-professionnelle
/services/cours-langues
/services/auto-ecole

Also ensure the Services dropdown and homepage service cards correctly link to these pages.

ARCHITECTURE

Create a reusable service-page architecture rather than five unrelated page implementations.

The template should support:

- Hero
- introduction
- offerings
- benefits
- process
- useful information
- FAQ
- CTA
- advisor contact

Each service can customize its content while sharing the same structural components.

SERVICE 01 — ASSISTANCE VISA

Include:

- Visa étudiant
- Visa travail
- Visa touristique
- Visa famille
- Visa business

Explain FutureLearn's role through:

- orientation
- project analysis
- preparation
- accompaniment
- follow-up

Never promise visa approval.

Never use unsupported success rates.

CTA:

"Parler à un conseiller"

SERVICE 02 — BILLETS D'AVION

Explain:

- search assistance
- reservation
- travel guidance
- assistance for people unfamiliar with flight booking

Create a clear path toward contacting FutureLearn.

Destinations can be presented as supporting content:

France
Canada
Allemagne
Dubai
Belgique
Italie
Royaume-Uni
États-Unis
Chine
Espagne

SERVICE 03 — FORMATION PROFESSIONNELLE

Programs:

- Secrétariat bureautique
- Programmation web
- Infographie
- Marketing digital
- Comptabilité et gestion
- Auxiliaire de vie

Each program should have:

- title
- image
- concise description
- CTA

Do not invent prices, duration or certification details unless officially provided.

SERVICE 04 — COURS DE LANGUES

Languages:

Allemand
Anglais
Français
Chinois
Italien

Certifications:

Allemand:
Goethe-Zertifikat, ZDaF

Anglais:
IELTS, TOEFL, TOEIC

Français:
TCF, TEF

Chinois:
HSK

Italien:
CILS

Current schedule information:

10h / semaine

Do not display prices unless explicitly approved later.

SERVICE 05 — AUTO-ÉCOLE

Present:

- Permis A
- Permis B

Keep the design visual and simple.

CONVERSION

Every service page must contain multiple logical conversion points without becoming aggressive.

Examples:

"Parler à un conseiller"
"Discuter de mon projet"
"Demander des informations"

All should open or navigate to the lead form.

SEO

Each service page needs:

- unique title
- unique meta description
- semantic H1
- proper H2 structure
- Open Graph metadata
- descriptive URL
- useful page content

Do not duplicate the exact same content across all pages.

RESPONSIVE

Test all pages on mobile and desktop.

QUALITY

Do not introduce new visual styles.

Reuse the FutureLearn design system.

At the end:

- run build
- fix TypeScript errors
- fix broken links
- verify routes
- verify navigation
- check console
- summarize changes

STOP after all five service pages are working.
```

---

# PROMPT 04 — LEAD FORM + FR/EN + INTERACTIONS

## Objective

Implement the conversion infrastructure and interactive UX.

## Prompt

```text
Continue from the existing FutureLearn project.

Do not rebuild existing pages.

Now implement the conversion and interaction layer.

PRIMARY FEATURE:

"Parler à un conseiller"

Every primary advisor CTA across the website must use the same lead-generation experience.

LEAD FORM

Create a professional responsive modal or equivalent focused contact interface.

Fields:

- Nom complet *
- Téléphone / WhatsApp *
- Email
- Type de projet *
- Destination
- Message

Project options:

- Études
- Visa
- Voyage
- Billet d'avion
- Formation professionnelle
- Cours de langues
- Auto-école
- Autre

Destination options:

- France
- Canada
- Allemagne
- Dubai
- Belgique
- Italie
- Royaume-Uni
- États-Unis
- Chine
- Espagne
- Autre

VALIDATION

Implement:

- required field validation
- email validation
- phone validation
- clear error messages
- loading state
- disabled submit state
- success state
- failure state

Do not allow accidental multiple submissions.

EMAIL

Implement server-side lead processing.

Use environment variables for all private credentials.

Never expose credentials in browser code.

Prepare structured lead information:

FutureLearn Lead

Name:
Phone:
Email:
Project:
Destination:
Message:
Timestamp:

The exact email provider can use an appropriate transactional email implementation compatible with the project.

If credentials are not available yet, implement the server-side abstraction and environment variable structure without inventing credentials.

WHATSAPP

After successful form submission, provide a WhatsApp continuation using a structured pre-filled message.

Example:

"Bonjour FutureLearn, je suis [Nom]. Je souhaite être accompagné pour mon projet de [Projet]. Destination souhaitée : [Destination]."

Do not expose private WhatsApp API credentials.

FR / EN

Implement proper French/English localization.

French is the default.

Translate:

- navigation
- buttons
- headings
- form labels
- validation messages
- FAQ
- core homepage content
- service page UI

Do not use a browser translation widget.

Create a maintainable translation structure.

The language selector should be:

FR | EN

It must be accessible and responsive.

IMPORTANT:

The website remains CLEAN MODE ONLY.

Do not add dark mode.

INTERACTIONS

Implement:

- sticky navbar
- Services dropdown
- mobile menu
- FAQ accordion
- smooth scrolling where appropriate
- modal open/close
- form feedback
- subtle hover states

Accessibility:

- Escape should close modal
- focus management
- keyboard navigation
- labels
- visible focus
- accessible accordion
- accessible mobile menu

At the end:

- test all CTA buttons
- test the form
- test validation
- test mobile
- test FR/EN
- test navigation
- run build
- fix all errors

Do not leave fake API calls pretending that email delivery works.

If external credentials are unavailable, clearly isolate the integration behind environment variables and provide the expected configuration.

STOP after the conversion and localization layer is implemented.
```

---

# PROMPT 05 — SENIOR QA / POLISH / PRODUCTION READINESS

## Objective

This is the final audit. The AI must behave like a senior engineer receiving an almost-finished project for production review.

## Prompt

```text
This is the final quality-control phase of the FutureLearn project.

Do not redesign the entire website.

Act as a Senior Frontend Engineer, UX Engineer, Accessibility Reviewer, Performance Engineer and Conversion Specialist.

Your job is to inspect the entire current implementation and identify weaknesses before production.

Do a systematic audit.

1. ARCHITECTURE

Inspect:

- folder structure
- component reuse
- duplicated code
- unnecessary dependencies
- client/server component usage
- data separation
- naming
- maintainability

Refactor only where it materially improves the project.

Do not overengineer.

2. UI QUALITY

Inspect every section.

Check:

- alignment
- spacing
- typography
- card consistency
- border radius
- shadows
- image proportions
- section rhythm
- visual hierarchy
- CTA hierarchy
- responsive behavior

The design must remain:

YELLOW + WHITE + BLACK

No blue.

No dark mode.

No unnecessary gradients.

No excessive glassmorphism.

3. CONTRAST

Check all text and backgrounds.

Make sure:

- headings are clearly readable
- body text is readable
- CTA text has sufficient contrast
- form text is readable
- placeholders are readable
- navigation is readable

Fix weak contrast.

4. RESPONSIVE

Review:

- mobile
- tablet
- desktop
- large desktop

Pay particular attention to:

- navbar
- Hero
- service cards
- destinations
- training cards
- language cards
- testimonials
- FAQ
- lead form
- footer

Fix overflow and layout problems.

5. NAVIGATION

Test:

- Accueil
- Services
- Destinations
- Contact
- Services dropdown
- mobile menu
- service page links
- CTA buttons
- footer links

No broken links.

6. CONVERSION

Trace the complete journey:

Visitor
→ Service
→ Information
→ Trust
→ CTA
→ Lead Form
→ Validation
→ Email
→ WhatsApp

Verify that the user always understands what to do next.

7. LEAD FORM

Test:

- empty fields
- invalid email
- invalid phone
- missing project
- successful submission
- loading state
- error state
- success state
- duplicate click
- mobile keyboard behavior

Never expose credentials.

8. INTERNATIONALIZATION

Test:

FR
EN

Check:

- no untranslated UI fragments
- no broken layout caused by longer English text
- navigation
- buttons
- forms
- FAQ
- service pages

9. ACCESSIBILITY

Check:

- semantic headings
- keyboard navigation
- focus states
- buttons
- form labels
- modal behavior
- accordion behavior
- mobile navigation
- alt text

Respect reduced-motion preferences.

10. PERFORMANCE

Check:

- image optimization
- unnecessary client components
- unnecessary JavaScript
- animation overhead
- large assets
- unnecessary dependencies

Optimize where necessary.

11. SEO

Check:

- page titles
- meta descriptions
- H1
- H2 hierarchy
- Open Graph
- sitemap
- robots.txt
- semantic HTML
- alt text
- URLs

12. CODE QUALITY

Remove:

- unused imports
- dead code
- console.log
- duplicated logic
- temporary hacks
- unnecessary comments
- broken types

Run:

- build
- type checking
- lint if available

Fix all meaningful errors.

13. CONTENT QUALITY

Do not invent business information.

Verify that the project does not contain fabricated:

- statistics
- testimonials
- certifications
- partners
- success rates
- visa guarantees
- prices
- contact details

If unsupported content exists, replace it with neutral wording or clearly marked placeholders.

14. FINAL UX REVIEW

Ask yourself:

Can a new visitor understand FutureLearn within five seconds?

Can they find their service within ten seconds?

Can they understand why FutureLearn is credible?

Can they easily contact an advisor?

Can they use the website comfortably on a phone?

Does the website look professionally designed rather than AI-generated?

If any answer is no, fix the relevant issue.

15. FINAL OUTPUT

After completing the audit:

- fix the identified issues
- run the final build
- verify there are no critical errors
- summarize the improvements
- list any remaining configuration that requires real FutureLearn credentials/content

Do not add unnecessary features.

Do not introduce new scope.

The objective is to make the existing V1 polished, coherent and production-ready.
```

---

## The chaining strategy

The important thing is that these prompts are **not five independent prompts**.

They form a controlled development pipeline:

```text
PROMPT 01
Foundation
Architecture
Design system
Components
       ↓
PROMPT 02
Homepage
Complete UI
Responsive experience
       ↓
PROMPT 03
Service pages
Content architecture
SEO pages
       ↓
PROMPT 04
Lead generation
Email
WhatsApp
FR / EN
Interactions
       ↓
PROMPT 05
Senior QA
UX audit
Security
Performance
SEO
Production polish
```

### One important rule when you use Google AI Studio

After each prompt, **do not immediately accept everything just because the AI says it is finished**.

Visually inspect the result, click around, resize the browser, test the navigation, and only then send the next prompt.

That gives you a much better development loop:

**AI builds → you inspect → AI corrects → next phase.**

And I would keep `Projet-FutureLearn.md` and `AI-Instruction.md` permanently attached to the Google AI Studio project, while `Process.md` stays with you as the **execution roadmap**.