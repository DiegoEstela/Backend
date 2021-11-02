const socket = io();

socket.on("menssage_client", (data) => {
  render(data);
});

const render = (data) => {
  let html = data
    .map((x) => {
      return `<p>${x.msn}</p> `;
    })
    .join(" ");

  document.querySelector("#caja").innerHTML = html;
};

const addMenssage = () => {
  let objmsn = {
    user: Math.random(),
    msn: document.getElementById("msn").value,
  };

  socket.emit("menssage_client", objmsn);
  return false;
};
