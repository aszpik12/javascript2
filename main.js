window.addEventListener("load", init);
function init() {
  const tartalomelemmaskentEZ = document.querySelectorAll(".tartalom");
  const kep = document.getElementById("myImg").src = "hackanm.gif";
  console.log(tartalomelemmaskentEZ);

  const etelLista = ["spagetti", "mustáros hús", "szőlő"];
  etelekkiras(etelLista, tartalomelemmaskentEZ);
  kepkimutatas(kep)
}

function etelekkiras(etelLista, tartalomelemmaskentEZ) {
  let szovegek = "";
  szovegek += "<ul>";
  for (let i = 0; i < etelLista.length; i++) {
    let resz = etelLista[i];
    szovegek += "<li>" + resz + "</li>";
  }
  szovegek += "</ul>";
  tartalomelemmaskentEZ[0].innerHTML = szovegek;
}

<img/>
const img = document.querySelector("img");
img.src = "https://picsum.photos/200/301"

