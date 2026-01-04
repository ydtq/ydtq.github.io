const footerRuntimeFixed = () => {
  let startTime;
  // 尝试多种方式获取配置
  if (typeof window.theme !== 'undefined' && window.theme.footerStart) {
    startTime = window.theme.footerStart;
  } else if (typeof theme !== 'undefined' && theme.footerStart) {
    startTime = theme.footerStart;
  } else {
    // 如果配置还没加载好，延迟重试
    window.setTimeout(footerRuntimeFixed, 500);
    return;
  }
  
  // 保持循环更新
  window.setTimeout(footerRuntimeFixed, 1000);

  const X = new Date(startTime);
  const Y = new Date();
  const T = Y.getTime() - X.getTime();
  const M = 24 * 60 * 60 * 1000;
  const a = T / M;
  const A = Math.floor(a);
  const b = (a - A) * 24;
  const B = Math.floor(b);
  const c = (b - B) * 60;
  const C = Math.floor((b - B) * 60);
  const D = Math.floor((c - C) * 60);

  const runtime_days = document.getElementById("runtime_days");
  const runtime_hours = document.getElementById("runtime_hours");
  const runtime_minutes = document.getElementById("runtime_minutes");
  const runtime_seconds = document.getElementById("runtime_seconds");

  if (runtime_days) runtime_days.innerHTML = A;
  if (runtime_hours) runtime_hours.innerHTML = B;
  if (runtime_minutes) runtime_minutes.innerHTML = C;
  if (runtime_seconds) runtime_seconds.innerHTML = D;
};

// 确保在页面加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", footerRuntimeFixed);
} else {
  footerRuntimeFixed();
}
