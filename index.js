document.addEventListener('DOMContentLoaded', function () {
    let isTextChanged = false;
    let isLinkColorChanged = false;
    let isFooterColorChanged = false;
    let isElementCreated = false;
    let isElementHidden = false;
    let newElement; // Declare newElement outside of the event listener to access it in both functions.
    let isHeaderBolder = false; // Added a new variable to track the header state.

    // Function to change the displayed text of an element
    document.getElementById('changeTextButton').addEventListener('click', function () {
        const bestElement = document.querySelector('.best');
        if (isTextChanged) {
            bestElement.textContent = 'The best IT service for your security';
        } else {
            bestElement.textContent = 'Text changed!';
        }
        isTextChanged = !isTextChanged;
    });

    // Function to change the color of the links
    document.getElementById('changeColorButton').addEventListener('click', function () {
        const links = document.querySelectorAll('.menus a');
        const newColor = isLinkColorChanged ? 'initial' : 'red';
        links.forEach(function (link) {
            link.style.color = newColor;
        });
        isLinkColorChanged = !isLinkColorChanged;
    });

    // Function to change the color of the footer
    document.getElementById('changeBackgroundColorButton').addEventListener('click', function () {
        const footer = document.querySelector('footer');
        const newColor = isFooterColorChanged ? 'initial' : 'brown';
        footer.style.backgroundColor = newColor;
        isFooterColorChanged = !isFooterColorChanged;
    });

    // Function to create or delete a new element
    document.getElementById('createElementButton').addEventListener('click', function () {
        if (isElementCreated) {
            if (newElement) {
                newElement.parentNode.removeChild(newElement);
                newElement = undefined;
            }
        } else {
            newElement = document.createElement('div');
            newElement.textContent = 'How are you doing Miss Olaperi';
            document.body.appendChild(newElement);
        }
        isElementCreated = !isElementCreated;
    });

    // Function to delete the created element
    document.getElementById('deleteElementButton').addEventListener('click', function () {
        if (newElement) {
            newElement.parentNode.removeChild(newElement);
            newElement = undefined;
            isElementCreated = false;
        }
    });

    // Function to toggle making the header bolder
    document.getElementById('makeHeaderBolderButton').addEventListener('click', function () {
        const headerElement = document.querySelector('.top_layer');
        if (headerElement) {
            if (isHeaderBolder) {
                headerElement.style.fontWeight = 'normal';
            } else {
                headerElement.style.fontWeight = 'bold';
            }
            isHeaderBolder = !isHeaderBolder; // Toggle the state.
        }
    });

    // Add more event listeners for different actions as needed...
});
