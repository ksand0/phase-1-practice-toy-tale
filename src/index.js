/*let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  // Toggle form visibility when the 'Add a new toy!' button is clicked
  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // Fetch and display toys when the page loads
  fetchToys();

  // Handle form submission for creating a new toy
  const toyForm = document.querySelector(".add-toy-form");
  toyForm.addEventListener("submit", handleFormSubmit);
});

// Function to fetch toys from the server and render them
function fetchToys() {
  fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => {
      toys.forEach(toy => renderToy(toy));
    });
}

// Function to create a toy card and append it to the DOM
function renderToy(toy) {
  const toyCollection = document.querySelector("#toy-collection");

  const toyCard = document.createElement("div");
  toyCard.className = "card";

  const toyName = document.createElement("h2");
  toyName.innerText = toy.name;

  const toyImage = document.createElement("img");
  toyImage.src = toy.image;
  toyImage.className = "toy-avatar";

  const toyLikes = document.createElement("p");
  toyLikes.innerText = `${toy.likes} Likes`;

  const likeButton = document.createElement("button");
  likeButton.className = "like-btn";
  likeButton.id = toy.id;
  likeButton.innerText = "Like";
  likeButton.addEventListener("click", handleLikeButtonClick);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.id = toy.id;
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", handleDeleteButtonClick);

  toyCard.append(toyName, toyImage, toyLikes, likeButton, deleteButton);
  toyCollection.appendChild(toyCard);
}

// Function to handle the submission of the form to create a new toy
function handleFormSubmit(event) {
  event.preventDefault();
  const toyForm = event.target;
  const toyName = toyForm.name.value;
  const toyImage = toyForm.image.value;

  const newToy = {
    name: toyName,
    image: toyImage,
    likes: 0
  };

  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newToy)
  })
  .then(response => response.json())
  .then(toy => {
    renderToy(toy);
    toyForm.reset();
    toyFormContainer.style.display = "none";
    addToy = false;
  });
}

// Function to handle the like button click event
function handleLikeButtonClick(event) {
  const button = event.target;
  const toyId = button.id;

  const toyCard = button.parentElement;
  const toyLikesElement = toyCard.querySelector("p");
  let likes = parseInt(toyLikesElement.innerText.split(" ")[0]);
  likes++;

  fetch(`http://localhost:3000/toys/${toyId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ likes: likes })
  })
  .then(response => response.json())
  .then(updatedToy => {
    toyLikesElement.innerText = `${updatedToy.likes} Likes`;
  });
}

// Function to handle the delete button click event
function handleDeleteButtonClick(event) {
  const button = event.target;
  const toyId = button.id;

  fetch(`http://localhost:3000/toys/${toyId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
  .then(() => {
    button.parentElement.remove();
  });
}
*/

let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // Fetch and display toys
  fetchToys();

  // Handle form submission for creating a new toy
  const toyForm = document.querySelector(".add-toy-form");
  toyForm.addEventListener("submit", handleFormSubmit);
});

function fetchToys() {
  fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toys => {
      toys.forEach(toy => renderToy(toy));
    });
}

function renderToy(toy) {
  const toyCollection = document.querySelector("#toy-collection");

  const toyCard = document.createElement("div");
  toyCard.className = "card";

  const toyName = document.createElement("h2");
  toyName.innerText = toy.name;

  const toyImage = document.createElement("img");
  toyImage.src = toy.image;
  toyImage.className = "toy-avatar";

  const toyLikes = document.createElement("p");
  toyLikes.innerText = `${toy.likes} Likes`;

  const likeButton = document.createElement("button");
  likeButton.className = "like-btn";
  likeButton.id = toy.id;
  likeButton.innerText = "Like";
  likeButton.addEventListener("click", handleLikeButtonClick);

  toyCard.append(toyName, toyImage, toyLikes, likeButton);
  toyCollection.appendChild(toyCard);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const toyForm = event.target;
  const toyName = toyForm.name.value;
  const toyImage = toyForm.image.value;

  const newToy = {
    name: toyName,
    image: toyImage,
    likes: 0
  };

  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newToy)
  })
  .then(response => response.json())
  .then(toy => {
    renderToy(toy);
    toyForm.reset();
    toyForm.parentElement.style.display = "none";
    addToy = false;
  });
}

function handleLikeButtonClick(event) {
  const button = event.target;
  const toyId = button.id;

  const toyCard = button.parentElement;
  const toyLikesElement = toyCard.querySelector("p");
  let likes = parseInt(toyLikesElement.innerText.split(" ")[0]);
  likes++;

  fetch(`http://localhost:3000/toys/${toyId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ likes: likes })
  })
  .then(response => response.json())
  .then(updatedToy => {
    toyLikesElement.innerText = `${updatedToy.likes} Likes`;
  });
}
