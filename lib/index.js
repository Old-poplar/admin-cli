
// 定义脚手架的文件路径，__dirname是当前文件所在的路径
process.env.NODE_PATH = __dirname + '/../node_modules/'

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs');

// 定义脚手架的用法，在program.help方法中会显示
program.usage('<command>')

program
  .version('0.1.0')
  .option('-i, init [name]', '初始化admin项目')
  .alias('i')
  .action(()=>{
      console.log('我是初始化的方法')
  })
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


// fs.readFile(`${process.cwd()}/${program.init}/package.json`, (err, data) => {
//   if (err) throw err;
//   let _data = JSON.parse(data.toString())
//   _data.name = program.init
//   _data.version = '1.0.0'
//   let str = JSON.stringify(_data, null, 4);
//   fs.writeFile(`${process.cwd()}/${program.init}/package.json`, str, function (err) {
//     if (err) throw err;
//   })
// });