// spam protection for mails
function replaceMaskedEmails() {
  document.querySelectorAll("span.madress").forEach(span => {
    const address = span.textContent.replace(" [at] ", "@");
    const link = document.createElement("a");
    link.href = `mailto:${address}`;
    link.textContent = address;
    span.replaceWith(link);
  });
}

function disableEmptyInputsOnSubmit() {
  const form = document.querySelector("#hawk-searchMainPage");
  if (!form) return;

  form.addEventListener("submit", () => {
    form.querySelectorAll("input").forEach(input => {
      if (!input.value) input.disabled = true;
    });
  });
}

function initPage() {
  replaceMaskedEmails();
  disableEmptyInputsOnSubmit();
}

document.addEventListener("DOMContentLoaded", initPage);
