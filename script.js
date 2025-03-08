function showSidebar() {
    const show = document.querySelector('#ul');
    show.style.display = 'block'

}

function hideSidebar() {
    const show = document.querySelector('#ul');
    show.style.display = 'none'
}

document.querySelector(".book-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.querySelector('input[type="email"]').value.trim();
    let phone = document.querySelector('input[type="text"]').value.trim();
    let date = document.querySelector('input[type="date"]').value.trim();
    
    // Email validation regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (phone === "") {
        alert("Please enter your telephone number.");
        return;
    }

    if (date === "") {
        alert("Please select a date.");
        return;
    }

    alert("Booking Successful!");
});