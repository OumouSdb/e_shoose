let checkbox = document.querySelector("#checkbox");
let liste = document.querySelector("#liste");
let nav = document.querySelector("#nav");
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let iconePanier = document.querySelector("#panier");
let marque = document.querySelector(".shoose");
second.style.display = "none!important";
checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
        liste.style.display = "block";
        first.style.display = "none";
        second.style.display = "block";
        marque.style.display = "none";
        iconePanier.style.display = "none";
    } else if (!checkbox.checked) {
        liste.style.display = "none";
        first.style.display = "block";
        second.style.display = "none";
        marque.style.display = "block";
        iconePanier.style.display = "block";
    }
});
class Boutique {
    constructor(article, categorie, description, prix) {
        (this.article = article), (this.categorie = categorie), (this.description = description), (this.prix = prix);
    }
}
const articles = [
    new Boutique("nike-5126389_640.jpg", "Nike air jordan", "lorem ipsum", 95),
    new Boutique("nike-5226091_640.jpg", "Nike air max", "lorem ipsum", 110),
    new Boutique("shoes2-3952048_640.jpg", "Air force one", "lorem ipsum", 75),
    new Boutique("shoes-3850175_640.jpg", "Stan smith", "lorem ipsum", 175),
    new Boutique("adidas-1853899_640.jpg", "Adidas Yeezy", "lorem ipsum", 115),
    new Boutique("feet-1840619_1920.jpg", "Nike Rush run ", "lorem ipsum", 110),
];
let mesArticles = [];
let ajoute;
let supp;
let total;
let count = 0;
document.body.append(container);
articles.forEach((item) => {
    let card = document.createElement("div");
    card.className = "produit";
    let categorie = document.createElement("h3");
    let article = document.createElement("img");
    article.src = `image/${item.article}`;
    let description = document.createElement("p");
    let prix = document.createElement("p");
    let hr = document.createElement("hr");
    let button = document.createElement("button");
    button.innerHTML = "Ajouter au panier";
    button.className = "btn";
    categorie.className = "categorie";
    categorie.innerHTML = item.categorie;
    description.innerHTML = item.description;
    prix.innerHTML = item.prix + "€";
    card.append(article);
    card.append(categorie);
    card.append(description);
    card.append(prix);
    card.append(button);
    card.append(hr);
    let container = document.querySelector("#container").append(card);
    button.addEventListener("click", function () {
        count++;
        let panier = document.querySelector("#panier");
        ajoute = mesArticles.push(item.prix);
        message.innerHTML = item.categorie + " a ete ajoute a votre panier ";
        message.style.marginBottom = "30px";
        panier.innerHTML = count;
        for (let i = 0; i < mesArticles.length; i++) {
            ajoute += mesArticles[i] - 1;
        }
        let total = document.querySelector("#total");
        total.innerHTML = "Total de votre commande " + ajoute + " €";
        if (ajoute >= 300) {
            let free = document.createElement("p");
            free.innerHTML = "Bravo vous avez droit aux frais de port gratuit !";
            total.append(free);
        }
        let myShop = document.querySelector("#myShop");
        let recap = document.createElement("div");
        recap.className = "recap";
        let imgPanier = document.createElement("img");
        imgPanier.src = `image/${item.article}`;
        imgPanier.className = "imgPanier";
        let categorieInfo = document.createElement("h3");
        categorieInfo.className = "categorieInfo";
        categorieInfo.innerHTML = `${item.categorie} ${item.description} est au prix de ${item.prix} €`;
        let supp = document.createElement("a");
        supp.innerHTML = "Supp";
        supp.href;
        supp.className = "supp";
        recap.append(imgPanier);
        recap.append(categorieInfo);
        myShop.append(recap);
        recap.append(supp);
        let elemSupp = [];
        supp.addEventListener("click", function () {
            recap.remove();
            message.innerHTML = item.categorie + " a ete retiré de votre panier ";
            panier.innerHTML = --count;
            let to = mesArticles.splice(mesArticles.indexOf(item.prix), 1);
            elemSupp.push(to);
            for (let i = 0; i < elemSupp.length; i++) {
                total.innerHTML = "Total de votre panier " + (ajoute -= to) + " €";
            }
            if (count === 0) {
                panier.innerHTML = "";
            }
            if (ajoute === 0) {
                total.innerHTML = "Votre panier est vide ";
            }
        });
    });
});
