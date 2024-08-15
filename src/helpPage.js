const d = document;

export function ChargeHelp(id, button) {
  const $button = d.getElementById(button);
  let $container = d.getElementById(id);

  $button.addEventListener("click", () => {
    $container.textContent = "";
    const $h2 = d.createElement("h2"),
      $phone = d.createElement("p"),
      $email = d.createElement("p"),
      $place = d.createElement("p");

    $phone.classList.add("helpText");
    $email.classList.add("helpText");
    $place.classList.add("helpText");

    $phone.textContent = "Call 612 4324-3254 USA";
    $email.textContent = "Send to TheBear@gmail.com";
    $place.textContent = "Go to Chicago,USA";

    $h2.textContent = "HELP SOLUTIONS";
    $container.appendChild($h2);
    $container.appendChild($phone);
    $container.appendChild($email);
    $container.appendChild($place);
  });
}
