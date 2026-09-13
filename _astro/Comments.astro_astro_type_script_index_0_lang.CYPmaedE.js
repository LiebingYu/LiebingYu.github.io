var e=document.querySelector(`[data-giscus-config]`);if(e){let t=JSON.parse(e.dataset.giscusConfig||`{}`),n=document.querySelector(`[data-comment-count]`);window.addEventListener(`message`,r=>{let i=e.querySelector(`iframe.giscus-frame`);if(r.origin!==`https://giscus.app`||r.source!==i?.contentWindow)return;let a=r.data?.giscus?.discussion;if(!a||a.repository?.nameWithOwner!==t.repo)return;let{totalCommentCount:o,totalReplyCount:s}=a;if([o,s].every(e=>Number.isSafeInteger(e)&&e>=0)&&n){let e=Number(n.dataset.legacyCount)+o+s;n.textContent=String(e),n.setAttribute(`aria-label`,`${e} 条评论与回复`)}});let r=()=>{let n=document.createElement(`script`);n.src=`https://giscus.app/client.js`,n.async=!0,n.crossOrigin=`anonymous`;let r={repo:t.repo,"repo-id":t.repoId,category:t.category,"category-id":t.categoryId,mapping:`specific`,term:e.dataset.commentPath||``,strict:`1`,"reactions-enabled":`0`,"emit-metadata":`1`,"input-position":`bottom`,theme:`data:text/css;base64,`+btoa(`@import url('https://giscus.app/themes/light.css');

/* This theme is sent as a CSS data URL so local previews need no public CSS host. */
html {
  --font-family-sans:
    Arial, 'PingFang SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft YaHei',
    'Noto Sans CJK SC', sans-serif;
  --font-family-monospace: 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
  font-family: var(--font-family-sans);
  color-scheme: light;
  text-autospace: normal;
}
pre,
code,
kbd,
samp,
math,
.katex,
math-renderer,
svg,
input,
textarea,
[contenteditable] {
  text-autospace: no-autospace;
}
main {
  --color-fg-default: #333943;
  --color-fg-muted: #697380;
  --color-fg-subtle: #697380;
  --color-canvas-default: #fff;
  --color-canvas-inset: #f6f8fa;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-accent-muted: #d0d7de;
  --color-accent-fg: #2c66ad;
  --color-btn-primary-text: #fff;
  --color-btn-primary-bg: #24292f;
  --color-btn-primary-border: #24292f;
  --color-btn-primary-shadow: 0 1px 0 #1f23281a;
  --color-btn-primary-inset-shadow: inset 0 1px 0 #ffffff08;
  --color-btn-primary-hover-bg: #111;
  --color-btn-primary-hover-border: #111;
  --color-btn-primary-selected-bg: #000;
  --color-btn-primary-selected-shadow: inset 0 1px 0 #0003;
  --color-btn-primary-disabled-text: #fff;
  --color-btn-primary-disabled-bg: #8c959f;
  --color-btn-primary-disabled-border: #8c959f;
}
/* The parent page supplies the combined heading/count. Keep error messages visible. */
.gsc-header:has(.gsc-comments-count a),
.gsc-comments:has(> .gsc-comment-box) > .gsc-header {
  display: none;
}
.gsc-main,
.gsc-comments,
.gsc-timeline {
  gap: 16px;
}
.gsc-comment > div,
.gsc-comment-box:not(.gsc-comment-box-is-reply) {
  border-radius: 6px;
}
.gsc-comment-header {
  padding: 16px 16px 0;
}
.gsc-comment-author {
  flex-wrap: wrap;
  gap: 8px;
  line-height: 1.5;
}
.gsc-comment-author-avatar {
  max-width: 100%;
}
.gsc-comment-author-avatar img,
.gsc-reply-author-avatar img {
  width: 30px;
  height: 30px;
  flex: none;
}
.gsc-comment-author time,
.gsc-reply-author time {
  font-size: 12px;
}
.gsc-comment-author .link-secondary,
.gsc-reply-author .link-secondary {
  text-decoration: none;
}
.gsc-comment-author .link-secondary:hover,
.gsc-reply-author .link-secondary:hover {
  text-decoration: underline;
}
.gsc-comment-content,
.gsc-reply-content {
  font-size: 15px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}
.gsc-comment-content {
  padding: 12px 16px 16px;
}
.gsc-comment-content > :last-child,
.gsc-reply-content > :last-child {
  margin-bottom: 0;
}
.gsc-comment-footer {
  margin-bottom: 12px;
}
.gsc-replies {
  padding: 0;
}
.gsc-reply {
  padding: 16px;
}
.gsc-reply + .gsc-reply {
  border-top: 1px solid #d0d7de;
}
.gsc-reply-header {
  min-height: 30px;
  margin-bottom: 8px;
  padding: 0;
}
.gsc-reply-author {
  flex-wrap: wrap;
  gap: 4px 8px;
}
.gsc-tl-line {
  display: none;
}
.gsc-comment-box {
  font-family: var(--font-family-sans);
  font-size: 14px;
}
.gsc-comment-box-textarea {
  font-family: var(--font-family-sans);
  font-size: 15px;
  line-height: 1.7;
}
.gsc-comment-box-textarea.gsc-is-fixed-width {
  font-family: var(--font-family-monospace);
}
@media (max-width: 480px) {
  .gsc-comment-header {
    padding: 12px 12px 0;
  }
  .gsc-comment-content {
    padding: 12px;
  }
  .gsc-reply {
    padding: 12px;
  }
  .gsc-comment-author > .link-secondary {
    flex-basis: calc(100% - 38px);
    margin-left: 38px;
  }
  .gsc-reply-author > .link-secondary {
    flex-basis: 100%;
  }
}
`),lang:`zh-CN`,loading:`eager`};Object.entries(r).forEach(([e,t])=>n.setAttribute(`data-`+e,t)),n.addEventListener(`error`,()=>{e.textContent=`评论暂时未能加载，请稍后刷新页面重试。`}),e.replaceChildren(n)};if(`IntersectionObserver`in window){let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(t.disconnect(),r())},{rootMargin:`300px`});t.observe(e)}else r()}