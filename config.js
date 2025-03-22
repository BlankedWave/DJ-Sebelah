

module.exports = {
  TOKEN: "",
  language: "my",
  ownerID: ["267958390389604362", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Lagu Hitz Yang Terkini!", 
  activityType: "STREAMING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/X6RT5VdJPQ",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Lavalink",
      password: "jmlitelavalink",
      host: "46.202.82.164",
      port:  1027,
      secure: false
    }
  ]
}
