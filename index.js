const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
       console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hello"){
        message.reply("Hello World")
    }
})
const welcomeChannelId = "900619238027444227"
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content:`<@${member.id}> Thank you for joining our server!`,
        files: [img]
    })


})
client.login(process.env.TOKEN)
