const params = new URLSearchParams(window.location.search);
const currentDate = params.get('date');

if (currentDate) {
    const clickedDate = new Date(currentDate);
    const dayOfWeek = clickedDate.getDay();

    const dayMessages = [
        "Søndag",
        "Mandag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag"
    ];

    document.getElementById('fungerte').innerHTML = `<h2>Dette er dag ${currentDate} ${dayMessages[dayOfWeek]}.</h2>`
} else {
    document.getElementById('fungerte').innerHTML = `<h2>No date selected.</h2>`;
}