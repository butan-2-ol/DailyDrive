// Example missions for Week 1
const missions = [
    { id: 1, title: "Create first mission card", status: "pending" },
    { id: 2, title: "Add a button to mark complete", status: "pending" },
    { id: 3, title: "Style mission list with CSS", status: "pending" }
];

const missionList = document.getElementById("mission-list");

function renderMissions() {
    missionList.innerHTML = "";
    missions.forEach(mission => {
        const li = document.createElement("li");
        li.textContent = mission.title;

        const btn = document.createElement("button");
        btn.textContent = mission.status === "pending" ? "Mark Complete" : "Completed";
        btn.disabled = mission.status === "complete";
        btn.addEventListener("click", () => markComplete(mission.id));

        li.appendChild(btn);
        missionList.appendChild(li);
    });
}

function markComplete(id) {
    const mission = missions.find(m => m.id === id);
    if (mission) {
        mission.status = "complete";
        renderMissions();
    }
}

// Initial render
renderMissions();
