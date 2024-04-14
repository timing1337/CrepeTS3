import * as fs from 'fs';
import * as path from 'path';
import { ChapterConfig, HeroConfig, HeroQualityConfig } from './types';

export function Path(configPath: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.value(JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'resources', 'game_data', configPath + '.json'), 'utf8')));
    };
}

export class ResourceManager {
    public static heros: Map<number, HeroConfig> = new Map<number, HeroConfig>();
    public static chapters: Map<number, ChapterConfig> = new Map<number, ChapterConfig>();

    @Path('HeroConfigData')
    public HeroConfigData(data: HeroConfig[]) {
        data.forEach((config) => {
            config.qualities = new Map<number, HeroQualityConfig>(); //this is bad
            ResourceManager.heros.set(config.id, config);
        });
    }

    @Path('HeroQualityConfigData')
    public HeroQualityConfigData(data: HeroQualityConfig[]) {
        data.forEach((qualityConfig) => {
            ResourceManager.heros.get(qualityConfig.hero_id)!.qualities.set(qualityConfig.quality, qualityConfig);
        });
    }

    @Path('ChapterConfigData')
    public ChapterConfigData(data: ChapterConfig[]) {
        data.forEach((config) => ResourceManager.chapters.set(config.id, config));
    }
}
