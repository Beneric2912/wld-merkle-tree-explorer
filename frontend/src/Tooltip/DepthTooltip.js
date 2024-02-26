import React from "react";
import { usePopper } from "react-popper";

export function DepthTooltip({
  popperText,
  setPopperElement,
  referenceElement,
  popperElement,
  offsetOptions,
  flipOptions,
}) {
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",

    modifiers: [
      { name: "offset", options: offsetOptions },
      {
        name: "flip",
        options: flipOptions,
      },
    ],
  });
  return (
    <g>
      <rect
        style={{
          filter:
            "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
        }}
        className="z-50"
        height={20}
        width={Number(popperText) < 10 ? 17 : 23}
        y={-10}
        x={-80}
        fill={"#FFF"}
        rx={6}
      ></rect>
      <text
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        data-popper-placement="bottom"
        fill={"#000"}
        dx="-75px"
        dy="4px"
        fontSize={11}
        fontFamily=""
        className="font-mono z-50"
      >
        {popperText}
      </text>
    </g>
  );
}
