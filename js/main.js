const slider = tns({
  container: ".gallery-slider",
  items: 3,
  slideBy: "page",
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  autoWidth: true,
});

const sliderPrev = document.querySelector("#sliderPrev");
const sliderNext = document.querySelector("#sliderNext");

sliderPrev.onclick = () => {
  slider.goTo("prev");
};
sliderNext.onclick = () => {
  slider.goTo("next");
  console.log(slider.getInfo());
};
