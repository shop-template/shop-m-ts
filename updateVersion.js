const fs = require('fs')
const readline = require('readline')
const pkg = require('./package.json')

const VERSION_REG = /\d+\.\d+\.\d+/

function updateVersion() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

    rl.setPrompt(`当前 package.json 版本号为: ${pkg.version}\n请输入本次要发布的版本号:(可按回车跳过)\n`)
    rl.prompt()

    // eslint-disable-next-line consistent-return
    rl.on('line', (input) => {
      let newVersion = ''
      if (!input) {
        newVersion = pkg.version.replace(/(\d+\.\d+\.)(\d+)/, (version, $1, $2) => $1 + (Number($2) + 1))
      } else if (!VERSION_REG.test(input)) {
        console.log('\x1B[31m%s\x1B[0m', '\n⚡ 不要搞事年轻人，请输入正确版本号格式!\n')
        rl.prompt()
        return
      } else {
        newVersion = input
      }
      const newPkg = JSON.stringify({ ...pkg, version: newVersion }, null, 2)
      fs.writeFileSync('package.json', `${newPkg}\n`, 'utf8')
      console.log('\x1B[32m%s\x1B[0m', '\n🎉 good job! package.json 文件已更新.\n')
      rl.close()
    })

    rl.on('close', resolve)
  })
}

updateVersion()
