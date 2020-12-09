let counter = 0;

const displayNumber = document.getElementById("value");
const btns = document.querySelectorAll(".btn");


btns.forEach((botons) => {
    botons.addEventListener("click", function(e) {

        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            counter--;

        } else if (styles.contains("increase")) {
            counter++;
        } else if (styles.contains("reset")) {
            counter = 0;

        }
        if (counter > 0) {

            displayNumber.style.color = "green";
        } else if (counter < 0) {
            displayNumber.style.color = "red";
        } else {
            displayNumber.style.color = "black";
        }
        displayNumber.textContent = counter;

    });
});