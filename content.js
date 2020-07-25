// Get duration and figure elements (duration contains time and figure indicates if video has been played (expected same length)
const elemCourses = document.querySelectorAll('.MaterialItem-content');
const elemCourseDescription = document.querySelector('.CourseDetail-middle-left');
const elemCourseDuration = document.querySelector('.CourseDetail-middle-right');
const elemDurationId = 'course-duration';

// Initialize duration variables
let totalDuration = 0;
let playedDuration = 0;

// Iterate over both lists
elemCourses.forEach((elemCourse) => {
  // Get element duration
  const elementDuration = elemCourse.querySelector('.MaterialItem-copy-time');
  const elemDurationText = elementDuration && elementDuration.textContent;

  if (elemDurationText) {
    const timeString = elemDurationText.split(' ')[0]; // 1:23 min -> 1:23
    const minuteSecondsPair = timeString.split(':'); // [1, 23]
    const [ minutes, seconds ] = minuteSecondsPair.map((numStr) => parseInt(numStr));

    videoDuration = (minutes * 60) + seconds;
    totalDuration += videoDuration;
    
    // Determine whether the video has been seen
    const elemSeen = elemCourse.querySelector('.MaterialItem-viewedoverlay');
    if (elemSeen) {
      playedDuration += videoDuration;
    }
  }
});

// Convert total durations to minutes
totalDuration = Math.round(totalDuration / 60);
playedDuration = Math.round(playedDuration / 60);

// Course duration (hours and minutes)
const hours = Math.round(totalDuration / 60);
const minutes = Math.round(totalDuration % 60);

// Remaining course duration (hours and minutes)
const remainingDuration = totalDuration - playedDuration;
const remainingHours = Math.round(remainingDuration / 60);
const remainingMinutes = Math.round(remainingDuration % 60);

// Add computed data to front (substitute previous content)
elemCourseDuration.innerHTML =
  `<i class="icon-clock_B"></i>
  <span class="CourseDetail-middle-right-text">
    ${hours}h ${minutes}m de contenido (${remainingHours}h ${remainingMinutes}m restantes)
  </span>`;
