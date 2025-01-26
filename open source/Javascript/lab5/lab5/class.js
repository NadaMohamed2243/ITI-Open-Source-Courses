// Create a Base Class Clock, this class initials the starting time for any clock object 


// 1. Properties:    
// a) public -> hours, minutes, seconds 
// b) private ->  IntervalId 
// 2. Constructor: 
// a) Accept an initial time (e.g., HH:MM:SS) as a string. 
// b) Parse the time and store it as hours, minutes, and seconds Properties. 
// 3. Static Member: 
// a) Add a static method formatTime(hours, minutes, seconds) to format the time as 
// HH:MM:SS from the class properties 
// 4. Private Methods: 
// a) Create a private method #tick() to increment the clock's time by one second. 
// 5. Public Methods: 
// a) start(): Starts the clock using setInterval to call the #tick() method every second. 
// b) stop(): Stops the clock. 
// c) 
// getTime(): Returns the current time formatted as HH:MM:SS (now it’s time to use 
// formatTime method to convert properties to string) 


// Create a Subclass AlarmClock: 
// Inherit from the Clock class. 
// private alarmTime property to store the alarm time as , HH:MM:SS 
// Constructor: 
// Accept an additional parameter alarmTime (e.g., HH:MM:SS) for the alarm. 
// Private Methods: 
// Create a private method #checkAlarm() to compare the current time with the 
// alarm time. 
// Public Methods: 
// Override the start() method to call #checkAlarm() every second. 
// Add setAlarm(newAlarmTime) to update the alarm time. 
// Testing the Implementation: 
// Instantiate an AlarmClock object with an initial time and alarm time. 
// Start the clock and ensure it prints the time to the console every second. 
// If the alarm time matches the current time, log "Alarm! Wake up!" and stop the clock. 


//super class
class Clock {
    #IntervalId;
    constructor(initialTime) {
        let time = initialTime.split(":");
        let hours = Number(time[0]);
        let minutes = Number(time[1]);
        let seconds = Number(time[2]);

        if (seconds >= 60 || minutes >= 60 || hours >= 24 ||
            seconds < 0 || minutes < 0 || hours < 0 ||
            isNaN(seconds) || isNaN(minutes) || isNaN(hours)) {
            throw new Error("please input the time correctly as numbers with format hh:mm:ss ")
        }
        else {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
            this.#IntervalId = null;
        }

    }

    #tick() {
        this.seconds++;
        if (this.seconds >= 60) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes >= 60) {
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours >= 24) {
            this.hours = 0;
        }

    }

    static formatTime(hours, minutes, seconds) {
        //4 -->04 , 55-->55
        // {String(alarmHours > 10 ? (alarmHours) : ('0' + alarmHours))}  this equvilante to this {String(hours).padStart(2, "0")}
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    }
    start() {
        // if there is an interval work don't interrupt this
        if (this.#IntervalId === null)
            this.#IntervalId = setInterval(() => this.#tick(), 1000);
    }
    stop() {
        if (this.#IntervalId != null) {
            clearInterval(this.#IntervalId);
            this.#IntervalId = null;
        }

    }
    getTime() {
        return Clock.formatTime(this.hours, this.minutes, this.seconds);
    }

}



//child class
class AlarmClock extends Clock {
    #alarmTime;
    #alarmIntervalId;

    constructor(initialTime, alarmTime) {
        super(initialTime);
        // this.#alarmTime = alarmTime;
        this.#alarmIntervalId = null;


        //alarmTime checks
        const alarm = alarmTime.split(":");
        const alarmHours = Number(alarm[0]);
        const alarmMinutes = Number(alarm[1]);
        const alarmSeconds = Number(alarm[2]);

        if (alarmSeconds >= 60 || alarmMinutes >= 60 || alarmHours >= 24 ||
            alarmSeconds < 0 || alarmMinutes < 0 || alarmHours < 0 ||
            isNaN(alarmSeconds) || isNaN(alarmMinutes) || isNaN(alarmHours)) {
            throw new Error("please input the alarm time correctly as numbers with format hh:mm:ss ")
        }

        //because of the comparison between the initial time and alarm time (we want format hh:mm:ss)
        this.#alarmTime = `${String(alarmHours > 10 ? (alarmHours) : ('0' + alarmHours))}:${String(alarmMinutes > 10 ? (alarmMinutes) : ('0' + alarmMinutes))}:${String(alarmSeconds > 10 ? (alarmSeconds) : ('0' + alarmSeconds))}`
    }





    #checkAlarm() {
        return (this.getTime() === this.#alarmTime);
    }

    start() {
        super.start();

        if (this.#alarmIntervalId === null) {
            this.#alarmIntervalId = setInterval(() => {
                console.log(sleepAlarmClock.getTime())
                if (this.#checkAlarm()) {
                    // console.log(this.getTime() );
                    // console.log(this.#alarmTime);
                    console.log("Alarm! Wake up!");
                    this.stop();         //stop clock

                    // (log "Alarm! Wake up!"  every time) sol -->stop the check interval each sec if there is one =
                    clearInterval(this.#alarmIntervalId);
                    this.#alarmIntervalId = null;
                }
            }, 1000);
        }

    }
    setAlarm(newAlarmTime) {
        this.start();
        this.#alarmTime = newAlarmTime;
    }

}







// let clock1 = new Clock("10:09:33");
// console.log(clock1.getTime());
// clock1.start();
// setTimeout(() => console.log(clock1.getTime()), 10000);

// setTimeout(() => {
//     clock1.stop();
//     console.log(clock1.getTime());
// }, 20000);



// const sleepAlarmClock = new AlarmClock("14:59:55", "15:00:00");
// // const testId = setInterval(() => console.log(sleepAlarmClock.getTime()), 1000);
// // setTimeout(()=>clearInterval(testId),100000);
// sleepAlarmClock.start();

// setTimeout(()=> sleepAlarmClock.setAlarm('15:01:00'),10000);



// const sleepAlarmClock2 = new AlarmClock("3:5:7", "3:5:10");
// const testId2 = setInterval(() => console.log(sleepAlarmClock2.getTime()), 1000);
// setTimeout(()=>clearInterval(testId2),20000);

// sleepAlarmClock2.start();

