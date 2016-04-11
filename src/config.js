var config = {}

config.host = process.env.HOST || "https://vsts.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "ffiVDzFYRzObZmvtW3Int3DqrQL32M8eDJOmbLNMXnaAyEvXBN8BoYxH7emdE2gbLJwzCsfbNilwVai5E2GgEmw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
