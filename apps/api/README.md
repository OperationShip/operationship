# 🧠 OperationShip API (@operationship/api)

Welcome to the **OperationShip API**—the "Brain" and cognitive engine of the OperationShip ecosystem. This repository serves as the strict middleware between the visual frontend (`operationship-web`) and our underlying Large Language Model (Google Gemini).

## 🏗️ The Vision: "The Architect's Engine"
Standard AI chatbots are conversational, polite, and often overly optimistic. OperationShip is not a chatbot. This API forces the AI to operate strictly as a systems architect. It strips away conversational pleasantries and forces the AI to output pure, structured data based on the brutal reality of business mechanics.

---

## 🛠️ Tech Stack & Infrastructure
Built for speed, validation, and strict LLM control:
* **Runtime**: Node.js with Express.
* **Language**: TypeScript (for compile-time safety).
* **Intelligence**: `@google/generative-ai` (Gemini Pro).
* **Validation**: Zod (ready for integration with `@operationship/protocol`).

---

## 🔍 Key Systems Overview

### 1. The Server (`src/index.ts`)
A lightweight Express server that acts as the central nervous system.
* **Context Injection**: It receives the *current state* of the user's graph from the frontend.
* **Prompt Assembly**: It stitches the user's command together with the current graph and the Master Constitution.
* **Sanitization**: It actively strips away markdown formatting (like ` \`\`\`json `) to ensure the frontend receives raw, parsable JSON.

### 2. The Constitution (`src/architect.ts`)
This is the most critical file in the repository. It contains the `SYSTEM_PROMPT` which enforces our 4 Core Rules:
1. **Brutal Realism**: Forces the AI to generate high-risk nodes and bottlenecks instead of being a "hype-man."
2. **Surgical Updates**: Instructs the AI to listen for `@node_id` mentions to edit specific parts of a business without destroying the rest of the canvas.
3. **Ghost Protocol**: Ensures that new AI suggestions are strictly categorized as "ghost" nodes so the frontend renders them transparently.
4. **Unit Economics**: Mandates that every generated node includes realistic monthly costs and 0-10 risk scores.

---

## 🔗 Ecosystem Flow
1. **The Body**: User types *"Add a marketing node"* in `operationship-web`.
2. **The Bridge**: The web app sends a POST request to this API containing the text and the current map.
3. **The Brain**: This API injects the Constitution, calls Gemini, and receives a structural map.
4. **The Shield**: The API parses the string into JSON (soon to be validated by `operationship-protocol`) and returns it to the web app.
5. **The Render**: The frontend renders the new node.

---

## 💻 Developer Commands
To run this intelligence layer locally, you must have a Google Gemini API Key.

1. `npm install`: Install the intelligence dependencies.
2. **Create a `.env` file**: Add your key as `GEMINI_API_KEY=your_key_here`.
3. `npm run dev`: Boot up the hot-reloading development server via `tsx`.
4. `npm run build`: Compile the TypeScript down to the `dist/` folder for production hosting.

---

## 📂 Project Structure
* `src/index.ts`: Express routing and LLM execution.
* `src/architect.ts`: The System Prompt and prompt engineering logic.
* `dist/`: The compiled production output.
