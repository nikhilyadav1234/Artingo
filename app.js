// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header.container');

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('active');
// 	mobile_menu.classList.toggle('active');
// });

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 250) {
// 		header.style.backgroundColor = '#29323c';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

// menu_item.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		hamburger.classList.toggle('active');
// 		mobile_menu.classList.toggle('active');
// 	});
// });


// app.js

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const serviceItems = document.querySelectorAll('.service-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    // Search Functionality
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.toLowerCase().trim();
  
      serviceItems.forEach((item) => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
  
        if (title.includes(query) || description.includes(query)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
  
      // Reset active filter
      filterButtons.forEach((btn) => btn.classList.remove('active'));
    });
  
    // Category Filtering
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
  
        const category = button.getAttribute('data-category');
  
        serviceItems.forEach((item) => {
          if (category === 'all') {
            item.classList.remove('hidden');
          } else {
            if (item.getAttribute('data-category') === category) {
              item.classList.remove('hidden');
            } else {
              item.classList.add('hidden');
            }
          }
        });
  
        // Clear search input
        searchInput.value = '';
      });
    });
  });
  