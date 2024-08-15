const d = document;

export function ChargeHome(id, button) {
  const $button = d.getElementById(button);
  let $container = d.getElementById(id);

  $button.addEventListener("click", () => {
    $container.textContent = "";
    const $h2 = d.createElement("h2");
    const $h3 = d.createElement("h3");
    const $h4 = d.createElement("h4");
    //const $image = d.createElement("img")

    $h2.textContent = "The Beef of Chicagoland";
    $h3.textContent = "A restaurant with Special Food and excellent service";
    $h4.textContent = `If you liked the place or want to know more, you can watch our series
        "The Bear" on Disney Plus where you can see the magic that happens in
        the kitchen, Let Yourself Go!`;
    //$image.src = BearImage;

    $container.appendChild($h2);
    $container.appendChild($h3);
    //d.body.appendChild($image);
    $container.appendChild($h4);
  });
}
