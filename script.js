document.addEventListener('DOMContentLoaded', () => {
  const studentNamesDiv = document.getElementById('student-names');

  // Function to fetch and display student names
  async function fetchStudentNames() {
      try {
          // Fetch the list of text files from the students folder
          const response = await fetch('students/');
          const text = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');
          const links = Array.from(doc.querySelectorAll('a'))
              .map(link => link.href)
              .filter(href => href.endsWith('.txt'));

          // Loop through each file and fetch its content
          for (const link of links) {
              const fileResponse = await fetch(link);
              const studentName = await fileResponse.text();
              const nameElement = document.createElement('div');
              nameElement.className = 'name-box';
              nameElement.textContent = studentName;
              studentNamesDiv.appendChild(nameElement);
          }
      } catch (error) {
          console.error('Error fetching student names:', error);
      }
  }

  fetchStudentNames();
});