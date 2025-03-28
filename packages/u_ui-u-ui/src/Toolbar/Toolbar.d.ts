import * as React from 'react';
import { SxProps } from '@u_ui/system';
import { OverridableStringUnion } from '@mui/types';
import { Theme } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';
import { ToolbarClasses } from './toolbarClasses';

export interface ToolbarPropsVariantOverrides {}

export interface ToolbarOwnProps {
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ToolbarClasses>;
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters?: boolean;
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant?: OverridableStringUnion<'regular' | 'dense', ToolbarPropsVariantOverrides>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export interface ToolbarTypeMap<
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'div',
> {
  props: AdditionalProps & ToolbarOwnProps;
  defaultComponent: RootComponent;
}

declare const Toolbar: OverridableComponent<ToolbarTypeMap>;

export type ToolbarProps<
  RootComponent extends React.ElementType = ToolbarTypeMap['defaultComponent'],
  AdditionalProps = {},
> = OverrideProps<ToolbarTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export default Toolbar;
