import { WebSocket } from 'ws';
import { Packet } from '../protocols/packet';
import RouteManager from '../routes';
import ServerManager from '../server';
import GameHero from './avatar/hero';
import { ResourceManager } from '../resources';

export default class Player {
    public connection: WebSocket;

    //information
    public userUid: number = 1337; //hardcoded
    
    //storage shit
    public heros: Map<number, GameHero> = new Map<number, GameHero>();

    //cache
    public cache: Map<string, any> = new Map<string, any>(); //used by get/set packet but idk what its for lmao

    constructor(connection: WebSocket) {
        this.connection = connection;
        this.connection.on('message', this.onReceived.bind(this));

        //initialize data
        //information

        //storage
        ResourceManager.heros.forEach((value, key) => {
            if(value.qualities.has(15)) this.heros.set(value.id, new GameHero(this, value.id, 17, 200, 0))
        });
    }

    public onReceived(buffer: Buffer) {
        const data: Packet = JSON.parse(buffer.toString());
        ServerManager.logger.log(`>> Incoming | ${data.func_name} | ${JSON.stringify(data)}`);
        if (RouteManager.routers.has(data.func_name)) {
            RouteManager.routers.get(data.func_name)!(data.params, this);
        } else {
            ServerManager.logger.error('Missing response to ' + data.func_name);
            this.connection.send(
                JSON.stringify({
                    func_name: data.func_name,
                    data: {},
                    error: {}
                })
            );
        }
    }

    public sendPacket(funcName: string, data: { [key: string]: any }) {
        data['func_name'] = funcName;
        const rawData = JSON.stringify(data);
        this.connection.send(rawData, (err) => (err ? ServerManager.logger.error(err) : null));
        ServerManager.logger.log(`<< Outgoing | ${data.func_name} | ${rawData}`);
    }
}
