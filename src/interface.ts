import { TriggerAction } from "utils-hooks";
import { DomAlignOption } from "utils-dom/es/AlignDom/interface";

export type GetDrawerContainerFuc = () => HTMLElement;
export type PlacementType = "left" | "right" | "top" | "bottom" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

export interface FlipClassName {
    /**
     * x轴反转样式类名
     */
    flipX: string;
    /**
     * y轴反转样式类名
     */
    flipY: string;
    /**
     * x,y全反转样式类名
     */
    flipAll: string;
}

export interface TriggerProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 是否可视
     */
    visible?: boolean;
    /**
     * 默认是否可视
     */
    defaultVisible?: boolean;
    /**
     * 偏移距离
     * @description 默认6
     */
    offsetSize?: number;
    /**
     * 返回一个容器来装载抽屉
     * @description 默认为body内创建一个div作为容器
     */
    getContainer?: HTMLElement | GetDrawerContainerFuc;
    /**
     * 包裹元素
     * @description 监听触发事件
     */
    children?: React.ReactNode;
    /**
     * 弹出内容
     */
    popup?: React.ReactNode;
    /**
     * 弹出内容类名
     */
    popupClassName?: string;
    /**
     * 对齐选项
     */
    popupAlign?: DomAlignOption;
    /**
     * 是否隐藏时销毁
     */
    destroyPopupOnHide?: boolean;
    /**
     * 显示方向
     */
    placement?: PlacementType;
    /**
     * 包裹元素点击是否触发隐藏
     * @description 默认false
     */
    popupClickHide?: boolean;
    /**
     * 改变是否可视事件
     */
    onChange?: (visible: boolean, event?: MouseEvent) => void;
    /**
     * 对齐事件
     */
    onAlign?: (trigger: HTMLElement, popup: HTMLElement) => void;
    /**
     * 允许自定义组件
     * @description 默认情况下，自定义组件会被div包裹，来接受事件，设置此属性后不进行包裹
     */
    allowCustom?: boolean;
    /**
     * 获取对齐函数
     */
    alignRef?: React.MutableRefObject<Function>;
    /**
     * 触发方式
     * @description 默认 ['hover']
     */
    action?: TriggerAction[];
    /**
     * 鼠标事件判定延迟, 默认 300
     */
    mouseDelay?: number;
    /**
     * 是否宽度与目标宽度对齐
     */
    stretch?: boolean;
}
