function find_target (classList, find_for) {
    let tf = false;
    classList.forEach((c) => {
        if (c.includes(find_for)) {
            tf = c
        }
    });
    return tf;
}

document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".items");


    document.querySelectorAll(".add_control").forEach((e) => {

        e.addEventListener("click", (eve) => {

            console.log(eve.target.classList);
            const target = find_target(eve.target.classList, "_control_");
            const text = document.querySelector(`.${target.replace("add_", "i_")}`);
            text.content += 1;
        });
    });







});