import classNames from "classnames";
import React from "react";

/**
 * 触发包裹组件
 * @description 如果element是原生组件, 则直接返回, 否则包裹一层div去监听事件
 * @param element
 */
export default function TriggerWrap(element: React.ReactNode, ref: React.MutableRefObject<any>, className?: string, allowOther = false) {
    const node = React.Children.only(element) as any;

    // node.type 是字符串, 则认为原生标签, 如果是构造函数, 则认定是自定义组件
    if (typeof node.type === "string" || allowOther) {
        return React.cloneElement(node, Object.assign({}, node.props, { ref, className: classNames(className, node.props.className) }));
    } else {
        return (
            <div ref={ref} className={className}>
                {element}
            </div>
        );
    }
}
