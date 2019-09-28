// Get duration and figure elements (duration contains time and figure indicates if video has been played (expected same length)
const elemCourses = document.querySelectorAll('.Material');
const elemTitle = document.querySelector('.CourseBanner-title');
const seenClass = 'is-seen';
const elemDurationId = 'course-duration';
//const rate = 1.5;

// Initialize duration variables
let totalDuration = 0;
let playedDuration = 0;

// Iterate over both lists
elemCourses.forEach((elemCourse) => {
  const elemIcon = elemCourse.querySelector('.MaterialProgress-figure');
  const elemDurationText = elemCourse.querySelector('.MaterialContent-duration').textContent;

  if (elemIcon && elemDurationText) {
    const videoDuration = parseInt(elemDurationText.split(':')[0]);
    totalDuration += videoDuration;
    
    if (elemIcon.classList.contains(seenClass)) {
      playedDuration += videoDuration;
    }
  }
});

// Course duration (hours and minutes)
const hours = Math.floor(totalDuration / 60);
const minutes = Math.floor(totalDuration % 60);
// Remaining course duration (hours and minutes)
const remainingDuration = totalDuration - playedDuration;
const remainingHours = Math.floor(remainingDuration / 60);
const remainingMinutes = Math.floor(remainingDuration % 60);

// Check if duration element exists or create new element
let elemInfo = document.querySelector(`#${elemDurationId}`);
if (!elemInfo) {
  elemInfo = document.createElement('div');
  //elemInfo.className = 'icon-clock';
  elemInfo.id = 'course-duration';
  elemInfo.style = 'font-size: .8em; margin-bottom: 8px;';
}
elemInfo.innerHTML = `<span style="margin-right: 1em;"><strong>Tiempo total:</strong> ${hours}h ${minutes}m</span>|<span style="margin-left: 1em;"><strong>Tiempo restante:</strong> ${remainingHours}h ${remainingMinutes}m</span>`;

// Insert new element after course title
elemTitle.parentNode.insertBefore(elemInfo, elemTitle.nextSibling);
