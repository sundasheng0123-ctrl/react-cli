# React CLI

基于 Webpack 5 + React 19 + TypeScript + Redux 的现代化前端脚手架。

## 特性

- ⚡️ **极速编译** - 使用 SWC 替代 Babel，编译速度提升 20 倍
- 🎯 **TypeScript** - 完整的类型支持
- 📦 **智能打包** - 框架代码分离，preload/prefetch 优化
- 🗜️ **双重压缩** - Gzip + Brotli 压缩，体积最小化
- 🔥 **热更新** - React Fast Refresh 支持
- 🎨 **Redux 状态管理** - 集成 Redux Toolkit 生态
- 📁 **路径别名** - 简化导入路径

## 技术栈

- React 19.2.3
- TypeScript 5.9.3
- Redux 5.0.1 + React-Redux 9.2.0
- Webpack 5.103.0
- SWC 1.15.8

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:8080

### 生产构建

```bash
pnpm build
```

构建产物输出到 `dist` 目录。

## 项目结构

```
react-cli/
├── config/                 # Webpack 配置
│   ├── webpack.common.js   # 公共配置
│   ├── webpack.dev.js      # 开发配置
│   └── webpack.prod.js     # 生产配置
├── public/                 # 静态资源
│   └── index.html          # HTML 模板
├── src/
│   ├── assets/             # 资源文件
│   ├── components/         # 组件
│   ├── pages/              # 页面
│   ├── store/              # Redux store
│   │   ├── actions/        # Actions
│   │   ├── reducers/       # Reducers
│   │   └── index.ts        # Store 配置
│   ├── utils/              # 工具函数
│   └── index.tsx           # 入口文件
├── .swcrc                  # SWC 配置
├── tsconfig.json           # TypeScript 配置
└── package.json
```

## 路径别名

项目配置了以下路径别名：

```typescript
@   -> src/
@u  -> src/utils/
@c  -> src/components/
@s  -> src/store/
@p  -> src/pages/
@a  -> src/assets/
```

使用示例：

```typescript
import { store } from '@s/index'
import Button from '@c/Button'
```

## 性能优化

### 代码分割

- 框架代码（React、Redux）单独打包到 `vendor/framework.*.js`
- 自动 code splitting，按需加载

### 资源预加载

- **Preload** - 框架文件高优先级预加载
- **Prefetch** - 其他资源低优先级预加载

### 压缩优化

- JavaScript 使用 SWC 压缩，移除 console 和 debugger
- 生成 Gzip 和 Brotli 双重压缩文件
- 图片小于 8KB 自动转 base64

## 开发工具

- **包管理器**: pnpm 10.18.3
- **代码格式化**: Prettier
- **类型检查**: TypeScript strict 模式

## License

ISC
