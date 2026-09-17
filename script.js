let xp = 0;
let level = 1;

const quests = document.querySelectorAll(".quest");
const xpText = document.getElementById("xp-text");
const xpFill = document.getElementById("xp-fill");

quests.forEach(function (quest) {

    quest.addEventListener("click", function () {

        if (quest.classList.contains("completed")) {
            return;
        }

        const reward = Number(quest.dataset.xp);

        xp += reward;

        quest.classList.add("completed");

        updateSystem();
    });
});

function updateSystem() {

    while (xp >= 100) {
        xp -= 100;
        level++;
    }

    xpText.textContent = xp + " / 100 XP";

    xpFill.style.width = xp + "%";
      }
