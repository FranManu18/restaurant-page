const d = document;

export function ChargeAbout(id, button) {
  const $button = d.getElementById(button);
  let $container = d.getElementById(id);

  $button.addEventListener("click", () => {
    $container.textContent = "";
    const $p = d.createElement("p"),
      $h2 = d.createElement("h2");

    $h2.textContent = "ABOUT";
    $p.classList.add("aboutText");
    $p.innerHTML = `
    <p>The Bear (El Oso en Hispanoamérica) es una serie de televisión estadounidense de comedia dramática, creada por Christopher Storer. Se estrenó en FX on Hulu el 23 de junio de 2022,1​ y está protagonizada por Jeremy Allen White, Ebon Moss-Bachrach, Ayo Edebiri, Lionel Boyce, Liza Colón-Zayas, Abby Elliott y Matty Matheson.2​

En julio de 2022, se renovó para una segunda temporada,3​ que se estrenó el 22 de junio de 2023 y consta de 10 episodios.4​5​ En noviembre de 2023, se renovó para una tercera temporada, estrenada el 26 de junio de 2024.6​7​En marzo de 2024, fue renovada para una cuarta temporada que se grabara inmediatamente de la finalización de la producción de la temporada 3. 8​

La serie ha recibido elogios de la crítica, particularmente por la dirección, escritura, producción y las actuaciones de su elenco. La primera temporada obtuvo 13 nominaciones a los Emmy, incluido a la Mejor serie de comedia y nominaciones como actores para White, Moss-Bachrach, Edebiri, Jon Bernthal y Oliver Platt. The Bear también ganó cuatro Premios Globo de Oro, con victorias en actuación para White y Edebiri y el Premio Globo de Oro a la Mejor Serie de Televisión - Musical o Comedia en 2024. 9​</p>`;
    $container.appendChild($h2);
    $container.appendChild($p);
  });
}
