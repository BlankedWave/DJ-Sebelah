

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
      name: "Serenetia-LDP-NonSSL",
      password: "https://dsc.gg/ajidevserver",
      host: "lavalink.serenetia.com",
      port:  80,
      secure: false
    }
  ]
}
