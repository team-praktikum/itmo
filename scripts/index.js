
//добавление карточек в Publications
const cardsContainer = document.querySelector(".publications__container");
//функция добавления карточки
function addCard(articleImage, articleTitle, articleSubtitle, articleText) {
  const cardTemplate = document.querySelector("#article-card-template").content;
  const cardElement = cardTemplate
    .querySelector(".article-card")
    .cloneNode(true);

  cardElement.querySelector(".article-card__image-item").src = articleImage;
  cardElement.querySelector(".article-card__title").textContent = articleTitle;
  cardElement.querySelector(".article-card__subtitle").textContent =
    articleSubtitle;
  cardElement.querySelector(".article-card__copy").textContent = articleText;

  cardElement
    .querySelector(".article-card__button")
    .addEventListener("click", function () {
      cardElement
        .querySelector(".article-card__share-menu")
        .classList.toggle("article-card__share-menu_status_active");
    });

  cardsContainer.prepend(cardElement);
}

//набор подключаемых карточек
const initialCards = [
  {
    image:
      "./images/Publication/publication_Topic-driven Ensemble for Online Advertising Generation.png",
    title: "Topic-driven Ensemble for Online Advertising Generation",
    subtitle:
      "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
    text:
      " Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basis Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basis",
  },
];
// Добавление карточек в контейнер блока Publications
for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].image, initialCards[i].title, initialCards[i].subtitle, initialCards[i].text);
}
