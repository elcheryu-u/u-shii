declare module 'docs/src/modules/components/HighlightedCode' {
  import * as React from 'react';
  import { StyledComponentProps } from '@u_ui/u-ui/styles';

  type ClassKey = 'root';
  export interface Props extends StyledComponentProps<ClassKey> {
    className?: string;
    /**
     * plain string
     */
    code: string;
    copyButtonHidden?: boolean;
    copyButtonProps?: React.JSX.IntrinsicElements['button'];
    /**
     * short identifier of the code language
     * see @vandlee/internal-markdown/prism for possible languages
     */
    language: string;
    /**
     * The component used for the root node.
     * @default MarkdownElement
     */
    component?: React.ElementType;
    sx?: object;
  }
  export default function HighlightedCode(props: Props): React.ReactElement<unknown>;
}

declare module 'react-imask';
