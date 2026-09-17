let xp = 0;
let level = 1;

function completeQuest(amount) {
    xp += amount;

    if (xp >= 100) {
        level++;
        xp -= 100;
        alert("LEVEL UP! ⚔️");
    }

    document.getElementById("xp").textContent = xp + " / 100";
    document.getElementById("level").textContent = level;
}

window.completeQuest = completeQuest;
