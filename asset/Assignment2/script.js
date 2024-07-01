document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 4; // Adjust this count based on the number of images
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    document.getElementById('date').textContent = new Date().toLocaleDateString();
});

function validateForm() {
    const name = document.forms[0]["name"].value;
    const email = document.forms[0]["email"].value;
    const message = document.forms[0]["message"].value;
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
