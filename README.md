# vue-ast
练习vue的AST

### GoGoCode
当前 GoGoCode 支持解析和操作如下类型的代码：
- JavaScript(JSX)
- Typescript(TSX)
- HTML
- Vue

## 使用
GoGoCode 项目追求让代码转换一事变得简单，相较于同类，GoGoCode 提供了更符合直觉的 API：
- 一套类 JQuery 的 API 用来查找和处理 AST
- 一套和正则表达式接近的语法用来匹配和替换代码


## 地址
文档地址：https://gogocode.io/zh/docs/specification/introduction

Git地址：https://github.com/thx/gogocode

## 周边
项目	 | 描述
---|---
gogocode-plugin-vue	 | 通过这个 gogocode 插件可以把 vue2 语法的项目转换成 vue3 的
gogocode-cli         | gogocode 的命令行工具
gogocode-playground  | gogocode-vscode	
gogocode-vscode	     | 在 vscode 中通过此插件用 gogocode 重构你的代码