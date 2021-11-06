let last = "";
let loaded = "";
const preload = new createjs.LoadQueue();
$(".preloader").attr('data-content','Loading');
preload.on("progress", e => {
    let progress = Math.floor(e.progress * 100);
    $(".counter").text(progress)
    let add = `Loading: ${Object.keys(e.currentTarget._loadedRawResults).pop()}`;
    if (add !== last) {
        loaded = add + "\n" + loaded;
    }
    last = add;
    ($(".load_log")).text(loaded);
    (document.querySelector(".preloader .bar")).style.width = `${progress}%`
    if (progress === 100) {
        ($(".preloader")).attr('data-content','DONE');
        (document.querySelector(".counter")).classList.add("hide");
        document.querySelector(".preloader").classList.add("active");
        document.querySelector(".preloader .bar").classList.add("hide");
        document.querySelector(".load_log").classList.add("hide");
    }
})


const files = {
    "background": ['rate0_item_bg.png', 'rate1_item_bg.png', 'rate2_item_bg.png', 'rate3_item_bg.png', 'rate4_item_bg.png'],
    "factions": ['Abyssal_Hunters.png', 'Aegir.png', 'Babel.png', 'Blacksteel.png', 'BolFvar.png', 'Columbia.png', 'Followers.png', 'Glasgow.png', 'Higashi.png', 'Iberia.png', 'Karlan_Commercial.png', 'Kazimierz.png', 'Laterano.png', 'Lees_Detective_Agency.png', 'Lungmen.png', 'Lungmen_Guard_Department.png', 'Minos.png', 'Penguin_Logistics.png', 'Rhine_Lab.png', 'Rhodes_Island.png', 'RI_Elite_Op.png', 'RI_Op_A4.png', 'RI_Op_Reserve_A1.png', 'RI_Op_Reserve_A4.png', 'RI_Op_Reserve_A6.png', 'Rim_Billiton.png', 'S.W.E.E.P..png', 'Sami.png', 'Sargon.png', 'Siesta.png', 'Siracusa.png', 'Team_Rainbow.png', 'Ursus.png', 'Ursus_Student_Self-Governing_Group.png', 'Victoria.png', 'Yen.png'],
    "Upgrade_materials": ['mat.svg'],
    "items": ['Orirock.png'],
    "others": ['cursor.png', 'cursor.svg'],
}

for (const [key, value] of Object.entries(files)) {
    value.forEach( (file) => {
        preload.loadFile(`./data/img/${key}/${file}`);
    })
}





