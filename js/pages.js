document.addEventListener("DOMContentLoaded", function() {


    const pages = document.querySelectorAll(".pages");
    const page_changers = document.querySelectorAll(".page_changer");

    function changePage () {
        setTimeout(function() {
            const page = window.location.href.split("/").pop() + "_page";
            console.log(page);
            pages.forEach((e) => {
                if (e.classList.contains(page)) {
                    e.classList.add("in");
                    e.classList.add("show");
                    e.classList.add("hidden");
                    setTimeout(function() {
                            e.classList.remove("in");
                        }, 1000)

                } else {
                    e.classList.add("out");
                    e.classList.remove("show");
                    e.classList.add("hidden");
                    setTimeout(function() {
                            e.classList.remove("out");
                        }, 1000)
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