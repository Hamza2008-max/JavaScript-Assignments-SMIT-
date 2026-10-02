const mainContent = document.getElementById("main-content");
const childElementsOutput = document.getElementById("child-elements-output");
const renderOutput = document.getElementById("render-output");

// Display the child elements of main-content.
for (var i = 0; i < mainContent.children.length; i++) {
    var child = mainContent.children[i];
    const childItem = document.createElement("li");
    childItem.textContent = child.outerHTML;
    childElementsOutput.appendChild(childItem);
    console.log(child);
}

// Display the innerHTML of all elements with the render class.
var renderElements = document.getElementsByClassName("render");
for (var j = 0; j < renderElements.length; j++) {
    var element = renderElements[j];
    const renderItem = document.createElement("li");
    renderItem.textContent = element.innerHTML;
    renderOutput.appendChild(renderItem);
    console.log(element.innerHTML);
}

// Fill the form fields using JavaScript.
document.getElementById("first-name").value = "Alex";
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";
