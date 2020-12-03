const fs = require('fs')
const path = require('path')

const dest = path.join(__dirname, 'node_modules/iohook/builds/electron-v80-win32-x64/build/Release')

fs.mkdirSync(dest, { recursive: true })
fs.copyFileSync(path.join(__dirname, 'iohook/iohook.node'), path.join(dest, 'iohook.node'))
fs.copyFileSync(path.join(__dirname, 'iohook/uiohook.dll'), path.join(dest, 'uiohook.dll'))
