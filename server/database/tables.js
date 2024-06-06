// Import the repository modules responsible for handling data operations on the tables
const ItemRepository = require("./models/ItemRepository");

// Create an empty object to hold data repositories for different tables
const tables = {
  // let item = [
  //   {ItemID: 1, "Nom de l'Article": "Pomme", Prix: 0.5, Quantité: 100},
  //   {ItemID: 2, "Nom de l'Article": "Banane", Prix: 0.3, Quantité: 150},
  //   {ItemID: 3, "Nom de l'Article": "Orange", Prix: 0.6, Quantité: 80},
  //   {ItemID: 4, "Nom de l'Article": "Poire", Prix: 0.4, Quantité: 120}
  // ],
  
  // let user = [
  //   {UserID: 1, "Nom d'Utilisateur": "Jean", Email: "jean@example.com", "Mot de Passe": "password1"},
  //   {UserID: 2, "Nom d'Utilisateur": "Marie", Email: "marie@example.com", "Mot de Passe": "password2"},
  //   {UserID: 3, "Nom d'Utilisateur": "Pierre", Email: "pierre@example.com", "Mot de Passe": "password3"},
  //   {UserID: 4, "Nom d'Utilisateur": "Sophie", Email: "sophie@example.com", "Mot de Passe": "password4"}
  // ]

};

/* ************************************************************************* */
// Register data repositories for tables




/* ************************************************************************* */

// Register each repository as data access point for its table
tables.item = new ItemRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
