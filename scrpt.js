// Simple navigation script
const buttons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('main section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');

    // Hide all sections
    sections.forEach(sec => sec.classList.remove('active'));
    // Show target section
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});
