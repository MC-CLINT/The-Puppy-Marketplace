//Puppy.js
const db = require('../db');

class Puppy {
  constructor(id, name, breedId, age, price) {
    this.id = id;
    this.name = name;
    this.breedId = breedId;
    this.age = age;
    this.price = price;
  }

  static async getAll() {
    const results = await db.query('SELECT * FROM puppies');
    return results.rows.map((result) => new Puppy(result.id, result.name, result.breed_id, result.age, result.price));
  }

  static async getById(id) {
    const result = await db.query('SELECT * FROM puppies WHERE id = $1', [id]);
    return result.rows[0] ? new Puppy(result.rows[0].id, result.rows[0].name, result.rows[0].breed_id, result.rows[0].age, result.rows[0].price) : null;
  }
}

module.exports = Puppy;