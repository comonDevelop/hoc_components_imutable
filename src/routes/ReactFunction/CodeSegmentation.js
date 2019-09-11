/**
 * 大多数 React 应用都会使用 Webpack，Rollup 或 Browserify 这类的构建工具来打包文件。 
 * 打包是一个将文件引入并合并到一个单独文件的过程，最终形成一个 “bundle”。 
 * 接着在页面上引入该 bundle，整个应用即可一次性加载。
 */
import React, { Suspense, lazy } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = lazy(() => import('./OtherComponent'));
const AnotherComponent = lazy(() => import('./AnotherComponent'));

const CodeSegmentation = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);

export default CodeSegmentation;