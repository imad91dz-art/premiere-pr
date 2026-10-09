function saluer(prenom) {
  return `Bonjour ${prenom}, bienvenue !`;
}

if (require.main === module) {
  console.log(saluer(process.argv[2] || "inconnu"));
}

module.exports = { saluer };
