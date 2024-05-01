class Programa {
  constructor() {
    this.drop = document.querySelectorAll("div");
    this.input = document.querySelectorAll("input");
    this.label = document.querySelectorAll("label");
  }

  cargarImagen(urlImagen, div) {
    switch (div.id) {
      case "zona1":
        div = this.drop[0];
        break;

      case "zona2":
        div = this.drop[1];
        break;

      case "zona3":
        div = this.drop[2];
        break;

      default:
        break;
    }

    const img = document.querySelector("img");
    return new Promise((resolve, reject) => {
      let i = div.innerText.split("")[5] - 1;
      let aux = this.label[i].innerText;
      this.label[i].innerText = "Cargando...";
      setTimeout(() => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", urlImagen);
        xhr.responseType = "blob";
        xhr.addEventListener("load", () => {
          if (xhr.status == 200) {
            let imagenBlob = xhr.response;
            const url = URL.createObjectURL(imagenBlob);
            div.style.backgroundImage = "url(" + urlImagen + ")";
            this.label[i].innerText = aux;
            resolve();
          } else {
            reject(new Error("Error al cargar la imagen"));
          }
        });
        xhr.send();
      }, 2000); // Retraso de 2 segundos
    });
  }

  dragAndDrop() {
    ["dragenter", "dragleave", "dragover", "drop"].forEach((event) =>
      document.addEventListener(event, (e) => e.preventDefault())
    );

    this.drop.forEach((div) => {
      div.addEventListener("dragenter", (e) => {
        e.preventDefault();
      });

      div.addEventListener("dragleave", (e) => {
        e.preventDefault();
      });

      div.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      div.addEventListener("drop", async (e) => {
        e.preventDefault();
        const imagen = e.dataTransfer.files[0].name;
        try {
          await this.cargarImagen("/img/" + imagen, div);
        } catch (error) {
          console.error(error);
        }
      });
    });

    this.input.forEach((input) => {
      input.addEventListener("change", async () => {
        const imagen = input.files[0].name;
        try {
          await this.cargarImagen("/img/" + imagen, input);
        } catch (error) {
          console.error(error);
        }
      });
    });
  }

  start() {
    this.dragAndDrop();
  }
}

const programa = new Programa();
window.onload = () => {
  programa.start();
};
