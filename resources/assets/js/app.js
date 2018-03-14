import countdown from "countdown";

countdown.setLabels(
    ' milliseconde| seconde| minute| heure| jour| semaine| mois| année| décennie| siècle| millénaire',
    ' millisecondes| secondes| minutes| heures| jours| semaines| mois| années| décennies| siècles| millénaires',
    ' et ',
    ', ',
    'maintenant');

const app = document.getElementById('countdown');

const date = new Date(app.dataset.date);

let lastSecond = null;

const refreshCountdown = () => {
    const remaining = countdown(date);

    if (remaining.seconds !== lastSecond) {
        app.innerText = remaining.toString();
        lastSecond = remaining.seconds;
    }

    requestAnimationFrame(refreshCountdown);
};

requestAnimationFrame(refreshCountdown);
