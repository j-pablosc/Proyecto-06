let seat = "";

const selectSeat = (seatCode) => {
  console.log(seatCode);
  seat = seatCode;
  document.getElementById(
    "form-title"
  ).innerHTML = `silla selecionada ${seatCode}`;
};

const createReservation = () => {
  const name = document.getElementById("name").value;
  const cc = document.getElementById("cc").value;
  console.log({ name, cc, seat });

  const tableBody = document.querySelector(".table tbody");
  tableBody.innerHTML += `<tr id="${seat}"><td>${name}</td><td>${cc}</td><td>${seat}</td><td><button class="btn btn-warnig" onclick="deleteReservation('${seat}')">Delete</button>  </td></tr>`;
};

const deleteReservation = (seatCode) => {
  document.getElementById(seatCode).remove();
};
