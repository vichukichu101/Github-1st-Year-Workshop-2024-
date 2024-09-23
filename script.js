document.addEventListener('DOMContentLoaded', () => {
    const studentNamesDiv = document.getElementById('student-names');

    // Function to fetch and display student names
    async function fetchStudentNames() {
        try {
            // Fetch the JSON file containing student names
            const response = await fetch('students.json');
            const students = await response.json();

            // Loop through each student and create a div with class 'name-box'
            students.forEach(student => {
                const nameElement = document.createElement('div');
                nameElement.className = 'name-box';
                nameElement.textContent = student.name;
                studentNamesDiv.appendChild(nameElement);
            });
        } catch (error) {
            console.error('Error fetching student names:', error);
        }
    }

    fetchStudentNames();
});