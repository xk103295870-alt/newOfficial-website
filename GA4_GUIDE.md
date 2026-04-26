# Google Analytics 4 使用指南

> 本仓库已接入 Google Analytics 4（Measurement ID: `G-QYMJNKFXRP`），用于追踪网站访问与插件下载数据。

---

## 一、什么是 Google Analytics 4

Google Analytics 4（简称 GA4）是 Google 提供的免费网站分析工具，可以：

- 统计网站访问量（PV / UV）
- 分析访客来源（搜索引擎 / 直接访问 / 社交媒体 / 引荐链接）
- 追踪用户行为（页面浏览、按钮点击、文件下载）
- 查看访客地域、设备类型、停留时长等维度

---

## 二、已接入功能

### 1. 全局页面浏览追踪（自动）

所有主站页面均已植入 GA4 追踪代码，访客进入以下任一页面时自动上报：

| 页面 | 文件 | 说明 |
|------|------|------|
| 首页 | `index.html` | 品牌落地页 |
| 产品页 | `open-canvas.html` | Canvas Workbench 产品介绍 |
| 文档页 | `canvas-workbench-docs.html` | 安装与使用文档 |
| API 参考 | `canvas-workbench-api.html` | REST API 文档 |
| 智慧商圈 | `smart-business-district.html` | 商业会员系统页 |

### 2. 下载事件追踪（自定义）

以下下载按钮已绑定点击事件，点击时上报 `download` 事件：

| 位置 | 按钮文案 | 追踪事件 |
|------|---------|---------|
| 产品页 Hero 区 | 「下载产品（插件）」 | `download` / `engagement` / `./plugins/canvas-workbench-obsidian-plugin.zip` |
| 文档页下载区 | 「下载 canvas-workbench-obsidian-plugin.zip」 | `download` / `engagement` / `./plugins/canvas-workbench-obsidian-plugin.zip` |

---

## 三、查看数据操作流程

### 步骤 1：登录 Google Analytics

访问 [analytics.google.com](https://analytics.google.com)，使用绑定 `G-QYMJNKFXRP` 的 Google 账号登录。

### 步骤 2：确认媒体资源

进入后确保左上角选中的是绑定了 `G-QYMJNKFXRP` 的媒体资源（Property）。

### 步骤 3：查看实时数据（即时生效）

1. 左侧导航 → **实时（Realtime）**
2. 可看到当前在线用户数、活跃页面、访客地域、设备类型
3. 点击「查看实时事件」可查看最近 30 分钟内触发的事件

### 步骤 4：查看事件报告（核心）

1. 左侧导航 → **互动（Engagement）** → **事件（Events）**
2. 默认显示所有事件（`page_view`、`session_start`、`first_visit` 等）
3. 在搜索框输入 `download`，即可筛选出插件下载事件
4. 点击「download」事件名称 → 查看该事件的详细维度：
   - 事件次数（总点击数）
   - 事件计数（去重会话数）
   - 事件标签（`event_label` = 文件路径）
   - 触发页面（`page_location`）

### 步骤 5：查看下载量趋势

1. 在事件详情页，右上角切换时间范围：
   - 今天 / 昨天 / 近 7 天 / 近 30 天 / 自定义
2. 可导出 CSV 或 PDF 报告用于周报/月报

### 步骤 6：查看访客来源

1. 左侧导航 → **用户获取（Acquisition）** → **流量获取（Traffic acquisition）**
2. 查看访客是从哪些渠道来的：
   - **Direct** — 直接输入网址或书签
   - **Organic Search** — 搜索引擎（Google / Bing / 百度）
   - **Referral** — 从其他网站点击链接进入（如 GitHub）
   - **Social** — 社交媒体（Twitter / 微信 / 即刻等）

### 步骤 7：查看访客画像

1. 左侧导航 → **用户（Users）** → **受众特征（Demographics）**
2. 查看：国家/地区、城市、设备类型（桌面/移动/平板）、浏览器、操作系统

---

## 四、事件数据结构（技术参考）

### 全局配置代码

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QYMJNKFXRP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QYMJNKFXRP');
</script>
```

### 下载事件代码

```javascript
gtag('event', 'download', {
  event_category: 'engagement',
  event_label: './plugins/canvas-workbench-obsidian-plugin.zip'
});
```

### 字段说明

| 字段 | 值 | 说明 |
|------|-----|------|
| `event_name` | `download` | 事件名称，GA4 中筛选用 |
| `event_category` | `engagement` | 事件分类 |
| `event_label` | `./plugins/canvas-workbench-obsidian-plugin.zip` | 下载文件路径 |

---

## 五、常见问题

**Q1：数据多久能看到？**

- 实时报告：几秒到几分钟内可见
- 标准报告：通常 24 小时内完全聚合

**Q2：为什么下载次数比实际多？**

- GA4 统计的是「点击次数」，不是「下载完成次数」。用户点击后取消下载、重复点击都会计入。

**Q3：能否追踪 GitHub Releases 的下载量？**

- GA4 只能追踪官网页面的点击。GitHub Releases 的下载量需在 GitHub 仓库页面的 Releases 标签中查看。

**Q4：如何增加更多事件追踪？**

- 在需要追踪的元素上添加类似代码即可。例如追踪「语言切换」：

```javascript
gtag('event', 'language_change', {
  event_category: 'engagement',
  event_label: 'zh' // 或 'en' / 'vi'
});
```

---

## 六、相关文件

| 文件 | 说明 |
|------|------|
| `index.html` | GA4 全局代码 |
| `open-canvas.html` | GA4 全局代码 + 下载事件追踪 |
| `canvas-workbench-docs.html` | GA4 全局代码 + 下载事件追踪 |
| `canvas-workbench-api.html` | GA4 全局代码 |
| `smart-business-district.html` | GA4 全局代码 |

---

*文档版本：v1.0*  
*接入时间：2026-04-26*  
*Measurement ID：`G-QYMJNKFXRP`*
