async function fetchAndDisplayPosts() {
    try {
        // Fetch posts from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        // Group posts by user ID, limiting to 3 titles per user
        const userPosts = {};
        posts.forEach(post => {
            // If user ID is not in the object, create an empty array for it
            if (!userPosts[post.userId]) {
                userPosts[post.userId] = [];
            }
            // Add the post title if the user has fewer than 3 posts
            if (userPosts[post.userId].length < 3) {
                userPosts[post.userId].push(post.title);
            }
        });

        // Wait for 3 seconds before displaying the posts
        setTimeout(() => {
            const postContainer = document.getElementById('post-container');
            
            for (const userId in userPosts) {
                const userSection = document.createElement('div');
                userSection.innerHTML = `
                    <h2>User ID: ${userId}</h2>
                    <ul>
                        ${userPosts[userId].map(title => `<li>${title}</li>`).join('')}
                    </ul>
                `;
                postContainer.appendChild(userSection);
            }
        }, 3000); // 3-second delay
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function
fetchAndDisplayPosts();
