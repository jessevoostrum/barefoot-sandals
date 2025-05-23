// Common components for the website
const components = {
    header: `
        <div class="header">
            <a href="index.html"><img src="images/logo-foot-color-brown.png" alt="logo"></a>
            <a href="index.html"><h1>Barefoot Sandals</h1></a>
        </div>
    `,
    footer: `
        <div class="footer">
            <nav>
                <div class="footer-link"><a href="policies.html#delivery">Delivery</a></div>
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
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('collapsed');
        } else {
            header.classList.remove('collapsed');
        }
        
        lastScroll = currentScroll;
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    includeComponents();
    handleHeaderCollapse();
}); 