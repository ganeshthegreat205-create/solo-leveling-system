let xp = Number(localStorage.getItem("xp"));
let level = Number(localStorage.getItem("level"));

if (!Number.isFinite(xp)) {
    xp = 0;
}

if (!Number.isFinite(level) || level < 1) {
    level = 1;
}

let completedQuests =
    JSON.parse(localStorage.getItem("completedQuests")) || {};

const today = new Date().toDateString();

function completeQuest(questName, amount) {

    if (completedQuests[questName] === today) {
        alert("QUEST ALREADY COMPLETED ⚔️");
        return;
    }

    xp += Number(amount);

    if (xp >= 100) {
        level++;
        xp -= 100;

        alert("LEVEL UP! ⚔️");
    }

    completedQuests[questName] = today;

    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem(
        "completedQuests",
        JSON.stringify(completedQuests)
    );

    updateSystem();
}

function updateSystem() {
    document.getElementById("xp").textContent =
        xp + " / 100";

    document.getElementById("level").textContent =
        level;
}

window.completeQuest = completeQuest;

updateSystem();
