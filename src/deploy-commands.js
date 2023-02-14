const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const dotenv = require('dotenv');

dotenv.config();

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    // const data = await rest.put(
    //   Routes.applicationGuildCommands(
    //     process.env.CLIENT_ID,
    //     process.env.GUILD_TEST_ID
    //   ),
    //   { body: commands }
    // );
    // console.log(
    //   `Successfully reloaded ${data.length} application (/) commands.`
    // );

    // The put method is used to fully refresh all commands in all guild
    // const data = await rest.put(
    //   Routes.applicationCommands(process.env.CLIENT_ID),
    //   { body: commands }
    // );
    // console.log(
    //   `Successfully reloaded ${data.length} application (/) commands.`
    // );

    // To Delete all the command of a Guild
    // rest
    //   .put(
    //     Routes.applicationGuildCommands(
    //       process.env.CLIENT_ID,
    //       process.env.GUILD_TEST_ID
    //     ),
    //     { body: [] }
    //   )
    //   .then(() => console.log("Successfully deleted all guild commands."))
    //   .catch(console.error);

    // To Delete all the command of all Guild
    // rest
    //   .put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
    //   .then(() => console.log('Successfully deleted application commands.'))
    //   .catch(console.error);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
