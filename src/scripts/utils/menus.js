const getCategories = (response) => {
  const categories = [];
  response.forEach((category) => {
    categories.push(category.name);
  });
  return categories.join(', ');
};

const getMenus = (menus) => {
  const menuList = [];
  menus.forEach((menu) => {
    menuList.push(`<li>&#8226;&#160;${menu.name}</li>`);
  });
  return menuList.join('\n');
};

module.exports = {getCategories, getMenus};

