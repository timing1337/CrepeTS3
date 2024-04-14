import CommandManager from '..';
import ServerManager from '../../server';
import Command from '../command';

export default class AddItemCommand extends Command {
    constructor() {
        super('add_item');
    }

    public execute(args: string[]): boolean {
        if (args.length < 1) {
            CommandManager.logger.error('Missing arguments');
            return true;
        }
        const connection = ServerManager.connections.get(parseInt(args[0]));
        if (!connection) {
            CommandManager.logger.error("Connection doesn't exit");
            return true;
        }
        return true;
    }
}
