import { IncomingMessage } from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import Player from '../game/player';
import BagRoutes from '../routes/bag';
import BeastRoutes from '../routes/beast';
import ChapterRoutes from '../routes/chapter';
import EventsRoutes from '../routes/events';
import HeroesRoutes from '../routes/heroes';
import LoginRoutes from '../routes/login';
import Logger from '../utils/logger';

export default class ServerManager {
    public static readonly logger: Logger = new Logger('WebSocket');
    public static websocket: WebSocketServer;

    //playerUid
    public static connections: Map<number, Player> = new Map<number, Player>();

    public static init() {
        ServerManager.websocket = new WebSocket.Server({
            port: 10001
        });

        new BagRoutes();
        new BeastRoutes();
        new ChapterRoutes();
        new EventsRoutes();
        new HeroesRoutes();
        new LoginRoutes();

        ServerManager.websocket.on('connection', this.onConnection);
    }

    private static onConnection(ws: WebSocket, req: IncomingMessage) {
        ServerManager.logger.debug(`New connection: ${JSON.stringify(req.socket.remoteAddress)}`);
        const player = new Player(ws);
        ServerManager.connections.set(player.userUid, player);
    }
}
