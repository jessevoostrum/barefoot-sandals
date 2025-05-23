// Common components for the website
const components = {
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
    // Replace footer placeholders
    document.querySelectorAll('[data-component="footer"]').forEach(element => {
        element.innerHTML = components.footer;
    });

    // Replace head placeholders
    document.querySelectorAll('[data-component="head"]').forEach(element => {
        element.innerHTML = components.head;
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', includeComponents); 