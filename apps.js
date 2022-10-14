const url = "http://127.0.0.1:3026/";

const form = document.querySelector("#Formplace");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  document.querySelector("#destinationList").innerHTML = "";
  const data = await getData();
  data.forEach((contact) => showDestinations(contact));

  const contact = {
    Title: document.querySelector("#Title").value,
    Formdate: document.querySelector("#Formdate").value,
    Todate: document.querySelector("#Todate").value,
    Story_tell: document.querySelector("#Story_tell").value,
    Location: document.querySelector("#Location").value,
    Picture: document.querySelector("#Picture").value,
  };

  postData(contact);
});

async function postData(contact) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  document.querySelector("#submitMessage").textContent = "You did it!";
}

//helped from thursday
