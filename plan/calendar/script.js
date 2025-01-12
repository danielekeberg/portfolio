const monthYearDisplay = document.getElementById('monthYear');
const calendarDays = document.getElementById('calendarDays');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const params = new URLSearchParams(window.location.search);

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    calendarDays.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += `<div class="day"></div>`;
    }

    for (let day = 1; day <= lastDate; day++) {
        const today = new Date();
        const isToday = today.getDate() === day &&
                        today.getMonth() === month &&
                        today.getFullYear() === year;

        const fullDate = `${year}-${month + 1}-${day}`;

        calendarDays.innerHTML += `
        <a href="./activity/?date=${fullDate}">
            <div class="day ${isToday ? 'today' : ''}">${day}</div>
        </a>`;
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();