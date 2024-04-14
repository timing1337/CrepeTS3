import { Route } from '.';
import Player from '../game/player';

export default class BeastRoutes {
    @Route('BeastInfo')
    public BeastInfo(params: object, player: Player) {
        player.sendPacket('BeastInfo', {
            data: {
                Beasts: {}
            }
        });
    }
}
