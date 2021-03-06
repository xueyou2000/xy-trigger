# Change Log

## 0.1.0 (Tue Nov 19 2019)

-   修复`react`与`react-dom`版本不一致导致的问题
-   测试库迁移到`@testing-library/react"`

## 0.0.95 (Tue Sep 03 2019)

-   清除控制台打印, 优化代码警告

## 0.0.94 (Mon May 13 2019)

-   最外层不再使用空的`div`包裹

## 0.0.93 (Sun May 12 2019)

-   对齐函数增加`restAnimation`参数， 避免正在显示的元素重复执行动画

## 0.0.92 (Sun May 12 2019)

-   更改`onChange`签名，增加事件参数

## 0.0.91 (Sun May 12 2019)

-   修复 useTriggerChain 在没有 hover 触发选项的时候忽略

## 0.0.9 (Sun May 12 2019)

-   修复 TriggerWrap 包裹元素时候漏掉了元素自身的 props

## 0.0.8 (Sun May 12 2019)

-   修复受控模式下显示隐藏逻辑

## 0.0.73 (Sun May 12 2019)

-   更新依赖
-   增加`getAlignFunc`属性获取对齐函数, 用于主动对齐

## 0.0.72 (Sat May 11 2019)

-   `action`为空不进行对齐

## 0.0.71 (Sat May 11 2019)

-   修复`trigger`元素的过度状态样式

## 0.0.7 (Sat May 11 2019)

-   增加`allowCustom`属性, 来允许自定义组件用作触发器接受事件
-   增加`onAlign`事件
-   增加`trigger`元素的过度状态样式

## 0.0.6 (Sat May 11 2019)

-   修复由于缩放动画, 获取高度和宽度不稳定的情况

## 0.0.5 (Fri May 10 2019)

-   隐藏时设置`left`, `top` 并且不设置`display: none;`, 因为如果此时`popup`中有`input`并想置为焦点，会失败

## 0.0.4 (Fri May 10 2019)

-   修复`action`为空列表时, 只使用`visible`属性来控制显示隐藏的问题

## 0.0.3 (Fri May 10 2019)

-   阻止 `popup` 的 `click` 事件冒泡, 防止再对话框中打开, 被判定为点击空白处

## 0.0.2 (Fri May 10 2019)

-   基本实现

## 0.0.1 (Fri May 10 2019)

-   初始化项目
