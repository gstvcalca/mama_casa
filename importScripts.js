
//code to import every js script on the iframe into the current document
iframe.onload = () => {
  const doc = iframe.contentDocument;
  doc.querySelectorAll('script').forEach(oldScript => {
    const s = document.createElement('script');
    if (oldScript.src) {
      s.src = oldScript.src;
      s.async = false;              // preserve load order if needed
    } else {
      s.textContent = oldScript.textContent;
    }
    document.head.appendChild(s);  // this actually runs it
  });
  const form = doc.querySelector('.sqs-block.form-block.sqs-block-form');
  doc.querySelector('#headerWrapper').remove();
  doc.querySelector('#footerWrapper').remove();
  formWrapper.appendChild(form);
};