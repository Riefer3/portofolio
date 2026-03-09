document.addEventListener('DOMContentLoaded', () => {

// ================================
// ハンバーガーメニュー（topのheader）
// ================================

const toggleBtn = document.querySelectorAll('.toggle_btn');
const header = document.getElementById('header');
const mask = document.getElementById('mask');

toggleBtn.forEach(btn => {
 btn.addEventListener('click', () => {
  header.classList.toggle('open');
 });
});

if (mask) {
 mask.addEventListener('click', () => {
  header.classList.remove('open');
 });
}

// ------------------------
// ※以下はJQueryで実装した場合
// ------------------------
// $(function() {
//  $('.toggle_btn').on('click', function() {
//   if ($('#header').hasClass('open')) {
//    $('#header').removeClass('open');
//   } else {
//    $('#header').addClass('open');
//   }
//  });

//  $('#mask').on('click', function() {
//   $('#header').removeClass('open');
//  });
// });

// ================================
// ハンバーガーメニュー（header-works）
// ================================

const headerWorks = document.getElementById('header-works');

toggleBtn.forEach(btn => {
 btn.addEventListener('click', () => {
  if(headerWorks) {
   headerWorks.classList.toggle('open');
  }
 });
});

if (mask) {
 mask.addEventListener('click', () => {
  if(headerWorks) {
   headerWorks.classList.remove('open');
  }
 });
}

// ------------------------
// ※以下はJQueryで実装した場合
// ------------------------
// $(function() {
//  $('.toggle_btn').on('click', function() {
//   if ($('#header-works').hasClass('open')) {
//    $('#header-works').removeClass('open');
//   } else {
//    $('#header-works').addClass('open');
//   }
//  });

//  $('#mask').on('click', function() {
//   $('#header-works').removeClass('open');
//  });
// });

// ================================
// スクロールで要素を表示
// ================================

const inviewElements = document.querySelectorAll('.inview');

const handleScroll = () => {
 const scrollPos = window.scrollY;
 const windowHeight = window.innerHeight;

 inviewElements.forEach(el => {
  const elementTop = el.getBoundingClientRect().top + scrollPos;

  if (scrollPos > elementTop - windowHeight + 100) {
   el.classList.add('active');
  }
 });
}

window.addEventListener('load', handleScroll);
window.addEventListener('scroll', handleScroll);

// ------------------------
// ※以下はJQueryで実装した場合
// ------------------------
// $(function() {
//  $(window).on('load scroll', function() {
//   const box = $('.inview');
//   const animated = 'active';
//   box.each(function() {
//    const boxOffset = $(this).offset().top;
//    const scrollPos = $(window).scrollTop();
//    const wh = $(window).height();
//    if(scrollPos > boxOffset - wh + 100){
//     $(this).addClass(animated);
//    }
//   });
//  });
// });

// ================================
// スムーススクロール
// ================================

const headerHeight = document.querySelector('header').offsetHeight;

document.querySelectorAll ('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function(e) {
  e.preventDefault();
  const href = anchor.getAttribute('href');
  const target = document.getElementById(href.replace('#', ''));
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
  window.scrollTo({
   top: targetPosition,
   behavior: 'smooth'
  });
 });
});


// ================================
// 画像を拡大（works個別ページ）
// ================================

 // 要素を取得
 const zoom = document.querySelectorAll('.zoom');
 const zoomback = document.getElementById('zoomback');
 const zoomimg = document.getElementById('zoomimg');

 const kakudai = (e) => {
  // 拡大領域を表示
  zoomback.style.display = 'flex';
  // 押された画像のリンクを渡す
  // zoomimg.setAttribute("src",e.target.getAttribute("src"));
  };

 // 一括でイベントリスナー
 zoom.forEach(function(value) {
  value.addEventListener('click', kakudai);
  });
 // 拡大領域を無きものに
 const modosu = () => {
  zoomback.style.display = 'none';
 };

  // 元に戻すイベントリスナを指定
 zoomback.addEventListener('click', modosu);
});
