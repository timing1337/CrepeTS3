import { Route } from '.';
import Player from '../game/player';
import { ResourceManager } from '../resources';
import { unix } from '../utils/utils';

export default class ChapterRoutes {
    @Route('ChapterInfo')
    public ChapterInfo(params: object, player: Player) {
        
        const chapters: { [key: number]: {[key: string]: any}[]} = {};
        
        Array.from(ResourceManager.chapters.values()).forEach((config, index) => {
            if(!chapters[config.difficult]) chapters[config.difficult] = [];
            chapters[config.difficult].push({
                player_id: player.userUid,
                chapter_id: config.id,
                difficulty: config.difficult,
                create_time: unix(),
                star: 3,
                has_pick_reward: 0
            })
        });

        console.log(chapters);

        player.sendPacket('ChapterInfo', {
            data: {
                chapters: chapters
            }
        });
    }
}
