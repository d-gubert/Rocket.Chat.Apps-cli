import { IHttp, IModify, IRead } from 'temporary-rocketlets-ts-definition/accessors';
import { ISlashCommand, SlashCommandContext } from 'temporary-rocketlets-ts-definition/slashcommands';

export class GimmeCommand implements ISlashCommand {
    public command: string = 'gimme';
    public paramsExample: string = 'your_message_optional';
    public i18nDescription: string = 'Slash_Gimme_Description';

    public executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp): void {
        const builder = modify.getCreater().startMessage()
            .setSender(context.getSender()).setRoom(context.getRoom())
            .setText('༼ つ ◕_◕ ༽つ ' + context.getArguments().join(' '));

        modify.getCreater().finish(builder);
    }
}
