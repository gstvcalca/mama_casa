// this code was to load the form on the /test-form page and put it in an element
// on the current page
// this approach was aborted due to layout and captacha validation issues
document.addEventListener('DOMContentLoaded', function() {
  const FORM_PAGE_URL = '/test-form';     // ↳ URL of your dedicated form page
  const containerId  = 'injectedFormWrapper'; // ↳ where we’ll drop in the form

  // 1) Create a hidden wrapper for the form
  let wrapper = document.getElementById(containerId);
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.id = containerId;
    wrapper.style.display = 'none';
    document.body.appendChild(wrapper);
  }

  // 2) Function to load & inject the form HTML (only once)
  let formLoaded = false;
  function loadForm() {
    if (formLoaded) return;
    fetch(FORM_PAGE_URL)
      .then(r => r.text())
      .then(html => {
        // parse the response
        const parser = new DOMParser();
        const doc    = parser.parseFromString(html, 'text/html');
        // pick out just the <form> (or its parent wrapper) from that page:
        const formEl = doc.querySelector('.sqs-block.form-block.sqs-block-form');
        wrapper.appendChild(formEl);
        // pick out the captcha div
        const captchaDiv = doc.querySelector('.grecaptcha-badge');
        console.log(captchaDiv);
        if(captchaDiv){wrapper.appendChild(captchaDiv);}
  
        // pick the captcha script
        const captchaScript = doc.querySelector('script[src*="recaptcha/enterprise.js"]')
        console.log(captchaScript);
        if(captchaScript){document.head.appendChild(captchaScript);}
        formLoaded = true;
        const element = document.querySelector('.form-inner-wrapper');
        if (element) {
          element.removeAttribute('hidden');
          console.log("hidden removed");
        }
        return;
      })
      .catch(console.error);
  }
  loadForm();
  const element = document.querySelector('.form-inner-wrapper');
  if (element) {
    element.removeAttribute('hidden');
    console.log("hidden removed");
  }
});
