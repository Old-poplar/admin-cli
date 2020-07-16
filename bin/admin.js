#! /usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs');

program
  .version('0.1.0')
  .option('-i, init [name]', '初始化admin项目')
  .parse(process.argv);

if (program.init) {
  const spinner = ora('正在从github下载admin').start();
  download('Old-poplar/admin', program.init, function (err) {
    if(!err){
      // 可以输出一些项目成功的信息
      console.info(chalk.blueBright('下载成功'));
    }else{
      // 可以输出一些项目失败的信息
    }
  })
}

chalk.blueBright()

ora(`Loading ${chalk.red('unicorns')}`).start()


fs.readFile(`${process.cwd()}/${program.init}/package.json`, (err, data) => {
  if (err) throw err;
  let _data = JSON.parse(data.toString())
  _data.name = program.init
  _data.version = '1.0.0'
  let str = JSON.stringify(_data, null, 4);
  fs.writeFile(`${process.cwd()}/${program.init}/package.json`, str, function (err) {
    if (err) throw err;
  })
});