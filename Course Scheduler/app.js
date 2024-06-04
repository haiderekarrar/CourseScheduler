
document.addEventListener('DOMContentLoaded', fetchCourses);

document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedCourses = Array.from(document.getElementById('courses').selectedOptions).map(option => option.value);
    fetchSchedules(selectedCourses);
});

function fetchCourses() {
    fetch('http://localhost:3000/courses')
        .then(response => response.json())
        .then(data => populateCourseOptions(data))
        .catch(error => console.error('Error fetching courses:', error));
}

function populateCourseOptions(courses) {
    const select = document.getElementById('courses');
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.id;
        option.textContent = `${course.name} (${course.time})`;
        select.appendChild(option);
    });
}

function fetchSchedules(selectedCourses) {
    fetch('http://localhost:3000/generate-schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedCourses),
    })
    .then(response => response.json())
    .then(schedules => displaySchedules(schedules))
    .catch(error => console.error('Error generating schedules:', error));
}

function displaySchedules(schedules) {
    const resultsDiv = document.getElementById('scheduleResults');
    resultsDiv.innerHTML = `<h2>Possible Schedules</h2><ul>${schedules.map(schedule => `<li>${schedule}</li>`).join('')}</ul>`;
}
