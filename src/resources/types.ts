export interface HeroConfig {
    seal: number;
    dead_sound: number;
    sum_soul: number;
    hero_type: number;
    skill_id_6: number;
    skill_id_7: number;
    skill_id_4: number;
    skill_id_5: number;
    skill_id_2: number;
    skill_id_3: number;
    skill_id_1: number;
    skill: number;
    speed: number;
    id: number;
    skill_id_8: number;
    skill_id_9: number;
    phantom: number;
    strength: number;
    beast_star: number;
    skill_id_10: number;
    vigour: number;
    dead_power: number;
    can_awake: number;
    type: number;
    smart: number;
    body: number;
    awake3_equip_ids: string;
    awake_equip_id: number;
    awake2_equip_ids: string;
    awake4_equip_ids: string;
    icon: string;
    name: string;
    awake_task_ids: string;
    intro: string;

    qualities: Map<number, HeroQualityConfig>;
}

export interface HeroQualityConfig {
    atk_inc: number;
    mpdef_inc: number;
    equip_5: number;
    hp: number;
    hp_inc: number;
    mp_cri: number;
    atk: number;
    equip_6: number;
    mpdef: number;
    equip_4: number;
    def_inc: number;
    mp_inc: number;
    mp: number;
    equip_1: number;
    equip_2: number;
    equip_3: number;
    cri: number;
    quality: number;
    def: number;
    hero_id: number;
}

export interface ChapterConfig {
    cost_sp: number
    open_weekday: string
    name: string
    per_day_count: number
    hero_exp: number
    lv_limit: number
    icon_id: number
    cd_time: number
    team_exp: number
    intro: string
    max_box_drop: number
    min_box_drop: number
    scene_id: string
    coin: number
    id: number
    hero_limit: number
    difficult: number
  }
  