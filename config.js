

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
      name: "Muzykant v4 SSL",
      password: "https://discord.gg/v6sdrD9kPh",
      host: "lavalink_v4.muzykant.xyz",
      port: 443,
      secure: true
    }
  ]
}
