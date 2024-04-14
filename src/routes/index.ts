import Player from '../game/player';

type Handler = (params: object, player: Player) => Promise<void>;

export function Route(funcName: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        RouteManager.routers.set(funcName, descriptor.value);
    };
}

export default class RouteManager {
    public static readonly routers: Map<string, Handler> = new Map<string, Handler>();
}
