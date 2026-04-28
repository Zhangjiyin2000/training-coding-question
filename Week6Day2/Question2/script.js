const input = document.querySelector("#user-id-input");
const searchButton = document.querySelector("#search-button");
const message = document.querySelector("#message");
const userTableBody = document.querySelector("#user-table-body");
const postsTableBody = document.querySelector("#posts-table-body");
const todosTableBody = document.querySelector("#todos-table-body");

function createCell(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

function clearTables() {
  userTableBody.innerHTML = "";
  postsTableBody.innerHTML = "";
  todosTableBody.innerHTML = "";
}

function formatAddress(address) {
  return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
}

function renderUser(user) {
  const tr = document.createElement("tr");

  const values = [
    user.name,
    user.email,
    formatAddress(user.address),
    user.phone,
    user.website,
  ];

  values.forEach((value) => {
    tr.appendChild(createCell(value));
  });

  userTableBody.appendChild(tr);
}

function renderPosts(posts) {
  posts.slice(0, 3).forEach((post) => {
    const tr = document.createElement("tr");
    tr.appendChild(createCell(post.title));
    tr.appendChild(createCell(post.body));
    postsTableBody.appendChild(tr);
  });
}

function renderTodos(todos) {
  todos.slice(0, 3).forEach((todo) => {
    const tr = document.createElement("tr");
    tr.appendChild(createCell(todo.title));
    tr.appendChild(createCell(todo.completed ? "true" : "false"));
    todosTableBody.appendChild(tr);
  });
}

function fetchJson(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  });
}

function searchUser() {
  const userId = input.value.trim();

  if (!userId) {
    message.textContent = "Please enter a user ID.";
    clearTables();
    return;
  }

  clearTables();
  message.textContent = "Loading...";

  Promise.all([
    fetchJson(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetchJson(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
    fetchJson(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`),
  ])
    .then(([user, posts, todos]) => {
      if (!user || !user.id) {
        throw new Error("User not found.");
      }

      renderUser(user);
      renderPosts(posts);
      renderTodos(todos);
      message.textContent = "";
    })
    .catch((error) => {
      clearTables();
      message.textContent = error.message;
    });
}

searchButton.addEventListener("click", searchUser);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchUser();
  }
});
