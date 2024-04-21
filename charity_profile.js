document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

    // Create form container and form
    const formContainer = document.createElement("div");
    const form = document.createElement("form");
    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <input type="submit" value="Submit">
    `;
    formContainer.appendChild(form);

    // Add event listeners to volunteer buttons
    const volunteerButtons = document.querySelectorAll("[id^='volunteerButton']");
    volunteerButtons.forEach(button => {
        button.addEventListener("click", function() {
            console.log(`${button.id} clicked`);
            formContainer.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add event listeners to scroll buttons
    const scrollButton1 = document.getElementById("volunteerButton1");
    scrollButton1.addEventListener("click", function() {
        console.log("Scroll button 1 clicked");
        formContainer.scrollIntoView({ behavior: 'smooth' });
    });

    const scrollButton2 = document.getElementById("volunteerButton2");
    scrollButton2.addEventListener("click", function() {
        console.log("Scroll button 2 clicked");
        formContainer.scrollIntoView({ behavior: 'smooth' });
    });

    const scrollButton3 = document.getElementById("volunteerButton3");
    scrollButton3.addEventListener("click", function() {
        console.log("Scroll button 3 clicked");
        formContainer.scrollIntoView({ behavior: 'smooth' });
    });

    document.body.appendChild(formContainer);

    const additionalInfo = document.getElementById("additionalInfo");
    additionalInfo.addEventListener("mouseover", function() {
        additionalInfo.textContent = "Entering your personal information will help finding a charity near you.";
    });
    additionalInfo.addEventListener("mouseout", function() {
        additionalInfo.textContent = "Hover over this text for additional details.";
    });
});
