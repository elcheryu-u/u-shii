import generateUtilityClasses from '@u-shii/utils/generateUtilityClasses';
import generateUtilityClass from '@u-shii/utils/generateUtilityClass';

export interface StackClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type StackClassKey = keyof StackClasses;

export function getStackUtilityClass(slot: string): string {
  return generateUtilityClass('uiStack', slot);
}

const stackClasses: StackClasses = generateUtilityClasses('uiStack', ['root']);

export default stackClasses;
