**Changes in the fork:**
- Added `node-gyp-build` and `prebuildify` to include prebuilds in the library
- Specified fixed NAPI version

**How to use:**
```sh
# Adjust the version to the latest with the "-prebuild" suffix manually
npm i github:nextcloud-deps/vscode-windows-registry#v1.2.3-prebuild
```

**How to update:**
1. When `@vscode/windows-registry` has a new version
2. Create a new branch from `main`
   ```sh
   git checkout -b sync-upstream-v1.2.3
   ```
3. Merge the new released tag and resolve conflicts
   ```sh
   git fetch upstream --tags
   git merge v1.2.3
   ```
4. Rebuild TS
   ```sh
   npm run compile
   ```
5. Rebuild binaries on **Windows**
   ```sh
   npm run prebuilds:all
   ```
   or if you want to build only the current arch
   ```sh
   npm run prebuilds
   ```
6. Update version with `-prebuild` suffix
   ```sh
   npm version v1.2.3-prebuild --no-git-tag
   ```
7. Create PR, merge
8. Add a new tag with the "prebuild" suffix `v1.2.3-prebuild`

**How to install build tools (if not installed with Node.js):**
1. Install **Python** (adjust version to the latest if needed)
    ```sh
    winget install Python.Python.3.14
    ```
    or via **Python Install Manager** for better Python version management
    ```sh
    winget install Python.PythonInstallManager
    py install 3
    ```
2. Install **Visual Studio Build Tools**
    ```sh
    winget install Microsoft.VisualStudio.2022.BuildTools
    ```
3. Modify **Visual Studio** to add **Visual C++ build tools**:
   - All architectures:
     ```sh
     & "C:\Program Files (x86)\Microsoft Visual Studio\Installer\vs_installer.exe" modify `
        --productId Microsoft.VisualStudio.Product.BuildTools `
        --channelId VisualStudio.17.Release `
        --add Microsoft.VisualStudio.Component.Windows11SDK.26100 `
        --add Microsoft.VisualStudio.Component.VC.Tools.x86.x64 `
        --add Microsoft.VisualStudio.Component.VC.Runtimes.x86.x64.Spectre `
        --add Microsoft.VisualStudio.Component.VC.Tools.ARM64 `
        --add Microsoft.VisualStudio.Component.VC.Tools.ARM64EC `
        --add Microsoft.VisualStudio.Component.VC.Runtimes.ARM64.Spectre `
        --add Microsoft.VisualStudio.Component.VC.Runtimes.ARM64EC.Spectre
     ```
     or manually run **Visual Studio Installer** and select **Individual components**:
     - Windows 11 SDK (10.0.26100.7705)
     - MSVC v143 - VS 2022 C++ x64/x86 build tools (latest)
     - MSVC v143 - VS 2022 C++ x64/x86 Spectre-Mitigated libs (latest)
     - MSVC v143 - VS 2022 C++ ARM64/ARM64EC build tools (latest)
     - MSVC v143 - VS 2022 C++ ARM64/ARM64EC Spectre-Mitigated libs (latest)
   - x64 only
     ```sh
     & "C:\Program Files (x86)\Microsoft Visual Studio\Installer\vs_installer.exe" modify `
        --productId Microsoft.VisualStudio.Product.BuildTools `
        --channelId VisualStudio.17.Release `
        --add Microsoft.VisualStudio.Component.Windows11SDK.26100 `
        --add Microsoft.VisualStudio.Component.VC.Tools.x86.x64 `
        --add Microsoft.VisualStudio.Component.VC.Runtimes.x86.x64.Spectre
     ```
     or manually run **Visual Studio Installer** and select **Individual components**:
     - Windows 11 SDK (10.0.26100.7705)
     - MSVC v143 - VS 2022 C++ x64/x86 build tools (latest)
     - MSVC v143 - VS 2022 C++ x64/x86 Spectre-Mitigated libs (latest)

---

# Native node module to access the Windows Registry
This module only has what is needed to support VS Code and is intended to be a lightweight module.

## Installing

```sh
npm install @vscode/windows-registry
```

## Using

```javascript
var vsWinReg = require('@vscode/windows-registry');
console.log(vsWinReg.GetStringRegKey('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion', 'ProgramFilesPath'));
```

## Development
 * `npm install`
 * `npm run compile`
 * `npm test`

## License
[MIT](https://github.com/Microsoft/vscode-windows-registry/blob/master/License.txt)


# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
