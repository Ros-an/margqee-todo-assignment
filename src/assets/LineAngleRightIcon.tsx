import * as React from "react";

function LineAngleRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 66.91 122.88" width="1em" height="1em" {...props}>
      <path d="M1.95 111.2a6.875 6.875 0 00.14 9.73 6.875 6.875 0 009.73-.14L64.94 66l-4.93-4.79 4.95 4.8c2.65-2.74 2.59-7.11-.15-9.76-.08-.08-.16-.15-.24-.22L11.81 2.09c-2.65-2.73-7-2.79-9.73-.14-2.72 2.65-2.78 7-.13 9.73l48.46 49.55L1.95 111.2z" />
    </svg>
  );
}

const MemoLineAngleRightIcon = React.memo(LineAngleRightIcon);
export default MemoLineAngleRightIcon;
