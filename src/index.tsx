import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { alignElement } from "utils-dom";
import { EXITED, TriggerAction, UNMOUNTED, useControll, useOutsideClick, usePortal, useTranstion, useTriggerChain } from "utils-hooks";
import { TriggerProps } from "./interface";
import { getPlacements } from "./placements";
import { DomAlignOption } from "utils-dom/es/AlignDom/interface";
import TriggerWrap from "./TriggerWrap";
// Tips: 自定义的 prefixCls , 必须确保提供的样式有动画或者过度，并且有 position: absolute, 不然元素宽度是100%

export function Trigger(props: TriggerProps) {
    const {
        prefixCls = "xy-trigger",
        className,
        style,
        getContainer,
        placement = "bottomLeft",
        children,
        popup,
        popupAlign,
        popupClassName,
        popupClickHide,
        destroyPopupOnHide,
        offsetSize,
        stretch,
        onAlign,
        alignRef,
        allowCustom,
        mouseDelay = 100,
        action = ["hover" as TriggerAction],
        onChange
    } = props;
    const [renderPortal] = usePortal(popupClassName, getContainer);
    const [visible, setVisible, isControll] = useControll(props, "visible", "defaultVisible", false);
    const [flip, setFlip] = useState<string>(null);
    const [ref, state] = useTranstion(visible);
    const triggerRef = useRef(null);
    const opening = state.indexOf("en") !== -1;
    const classString = classNames(prefixCls, className, `${prefixCls}-${flip || placement}`, `${prefixCls}-state-${state}`, { [`${prefixCls}-open`]: opening });
    const style1: React.CSSProperties = {
        width: stretch && triggerRef.current ? (triggerRef.current as HTMLElement).clientWidth : null
    };

    const setActived = useTriggerChain(
        triggerRef,
        ref,
        (act, actived, event) => {
            if (action && action.length > 0) {
                doSetVisible(isControll ? !visible : actived, event);
            }
        },
        { trigger: action, mouseDelay },
        [flip, visible]
    );

    useOutsideClick(
        popupClickHide ? [triggerRef.current] : [ref.current, triggerRef.current],
        (event: MouseEvent) => {
            if (visible) {
                doSetVisible(false, event);
                setActived(false);
            }
        },
        [visible]
    );

    useEffect(() => {
        const popupEle = ref.current as HTMLElement;
        if ((popupEle && state === EXITED) || state === UNMOUNTED) {
            popupEle.style.left = "-100%";
            popupEle.style.display = "block";
        }
    }, [state]);

    function align(restAnimation = true) {
        const popupEle = ref.current as HTMLElement;
        if (!popupEle) {
            return;
        }
        if (visible) {
            const config = Object.assign({}, getPlacements(offsetSize)[placement], popupAlign);
            const revise = alignElement(popupEle, triggerRef.current, config as DomAlignOption, restAnimation);
            if (onAlign) {
                onAlign(triggerRef.current, popupEle);
            }
            if (revise.x && !revise.y) {
                setFlip(config.flipX);
            } else if (!revise.x && revise.y) {
                setFlip(config.flipY);
            } else if (revise.x && revise.y) {
                setFlip(config.flipAll);
            } else {
                setFlip(null);
            }
        }
    }

    if (alignRef) {
        alignRef.current = align;
    }

    useEffect(align, [visible]);

    function doSetVisible(_visible: boolean, event?: MouseEvent) {
        if (_visible === visible) {
            return;
        }

        if (!isControll) {
            setVisible(_visible);
        }
        if (onChange) {
            onChange(_visible, event);
        }
    }

    function clickHandle(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation();
    }

    return (
        <React.Fragment>
            {TriggerWrap(children, triggerRef, classNames(`${prefixCls}-trigger`, `${prefixCls}-trigger-state-${state}`), allowCustom)}
            {renderPortal(
                destroyPopupOnHide === true && (!visible && state === EXITED) ? null : (
                    <div className={classString} style={Object.assign({}, style, style1)} ref={ref} onClick={clickHandle}>
                        {popup}
                    </div>
                )
            )}
        </React.Fragment>
    );
}

export default React.memo(Trigger);
