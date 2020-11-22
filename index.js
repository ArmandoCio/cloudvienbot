const { Client, MessageAttachment, SystemChannelFlags } = require("discord.js");

const bot = new Client();

const prefix = "!";

bot.on("ready", () => {
  console.log("Yo whats up boys!");
});

bot.on("message", (message) => {
  let args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
    case "help":
      message.channel.send(" !vien: Picture Of Bohol");
      message.channel.send(" !banana: Banana Video");
      message.channel.send(" !drunkvien: Drunk Video");
      message.channel.send(" !mikali: Pick me up with mikali");

      break;

    case "vien":
      let imageNumber = Math.floor(Math.random() * 9) + 1;
      message.channel.send({ files: ["./imgs/" + imageNumber + ".jpg"] });

      break;

    case "banana":
      let vidNumber = Math.floor(Math.random() * 5) + 1;
      message.channel.send({ files: ["./banana/" + vidNumber + ".mp4"] });
      break;

    case "drunkvien":
      let vidNumber2 = Math.floor(Math.random() * 6) + 1;
      message.channel.send({ files: ["./drunkvien/" + vidNumber2 + ".mp4"] });
      break;

    case "mikali":
      let vidNumber3 = Math.floor(Math.random() * 6) + 1;
      message.channel.send({ files: ["./mikali/" + vidNumber3 + ".mp4"] });
      break;


  }
});

bot.login(process.env.token);
