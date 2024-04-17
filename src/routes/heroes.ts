import { Route } from '.';
import Player from '../game/player';
import { unix } from '../utils/utils';

export default class HeroesRoutes {
    @Route('GetHeros')
    public GetHeros(params: object, player: Player) {
        
        const data: { [key: number]: object } = {};
        player.heros.forEach(hero => {
            data[hero.heroId] = hero.asPacket();
        })

        console.log(data);

        player.sendPacket('GetHeros', {
            data: {
                heros: data,
                test: 4
            }
        });
    }

    @Route('Get')
    public Get(params: object, player: Player) {
        player.sendPacket('Get', {
            data: {
                key: (params as string[])[0],
                value: 0
            }
        });
    }

    @Route('SkillUpgradeInfo')
    public SkillUpgradeInfo(params: object, player: Player) {
        player.sendPacket('SkillUpgradeInfo', {
            data: {
                leftCount: 30,
                lastTime: unix() - 50000
            }
        });
    }

    @Route('BeforeFight')
    public BeforeFight(params: object, player: Player) {
        player.sendPacket('BeforeFight', {
            data: {
                items: [],
                sign: 'shut-the-fuck-up' //hardcoded
            },
            error: {}
        });
    }

    @Route('BeforeSpecialFight')
    public BeforeSpecialFight(params: object, player: Player) {
        player.sendPacket('BeforeSpecialFight', {
            data: {
                items: [],
                sign: 'shut-the-fuck-up' //hardcoded
            },
            error: {}
        });
    }
}
