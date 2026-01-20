# React CLI

基于 Webpack 5 + React 19 + TypeScript + Redux Toolkit 的现代化前端脚手架。

## 特性

- ⚡️ **极速编译** - 使用 SWC 替代 Babel，编译速度提升 20 倍
- 🎯 **TypeScript** - 完整的类型支持，strict 模式
- 📦 **智能打包** - 框架代码分离，preload/prefetch 优化
- 🗜️ **双重压缩** - Gzip + Brotli 压缩，体积最小化
- 🔥 **热更新** - React Fast Refresh 支持
- 🎨 **Redux Toolkit** - 现代化状态管理，支持异步 thunk
- 🛣️ **React Router** - 配置式路由，支持懒加载
- 📁 **路径别名** - 简化导入路径

## 技术栈

| 技术 | 版本 |
|------|------|
| React | 19.2.3 |
| TypeScript | 5.9.3 |
| Redux Toolkit | 2.11.2 |
| React Router | 7.12.0 |
| Webpack | 5.103.0 |
| SWC | 1.15.8 |

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
│   ├── components/         # 公共组件
│   │   └── vote/           # 投票组件示例
│   ├── pages/              # 页面组件
│   │   ├── A/              # A 页面（含子路由）
│   │   ├── B.tsx
│   │   └── C.tsx
│   ├── router/             # 路由配置
│   │   ├── index.tsx       # 路由入口
│   │   ├── routes.tsx      # 路由表
│   │   ├── aRoutes.ts      # A 页面子路由
│   │   └── route-types.ts  # 路由类型定义
│   ├── store/              # Redux Store
│   │   ├── features/       # Redux Toolkit slices
│   │   ├── hooks.ts        # 类型化 hooks
│   │   └── index.ts        # Store 配置
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 根组件
│   └── index.tsx           # 入口文件
├── .swcrc                  # SWC 生产配置
├── .dev.swcrc              # SWC 开发配置
├── tsconfig.json           # TypeScript 配置
└── package.json
```

## 路径别名

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
import store from '@s/index'
import Vote from '@c/vote/Vote'
import A from '@p/A'
```

## 路由配置

支持配置式路由，自动处理懒加载和重定向：

```typescript
// src/router/routes.tsx
export const routes: RouteType[] = [
  {
    path: '/a',
    name: 'A',
    component: lazy(() => import('@p/A')),
    children: aRoutes,
    meta: { title: 'A页面' }
  },
  {
    path: '/b',
    redirect: true,
    to: '/a'
  }
]
```

## 状态管理

使用 Redux Toolkit 进行状态管理：

```typescript
// 创建 slice
const voteSlice = createSlice({
  name: 'vote',
  initialState: { supNum: 0, oppNum: 0 },
  reducers: {
    support(state) { state.supNum++ },
    oppose(state) { state.oppNum++ }
  }
})

// 异步 action
export const supportAsync = createAsyncThunk('vote/supportAsync', async () => {
  await delay(1000)
  return true
})

// 组件中使用
const dispatch = useAppDispatch()
const { supNum } = useAppSelector(state => state.vote)
dispatch(support())
```

## 性能优化

### 代码分割

- React/ReactDOM 单独打包
- Redux 相关库单独打包
- 路由懒加载，按需加载页面

### 资源预加载

- Preload - 框架文件高优先级预加载
- Prefetch - 其他资源低优先级预加载

### 压缩优化

- SWC 压缩，移除 console 和 debugger
- Gzip + Brotli 双重压缩
- 图片小于 8KB 自动转 base64

## 开发工具

- **包管理器**: pnpm 10.18.3
- **代码格式化**: Prettier
- **类型检查**: TypeScript strict 模式
- **热更新**: React Fast Refresh

## License

ISC
