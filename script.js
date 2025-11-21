// Function to show different pages
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageName);
    selectedPage.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);

    event.target.reset();
}

// Prevent default link behavior for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});
