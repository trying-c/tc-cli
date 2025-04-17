# Vue3 + Vite 自用脚手架模板

基于现代前端技术栈构建的自用开发模板，集成个人常用的开发配置

## 🚀 技术栈核心

| 技术领域    | 实现方案     | 版本   |
| ----------- | ------------ | ------ |
| 前端框架    | Vue3         | 3.5.13 |
| 构建工具    | Vite         | 6.3.1  |
| 状态管理    | Pinia        | 3.0.2  |
| UI组件库    | View UI Plus | 1.3.20 |
| CSS预处理器 | Sass         | 1.86.3 |

## 🌟 内置特性

### 开发体验优化

- ⚡ 闪电级HMR热更新
- 📁 智能路径别名 (`@/*` -> `src/*`)
- 🌍 全局Sass变量自动注入
- 📦 开箱即用的View UI组件库

### 企业级配置

- 🛠 预置Vite生产优化配置
- 🧩 模块化状态管理架构
- 🎨 标准化样式解决方案
- 🔒 安全依赖版本锁定

## 📂 核心文件结构

```text
├── vite.config.js    # 构建配置中心
├── package.json      # 依赖与脚本管理
├── src/
│   ├── assets/       # 静态资源
│   │   └── styles/  # 全局样式
│   ├── stores/       # Pinia状态管理
│   ├── App.vue       # 根组件
│   └── main.js       # 应用入口
```

### 环境要求

- Node.js 16+
- npm 8+

### 初始化项目

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 预览构建

```bash
npm run preview
```

## 🔧 核心配置说明介绍

##### 路径别名配置 (vite.config.js)

```javascript
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
```

##### 全局Sass变量注入

```javascript
css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@use "@/assets/styles/common.scss" as *;'
    }
  }
}
```

##### 组件库集成 (main.js)

```javascript
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

app.use(ViewUIPlus)
```

## 📦 预置依赖清单

##### 运行时依赖

```json
"dependencies": {
  "pinia": "^3.0.2",
  "view-ui-plus": "^1.3.20",
  "vue": "^3.5.13"
}
```

##### 开发依赖

```json
"devDependencies": {
  "@vitejs/plugin-vue": "^5.2.2",
  "sass": "^1.86.3",
  "sass-loader": "^16.0.5",
  "vite": "^6.3.1"
}
```
