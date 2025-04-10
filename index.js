
// // app.js

// document.addEventListener('DOMContentLoaded', () => {
//     const searchForm = document.getElementById('search-form');
//     const searchInput = document.getElementById('search-input');
//     const recipeItems = document.querySelectorAll('.recipe-item');
//     const filterButtons = document.querySelectorAll('.filter-btn');
  
//     // Search Functionality
//     searchForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       const query = searchInput.value.toLowerCase().trim();
  
//       recipeItems.forEach((item) => {
//         const title = item.querySelector('.recipe-info h2').textContent.toLowerCase();
//         const description = item.querySelector('.recipe-info p').textContent.toLowerCase();
  
//         if (title.includes(query) || description.includes(query)) {
//           item.style.display = 'flex';
//         } else {
//           item.style.display = 'none';
//         }
//       });
//     });
  
//     // Category Filtering
//     filterButtons.forEach((button) => {
//       button.addEventListener('click', () => {
//         // Remove active class from all buttons
//         filterButtons.forEach((btn) => btn.classList.remove('active'));
//         // Add active class to the clicked button
//         button.classList.add('active');
  
//         const category = button.getAttribute('data-category');
  
//         recipeItems.forEach((item) => {
//           if (category === 'all') {
//             item.style.display = 'flex';
//           } else {
//             if (item.getAttribute('data-category') === category) {
//               item.style.display = 'flex';
//             } else {
//               item.style.display = 'none';
//             }
//           }
//         });
//       });
//     });
//   });

  
//   // Add this inside the filterButtons.forEach loop
// button.addEventListener('click', () => {
//   // ... existing code ...

//   // Clear search input
//   searchInput.value = '';
// });


























// function highlightText(text, query) {
//     if (!query) return text;
//     const regex = new RegExp(`(${query})`, 'gi');
//     return text.replace(regex, '<span class="highlight">$1</span>');
//   }
  
//   // Update the search functionality
//   searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const query = searchInput.value.toLowerCase().trim();
  
//     recipeItems.forEach((item) => {
//       const titleElement = item.querySelector('.recipe-info h2');
//       const descriptionElement = item.querySelector('.recipe-info p');
//       const title = titleElement.textContent.toLowerCase();
//       const description = descriptionElement.textContent.toLowerCase();
  
//       if (title.includes(query) || description.includes(query)) {
//         item.style.display = 'flex';
//         // Highlight matching text
//         titleElement.innerHTML = highlightText(titleElement.textContent, query);
//         descriptionElement.innerHTML = highlightText(descriptionElement.textContent, query);
//       } else {
//         item.style.display = 'none';
//         // Remove highlight
//         titleElement.innerHTML = titleElement.textContent;
//         descriptionElement.innerHTML = descriptionElement.textContent;
//       }
//     });
//   });
  










//   // After filtering logic
// const allVisible = Array.from(recipeItems).some(item => item.style.display !== 'none');
// const recipesContainer = document.querySelector('.all-recipes');

// if (!allVisible) {
//   recipesContainer.innerHTML = '<p class="no-results">No recipes found matching your search.</p>';
// } else {
//   // Remove no-results message if present
//   const noResults = document.querySelector('.no-results');
//   if (noResults) {
//     noResults.remove();
//   }
// }
