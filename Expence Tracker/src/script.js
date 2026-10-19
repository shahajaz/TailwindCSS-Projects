const blogs = [
  {
    title: "Understanding JavaScript Closures",
    category: "JavaScript",
    content: "Closures allow a function to access variables from its outer scope even after the outer function has executed."
  },
  {
    title: "Mastering Flexbox",
    category: "CSS",
    content: "Flexbox is a one-dimensional layout system that helps align items efficiently."
  },
  {
    title: "Node.js for Beginners",
    category: "Backend",
    content: "Node.js allows JavaScript to run outside the browser using V8 engine."
  },
  {
    title: "Async JavaScript Deep Dive",
    category: "JavaScript",
    content: "Promises, async/await, and event loop are essential concepts for asynchronous programming."
  }
];

const blogContainer = document.getElementById("blogContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

const blogModal = document.getElementById("blogModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

let selectedCategory = "All";

function renderBlogs() {
  blogContainer.innerHTML = "";

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    const matchesSearch =
      blog.title.toLowerCase().includes(searchInput.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  filteredBlogs.forEach(blog => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer";

    card.innerHTML = `
      <h3 class="text-xl font-bold mb-2">${blog.title}</h3>
      <span class="text-sm text-indigo-600 font-semibold">${blog.category}</span>
      <p class="mt-2 text-gray-600">${blog.content.substring(0, 80)}...</p>
    `;

    card.addEventListener("click", () => {
      modalTitle.textContent = blog.title;
      modalContent.textContent = blog.content;
      blogModal.classList.remove("hidden");
      blogModal.classList.add("flex");
    });

    blogContainer.appendChild(card);
  });
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    categoryButtons.forEach(btn =>
      btn.classList.remove("bg-indigo-600", "text-white")
    );

    button.classList.add("bg-indigo-600", "text-white");

    renderBlogs();
  });
});

searchInput.addEventListener("input", renderBlogs);

closeModal.addEventListener("click", () => {
  blogModal.classList.add("hidden");
  blogModal.classList.remove("flex");
});

renderBlogs();
