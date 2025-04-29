
// code to select the div to place the button dinamically 
// and to put the iframe on a wrapper beside it
const siteElement = document.querySelector('.col.sqs-col-12.span-12');
const formWrapper = document.createElement('div');
const formWrapperRow = document.createElement('div');
formWrapperRow.classList.add('row');
formWrapperRow.classList.add('sqs-row');
formWrapperRow.appendChild(formWrapper);
formWrapper.id = 'injectedFormWrapper';
formWrapper.classList.add('col');
formWrapper.classList.add('sqs-col-12');
formWrapper.classList.add('span-12')
siteElement.appendChild(formWrapperRow);
const iframe = document.createElement('iframe');
iframe.src = '/test-form';
iframe.style.display="none";
formWrapper.appendChild(iframe);
