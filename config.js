

module.exports = {
  TOKEN: "",
  language: "my",
  ownerID: ["267958390389604362", ""], 
  mongodbUri : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Lagu Hits Yang Terkini!", 
  activityType: "STREAMING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/X6RT5VdJPQ",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Alya Project",
      password: "https://alya-project.me/",
      host: "lavalink.alya-project.me",
      port: 2333,
      secure: false
    }
  ]
}
