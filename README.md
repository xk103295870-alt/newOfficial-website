# W工作室 · 智慧商圈官网

> 本项目为 **W工作室（微诺技术）** 官方网站及文档中心，基于 VitePress 构建。
>
> 线上地址：https://www.weinuo.work/

## 技术栈

- [VitePress](https://vitepress.dev/) v1.6.4 — 静态站点生成
- 自定义 Oxide 暗色主题
- GitHub Actions 自动部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 本地预览地址
http://localhost:5173/
```

## 构建

```bash
npm run docs:build
```

构建产物位于 `docs/.vitepress/dist/`，可直接部署到任何静态服务器。

---

## 部署到云服务器

### 1. 服务器环境准备

- **Nginx**（推荐）或 Apache
- **Node.js** ≥ 18（仅构建时需要）
- 域名已解析到服务器公网 IP

### 2. 构建并上传

```bash
# 1. 在本地或服务器执行构建
npm run docs:build

# 2. 将构建产物上传到服务器
# 例如通过 rsync
rsync -avz --delete docs/.vitepress/dist/ root@your-server-ip:/var/www/weinuo/
```

### 3. Nginx 配置示例

```nginx
server {
    listen 80;
    server_name www.weinuo.work weinuo.work;

    # 强制跳转 HTTPS（证书配置完成后启用）
    # return 301 https://$server_name$request_uri;

    root /var/www/weinuo;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
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

> **SPA 路由说明**：VitePress 是单页应用，`try_files $uri $uri/ /index.html;` 这行必须保留，否则刷新子页面会出现 404。

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

## GitHub Pages 自动部署

项目已配置 `.github/workflows/deploy.yml`，支持 push 到 `main` 分支后自动构建并部署到 GitHub Pages。

**开启方式**：
1. 前往 GitHub 仓库 → **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**
3. 后续每次 `git push origin main` 即自动部署

> GitHub Pages 默认域名：`https://xk103295870-alt.github.io/newOfficial-website/`

---

## 项目结构

```
.
├── docs/                          # 文档站源码
│   ├── .vitepress/
│   │   ├── config.mjs             # 站点配置（导航、侧边栏、搜索）
│   │   └── theme/
│   │       └── custom.css         # Oxide 暗色主题覆盖
│   ├── index.md                   # 首页
│   ├── manual.md                  # 操作手册（完整后台使用指南）
│   ├── prerequisites.md           # 接入前提与资料清单
│   ├── overview.md                # 产品概述
│   ├── quickstart.md              # 快速开始
│   └── ...
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署
├── package.json
└── README.md                      # 本文件
```

## 联系方式

- 邮箱：[xk103295870@gmail.com](mailto:xk103295870@gmail.com)
- 企业微信：[在线客服](https://work.weixin.qq.com/ca/cawcde3ad5b17ce10c)
