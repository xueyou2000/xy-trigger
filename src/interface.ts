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
    onChange?: (visible: boolean) => void;
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
