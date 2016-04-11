var config = {}

config.host = process.env.HOST || "https://vsts.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "0CXcLdu1mggRUOhqeVzOKbae6Y4r80cqo5l0QH0GiWvbuM5B4sCipF1LVIQG4WNYSTNAuTk2zIqUj7XXkorjZg==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config;
