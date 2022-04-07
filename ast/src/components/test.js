/*
 * @Author: your name
 * @Date: 2022-04-07 16:17:58
 * @LastEditTime: 2022-04-07 16:30:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-ast/ast/src/components/test.js
 */
const $ = require('gogocode');

const code = `
import { Button, jsx } from "@alifd/next";

const Button1 = () => {
  return (
    <div>
      <h2>转译前</h2>
      <div>
        <Button type="normal">Normal</Button>
        <Button type="primary">Prirmary</Button>
        <Button type="secondary">Secondary</Button>
        

        <Button type="normal" text>Normal</Button>
        <Button type="primary" text>Primary</Button>
        <Button type="secondary" text>Secondary</Button>
        

        <Button type="normal" warning text="as" sss>Normal</Button>
      </div>
    </div>
  );
};

export default Button1;
`

const myCode = $(code)
  .replace(`import { $$$ } from "@alifd/next";`, `import { $$$ } from "antd";`)
  .replace(`<Button type="normal" $$$></Button>`, `<Button type="default" $$$></Button>`)
  .replace(`<Button text $$$></Button>`, `<Button $$$ type="link"></Button>`)
  .replace(`<Button warning $$$></Button>`, `<Button danger $$$></Button>`)
  .generate()

export default myCode