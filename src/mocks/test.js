function calcularDescuento(cantidad) {
  let descuento = 0;

  if (cantidad >= 6 && cantidad < 12) {
      descuento = 0.5; // 5%
  } else if (cantidad >= 12 && cantidad < 18) {
      descuento = 1; // 10%
  } else if (cantidad >= 18) {
      descuento = 2; // 15%
  }
   /* else if (cantidad >= 24) {
      descuento = 2; // 15%
  } */

  return descuento;
}

// Ejemplo de uso:
const cantidadComprada = 12;
const producto = {
  id: 36,
  title: "Pan integral de semillas 1/2 KG",
  description: "Ingredientes: Harina integral orgánica, agua, aceite de girasol, sal y mix de semillas",
  price: 1000,
  discountPercentage: 2.92,
  rating: 4.92,
  stock: 54,
  brand: "",
  category: "home-decoration",
  thumbnail: "AllImages.panIntegralSemillas",
  images: [
      "https://i.dummyjson.com/data/products/30/1.jpg",
      "https://i.dummyjson.com/data/products/30/2.jpg",
      "https://i.dummyjson.com/data/products/30/3.jpg",
      "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
  ]
};

const descuento = calcularDescuento(cantidadComprada);
console.log(descuento ,"chahca")
const descuentoEnPesos = producto.price * descuento;
console.log("El descuento es: $" + descuentoEnPesos);