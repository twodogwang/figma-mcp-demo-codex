const imgProduct =
  "http://localhost:3845/assets/1af8b1df9b46913faa5026b153bb6a6e736109b8.png";
const imgHelp =
  "http://localhost:3845/assets/01a96663d18d7e459fd0b1c402f1e13cf6989e84.svg";
const imgHeaderHelp =
  "http://localhost:3845/assets/e6672b7da6bf12a8c996de7ed28d5c34002ae441.svg";
const imgArrowDown =
  "http://localhost:3845/assets/079374e6d5269e5dc291274793e8ef2783f4ef90.svg";
const imgCheck =
  "http://localhost:3845/assets/3d0b0a98d5be93da89735f237a1c2c52c997d047.svg";

const tabs = [
  { label: "ALL", count: 304 },
  { label: "Carton &Shipping Label Pending", count: 83 },
  { label: "Unpaid", count: 8 },
  { label: "Being Processed", count: 15 },
  { label: "BOL Pending&Awaiting Pickup", count: 23 },
];

const cards = [
  {
    id: "78718521689",
    channel: "Amazon - FBA Pickup",
    status: { label: "Carton & Shipping Label Pending", tone: "danger" },
    shippingMethod: "Small Parcel",
    actionPrimary: "Upload Carton and Shipping Labels",
  },
  {
    id: "78718521689",
    channel: "Amazon - FBA Pickup",
    status: { label: "Unpaid", tone: "warning" },
    shippingMethod: "Trucking",
    actionPrimary: "Pay",
  },
  {
    id: "78718521689",
    channel: "Other Pickup",
    status: { label: "Being Processed", tone: "success" },
    shippingMethod: "Small Parcel",
    actionPrimary: "View Carton & Shipping Labels",
  },
];

function TabChip({
  label,
  count,
}: {
  label: string;
  count: number;
}) {
  return (
    <div className="bg-[#f2f2f2] rounded-full px-4 py-2 text-[14px] leading-[18px] text-[#333] whitespace-nowrap">
      {label}
      <span className="font-bold">({count})</span>
    </div>
  );
}

function StatusTag({
  label,
  tone,
}: {
  label: string;
  tone: "danger" | "warning" | "success";
}) {
  const toneClass =
    tone === "danger"
      ? "bg-[#ffeded] text-[#e64545]"
      : tone === "warning"
        ? "bg-[#fff0e6] text-[#f60]"
        : "bg-[#e7f7ef] text-[#0aad4f]";
  return (
    <span
      className={`rounded-[4px] px-[6px] py-[3px] text-[14px] leading-[18px] ${toneClass}`}
    >
      {label}
    </span>
  );
}

function HeaderRow() {
  return (
    <div className="grid grid-cols-[1fr_160px_200px_200px_160px_210px_200px] bg-[#d7ddea] text-[#333] text-[12px] font-bold leading-[16px]">
      <div className="p-[10px]">Product Information</div>
      <div className="p-[10px] text-center">Seller</div>
      <div className="p-[10px] flex items-center justify-end gap-2">
        <span>Total Amount</span>
        <img alt="" className="size-[16px]" src={imgHeaderHelp} />
      </div>
      <div className="p-[10px]">Purchase Order ID</div>
      <div className="p-[10px]">Warehouse Code</div>
      <div className="p-[10px]">Shipping Method</div>
      <div className="p-[10px] flex items-center justify-end gap-2">
        <span>Order Total</span>
        <img alt="" className="size-[16px]" src={imgHeaderHelp} />
      </div>
    </div>
  );
}

function Card({
  id,
  channel,
  status,
  shippingMethod,
  actionPrimary,
}: (typeof cards)[number]) {
  return (
    <div className="border border-[#e5e5e5] rounded-[4px] overflow-hidden bg-white">
      <div className="bg-[#f7f8fa] border-b border-[#e5e5e5] px-[10px] py-[7px] flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-[14px] leading-[18px] text-[#333]">
          <div className="flex items-center gap-1 pr-4 border-r border-[#e5e5e5]">
            <span>Shipment ID: {id}</span>
            <span className="inline-block size-[18px] rounded-full bg-[#e6f0ff]" />
          </div>
          <div className="pr-4 border-r border-[#e5e5e5] italic text-[#666]">
            {channel}
          </div>
          <StatusTag label={status.label} tone={status.tone} />
        </div>
        <div className="flex items-center gap-4 text-[14px] leading-[18px] text-[#333]">
          <div className="flex items-center gap-2 pr-4 border-r border-[#e5e5e5]">
            <div className="size-[16px] rounded-[3px] border border-[#0aad4f] bg-white relative">
              <img alt="" className="absolute left-[2px] top-[2px]" src={imgCheck} />
            </div>
            <span>Carrier Pickup Scheduled</span>
          </div>
          <button className="text-[#2861ce] flex items-center gap-2">
            View Details
            <span className="text-[#2861ce]">{">"}</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_160px_200px_200px_160px_210px_200px] border-b border-[#e5e5e5] text-[14px] leading-[18px] text-[#333]">
        <div className="flex gap-3 p-[10px]">
          <img
            alt=""
            className="size-[60px] rounded-[3px] border border-[#c1c1c1] object-cover"
            src={imgProduct}
          />
          <div className="flex flex-col gap-1">
            <p className="max-w-[340px]">
              Demon Skull,Suitable for Outdoor Fireplace and Fire Pit, Halloween Decoration
            </p>
            <div className="flex items-center gap-1">
              <span>W2061254313</span>
              <strong>x2</strong>
              <span className="inline-block size-[16px] rounded bg-[#0052d9]" />
            </div>
          </div>
        </div>
        <div className="p-[10px] text-center">--</div>
        <div className="p-[10px] text-right font-bold">--</div>
        <div className="p-[10px]">--</div>
        <div className="p-[10px]">W206-WA1</div>
        <div className="p-[10px]">{shippingMethod}</div>
        <div className="p-[10px] text-right font-bold">--</div>
      </div>
      <div className="flex items-center justify-between px-[10px] py-[8px] text-[14px] leading-[18px] text-[#333]">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            Upload Time
            <img alt="" className="size-[14px]" src={imgHelp} />
          </span>
          <span>2025-11-02 00:00:00</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="border border-[#c1c1c1] rounded-[4px] px-[12px] py-[6px] flex items-center gap-2">
            More
            <img alt="" className="size-[16px]" src={imgArrowDown} />
          </button>
          <button className="bg-[#f60] text-white rounded-[4px] px-[12px] py-[6px]">
            {actionPrimary}
          </button>
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="flex items-center gap-2 text-[14px] leading-[18px] text-[#333]">
      <div className="flex items-center">
        <button className="size-[32px] border border-[#c1c1c1] rounded-l-[4px] flex items-center justify-center text-[#c1c1c1]">
          {"<"}
        </button>
        {[1, 2, 3, 4, 5, 6].map(n => (
          <button
            key={n}
            className={`size-[32px] border border-[#c1c1c1] -ml-px ${
              n === 1 ? "bg-[#333] text-white" : "bg-white"
            }`}
          >
            {n}
          </button>
        ))}
        <button className="size-[32px] border border-[#c1c1c1] -ml-px bg-white">
          ...
        </button>
        <button className="size-[32px] border border-[#c1c1c1] -ml-px bg-white">
          100
        </button>
        <button className="size-[32px] border border-[#c1c1c1] -ml-px rounded-r-[4px] bg-white">
          {">"}
        </button>
      </div>
      <button className="border border-[#c1c1c1] rounded-[4px] px-[12px] py-[6px] flex items-center gap-2">
        10 / page
        <img alt="" className="size-[16px]" src={imgArrowDown} />
      </button>
      <span>1-10 of 1000</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-[1600px] px-[20px] py-[20px] space-y-4">
        <div className="flex flex-wrap gap-4">
          {tabs.map(tab => (
            <TabChip key={tab.label} label={tab.label} count={tab.count} />
          ))}
        </div>
        <HeaderRow />
        <div className="space-y-4">
          {cards.map(card => (
            <Card key={`${card.id}-${card.status.label}`} {...card} />
          ))}
        </div>
        <div className="flex justify-end pt-1">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
