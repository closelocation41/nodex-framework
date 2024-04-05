const {MONGODB} = require("./src/config/db.config");
module.exports = {
    mongodb: {
      // TODO Change (or review) the url to your MongoDB:
      url: MONGODB.URL,
  
      // TODO Change this to your database name:
      databaseName: MONGODB.DBNAME
    },
  
    // The migrations dir, can be an relative or absolute path. Only edit this when really necessary.
    migrationsDir: "src/migrations",
  
    // The mongodb collection where the applied changes are stored. Only edit this when really necessary.
    changelogCollectionName: "changelog",
  
    // The file extension to create migrations and search for in migration dir 
    migrationFileExtension: ".js",
  
    // Enable the algorithm to create a checksum of the file contents and use that in the comparison to determin
    // if the file should be run.  Requires that scripts are coded to be run multiple times.
    useFileHash: false
  };