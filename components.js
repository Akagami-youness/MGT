const products = [
  {
    product: "0",
    productName: "Engine 1",
    imageLocation: "assets/img/products/2.jpg",
    productCategory: "something",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs: "a couple lines of description of the product. ",
  },
  {
    product: "1",
    productName: "Engine 2",
    imageLocation: "assets/img/products/3.jpg",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
  {
    product: "2",
    productName: "Engine 2",
    imageLocation: "assets/img/products/4.jpg",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
  {
    product: "3",
    productName: "Engine 2",
    imageLocation: "assets/img/products/5.jpg",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
  {
    product: "4",
    productName: "Engine 2",
    imageLocation: "assets/img/products/6.jpg",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
  {
    product: "5",
    productName: "Engine 2",
    imageLocation: "assets/img/products/7.jpg",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
  {
    product: "6",
    productName: "Engine 2",
    imageLocation: "assets/img/products/8.png",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
  {
    product: "7",
    productName: "Engine 2",
    imageLocation: "assets/img/products/9.jpg",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
  {
    product: "8",
    productName: "Engine 2",
    imageLocation: "assets/img/products/10.jpg",
    productCategory: "something 2",
    productCatalog: "assets/catalog/BONFIGLIOLI cathalog.pdf",
    productSpecs:
      "a couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the producta couple lines of description of the product.",
  },
];
const img = document.querySelector("#product-image");
const pname = document.querySelector("#product-name");
const category = document.querySelector("#product-category");
const catalog = document.querySelector("#product-calaog");
const specs = document.querySelector("#product-specs");

//for the side nav on the product page
const onClick = function () {
  img.setAttribute("src", products[this.id].imageLocation);
  category.textContent = products[this.id].productCategory;
  catalog.setAttribute("href", products[this.id].productCatalog);
  specs.textContent = products[this.id].productSpecs;
  pname.textContent = products[this.id].productName;
};

document.getElementById("0").onclick = onClick;
document.getElementById("1").onclick = onClick;
document.getElementById("2").onclick = onClick;
document.getElementById("3").onclick = onClick;
document.getElementById("4").onclick = onClick;
document.getElementById("5").onclick = onClick;
document.getElementById("6").onclick = onClick;
document.getElementById("7").onclick = onClick;
document.getElementById("8").onclick = onClick;
