// let last = 0;
//
// const preload = new createjs.LoadQueue();
// preload.on("progress", (e) => {
//     let progress = Math.floor(e.progress * 100)
//
//     const times = progress - last
//
//     for(let i = 0; i < times; i++){
//         $(".counter").text((i).toString());
//     }
//     last = progress;
// })
//
//
// const files = {
//         "factions": ['Abyssal_Hunters.png', 'Aegir.png', 'Babel.png', 'Blacksteel.png', 'BolFvar.png', 'Columbia.png', 'Followers.png', 'Glasgow.png', 'Higashi.png', 'Iberia.png', 'Karlan_Commercial.png', 'Kazimierz.png', 'Laterano.png', 'Lees_Detective_Agency.png', 'Lungmen.png', 'Lungmen_Guard_Department.png', 'Minos.png', 'Penguin_Logistics.png', 'Rhine_Lab.png', 'Rhodes_Island.png', 'RI_Elite_Op.png', 'RI_Op_A4.png', 'RI_Op_Reserve_A1.png', 'RI_Op_Reserve_A4.png', 'RI_Op_Reserve_A6.png', 'Rim_Billiton.png', 'S.W.E.E.P..png', 'Sami.png', 'Sargon.png', 'Siesta.png', 'Siracusa.png', 'Team_Rainbow.png', 'Ursus.png', 'Ursus_Student_Self-Governing_Group.png', 'Victoria.png', 'Yen.png'],
//         "Upgrade materials": ['mat.svg']
// }
//
// files.forEach((folder) => {
//
//     folder.forEach( (file) => {
//
//         preload.load(`./${folder}/${file}`);
//
//     })
// })
//
// preload.addEventListener("fileload", (e) => {
//     $(".counter").addClass("hide");
//     $(".preloader").addClass("active");
// });
//
//
//
//
//
//
