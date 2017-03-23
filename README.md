<img src="http://bit.ly/2mxmKKI" width="500" alt="Hapiness" />

<div style="margin-bottom:20px;">
<div style="line-height:60px">
    <a href="https://travis-ci.org/hapinessjs/empty-module.svg?branch=next">
        <img src="https://travis-ci.org/hapinessjs/empty-module.svg?branch=next" alt="build" />
    </a>
    <a href="https://coveralls.io/github/hapinessjs/empty-module?branch=next">
        <img src="https://coveralls.io/repos/github/hapinessjs/empty-module/badge.svg?branch=next" alt="coveralls" />
    </a>
    <a href="https://david-dm.org/hapinessjs/empty-module">
        <img src="https://david-dm.org/hapinessjs/empty-module.svg" alt="dependencies" />
    </a>
    <a href="https://david-dm.org/hapinessjs/empty-module?type=dev">
        <img src="https://david-dm.org/hapinessjs/empty-module/dev-status.svg" alt="devDependencies" />
    </a>
</div>
<div>
    <a href="https://www.typescriptlang.org/docs/tutorial.html">
        <img src="https://cdn-images-1.medium.com/max/800/1*8lKzkDJVWuVbqumysxMRYw.png"
             align="right" alt="Typescript logo" width="50" height="50" style="border:none;" />
    </a>
    <a href="http://reactivex.io/rxjs">
        <img src="http://reactivex.io/assets/Rx_Logo_S.png"
             align="right" alt="ReactiveX logo" width="50" height="50" style="border:none;" />
    </a>
    <a href="http://hapijs.com">
        <img src="http://bit.ly/2lYPYPw"
             align="right" alt="Hapijs logo" width="75" style="border:none;" />
    </a>
</div>
</div>

# Empty Module

This package provides basics to create a new [Hapiness](https://github.com/hapinessjs/hapiness) module.

## Table of contents

* [Starter](#starter)
* [Folders](#folders)
* [Files](#files)
    * [Typescript configuration files](#typescript-configuration-files)
    * [Typescript validation](#typescript-validation)
    * [Yarn](#yarn)
    * [Package definition](#package-definition)

## Starter

Clone this repository and change `hapinessjs/empty-module`, according **your module repository**, in these files:
* `package.json`
* `README.md`

In `README.md`, you need to update the documentation to explain what's your module and what it does.

[Back to top](#table-of-contents)
 
## Folders

All **files** for your module will be in **`src`** folder and wrote in `Typescript`. 

All **tests files** for your module will be in **`test`** folder and wrote in `Typescript` too.
* **Unit** tests will be in `test/unit` folder 
* **Integration** tests will be in `test/integration` folder

All **packaging files** for your module will be in **`tools`** folder and wrote in `Typescript` too.

[Back to top](#table-of-contents)

## Files

### Typescript configuration files

`tsconfig.json` is used for **development** process and  `tsconfig.build.json` is used for **build** process.

In both case, add externals types from `@types/{...}` inside `compilerOptions.types` array.
 
### Typescript validation

`tslint.json` contains all rules for `Typescript` validation during `pretest` process.

### Yarn

`yarn.lock` contains fixed packages' versions for all `node_modules` used in your module.
 
 See [yarn cli documentation](https://yarnpkg.com/en/docs/cli/) to know how to use it.
 
### Package definition

`package.json` contains your module definition with **name**, **description**, **scripts**, **dependencies**, etc.

To install existing or new dependencies use `npm` or `yarn`. We advice to use `yarn` to have the same version that us.

In `scripts` part, you have all needed scripts to work. All scripts reference element in `Makefile`.

[Back to top](#table-of-contents)