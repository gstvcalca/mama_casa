const request_quote_button = document.querySelector(
  "button#request_quote_button"
);
if (request_quote_button) {
  const form_modal = document.createElement("div");
  form_modal.id = "form_modal_wrapper";
  const modal_background = document.createElement("div");
  modal_background.id = "modal_background";

  const iframe = document.createElement("iframe");
  iframe.id = "iframe_modal";
  iframe.src = "/test-form";
  iframe.onload = () => {
    const doc = iframe.contentDocument;
    doc.querySelector("#headerWrapper").remove();
    doc.querySelector("#footerWrapper").remove();
    doc.querySelector("#pageWrapper").style.marginTop = "0px";
    doc.querySelector("section#page").style.padding = "0px";
    const formWrapper = doc.querySelector(".form-wrapper");
    formWrapper.style.position = "relative";
    const close_form_button = doc.createElement("button");
    close_form_button.id = "close_form_button";
    close_form_button.innerText = "×";
    close_form_button.role = "button";
    close_form_button.tabindex = "0";
    close_form_button.ariaLabel = "close";
    close_form_button.fontSize = "16px";

    const currentForm = doc.querySelector("form.react-form-contents");
    const newDiv = doc.createElement("div");
    newDiv.id = "productInformationWrapper";
    currentForm.prepend(newDiv);

    close_form_button.addEventListener("click", () => {
      form_modal.style.display = "none";
    });

    formWrapper.appendChild(close_form_button);
    doc.querySelector("div#site").style.padding = "40px";
  };

  form_modal.appendChild(modal_background);
  form_modal.appendChild(iframe);
  document.body.appendChild(form_modal);

  request_quote_button.addEventListener("click", () => {
    form_modal.style.display = "flex";
  });
}
