let data = document.getElementById("d1");
let encode = document.getElementById("btnEncode");
let encrypt = document.getElementById("btnEncrypt");
let display = document.getElementById("i1");
let form = document.getElementById("form1");

function Encode() {
  let l = data.value;
  console.log(l);
  l = btoa(l);
  display.value = l;
  console.log(l);
}
function Encrypt() {
  let l = display.value.split("");
  for (var i = 0; i < l.length; i++) {
    if (l[i] == l[i].toLowerCase()) l[i] = l[i].toUpperCase();
    else l[i] = l[i].toLowerCase();
  }
  display.value = l.join("");
  console.log(l);
}

encode.addEventListener("click", Encode);
encrypt.addEventListener("click", () => {
  Encrypt();
});

form.addEventListener("submit", () => {
  Encode();
  Encrypt();
});
