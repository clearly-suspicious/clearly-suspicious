const { EmbedBuilder } = require('discord.js');

module.exports = {
  createPromptEmbed(prompt, thumbnailLink, imageLink, username, discriminator) {
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('Prompt: ' + prompt)
      .setThumbnail(thumbnailLink)
      .setImage(imageLink)
      .setTimestamp()
      .setFooter({
        text: 'Generated by: ' + username + '#' + discriminator,
        iconURL: imageLink,
      });

    return embed;
  },
};
