# Kawaii Kitten To‑Do
A simple, pastel‑themed to‑do list where completing tasks makes a tiny pastel‑purple kitten happier. Each completed task increases a happiness meter and triggers a cute animation: the kitten bounces, wags its tail, **blinks**, and **smiles**.

## Features
- **To‑do list**
  - Add new tasks
  - Mark tasks as completed / uncompleted
  - Remove tasks
- **Kitten happiness meter**
  - Progress bar fills as you complete tasks
  - Happiness percentage updates live
- **Kawaii kitten animation**
  - Pastel‑purple, kawaii‑style kitten in the upper‑left
  - Blinks and smiles when a task is completed
  - Tail swish and bounce animation tied to happiness events
- **Pastel light theme**
  - Soft pinks, lilacs, and cream
  - Clean, simple layout: kitten on the left, tasks on the right
## Tech Stack
- **HTML** – page structure
- **CSS** – layout, pastel theme, kitten drawing, animations
- **JavaScript** – to‑do logic and happiness meter updates
  
## Getting Started
1. **Clone the repo**
   ```bash
   git clone https://github.com/<nehirozsari>/<To-Do-List>.git
   cd <To-Do-List>
Open the app
Just open index.html in your browser (double‑click it or drag it into a browser window).
No build step or server is required.

**How It Works**
The to‑do list is managed in script.js.
Each task is a list item with a checkbox and delete button.
When a task is checked, the total completed count updates and the happiness percentage is recalculated.
The happiness meter is a simple progress bar:
Width = completed tasks / total tasks, shown as a percentage.
The kitten animation is pure CSS:
The JavaScript toggles a kitten-happy class on each completion.
That class triggers a bounce, tail swish, blink, and smile using CSS keyframes.
Customization
Change colors / theme: Edit style.css (CSS variables at the top for quick tweaks).
Change kitten style: Update the .kitten, .face, .eye, .cheek, .body, and .tail rules in style.css.
Change behavior: Modify script.js to adjust how much each task affects happiness or when animations trigger.

**License**
MIT – feel free to use, modify, and share.
