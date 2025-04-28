import React from "react";
import clsx from "clsx";
import { paddingClass } from "../../constants";

const Bounded = 
  ({ as: Comp = "section", className, children, ...restProps }) => {
    return (
      <Comp
        className={clsx(`${paddingClass}`, className)}
        // className={clsx(` px-4 py-10 md:px-6 md:py-14 lg:py-16`, className)}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }
;

Bounded.displayName = "Bounded";
export default Bounded;