import {One} from './sub/One';
import {Two} from './sub/Two';

import * as assert from 'node/assert';
import * as buffer from 'node/buffer';
import * as child_process from 'node/child_process';
import * as cluster from 'node/cluster';
import * as constants from 'node/constants';
import * as crypto from 'node/crypto';
import * as dgram from 'node/dgram';
import * as dns from 'node/dns';
import * as domain from 'node/domain';
import * as events from 'node/events';
import * as fs from 'node/fs';
import * as http from 'node/http';
import * as https from 'node/https';
import * as net from 'node/net';
import * as os from 'node/os';
import * as path from 'node/path';
import * as punycode from 'node/punycode';
import * as querystring from 'node/querystring';
import * as readline from 'node/readline';
import * as repl from 'node/repl';
import * as stream from 'node/stream';
import * as string_decoder from 'node/string_decoder';
import * as tls from 'node/tls';
import * as tty from 'node/tty';
import * as url from 'node/url';
import * as util from 'node/util';
import * as vm from 'node/vm';
import * as zlib from 'node/zlib';

export class Main {
    static from(target:any){
        console.info('Main.from',target);
    }
    public one:One = new One();
    public two:Two = new Two();
    constructor(config){
        console.info("Main Jan");
    }
    printNodeModules(){
        console.info(Object.keys(Buffer).join(' '));
        console.info(Object.keys(process).join(' '));
    }
    printModules(){
        console.info(Object.keys(System));
    }
}

new Main('Test').printModules();