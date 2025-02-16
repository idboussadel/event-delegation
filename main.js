const createNewBloc = () => {
  const block = document.createElement("div");
  block.className = "block";
  block.innerHTML = `
        <h1>
           block - ${index}
        </h1>
        <Button class="add-btn">
            add
        </Button>
        <Button class="remove-btn">
            remove
        </Button>
    `;
  document.body.appendChild(block);
};

const addbtns = document.querySelectorAll(".add-btn");
let index = 1;

// Solution: Use Event Delegation
// Instead of attaching event listeners to individual buttons
// Attach a single event listener to a parent element (like document.body)
// And use event bubbling to handle clicks on dynamically added buttons.
document.body.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-btn")) {
    index++;
    createNewBloc();
  }
  if (event.target.classList.contains("remove-btn")) {
    index--;
    event.target.parentElement.remove();
  }
});
