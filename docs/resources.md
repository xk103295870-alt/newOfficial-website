# 资料与附件

这里汇总客户在系统接入、上线准备和日常操作中可能需要的资料。部分资料为微信官方说明链接，部分资料为本系统提供的模板或清单。

::: tip 使用说明
如需下载纸质资料模板，请在对应资料右侧查看状态。当前未上传真实附件的资料会标记为“待上传附件”，避免误导客户下载无效文件。
:::

## 微信官方资料及操作说明

<div class="resource-list">
  <section class="resource-card">
    <div>
      <h3>微信支付商户平台操作指引</h3>
      <p>用于客户了解微信支付商户平台的基础操作、账户管理和常见配置流程。</p>
      <p class="resource-meta">来源：微信官方资料 / 外部链接</p>
    </div>
    <span class="resource-status">待补充链接</span>
  </section>

  <section class="resource-card">
    <div>
      <h3>微信小程序认证与备案说明</h3>
      <p>用于客户提前准备小程序认证、备案、主体资质等相关资料。</p>
      <p class="resource-meta">来源：微信官方资料 / 外部链接</p>
    </div>
    <span class="resource-status">待补充链接</span>
  </section>

  <section class="resource-card">
    <div>
      <h3>微信支付产品能力说明</h3>
      <p>用于客户了解支付、退款、账单、分账等微信支付相关能力。</p>
      <p class="resource-meta">来源：微信官方资料 / 外部链接</p>
    </div>
    <span class="resource-status">待补充链接</span>
  </section>

  <section class="resource-card">
    <div>
      <h3>商户号配置说明</h3>
      <p>用于客户或技术人员准备商户号、API 证书、回调地址等接入配置。</p>
      <p class="resource-meta">来源：微信官方资料 / 外部链接</p>
    </div>
    <span class="resource-status">待补充链接</span>
  </section>
</div>

## 本系统的资料

<div class="resource-list">
  <section class="resource-card">
    <div>
      <h3>商户入驻资料清单</h3>
      <p>用于商圈或运营方收集商户基础信息、联系人信息、经营资料和入驻配置。</p>
      <p class="resource-meta">文件类型：表格 / 模板资料</p>
    </div>
    <span class="resource-status">待上传附件</span>
  </section>

  <section class="resource-card">
    <div>
      <h3>停车系统对接资料清单</h3>
      <p>用于提前整理停车系统厂商、停车场信息、接口联系人和联调所需资料。</p>
      <p class="resource-meta">文件类型：表格 / 对接清单</p>
    </div>
    <span class="resource-status">待上传附件</span>
  </section>

  <section class="resource-card">
    <div>
      <h3>小程序页面装修资料说明</h3>
      <p>用于准备小程序首页 Banner、品牌图、活动图、商户图片和页面展示文案。</p>
      <p class="resource-meta">文件类型：说明文档 / 素材清单</p>
    </div>
    <span class="resource-status">待上传附件</span>
  </section>

  <section class="resource-card">
    <div>
      <h3>系统上线前检查清单</h3>
      <p>用于上线前检查基础配置、支付配置、商户数据、停车数据和运营活动配置。</p>
      <p class="resource-meta">文件类型：检查清单 / 操作资料</p>
    </div>
    <span class="resource-status">待上传附件</span>
  </section>

  <section class="resource-card">
    <div>
      <h3>会员隐私协议模板</h3>
      <p>用于商圈或商户在上线会员体系前准备隐私政策、用户授权说明等内容。</p>
      <p class="resource-meta">文件类型：Word / PDF 模板</p>
    </div>
    <span class="resource-status">待上传附件</span>
  </section>
</div>

<style>
.resource-list {
  display: grid;
  gap: 16px;
  margin-top: 20px;
}

.resource-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 76%, transparent);
}

.resource-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
}

.resource-card p {
  margin: 0;
  line-height: 1.8;
}

.resource-meta {
  margin-top: 10px !important;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.resource-status {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 104px;
  margin-top: 2px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  white-space: nowrap;
}

@media (max-width: 640px) {
  .resource-card {
    flex-direction: column;
    gap: 12px;
  }

  .resource-status {
    align-self: flex-start;
  }
}
</style>
