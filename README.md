# Detailed Kryptobirdz Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
                                                                           Krypto Bird Detailed

We are creating a Nextjs project with Redhat as package manager instead of truffle.Next js is an excellent library which is smart enough to load only the necessary js and css during rendering making it  very light weight for front end heavy projects like DApps.

Create the project:

PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed> npx create-next-app nft-marketplace-kryptobirdz
npx: installed 1 in 9.112s
Creating a new Next.js app in D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz.

Using npm.

Installing dependencies:
- react
- react-dom
- next

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-x64@12.0.4 (node_modules\next\node_modules\@next\swc-darwin-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-x64@12.0.4: wanted {"os":"darwin","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-gnu@12.0.4 (node_modules\next\node_modules\@next\swc-linux-arm64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-gnu@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-android-arm64@12.0.4 (node_modules\next\node_modules\@next\swc-android-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-android-arm64@12.0.4: wanted {"os":"android","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-musl@12.0.4 (node_modules\next\node_modules\@next\swc-linux-arm64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-musl@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm-gnueabihf@12.0.4 (node_modules\next\node_modules\@next\swc-linux-arm-gnueabihf):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm-gnueabihf@12.0.4: wanted {"os":"linux","arch":"arm"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-arm64@12.0.4 (node_modules\next\node_modules\@next\swc-darwin-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-arm64@12.0.4: wanted {"os":"darwin","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-ia32-msvc@12.0.4 (node_modules\next\node_modules\@next\swc-win32-ia32-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-ia32-msvc@12.0.4: wanted {"os":"win32","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-musl@12.0.4 (node_modules\next\node_modules\@next\swc-linux-x64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-musl@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-arm64-msvc@12.0.4 (node_modules\next\node_modules\@next\swc-win32-arm64-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-arm64-msvc@12.0.4: wanted {"os":"win32","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-gnu@12.0.4 (node_modules\next\node_modules\@next\swc-linux-x64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-gnu@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.1 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN @babel/plugin-syntax-jsx@7.14.5 requires a peer of @babel/core@^7.0.0-0 but none is installed. You must install peer dependencies yourself.

+ react-dom@17.0.2
+ react@17.0.2
+ next@12.0.4
added 244 packages from 222 contributors and audited 255 packages in 93.809s

49 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Installing devDependencies:
- eslint@7
- eslint-config-next


> core-js-pure@3.19.1 postinstall D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

npm WARN @babel/plugin-syntax-jsx@7.14.5 requires a peer of @babel/core@^7.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-android-arm64@12.0.4 (node_modules\@next\swc-android-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-android-arm64@12.0.4: wanted {"os":"android","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-x64@12.0.4 (node_modules\@next\swc-darwin-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-x64@12.0.4: wanted {"os":"darwin","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-arm64@12.0.4 (node_modules\@next\swc-darwin-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-arm64@12.0.4: wanted {"os":"darwin","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm-gnueabihf@12.0.4 (node_modules\@next\swc-linux-arm-gnueabihf):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm-gnueabihf@12.0.4: wanted {"os":"linux","arch":"arm"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-musl@12.0.4 (node_modules\@next\swc-linux-arm64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-musl@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-gnu@12.0.4 (node_modules\@next\swc-linux-x64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-gnu@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-gnu@12.0.4 (node_modules\@next\swc-linux-arm64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-gnu@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-musl@12.0.4 (node_modules\@next\swc-linux-x64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-musl@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-arm64-msvc@12.0.4 (node_modules\@next\swc-win32-arm64-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-arm64-msvc@12.0.4: wanted {"os":"win32","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-ia32-msvc@12.0.4 (node_modules\@next\swc-win32-ia32-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-ia32-msvc@12.0.4: wanted {"os":"win32","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ eslint-config-next@12.0.4
+ eslint@7.32.0
added 188 packages from 107 contributors and audited 443 packages in 77.095s

84 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Initialized a git repository.

Success! Created nft-marketplace-kryptobirdz at D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz
Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd nft-marketplace-kryptobirdz
  npm run dev

PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed>

PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed> cd nft-marketplace-kryptobirdz
PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> dir


    Directory: D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        16-11-2021     08:15                node_modules
d-----        16-11-2021     08:15                pages
d-----        16-11-2021     08:15                public
d-----        16-11-2021     08:15                styles
-a----        26-10-1985     13:45             40 .eslintrc.json
-a----        26-10-1985     13:45            386 .gitignore
-a----        26-10-1985     13:45             46 next.config.js
-a----        16-11-2021     08:15         147645 package-lock.json
-a----        16-11-2021     08:15            367 package.json
-a----        26-10-1985     13:45           1581 README.md


PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz>

PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios
npm WARN deprecated cids@0.7.5: This module has been superseded by the multiformats module
npm WARN deprecated multicodec@1.0.4: This module has been superseded by the multiformats module
npm WARN deprecated core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
npm WARN deprecated debug@3.2.6: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated ethereumjs-tx@1.3.7: New package name format for new versions: @ethereumjs/tx. Please update.
npm WARN deprecated ethereumjs-block@1.7.1: New package name format for new versions: @ethereumjs/block. Please update.
npm WARN deprecated ethereumjs-vm@2.6.0: New package name format for new versions: @ethereumjs/vm. Please update.
npm WARN deprecated ethereumjs-block@2.2.2: New package name format for new versions: @ethereumjs/block. Please update.
npm WARN deprecated ethereumjs-tx@2.1.2: New package name format for new versions: @ethereumjs/tx. Please update.
npm WARN deprecated eth-sig-util@3.0.0: Deprecated in favor of '@metamask/eth-sig-util'
npm WARN deprecated ethashjs@0.0.8: New package name format for new versions: @ethereumjs/ethash. Please update.
npm WARN deprecated ethereumjs-account@3.0.0: Please use Util.Account class found on package ethereumjs-util@^7.0.6 https://github.com/ethereumjs/ethereumjs-util/releases/tag/v7.0.6
npm WARN deprecated ethereumjs-blockchain@4.0.4: New package name format for new versions: @ethereumjs/blockchain. Please update.
npm WARN deprecated ethereumjs-common@1.5.0: New package name format for new versions: @ethereumjs/common. Please update.
npm WARN deprecated ethereumjs-vm@4.2.0: New package name format for new versions: @ethereumjs/vm. Please update.
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated mkdirp-promise@5.0.1: This package is broken and no longer maintained. 'mkdirp' itself supports promises now, please switch to that.
npm WARN deprecated multibase@0.6.1: This module has been superseded by the multiformats module
npm WARN deprecated multicodec@0.5.7: This module has been superseded by the multiformats module
npm WARN deprecated multibase@0.7.0: This module has been superseded by the multiformats module
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated safe-event-emitter@1.0.1: Renamed to @metamask/safe-event-emitter
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated uuid@3.3.2: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated eth-sig-util@1.4.2: Deprecated in favor of '@metamask/eth-sig-util'
npm WARN deprecated @ensdomains/resolver@0.2.4: Please use @ensdomains/ens-contracts
npm WARN deprecated @ensdomains/ens@0.4.5: Please use @ensdomains/ens-contracts
npm WARN deprecated testrpc@0.0.1: testrpc has been renamed to ganache-cli, please use this package from now on.
npm ERR! code EBUSY
npm ERR! syscall rmdir
npm ERR! path C:\Users\soviw\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-68ca4acc
npm ERR! errno -4082
npm ERR! EBUSY: resource busy or locked, rmdir 'C:\Users\soviw\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-68ca4acc'
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated eth-sig-util@2.5.4: Deprecated in favor of '@metamask/eth-sig-util'
npm WARN deprecated fsevents@2.1.3: "Please update to latest v2.3 or v2.2"
npm ERR! code EBUSY
npm ERR! syscall rmdir
npm ERR! path C:\Users\soviw\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-00245a62
npm ERR! errno -4082
npm ERR! EBUSY: resource busy or locked, rmdir 'C:\Users\soviw\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-00245a62'

> bufferutil@4.0.3 install D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\ganache-core\node_modules\bufferutil
> node-gyp-build


> keccak@3.0.1 install D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\ganache-core\node_modules\keccak
> node-gyp-build || exit 0


> secp256k1@4.0.2 install D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\ganache-core\node_modules\secp256k1
> node-gyp-build || exit 0


> utf-8-validate@5.0.4 install D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\ganache-core\node_modules\utf-8-validate
> node-gyp-build


> keccak@3.0.2 install D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\keccak
> node-gyp-build || exit 0


> secp256k1@4.0.2 install D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\secp256k1
> node-gyp-build || exit 0


> core-js@2.6.12 postinstall D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\ganache-core\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.8.2 postinstall D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\ganache-core\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"


> web3@1.2.11 postinstall D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\ganache-core\node_modules\web3
> node angular-patch.js


> postinstall-postinstall@2.1.0 postinstall D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\postinstall-postinstall
> node ./run.js


> protobufjs@6.11.2 postinstall D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz\node_modules\protobufjs
> node scripts/postinstall

npm WARN notsup Unsupported engine for ipfs-http-client@54.0.0: wanted: {"node":">=14.0.0","npm":">=3.0.0"} (current: {"node":"12.22.4","npm":"6.14.14"})
npm WARN notsup Not compatible with your version of node/npm: ipfs-http-client@54.0.0
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.1 (node_modules\mocha\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN notsup Unsupported engine for ipfs-unixfs@6.0.6: wanted: {"node":">=14.0.0","npm":">=6.0.0"} (current: {"node":"12.22.4","npm":"6.14.14"})
npm WARN notsup Not compatible with your version of node/npm: ipfs-unixfs@6.0.6
npm WARN @babel/plugin-syntax-jsx@7.14.5 requires a peer of @babel/core@^7.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN ts-essentials@6.0.7 requires a peer of typescript@>=3.7.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-ia32-msvc@12.0.4 (node_modules\@next\swc-win32-ia32-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-ia32-msvc@12.0.4: wanted {"os":"win32","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-arm64-msvc@12.0.4 (node_modules\@next\swc-win32-arm64-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-arm64-msvc@12.0.4: wanted {"os":"win32","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-musl@12.0.4 (node_modules\@next\swc-linux-x64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-musl@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-gnu@12.0.4 (node_modules\@next\swc-linux-x64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-gnu@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-musl@12.0.4 (node_modules\@next\swc-linux-arm64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-musl@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-gnu@12.0.4 (node_modules\@next\swc-linux-arm64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-gnu@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm-gnueabihf@12.0.4 (node_modules\@next\swc-linux-arm-gnueabihf):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm-gnueabihf@12.0.4: wanted {"os":"linux","arch":"arm"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-x64@12.0.4 (node_modules\@next\swc-darwin-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-x64@12.0.4: wanted {"os":"darwin","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-arm64@12.0.4 (node_modules\@next\swc-darwin-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-arm64@12.0.4: wanted {"os":"darwin","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-android-arm64@12.0.4 (node_modules\@next\swc-android-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-android-arm64@12.0.4: wanted {"os":"android","arch":"arm64"} (current: {"os":"win32","arch":"x64"})

+ @nomiclabs/hardhat-waffle@2.0.1
+ ethers@5.5.1
+ hardhat@2.6.8
+ web3modal@1.9.4
+ chai@4.3.4
+ ethereum-waffle@3.4.0
+ ipfs-http-client@54.0.0
+ @nomiclabs/hardhat-ethers@2.0.2
+ axios@0.24.0
+ @openzeppelin/contracts@4.3.3
added 1453 packages from 800 contributors and audited 1897 packages in 584.178s

169 packages are looking for funding
  run `npm fund` for details

found 68 vulnerabilities (7 low, 26 moderate, 35 high)
  run `npm audit fix` to fix them, or `npm audit` for details
npm ERR! Callback called more than once.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\soviw\AppData\Roaming\npm-cache\_logs\2021-11-16T03_16_49_813Z-debug.log
PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> npm install add -D tailwindcss@latest postcss@latest autoprefixer@latest
npm WARN @babel/plugin-syntax-jsx@7.14.5 requires a peer of @babel/core@^7.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN ts-essentials@6.0.7 requires a peer of typescript@>=3.7.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-arm64@12.0.4 (node_modules\@next\swc-darwin-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-arm64@12.0.4: wanted {"os":"darwin","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm-gnueabihf@12.0.4 (node_modules\@next\swc-linux-arm-gnueabihf):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm-gnueabihf@12.0.4: wanted {"os":"linux","arch":"arm"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-darwin-x64@12.0.4 (node_modules\@next\swc-darwin-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-darwin-x64@12.0.4: wanted {"os":"darwin","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-android-arm64@12.0.4 (node_modules\@next\swc-android-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-android-arm64@12.0.4: wanted {"os":"android","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-gnu@12.0.4 (node_modules\@next\swc-linux-arm64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-gnu@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-arm64-musl@12.0.4 (node_modules\@next\swc-linux-arm64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-arm64-musl@12.0.4: wanted {"os":"linux","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-gnu@12.0.4 (node_modules\@next\swc-linux-x64-gnu):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-gnu@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-linux-x64-musl@12.0.4 (node_modules\@next\swc-linux-x64-musl):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-linux-x64-musl@12.0.4: wanted {"os":"linux","arch":"x64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-arm64-msvc@12.0.4 (node_modules\@next\swc-win32-arm64-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-arm64-msvc@12.0.4: wanted {"os":"win32","arch":"arm64"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @next/swc-win32-ia32-msvc@12.0.4 (node_modules\@next\swc-win32-ia32-msvc):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @next/swc-win32-ia32-msvc@12.0.4: wanted {"os":"win32","arch":"ia32"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\mocha\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ add@2.0.6
+ autoprefixer@10.4.0
+ postcss@8.3.11
+ tailwindcss@2.2.19
added 73 packages from 97 contributors, updated 1 package, moved 1 package and audited 1971 packages in 45.998s

179 packages are looking for funding
  run `npm fund` for details

found 68 vulnerabilities (7 low, 26 moderate, 35 high)
  run `npm audit fix` to fix them, or `npm audit` for details
PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> npx tailwindcss init -p

Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js
PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.6.8

√ What do you want to do? · Create a basic sample project

√ Hardhat project root: · D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz
√ Do you want to add a .gitignore? (Y/n) · y
× Help us improve Hardhat with anonymous crash reports & basic usage data? (Y/n) · true

You need to install these dependencies to run the sample project:
  npm install --save-dev "hardhat@^2.6.8" "@nomiclabs/hardhat-waffle@^2.0.0" "ethereum-waffle@^3.0.0" "chai@^4.2.0" "@nomiclabs/hardhat-ethers@^2.0.0" "ethers@^5.0.0"

Project created
See the README.txt file for some example tasks you can run.
PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz>

Package.json:

{
  "name": "nft-marketplace-kryptobirdz",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@nomiclabs/hardhat-ethers": "^2.0.2",
    "@nomiclabs/hardhat-waffle": "^2.0.1",
    "@openzeppelin/contracts": "^4.3.3",
    "axios": "^0.24.0",
    "chai": "^4.3.4",
    "ethereum-waffle": "^3.4.0",
    "ethers": "^5.5.1",
    "hardhat": "^2.6.8",
    "ipfs-http-client": "^54.0.0",
    "next": "12.0.4",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "web3modal": "^1.9.4"
  },
  "devDependencies": {
    "add": "^2.0.6",
    "autoprefixer": "^10.4.0",
    "eslint": "7.32.0",
    "eslint-config-next": "12.0.4",
    "postcss": "^8.3.11",
    "tailwindcss": "^2.2.19"
  }
}


Next js documentation:

https://nextjs.org/docs/basic-features/pages

Project file structure setup:

 


Now since we are using polygon as our technology, we goto https://docs.polygon.technology/

We go to the Dapps developer:

 
 


 

We are going to use InfuraAPI as our end point since Infura can also leverage IPFS endpoints as well.

Infura in other words is a super powered Ganache

Login or Signup to Infura:

 

Go to create new project:

 

 

For adding polygon you have to add the Addons for Polygon(Polygon-Mainnet and Polygon-Mumbai). Must require card details for free version

 
Now expose a private key in Metamask for the deployments:

Create a new account in the Metamask. Then check the account details:
 
Go to Export Private key-> Give the wallet password-> Copy the privated key(exposed)

In the project file structure create a p-key.txt file(though unadvised)
Solidity program:

1.	NFT.sol:
2.	//SPDX-License-Identifier:MIT
3.	
4.	pragma solidity ^0.8.4
5.	
6.	//openzeppelin ERC721 functionality
7.	import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
8.	import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
9.	import '@openzeppelin/contracts/utils/Counters.sol'
10.	
11.	contract NFT is ERC721URIStorage{
12.	    using Counters for Counters.Counter;
13.	    COunters.Counter private _tokenIds;
14.	    //COunters keep track of token Ids
15.	    
16.	    address contractAddress;
17.	
18.	    //OBJ: Give the marketplace the ability to transact with other tokens and change ownership
19.	    //SetApprovalForAll allows us to do the above objectives for all
20.	
21.	    //constructor to set up our address
22.	
23.	    // 'N.B':ERC721URIStorage actually inherits ERC721.sol hence we are not inheriting ERC721 directly but we are inheriting
24.	    //ERC721 via multilevel inheritence
25.	
26.	    constructor(address marketplaceAddress) ERC721('KryptoBirdz','KBIRDZ'){
27.	             contractAddress=marketplaceAddress;
28.	    }
29.	
30.	    function mintToken(string memory tokenURI) public returns(uint){
31.	        _tokenIds.increment();
32.	        uint256 newItemId=_tokenIds.current();
33.	        _mint(msg.sender,newItemId);
34.	        //passing the ID and the URL 
35.	        _setTokenURI(newItemId,tokenURI);
36.	        //give the marketplace approval to interact with the users
37.	        _setApprovalForAll(contractAddress,true);
38.	        //mint the token and set the Id for sale by returning
39.	
40.	        return newItemID;
41.	
42.	    }
43.	}
44.	
2. KBMarket.sol

//SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;

//openzeppelin ERC721 functionality
import ‘@openzeppelin/contracts/token/ERC721/ERC721.sol’;
import ‘@openzeppelin/contracts/security/ReentrancyGuard.sol’;//security against transaction for multiple requests
import ‘@openzeppelin/contracts/utils/Counters.sol’;
import ‘hardhat/console.sol’;

contract KBMarket is ReentrancyGuard{

    using Counters for Counters.Counter;

    //number of items minting,number of transactions,tokens that have not been sold
    //track of total number of items–tokenId,
    //array need to know the length–help keep track of the array

    Counters.Counter private _tokenIds;
    Counters.Counter private _tokensSold;

    //determine who is the owner of the Contract
    //charge a listing fee so that owner makes a  ransactio

    address payable owner;

    //we are deploying to MATIC API is the same so you can use the ethers same
    //way as MATIC
    //0.045 MATIC –is in cents
    
    uint listingPrice=0.045 ether;

    constructor(){
        owner=payable(msg.sender);
    }

    //Structs can act as objects

    struct MarketToken{
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    //tokenId return which marketToken–fetch which one it is

    mapping(uint256=>MarketToken) private idToMarketToken;

    //listen to events from front end applications

    event MarketTokenMinted(
        uint indexed itemId,
        address indexed nftContract,
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    //get the listing price
    function getListingPrice() public view returns(uint256){
        return listingPrice;
    }
    
    //two functions to interact with the contract
    //1. Create a market item to put it up for sale
    //2. Create market sale for buying and selling between parties

    function mintMarketItem(address nftContract,uint tokenId,uint price) public payable nonReentrant{
        //non reentrant is a modifier to protect reentrancy attack
        require(price>0,’Price must be atleast 1 wei’);
        require(msg.value==listingPrice,”Price must be atleast equal to listing price”);
        _tokenIds.increment();
        uint itemId=_tokenIds.current();
        //putting up for sale
        idToMarketToken[itemId]=MarketToken(
        itemId,
        nftContract,
        tokenId,
        payable(msg.sender),
        payable(address(0)),
        price,
        false  
        );
      //NFT Transaction

      IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);/* this refers to the instance of the contract where the call is made (you can have multiple instances of the same contract).

Address(this) refers to the address of the instance of the contract where the call is being made.

Msg.sender refers to the address where the contract is being called from.

Therefore, address(this) and msg.sender are two unique addresses, the first referring to the address of the contract 
instance and the second referring to the address where the contract call originated from.
      
      
      
       */

      emit MarketTokenMinted(itemId, nftContract, tokenId, msg.sender, address(0), price, false);
      /*When the to address is the zero-address, a new contract will be created by executing the code in data 
      (this is what is meant by “code that returns the code”). The address of the newly created contract is technically 
      known beforehand as it’s based on the address of the sender and it’s current nonce. That address becomes the official 
      address of the contract after mining. */
    
    }

    //function to conduct  ransaction and market sales
     
    function createMarketSale(address nftContract,uint itemId) public payable nonReentrant{

        uint price=idToMarketToken[itemId].price;
        uint tokenId=idToMarketToken[itemId].tokenId;
        require(msg.value==price,”Please submit the asking price to continue”);
        
        //transfer the amount to the seller
        idToMarketToken[itemId].seller.transfer(msg.value);
        //transfer the nft from the contract address to the buyer
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
        idToMarketToken[itemId].owner=payable(msg.sender);
        idToMarketToken[itemId].sold=true;
        _tokensSold.increment();
        payable(owner).transfer(listingPrice);
    }

    //function to fetch our MarketItems-minting,buying and selling

    //return the number of unsold items

    function fetchMarketTokens() public view returns(MarketToken [] memory){
        uint itemCount=_tokenIds.current();
        uint unsoldItemCount=_tokenIds.current()-_tokensSold.current();
        uint currentIndex=0;

        //looping over the number of tokens (if the items have not been sold populate the array)

        MarketToken [] memory items=new MarketToken[](unsoldItemCount);
        for(uint i=0;i<itemCount;i++){
            if(idToMarketToken[i+1].owner==address(0)){
                uint currentId=i+1;
                MarketToken storage currentItem=idToMarketToken[currentId];
                items[currentIndex]=currentItem;
                currentIndex+=1;

            }
        }

        return items;
    }

    //return the nfts the user has already sold

    function fetchMyNFT() public view returns(MarketToken[] memory){
        uint totalItemCount=_tokenIds.current();
        //second counter for each individual user
        uint itemCount=0;
        uint currentIndex=0;

        //first loop is for the item count

        for(uint i=0;i<totalItemCount;i++){
            if(idToMarketToken[i+1].owner==msg.sender){
                itemCount+=1;
            }
        }

        //second loop to loop through the amount you have purchased through the item count
        //check if the owner address is equal to the msg.sender

        MarketToken [] memory items =new MarketToken[](itemCount);

        for(uint i =0; i<totalItemCount;i++){
            if(idToMarketToken[i+1].owner==msg.sender){
                uint currentId=idToMarketToken[i+1].itemId;
                //current Array
                MarketToken storage currentItem=idToMarketToken[currentId];
                items[currentIndex]=currentItem;
                currentIndex+=1;
            }
        }
      
      return items;

    }

    //function return an array of minted nfts

    function fetchItemsCreated() public view returns(MarketToken[] memory){
        //instead of .owner we use .seller
        uint totalItemCount=_tokenIds.current();
        //second counter for each individual user
        uint itemCount=0;
        uint currentIndex=0;

        //first loop is for the item count

        for(uint i=0;i<totalItemCount;i++){
            if(idToMarketToken[i+1].seller==msg.sender){
                itemCount+=1;
            }
        }

        //second loop to loop through the amount you have purchased through the item count
        //check if the owner address is equal to the msg.sender

        MarketToken [] memory items =new MarketToken[](itemCount);

        for(uint i =0; i<totalItemCount;i++){
            if(idToMarketToken[i+1].seller==msg.sender){
                uint currentId=idToMarketToken[i+1].itemId;
                //current Array
                MarketToken storage currentItem=idToMarketToken[currentId];
                items[currentIndex]=currentItem;
                currentIndex+=1;
            }
        }
      
      return items;
    }



}



Testing:
const { expect } = require(“chai”);
const { ethers } = require(“hardhat”);

describe(“KBMarket”, function () {
  it(“Should mint & trade NFTs”, async function () {

    //test to receive the nftcontract address and the MarketPlace address
     const Market= await ethers.getContractFactory(‘KBMarket’)
     const market= await Market.deploy()
     await market.deployed()
     const marketAddress=market.address

     const NFT= await ethers.getContractFactory(‘NFT’)
     const nft=await NFT.deploy(marketAddress)
     await nft.deployed()
     const nftContractAddress=nft.address
     
    //test to receive the listing price and the auction price
     let listingPrice =await market.getListingPrice()

     listingPrice=listingPrice.toString()

     const auctionPrice=ethers.utils.parseUnits(‘100’,’ether’)
    
    //test for minting

    await nft.mintToken(‘https….t1’)
    await market.makeMarketItem(nftContractAddress,1,auctionPrice,{value:listingPrice})

    await nft.mintToken(‘https….t2’)    
    await market.makeMarketItem(nftContractAddress,2,auctionPrice,{value:listingPrice})

    await nft.mintToken(‘https….t3’)    
    await market.makeMarketItem(nftContractAddress,3,auctionPrice,{value:listingPrice})

    //test for different addresses from different users–test accounts
    //return an array of address

    const[_,buyerAddress]=await ethers.getSigners()

    //create a market sale with address,id and price

    await market.connect(buyerAddress).createMarketSale(nftContractAddress,1,{value:auctionPrice})
    //await market.connect(buyerAddress).createMarketSale(nftContractAddress,2,{value:auctionPrice})
    let items=await market.fetchMarketTokens()

    items=await Promise.all(items.map(async i=>{
      //get the uri of the value
      const tokenUri= await nft.tokenURI(i.tokenId)
      let item={
        price:i.price.toString(),
        tokenId:i.tokenId.toString(),
        seller:i.seller,
        owner:i.owner,
        tokenUri
      }
      return item;
    }))
    //test out all the items

    console.log(“items”,items)




  });
});


O/P:

PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> npx hardhat test


  KBMarket
items [
  {
    price: ‘100000000000000000000’,
    tokenId: ‘2’,
    seller: ‘0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266’,
    owner: ‘0x0000000000000000000000000000000000000000’,
    tokenUri: ‘https….t2’
  },
  {
    price: ‘100000000000000000000’,
    tokenId: ‘3’,
    seller: ‘0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266’,
    owner: ‘0x0000000000000000000000000000000000000000’,
    tokenUri: ‘https….t3’
  }
]
    √ Should mint & trade NFTs (16681ms)


  1 passing (17s)

Now to deploy:

We change the name of the sample script.js to deploy.js and create a config.js in the root folder(see below highlighted):
 

Deploy.js
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you’ll find the Hardhat
// Runtime Environment’s members available in the global scope.
Const hre = require(“hardhat”);
//bringing in the filesync
const fs  = require(“fs”);

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run(‘compile’);

  // We get the contract to deploy for KB Market
  const NFTMarket = await hre.ethers.getContractFactory(“KBMarket”);
  const nftMarket = await NFTMarket.deploy();

  await nftMarket.deployed();

  console.log(“NFTMarket contract deployed to:”, nftMarket.address);

   // We get the contract to deploy for NFT contract
   const NFT= await hre.ethers.getContractFactory(“NFT”);
   const nft = await NFT.deploy(nftMarket.address);
 
   await nft.deployed();
 
   console.log(“NFT Contract deployed to:”, nft.address);

   let config=`
   export const nftmarketaddress=${nftMarket.address}
   export const nftaddress=${nft.address}
   `
   let data=JSON.stringify(config)
   fs.writeFileSync(‘config.js’,JSON.parse(data))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
Main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });





Deploy a local development blockchain:

PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts

WARNING: These accounts, and their private keys, are publicly known.     
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

Account #2: 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc (10000 ETH)
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

Account #3: 0x90f79bf6eb2c4f870365e785982e1f101e93b906 (10000 ETH)
Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

Account #4: 0x15d34aaf54267db7d7c367839aaf71a00a2c6a65 (10000 ETH)
Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a

Account #5: 0x9965507d1a55bcc2695c58ba16fb37d819b0a4dc (10000 ETH)
Private Key: 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba

Account #6: 0x976ea74026e726554db657fa54763abd0c3a0aa9 (10000 ETH)
Private Key: 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e

Account #7: 0x14dc79964da2c08b23698b3d3cc7ca32193d9955 (10000 ETH)
Private Key: 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

Account #8: 0x23618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f (10000 ETH)
Private Key: 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97

Account #9: 0xa0ee7a142d267c1f36714e4a8f75612f20a79720 (10000 ETH)
Private Key: 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6

Account #10: 0xbcd4042de499d14e55001ccbb24a551f3b954096 (10000 ETH)
Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897

Account #11: 0x71be63f3384f5fb98995898a86b02fb2426c5788 (10000 ETH)
Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

Account #12: 0xfabb0ac9d68b0b445fb7357272ff202c5651694a (10000 ETH)
Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

Account #13: 0x1cbd3b2770909d4e10f157cabc84c7264073c9ec (10000 ETH)
Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

Account #14: 0xdf3e18d64bc6a983f673ab319ccae4f1a57c7097 (10000 ETH)
Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa

Account #15: 0xcd3b766ccdd6ae721141f452c550ca635964ce71 (10000 ETH)
Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

Account #16: 0x2546bcd3c84621e976d8185a91a922ae77ecec30 (10000 ETH)
Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

Account #17: 0xbda5747bfd65f08deb54cb465eb87d40e51b197e (10000 ETH)
Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

Account #18: 0xdd2fd4581271e230360230f9337d5c0430bf44c0 (10000 ETH)
Private Key: 0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0

Account #19: 0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199 (10000 ETH)
Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e

Now we migrate the smart contract to the localhost from another terminal:

PS D:\Blockchain\Blockchain All\Adaptis\NFT Project\Kryptobird_project\Krypto_bird_detailed\nft-marketplace-kryptobirdz> npx hardhat run scripts/deploy.js –network localhost
NFTMarket contract deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
NFT Contract deployed to: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9

Now in config.js:

   export const nftmarketaddress=’0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0’
   export const nftaddress=’0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9’

Both the addresses are populated automatically.
**Need to give the single quotes explicitly

Check the log for the blockchain(localhost):
eth_sendTransaction
  Contract deployment: KBMarket
  Contract address:    0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
  Transaction:         0x1ab81b43931e7ebceb56b5a8c3bc87262a5b9ed02daa9c4c6067346ea7052457
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            843229 of 843229
  Block #3:            0x06854f599ff0e17f7dccc362909698519b3a2101e08664a7f9524389258250c9

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_accounts
eth_chainId
eth_estimateGas
eth_feeHistory
eth_sendTransaction
  Contract deployment: NFT
  Contract address:    0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9
  Transaction:         0x7ef30cfa06130c12e5d2a2cd0b4c22e03f4da32dcb67b02e9f1b252dcd65384a
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            1389020 of 1389020
  Block #4:            0x4736e51f9e97f632c21b83cfc2bbc3378bcc3af6e8daa96472b74ea8fa7a8b26

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt






UI
_app.js:
import '../styles/globals.css'
import Link from 'next/link'
import './app.css'
//import NavBar from './NavBar'

function KryptoBirdMarketplace({Component,pageProps}){
  return(
    <div>
      <nav className='border-b p-4' style={{backgroundColor:'black'}}>
        <p className='text-6x1 font-bold tracking-tight'>
        <Link href='/'>
        KRYPTOBIRDZ MARKETPLACE
        </Link>
        </p>
        <div className='flex justify-center'>
         <Link href='/'>
           <a className='mr-6 font-bold'>
             Marketplace
           </a>
         </Link>
         <Link href='/mint-item'>
           <a className='mr-6'>
             Mint Tokens
           </a>
         </Link>
         <Link href='/my-nfts'>
           <a className='mr-6'>
             My NFTs
           </a>
         </Link>
         <Link href='/account-dashboard'>
           <a className='mr-6'>
             Account Dashboard
           </a>
         </Link>
        </div>
      </nav> 
      <Component {...pageProps} />
    </div>

  )
} 

export default KryptoBirdMarketplace;


app.css:
*{
    box-sizing:border-box;
}

body {
    height:100vh;
    width:100%;
    margin:0;
    background: linear-gradient(-45deg, #256f81, #3ce792, #2d77e6, #b4d523);
    animation: gradientBG 15s ease infinite;
    background-size: 400% 400%;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    1000% {
        background-position: 0% 50%;
    }

}


Index.js:

//import NavBar from "./NavBar"
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3model from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import KBMarket from "../artifacts/contracts/KBMarket.sol/KBMarket.json";
//import { loadDefaultErrorComponents } from "next/dist/server/load-components";

export default function Home() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  //can be replaced by async function loadNFTs(){}
  const loadNFTs = async () => {
    //what we wanna load
    //provider, tokenContract,marketContract,data for market items

    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress,NFT.abi, provider);
    const marketContract = new ethers.Contract(nftmarketaddress,KBMarket.abi,provider);

    const data = await marketContract.fetchMarketTokens();

    const items = await Promise.all(
      data.map(async (i) => {
        //get the uri of the value
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        //we want ot get the token metadata--json
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNfts(items);
    setLoadingState("loaded");
  }
  
  //function buy nfts for the market
  
  //can be replaced by async function buyNFTs(){}
  const buyNFTs= async(nft)=>{
     const web3Modal=new Web3model()
     const connection = await web3Modal.connect()//connect tho metamask or which ever Wallet the user has
     const provider = new ethers.providers.Web3Provider(connection)
     const signers=provider.getSigner()//when initiating transaction we need signers
     const contract= new ethers.Contract(nftmarketaddress,KBMarket.abi,signers)
     
     const price=ethers.utils.parseUnits(nft.price.toString(),'ethers')
     const transaction= await contract.createMarketSale(nftaddress,nft.tokenId,{value:price})
     await transaction.wait()
     loadNFTs()
  }

  if (loadingState==='loaded'& !nfts.length){
    return(
      <div class="flex items-center bg-black-500 text-black font-bold px-4 py-3 justify-center" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
        </svg>
        <p style={{color:"black"}}>No NFTs in the MarketPlace</p>
      </div>
    )
  }

  return (
  <div className='flex justify-center'>
     <div className='px-4' style={{maxWidth:'160px'}}>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {
            nfts.map((nft,i)=>(
              <div key={i} className='border shadow rounded-x1 overflow-hidden'>
                  <img src={nft.image}/>
                  <div className='p-4'>
                    <p style={{height:'64px'}} className='text-3x1 font-semibold'>{nft.name}</p>
                    <div style={{height:'72px',overflow:'hidden'}}>
                      <p className='text-grey-400'>{nft.description}</p>
                    </div>
                  </div>
                  <div className='p-4 background-black'>
                    <p className='mb-4 text-3x-1 font-bold text-aquamarine'>{nft.price} ETH</p>
                    <button className='w-full bg-aquamarine-500 text-black font-bold py-3 rounded' onClick={()=>buyNFTs(nft)}>BUY</button>            
                    
                  </div>
              </div>
            ))
          }
       </div>
     </div>
  </div>);
}



First to Mint we have to energize our IPFS in Infura.io:
 
Mint-item.js
//import NavBar from "./NavBar"
import { ethers } from "ethers";
import { useState } from "react";
//import axios from "axios";
import Web3model from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";
import {create as ipfsHttpClient} from 'ipfs-http-client'//in this component we set the ipfs up to host our nft item of the file storage
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import KBMarket from "../artifacts/contracts/KBMarket.sol/KBMarket.json";
import { useRouter } from "next/router";

const client=ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export default function MintItem(){
    const [fileUrl,setFileUrl]=useState(null)
    const [formInput,updateFormInput]=useState({
        price:'',
        name:'',
         description:'',
    })
    const router=useRouter()
    /**
     * Set up a function to fire off when we update files in our forms - we can add our NFT images-> IPFS
     */

    async function onChange(e){
       const file =e.target.files[0]

       try{
       const added= await client.add(
           file,{
               progress:(prog)=>{console.log(`received:${prog}`)}
           })
       const url=`https://ipfs.infura.io/ipfs/${added.path}`
       setFileUrl(url)
       }catch(error){
           console.log("Error uploading the file:",error)
       }
    }

    async function createMarket(){

        console.log("Inside create market")
        
          const {name,description,price}=formInput
          console.log(name)
          console.log(description)
          console.log(price)
        if(!name||!description|| !price || !fileUrl) return

        //upload to ipfs
        const data=JSON.stringify({
            name,description,image:fileUrl
        })
        try{
            const added= await client.add(data)
            const url=`https://ipfs.infura.io/ipfs/${added.path}`
            //run a function that creates the sale and passes in the url
            createSale(url)
        }catch(error){
                console.log("Error uploading the file:",error)
        }
       
          
    }

    async function createSale(url){
        //create the items and list them in the marketplace
        const web3Modal=new Web3model()
        const connection = await web3Modal.connect()//connect tho metamask or which ever Wallet the user has
        const provider = new ethers.providers.Web3Provider(connection)
        const signers=provider.getSigner()//when initiating transaction we need signers
        let contract= new ethers.Contract(nftaddress,NFT.abi,signers)
        let transaction= await contract.mintToken(url)
        let tx=await transaction.wait()
        let event=tx.events[0]//getting the value from the event that is raised as a parthof mint token
        let value=event.args[2]//taking the 3rd argument in the indexed events
        let tokenId=value.toNumber()
        const price=ethers.utils.parseUnits(formInput.price,'ether')
        
        //list the item for sale in the marketplace

        contract= new ethers.Contract(nftmarketaddress,KBMarket.abi,signers)
        let listingPrice=await contract.getListingPrice()
        listingPrice=listingPrice.toString()
        transaction=await contract.makeMarketItem(nftaddress,tokenId,price,{value:listingPrice})
        await transaction.wait()
        router.push('./')
    }

    return(
        <div className='flex justify-center'>
            <div className='w-1/2 flex flex-col pb-12'>
                 <input 
                    placeholder='Asset Name'
                    className='mt-8 border rounded p-4'
                    onChange={e=>updateFormInput({...formInput,name:e.target.value})}
                 />
                 <textarea 
                    placeholder='Asset Description'
                    className='mt-2 border rounded p-4'
                    onChange={e=>updateFormInput({...formInput,description:e.target.value})}
                 />
                 <input 
                    placeholder='Price in ETH'
                    className='mt-2 border rounded p-4'
                    onChange={e=>updateFormInput({...formInput,price:e.target.value})}
                 />
                 <input 
                    type='file'
                    name='Asset'
                    className='mt-4'
                    onChange={onChange}
                 />
                 {
                     fileUrl && (
                         <img className='rounded mt-4' width='350px' src={fileUrl} />
                     )}
                 <button onClick={createMarket} className='font-bold mt-4 rounded p-4 shadow-large' style={{backgroundColor:'black',color:'aquamarine'}}>MINT TOKEN</button>
            </div>

        </div>
    );
}


*****Duplicacy needs to be checked:*****
Account-dashboard.js
//import NavBar from "./NavBar"
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import KBMarket from "../artifacts/contracts/KBMarket.sol/KBMarket.json";
//import { loadDefaultErrorComponents } from "next/dist/server/load-components";

export default function AccountDashboard() {
  const [nfts, setNfts] = useState([]);
  const [sold,setSold]=useState([])
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  //can be replaced by async function loadNFTs(){}
  async function loadNFTs(){
    //what we wanna load
    //we want to the display the nfts of the msg.sender 

    //const provider = new ethers.providers.JsonRpcProvider();
    const web3Modal=new Web3Modal()
    const connection = await web3Modal.connect()
    const provider=new ethers.providers.Web3Provider(connection)
    const signer=provider.getSigner()
    const tokenContract = new ethers.Contract(nftaddress,NFT.abi, signer);
    const marketContract = new ethers.Contract(nftmarketaddress,KBMarket.abi,signer);

    const data = await marketContract.fetchItemsCreated();

    const items = await Promise.all(
      data.map(async (i) => {
        //get the uri of the value
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        //we want ot get the token metadata--json
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );
    //create a filtered array of items sold by the msg.sender
    const soldItems=items.filter(i=>i.sold)
    setSold(soldItems)
    setNfts(items);
    setLoadingState("loaded");
  }
  
  //function buy nfts for the market
  
  
  if (loadingState==='loaded'& !nfts.length){
    return(
      <div className="flex items-center bg-black-500 text-black font-bold px-4 py-3 justify-center" role="alert">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
        </svg>
        <p style={{color:"black"}}>You do not have any NFTs currently minted </p>
      </div>
    )
  }

  return (
  <div className='p-4'>
      <h1 className='text-2x1 py-2 align-center'>Tokens Minted</h1>
     <div className='px-4' style={{maxWidth:'1600px',opacity:'0.8'}} height='500' width='600' >
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {
            nfts.map((nft,i)=>(
              <div key={i} className='border shadow rounded-x1 overflow-hidden' >
                  <img src={nft.image} style={{height:'362px'}}/>
                  <div className='p-4' style={{backgroundColor:'white'}}>
                    <p style={{height:'64px'}} className='text-4x1 text-black font-bold'>{nft.name}</p>
                    <div style={{height:'72px',overflow:'hidden'}}>
                      <p className='text-3x1 text-black font-semibold'>{nft.description}</p>
                    </div>
                  </div>
                  <div className='p-4 bg-black'>
                    <p className='mb-4 text-4x1 font-bold'style={{color:'aquamarine'}}>Price: {nft.price}ETH</p>
                    
                               
                    
                  </div>
              </div>
            ))
          }
       </div>
     </div>
  </div>);
}


My-nft.js:
//import NavBar from "./NavBar"
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import KBMarket from "../artifacts/contracts/KBMarket.sol/KBMarket.json";
//import { loadDefaultErrorComponents } from "next/dist/server/load-components";

export default function MyAssets() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  //can be replaced by async function loadNFTs(){}
  async function loadNFTs(){
    //what we wanna load
    //we want to the display the nfts of the msg.sender 

    //const provider = new ethers.providers.JsonRpcProvider();
    const web3Modal=new Web3Modal()
    const connection = await web3Modal.connect()
    const provider=new ethers.providers.Web3Provider(connection)
    const signer=provider.getSigner()
    const tokenContract = new ethers.Contract(nftaddress,NFT.abi, signer);
    const marketContract = new ethers.Contract(nftmarketaddress,KBMarket.abi,signer);

    const data = await marketContract.fetchMyNFT();

    const items = await Promise.all(
      data.map(async (i) => {
        //get the uri of the value
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        //we want ot get the token metadata--json
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNfts(items);
    setLoadingState("loaded");
  }
  
  //function buy nfts for the market
  
  
  if (loadingState==='loaded'& !nfts.length){
    return(
      <div className="flex items-center bg-black-500 text-black font-bold px-4 py-3 justify-center" role="alert">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
        </svg>
        <p style={{color:"black"}}>You do not own any NFTs currently </p>
      </div>
    )
  }

  return (
  <div className='flex justify-center'>
     <div className='px-4' style={{maxWidth:'1600px',opacity:'0.8'}} height='500' width='600' >
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {
            nfts.map((nft,i)=>(
              <div key={i} className='border shadow rounded-x1 overflow-hidden' >
                  <img src={nft.image} style={{height:'362px'}}/>
                  <div className='p-4' style={{backgroundColor:'white'}}>
                    <p style={{height:'64px'}} className='text-4x1 text-black font-bold'>{nft.name}</p>
                    <div style={{height:'72px',overflow:'hidden'}}>
                      <p className='text-3x1 text-black font-semibold'>{nft.description}</p>
                    </div>
                  </div>
                  <div className='p-4 bg-black'>
                    <p className='mb-4 text-4x1 font-bold'style={{color:'aquamarine'}}>Price: {nft.price}ETH</p>
                               
                    
                  </div>
              </div>
            ))
          }
       </div>
     </div>
  </div>);
}










