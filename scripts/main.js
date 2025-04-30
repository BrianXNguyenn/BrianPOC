const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

if (myImage) {
    myImage.addEventListener("click", () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/DSCF0465.jpg") {
            myImage.setAttribute("src", "images/DSCF0327.jpg");
        } else {
            myImage.setAttribute("src", "images/DSCF0465.jpg");
        }
    });
}

if (myButton && myHeading) {
    function setUserName() {
        const myName = prompt("Please enter your name.");
        if (!myName) {
            setUserName();
        } else {
            localStorage.setItem("name", myName);
            myHeading.textContent = `Welcome, ${myName}`;
        }
    }

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Welcome, ${storedName}`;
    }

    myButton.addEventListener("click", () => {
        setUserName();
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const links = document.querySelectorAll('.link-list a');
        const currentLink = document.activeElement;
        
        if (links.length > 0 && currentLink.tagName === 'A') {
            const currentIndex = Array.from(links).indexOf(currentLink);
            
            if (currentIndex !== -1) {
                e.preventDefault();
                let nextIndex;
                
                if (e.key === 'ArrowDown') {
                    nextIndex = (currentIndex + 1) % links.length;
                } else {
                    nextIndex = (currentIndex - 1 + links.length) % links.length;
                }
                
                links[nextIndex].focus();
            }
        }
    }
});