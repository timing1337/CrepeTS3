import { Route } from '.';
import Player from '../game/player';

export default class EventsRoutes {
    @Route('GetAllEvents')
    public GetAllEvents(params: object, player: Player) {
        player.sendPacket('GetAllEvents', {
            data: {
                events: {}
            }
        });
    }
}
