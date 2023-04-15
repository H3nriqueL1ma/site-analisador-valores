import $ from "jquery";

const body_content: JQuery<HTMLBodyElement> = $("body");
const header: JQuery<HTMLElement> = $("header");
const footer: JQuery<HTMLElement> = $("footer");

if (body_content) {
  body_content.append(
    '<span style="display:none" id="section"><section><div id="content">Número (entre 1 e 100): <input type="number" name="num" id="num"><button id="addi">Adicionar</button></div><div id="result"><textarea name="text" id="text" cols="20" rows="10" readonly style="resize: none;"></textarea><br><button id="finalize">Finalizar</button><hr><p></p></div></section></span>'
  );
  body_content.find("span#section").fadeIn();
}

if (header) {
  header.append(
    '<span style="display:none" id="title"><h1>Analisador de Números</h1></span>'
  );
  header.find("span#title").fadeIn();
}

if (footer) {
  footer.append(
    '<span style="display:none" id="img_"><a href="https://github.com/H3nriqueL1ma" target="_blank"><img src="images/github.svg" alt="image" id="img"></a></span>'
  );
  footer.find("span#img_").fadeIn();
}

const button_add: JQuery<HTMLButtonElement> = $("#addi");
const button_finalize: JQuery<HTMLButtonElement> = $("#finalize");
const num_array: number[] = [];

if (button_add) {
  button_add.on("click", () => {
    const result: JQuery<HTMLElement> = $("#text");
    const input_num = Number($("#num").val());
    if (input_num) {
      if (input_num > 100 || input_num < 1) {
        alert("[ERROR]: Insira números entre 1 e 100!");
      } else {
        num_array.unshift(input_num);
        if (result) {
          result.append(`Valor ${input_num} adicionado.\n`);
        }
        $("#num").attr("type", "text").val("").attr("type", "number");
      }
    }
  });
}

if (button_finalize) {
  button_finalize.on("click", () => {
    const text: JQuery<HTMLElement> = $("p");
    const all_values: number = num_array.length;
    const bigger: number = Math.max(...num_array);
    const smaller: number = Math.min(...num_array);
    const sum: number = num_array.reduce(
      (total: number, number: number) => total + number,
      0
    );
    const average: number = sum / all_values;

    const areAllNumbers = num_array.every(
      (value) => typeof value === "number" && !isNaN(value)
    );

    if (!areAllNumbers) {
      alert("[ERROR]: Insira um valor válido!");
      return;
    } else {
      if (text) {
        text.html(
          `<p>Números cadastrados: ${all_values}</p><p>Maior valor: ${bigger}</p><p>Menor valor: ${smaller}</p><p>Valor total: ${sum}</p><p>Média: ${average}</p>`
        );
      }
    }
  });
}
