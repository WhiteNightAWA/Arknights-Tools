
document.addEventListener("DOMContentLoaded", function(){
    const point = document.querySelector(".point");
    const cursor = document.querySelector(".cursor");
    const page = document.querySelector("body");
    const canClick = document.querySelectorAll(".canClick");


    document.addEventListener("mousemove", e => {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
        point.style.top = e.pageY + "px";
        point.style.left = e.pageX + "px";
    });

    document.addEventListener("click", e => {
        let span = document.createElement("span");
        span.classList.add("click");
        span.style.top = e.pageY + "px"
        span.style.left = e.pageX + "px";
        page.appendChild(span);

        setTimeout(() => {
            span.remove()
        }, 500)
    });


    canClick.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.id = "canClick";
        })
        link.addEventListener("mouseleave", () => {
            cursor.id = null;
        })
    });
});

