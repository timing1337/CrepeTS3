import express, { Request, Response } from 'express';
import path from 'path';
import Logger from '../utils/logger';

export default class HttpServer {
    static readonly logger = new Logger('HttpServer');
    public static start() {
        const app = express();

        app.use('/static', express.static(path.join(__dirname, '..', '..', 'resources', 'static')));

        //System
        app.post('/v1/system/init', this.systemInit);
        //Account
        app.post('/v1/user/autoLogin', this.autoLogin);
        app.post('/v1/user/loginByName', this.loginByName);
        //??
        app.post('/auth', this.auth);

        app.post('/v1/auth/asyUonline', this.asyUonline);

        app.get('/rpc', this.rpc);

        app.listen(80, () => {
            HttpServer.logger.log('Dispatch started.');
        });
    }


    private static rpc(req: Request, rsp: Response) {
        console.log(req.body);
    }

    private static asyUonline(req: Request, rsp: Response) {
        rsp.json({ result: true, data: [], error: { id: 0, message: '' } });
    }

    private static systemInit(req: Request, rsp: Response) {
        rsp.json({ result: true, data: { payTypes: [], version: { versionName: 'empty', versionNo: 'empty', versionUrl: 'empty', updateTime: 'empty', isMust: 'empty', updateTips: 'empty' }, productConfig: { useServiceCenter: '0', title: '', logo: '', useSms: '0', skinStyle: '0', serviceInfo: '', isShowFloat: 1, guestShowBind: 1, single_play: 0, adZhifuSwt: 0, noticeNode: 0, regMailVerify: 0, pycenttype: 0, onGoToPUrl: 0, onGoToPUrlData: '', trashTime: 0, noFirebaseLog: 0, logEvtReport: 0 }, otherpayType: '4', payFast: [{ showName: 'PayPal\u3010Global\u3011', params: 'payType=11_GOL' }], isNotGift: 0, showShare: 0, requestIp: '127.0.0.1', showDiscount: 0, nodes: { deleteAccount: 0, serverInfo: 0, oneYeaerTips: 0, removeEmail: 0 }, loginTypes: ['6', '1', '7'], countryCode: 'VN' }, error: { id: 0, message: '' } });
    }

    private static loginByName(req: Request, rsp: Response) {
        rsp.json({
            result: true,
            data: {
                authToken: "",
                userData: {
                    uid: 1337,
                    username: "timing1337",
                    mobile: "",
                    isGuest: 0,
                    pushToken: "",
                    fbName: "",
                    token: "",
                    bindInfo: {
                        bindEmail: {
                            isBind: 1,
                            otherAccountName: 'timing1337',
                            bid: 13,
                            buid: 1337
                        }
                    },
                    noLoginLongTime: 0
                },
                checkRealName: 0
            }
        });
    }

    private static autoLogin(req: Request, rsp: Response) {
        rsp.json({
            result: true,
            data: {
                authToken: '1337',
                userData: {
                    uid: 1337,
                    username: 'timing1337',
                    isGuest: '0',
                    token: '1337',
                    bindInfo: {
                        bindEmail: {
                            isBind: 1,
                            otherAccountName: 'timing1337',
                            bid: 13,
                            buid: 1337
                        }
                    },
                    noLoginLongTime: 0,
                    isTrash: 0
                },
                checkRealName: 0
            }
        });
    }

    private static auth(req: Request, rsp: Response) {
        switch (req.query.api) {
            case 'check_user':
                rsp.json([1188999, '4786061711172364904912']); //???
                break;
            case 'get_server_list':
                rsp.json({
                    servers: [
                        {
                            status: 4,
                            remark: null,
                            name: 'CrepeTS3',
                            hot: 1,
                            id: 1,
                            host: '192.168.1.9', //make configurable
                            newer: 1,
                            port: 10001 //make configurable
                        },
                        {
                            status: 1,
                            remark: null,
                            name: 'Naruto 257',
                            hot: 0,
                            id: 257,
                            host: '192.168.1.9',
                            newer: 1,
                            port: 10002
                        }
                    ]
                });
                break;
            case 'get_notifications':
                rsp.json({
                    common: [
                        {
                            content: 'I love sex',
                            platform: '',
                            create_time: '2024-03-22 09:07:33',
                            id: 1,
                            title: 'CrepeTS3 | Annoucement'
                        }
                    ]
                });
                break;
        }
    }
}
