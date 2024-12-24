//The fetch API is commonly used for making HTTP requests.


//EG: Fetch user data from an API and log the response
async function fetchUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const userData = await response.json(); // Convert response to JSON
        console.log("User Data:", userData);
        }catch (error) {
        console.error("Error fetching user data:", error);
    }
  }
  
  fetchUserData();
  