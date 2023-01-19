let form = document.querySelector(".form");
let btnDelete = document.querySelector(".btnDelete");
let btnCreat = document.querySelector(".btnCreat")

form.addEventListener("submit", (e) => {
  e.preventDefault;
  fetch("http://localhost:3000/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: e.target[0].value,
      price: e.target[1].value,
      memory: e.target[2].value,
    }),
  })
    .then((res) => {
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
    })
    .catch((err) => alert(err));
});
btnDelete.addEventListener("click", () => {
  fetch("http://localhost:3000/cards/1", {
    method: "DELETE",
  })
    
    .catch((err) => alert("ошибка", err));
});
btnCreat.addEventListener("click", () =>{
    fetch("http://localhost:3000/cards/1",{
        method: "POST",
    })
    .then(() => alert("вы успешно отправили"))
} )

