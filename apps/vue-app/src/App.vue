<template>
  <div class="page">
    <div class="container">
      <div class="tabs">
        <div v-for="tab in tabs" :key="tab.label" class="tab-chip">
          <span>{{ tab.label }}</span>
          <span class="tab-count">({{ tab.count }})</span>
        </div>
      </div>

      <div class="table-header">
        <div class="cell cell-grow">Product Information</div>
        <div class="cell cell-160 center">Seller</div>
        <div class="cell cell-200 right">
          <span>Total Amount</span>
          <img class="icon-16" :src="imgHeaderHelp" alt="" />
        </div>
        <div class="cell cell-200">Purchase Order ID</div>
        <div class="cell cell-160">Warehouse Code</div>
        <div class="cell cell-210">Shipping Method</div>
        <div class="cell cell-200 right">
          <span>Order Total</span>
          <img class="icon-16" :src="imgHeaderHelp" alt="" />
        </div>
      </div>

      <div class="cards">
        <div v-for="card in cards" :key="card.key" class="card">
          <div class="card-header">
            <div class="card-meta">
              <div class="meta-block">
                <span>Shipment ID: {{ card.id }}</span>
                <span class="badge-dot"></span>
              </div>
              <div class="meta-block meta-italic">{{ card.channel }}</div>
              <span :class="['status-tag', statusClass(card.status.tone)]">
                {{ card.status.label }}
              </span>
            </div>
            <div class="card-actions">
              <div class="pickup">
                <span class="checkbox">
                  <img class="icon-12" :src="imgCheck" alt="" />
                </span>
                <span>Carrier Pickup Scheduled</span>
              </div>
              <button class="link-btn">View Details &gt;</button>
            </div>
          </div>

          <div class="card-row">
            <div class="cell cell-grow product">
              <img class="product-img" :src="imgProduct" alt="" />
              <div class="product-text">
                <p>
                  Demon Skull,Suitable for Outdoor Fireplace and Fire Pit, Halloween Decoration
                </p>
                <div class="product-meta">
                  <span>W2061254313</span>
                  <strong>x2</strong>
                  <span class="tag-box"></span>
                </div>
              </div>
            </div>
            <div class="cell cell-160 center">--</div>
            <div class="cell cell-200 right bold">--</div>
            <div class="cell cell-200">--</div>
            <div class="cell cell-160">W206-WA1</div>
            <div class="cell cell-210">{{ card.shippingMethod }}</div>
            <div class="cell cell-200 right bold">--</div>
          </div>

          <div class="card-footer">
            <div class="upload-time">
              <span>Upload Time</span>
              <img class="icon-14" :src="imgHelp" alt="" />
              <span>2025-11-02 00:00:00</span>
            </div>
            <div class="footer-actions">
              <button class="ghost-btn">
                More
                <img class="icon-16" :src="imgArrowDown" alt="" />
              </button>
              <button class="primary-btn">{{ card.actionPrimary }}</button>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <div class="pager">
          <button class="page-btn disabled">&lt;</button>
          <button class="page-btn active">1</button>
          <button class="page-btn">2</button>
          <button class="page-btn">3</button>
          <button class="page-btn">4</button>
          <button class="page-btn">5</button>
          <button class="page-btn">6</button>
          <button class="page-btn">...</button>
          <button class="page-btn">100</button>
          <button class="page-btn">&gt;</button>
        </div>
        <button class="ghost-btn">
          10 / page
          <img class="icon-16" :src="imgArrowDown" alt="" />
        </button>
        <span>1-10 of 1000</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      imgProduct:
        'http://localhost:3845/assets/1af8b1df9b46913faa5026b153bb6a6e736109b8.png',
      imgHelp:
        'http://localhost:3845/assets/01a96663d18d7e459fd0b1c402f1e13cf6989e84.svg',
      imgHeaderHelp:
        'http://localhost:3845/assets/e6672b7da6bf12a8c996de7ed28d5c34002ae441.svg',
      imgArrowDown:
        'http://localhost:3845/assets/079374e6d5269e5dc291274793e8ef2783f4ef90.svg',
      imgCheck:
        'http://localhost:3845/assets/3d0b0a98d5be93da89735f237a1c2c52c997d047.svg',
      tabs: [
        { label: 'ALL', count: 304 },
        { label: 'Carton &Shipping Label Pending', count: 83 },
        { label: 'Unpaid', count: 8 },
        { label: 'Being Processed', count: 15 },
        { label: 'BOL Pending&Awaiting Pickup', count: 23 },
      ],
      cards: [
        {
          key: 'c1',
          id: '78718521689',
          channel: 'Amazon - FBA Pickup',
          status: { label: 'Carton & Shipping Label Pending', tone: 'danger' },
          shippingMethod: 'Small Parcel',
          actionPrimary: 'Upload Carton and Shipping Labels',
        },
        {
          key: 'c2',
          id: '78718521689',
          channel: 'Amazon - FBA Pickup',
          status: { label: 'Unpaid', tone: 'warning' },
          shippingMethod: 'Trucking',
          actionPrimary: 'Pay',
        },
        {
          key: 'c3',
          id: '78718521689',
          channel: 'Other Pickup',
          status: { label: 'Being Processed', tone: 'success' },
          shippingMethod: 'Small Parcel',
          actionPrimary: 'View Carton & Shipping Labels',
        },
      ],
    };
  },
  methods: {
    statusClass(tone: string) {
      if (tone === 'danger') return 'status-danger';
      if (tone === 'warning') return 'status-warning';
      return 'status-success';
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
  max-width: 1600px;
  padding: 20px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.tab-chip {
  background: #f2f2f2;
  border-radius: 999px;
  padding: 9px 16px;
  font-size: 14px;
  line-height: 18px;
  white-space: nowrap;
}

.tab-count {
  font-weight: 700;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 160px 200px 200px 160px 210px 200px;
  background: #d7ddea;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
}

.cell {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.cell-grow {
  justify-content: flex-start;
}

.cell-160 {
  width: 160px;
}

.cell-200 {
  width: 200px;
}

.cell-210 {
  width: 210px;
}

.center {
  justify-content: center;
}

.right {
  justify-content: flex-end;
}

.bold {
  font-weight: 700;
}

.icon-16 {
  width: 16px;
  height: 16px;
}

.icon-14 {
  width: 14px;
  height: 14px;
}

.icon-12 {
  width: 12px;
  height: 12px;
}

.cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.card {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
}

.card-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 7px 10px;
  background: #f7f8fa;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  line-height: 18px;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.meta-block {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-right: 16px;
  border-right: 1px solid #e5e5e5;
}

.meta-italic {
  font-style: italic;
  color: #666;
}

.badge-dot {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #e6f0ff;
  display: inline-block;
}

.status-tag {
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
}

.status-danger {
  background: #ffeded;
  color: #e64545;
}

.status-warning {
  background: #fff0e6;
  color: #f60;
}

.status-success {
  background: #e7f7ef;
  color: #0aad4f;
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pickup {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 16px;
  border-right: 1px solid #e5e5e5;
}

.checkbox {
  width: 16px;
  height: 16px;
  border: 1px solid #0aad4f;
  border-radius: 3px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.link-btn {
  border: none;
  background: transparent;
  color: #2861ce;
  cursor: pointer;
}

.card-row {
  display: grid;
  grid-template-columns: 1fr 160px 200px 200px 160px 210px 200px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;
  line-height: 18px;
}

.product {
  display: flex;
  gap: 12px;
}

.product-img {
  width: 60px;
  height: 60px;
  border: 1px solid #c1c1c1;
  border-radius: 3px;
  object-fit: cover;
}

.product-text p {
  max-width: 340px;
}

.product-meta {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tag-box {
  width: 16px;
  height: 16px;
  background: #0052d9;
  border-radius: 2px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 14px;
  line-height: 18px;
}

.upload-time {
  display: flex;
  align-items: center;
  gap: 6px;
}

.footer-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ghost-btn {
  border: 1px solid #c1c1c1;
  background: #fff;
  border-radius: 4px;
  padding: 6px 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.primary-btn {
  border: none;
  background: #f60;
  color: #fff;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
  font-size: 14px;
  line-height: 18px;
}

.pager {
  display: flex;
  align-items: center;
}

.page-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #c1c1c1;
  background: #fff;
  margin-left: -1px;
  cursor: pointer;
}

.page-btn.active {
  background: #333;
  color: #fff;
}

.page-btn.disabled {
  color: #c1c1c1;
  cursor: not-allowed;
}
</style>
