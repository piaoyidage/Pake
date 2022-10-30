const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const createConf = (c) => {
    const { productName, version, url, icon, identifier } = c;
    return ({
            "package": {
                "productName": productName,
                "version": version
            },
            "tauri": {
                "windows": [
                    {
                        "url": url,
                        "transparent": true,
                        "fullscreen": false,
                        "width": 1200,
                        "height": 728,
                        "resizable": true
                    }
                ],
                "allowlist": {
                    "all": true
                },
                "bundle": {
                    "icon": icon,
                    "active": true,
                    "category": "DeveloperTool",
                    "copyright": "",
                    "deb": {
                        "depends": []
                    },
                    "externalBin": [],
                    "identifier": identifier,
                    "longDescription": "",
                    "macOS": {
                        "entitlements": null,
                        "exceptionDomain": "",
                        "frameworks": [],
                        "providerShortName": null,
                        "signingIdentity": null
                    },
                    "resources": [],
                    "shortDescription": "",
                    "targets": "all",
                    "windows": {
                        "certificateThumbprint": null,
                        "digestAlgorithm": "sha256",
                        "timestampUrl": ""
                    }
                },
                "security": {
                    "csp": null
                },
                "updater": {
                    "active": false
                }
            },
            "build": {
                "devPath": "../dist",
                "distDir": "../dist",
                "beforeBuildCommand": "",
                "beforeDevCommand": ""
            }
        })
}

const configList = [{
    productName: 'flomo',
    version: '0.2.0',
    url: 'https://v.flomo.com/',
    icon: ["icons/flomo.icns"],
    identifier: "com.tw93.flomo"
}, {
    productName: 'WeRead',
    version: '0.2.0',
    url: 'https://weread.qq.com/',
    icon: ["icons/weRead.icns"],
    identifier: "com.tw93.weRead"
}]


configList.forEach(c => {
    const config = JSON.stringify(createConf(c));
    fs.writeFileSync(path.resolve(__dirname, 'tauri.conf.json'), config)
    execSync(`npm run tauri build`)
})