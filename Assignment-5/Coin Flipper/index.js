const coin = document.getElementById("coin");
const resultText = document.getElementById("result");
const tossButton = document.getElementById("tossBtn");

function tossCoin() {
    coin.classList.remove("heads-result", "tails-result");
    coin.classList.add("is-spinning");
    resultText.textContent = "Flipping...";
    tossButton.disabled = true;

    window.setTimeout(() => {
        const outcome = Math.random() < 0.5 ? "Heads" : "Tails";

        coin.classList.remove("is-spinning");
        coin.classList.add(outcome === "Heads" ? "heads-result" : "tails-result");
        resultText.textContent = `Result: ${outcome}`;
        tossButton.disabled = false;
    }, 900);
}

tossButton.addEventListener("click", tossCoin);
