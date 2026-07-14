"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDWORDRegKey = exports.GetStringRegKey = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const { join } = require('node:path');
const windowRegistry = process.platform === 'win32' ? require('node-gyp-build')(join(__dirname, '..')) : null;
function GetStringRegKey(hive, path, name) {
    if (windowRegistry) {
        return windowRegistry.GetStringRegKey(hive, path, name);
    }
    throw new Error('GetStringRegKey is only available on Windows.');
}
exports.GetStringRegKey = GetStringRegKey;
function GetDWORDRegKey(hive, path, name) {
    if (windowRegistry) {
        return windowRegistry.GetDWORDRegKey(hive, path, name);
    }
    throw new Error('GetDWORDRegKey is only available on Windows.');
}
exports.GetDWORDRegKey = GetDWORDRegKey;
//# sourceMappingURL=index.js.map