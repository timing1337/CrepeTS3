import { ResourceManager } from "../../resources";
import { numberMap, unix } from "../../utils/utils";
import Player from "../player";

export default class GameHero {

    public owner: Player;

    public heroId: number;
    public quality: number;

    public level: number;
    public exp: number;

    public skillsMap: Map<number, number> = new Map<number, number>();
    public equipsMap: Map<number, number> = new Map<number, number>();

    public createTime: number = unix();
    public status: number = 0; //?
    public hasAwake: boolean = true; //idk what flag is this
    public bagateLevel: number = 0;
    public bagateSkill: string = "";

    constructor(owner: Player, heroId: number, quality: number = 0, level: number = 1, exp: number = 0) {
        this.owner = owner;
        this.heroId = heroId;
        this.quality = quality;
        this.level = level;
        this.exp = exp;
        
        numberMap(1, 10).forEach(id => this.skillsMap.set(id, 1))
        numberMap(1, 6).forEach(id => this.equipsMap.set(id, 0))
    }
    
    public asPacket() {
        const heroConfig = ResourceManager.heros.get(this.heroId)!
        const heroQuality = heroConfig.qualities.get(this.quality)!
        
        if(!heroQuality) return {}; //prob cooked ash

        const packet: { [key: string]: any } = {
            player_id: this.owner.userUid,
            hero_id: this.heroId,
            lv: this.level,
            quality: this.quality,
            exp: this.exp,
            hp: heroQuality.hp + heroQuality.hp_inc * (this.level - 1),
            atk: heroQuality.atk + heroQuality.atk_inc * (this.level - 1),
            def: heroQuality.def + heroQuality.def_inc * (this.level - 1),
            mp: heroQuality.mp + heroQuality.mp_inc * (this.level - 1),
            mp_def: heroQuality.mpdef + heroQuality.mpdef_inc * (this.level - 1),
            cri: heroQuality.cri,
            mp_cri: heroQuality.mp_cri,
            create_time: unix(),
            status: this.status,
            has_awake: this.hasAwake ? 1 : 0,
            bagate_level: this.bagateLevel,
            bagate_skill: this.bagateSkill
        };

        for(const keyValue of this.skillsMap.entries()){
            packet[`skill_${keyValue[0]}_lv`] = keyValue[1];
        }

        for(const keyValue of this.equipsMap.entries()){
            packet[`equip_${keyValue[0]}`] = keyValue[1];
        }
        
        return packet;
    }
}