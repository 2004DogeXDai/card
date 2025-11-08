// 使用Node.js启动本地服务器
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8000;

// 获取本机IP地址
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            // 跳过内部（即127.0.0.1）和非IPv4地址
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '未找到';
}

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // 处理根路径
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end('<h1>404 - 文件未找到</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`服务器错误: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType + '; charset=utf-8' });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    const localIP = getLocalIP();
    console.log('========================================');
    console.log('  惊喜贺卡 - 本地服务器启动成功');
    console.log('========================================');
    console.log('');
    console.log('访问地址:');
    console.log(`  本机访问: http://localhost:${PORT}`);
    if (localIP !== '未找到') {
        console.log(`  手机访问: http://${localIP}:${PORT}`);
        console.log('');
        console.log('提示: 确保手机和电脑在同一WiFi网络');
    }
    console.log('');
    console.log('按 Ctrl+C 停止服务器');
    console.log('========================================');
});

