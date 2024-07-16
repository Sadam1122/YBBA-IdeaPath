// Function to reset all sections and hide problem selection
function resetSections() {
    var problemSection = document.getElementById('problemSection');
    var testSection = document.getElementById('testSection');

    // Hide problem section and test section
    problemSection.classList.add('hidden');
    testSection.classList.add('hidden');

    // Reset problem cards display
    var problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach(function(card) {
        card.style.display = 'block'; // Reset all problem cards to be displayed
    });
}

// Function to toggle visibility of section based on id and type
function toggleSection(sectionId, type) {
    resetSections(); // Call reset function before showing the selected section
    var section = document.getElementById(sectionId);
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
    
    // Scroll to the problem section when selecting a problem
    if (!section.classList.contains('hidden')) {
        var problemSection = document.querySelector('.problem-section');
        problemSection.scrollIntoView({ behavior: 'smooth' });

        // Hide problems that are not related to the selected type
        var problemCards = document.querySelectorAll('.problem-card');
        problemCards.forEach(function(card) {
            var cardType = card.classList.contains(type);
            card.style.display = cardType ? 'block' : 'none';
        });
    }
}

// Function to start the test for selected problem
function startTest(problemName, type) {
    resetSections(); // Call reset function before starting the test
    var testSection = document.getElementById('testSection');
    var countdownTimer = document.getElementById('countdown');
    var countdownDuration = 3 * 60 * 60; // 3 hours in seconds

    // Display test section and start countdown
    testSection.classList.remove('hidden');
    countdownTimer.textContent = formatTime(countdownDuration);

    // Update countdown timer every second
    var timerInterval = setInterval(function() {
        countdownDuration--;
        countdownTimer.textContent = formatTime(countdownDuration);
        if (countdownDuration <= 0) {
            clearInterval(timerInterval);
            countdownTimer.textContent = "Time's up!";
            // Additional logic for handling time's up scenario
        }
    }, 1000);
}

// Function to format time as HH:MM:SS
function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Drag and drop functionality for file upload
var dropArea = document.getElementById('dropArea');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropArea.addEventListener('dragenter', highlight, false);
dropArea.addEventListener('dragover', highlight, false);
dropArea.addEventListener('dragleave', unhighlight, false);
dropArea.addEventListener('drop', handleDrop, false);

function highlight() {
    dropArea.classList.add('drag-over');
}

function unhighlight() {
    dropArea.classList.remove('drag-over');
}

function handleDrop(e) {
    var dt = e.dataTransfer;
    var files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    // Logic to handle dropped files
}


// Function to reset all sections and hide problem selection
function resetSections() {
    var problemSection = document.getElementById('problemSection');
    var testSection = document.getElementById('testSection');

    // Hide problem section and test section
    problemSection.classList.add('hidden');
    testSection.classList.add('hidden');

    // Reset problem cards display
    var problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach(function(card) {
        card.style.display = 'block'; // Reset all problem cards to be displayed
    });

    // Reset countdown timer and stop interval if running
    var countdownTimer = document.getElementById('countdown');
    countdownTimer.textContent = formatTime(3 * 60 * 60); // Reset timer to 3 hours
    clearInterval(timerInterval); // Clear any existing interval timer
}

// Variable to hold timer interval globally
var timerInterval;

// Function to start the test for selected problem
function startTest(problemName, type) {
    resetSections(); // Call reset function before starting the test
    var testSection = document.getElementById('testSection');
    var countdownTimer = document.getElementById('countdown');
    var countdownDuration = 3 * 60 * 60; // 3 hours in seconds

    // Display test section and start countdown
    testSection.classList.remove('hidden');
    countdownTimer.textContent = formatTime(countdownDuration);

    // Update countdown timer every second
    timerInterval = setInterval(function() {
        countdownDuration--;
        countdownTimer.textContent = formatTime(countdownDuration);
        if (countdownDuration <= 0) {
            clearInterval(timerInterval);
            countdownTimer.textContent = "Time's up!";
            // Additional logic for handling time's up scenario
        }
    }, 1000);
}


// ini tombol pink
function togglePink() {
    const likeButton = document.querySelector('.like-button');
    likeButton.classList.toggle('pink');
}