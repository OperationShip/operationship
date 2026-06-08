# 🚀 OperationShip Web (@operationship/web)

Welcome to the **OperationShip Web** repository—the "Body" and primary Command Center of the OperationShip ecosystem. This is where high-fidelity business logic from the AI Brain meets the visual precision of an interactive architectural interface.

## 🏗️ The Vision: "Business Flight Simulator"
This repository is engineered to provide a high-fidelity visualization of operational reality. It transforms abstract business plans into interactive node-based graphs where users can visualize operational flows and identify bottlenecks before they occur.

---

## 🛠️ Tech Stack & Infrastructure
Built to an industrial standard:
* **Framework**: React 18 with TypeScript.
* **Build Tool**: Vite (configured with base path for GitHub Pages).
* **Graph Engine**: React Flow for industrial-grade node visualization.
* **State Management**: Zustand for a centralized, responsive "Brain" store.
* **Styling**: Tailwind CSS + Glassmorphism for a premium, modern aesthetic.
* **Icons**: Lucide React.

---

## 🔍 Key Systems Overview

### 1. The Interactive Canvas (`App.tsx`)
The primary workspace utilizing a full-screen `ReactFlow` viewport. It features an OLED-black background (`#0A0A0A`) and custom controls for a seamless simulation experience.

### 2. High-Fidelity Nodes (`OperationNode.tsx`)
Custom-built nodes that interpret the **Protocol DNA**. Key features include:
* **Glassmorphism Surfaces**: Semi-transparent backgrounds with `backdrop-blur-xl` and subtle inner borders.
* **Ghost States**: Semi-transparent, dashed-border suggestions for proposed AI nodes.
* **Targeting System**: A specialized `@mention` selector that injects node IDs into the command bar for surgical updates.
* **Tier Gating**: Integrated padlock UI for "Pro" features (Stripe-ready).

### 3. The Centralized Store (`useStore.ts`)
A robust Zustand store managing global application state:
* Real-time node/edge manipulation.
* The `@mention` injection and node selection logic.
* Global UI states for Unit Economics and System Insight panels.

### 4. Continuous Deployment (`deploy.yml`)
Fully automated deployment pipeline via **GitHub Actions**. Every commit to the `main` branch is automatically built, type-checked, and deployed to **GitHub Pages**.

---

## 🔗 Protocol Dependency
This repository is strictly downstream of the **`operationship-protocol`**.
> **Warning**: Do not define business-critical types locally. Always ensure the UI matches the Zod schemas defined in the Protocol repository to prevent data corruption.

---

## 💻 Developer Commands
* `npm install`: Install the industrial-grade dependency tree.
* `npm run dev`: Launch the local development environment.
* `npm run build`: Compile and type-check the production bundle (enforces strict linting).

---

## 📂 Project Structure
* `src/components/`: Modular UI elements (Nodes, Custom Handles).
* `src/store/`: The logic layer for global state management.
* `src/index.css`: Global "Startup Lab" theme and Tailwind injections.
* `.github/workflows/`: Automation scripts for deployment.
![Uploading IMG_20260603_163801.jpg…]()
