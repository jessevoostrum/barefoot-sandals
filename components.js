// Common components for the website
const components = {
    footer: `
        <div class="footer">
            <nav>
                <div class="footer-link"><a href="policies.html">Delivery</a></div>
                <div class="footer-link"><a href="policies.html#returns">Return Policy</a></div>
                <div class="footer-link"><a href="policies.html#refunds">Refund and Dispute Policy</a></div>
                <div class="footer-link"><a href="https://mailhide.io/e/GfrOzBL1">Contact</a></div>
            </nav>
        </div>
    `,
    
    head: `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    `
};

// Function to include components
function includeComponents() {
    // Replace header placeholders
    document.querySelectorAll('[data-component="header"]').forEach(element => {
        element.innerHTML = components.header;
    });

    // Replace footer placeholders
    document.querySelectorAll('[data-component="footer"]').forEach(element => {
        element.innerHTML = components.footer;
    });

    // Replace head placeholders
    document.querySelectorAll('[data-component="head"]').forEach(element => {
        element.innerHTML = components.head;
    });
}

// Function to handle header collapse on scroll
function handleHeaderCollapse() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    const COLLAPSE_THRESHOLD = 60;  // Threshold to collapse the header
    const EXPAND_THRESHOLD = 20;    // Threshold to expand the header (lower than collapse)
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > COLLAPSE_THRESHOLD) {
            header.classList.remove('uncollapsed');
        } else if (currentScroll < EXPAND_THRESHOLD) {
            header.classList.add('uncollapsed');
        }
        
        lastScroll = currentScroll;
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    includeComponents();
    // Check if current page is index.html (or root)
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    if (isIndex) {
        handleHeaderCollapse();
        // Start expanded on index page if at top
        const header = document.querySelector('.header');
        if (window.scrollY < 20) {
            header.classList.add('uncollapsed');
        }
    }
    // On non-index pages, header stays collapsed by default
}); 