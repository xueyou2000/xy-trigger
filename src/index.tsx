import classNames from "classnames";
import React, { useRef, useState, useEffect } from "react";
import { alignElement } from "utils-dom";
import { useControll, useOutsideClick, usePortal, useTranstion, useTriggerChain, TriggerAction, TriggerWrap, EXITED } from "utils-hooks";
import { TriggerProps } from "./interface";
import { getPlacements } from "./placements";

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
            doSetVisible(actived);
        },
        { trigger: action, mouseDelay },
        [flip, visible]
    );

    useOutsideClick(
        popupClickHide ? [triggerRef.current] : [ref.current, triggerRef.current],
        () => {
            if (visible) {
                doSetVisible(false);
                setActived(false);
            }
        },
        [visible]
    );

    useEffect(() => {
        if (visible && ref.current) {
            const config = Object.assign({}, getPlacements(offsetSize)[placement], popupAlign);
            const revise = alignElement(ref.current, triggerRef.current, config);

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
    }, [visible]);

    function doSetVisible(_visible: boolean) {
        if (_visible === visible) {
            return;
        }

        if (!isControll) {
            setVisible(_visible);
        }
        if (onChange) {
            onChange(_visible);
        }
    }

    return (
        <React.Fragment>
            {TriggerWrap(children, triggerRef)}
            {renderPortal(
                destroyPopupOnHide === true && (!visible && state === EXITED) ? null : (
                    <div className={classString} style={Object.assign({}, style, style1)} ref={ref}>
                        {popup}
                    </div>
                )
            )}
        </React.Fragment>
    );
}

export default React.memo(Trigger);
