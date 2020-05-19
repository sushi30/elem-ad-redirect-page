import React from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: Record<string, any> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function FadeDiv({
  in: inProp,
  children,
  appear,
  style,
  ...props
}: any) {
  return (
    <Transition in={inProp} timeout={duration} appear={appear}>
      {(state: any) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
