const AllCommands = [{
    name: "Anime",
    description: "Search any anime or get a random Anime suggestion",
    usage: ".anime <Name of Anime>",
    sfw: true,
    nsfw: false
}, {
    name: "Manga",
    description: "Search any manga/comic",
    usage: ".manga <Name of Manga / Comic>",
    sfw: false,
    nsfw: true
}];
let acc = document.getElementsByClassName("accordion");
let pp = document.getElementsByClassName("pp");
let commands = document.getElementsByClassName("commands")[0];
for (let a = 0; a < AllCommands.length; a++) {
    let point = AllCommands[a];
    let elem = document.createElement("DIV");
    let data = `<button class="accordion">${point.name}</button><p>`;
    if (point.nsfw) {
        data += `<span class="nsfw">NSFW</span>`;
    }
    if (point.sfw) {
        data += `<span class="sfw">SFW</span>`;
    }
    data += `<br> ${point.description} <br>`;
    data += `Usage: <code>${point.usage}</code>`;
    elem.innerHTML = data;
    elem.className = "panel";
    commands.appendChild(elem);
    elem = document.createElement("DIV");
    elem.className = "spc";
    commands.appendChild(elem);
}
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}