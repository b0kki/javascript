AOS.init();

const dataEvento = new Date("Apr 13, 2024 20:00:00");
const timeStamp = dataEvento.getTime();

const timeCount = setInterval(function () {
    const now = new Date();
    const timeStampNow = now.getTime();

    const eventDay = timeStamp - timeStampNow;

    const dayMS = 1000 * 60 * 60 * 24;
    const hourMS = 1000 * 60 * 60;
    const minMS = 1000 * 60;

    const daysToEvent = Math.floor(eventDay / dayMS)
    const hoursToEvent = Math.floor((eventDay % dayMS) / hourMS)
    const minsToEvent = Math.floor(eventDay % hourMS / (minMS))
    const secToEvent = Math.floor((eventDay % minMS) / 1000);

    document.getElementById('countdown').style.background="transparent";
    document.getElementById("countdown").innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minsToEvent}m ${secToEvent}s`

    if (eventDay < 0) {
        clearInterval(timeCount);
        document.getElementById('countdown').innerHTML - 'Já envelheceu!'

    }
}, 1000)