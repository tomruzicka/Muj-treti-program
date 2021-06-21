console.log("%cTady není řešení!", "color: red; font-size:20px;");

// Select number range
let selectNum = document
  .querySelector("#number")
  .addEventListener("change", (e) => {
    let selectNum = e.target.value;

    // Random guess number
    let randomGuessNum = Math.trunc(Math.random() * selectNum) + 1;

    // User guess number
    let guessNumUser = document
      .querySelector(".number-guess")
      .addEventListener("change", (e) => {
        return (guessNumUser = e.target.value);
      });

    // Second Button
    let guessBtn = document
      .querySelector(".btn-guess")
      .addEventListener("click", (e) => {
        e.preventDefault();

        if (Number(guessNumUser) === randomGuessNum) {
          alert(`Vyhrál jsi! Myšlené číslo je ${randomGuessNum}`);
          document.location.reload(true);
        } else if (Number(guessNumUser) > randomGuessNum) {
          alert("Myšlené číslo je menší. Zkus to ještě jednou!");
        } else if (Number(guessNumUser) < randomGuessNum) {
          alert("Myšlené číslo je větší. Zkus to ještě jednou!");
        }
      });

    // First Button
    let firstBtn = document
      .querySelector(".btn-potvrdit")
      .addEventListener("click", (e) => {
        e.preventDefault();

        // Add new text
        const text2 = document.querySelector(".text2");
        text2.innerHTML = `Myslím si číslo od 1 do ${selectNum}, zkus ho uhodnout.`;

        // Add new input + button
        let group2 = document.querySelector(".group2");
        group2.style.display = "block";

        document.querySelector("#number").value = "";
      });
  });

// Active first Button
let activeBtn = document
  .querySelector(".number")
  .addEventListener("change", (e) => {
    if (document.querySelector(".number").value.length == 0) {
      document.querySelector(".btn-potvrdit").disabled = true;
    } else {
      document.querySelector(".btn-potvrdit").disabled = false;
    }
  });

// Active second Button
let activeBtn2 = document
  .querySelector(".number-guess")
  .addEventListener("change", (e) => {
    if (document.querySelector(".number-guess").value.length == 0) {
      document.querySelector(".btn-guess").disabled = true;
    } else {
      document.querySelector(".btn-guess").disabled = false;
    }
  });

console.log(
  "%c© Tom Růžička, www.virtualniajtak.cz, www.tomruzicka.cz",
  "color: grey; font-size:20px;"
);
