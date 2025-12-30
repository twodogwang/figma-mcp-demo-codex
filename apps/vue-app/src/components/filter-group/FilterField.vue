<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onBeforeUnmount } from 'vue';
import { useFilterGroup } from './useFilterGroup';

type Props = {
  name: string;
  label?: string;
  defaultValue?: unknown;
};

export default defineComponent({
  name: 'FilterField',
  props: {
    name: { type: String, required: true },
    label: { type: String, default: '' },
    defaultValue: { type: null, default: undefined },
  },
  setup(props: Props, { slots }) {
    const ctx = useFilterGroup();
    const instance = getCurrentInstance();
    const id = `fg-${props.name}-${instance?.uid ?? Math.random().toString(36).slice(2)}`;

    ctx.registerField(props.name, props.defaultValue);

    const value = computed({
      get: () => ctx.getValue(props.name),
      set: next => ctx.setValue(props.name, next),
    });

    onBeforeUnmount(() => {
      ctx.unregisterField(props.name);
    });

    return () => {
      if (!slots.default) return null;
      return slots.default({
        value: value.value,
        setValue: (next: unknown) => {
          value.value = next;
        },
        label: props.label,
        id,
      });
    };
  },
});
</script>
