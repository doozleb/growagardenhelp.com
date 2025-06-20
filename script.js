// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// Horizontal sticky navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollX = window.pageXOffset;
    let lastScrollY = window.pageYOffset;
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const currentScrollX = window.pageXOffset;
            const currentScrollY = window.pageYOffset;
            
            // Check if there's horizontal scrolling
            const isHorizontalScroll = Math.abs(currentScrollX - lastScrollX) > Math.abs(currentScrollY - lastScrollY);
            
            if (isHorizontalScroll && Math.abs(currentScrollX - lastScrollX) > 5) {
                // Horizontal scrolling detected - make navbar sticky
                navbar.classList.add('horizontal-sticky');
            } else if (Math.abs(currentScrollY - lastScrollY) > 5) {
                // Vertical scrolling detected - remove sticky
                navbar.classList.remove('horizontal-sticky');
            }
            
            lastScrollX = currentScrollX;
            lastScrollY = currentScrollY;
        });
    }
});

// Search functionality for values page
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('fruitSearch');
    const tableBody = document.getElementById('fruitTableBody');
    
    if (searchInput && tableBody) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = tableBody.querySelectorAll('tr');
            
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
}); 