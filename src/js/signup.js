document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://your-api.com/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Signup successful!');
            // redirect or store token
        } else {
            alert(result.message || 'Signup failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong');
    }
})