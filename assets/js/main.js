async function getPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if (!response.ok) {
        throw new Error('Error al obtener los posts');
      }
  
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  function displayPosts(posts) {
    const postsContainer = document.getElementById('post-data');
    postsContainer.innerHTML = ''; 
  
    const ul = document.createElement('ul'); 
  
    posts.forEach(post => {
      const li = document.createElement('li'); 
      li.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      ul.appendChild(li); 
    });
  
    postsContainer.appendChild(ul); 
  }
  