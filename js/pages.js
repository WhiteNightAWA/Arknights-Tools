document.addEventListener("DOMContentLoaded", function() {


    const pages = document.querySelectorAll(".pages");
    const page_changers = document.querySelectorAll(".page_changer");

    function changePage () {
        setTimeout(function() {
            const page = document.location.href.split("/").pop() + "_page";
            pages.forEach((e) => {

                if (e.classList.contains(page)) {

                    e.classList.remove('hidden');
                    setTimeout(function () {
                        e.classList.remove('visuallyHidden');
                    }, 20);

                } else {
                    e.classList.add('visuallyHidden');
                    setTimeout(function () {
                        e.classList.add('hidden');
                    }, 20)

                }
            },false);
        }, 1)

    }

    changePage()

    page_changers.forEach((changer) => {
        changer.addEventListener("click", () => {
            changePage()
        });
    });





});