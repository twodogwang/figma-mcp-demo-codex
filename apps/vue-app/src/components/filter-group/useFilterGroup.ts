import type { ComputedRef, Ref } from 'vue';
import { inject } from 'vue';

export type LabelPosition = 'top' | 'inline';

export type FilterGroupLayout = {
  cols: number;
  gapX: number;
  gapY: number;
  labelPosition: LabelPosition;
  labelWidth?: string;
  rows: number;
  actionAlign: 'left' | 'right';
};

export type FilterGroupContext = {
  values: Ref<Record<string, unknown>>;
  layout: ComputedRef<FilterGroupLayout>;
  registerField: (name: string, defaultValue?: unknown) => void;
  unregisterField: (name: string) => void;
  setValue: (name: string, value: unknown) => void;
  getValue: (name: string) => unknown;
  reset: () => void;
  submit: () => void;
};

export const FILTER_GROUP_KEY = Symbol('FilterGroup');

export function useFilterGroup(): FilterGroupContext {
  const ctx = inject<FilterGroupContext | null>(FILTER_GROUP_KEY, null);
  if (!ctx) {
    throw new Error('FilterGroup context is missing. Wrap fields in FilterGroupProvider.');
  }
  return ctx;
}
