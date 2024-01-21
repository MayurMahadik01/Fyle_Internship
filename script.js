function fetchRepositories() {
    window.location.href = 'repository-1.html';    
  }

  function changePage(pageNumber) {
    // Assuming you have a total number of pages available (e.g., totalPages)
    const totalPages = 10;
  
    // Get the current active element
    const activeElement = document.querySelector('.pagination a.active');
  
    // Calculate the new page
    let newPage = parseInt(activeElement.textContent) + pageNumber;
  
    // Ensure the newPage is within the valid range
    newPage = Math.max(1, Math.min(newPage, totalPages));
  
    // Remove the active class from the current active element
    activeElement.classList.remove('active');
  
    // Find the new active element and add the active class
    const newActiveElement = document.querySelector(`.pagination a:nth-child(${newPage + 1})`);
    newActiveElement.classList.add('active');
  
    // You can add logic here to redirect to the corresponding page
    // For demonstration purposes, log the page number to the console
    console.log(`Redirecting to page ${newPage}`);
  }
  
  