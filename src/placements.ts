import { OverFlow, DomAlignOption } from "utils-dom/es/AlignDom/interface";
import { PlacementType, FlipClassName } from "./interface";

const autoAdjustOverflow: OverFlow = {
    adjust: true,
    flip: true
};

export function getPlacements(offsetSize = 6) {
    const placements: Partial<Record<PlacementType, DomAlignOption & FlipClassName>> = {
        left: {
            points: ["cr", "cl"],
            overflow: autoAdjustOverflow,
            offset: [-offsetSize, 0],
            flipX: "right",
            flipY: "right",
            flipAll: "right"
        },
        right: {
            points: ["cl", "cr"],
            overflow: autoAdjustOverflow,
            offset: [offsetSize, 0],
            flipX: "left",
            flipY: "left",
            flipAll: "left"
        },
        top: {
            points: ["bc", "tc"],
            overflow: autoAdjustOverflow,
            offset: [0, -offsetSize],
            flipX: "bottom",
            flipY: "bottom",
            flipAll: "bottom"
        },
        bottom: {
            points: ["tc", "bc"],
            overflow: autoAdjustOverflow,
            offset: [0, offsetSize],
            flipX: "top",
            flipY: "top",
            flipAll: "top"
        },
        topLeft: {
            points: ["bl", "tl"],
            overflow: autoAdjustOverflow,
            offset: [0, -offsetSize],
            flipX: "topRight",
            flipY: "bottomLeft",
            flipAll: "bottomRight"
        },
        leftTop: {
            points: ["tr", "tl"],
            overflow: autoAdjustOverflow,
            offset: [-offsetSize, 0],
            flipX: "rightTop",
            flipY: "leftBottom",
            flipAll: "rightBottom"
        },
        topRight: {
            points: ["br", "tr"],
            overflow: autoAdjustOverflow,
            offset: [0, -offsetSize],
            flipX: "topLeft",
            flipY: "bottomRight",
            flipAll: "bottomLeft"
        },
        rightTop: {
            points: ["tl", "tr"],
            overflow: autoAdjustOverflow,
            offset: [offsetSize, 0],
            flipX: "leftTop",
            flipY: "rightBottom",
            flipAll: "leftBottom"
        },
        bottomRight: {
            points: ["tr", "br"],
            overflow: autoAdjustOverflow,
            offset: [0, offsetSize],
            flipX: "bottomLeft",
            flipY: "topRight",
            flipAll: "topLeft"
        },
        rightBottom: {
            points: ["bl", "br"],
            overflow: autoAdjustOverflow,
            offset: [offsetSize, 0],
            flipX: "leftBottom",
            flipY: "rightTop",
            flipAll: "leftTop"
        },
        bottomLeft: {
            points: ["tl", "bl"],
            overflow: autoAdjustOverflow,
            offset: [0, offsetSize],
            flipX: "bottomRight",
            flipY: "topLeft",
            flipAll: "topRight"
        },
        leftBottom: {
            points: ["br", "bl"],
            overflow: autoAdjustOverflow,
            offset: [-offsetSize, 0],
            flipX: "rightBottom",
            flipY: "leftTop",
            flipAll: "rightTop"
        }
    };

    return placements;
}
