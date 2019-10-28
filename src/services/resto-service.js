export default class Restoservice {

  getMenuItems() {
    const arr = [];
    const res = require('../db.json');
    res.menu.map(item => {
      arr.push(item.title)
    });
    return arr;
  }
}