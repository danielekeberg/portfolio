function calculateTimes() {
    const input = document.getElementById("timeInput").value;
    if (!input) {
        alert("Please enter a valid time.");
        return;
    }

    let baseTime = new Date(input);
    let results = [];

    for (let i = 1; i <= 3; i++) {
        baseTime.setHours(baseTime.getHours() + 18);
        results.push(baseTime.toLocaleString());
    }

    let resultList = document.getElementById("timerResults");
    resultList.innerHTML = "";
    results.forEach(time => {
        let listItem = document.createElement("li");
        listItem.textContent = time;
        resultList.appendChild(listItem);
    });
}
