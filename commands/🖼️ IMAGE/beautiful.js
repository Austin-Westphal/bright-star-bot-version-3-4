const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "beautiful",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("beautiful", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "beautiful.png");
	
<<<<<<< HEAD
		message.channel.send({embeds: [attachment]});
=======
		message.channel.send(attachment);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

	}
}
  module.exports.help = {
    name: "beautiful",
    description: "Sends a beautiful photo of mentioned person ",
    usage: "beautiful",
    type: "Image" 
}
