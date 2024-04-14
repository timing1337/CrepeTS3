import chalk from 'chalk';
import os from 'os';
import CommandManager from './commands';
import HttpServer from './https';
import { ResourceManager } from './resources';
import ServerManager from './server';
import GameHero from './game/avatar/hero';

const color2 = chalk.hex('#ffa7a6');
const color1 = chalk.hex('#f06c9c');

const mainCpu = os.cpus()[0];
const cpuModel = mainCpu?.model.split(' ') || [];
const cpuInfo = `${cpuModel[0]} ${os.cpus().length} cores ` + `@ ${(mainCpu?.speed || 0) / 1000}GHz `;

const version = color1('| CrepeTS3 ') + color2('v1.0');
const authors = color1('| With ♡ by ') + color2('timing1337');

const cpu = color1('| CPU: ' + cpuInfo);
const ram = color1('| RAM: ' + Math.floor(os.totalmem() / 1000000000) + 'GB');

console.log(
    color2(`

                                       
   ▐▀▄       ▄▀▌   ▄▄▄▄▄▄▄             
   ▌▒▒▀▄▄▄▄▄▀▒▒▐▄▀▀▒██▒██▒▀▀▄          
  ▐▒▒▒▒▀▒▀▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄        
  ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▒▒▒▒▒▒▒▒▒▒▒▒▀▄           ${version}
▀█▒▒▒█▌▒▒█▒▒▐█▒▒▒▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌          ${authors}
▀▌▒▒▒▒▒▒▀▒▀▒▒▒▒▒▒▀▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐   ▄▄     ${color1('| Using: TypeScript')}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌▄█▒█     ${color1('| License: MIT')}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒█▀      ${cpu}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▀        ${ram}
▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌         
 ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐     
 ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌     
  ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐      
  ▐▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▄▌      
    ▀▄▄▀▀▀▀▀▄▄▀▀▀▀▀▀▀▄▄▀▀▀▀▀▄▄▀        
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`)
);

ResourceManager;
HttpServer.start();
ServerManager.init();
CommandManager.init();