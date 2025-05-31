document.getElementById('entrar-btn').addEventListener('click', () => {
  document.querySelector('.pantalla-inicial').style.display = 'none';
  document.querySelector('.pantalla-carta').style.display = 'block';
  escribirCarta();
});

const texto = "Amooooorrr, \nes nuestro primer mesecitooo aaaa (oficialitas, porque enamoradísimas llevamos siglos jijiji). Ay, amoor… jamás me \ncansaré de decirte lo demasiado con tanto con muuucho que te amoooo. Agradezco (y voy a agradecer sieempre) que hayas \naparecido en mi vida así, de la forma más inesperada, como quien llega a cambiarlo absolutamente todooo, mi kolashonnn \nde changüiii 🧚🧚🧚 \n\nMe haces sentir la persona másss amada y felizzz del mundo mundiaaal, y ojalá yo logre devolverte aunque sea un \npedacititito de lo que me haces sentir tú. Gracias a ti mis días tienen sentido: despertar sabiendo que estarán tus \n*buenos días amo* KAJSAJK, sentir que siempre tengo a alguien con quien compartir desde lo másss mínimo hasta lo \nmás tomtote, alguien que aguanta mis millonesss de cambios de humor por segundo y aún así se queda… y me ama =D\n\nGracias por tu amor, comprensión, y ternuraaa. Por siempre estar ahí para mí a pesar de las millasss que nos separan \npipipi. Contigo quiero tooodo, amorciiito. Lo bonito, lo medio bonito, lo no tan bonito... lo que vengaa. Porque \ntooodo contigo vale la pena :) Feliz primer mes de ser oficialmente lo mejor, fantástico, extraordinario e increíble \nque te ha pasado en la vida JAKSJAKSAJ. Ojalá la vida nos deje seguir sumando muchos mesesotes másss, mi cieliito \nlimmmdoo 💘💘💘 \n\nTe amo hasta el infinito y másss allá, mi negra bella, mi preciosa, mi corazón, mi bombón, mi chocolate, mi telnura, \nmi caramelo, mi paleta, mi fresa, mi melocotón, ¡¡¡dios mío!!! 💘💕🧚💗💟❤️‍🩹💗🧚💘💌💕❤️‍🩹💞💌🧚💗💟💘💕🧚💞💌";

let i = 0;
function escribirCarta() {
  const el = document.getElementById('texto-carta');
  const intervalo = setInterval(() => {
    if (i < texto.length) {
      el.textContent += texto[i];
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, 40);
}