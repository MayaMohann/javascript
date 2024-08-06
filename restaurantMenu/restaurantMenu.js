const breakfastMenu = ['Idli- ₹10', 'Egg omelette- ₹10', 'Dosa- ₹10', 'Vada- ₹8'];
const mainCourseMenu = ['Meals- ₹80', 'Veg Biryani- ₹100', 'Chicken Biryani- ₹120', 'Pulao- ₹70'];
const dessertMenu = ['Cake- ₹60', 'Ice Cream- ₹40', 'Payasam- ₹50', 'Fruit Salad- ₹70'];

// Display breakfast menu items
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
document.getElementById('breakfastTotalItems').innerHTML = `Total Items: ${breakfastMenu.length}`;

// Display main course menu items
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
document.getElementById('maincourseTotalItems').innerHTML = `Total Items: ${mainCourseMenu.length}`;

// Display dessert menu items
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
document.getElementById('dessertTotalItems').innerHTML = `Total Items: ${dessertMenu.length}`;
