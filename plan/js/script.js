const params = new URLSearchParams(window.location.search);
const selectedDate = params.get('date');

if (selectedDate) {
    document.getElementById('activity').innerHTML += `
    <section>
        <div class="activity">
            <div class="activity-header">
                <div class="day">
                    <h4>Valgt dag (Mandag, Tirsdag, etc.)</h4>
                </div>
                <div class="current-date">
                    <h4>${selectedDate}</h4>
                </div>
            </div>
            <div class="activity-content">
                <div class="activity-image">
                    <img src="./assets/What-is-Pr-in-Gym-1024x585.png">
                </div>
                <div class="activity-info">
                    <h3>Aktivitet</h3>
                    <p>Plan</p>
                    <p>Måltid</p>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getDayName(dayIndex) {
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Lørdag", "Sunday"
    ];
    return days[dayIndex];
}

function updateDayDisplay() {
    const now = new Date();
    const seconds = String(now.getSeconds()).padStart('2', 0);
    const minutes = String(now.getMinutes()).padStart('2', 0);
    const hours = String(now.getHours()).padStart('2', 0);
    const dayDiv = document.getElementById('currentDay');
    const currentDay = new Date().getDay();

    
    dayDiv.innerHTML = getDayName(currentDay) + `&nbsp${hours}:${minutes}:${seconds} `;
}

function getMonthName(monthIndex) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[monthIndex];
}


function updateMonthDisplay() {
    const currentMonth = new Date().getMonth();
    const storedMonth = Number(localStorage.getItem("currentMonth"));
    const calendarTag = document.getElementById('calendar');

    // document.getElementById('monthDiv').innerHTML = '<h4>' + getMonthName(currentMonth) + '</h4>';

    if (storedMonth === 0) {
        calendarTag.innerHTML = `
        <div class="calendar">
            <div class="calendar-header">
                <div class="month">
                    <h2 id="prevMonth"><</h2>
                    <h2>Januar</h2>
                    <h2 id="nextMonth">></h2>
                </div>
                <div class="day">
                    <h4>S</h4>
                    <h4>M</h4>
                    <h4>T</h4>
                    <h4>O</h4>
                    <h4>T</h4>
                    <h4>F</h4>
                    <h4>L</h4>
                </div>
                <div class="calendar-date">
                    <a href="?date=2024-12-29" class="prev-days prev-month">29</a>
                    <a href="?date=2024-12-30" class="prev-days prev-month">30</a>
                    <a href="?date=2024-12-31" class="prev-days prev-month">31</a>
                    <a href="?date=2025-01-01" class="prev-days">1</a>
                    <a href="?date=2025-01-02" class="prev-days">2</a>
                    <a href="?date=2025-01-03" class="prev-days">3</a>
                    <a href="?date=2025-01-04" class="prev-days">4</a>
                </div>
                <div class="calendar-date">
                    <a href="?date=2025-01-05" class="prev-days">5</a>
                    <a href="?date=2025-01-06" class="prev-days">6</a>
                    <a href="?date=2025-01-07" class="prev-days">7</a>
                    <a href="?date=2025-01-08" class="prev-days">8</a>
                    <a href="?date=2025-01-09" class="prev-days">9</a>
                    <a href="?date=2025-01-10" class="prev-days">10</a>
                    <a href="?date=2025-01-11">11</a>
                </div>
                <div class="calendar-date">
                    <a href="?date=2025-01-12">12</a>
                    <a href="?date=2025-01-13">13</a>
                    <a href="?date=2025-01-14">14</a>
                    <a href="?date=2025-01-15">15</a>
                    <a href="?date=2025-01-16">16</a>
                    <a href="?date=2025-01-17">17</a>
                    <a href="?date=2025-01-18">18</a>
                </div>
                <div class="calendar-date">
                    <a href="?date=2025-01-19">19</a>
                    <a href="?date=2025-01-20">20</a>
                    <a href="?date=2025-01-21">21</a>
                    <a href="?date=2025-01-22">22</a>
                    <a href="?date=2025-01-23">23</a>
                    <a href="?date=2025-01-24">24</a>
                    <a href="?date=2025-01-25">25</a>
                </div>
                <div class="calendar-date">
                    <a href="?date=2025-01-26">26</a>
                    <a href="?date=2025-01-27">27</a>
                    <a href="?date=2025-01-28">28</a>
                    <a href="?date=2025-01-29">29</a>
                    <a href="?date=2025-01-30">30</a>
                    <a href="?date=2025-01-31">31</a>
                    <a href="?date=2025-02-01" class="next-month">1</a>
                </div>
            </div>
        </div>
        `;
    } else if (storedMonth === 1) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>Februar</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-01-26" class="prev-days prev-month">26</a>
                        <a href="?date=2025-01-27" class="prev-days prev-month">27</a>
                        <a href="?date=2025-01-28" class="prev-days prev-month">28</a>
                        <a href="?date=2025-01-29" class="prev-days prev-month">29</a>
                        <a href="?date=2025-01-30" class="prev-days prev-month">30</a>
                        <a href="?date=2025-01-31" class="prev-days prev-month">31</a>
                        <a href="?date=2025-02-01">1</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-02-02">2</a>
                        <a href="?date=2025-02-03">3</a>
                        <a href="?date=2025-02-04">4</a>
                        <a href="?date=2025-02-05">5</a>
                        <a href="?date=2025-02-06">6</a>
                        <a href="?date=2025-02-07">7</a>
                        <a href="?date=2025-02-08">8</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-02-09">9</a>
                        <a href="?date=2025-02-10">10</a>
                        <a href="?date=2025-02-11">11</a>
                        <a href="?date=2025-02-12">12</a>
                        <a href="?date=2025-02-13">13</a>
                        <a href="?date=2025-02-14">14</a>
                        <a href="?date=2025-02-15">15</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-02-16">16</a>
                        <a href="?date=2025-02-17">17</a>
                        <a href="?date=2025-02-18">18</a>
                        <a href="?date=2025-02-19">19</a>
                        <a href="?date=2025-02-20">20</a>
                        <a href="?date=2025-02-21">21</a>
                        <a href="?date=2025-02-22">22</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-02-23">23</a>
                        <a href="?date=2025-02-24">24</a>
                        <a href="?date=2025-02-25">25</a>
                        <a href="?date=2025-02-26">26</a>
                        <a href="?date=2025-02-27">27</a>
                        <a href="?date=2025-02-28">28</a>
                        <a href="?date=2025-03-01" class="next-month">1</a>
                    </div>
                </div>
            </div>`;
    } else if (storedMonth === 2) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>Mars</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-02-23" class="prev-days prev-month">23</a>
                        <a href="?date=2025-02-24" class="prev-days prev-month">24</a>
                        <a href="?date=2025-02-25" class="prev-days prev-month">25</a>
                        <a href="?date=2025-02-26" class="prev-days prev-month">26</a>
                        <a href="?date=2025-02-27" class="prev-days prev-month">27</a>
                        <a href="?date=2025-02-28" class="prev-days prev-month">28</a>
                        <a href="?date=2025-03-01">1</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-03-02">2</a>
                        <a href="?date=2025-03-03">3</a>
                        <a href="?date=2025-03-04">4</a>
                        <a href="?date=2025-03-05">5</a>
                        <a href="?date=2025-03-06">6</a>
                        <a href="?date=2025-03-07">7</a>
                        <a href="?date=2025-03-08">8</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-03-09">9</a>
                        <a href="?date=2025-03-10">10</a>
                        <a href="?date=2025-03-11">11</a>
                        <a href="?date=2025-03-12">12</a>
                        <a href="?date=2025-03-13">13</a>
                        <a href="?date=2025-03-14">14</a>
                        <a href="?date=2025-03-15">15</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-03-16">16</a>
                        <a href="?date=2025-03-17">17</a>
                        <a href="?date=2025-03-18">18</a>
                        <a href="?date=2025-03-19">19</a>
                        <a href="?date=2025-03-20">20</a>
                        <a href="?date=2025-03-21">21</a>
                        <a href="?date=2025-03-22">22</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-03-23">23</a>
                        <a href="?date=2025-03-24">24</a>
                        <a href="?date=2025-03-25">25</a>
                        <a href="?date=2025-03-26">26</a>
                        <a href="?date=2025-03-27">27</a>
                        <a href="?date=2025-03-28">28</a>
                        <a href="?date=2025-04-01" class="next-month">1</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 3) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>April</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-03-29" class="prev-days prev-month">30</a>
                        <a href="?date=2025-03-30" class="prev-days prev-month">31</a>
                        <a href="?date=2025-04-01">1</a>
                        <a href="?date=2025-04-02">2</a>
                        <a href="?date=2025-04-03">3</a>
                        <a href="?date=2025-04-04">4</a>
                        <a href="?date=2025-04-05">5</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-04-06">6</a>
                        <a href="?date=2025-04-07">7</a>
                        <a href="?date=2025-04-08">8</a>
                        <a href="?date=2025-04-09">9</a>
                        <a href="?date=2025-04-10">10</a>
                        <a href="?date=2025-04-11">11</a>
                        <a href="?date=2025-04-12">12</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-04-13">13</a>
                        <a href="?date=2025-04-14">14</a>
                        <a href="?date=2025-04-15">15</a>
                        <a href="?date=2025-04-16">16</a>
                        <a href="?date=2025-04-17">17</a>
                        <a href="?date=2025-04-18">18</a>
                        <a href="?date=2025-04-19">19</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-04-20">20</a>
                        <a href="?date=2025-04-21">21</a>
                        <a href="?date=2025-04-22">22</a>
                        <a href="?date=2025-04-23">23</a>
                        <a href="?date=2025-04-24">24</a>
                        <a href="?date=2025-04-25">25</a>
                        <a href="?date=2025-04-26">26</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-04-27">27</a>
                        <a href="?date=2025-04-28">28</a>
                        <a href="?date=2025-04-29">29</a>
                        <a href="?date=2025-04-30">30</a>
                        <a href="?date=2025-05-01" class="next-month">1</a>
                        <a href="?date=2025-05-02" class="next-month">2</a>
                        <a href="?date=2025-05-03" class="next-month">3</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 4) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>Mai</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-04-27" class="prev-days prev-month">27</a>
                        <a href="?date=2025-04-28" class="prev-days prev-month">28</a>
                        <a href="?date=2025-04-29" class="prev-days prev-month">29</a>
                        <a href="?date=2025-04-30" class="prev-days prev-month">30</a>
                        <a href="?date=2025-05-01">1</a>
                        <a href="?date=2025-05-02">2</a>
                        <a href="?date=2025-05-03">3</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-05-04">4</a>
                        <a href="?date=2025-05-05">5</a>
                        <a href="?date=2025-05-06">6</a>
                        <a href="?date=2025-05-07">7</a>
                        <a href="?date=2025-05-08">8</a>
                        <a href="?date=2025-05-09">9</a>
                        <a href="?date=2025-05-10">10</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-05-11">11</a>
                        <a href="?date=2025-05-12">12</a>
                        <a href="?date=2025-05-13">13</a>
                        <a href="?date=2025-05-14">14</a>
                        <a href="?date=2025-05-15">15</a>
                        <a href="?date=2025-05-16">16</a>
                        <a href="?date=2025-05-17">17</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-05-18">18</a>
                        <a href="?date=2025-05-19">19</a>
                        <a href="?date=2025-05-20">20</a>
                        <a href="?date=2025-05-21">21</a>
                        <a href="?date=2025-05-22">22</a>
                        <a href="?date=2025-05-23">23</a>
                        <a href="?date=2025-05-24">24</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-05-25">25</a>
                        <a href="?date=2025-05-25">26</a>
                        <a href="?date=2025-05-26">27</a>
                        <a href="?date=2025-05-27">28</a>
                        <a href="?date=2025-05-28">29</a>
                        <a href="?date=2025-05-29">30</a>
                        <a href="?date=2025-05-21">31</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 5) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>Juni</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-06-01">1</a>
                        <a href="?date=2025-06-02">2</a>
                        <a href="?date=2025-06-03">3</a>
                        <a href="?date=2025-06-04">4</a>
                        <a href="?date=2025-06-05">5</a>
                        <a href="?date=2025-06-06">6</a>
                        <a href="?date=2025-06-07">7</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-06-08">8</a>
                        <a href="?date=2025-06-09">9</a>
                        <a href="?date=2025-06-10">10</a>
                        <a href="?date=2025-06-11">11</a>
                        <a href="?date=2025-06-12">12</a>
                        <a href="?date=2025-06-13">13</a>
                        <a href="?date=2025-06-14">14</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-06-15">15</a>
                        <a href="?date=2025-06-16">16</a>
                        <a href="?date=2025-06-17">17</a>
                        <a href="?date=2025-06-18">18</a>
                        <a href="?date=2025-06-19">19</a>
                        <a href="?date=2025-06-20">20</a>
                        <a href="?date=2025-06-21">21</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-06-22">22</a>
                        <a href="?date=2025-06-23">23</a>
                        <a href="?date=2025-06-24">24</a>
                        <a href="?date=2025-06-25">25</a>
                        <a href="?date=2025-06-26">26</a>
                        <a href="?date=2025-06-27">27</a>
                        <a href="?date=2025-06-28">28</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-06-29">29</a>
                        <a href="?date=2025-06-30">30</a>
                        <a href="?date=2025-07-01" class="prev-month">1</a>
                        <a href="?date=2025-07-02" class="prev-month">2</a>
                        <a href="?date=2025-07-03" class="prev-month">3</a>
                        <a href="?date=2025-07-04" class="prev-month">4</a>
                        <a href="?date=2025-07-05" class="prev-month">5</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 6) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>Juli</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-06-29" class="prev-month prev-days">29</a>
                        <a href="?date=2025-06-30" class="prev-month prev-days">30</a>
                        <a href="?date=2025-07-01">1</a>
                        <a href="?date=2025-07-02">2</a>
                        <a href="?date=2025-07-03">3</a>
                        <a href="?date=2025-07-04">4</a>
                        <a href="?date=2025-07-05">5</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-07-06">6</a>
                        <a href="?date=2025-07-07">7</a>
                        <a href="?date=2025-07-08">8</a>
                        <a href="?date=2025-07-09">9</a>
                        <a href="?date=2025-07-10">10</a>
                        <a href="?date=2025-07-11">11</a>
                        <a href="?date=2025-07-12">12</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-07-13">13</a>
                        <a href="?date=2025-07-14">14</a>
                        <a href="?date=2025-07-15">15</a>
                        <a href="?date=2025-07-16">16</a>
                        <a href="?date=2025-07-17">17</a>
                        <a href="?date=2025-07-18">18</a>
                        <a href="?date=2025-07-19">19</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-07-20">20</a>
                        <a href="?date=2025-07-21">21</a>
                        <a href="?date=2025-07-22">22</a>
                        <a href="?date=2025-07-23">23</a>
                        <a href="?date=2025-07-24">24</a>
                        <a href="?date=2025-07-25">25</a>
                        <a href="?date=2025-07-26">26</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-07-27">27</a>
                        <a href="?date=2025-07-28">28</a>
                        <a href="?date=2025-07-29">29</a>
                        <a href="?date=2025-07-30">30</a>
                        <a href="?date=2025-07-31">31</a>
                        <a href="?date=2025-07-01" class="prev-month">1</a>
                        <a href="?date=2025-07-02" class="prev-month">2</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 7) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>August</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-07-27" class="prev-month prev-days">27</a>
                        <a href="?date=2025-07-28" class="prev-month prev-days">28</a>
                        <a href="?date=2025-07-29" class="prev-month prev-days">29</a>
                        <a href="?date=2025-07-30" class="prev-month prev-days">30</a>
                        <a href="?date=2025-07-31" class="prev-month prev-days">31</a>
                        <a href="?date=2025-08-01">1</a>
                        <a href="?date=2025-08-02">2</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-03">3</a>
                        <a href="?date=2025-08-04">4</a>
                        <a href="?date=2025-08-05">5</a>
                        <a href="?date=2025-08-06">6</a>
                        <a href="?date=2025-08-07">7</a>
                        <a href="?date=2025-08-08">8</a>
                        <a href="?date=2025-08-09">9</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-10">10</a>
                        <a href="?date=2025-08-11">11</a>
                        <a href="?date=2025-08-12">12</a>
                        <a href="?date=2025-08-13">13</a>
                        <a href="?date=2025-08-14">14</a>
                        <a href="?date=2025-08-15">15</a>
                        <a href="?date=2025-08-16">16</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-17">17</a>
                        <a href="?date=2025-08-18">18</a>
                        <a href="?date=2025-08-19">19</a>
                        <a href="?date=2025-08-20">20</a>
                        <a href="?date=2025-08-21">21</a>
                        <a href="?date=2025-08-22">22</a>
                        <a href="?date=2025-08-23">23</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-24">24</a>
                        <a href="?date=2025-08-25">25</a>
                        <a href="?date=2025-08-26">26</a>
                        <a href="?date=2025-08-27">27</a>
                        <a href="?date=2025-08-28">28</a>
                        <a href="?date=2025-08-29">29</a>
                        <a href="?date=2025-08-30">30</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-31">31</a>
                        <a href="?date=2025-09-01" class="prev-month">1</a>
                        <a href="?date=2025-09-02" class="prev-month">2</a>
                        <a href="?date=2025-09-03" class="prev-month">3</a>
                        <a href="?date=2025-09-04" class="prev-month">4</a>
                        <a href="?date=2025-09-05" class="prev-month">5</a>
                        <a href="?date=2025-09-06" class="prev-month">6</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 8) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>September</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-27" class="prev-month prev-days">27</a>
                        <a href="?date=2025-08-28">1</a>
                        <a href="?date=2025-08-29">2</a>
                        <a href="?date=2025-08-30">3</a>
                        <a href="?date=2025-08-31">4</a>
                        <a href="?date=2025-08-01">5</a>
                        <a href="?date=2025-08-02">6</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-03">7</a>
                        <a href="?date=2025-08-04">8</a>
                        <a href="?date=2025-08-05">9</a>
                        <a href="?date=2025-08-06">10</a>
                        <a href="?date=2025-08-07">11</a>
                        <a href="?date=2025-08-08">12</a>
                        <a href="?date=2025-08-09">13</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-10">14</a>
                        <a href="?date=2025-08-11">15</a>
                        <a href="?date=2025-08-12">16</a>
                        <a href="?date=2025-08-13">17</a>
                        <a href="?date=2025-08-14">18</a>
                        <a href="?date=2025-08-15">19</a>
                        <a href="?date=2025-08-16">20</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-17">21</a>
                        <a href="?date=2025-08-18">22</a>
                        <a href="?date=2025-08-19">23</a>
                        <a href="?date=2025-08-20">24</a>
                        <a href="?date=2025-08-21">25</a>
                        <a href="?date=2025-08-22">26</a>
                        <a href="?date=2025-08-23">27</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-24">28</a>
                        <a href="?date=2025-08-25">29</a>
                        <a href="?date=2025-08-26">30</a>
                        <a href="?date=2025-09-01" class="next-month">1</a>
                        <a href="?date=2025-09-02" class="next-month">2</a>
                        <a href="?date=2025-09-03" class="next-month">3</a>
                        <a href="?date=2025-09-04" class="next-month">4</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 9) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>Oktober</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-08-28" class="prev-month prev-days">28</a>
                        <a href="?date=2025-08-29" class="prev-month prev-days">29</a>
                        <a href="?date=2025-08-30" class="prev-month prev-days">30</a>
                        <a href="?date=2025-09-30">1</a>
                        <a href="?date=2025-09-31">2</a>
                        <a href="?date=2025-09-01">3</a>
                        <a href="?date=2025-09-02">4</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-09-03">5</a>
                        <a href="?date=2025-09-04">6</a>
                        <a href="?date=2025-09-05">7</a>
                        <a href="?date=2025-09-06">8</a>
                        <a href="?date=2025-09-07">9</a>
                        <a href="?date=2025-09-08">10</a>
                        <a href="?date=2025-09-09">11</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-09-10">12</a>
                        <a href="?date=2025-09-11">13</a>
                        <a href="?date=2025-09-12">14</a>
                        <a href="?date=2025-09-13">15</a>
                        <a href="?date=2025-09-14">16</a>
                        <a href="?date=2025-09-15">17</a>
                        <a href="?date=2025-09-16">18</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-09-17">19</a>
                        <a href="?date=2025-09-18">20</a>
                        <a href="?date=2025-09-19">21</a>
                        <a href="?date=2025-09-20">22</a>
                        <a href="?date=2025-09-21">23</a>
                        <a href="?date=2025-09-22">24</a>
                        <a href="?date=2025-09-23">25</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-09-24">26</a>
                        <a href="?date=2025-09-25">27</a>
                        <a href="?date=2025-09-26">28</a>
                        <a href="?date=2025-09-01">29</a>
                        <a href="?date=2025-09-02">30</a>
                        <a href="?date=2025-09-03">31</a>
                        <a href="?date=2025-10-04" class="next-month">1</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 10) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>November</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-09-26" class="prev-month prev-days">26</a>
                        <a href="?date=2025-09-27" class="prev-month prev-days">27</a>
                        <a href="?date=2025-09-28" class="prev-month prev-days">28</a>
                        <a href="?date=2025-09-29" class="prev-month prev-days">29</a>
                        <a href="?date=2025-09-30" class="prev-month prev-days">30</a>
                        <a href="?date=2025-09-31" class="prev-month prev-days">31</a>
                        <a href="?date=2025-10-01">1</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-10-02">2</a>
                        <a href="?date=2025-10-03">3</a>
                        <a href="?date=2025-10-04">4</a>
                        <a href="?date=2025-10-05">5</a>
                        <a href="?date=2025-10-06">6</a>
                        <a href="?date=2025-10-07">7</a>
                        <a href="?date=2025-10-08">8</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-10-09">9</a>
                        <a href="?date=2025-10-10">10</a>
                        <a href="?date=2025-10-11">11</a>
                        <a href="?date=2025-10-12">12</a>
                        <a href="?date=2025-10-13">13</a>
                        <a href="?date=2025-10-14">14</a>
                        <a href="?date=2025-10-15">15</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-10-16">16</a>
                        <a href="?date=2025-10-17">17</a>
                        <a href="?date=2025-10-18">18</a>
                        <a href="?date=2025-10-19">19</a>
                        <a href="?date=2025-10-20">20</a>
                        <a href="?date=2025-10-21">21</a>
                        <a href="?date=2025-10-22">22</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-10-23">23</a>
                        <a href="?date=2025-10-24">24</a>
                        <a href="?date=2025-10-25">25</a>
                        <a href="?date=2025-10-26">26</a>
                        <a href="?date=2025-10-27">27</a>
                        <a href="?date=2025-10-28">28</a>
                        <a href="?date=2025-10-29">29</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-10-30">30</a>
                        <a href="?date=2025-11-01" class="next-month">1</a>
                        <a href="?date=2025-11-02" class="next-month">2</a>
                        <a href="?date=2025-11-03" class="next-month">3</a>
                        <a href="?date=2025-11-04" class="next-month">4</a>
                        <a href="?date=2025-11-05" class="next-month">5</a>
                        <a href="?date=2025-11-06" class="next-month">6</a>
                    </div>
                </div>
            </div>
            `;
    } else if (storedMonth === 11) {
        calendarTag.innerHTML = `
        <div class="calendar">
                <div class="calendar-header">
                    <div class="month">
                        <h2 id="prevMonth"><</h2>
                        <h2>Desember</h2>
                        <h2 id="nextMonth">></h2>
                    </div>
                    <div class="day">
                        <h4>S</h4>
                        <h4>M</h4>
                        <h4>T</h4>
                        <h4>O</h4>
                        <h4>T</h4>
                        <h4>F</h4>
                        <h4>L</h4>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-11-26" class="prev-month prev-days">30</a>
                        <a href="?date=2025-12-01">1</a>
                        <a href="?date=2025-12-02">2</a>
                        <a href="?date=2025-12-03">3</a>
                        <a href="?date=2025-12-04">4</a>
                        <a href="?date=2025-12-05">5</a>
                        <a href="?date=2025-12-06">6</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-12-07">7</a>
                        <a href="?date=2025-12-08">8</a>
                        <a href="?date=2025-12-09">9</a>
                        <a href="?date=2025-12-10">10</a>
                        <a href="?date=2025-12-11">11</a>
                        <a href="?date=2025-12-12">12</a>
                        <a href="?date=2025-12-13">13</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-12-14">14</a>
                        <a href="?date=2025-12-15">15</a>
                        <a href="?date=2025-12-16">16</a>
                        <a href="?date=2025-12-17">17</a>
                        <a href="?date=2025-12-18">18</a>
                        <a href="?date=2025-12-19">19</a>
                        <a href="?date=2025-12-20">20</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-12-21">21</a>
                        <a href="?date=2025-12-22">22</a>
                        <a href="?date=2025-12-23">23</a>
                        <a href="?date=2025-12-24">24</a>
                        <a href="?date=2025-12-25">25</a>
                        <a href="?date=2025-12-26">26</a>
                        <a href="?date=2025-12-27">27</a>
                    </div>
                    <div class="calendar-date">
                        <a href="?date=2025-12-28">28</a>
                        <a href="?date=2025-12-29">29</a>
                        <a href="?date=2025-12-30">30</a>
                        <a href="?date=2025-12-31">31</a>
                        <a href="?date=2026-01-01" class="next-month">1</a>
                        <a href="?date=2026-01-02" class="next-month">2</a>
                        <a href="?date=2026-01-03" class="next-month">3</a>
                    </div>
                </div>
            </div>
            `;
    }
    document.getElementById('nextMonth').addEventListener('click', () => {
        addToStoredMonth(1);
        updateMonthDisplay();
    })
    document.getElementById('prevMonth').addEventListener('click', () => {
        addToStoredMonth(-1);
        updateMonthDisplay();
    })
}

function addToStoredMonth(amount) {
    let storedMonth = localStorage.getItem('currentMonth');
    if (storedMonth === null) {
        storedMonth = 0;
    } else {
        storedMonth = parseInt(storedMonth);
    }
    let updatedMonth = storedMonth + amount;
    updatedMonth = updatedMonth % 12;
    localStorage.setItem('currentMonth', updatedMonth);
}



updateMonthDisplay();
updateDayDisplay();
setInterval(updateMonthDisplay, 3600000);
setInterval(updateDayDisplay, 1000);