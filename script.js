const generateRandomName = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extract name details from the response
        const fullName = `${data.results[0].name.first} ${data.results[0].name.last}`;

        // Update the displayed name
        document.getElementById('generatedName').textContent = fullName;
    } catch (error) {
        console.error('Error fetching name:', error);
        document.getElementById('generatedName').textContent = 'Error generating name';
    }
};

// Event listener for the button
document.getElementById('generateButton').addEventListener('click', generateRandomName);
