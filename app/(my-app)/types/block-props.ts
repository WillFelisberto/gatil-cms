import type { Homepage } from '@/payload-types';

type Layout = Homepage['layout'];

export type BlockProps<K extends Layout[number]['blockType']> = Extract<
  Layout[number],
  { blockType: K }
>;
