module.exports = class test {
    constructor(){
            this.name = 'test',
            this.alias = [],
            this.usage = 'test'
    }
 
    async run(bot, message, args) {
        message.channel.send(`${this.name} worked!`)
    }
}