document.addEventListener("DOMContentLoaded", function() {

    const selectors = document.querySelectorAll(".selected");

    selectors.forEach((e) => {
        let option_to, optionsContainer;
        e.classList.forEach((c) => {
            if (c.startsWith("to_")) {
                option_to = c.replace("to_", "")
                optionsContainer = document.querySelector(`.${option_to}`)
            }
        })

        e.addEventListener("click", () => {
            optionsContainer.classList.toggle("active")
        })

        const optionsContainersDiv = document.querySelectorAll(`.${option_to} div`)
        optionsContainersDiv.forEach((o) => {
            o.addEventListener("click", () => {
                document.querySelector(`.to_${option_to} p`).innerText = o.innerText;
                optionsContainer.classList.remove("active")
            })
        })
    })




});