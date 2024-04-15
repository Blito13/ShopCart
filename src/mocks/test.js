let prod=[{
    id: 34,
    title: "Medialunas coco",
    description: "Ingredientes: Harina integral organica, azucar mascabo, jugo de naranja, ralladura de naranja, leche de avena, aceite de girasol, manzanas y canela.",
    price: 1000,
    discountPercentage: 2.92,
    rating: 4.92,
    stock: 54,
    brand: "1/2 docena $5.500 , 1 docena $10.000",
    category: "home-decoration",
    /* thumbnail: AllImages.medialunasCoco, */
    images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
    ],
    calculateDiscount: function(quantity) {
      const pricePerItem = this.price;
      const discountPercentage = this.discountPercentage / 100;
      
      // Calculate total price without discount
      const totalPrice = pricePerItem * quantity;
      
      // Calculate discount based on discountPercentage
      const discountAmount = totalPrice * discountPercentage;
      
      return discountAmount;
    }
  }]
  let total =12000;
  function getPercentage (prod , total , quantity){
    let perc = 16.66 / 100;
    console.log(perc)
    let discount =  total * perc
    /* console.log(discount*6 ,"result quantity") */
    console.log(Math.floor(discount))
    console.log(total - discount ,"result")
  };
  getPercentage(prod , total);