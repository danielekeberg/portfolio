const params = new URLSearchParams(window.location.search);
const currentDate = params.get('date');


if (currentDate) {
    const clickedDate = new Date(currentDate);
    const dayOfWeek = clickedDate.getDay();
    const randomNumber = Math.floor(Math.random() * 8);

    const allDays = [
        "Søndag",
        "Mandag",
        "Tisdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag"
    ];

    const randomTip = [
        `<p><strong>Drikk nok vann:</strong> Minst 2-3 liter daglig</p>`,
        `<p><strong>Fokus på søvn:</strong> 7-9 timer per natt for best restitusjon</p>`,
        `<p><strong>Næring:</strong> Inkluder proteiner i hvert måltid</p>`,
        `<p><strong>Restitusjon:</strong> Helgen gir kroppen tid til å hente seg inn</p>`,
        `<p><strong>Kjøp frossen fisk og kylling</strong> billigere og like næringsrikt.</p>`,
        `<p><strong>Se etter tilbud</strong> på kjøtt og basisvarer</p>`,
        `<p><strong>Handle store pakker</strong> av havregryn, ris og pasta</p>`,
        `<p><strong>Bruk frosne grønnsaker</strong> til middag for å spare penger</p>`
    ];

    const dayMessages = [
        `<div class="activity-image">
            <img src="../../assets/What-is-Pr-in-Gym-1024x585.png">
        </div>
        <div class="activity-info">
            <div class="title">
                <h2>Full Hviledag</h2>
            </div>
            <div class="desc">
                <div class="workout">
                    <h3>Aktivitet</h3>
                    <ul>
                        <li>Hvile og restitusjon</li>
                        <li>Eventuelt lett stretching eller en rolig tur</li>
                    </ul>
                </div>
                <div class="weekly-food">
                    <h3>Måltider</h3>
                    <ul>
                        <li><strong>Frokost:</strong> Havrepannekaker med frukt og litt honning</li>
                        <li><strong>Lunsj:</strong> Rester fra uken eller en enkel omelett</li>
                        <li><strong>Middag:</strong> Kyllinggryte med ris og grønnsaker</li>
                        <li><strong>Kveldsmat:</strong> Smoothie med banan, melk og havregryn</li>
                    </ul>
                </div>
            </div>
            <div class="tips">
                <p><strong>Tips:</strong> ${randomTip[randomNumber]}</p>
            </div>
        </div>
        `,
        `<div class="activity-image">
            <img src="../../assets/monday.jpg">
        </div>
        <div class="activity-info">
            <div class="title">
                <h2>Fullkropp Styrketrening</h2>
            </div>
            <div class="desc">
                <div class="workout">
                    <h3>Aktivitet</h3>
                    <ul>
                        <li><strong>Knebøy:</strong> 4 sett x 8 reps</li>
                        <li><strong>Push-ups (evt. benkpress):</strong> 4 sett x 10 reps</li>
                        <li><strong>Planke:</strong> 3 sett x 1 min</li>
                        <li><strong>Utfall:</strong> 3 sett x 10 reps per bein</li>
                        <li><strong>Pull-ps eller roing:</strong> 3 sett x 8 reps</li>
                    </ul>
                </div>
                <div class="weekly-food">
                    <h3>Måltider</h3>
                    <ul>
                        <li><strong>Frokost:</strong> Havregrøt med banan, peanøttsmør og chiafrø</li>
                        <li><strong>Lunsj:</strong> Kyllingfilet med quinoa og grønnsaker</li>
                        <li><strong>Middag:</strong> Laks med poteter og brokkoli</li>
                        <li><strong>Kveldsmat:</strong> Cottage cheese med bær og honning</li>
                    </ul>
                </div>
            </div>
            <div class="tips">
                <p><strong>Tips:</strong> ${randomTip[randomNumber]}</p>
            </div>
        </div>
        `,
        `<div class="activity-image">
            <img src="../../assets/tuesday.avif">
        </div>
        <div class="activity-info">
            <div class="title">
                <h2>Kondisjon og Kjerne</h2>
            </div>
            <div class="desc">
                <div class="workout">
                    <h3>Aktivitet</h3>
                    <ul>
                        <li>20-30 min jogging eller rask gange</li>
                        <li><strong>Russian twists:</strong> 3 sett x 20 reps</li>
                        <li><strong>Fjelltrere:</strong> 3 sett x 30 sek</li>
                        <li><strong>Hengende beinhev:</strong> 3 sett x 12 reps</li>
                    </ul>
                </div>
                <div class="weekly-food">
                    <h3>Måltider</h3>
                    <ul>
                        <li><strong>Frokost:</strong> Smoothie med spinat, banan, havregryn og melk</li>
                        <li><strong>Lunsj:</strong> Omelett med ost, skinke og grønnsaker</li>
                        <li><strong>Middag:</strong> Torsk med fullkornsris og asparges</li>
                        <li><strong>Kveldsmat:</strong> Yoghurt med granola og nøtter</li>
                    </ul>
                </div>
            </div>
            <div class="tips">
                <p><strong>Tips:</strong> ${randomTip[randomNumber]}</p>
            </div>
        </div>
        `,
        `<div class="activity-image">
            <img src="../../assets/wednesday.jpg">
        </div>
        <div class="activity-info">
            <div class="title">
                <h2>Overkropp Styrke</h2>
            </div>
            <div class="desc">
                <div class="workout">
                    <h3>Aktivitet</h3>
                    <ul>
                        <li><strong>Benkpress eller push-ups:</strong> 4 sett x 8 reps</li>
                        <li><strong>Skulderpress med manualer:</strong> 3 sett x 10 reps</li>
                        <li><strong>Roing:</strong> 3 sett x 10 reps</li>
                        <li><strong>Biceps curl:</strong> 3 sett x 12 reps</li>
                        <li><strong>Triceps dips:</strong> 3 sett x 10 reps</li>
                    </ul>
                </div>
                <div class="weekly-food">
                    <h3>Måltider</h3>
                    <ul>
                        <li><strong>Frokost:</strong> Havrepannekaker med bær</li>
                        <li><strong>Lunsj:</strong> Fullkornswrap med kylling, salat og avokado</li>
                        <li><strong>Middag:</strong> Kjøttdeig av karbonade med fullkornpasta og tomatsaus</li>
                        <li><strong>Kveldsmat:</strong> Eggerøre med grovbrød</li>
                    </ul>
                </div>
            </div>
            <div class="tips">
                <p><strong>Tips:</strong> ${randomTip[randomNumber]}</p>
            </div>
        </div>
        `,
        `<div class="activity-image">
            <img src="../../assets/thursday.avif">
        </div>
        <div class="activity-info">
            <div class="title">
                <h2>Kondisjon og Bevegelighet</h2>
            </div>
            <div class="desc">
                <div class="workout">
                    <h3>Aktivitet</h3>
                    <ul>
                        <li><strong>Intervalltrening:</strong> 4 sett x 8 reps</li>
                        <li><strong>Dynamisk stretching:</strong> Hofte, hamstrings og skuldre</li>
                        <li><strong>Yogaøvelser eller mobilitetsøvelser:</strong> 20 min</li>
                    </ul>
                </div>
                <div class="weekly-food">
                    <h3>Måltider</h3>
                    <ul>
                        <li><strong>Frokost:</strong> Smoothiebowl med frukt og granola</li>
                        <li><strong>Lunsj:</strong> Tunfisksalat med egg og quinoa</li>
                        <li><strong>Middag:</strong> Kyllingwok med ris og grønnsaker</li>
                        <li><strong>Kveldsmat:</strong> Grovbrød med makrell i tomat</li>
                    </ul>
                </div>
            </div>
            <div class="tips">
                <p><strong>Tips:</strong> ${randomTip[randomNumber]}</p>
            </div>
        </div>
        `,
        `<div class="activity-image">
            <img src="../../assets/friday.avif">
        </div>
        <div class="activity-info">
            <div class="title">
                <h2>Fullkropp Styrke + Lett Kondisjon</h2>
            </div>
            <div class="desc">
                <div class="workout">
                    <h3>Aktivitet</h3>
                    <ul>
                        <li><strong>Markløft:</strong> 4 sett x 6 reps</li>
                        <li><strong>Knebøy:</strong> 3 sett x 8 reps</li>
                        <li><strong>Push-ups:</strong> 3 sett x 12 reps</li>
                        <li><strong>Utfall:</strong> 3 sett x 10 reps per bein</li>
                        <li><strong>Lett jobb/sykling:</strong> 20-30 min</li>
                    </ul>
                </div>
                <div class="weekly-food">
                    <h3>Måltider</h3>
                    <ul>
                        <li><strong>Frokost:</strong> Hvaregrøt med eplebiter og kanel</li>
                        <li><strong>Lunsj:</strong> Wrap med laks, kremost og grønnsaker</li>
                        <li><strong>Middag:</strong> taco med karbonadedeig, fullkornstortilla og grønnsaker</li>
                        <li><strong>Kveldsmat:</strong> Cottage cheese med nøtter og honning</li>
                    </ul>
                </div>
            </div>
            <div class="tips">
                <p><strong>Tips:</strong> ${randomTip[randomNumber]}</p>
            </div>
        </div>
        `,
        `<div class="activity-image">
            <img src="../../assets/saturday.jpg">
        </div>
        <div class="activity-info">
            <div class="title">
                <h2>Aktiv Hviledag</h2>
            </div>
            <div class="desc">
                <div class="workout">
                    <h3>Aktivitet</h3>
                    <ul>
                        <li><strong>Lett aktivitet:</strong> Gå- eller sykkeltur</li>
                        <li><strong>Fokus på mobilitet og restitusjon</strong> </li>
                    </ul>
                </div>
                <div class="weekly-food">
                    <h3>Måltider</h3>
                    <ul>
                        <li><strong>Frokost:</strong> Eggerøre med grovbrød og avocado</li>
                        <li><strong>Lunsj:</strong> Kyllingsalat med fetaost og olivenolje</li>
                        <li><strong>Middag:</strong> Fiskekaker med potetmos og grønnsaker</li>
                        <li><strong>Kveldsmat:</strong> Yoghurt med bær og honning</li>
                    </ul>
                </div>
            </div>
            <div class="tips">
                <p><strong>Tips:</strong> ${randomTip[randomNumber]}</p>
            </div>
        </div>
        `
    ];

    // document.getElementById('fungerte').innerHTML = `<h2>Dette er dag ${currentDate} ${dayMessages[dayOfWeek]}.</h2>`
    document.getElementById('fungerte').innerHTML = `
    <article>
        <div class="activity">
            <div class="activity-header">
                <div class="day-of-week">
                    <h3>${allDays[dayOfWeek]}</h3>
                </div>
                <div class="">
                    <h2>Dagens Aktivitet</h2>
                </div>
                <div class="date">
                    <h3>${currentDate}</h3>
                </div>
            </div>
            ${dayMessages[dayOfWeek]}
        </div>
    </article>
    `;
    document.title = `Fuel & Flow | Aktivitet ${allDays[dayOfWeek]}`;
} else {
    document.getElementById('fungerte').innerHTML = `<h2>No date selected.</h2>`;
}