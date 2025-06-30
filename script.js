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

// Search functionality for values page
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('fruitSearch');
    const tableBody = document.getElementById('fruitTableBody');
    const noResultsRow = document.getElementById('noResultsRow');
    const mutationSearch = document.getElementById('mutationSearch');
    const mutationsTable = document.querySelectorAll('.mutations-table')[1];
    const mutationsBody = mutationsTable ? mutationsTable.querySelector('tbody') : null;
    const noResultsRowMutations = document.getElementById('noResultsRowMutations');
    const petSearch = document.getElementById('petSearch');
    const petTableBody = document.getElementById('petTableBody');
    const noResultsRowPets = document.getElementById('noResultsRowPets');
    
    // Fruit search
    if (searchInput && tableBody) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = tableBody.querySelectorAll('tr');
            let visibleCount = 0;
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });
            if (noResultsRow) {
                noResultsRow.style.display = visibleCount === 0 ? '' : 'none';
            }
        });
    }
    // Mutation search
    if (mutationSearch && mutationsBody) {
        mutationSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const mutationRows = mutationsBody.querySelectorAll('tr');
            let visibleMutations = 0;
            mutationRows.forEach(row => {
                if (row.id === 'noResultsRowMutations') return;
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                    visibleMutations++;
                } else {
                    row.style.display = 'none';
                }
            });
            if (noResultsRowMutations) {
                noResultsRowMutations.style.display = visibleMutations === 0 ? '' : 'none';
            }
        });
    }
    // Pet search
    if (petSearch && petTableBody) {
        petSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = petTableBody.querySelectorAll('tr');
            let visibleCount = 0;
            rows.forEach(row => {
                if (row.id === 'noResultsRowPets') return;
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });
            if (noResultsRowPets) {
                noResultsRowPets.style.display = visibleCount === 0 ? '' : 'none';
            }
        });
    }
}); 