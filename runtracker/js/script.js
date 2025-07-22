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

const t = new Date();
const m = t.getMonth();

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
    
        currentWeek.forEach(run => {
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

        const current = data.filter(week => week.week === `${weekRn}`);
        const last = data.filter(week => week.week === `${weekRn - 1}`);

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

        if(currentDistance >= lastDistance) {
            document.getElementById('distanceProgress').innerHTML = 
            `
            <p>&#x25B2; ${distancePercent}% from last week</p>
            `;
        } else if (currentDistance < lastDistance) {
            document.getElementById('distanceProgress').innerHTML = 
            `
            <p class="down">&#x25BC; ${distancePercent}% from last week</p>
            `;
        }

        if(currentRuns >= lastRuns) {
            document.getElementById('runsProgress').innerHTML = 
            `
            <p>&#x25B2; ${runsPercent}% from last week</p>
            `;
        } else if (currentRuns < lastRuns) {
            document.getElementById('runsProgress').innerHTML = 
            `
            <p class="down">&#x25BC; ${runsPercent}% from last week</p>
            `;
        }

        if(currentTime >= lastTime) {
            document.getElementById('paceProgress').innerHTML = 
            `
            <p class="down">&#x25B2; ${timePercent}% from last week</p>
            `;
        } else if (currentTime < lastTime) {
            document.getElementById('paceProgress').innerHTML = 
            `
            <p>&#x25BC; ${timePercent}% from last week</p>
            `;
        }
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

async function lastMonth() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const lastM = data.filter(month => month.month === `${m}`)
        const thisM = data.filter(month => month.month === `${m + 1}`)

        let totalDistance = 0;
        let totalDistanceThis = 0;

        lastM.forEach(run => {
            totalDistance += parseFloat(run.distance);
        })

        thisM.forEach(run => {
            totalDistanceThis += parseFloat(run.distance);
        })

        const thisMonthDistance = (totalDistanceThis / 1000).toFixed(2);
        const lastMonthDistance = (totalDistance / 1000).toFixed(2);
        document.getElementById('lastMonth').textContent = lastMonthDistance;
        document.getElementById('thisMonth').textContent = thisMonthDistance;
    } catch(err) {
        console.error(err);
    }
}

async function bestRuns() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        const longestRun = data.sort((a, b) => b.distance - a.distance)[0];
        const longestDistance = Number((longestRun.distance / 1000))
        
        const timestamp = Number(longestRun.date);
        const date = new Date(timestamp);

        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const weekday = weekdays[date.getDay()];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const formatted = `${weekday}, ${month} ${day}`;

        const avgPace = (longestRun.time / longestRun.distance) * 1000 / 60;
        const totalTime = (longestRun.time / 60);
        const runMin = Math.floor(totalTime);
        const runSec = String(Math.round((totalTime - runMin) * 60)).padStart(2, '0');

        const min = Math.floor(avgPace);
        const sec = String(Math.round((avgPace - min) * 60)).padStart(2, '0');

        document.getElementById('longestRunDistance').textContent = `${longestDistance} km run`;
        document.getElementById('longestRunDate').textContent = formatted;
        document.getElementById('longestRunTime').textContent = `${runMin}:${runSec}`;
        document.getElementById('longestRunAvg').textContent = `${min}:${sec}/km`;
        document.getElementById('longestLocation').textContent = `${longestRun.location}`;
        document.getElementById('longestDesc').textContent = `${longestRun.desc}`;

        const sortedPace = data.slice().sort((a, b) => {
            const paceA = (a.time / 60) / a.distance;
            const paceB = (b.time / 60) / b.distance;
            return paceA - paceB;
        });

        const fastestRun = sortedPace[0];
        const fastestDistance = Number((fastestRun.distance / 1000))

        const timestampFast = Number(fastestRun.date);
        const dateFast = new Date(timestampFast);

        const weekdaysFast = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const monthsFast = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const weekdayFast = weekdaysFast[dateFast.getDay()];
        const monthFast = monthsFast[dateFast.getMonth()];
        const dayFast = dateFast.getDate();
        const formattedFast = `${weekdayFast}, ${monthFast} ${dayFast}`;

        const avgPaceFast = (fastestRun.time / fastestRun.distance) * 1000 / 60;
        const totalTimeFast = (fastestRun.time / 60);
        const runMinFast = Math.floor(totalTimeFast);
        const runSecFast = String(Math.round((totalTimeFast - runMinFast) * 60)).padStart(2, '0');

        const minFast = Math.floor(avgPaceFast);
        const secFast = String(Math.round((avgPaceFast - minFast) * 60)).padStart(2, '0');

        document.getElementById('fastestRunDistance').textContent = `${fastestDistance} km run`;
        document.getElementById('fastestRunDate').textContent = formattedFast;
        document.getElementById('fastestRunTime').textContent = `${runMinFast}:${runSecFast}`;
        document.getElementById('fastestRunAvg').textContent = `${minFast}:${secFast}/km`;
        document.getElementById('fastestLocation').textContent = `${fastestRun.location}`;
        document.getElementById('fastestDesc').textContent = `${fastestRun.desc}`;
    } catch(err) {
        console.error(err);
    }
}

// document.body.addEventListener('keydown', (e) => {
//     if(e.key === 'Enter') {
//         fetchWeekStats();
//     }
// })
bestRuns();
lastMonth();
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