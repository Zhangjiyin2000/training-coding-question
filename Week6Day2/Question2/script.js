// JavaScript code goes here
const input = document.querySelector("#user-id-input");
const searchButton = document.querySelector("#search-button");
const message = document.querySelector("#message");
const userTableBody = document.querySelector("#user-table-body");
const postsTableBody = document.querySelector("#posts-table-body");
const todosTableBody = document.querySelector("#todos-table-body");

function clearTables() {
  userTableBody.innerHTML = "";
  postsTableBody.innerHTML = "";
  todosTableBody.innerHTML = "";
}

function fetchJson(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  });
}

function createACell(value) {
  const td = document.createElement("td");
  td.textContent = value;
  console.log(value);
  return td;
}

function createARow(values, tbody) {
  const tr = document.createElement("tr");
  values.forEach((value) => {
    tr.appendChild(createACell(value));
  });
  tbody.appendChild(tr);
}

function renderUser(item) {
  const address = item.address;
  const displayedAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  const values = [
    item.name,
    item.email,
    displayedAddress,
    item.phone,
    item.website,
  ];
  createARow(values, userTableBody);
}

function renderPosts(posts) {
  posts.slice(0, 3).forEach((post) => {
    const values = [post.title, post.body];
    createARow(values, postsTableBody);
  });
}

function renderTodos(todos) {
  todos.slice(0, 3).forEach((todo) => {
    const values = [todo.title, todo.completed];
    createARow(values, todosTableBody);
  });
}

function searchByUserId() {
  const id = input.value.trim();

  if (!id) {
    message.textContent = "Please enter a user ID.";
    clearTables();
    return;
  }
  clearTables();
  message.textContent = "Loading...";

  Promise.all([
    fetchJson(`https://jsonplaceholder.typicode.com/users/${id}`),
    fetchJson(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
    fetchJson(`https://jsonplaceholder.typicode.com/todos?userId=${id}`),
  ])
    .then(([user, posts, todos]) => {
      if (!user || !user.id) {
        throw new Error("User not found.");
      }
      renderUser(user);
      renderPosts(posts);
      renderTodos(todos);
      //   input.value = "";
      message.textContent = "";
    })
    .catch((error) => {
      console.log(error);
      clearTables();
      message.textContent = error.message;
    });
}

searchButton.addEventListener("click", searchByUserId);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchByUserId();
  }
});
