
// observer for contents
const observer = new IntersectionObserver((contents) => {
    // For each content, show the new content that is displayed in the screen
    // The previous one will be hided away
    contents.forEach((content) => {
        console.log(content)
        // If content intersects the border, display the show class, else display the hide class
        if(content.isIntersecting) {
            content.target.classList.add('show');
        } else {
            content.target.classList.remove('show');
        }
    }) 
})

// Simple scroll animation
const hiddenContent = document.querySelectorAll(".hidden");
// Observe the contents for each section within the website
hiddenContent.forEach((cont) => observer.observe(cont));

// Simple theme changer
let darkmode = localStorage.getItem('darkmode');
// get the themebutton from html
const themeButton = document.getElementById("theme-button");

//add the darkmode and set the localsotrage item to darkmode
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

//remove the darkmode
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmode === 'active') {
    enableDarkMode();
} 

// Toggle theme on button click
// click to gain enable darkmode. If already darkmode, run the disabeDarkMode function
themeButton.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode');
        darkmode !== "active" ? enableDarkMode() : disableDarkMode()
});