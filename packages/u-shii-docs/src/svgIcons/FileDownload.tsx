import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@u_ui/u-ui/SvgIcon';

function FileDownload(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </SvgIcon>
  );
}

FileDownload.uiName = 'SvgIcon';

export default FileDownload;
