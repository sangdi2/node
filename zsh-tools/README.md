## 安装
'''
npm install zsh-tools
'''
## 导入
'''js
const zsh =require('../zsh-tools/index')
'''
## 格式化时间
'''js
const time =zsh.dateFormat(new Date())
console.log(time)

'''
## 转义html中的特殊字符
'''js
const htmlstr='<span>hhh</span>'
const html =zsh.htmlescape(htmlstr)
console.log(html)
'''
## 还原html中的特殊字符
'''js
const unhtml =zsh.htmlunescape(html)
console.log(unhtml)
'''
## 开源协议
ISC
