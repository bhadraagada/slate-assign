# Slate Dashboard UI

A responsive, role-based dashboard application for the Slate app. This project is built using Next.js 13 (App Router), Tailwind CSS, Zustand (with persist middleware), and Recharts. It caters to multiple user roles (Admin, School, Parent, Student) and includes features such as authentication, state management, data visualization, and a component-based architecture.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Dependencies](#dependencies)
- [Contact](#contact)

---

## Overview

The Slate Dashboard UI is a modern, responsive dashboard application that provides different interfaces based on the user role. The application includes the following dashboards:

- **Admin Dashboard:** Overview of schools, students, parents, and achievements, along with charts for data insights.
- **School Dashboard:** Student data tables, statistics, and charts for school-specific insights.
- **Parent Dashboard:** Parent profile information and a list of connected students with their achievements.
- **Student Dashboard:** Personal profile, performance trends, achievements, and notifications.

This project demonstrates a clean, modular, and scalable front-end architecture ideal for a production-grade application.

---

## Features

- **Role-Based Access:** Different UI views for Admin, School, Parent, and Student roles.
- **Responsive Design:** Mobile-first design using Tailwind CSS ensuring usability across devices.
- **Dynamic Data Visualization:** Interactive charts built with Recharts.
- **State Management:** Simple authentication and state handling using Zustand with persisted state.
- **Component-Based Architecture:** Reusable components (e.g., Navbar, Sidebar, Card, Button, Select, and various chart components).
- **Centralized Data Management:** Dummy data provided via a central `data.ts` file for easy updates.

---

## Project Structure

```bash
.
├── .next/                      # Auto-generated output from Next.js builds
├── node_modules/               # Auto-installed project dependencies
├── public/                     # Static files (images, etc.)
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── sign-in/
│   │   │   ├── sign-up/
│   │   │   └── layout.tsx      # Layout specific to auth pages
│   │   ├── (dashboard)/
│   │   │   ├── parent/
│   │   │   ├── school/
│   │   │   ├── student/
│   │   │   └── layout.tsx      # Layout used by dashboard pages
│   │   ├── page.tsx            # Main entry (home/index) page
│   │   ├── favicon.ico
│   │   ├── globals.css         # Global stylesheet
│   │   └── layout.tsx          # Global layout for Next.js App Router
│   ├── components/
│   │   ├── ui/
│   │   │   ├── achievement-list.tsx
│   │   │   ├── achievements-chart-student.tsx
│   │   │   ├── admin-dashboard-charts.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── data-table.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── notification-card.tsx
│   │   │   ├── parent-profile.tsx
│   │   │   ├── performance-chart.tsx
│   │   │   ├── school-dashboard-charts.tsx
│   │   │   ├── search-input.tsx
│   │   │   ├── select.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── student-profile.tsx
│   │   └── student-table.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx      # Custom hook for mobile detection
│   │   └── use-toast.ts        # Custom hook for toast notifications
│   ├── lib/
│   │   └── utils.ts            # Utility/helper functions
│   └── store/
│       ├── authStore.ts        # Authentication store, e.g., Zustand or Redux
│       └── data.ts            # Data store or initial data for the app
├── .gitignore
├── bun.lockb                   # Lock file for Bun
├── components.json             # Possibly a config or storybook-like file
├── data.ts                     # Could be a top-level data or config file
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md                   # You are here!
```

---

## Getting Started

### Prerequisites

- Node.js (or Bun as indicated by your lock file)
- npm or yarn (if using Node)
- A modern browser to run the app

### Installation

```bash
# Clone the repository
git clone https://github.com/bhadraagada/slate-assign.git

# Navigate into the directory
cd your-repo-name

# Install dependencies
# If using npm:
npm install

# If using Bun:
bun install
```

### Running Locally

```bash
# If using npm:
npm run dev

# If using Bun:
bun dev
```

This will start a local development server. By default, open http://localhost:3000 to view the application in your browser (check your terminal for the exact port).

---

## Dependencies

This project uses a variety of libraries and frameworks to provide UI components, state management, form handling, and more. Below is a short overview of the **key** dependencies; for the full list and exact versions, please refer to [`package.json`](./package.json).

### Core Framework & Libraries

- **Next.js** (`next`): The primary React framework used for server-side rendering and routing.
- **React** / **React-DOM**: Core React libraries for building components.
- **TypeScript**: Provides static type-checking to catch errors early and improve developer experience.

### UI & Styling

- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **shadcn-ui**: A prebuilt collection of accessible and customizable UI components that leverages [Radix UI primitives](https://www.radix-ui.com/). This library helps streamline consistent UI patterns using React and Tailwind CSS.
- **Recharts**: A charting library for rendering data visualizations.
- **clsx / tailwind-merge**: Utility libraries for conditionally merging CSS classes.

### State Management & Form Handling

- **Zustand**: A lightweight state-management solution for React applications.
- **React Hook Form**: A performant, flexible library for form validations and handling.
- **@hookform/resolvers**: Zod/other schema resolvers for `react-hook-form` to validate forms with minimal setup.

### Utilities & Helpers

- **date-fns**: Utility functions for date manipulation and formatting.
- **embla-carousel-react**: A lightweight library for creating carousels or image sliders.
- **zod**: A TypeScript-friendly schema validation library.
- **sonner** / **@radix-ui/react-toast**: Toast notification libraries to provide user feedback.

### Other Notable Packages

- **Lucide React**: A collection of SVG icons for use in React components.
- **cmdk**: An accessible command menu component for React apps.

For installation and usage details, run:

```bash
# If using npm
npm install

# If using Bun
bun install
```

---

## Contact

If you have any questions, suggestions, or just want to reach out, feel free to contact me:

- **Contact**: [+91 74101 54548](tel:+917410154548)
- **Email**: [Here](mailto:bhadraagada@gmail.com)
- **LinkedIn**: [Here](https://www.linkedin.com/in/bhadra-g/)
