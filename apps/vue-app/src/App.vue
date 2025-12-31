<template>
  <div class="page">
    <div class="container">
      <header class="title">
        <span class="title-icon" aria-hidden="true">*</span>
        <h1>代码演示</h1>
      </header>

      <section class="block">
        <h2>基础用法</h2>
        <div class="demo-card">
          <FilterGroupProvider :cols="3" :gap-x="24" :gap-y="12" label-position="top">
            <template #default="{ layout, actions }">
              <div class="filter-grid" :style="layout.gridStyle">
                <FilterField name="keyword" label="Input title">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id">{{ label }}</label>
                      <input
                        :id="id"
                        type="text"
                        placeholder="Please Input"
                        :value="value"
                        @input="setValue($event.target.value)"
                      />
                    </div>
                  </template>
                </FilterField>

                <FilterField name="type" label="Select title">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id">{{ label }}</label>
                      <select
                        :id="id"
                        :value="value"
                        @change="setValue($event.target.value)"
                      >
                        <option value="" disabled>Please select</option>
                        <option value="a">Option A</option>
                        <option value="b">Option B</option>
                        <option value="c">Option C</option>
                      </select>
                    </div>
                  </template>
                </FilterField>

                <FilterField name="date" label="Date">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id">{{ label }}</label>
                      <input
                        :id="id"
                        type="text"
                        placeholder="Select Date"
                        :value="value"
                        @input="setValue($event.target.value)"
                      />
                    </div>
                  </template>
                </FilterField>

                <div class="actions" :class="actionClass(layout)">
                  <button class="btn-primary" type="button" @click="actions.submit">Filter</button>
                  <button class="btn-icon" type="button" title="Download">
                    <span class="icon">&#8595;</span>
                  </button>
                </div>
              </div>
            </template>
          </FilterGroupProvider>
        </div>
      </section>

      <section class="block">
        <h2>支持配置重置功能</h2>
        <div class="demo-card">
          <FilterGroupProvider :cols="2" :gap-x="24" :gap-y="16" label-position="top">
            <template #default="{ layout, actions }">
              <div class="filter-grid" :style="layout.gridStyle">
                <FilterField name="keyword" label="Input title">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id">{{ label }}</label>
                      <input
                        :id="id"
                        type="text"
                        placeholder="Please Input"
                        :value="value"
                        @input="setValue($event.target.value)"
                      />
                    </div>
                  </template>
                </FilterField>

                <FilterField name="type" label="Select title">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id">{{ label }}</label>
                      <select
                        :id="id"
                        :value="value"
                        @change="setValue($event.target.value)"
                      >
                        <option value="" disabled>Please select</option>
                        <option value="a">Option A</option>
                        <option value="b">Option B</option>
                        <option value="c">Option C</option>
                      </select>
                    </div>
                  </template>
                </FilterField>

                <FilterField name="date" label="Date">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id">{{ label }}</label>
                      <input
                        :id="id"
                        type="text"
                        placeholder="Select Date"
                        :value="value"
                        @input="setValue($event.target.value)"
                      />
                    </div>
                  </template>
                </FilterField>

                <FilterField name="status" label="Status">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id">{{ label }}</label>
                      <select
                        :id="id"
                        :value="value"
                        @change="setValue($event.target.value)"
                      >
                        <option value="" disabled>Please select</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                  </template>
                </FilterField>

                <div class="actions" :class="actionClass(layout)">
                  <button class="btn-primary" type="button" @click="actions.submit">Filter</button>
                  <button class="btn-ghost" type="button" @click="actions.reset">Reset</button>
                  <button class="btn-icon" type="button" title="Download">
                    <span class="icon">&#8595;</span>
                  </button>
                </div>
              </div>
            </template>
          </FilterGroupProvider>
        </div>
      </section>

      <section class="block">
        <h2>支持自定义设置下载字段</h2>
        <div class="demo-card">
          <FilterGroupProvider
            :cols="2"
            :gap-x="32"
            :gap-y="20"
            label-position="inline"
            :label-width="90"
          >
            <template #default="{ layout, actions }">
              <div class="filter-grid" :style="layout.gridStyle">
                <FilterField name="keyword" label="Input title">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id" :style="labelStyle(layout)">{{ label }}</label>
                      <input
                        :id="id"
                        type="text"
                        placeholder="Please Input"
                        :value="value"
                        @input="setValue($event.target.value)"
                      />
                    </div>
                  </template>
                </FilterField>

                <FilterField name="type" label="Select title">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id" :style="labelStyle(layout)">{{ label }}</label>
                      <select
                        :id="id"
                        :value="value"
                        @change="setValue($event.target.value)"
                      >
                        <option value="" disabled>Please select</option>
                        <option value="a">Option A</option>
                        <option value="b">Option B</option>
                        <option value="c">Option C</option>
                      </select>
                    </div>
                  </template>
                </FilterField>

                <FilterField name="date" label="Date">
                  <template #default="{ value, setValue, label, id }">
                    <div :class="fieldClass(layout)">
                      <label :for="id" :style="labelStyle(layout)">{{ label }}</label>
                      <input
                        :id="id"
                        type="text"
                        placeholder="Select Date"
                        :value="value"
                        @input="setValue($event.target.value)"
                      />
                    </div>
                  </template>
                </FilterField>

                <div class="actions" :class="actionClass(layout)">
                  <button class="btn-primary" type="button" @click="actions.submit">Filter</button>
                  <button class="btn-ghost" type="button" @click="actions.reset">Reset</button>
                  <button class="btn-combo" type="button" title="Download settings">
                    <span class="icon">&#8595;</span>
                    <span class="divider"></span>
                    <span class="icon">&#9776;</span>
                  </button>
                </div>
              </div>
            </template>
          </FilterGroupProvider>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilterGroupProvider from './components/filter-group/FilterGroupProvider.vue';
import FilterField from './components/filter-group/FilterField.vue';
import type { FilterGroupLayout } from './components/filter-group/useFilterGroup';

export default defineComponent({
  name: 'App',
  components: { FilterGroupProvider, FilterField },
  methods: {
    fieldClass(layout: FilterGroupLayout) {
      return layout.labelPosition === 'inline' ? 'field field-inline' : 'field field-top';
    },
    actionClass(layout: FilterGroupLayout) {
      return layout.actionAlign === 'right' ? 'actions-right' : 'actions-left';
    },
    labelStyle(layout: FilterGroupLayout) {
      if (layout.labelPosition !== 'inline' || !layout.labelWidth) {
        return {};
      }
      return { width: layout.labelWidth };
    },
  },
});
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #fff;
  font-family: Arial, sans-serif;
  color: #333;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.title-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid #c1c1c1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #2861ce;
}

.title h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
}

.block {
  margin-bottom: 24px;
}

.block h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px;
}

.demo-card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  background: #fff;
}

.filter-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--fg-gap-y, 12px) var(--fg-gap-x, 24px);
}

.field {
  flex: 0 0 var(--fg-col-width, 100%);
  min-width: var(--fg-col-width, 100%);
  box-sizing: border-box;
}

.field-top {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-inline {
  display: flex;
  align-items: center;
  gap: 10px;
}

label {
  font-size: 14px;
  line-height: 18px;
  color: #333;
}

input,
select {
  width: 100%;
  height: 36px;
  padding: 8px 12px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  background: #fff;
  box-sizing: border-box;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.actions-left {
  margin-left: 0;
  justify-content: flex-start;
}

.actions-right {
  margin-left: auto;
  justify-content: flex-end;
}

.btn-primary {
  min-width: 80px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  background: #2861ce;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.btn-ghost {
  min-width: 80px;
  height: 36px;
  padding: 0 16px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  background: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.btn-icon {
  width: 36px;
  height: 36px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn-combo {
  height: 36px;
  padding: 0 10px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  background: #fff;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.icon {
  font-size: 16px;
  line-height: 1;
  color: #333;
}

.divider {
  width: 1px;
  height: 18px;
  background: #c1c1c1;
}
</style>
