# Filter Group组件

## 设计图
设计图参考figma设计图，地址：https://www.figma.com/design/HI3nkji1L7ULEsRqnhAKGG/B2B-Buyer-Seller%E7%BB%84%E4%BB%B6?node-id=2393-7129&m=dev。

## 设计思路
1. 采用headless思想
2. 渐进式设计

## 功能要求
1. 支持配置每行列数
2. 只有一行时操作栏居左，超过一行操作栏居右
3. 支持配置间距，间距支持配置左右和上下
4. 支持配置label位置，inline模式支持配置label宽度。该功能可以参考element-plus的form-item组件的类似功能