<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  provide,
  ref,
  watch,
} from 'vue';
import {
  FILTER_GROUP_KEY,
  type FilterGroupContext,
  type LabelPosition,
} from './useFilterGroup';

type Props = {
  cols?: number;
  gapX?: number;
  gapY?: number;
  labelPosition?: LabelPosition;
  labelWidth?: string | number;
};

export default defineComponent({
  name: 'FilterGroupProvider',
  props: {
    cols: { type: Number, default: 3 },
    gapX: { type: Number, default: 24 },
    gapY: { type: Number, default: 12 },
    labelPosition: { type: String, default: 'top' },
    labelWidth: { type: [String, Number], default: undefined },
  },
  emits: ['submit', 'reset'],
  setup(props: Props, { emit, slots }) {
    const values = ref<Record<string, unknown>>({});
    const defaults = ref<Record<string, unknown>>({});
    const fields = ref<string[]>([]);

    const normalizedCols = computed(() => Math.max(1, props.cols ?? 1));
    const normalizedLabelWidth = computed(() => {
      if (props.labelWidth === undefined || props.labelWidth === null) {
        return undefined;
      }
      return typeof props.labelWidth === 'number'
        ? `${props.labelWidth}px`
        : props.labelWidth;
    });

    const rows = computed(() => {
      if (!fields.value.length) return 1;
      return Math.ceil(fields.value.length / normalizedCols.value);
    });

    const layout = computed(() => ({
      cols: normalizedCols.value,
      gapX: props.gapX ?? 0,
      gapY: props.gapY ?? 0,
      labelPosition: (props.labelPosition ?? 'top') as LabelPosition,
      labelWidth: normalizedLabelWidth.value,
      rows: rows.value,
      actionAlign: rows.value <= 1 ? 'left' : 'right',
    }));

    const registerField = (name: string, defaultValue?: unknown) => {
      if (!fields.value.includes(name)) {
        fields.value = [...fields.value, name];
      }
      if (!(name in defaults.value)) {
        defaults.value = { ...defaults.value, [name]: defaultValue ?? '' };
      }
      if (!(name in values.value)) {
        values.value = { ...values.value, [name]: defaultValue ?? '' };
      }
    };

    const unregisterField = (name: string) => {
      fields.value = fields.value.filter(item => item !== name);
      const { [name]: _removed, ...restValues } = values.value;
      const { [name]: _removedDefault, ...restDefaults } = defaults.value;
      values.value = restValues;
      defaults.value = restDefaults;
    };

    const setValue = (name: string, value: unknown) => {
      values.value = { ...values.value, [name]: value };
    };

    const getValue = (name: string) => values.value[name];

    const reset = () => {
      values.value = { ...defaults.value };
      emit('reset', { ...values.value });
    };

    const submit = () => {
      emit('submit', { ...values.value });
    };

    const context: FilterGroupContext = {
      values,
      layout,
      registerField,
      unregisterField,
      setValue,
      getValue,
      reset,
      submit,
    };

    provide(FILTER_GROUP_KEY, context);

    watch(
      () => props.labelPosition,
      value => {
        if (value !== 'top' && value !== 'inline') {
          throw new Error('labelPosition must be "top" or "inline".');
        }
      },
      { immediate: true },
    );

    onBeforeUnmount(() => {
      fields.value = [];
      values.value = {};
      defaults.value = {};
    });

    return () => {
      if (!slots.default) return null;
      return slots.default({
        values: values.value,
        layout: layout.value,
        actions: { submit, reset, setValue, getValue },
      });
    };
  },
});
</script>
