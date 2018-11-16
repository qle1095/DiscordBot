const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as" + client.user.tag)

    client.user.setActivity("Deez nuts", {Type:"WATCHING"})

    client.guilds.forEach((guild) =>{
        console.log(guild.name)
        guild.channels.forEach((channel) =>{
            console.log(`- ${channel.name} ${channel.type} ${channel.id}`)
        })
        // chat ID: 190948289133150220
    })

    let generalChannel = client.channels.get("190948289133150220")
    const attachment = new Discord.Attachment("http://www.reddit.com")
    //generalChannel.send(attachment)
    generalChannel.send("Miku!!!!")
})

client.on('message', (receivedMessage) => {
    if(receivedMessage.author == client.user){
        return
    }
   // receivedMessage.channel.send("Message Received: "+ receivedMessage.author.toString() + receivedMessage.content)
    if(receivedMessage.content == "Deez nuts"){
        receivedMessage.channel.send("GOTTTY, HAHHHH!")
    }
    if(removeEventListener.content.startWith("!")){
        processCommand(receivedMessage)
    }
    processCommand = (receivedMessage) =>{
        let fullCommand = receivedMessage.content.substr(1)
        let splitcommand = fullCommand.split(" ")
        let primaryCommand = splitcommand[0]
        let arguments = splitcommand.slice(1)//exclude first one    
        
        if(primaryCommand == "help"){
            helpCommand(arguments, receivedMessage)
        }
    }
    helpCommand = (arguments, receivedMessage) =>{
        if(arguments.length == 0){
            receivedMessage.channel.send("IDK WHAT U WANT")
        }
        else{
            receivedMessage.channel.send("get gud")
        }
    }


})


client.login("API KEY HERE")