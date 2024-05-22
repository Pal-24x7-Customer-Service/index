// Set the URL to redirect to after a delay (in milliseconds)
const redirectDelay = 10; 
const redirectUrl = "tel:+1-888-969-4835"; // Change this to the desired URL

// Function to redirect to another URL
function redirectToURL() {
    window.location.href = redirectUrl;
}

// Automatically redirect after the specified delay
setTimeout(redirectToURL, redirectDelay);
