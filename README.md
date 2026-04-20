# W工作室 · 官方网站

> 本项目为 **W工作室（微诺技术）** 官方网站，包含：
> - **主站**：AI 服务首页 + 智慧商圈产品介绍页
> - **文档站**：基于 VitePress 的后台操作手册与接入文档
>
> 线上地址：https://www.weinuo.work/

## 技术栈

- 主站：原生 HTML + CSS（`index.html`、`smart-business-district.html`）
- 文档站：[VitePress](https://vitepress.dev/) v1.6.4 + 自定义 Oxide 暗色主题
- CI/CD：GitHub Actions 自动部署

## 本地开发

### 文档站开发

```bash
# 安装依赖
npm install

# 启动文档站开发服务器
npm run docs:dev

# 本地预览地址
http://localhost:5173/
```

### 主站预览

主站为纯静态 HTML，可直接在浏览器中打开，或通过 VS Code Live Server 等插件预览：

- AI 首页：`index.html`
- 智慧商圈页：`smart-business-district.html`

---

## 构建

```bash
# 构建文档站（输出到 docs/.vitepress/dist/）
npm run docs:build
```

---

## 部署到云服务器

### 1. 服务器环境准备

- **Nginx**（推荐）或 Apache
- **Node.js** ≥ 18（仅构建文档站时需要）
- 域名已解析到服务器公网 IP

### 2. 构建并上传

```bash
# 1. 构建文档站
npm run docs:build

# 2. 上传主站文件到服务器根目录
rsync -avz index.html smart-business-district.html root@your-server-ip:/var/www/weinuo/

# 3. 上传文档站构建产物到 /docs/ 子目录
rsync -avz --delete docs/.vitepress/dist/ root@your-server-ip:/var/www/weinuo/docs/
```

> **目录结构示意**（服务器上）：
> ```
> /var/www/weinuo/
> ├── index.html                    # AI 首页
> ├── smart-business-district.html  # 智慧商圈页
> └── docs/                         # VitePress 文档站
>     ├── index.html
>     ├── assets/
>     └── ...
> ```

### 3. Nginx 配置示例

```nginx
server {
    listen 80;
    server_name www.weinuo.work weinuo.work;

    # 强制跳转 HTTPS（证书配置完成后启用）
    # return 301 https://$server_name$request_uri;

    root /var/www/weinuo;
    index index.html;

    # 主站路由
    location / {
        try_files $uri $uri/ =404;
    }

    # 文档站路由（VitePress SPA，必须保留这行）
    location /docs/ {
        alias /var/www/weinuo/docs/;
        try_files $uri $uri/ /docs/index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # 禁止访问隐藏文件
    location ~ /\. {
        deny all;
    }
}
```

> **关键说明**：
> - `/docs/` 使用 `alias` 指向文档站目录
> - `try_files $uri $uri/ /docs/index.html;` 必须保留，否则 VitePress 子页面刷新会 404

### 4. HTTPS 配置（推荐）

使用 [Certbot](https://certbot.eff.org/) 免费申请 SSL 证书：

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d www.weinuo.work -d weinuo.work
```

### 5. 重启 Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## GitHub Pages 自动部署（仅文档站）

项目已配置 `.github/workflows/deploy.yml`，支持 push 到 `main` 分支后自动构建文档站并部署到 GitHub Pages。

**开启方式**：
1. 前往 GitHub 仓库 → **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 后续每次 `git push origin main` 即自动部署

> GitHub Pages 默认域名：`https://xk103295870-alt.github.io/newOfficial-website/`

---

## 项目结构

```
.
├── index.html                     # 主站：AI 服务首页
├── smart-business-district.html   # 主站：智慧商圈产品介绍页
├── docs/                          # 文档站源码（VitePress）
│   ├── .vitepress/
│   │   ├── config.mjs             # 站点配置（导航、侧边栏、搜索）
│   │   └── theme/
│   │       └── custom.css         # Oxide 暗色主题覆盖
│   ├── index.md                   # 文档站首页
│   ├── manual.md                  # 操作手册（完整后台使用指南）
│   ├── prerequisites.md           # 接入前提与资料清单
│   ├── overview.md                # 产品概述
│   └── ...
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署（文档站）
├── package.json
└── README.md                      # 本文件
```

## 联系方式

- 邮箱：[xk103295870@gmail.com](mailto:xk103295870@gmail.com) / [103295870@qq.com](mailto:103295870@qq.com)
- 企业微信：[在线客服](https://work.weixin.qq.com/ca/cawcde3ad5b17ce10c)
