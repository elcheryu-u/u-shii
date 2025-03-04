import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface ButtonClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the root element if `variant="text"`. */
  text: string;
  /** Styles applied to the root element if `variant="text"` and `color="inherit"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorInherit](/u-ui/api/button/#button-classes-colorInherit) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textInherit: string;
  /** Styles applied to the root element if `variant="text"` and `color="primary"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorPrimary](/u-ui/api/button/#button-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textPrimary: string;
  /** Styles applied to the root element if `variant="text"` and `color="secondary"`.
   * @deprecated Combine the [.Ushiiutton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorSecondary](/u-ui/api/button/#button-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textSecondary: string;
  /** Styles applied to the root element if `variant="text"` and `color="contrast"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorSuccess](/u-ui/api/button/#button-classes-colorSuccess) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textContrast: string;
  /** Styles applied to the root element if `variant="text"` and `color="success"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorSuccess](/u-ui/api/button/#button-classes-colorSuccess) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textNeutral: string;
  /** Styles applied to the root element if `variant="text"` and `color="neutral"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.Ushiiutton-colorSuccess](/u-ui/api/button/#button-classes-colorSuccess) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textSuccess: string;
  /** Styles applied to the root element if `variant="text"` and `color="error"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorError](/u-ui/api/button/#button-classes-colorError) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textError: string;
  /** Styles applied to the root element if `variant="text"` and `color="info"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorInfo](/u-ui/api/button/#button-classes-colorInfo) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textInfo: string;
  /** Styles applied to the root element if `variant="text"` and `color="warning"`.
   * @deprecated Combine the [.UshiiButton-text](/u-ui/api/button/#button-classes-text) and [.UshiiButton-colorWarning](/u-ui/api/button/#button-classes-colorWarning) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textWarning: string;
  /** Styles applied to the root element if `variant="outlined"`. */
  outlined: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="inherit"`.
   * @deprecated Combine the [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) and [.UshiiButton-colorInherit](/u-ui/api/button/#button-classes-colorInherit) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedInherit: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="primary"`.
   * @deprecated Combine the [.Ushiiutton-outlined](/u-ui/api/button/#button-classes-outlined) and [.UshiiButton-colorPrimary](/u-ui/api/button/#button-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedPrimary: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="secondary"`.
   * @deprecated Combine the [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) and [.UshiiButton-colorSecondary](/u-ui/api/button/#button-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedSecondary: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="success"`.
   * @deprecated Combine the [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) and [.UshiiButton-colorSuccess](/u-ui/api/button/#button-classes-colorSuccess) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedSuccess: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="error"`.
   * @deprecated Combine the [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) and [.UshiiButton-colorError](/u-ui/api/button/#button-classes-colorError) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedError: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="info"`.
   * @deprecated Combine the [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) and [.UshiiButton-colorInfo](/u-ui/api/button/#button-classes-colorInfo) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedInfo: string;
  /** Styles applied to the root element if `variant="outlined"` and `color="warning"`.
   * @deprecated Combine the [.Ushiiutton-outlined](/u-ui/api/button/#button-classes-outlined) and [.UshiiButton-colorWarning](/u-ui/api/button/#button-classes-colorWarning) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedWarning: string;
  /** Styles applied to the root element if `variant="contained"`. */
  contained: string;
  /** Styles applied to the root element if `variant="contained"` and `color="inherit"`.
   * @deprecated Combine the [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) and [.UshiiButton-colorInherit](/u-ui/api/button/#button-classes-colorInherit) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedInherit: string;
  /** Styles applied to the root element if `variant="contained"` and `color="primary"`.
   * @deprecated Combine the [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) and [.UshiiButton-colorPrimary](/u-ui/api/button/#button-classes-colorPrimary) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedPrimary: string;
  /** Styles applied to the root element if `variant="contained"` and `color="secondary"`.
   * @deprecated Combine the [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) and [.UshiiButton-colorSecondary](/u-ui/api/button/#button-classes-colorSecondary) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedSecondary: string;
  /** Styles applied to the root element if `variant="contained"` and `color="success"`.
   * @deprecated Combine the [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) and [.UshiiButton-colorSuccess](/u-ui/api/button/#button-classes-colorSuccess) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedSuccess: string;
  /** Styles applied to the root element if `variant="contained"` and `color="info"`.
   * @deprecated Combine the [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) and [.UshiiButton-colorInfo](/u-ui/api/button/#button-classes-colorInfo) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedInfo: string;
  /** Styles applied to the root element if `variant="contained"` and `color="error"`.
   * @deprecated Combine the [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) and [.UshiiButton-colorError](/u-ui/api/button/#button-classes-colorError) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedError: string;
  /** Styles applied to the root element if `variant="contained"` and `color="warning"`.
   * @deprecated Combine the [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) and [.UshiiButton-colorWarning](/u-ui/api/button/#button-classes-colorWarning) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedWarning: string;
  /** Styles applied to the root element if `disableIconAnimation={true}.` */
  disableIconAnimation: string;
  /** Styles applied to the root element if `disableElevation={true}`. */
  disableElevation: string;
  /** State class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: string;
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string;
  /** Styles applied to the root element if `color="inherit"`. */
  colorInherit: string;
  /** Styles applied to the root element if `size="small"` and `variant="text"`.
   * @deprecated Combine the [.UshiiButton-sizeSmall](/u-ui/api/button/#button-classes-sizeSmall) and [.UshiiButton-text](/u-ui/api/button/#button-classes-text) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textSizeSmall: string;
  /** Styles applied to the root element if `size="medium"` and `variant="text"`.
   * @deprecated Combine the [.UshiiButton-sizeMedium](/u-ui/api/button/#button-classes-sizeMedium) and [.UshiiButton-text](/u-ui/api/button/#button-classes-text) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textSizeMedium: string;
  /** Styles applied to the root element if `size="large"` and `variant="text"`.
   * @deprecated Combine the [.UshiiButton-sizeLarge](/u-ui/api/button/#button-classes-sizeLarge) and [.UshiiButton-text](/u-ui/api/button/#button-classes-text) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  textSizeLarge: string;
  /** Styles applied to the root element if `size="small"` and `variant="outlined"`.
   * @deprecated Combine the [.UshiiButton-sizeSmall](/u-ui/api/button/#button-classes-sizeSmall) and [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedSizeSmall: string;
  /** Styles applied to the root element if `size="medium"` and `variant="outlined"`.
   * @deprecated Combine the [.UshiiButton-sizeMedium](/u-ui/api/button/#button-classes-sizeMedium) and [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedSizeMedium: string;
  /** Styles applied to the root element if `size="large"` and `variant="outlined"`.
   * @deprecated Combine the [.UshiiButton-sizeLarge](/u-ui/api/button/#button-classes-sizeLarge) and [.UshiiButton-outlined](/u-ui/api/button/#button-classes-outlined) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  outlinedSizeLarge: string;
  /** Styles applied to the root element if `size="small"` and `variant="contained"`.
   * @deprecated Combine the [.UshiiButton-sizeSmall](/u-ui/api/button/#button-classes-sizeSmall) and [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedSizeSmall: string;
  /** Styles applied to the root element if `size="medium"` and `variant="contained"`.
   * @deprecated Combine the [.UshiiButton-sizeMedium](/u-ui/api/button/#button-classes-sizeMedium) and [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedSizeMedium: string;
  /** Styles applied to the root element if `size="large"` and `variant="contained"`.
   * @deprecated Combine the [.UshiiButton-sizeLarge](/u-ui/api/button/#button-classes-sizeLarge) and [.UshiiButton-contained](/u-ui/api/button/#button-classes-contained) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  containedSizeLarge: string;
  /** Styles applied to the root element if `size="small"`. */
  sizeSmall: string;
  /** Styles applied to the root element if `size="medium"`. */
  sizeMedium: string;
  /** Styles applied to the root element if `size="large"`. */
  sizeLarge: string;
  /** Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: string;
  /** Styles applied to the icon element if supplied */
  icon: string;
  /** Styles applied to the startIcon element if supplied. */
  startIcon: string;
  /** Styles applied to the endIcon element if supplied. */
  endIcon: string;
  /** Styles applied to the icon element if supplied and `size="small"`.
   * @deprecated Combine the [.UshiiButton-icon](/u-ui/api/button/#button-classes-icon) and [.UshiiButtonSizeSmall](/u-ui/api/button/#button-classes-sizeSmall) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  iconSizeSmall: string;
  /** Styles applied to the icon element if supplied and `size="medium"`.
   * @deprecated Combine the [.UshiiButton-icon](/u-ui/api/button/#button-classes-icon) and [.UshiiButtonSizeMedium](/u-ui/api/button/#button-classes-sizeMedium) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  iconSizeMedium: string;
  /** Styles applied to the icon element if supplied and `size="large"`.
   * @deprecated Combine the [.UshiiButton-icon](/u-ui/api/button/#button-classes-icon) and [.UshiiButtonSizeLarge](/u-ui/api/button/#button-classes-sizeLarge) classes instead. See [Migrating from deprecated APIs](/u-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  iconSizeLarge: string;
  /** Styles applied to the root element if `color="primary"`. */
  colorPrimary: string;
  /** Styles applied to the root element if `color="secondary"`. */
  colorSecondary: string;
  /** Styles applied to the root element if `color="success"`. */
  colorSuccess: string;
  /** Styles applied to the root element if `color="error"`. */
  colorError: string;
  /** Styles applied to the root element if `color="info"`. */
  colorInfo: string;
  /** Styles applied to the root element if `color="warning"`. */
  colorWarning: string;
  /** Styles applied to the root element if `loading={true}`. */
  loading: string;
  /** Styles applied to the loadingWrapper element. */
  loadingWrapper: string;
  /** Styles applied to the loadingIconPlaceholder element. */
  loadingIconPlaceholder: string;
  /** Styles applied to the loadingIndicator element. */
  loadingIndicator: string;
  /** Styles applied to the root element if `loadingPosition="center"`. */
  loadingPositionCenter: string;
  /** Styles applied to the root element if `loadingPosition="start"`. */
  loadingPositionStart: string;
  /** Styles applied to the root element if `loadingPosition="end"`. */
  loadingPositionEnd: string;
  /** Styles applied to the root element if `isRadius={true}`. */
  isRadius: string;
}

export type ButtonClassKey = keyof ButtonClasses;

export function getButtonUtilityClass(slot: string): string {
  return generateUtilityClass('UshiiButton', slot);
}

const buttonClasses: ButtonClasses = generateUtilityClasses('UshiiButton', [
  'root',
  'text',
  'textInherit',
  'textPrimary',
  'textSecondary',
  'textContrast',
  'textNeutral',
  'textSuccess',
  'textError',
  'textInfo',
  'textWarning',
  'outlined',
  'outlinedInherit',
  'outlinedPrimary',
  'outlinedSecondary',
  'outlinedSuccess',
  'outlinedError',
  'outlinedInfo',
  'outlinedWarning',
  'contained',
  'containedInherit',
  'containedPrimary',
  'containedSecondary',
  'containedSuccess',
  'containedError',
  'containedInfo',
  'containedWarning',
  'disableIconAnimation',
  'disableElevation',
  'focusVisible',
  'disabled',
  'colorInherit',
  'colorPrimary',
  'colorSecondary',
  'colorSuccess',
  'colorError',
  'colorInfo',
  'colorWarning',
  'textSizeSmall',
  'textSizeMedium',
  'textSizeLarge',
  'outlinedSizeSmall',
  'outlinedSizeMedium',
  'outlinedSizeLarge',
  'containedSizeSmall',
  'containedSizeMedium',
  'containedSizeLarge',
  'sizeMedium',
  'sizeSmall',
  'sizeLarge',
  'fullWidth',
  'startIcon',
  'endIcon',
  'icon',
  'iconSizeSmall',
  'iconSizeMedium',
  'iconSizeLarge',
  'loading',
  'loadingWrapper',
  'loadingIconPlaceholder',
  'loadingIndicator',
  'loadingPositionCenter',
  'loadingPositionStart',
  'loadingPositionEnd',
  'isRadius',
]);

export default buttonClasses;
