import * as React from "react";

function TriangleBottomArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 122.88 63.9" width="1em" height="1em" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.44 63.9L122.88 0H0l61.44 63.9z"
      />
    </svg>
  );
}

const MemoTriangleBottomArrowIcon = React.memo(TriangleBottomArrowIcon);
export default MemoTriangleBottomArrowIcon;
