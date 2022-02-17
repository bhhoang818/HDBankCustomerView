const startMarquee = () => {
    $('.marquee_text').marquee({
        direction: 'left',
        duration: 15000,
        gap: 5,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });
}
$(document).ready(function () {
    startMarquee();
})