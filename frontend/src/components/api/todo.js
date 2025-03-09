const apiUrl = 'http://localhost:3000/todos'; // Replace with your local backend URL

export const get_todos = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET', // or 'POST', 'PUT', 'DELETE' etc.
      headers: {
        'Content-Type': 'application/json', // If sending JSON data
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Or response.text() if not JSON
    console.log('Data received:', data);
    return data; // Return the data so it can be used outside the function
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};


