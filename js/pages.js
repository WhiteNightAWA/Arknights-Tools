document.addEventListener("DOMContentLoaded", function() {


    const pages = document.querySelectorAll(".pages");
    const page_changers = document.querySelectorAll(".page_changer");

    function changePage () {
        setTimeout(function() {
            const page = window.location.href.split("/").pop() + "_page";
            console.log(page);
            pages.forEach((e) => {
                if (e.classList.contains(page)) {
                    console.log(e.classList[0]+"=> block")
                    e.style.display = "block";
                } else {
                    console.log(e.classList[0]+"=> none")
                    e.style.display = "none";
                }
            });
        }, 1)

    }

    changePage()

    page_changers.forEach((changer) => {
        changer.addEventListener("click", () => {
            changePage()
        });
    });





});