import { Route } from '.';
import Player from '../game/player';

export default class BagRoutes {
    @Route('BagInfo')
    public BagInfo(params: object, player: Player) {
        player.sendPacket('BagInfo', {
            data: {
                equip: {},
                items: {}
            }
        });
    }
}
