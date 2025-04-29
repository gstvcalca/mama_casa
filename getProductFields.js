// code to get the fields on the product page
const currentProductName = document.querySelector("#pageWrapper div > div > h1 > strong") || document.querySelector("#pageWrapper div > div > h2 > strong");
const currentDesigner = currentProductName.parentElement.nextSibling;
const currentProductImg = document.querySelector("#pageWrapper img");
const currentDescription = document.querySelectorAll(".sqs-html-content")[1]

designerElement.innerText = "By " +  currentDesigner.innerText;
productNameElement.innerText = currentProductName.innerText;
imgElement.setAttribute('src', currentProductImg.src);
descriptionElement.innerText = currentDescription.innerText;
