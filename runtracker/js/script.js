const url = 'https://api.sheetbest.com/sheets/109b7a91-894b-4cdc-bab7-7ff030c05688';

let weekGoal = 10000;
document.getElementById('goal').textContent = weekGoal / 1000;

function getWeekNumber(date = new Date()) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

const week = getWeekNumber();
const weekRn = getWeekNumber();
const now = Date.now();

async function totalDistance() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const totalDistanceMeters = data.reduce((sum, run) => {
            return sum + parseInt(run.distance);
        }, 0);

        const totalDistanceKm = (totalDistanceMeters / 1000).toFixed(2);
        const totalRuns = data.length;

        let totalTime = 0;
        let totalDistance = 0;
    
        data.forEach(run => {
            totalTime += parseFloat(run.time);
            totalDistance += parseFloat(run.distance);
        });

        const avgPace = (totalTime / totalDistance) * 1000 / 60;
        const min = Math.floor(avgPace);
        const sec = String(Math.round((avgPace - min) * 60)).padStart(2, '0');        

        document.getElementById('total').textContent = totalDistanceKm;
        document.getElementById('thisMonth').textContent = totalDistanceKm;
        document.getElementById('totalRuns').textContent = totalRuns;
        document.getElementById('recentLogged').textContent = totalRuns;
        document.getElementById('avgPace').textContent = `${min}:${sec}`;
        
    } catch(err) {
        console.error(err);
    }
}

async function fetchWeekStats() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const currentWeek = data.filter(week => week.week === `${weekRn}`)

        const totalDistanceMeters = currentWeek.reduce((sum, run) => {
            return sum + parseInt(run.distance);
        }, 0);

        const totalDistanceKm = (totalDistanceMeters / 1000).toFixed(2);
        const totalRuns = currentWeek.length;

        let totalTime = 0;
        let totalDistance = 0;
    
        data.forEach(run => {
            totalTime += parseFloat(run.time);
            totalDistance += parseFloat(run.distance);
        });

        const avgPace = (totalTime / totalDistance) * 1000 / 60;
        const min = Math.floor(avgPace);
        const sec = String(Math.round((avgPace - min) * 60)).padStart(2, '0'); 

        document.getElementById('goal-percent').textContent = (totalDistanceMeters / 100);
        document.getElementById('bar').style.width = (totalDistanceMeters / 100) + '%';
        document.getElementById('week-current').textContent = totalDistanceKm;
        document.getElementById('weeklyRuns').textContent = totalRuns;
        document.getElementById('weeklyAvg').textContent = `${min}:${sec}/km`;
    } catch(err) {
        console.error(err);
    }
}

async function weeklyProgress() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        const current = data.filter(week => week.week === `${weekRn - 1}`);
        const last = data.filter(week => week.week === `${weekRn - 2}`);

        let currentDistance = 0;
        let currentRuns = current.length;
        let currentTime = 0;

        let lastDistance = 0;
        let lastRuns = last.length;
        let lastTime = 0;

        current.forEach(run => {
            currentDistance += parseFloat(run.distance);
            currentTime += parseFloat(run.time);
        })

        last.forEach(run => {
            lastDistance += parseFloat(run.distance);
            lastTime += parseFloat(run.time);
        })

        const distancePercent = (((currentDistance - lastDistance) / lastDistance) * 100).toFixed(0);
        const runsPercent = (((currentRuns - lastRuns) / lastRuns) * 100).toFixed(0);
        const timePercent = (((currentTime - lastTime) / lastTime) * 100).toFixed(0);
        console.log(distancePercent);
        console.log(timePercent);
        console.log(runsPercent);

        if(currentDistance >= lastDistance) {
            document.getElementById('distanceProgress').innerHTML = 
            `
            <img src="./assets/trending.svg">
            <p>${distancePercent}% from last week</p>
            `;
        } else if (currentDistance < lastDistance) {
            document.getElementById('distanceProgress').innerHTML = 
            `
            <img src="./assets/trending-red.svg">
            <p class="down">${distancePercent}% from last week</p>
            `;
        }

        if(currentRuns >= lastRuns) {
            document.getElementById('runsProgress').innerHTML = 
            `
            <img src="./assets/trending.svg">
            <p>${runsPercent}% from last week</p>
            `;
        } else if (currentRuns < lastRuns) {
            document.getElementById('runsProgress').innerHTML = 
            `
            <img src="./assets/trending-red.svg">
            <p class="down">${runsPercent}% from last week</p>
            `;
        }

        if(currentTime >= lastTime) {
            document.getElementById('paceProgress').innerHTML = 
            `
            <img src="./assets/trending.svg">
            <p>${timePercent}% from last week</p>
            `;
        } else if (currentTime < lastTime) {
            document.getElementById('paceProgress').innerHTML = 
            `
            <img src="./assets/trending-red.svg">
            <p class="down">${timePercent}% from last week</p>
            `;
        }

        console.log(current);
        console.log(last);
    } catch(err) {
        console.error(err);
    }
}

async function getRuns() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        data.sort((a, b) => b.date - a.date);
        data.forEach(run => {
            const d = document.createElement('div');
            const avgPace = (run.time / run.distance) * 1000 / 60;
            const totalTime = (run.time / 60);
            const runMin = Math.floor(totalTime);
            const runSec = String(Math.round((totalTime - runMin) * 60)).padStart(2, '0');

            const timestamp = Number(run.date);
            const date = new Date(timestamp);

            const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            const weekday = weekdays[date.getDay()];
            const month = months[date.getMonth()];
            const day = date.getDate();
            const formatted = `${weekday}, ${month} ${day}`;

            const min = Math.floor(avgPace);
            const sec = String(Math.round((avgPace - min) * 60)).padStart(2, '0');
            d.className = 'card';
            d.innerHTML = 
            `
            <div class="card-header">
                <h4>${run.distance / 1000} km run</h4>
                <img onclick="deleteRun(${run.id})" class="delete" src="./assets/delete.svg">
            </div>
            <div class="time">
                <div class="date">
                    <img src="./assets/cal-70.svg">
                    <p>${formatted}</p>
                </div>
                <p class="difficulty ${run.difficulty}">${run.difficulty}</p>
            </div>
            <div class="run-stats">
                <div class="run-time">
                    <img src="./assets/clock-70.svg">
                    <div>
                        <span>${runMin}:${runSec}</span>
                        <p>Duration</p>
                    </div>
                </div>
                <div class="run-time">
                    <div>
                        <span>${min}:${sec}/km</span>
                        <p>Avg Pace</p>
                    </div>
                </div>
            </div>
            <div class="run-stats location">
                <div class="run-time">
                    <img src="./assets/location-70.svg">
                    <p>${run.location}</p>
                </div>
            </div>
            <div class="desc">
                <p>${run.desc}</p>
            </div>
            `;

            document.getElementById('runs').appendChild(d);
        })
    } catch(err) {
        console.error(err);
    }
}

fetchWeekStats();
totalDistance();
getRuns();
weeklyProgress();

// document.body.addEventListener('keydown', (e) => {
//     if(e.key === 'Enter') {
//         totalDistance();
//         getRuns();
//         fetchWeekStats();
//         weeklyProgress();
//     }
// })