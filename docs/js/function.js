


document.addEventListener("DOMContentLoaded", function(){
    const point = document.querySelector(".point");
    const cursor = document.querySelector(".cursor");
    const canClick = document.querySelectorAll("span")

    console.log(cursor);

    document.addEventListener("mousemove", e => {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
        point.style.top = e.pageY + "px";
        point.style.left = e.pageX + "px";
    })

    document.addEventListener("click", () => {
        const click = document.createElement("div")
        click.classList.add("click");

    })


    canClick.forEach(link => {
        link.addEventListener("mouseover", () => {
            cursor.id = "canClick";
        })
        link.addEventListener("mouseleave", () => {
            cursor.id = null;
        })
    })

});

