# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wedding announcement website for María Paula & Nelson. Single-page React app with scroll-triggered animations built on Vite + TypeScript + Tailwind CSS + Framer Motion.

## Commands

- `yarn dev` — Start dev server (http://localhost:5173)
- `yarn build` — TypeScript check + production build
- `yarn lint` — ESLint
- `yarn preview` — Preview production build

## Architecture

**Stack:** React 19, TypeScript (strict), Vite 7, Tailwind CSS 4, Framer Motion

**Structure:** `src/App.tsx` composes all page sections in order: Hero → OurStory → Details → Schedule → Location → Gallery → RSVP → Footer.

Each section is a standalone component in `src/components/`. Components use Framer Motion's `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations.

**Shared animations:** `src/animations.ts` exports reusable Framer Motion variants (`fadeUp`, `stagger`) used across components.

**Styling:** Tailwind theme is defined in `src/index.css` via `@theme` directive (not in `tailwind.config.js`). Custom fonts: Qwitcher Grypen (headings), Inter (body). Custom text scales and letter-spacing for headings are set in the CSS base layer.

**TypeScript:** Strict mode with `noUnusedLocals` and `noUnusedParameters` enabled. Two configs: `tsconfig.app.json` (app code) and `tsconfig.node.json` (build tooling).
