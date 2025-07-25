"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const discord_js_1 = require("discord.js");
exports.default = new forgescript_1.ApplicationCommand({
    data: {
        type: discord_js_1.ApplicationCommandType.ChatInput,
        name: "install",
        description: "How to install any package",
        options: [
            {
                type: discord_js_1.ApplicationCommandOptionType.String,
                name: "package",
                description: "The package you want to install",
                autocomplete: true,
            },
            {
                type: discord_js_1.ApplicationCommandOptionType.User,
                name: "target",
                description: "The person you want to ping",
            }
        ],
        contexts: [
            discord_js_1.InteractionContextType.Guild,
            discord_js_1.InteractionContextType.BotDM,
            discord_js_1.InteractionContextType.PrivateChannel
        ],
        integration_types: [
            discord_js_1.ApplicationIntegrationType.GuildInstall,
            discord_js_1.ApplicationIntegrationType.UserInstall
        ]
    },
    code: `
  $installCmd[$option[package];$option[target]]
  `
});
//# sourceMappingURL=install.js.map