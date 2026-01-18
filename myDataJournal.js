/*
Weekly Data Journal

PREDICTIONS
- The day with the most screen time will likely be a weekday (probably Wednesday).
- Best focus day will be a day with more sleep and less screen time.
- More caffeine might help focus a little.
*/

const weekData = [
  {
    day: "Monday",
    sleepHours: 6,
    screenTime: 8,
    mood: "tired",
    caffeineIntake: 2,
    focusLevel: 6
  },
  {
    day: "Tuesday",
    sleepHours: 7,
    screenTime: 7,
    mood: "okay",
    caffeineIntake: 2,
    focusLevel: 7
  },
  {
    day: "Wednesday",
    sleepHours: 5,
    screenTime: 9,
    mood: "stressed",
    caffeineIntake: 3,
    focusLevel: 5
  },
  {
    day: "Thursday",
    sleepHours: 8,
    screenTime: 6,
    mood: "good",
    caffeineIntake: 1,
    focusLevel: 9
  },
  {
    day: "Friday",
    sleepHours: 7,
    screenTime: 7.5,
    mood: "happy",
    caffeineIntake: 2,
    focusLevel: 8
  },
  {
    day: "Saturday",
    sleepHours: 9,
    screenTime: 5,
    mood: "relaxed",
    caffeineIntake: 1,
    focusLevel: 7
  },
  {
    day: "Sunday",
    sleepHours: 8,
    screenTime: 6,
    mood: "calm",
    caffeineIntake: 1,
    focusLevel: 8
  }
];

// 1. Find the day with the highest screen time
function findHighestScreenTime() {
  return weekData.reduce((maxDay, currentDay) =>
    currentDay.screenTime > maxDay.screenTime ? currentDay : maxDay
  );
}
console.log("Highest screen time:", findHighestScreenTime());


// 2. Calculate average sleep hours for the week
function averageSleep() {
  const totalSleep = weekData.reduce(
    (sum, day) => sum + day.sleepHours,
    0
  );
  return totalSleep / weekData.length;
console.log("Average sleep hours:", averageSleep());  

// 3. Find the most frequent mood
function mostFrequentMood() {
  const moodCount = {};

  weekData.forEach(day => {
    moodCount[day.mood] = (moodCount[day.mood] || 0) + 1;
  });

  return Object.keys(moodCount).reduce((a, b) =>
    moodCount[a] > moodCount[b] ? a : b
  );
}
 console.log("Most frequent mood:", mostFrequentMood());

  
// 4. Explore relationship between caffeine and focus
function correlateCaffeineToFocus() {
  return weekData.map(day => ({
    day: day.day,
    caffeine: day.caffeineIntake,
    focus: day.focusLevel
  }));
}
console.log("Caffeine vs Focus:", correlateCaffeineToFocus());
