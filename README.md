# TC-CLI 脚手架工具 🚧 持续更新中

![GitHub](https://img.shields.io/badge/status-alpha-orange?style=flat)

> 基于个人开发习惯定制的轻量级项目脚手架工具，目前处于开发测试阶段

## ✨ 功能特性

- 🚀 一键生成标准项目结构
- 📦 内置 Vue3 + Vite + JavaScript 基础模板
- ⚡ 自动化文件渲染与目录创建
- 📢 友好的命令行交互提示
- 🎨 终端美化输出与ASCII艺术反馈

## 📥 本地安装（当前尚未发布）

```bash
# 克隆仓库
git clone https://github.com/yourusername/tc-cli.git

# 安装依赖
cd tc-cli && npm install

# 创建全局软链接
npm link
```

## 🗂 当前支持模板（v0.1.0-alpha）

| 模板名称    | 技术栈                   | 状态        | 特性说明                      |
| ----------- | ------------------------ | ----------- | ----------------------------- |
| Vue-Vite-JS | Vue3 + Vite + JavaScript | ✅ 正式支持 | 包含基础路由/Pinia/ESLint配置 |
| React-TS    | React + TypeScript       | 🚧 开发中   | 预计下个版本提供              |
| Nuxt3-TS    | Nuxt3 + TypeScript       | ⏳ 规划中   | SSR/自动导入支持              |

## 🎯使用说明展示

```bash
# 执行命令查看最新模板选项
tc-cli create demo-project
> ? Choose template? (Use arrow keys)
> ❯ Vue-Vite-JS 
>   (其他选项暂不可选)
```

### Vue-Vite-JS 模板结构

```
├── src/
│   ├── assets/       # 静态资源
│   ├── components/   # 公共组件
│   ├── router/       # Vue Router配置
│   ├── stores/       # Pinia状态管理
│   └── main.js       # Vite入口文件 
└── vite.config.js    # Vite高级配置
```
