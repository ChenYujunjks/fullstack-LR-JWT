## react-route

使用 React Router 打包时，无论有多少个路由，React 都会生成一个单一的 `index.html` 文件。也就是说，整个应用实际上是一个单页面应用程序（SPA, Single Page Application）。

在这种情况下，**所有的路由**（例如 `/login`, `/register`）实际上都依赖于 JavaScript 在浏览器中动态处理路径切换。具体来说：

- **只有一个 `index.html` 文件**，所有的路由在访问时，浏览器请求的始终是 `index.html`。
- React Router 通过 JavaScript 代码捕获 URL 的变化，并渲染相应的组件，而不是每次都向服务器请求不同的 HTML 页面。

### 路由处理流程：

1. 用户访问 `/`，`index.html` 加载，然后 React Router 渲染 `Home` 组件。
2. 用户访问 `/login` 或 `/register`，依然加载 `index.html`，但 React Router 根据 URL 渲染对应的 `Login` 或 `Register` 组件。

这就是单页面应用的工作方式，它不会为每个路径生成独立的 HTML 文件，而是通过前端路由动态切换组件。

### 注意事项：

- 如果你使用像 `Vercel` 或 `Netlify` 这样的现代托管服务，它们能够自动处理 SPA 路由问题，把所有路由都指向 `index.html`。
- 如果你用 Nginx 或其他服务器托管，你需要配置一个重写规则（rewrite rule），确保所有请求都指向 `index.html`，这样用户在直接访问 `/login` 或其他路由时，依然会加载正确的页面。
