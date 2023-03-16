//Admin or Student login


$('#options').change(function() {
	var selectedOption = $(this).val();
	console.log('Selected option: ' + selectedOption);
	// Do something with the selected option
});

function createCard(imageUrl, title, price) {
  // Create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create image element
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "Product Image";
  image.classList.add("card-image");
  card.appendChild(image);

  // Create content element
  const content = document.createElement("div");
  content.classList.add("card-content");
  card.appendChild(content);

  // Create title element
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  titleElement.classList.add("card-title");
  content.appendChild(titleElement);

  // Create price element
  const priceElement = document.createElement("p");
  priceElement.textContent = price;
  priceElement.classList.add("card-price");
  content.appendChild(priceElement);
  return card;
}

const products = [
	{imageUrl: "https://www.cooking4allseasons.com/wp-content/uploads/2017/12/Thakkali-Upma-300x200.jpg", title: "Upma", price: "$10.00"},
	{imageUrl: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80", title: "Sandwich", price: "$20.00"},
	{imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", title: "Pizza", price: "$30.00"},
	{imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/015/945/995/small/indian-samosas-with-vegetable-filling-photo.jpg", title: "Samosa", price: "$10.00"},
	{imageUrl: "https://i0.wp.com/www.dasterkhawan.com/wp-content/uploads/2015/06/Desi-Pakora-Recipe-300x200.jpg?resize=300%2C200", title: "Pizza", price: "$30.00"},
	{imageUrl: "https://www.cooking4allseasons.com/wp-content/uploads/2022/03/Andhra-Style-Idli-With-Idli-Rava-300x200.jpg", title: "Rava Idli", price: "$30.00"},
	{imageUrl: "https://recipesidiot.com/wp-content/uploads/2023/03/depositphotos_118105520-stock-photo-poha-or-aalu-poha-or-min-300x200.jpg", title: "Poha", price: "$30.00"},
	{imageUrl: "https://inkedbread.com/wp-content/uploads/2022/03/Make-a-Grilled-Cheese-with-Inked-Bread-300x200.jpeg", title: "Maggi", price: "$30.00"},
	{imageUrl: "https://www.viniscookbook.com/wp-content/uploads/2018/10/2018-10-06-11-26-17-300x200.jpg", title: "Grilled Cheese Sandwich", price: "$30.00"},
	{imageUrl: "https://www.viniscookbook.com/wp-content/uploads/2018/10/20190528_172659-300x200.jpg", title: "Paneer", price: "$30.00"},
	{imageUrl: "https://www.viniscookbook.com/wp-content/uploads/2018/10/2018-10-06-11-26-17-300x200.jpg", title: "Butter chicekn", price: "$30.00"},
	{imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/016/585/815/small/naan-nan-bread-served-in-a-plate-isolated-free-photo.jpg", title: "Naan", price: "$30.00"},
	{imageUrl: "https://img.freepik.com/free-photo/top-view-cooked-rice-tasty-meal-inside-brown-pot-with-pepper-white-surface_140725-43907.jpg?auto=format&h=200", title: "Rice", price: "$30.00"},


  ];
  
  const container = document.querySelector(".container");
  container.style.display = "grid"; // Set the display property to "grid"
  container.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))"; // Define the column widths
  container.style.gridColumnGap = "20px";
  
  products.forEach((product) => {
	const card = createCard(product.imageUrl, product.title, product.price);
	container.appendChild(card);
  });