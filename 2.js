document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

   
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

  
    const userData = {
        name: name,
        email: email,
        message: message
    };

    console.log('Form submitted successfully!');
    console.log('User Data:', userData);

 
    document.getElementById('userForm').reset();
});