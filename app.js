document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        { id: 1, name: 'Introduction to Programming', days: 'Monday', time: '9:00 AM - 11:00 AM' },
        { id: 2, name: 'Advanced Web Development', days: 'Wednesday', time: '1:00 PM - 3:00 PM' },
        { id: 3, name: 'Data Structures and Algorithms', days: 'Friday', time: '3:00 PM - 4:00 PM' },
        { id: 4, name: 'Database Systems', days: 'Monday', time: '11:00 AM - 12:15 PM'  },
        { id: 5, name: 'Software Engineering', days: 'Monday', time: '1:00 PM - 2:00 PM'  },
        { id: 6, name: 'Principles of Macroeconomics', days: 'Tuesday', time: '8:00 AM - 9:00 AM'  },
        { id: 7, name: 'Principles of Microeconomics', days: 'Tuesday', time: '9:00 AM - 10:00 AM'  },
        { id: 8, name: 'Statistics I', days: 'Tuesday', time: '1:00 PM - 3:00 PM'  },
        { id: 9, name: 'Statistics II', days: 'Wednesday', time: '3:00 PM - 4:00 PM'  },
        { id: 10, name: 'History of Economic Thought', days: 'Wednesday', time: '10:00 AM - 11:00 AM'  },
        { id: 11, name: 'Managerial Economics', days: 'Thursday', time: '8:00 AM - 9:00 AM'  },
        { id: 12, name: 'Finite Mathematics', days: 'Thursday', time: '10:00 AM - 11:30 AM'  },
        { id: 13, name: 'Calculus I', days: 'Thursday', time: '1:00 PM - 2:00 PM'  },
        { id: 14, name: 'Calculus II', days: 'Friday', time: '8:00 AM - 9:00 AM'  },
        { id: 15, name: 'Multivariable Calculus I', days: 'Friday', time: '1:00 PM - 3:00 PM'  },
        { id: 16, name: 'Multivariable Calculus II', days: 'Tuesday', time: '3:00 PM - 4:00 PM'  },
        { id: 17, name: 'Introduction to Biology', days: 'Thursday', time: '3:00 PM - 4:00 PM'  },
    ];
    
    const coursesSelect = document.getElementById('courses');
    const scheduleResults = document.getElementById('scheduleResults');
    const courseForm = document.getElementById('courseForm');

    // Function to populate course options
    function populateCourses() {
        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = course.id;
            option.textContent = course.name;
            coursesSelect.appendChild(option);
        });
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();
        const selectedCourses = Array.from(coursesSelect.selectedOptions).map(option => {
            return courses.find(course => course.id.toString() === option.value);
        });

        // Generate and display the schedule
        let scheduleHTML = "<h2>Your Schedule:</h2><ul>";
        selectedCourses.forEach(course => {
            if (course) { // Ensure the course is found
                scheduleHTML += `<li><strong>${course.name}</strong> - ${course.days}, ${course.time}</li>`;
            }
        });
        scheduleHTML += "</ul>";

        scheduleResults.innerHTML = scheduleHTML;
    }

    // Initialize the form with courses
    populateCourses();

    // Setup event listener for form submission
    courseForm.addEventListener('submit', handleFormSubmit);
});
