const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const kitten = document.getElementById("kitten");
const happinessFill = document.getElementById("happiness-fill");
const happinessPercent = document.getElementById("happiness-percent");

let totalTasks = 0;
let completedTasks = 0;

function updateHappiness() {
  const percent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  happinessFill.style.width = `${percent}%`;
  happinessPercent.textContent = `${percent}%`;
}

function triggerKittenAnimation() {
  kitten.classList.remove("kitten-happy");
  // Force reflow so the animation can replay
  void kitten.offsetWidth;
  kitten.classList.add("kitten-happy");
}

function onCheckboxChange(checkbox) {
  const item = checkbox.closest(".todo-item");
  const wasCompleted = item.classList.contains("completed");

  if (checkbox.checked && !wasCompleted) {
    completedTasks += 1;
    item.classList.add("completed");
    triggerKittenAnimation();
  } else if (!checkbox.checked && wasCompleted) {
    completedTasks -= 1;
    item.classList.remove("completed");
  }

  if (completedTasks < 0) {
    completedTasks = 0;
  }

  updateHappiness();
}

function createTodoItem(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.addEventListener("change", () => onCheckboxChange(checkbox));

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.className = "todo-remove-btn";
  removeBtn.setAttribute("aria-label", "Remove task");
  removeBtn.textContent = "✕";
  removeBtn.addEventListener("click", () => {
    const wasCompleted = li.classList.contains("completed");
    if (wasCompleted) {
      completedTasks = Math.max(0, completedTasks - 1);
    }
    totalTasks = Math.max(0, totalTasks - 1);
    li.remove();
    showOrHideEmptyState();
    updateHappiness();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);

  return li;
}

function showOrHideEmptyState() {
  if (list.children.length === 0) {
    const empty = document.createElement("li");
    empty.className = "todo-empty-state";
    empty.textContent = "No tasks yet. Add your first one to make the kitten happy!";
    list.appendChild(empty);
  } else if (list.children.length > 1) {
    const first = list.firstElementChild;
    if (first && first.classList.contains("todo-empty-state")) {
      first.remove();
    }
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  if (list.firstElementChild && list.firstElementChild.classList.contains("todo-empty-state")) {
    list.firstElementChild.remove();
  }

  const item = createTodoItem(text);
  list.appendChild(item);

  totalTasks += 1;
  updateHappiness();

  input.value = "";
  input.focus();
});

// Initial state
showOrHideEmptyState();
updateHappiness();
