document.addEventListener("DOMContentLoaded", function() {


    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");

    sidebar.addEventListener("mouseover", () => {
        if (!sidebar.classList.contains("open")) {
            setTimeout(() => {

                if (sidebar.matches(":hover")) {
                    sidebar.classList.add("open");
                    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
                }
            }, 500)
        }
    });


    sidebar.onmouseleave = (e) => {

        if (document.elementFromPoint(e.clientX, e.clientY).classList.contains("click")) {
            return;
        }

        sidebar.classList.remove("open");
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }

    console.log("sidebar.js ok");

});
