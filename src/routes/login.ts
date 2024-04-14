import { Route } from '.';
import Player from '../game/player';
import { unix } from '../utils/utils';

export default class LoginRoutes {
    @Route('Login')
    public Login(params: object, player: Player) {
        player.sendPacket('Login', { error: {} });
    }

    @Route('GetLastGuide')
    public GetLastGuide(params: object, player: Player) {
        player.sendPacket('GetLastGuide', {
            data: {
                lastGuideId: 8
            }
        });
    }

    @Route('PlayerInfo')
    public PlayerInfo(params: object, player: Player) {
        //hihihihi
        player.sendPacket('PlayerInfo', {
            data: {
                player: {
                    id: player.userUid,
                    user_id: player.userUid,
                    user_name: 'timing1337',
                    platform: 'funpax',
                    create_time: unix(),
                    last_signin_time: unix(),
                    last_signin_ip: '0.0.0.0',
                    server_id: 254
                },
                player_attr: {
                    player_id: player.userUid,
                    team_name: '',
                    team_lv: 100,
                    team_exp: 0,
                    vip_lv: 15,
                    vip_exp: 0,
                    create_time: unix(),
                    sp: 6969,
                    gold: 1000000,
                    stone: 10000,
                    icon: 10020,
                    ninja_point: 0,
                    arena_point: 0,
                    group_point: 0,
                    dark_arena_point: 0,
                    cs_dark_arena_point: 0
                }
            }
        });
    }

    @Route('Time')
    public Time(params: object, player: Player) {
        player.sendPacket('Time', { data: { offset: 28800, time: unix(), zoneName: 'CST' } });
    }

    @Route('GetFaceBookUrl')
    public GetFaceBookUrl(params: object, player: Player) {
        player.sendPacket('GetFaceBookUrl', { data: { facebook_group_url: 'https://www.facebook.com/groups/NinjaRebirth/', facebook_page_url: 'https://www.facebook.com/NinjaRebirth/' } });
    }
}
