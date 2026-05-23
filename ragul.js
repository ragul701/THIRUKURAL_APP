console.log("CONNECTED");
alert("JS CONNECTED 🔥");

let fullData = [];

fetch("kural.json")
  .then(res => res.json())
  .then(data => {
    console.log("JSON LOADED ✅");
    fullData = data;
    createButtons();
  })
  .catch(err => console.log("ERROR:", err));

function createButtons() {
  const listDiv = document.getElementById("athigaramList");

  fullData.forEach(item => {
    const btn = document.createElement("button");
    btn.innerText = item.athigaram + ". " + item.name;

    btn.onclick = () => showKurals(item.athigaram);

    listDiv.appendChild(btn);
  });
}

function showKurals(num) {
  const div = document.getElementById("kuralDisplay");
  div.innerHTML = "";

  const selected = fullData.find(a => a.athigaram === num);

  if (!selected) return;

  selected.kurals.forEach((k, i) => {
    const p = document.createElement("p");
    p.innerText = (i + 1) + ". " + k;
    div.appendChild(p);
  });
}

let data = [];

fetch("kural.json")
  .then(res => res.json())
  .then(result => {
    data = result;
    createButtons();
  });

// 👉 buttons create
function createButtons() {
  const div = document.getElementById("athigaramList");

  data.forEach(item => {
    const btn = document.createElement("button");
    btn.innerText = item.athigaram + ". " + item.name;

    btn.onclick = () => showKurals(item.athigaram);

    div.appendChild(btn);
  });
}

// 👉 click → show kurals
function showKurals(num) {
  const display = document.getElementById("kuralDisplay");
  display.innerHTML = "";

  const selected = data.find(a => a.athigaram === num);

  selected.kurals.forEach((kural, i) => {
    const p = document.createElement("p");
    p.innerText = (i + 1) + ". " + kural;
    display.appendChild(p);
  });
}