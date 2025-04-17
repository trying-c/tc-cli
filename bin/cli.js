#! /usr/bin/env node

import { program } from "commander";
import chalk from 'chalk'
import figlet from 'figlet'


import { fileURLToPath } from 'url';
import path from 'path'
import fs from 'fs'
import ejs from 'ejs'
import { input, select } from '@inquirer/prompts'



function mkdir(path) {
    if (!fs.existsSync(path)) fs.mkdirSync(path);
}

function writeRenderFile(src, dest, config = {}) {
    ejs.renderFile(src, config, (error, result) => {
        if (error) throw error
        fs.writeFileSync(dest, result)
    })
}

/**
 *
 * @param {string} src 源文件根路径
 * @param {string} dest 项目根路径
 * @param {string} pathName 文件路径
 */
function readAndWriteFiles(src, dest, pathName) {
    let stat = fs.statSync(path.join(src, pathName))
    // 是文件夹，在输出目录下创建文件夹，并进行递归读写
    if (stat.isDirectory()) {
        if (pathName) {
            fs.mkdirSync(path.join(dest, pathName))
        }
        let list = fs.readdirSync(path.join(src, pathName))
        list.forEach(fileName => {
            readAndWriteFiles(src, dest, path.join(pathName, fileName))
        })
    }
    else {
        let target = pathName ? path.join(dest, pathName) : dest;
        let fileUrl = pathName ? path.join(src, pathName) : src;
        writeRenderFile(fileUrl, target)
    }
}

async function genProjectFiles(projectname) {
    const teamplate = await select({
        message: 'Choose teamplate?',
        default: 'Vue-Vite-JS',
        choices: [
            'Vue-Vite-JS',
        ]
    })

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(path.join(__filename, '..'));
    // 模版文件目录
    const src = path.join(__dirname, teamplate)
    // 控制台所在目录
    const dest = path.join(process.cwd(), projectname)
    mkdir(dest)

    readAndWriteFiles(src, dest, '')
}

function success() {
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync('TC-CLI', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
    console.log(chalk.green('Successfully!!!!'))
}

program
    // 定义命令和参数
    .command('create <app-name>')
    .description('create a new project')
    // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((projectname, options) => {
        genProjectFiles(projectname).then(() => {
            success();
        })
    })

program
    // 配置版本号信息
    .version(`1.0.0`)
    .usage('<command> [option]')

// 解析用户执行命令传入参数
program.parse(process.argv);
