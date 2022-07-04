class Clock {
    // template = 0;
    constructor(template) {
        this.template = template;
    }

    render = () => {
        let date = new Date();
        let hours = date.getHours();
        hours = hours < 10 ? "0" + hours : hours;
        let mins = date.getMinutes();
        mins = mins < 10 ? "0" + mins : mins;

        let secs = date.getSeconds();
        secs = secs < 10 ? "0" + secs : secs;

        let output = this.template
            .replace('hh', hours)
            .replace('mm', mins)
            .replace('ss', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock(" template: 'hh:mm:ss'");
// console.log(clock.template);
clock.start();
// setInterval(clock.render,1000);