const sleepAlarmClock = new AlarmClock("14:59:55", "15:00:00");

sleepAlarmClock.start();

setTimeout(() => sleepAlarmClock.setAlarm('15:00:10'), 10000);