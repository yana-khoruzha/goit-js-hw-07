const listItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});




