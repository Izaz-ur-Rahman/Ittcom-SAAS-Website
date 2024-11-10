'use strict';var theme={init:function(){theme.stickyHeader();theme.subMenu();theme.offCanvas();theme.isotope();theme.onepageHeaderOffset();theme.spyScroll();theme.anchorSmoothScroll();theme.svgInject();theme.backgroundImage();theme.backgroundImageMobile();theme.imageHoverOverlay();theme.rellax();theme.scrollCue();theme.swiperSlider();theme.lightbox();theme.plyr();theme.progressBar();theme.loader();theme.pageProgress();theme.counterUp();theme.bsTooltips();theme.bsPopovers();theme.bsModal();theme.iTooltip();theme.forms();theme.passVisibility();theme.pricingSwitcher();theme.textRotator();theme.codeSnippet()},stickyHeader:()=>{var navbar=document.querySelector(".navbar");if(navbar==null)return;var options={offset:350,offsetSide:'top',classes:{clone:'navbar-clone fixed',stick:'navbar-stick',unstick:'navbar-unstick',},onStick:function(){var navbarClonedClass=this.clonedElem.classList;if(navbarClonedClass.contains('transparent')&&navbarClonedClass.contains('navbar-dark')){this.clonedElem.className=this.clonedElem.className.replace("navbar-dark","navbar-light")}}};var banner=new Headhesive('.navbar',options)},subMenu:()=>{(function($bs){const CLASS_NAME='has-child-dropdown-show';$bs.Dropdown.prototype.toggle=function(_original){return function(){document.querySelectorAll('.'+CLASS_NAME).forEach(function(e){e.classList.remove(CLASS_NAME)});let dd=this._element.closest('.dropdown').parentNode.closest('.dropdown');for(;dd&&dd!==document;dd=dd.parentNode.closest('.dropdown')){dd.classList.add(CLASS_NAME)}
return _original.call(this)}}($bs.Dropdown.prototype.toggle);document.querySelectorAll('.dropdown').forEach(function(dd){dd.addEventListener('hide.bs.dropdown',function(e){if(this.classList.contains(CLASS_NAME)){this.classList.remove(CLASS_NAME);e.preventDefault()}
e.stopPropagation()})})})(bootstrap)},offCanvas:()=>{var navbar=document.querySelector(".navbar");if(navbar==null)return;const navOffCanvasBtn=document.querySelectorAll(".offcanvas-nav-btn");const navOffCanvas=document.querySelector('.navbar:not(.navbar-clone) .offcanvas-nav');const bsOffCanvas=new bootstrap.Offcanvas(navOffCanvas,{scroll:!0});const scrollLink=document.querySelectorAll('.onepage .navbar li a.scroll');const searchOffcanvas=document.getElementById('offcanvas-search');navOffCanvasBtn.forEach(e=>{e.addEventListener('click',event=>{bsOffCanvas.show()})});scrollLink.forEach(e=>{e.addEventListener('click',event=>{bsOffCanvas.hide()})});if(searchOffcanvas!=null){searchOffcanvas.addEventListener('shown.bs.offcanvas',function(){document.getElementById("search-form").focus()})}},isotope:()=>{var grids=document.querySelectorAll('.grid');if(grids!=null){grids.forEach(g=>{var grid=g.querySelector('.isotope');var filtersElem=g.querySelector('.isotope-filter');var buttonGroups=g.querySelectorAll('.isotope-filter');var iso=new Isotope(grid,{itemSelector:'.item',layoutMode:'masonry',masonry:{columnWidth:grid.offsetWidth/12},percentPosition:!0,transitionDuration:'0.7s'});imagesLoaded(grid).on("progress",function(){iso.layout({masonry:{columnWidth:grid.offsetWidth/12}})}),window.addEventListener("resize",function(){iso.arrange({masonry:{columnWidth:grid.offsetWidth/12}})},!0);if(filtersElem!=null){filtersElem.addEventListener('click',function(event){if(!matchesSelector(event.target,'.filter-item')){return}
var filterValue=event.target.getAttribute('data-filter');iso.arrange({filter:filterValue})});for(var i=0,len=buttonGroups.length;i<len;i++){var buttonGroup=buttonGroups[i];buttonGroup.addEventListener('click',function(event){if(!matchesSelector(event.target,'.filter-item')){return}
buttonGroup.querySelector('.active').classList.remove('active');event.target.classList.add('active')})}}})}},onepageHeaderOffset:()=>{var navbar=document.querySelector(".navbar");if(navbar==null)return;const header_height=document.querySelector(".navbar").offsetHeight;const shrinked_header_height=75;const sections=document.querySelectorAll(".onepage section");sections.forEach(section=>{section.style.paddingTop=shrinked_header_height+'px';section.style.marginTop='-'+shrinked_header_height+'px'});const first_section=document.querySelector(".onepage section:first-of-type");if(first_section!=null){first_section.style.paddingTop=header_height+'px';first_section.style.marginTop='-'+header_height+'px'}},spyScroll:()=>{let section=document.querySelectorAll('section[id]');let navLinks=document.querySelectorAll('.nav-link.scroll');window.onscroll=()=>{section.forEach(sec=>{let top=window.scrollY;let offset=sec.offsetTop-0;let height=sec.offsetHeight;let id=sec.getAttribute('id');if(top>=offset&&top<offset+height){navLinks.forEach(links=>{links.classList.remove('active');document.querySelector(`.nav-link.scroll[href*=${id}]`).classList.add('active')})}})}},anchorSmoothScroll:()=>{const links=document.querySelectorAll(".scroll");for(const link of links){link.addEventListener("click",clickHandler)}
function clickHandler(e){e.preventDefault();this.blur();const href=this.getAttribute("href");const offsetTop=document.querySelector(href).offsetTop;scroll({top:offsetTop,behavior:"smooth"})}},svgInject:()=>{SVGInject.setOptions({onFail:function(img,svg){img.classList.remove('svg-inject')}});document.addEventListener('DOMContentLoaded',function(){SVGInject(document.querySelectorAll('img.svg-inject'),{useCache:!0})})},backgroundImage:()=>{var bg=document.querySelectorAll(".bg-image");for(var i=0;i<bg.length;i++){var url=bg[i].getAttribute('data-image-src');bg[i].style.backgroundImage="url('"+url+"')"}},backgroundImageMobile:()=>{var isMobile=(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i))?!0:!1;if(isMobile){document.querySelectorAll(".image-wrapper").forEach(e=>{e.classList.add("mobile")})}},imageHoverOverlay:()=>{var overlay=document.querySelectorAll('.overlay > a, .overlay > span');for(var i=0;i<overlay.length;i++){var overlay_bg=document.createElement('span');overlay_bg.className="bg";overlay[i].appendChild(overlay_bg)}},rellax:()=>{if(document.querySelector(".rellax")!=null){window.onload=function(){var rellax=new Rellax('.rellax',{speed:2,center:!0,breakpoints:[576,992,1201]});var projects_overflow=document.querySelectorAll('.projects-overflow');imagesLoaded(projects_overflow,function(){rellax.refresh()})}}},scrollCue:()=>{scrollCue.init({interval:-400,duration:700,percentage:0.8});scrollCue.update()},swiperSlider:function(){var carousel=document.querySelectorAll('.swiper-container');for(var i=0;i<carousel.length;i++){var slider1=carousel[i];slider1.classList.add('swiper-container-'+i);var controls=document.createElement('div');controls.className="swiper-controls";var pagi=document.createElement('div');pagi.className="swiper-pagination";var navi=document.createElement('div');navi.className="swiper-navigation";var prev=document.createElement('div');prev.className="swiper-button swiper-button-prev";var next=document.createElement('div');next.className="swiper-button swiper-button-next";slider1.appendChild(controls);controls.appendChild(navi);navi.appendChild(prev);navi.appendChild(next);controls.appendChild(pagi);var sliderEffect=slider1.getAttribute('data-effect')?slider1.getAttribute('data-effect'):'slide';if(slider1.getAttribute('data-items-auto')==='true'){var slidesPerViewInit="auto";var breakpointsInit=null}else{var sliderItems=slider1.getAttribute('data-items')?slider1.getAttribute('data-items'):3;var sliderItemsXs=slider1.getAttribute('data-items-xs')?slider1.getAttribute('data-items-xs'):1;var sliderItemsSm=slider1.getAttribute('data-items-sm')?slider1.getAttribute('data-items-sm'):Number(sliderItemsXs);var sliderItemsMd=slider1.getAttribute('data-items-md')?slider1.getAttribute('data-items-md'):Number(sliderItemsSm);var sliderItemsLg=slider1.getAttribute('data-items-lg')?slider1.getAttribute('data-items-lg'):Number(sliderItemsMd);var sliderItemsXl=slider1.getAttribute('data-items-xl')?slider1.getAttribute('data-items-xl'):Number(sliderItemsLg);var sliderItemsXxl=slider1.getAttribute('data-items-xxl')?slider1.getAttribute('data-items-xxl'):Number(sliderItemsXl);var slidesPerViewInit=sliderItems;var breakpointsInit={0:{slidesPerView:Number(sliderItemsXs)},576:{slidesPerView:Number(sliderItemsSm)},768:{slidesPerView:Number(sliderItemsMd)},992:{slidesPerView:Number(sliderItemsLg)},1200:{slidesPerView:Number(sliderItemsXl)},1400:{slidesPerView:Number(sliderItemsXxl)}}}
var sliderSpeed=slider1.getAttribute('data-speed')?slider1.getAttribute('data-speed'):500;var sliderAutoPlay=slider1.getAttribute('data-autoplay')!=='false';var sliderAutoPlayTime=slider1.getAttribute('data-autoplaytime')?slider1.getAttribute('data-autoplaytime'):5000;var sliderAutoHeight=slider1.getAttribute('data-autoheight')==='true';var sliderResizeUpdate=slider1.getAttribute('data-resizeupdate')!=='false';var sliderAllowTouchMove=slider1.getAttribute('data-drag')!=='false';var sliderReverseDirection=slider1.getAttribute('data-reverse')==='true';var sliderMargin=slider1.getAttribute('data-margin')?slider1.getAttribute('data-margin'):30;var sliderLoop=slider1.getAttribute('data-loop')==='true';var sliderCentered=slider1.getAttribute('data-centered')==='true';var swiper=slider1.querySelector('.swiper:not(.swiper-thumbs)');var swiperTh=slider1.querySelector('.swiper-thumbs');var sliderTh=new Swiper(swiperTh,{slidesPerView:5,spaceBetween:10,loop:!1,threshold:2,slideToClickedSlide:!0});if(slider1.getAttribute('data-thumbs')==='true'){var thumbsInit=sliderTh;var swiperMain=document.createElement('div');swiperMain.className="swiper-main";swiper.parentNode.insertBefore(swiperMain,swiper);swiperMain.appendChild(swiper);slider1.removeChild(controls);swiperMain.appendChild(controls)}else{var thumbsInit=null}
var slider=new Swiper(swiper,{on:{beforeInit:function(){if(slider1.getAttribute('data-nav')!=='true'&&slider1.getAttribute('data-dots')!=='true'){controls.remove()}
if(slider1.getAttribute('data-dots')!=='true'){pagi.remove()}
if(slider1.getAttribute('data-nav')!=='true'){navi.remove()}},init:function(){if(slider1.getAttribute('data-autoplay')!=='true'){this.autoplay.stop()}
this.update()}},autoplay:{delay:sliderAutoPlayTime,disableOnInteraction:!1,reverseDirection:sliderReverseDirection,pauseOnMouseEnter:!1},allowTouchMove:sliderAllowTouchMove,speed:parseInt(sliderSpeed),slidesPerView:slidesPerViewInit,loop:sliderLoop,centeredSlides:sliderCentered,spaceBetween:Number(sliderMargin),effect:sliderEffect,autoHeight:sliderAutoHeight,grabCursor:!0,resizeObserver:!1,updateOnWindowResize:sliderResizeUpdate,breakpoints:breakpointsInit,pagination:{el:carousel[i].querySelector('.swiper-pagination'),clickable:!0},navigation:{prevEl:slider1.querySelector('.swiper-button-prev'),nextEl:slider1.querySelector('.swiper-button-next'),},thumbs:{swiper:thumbsInit,},})}},lightbox:()=>{const lightbox=GLightbox({selector:'*[data-glightbox]',touchNavigation:!0,loop:!1,zoomable:!1,autoplayVideos:!0,moreLength:0,slideExtraAttributes:{poster:''},plyr:{css:'',js:'',config:{ratio:'',fullscreen:{enabled:!1,iosNative:!1},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},})},plyr:()=>{var players=Plyr.setup('.player',{loadSprite:!0,fullscreen:{enabled:!0,iosNative:!0},muted:!1})},progressBar:()=>{const pline=document.querySelectorAll(".progressbar.line");const pcircle=document.querySelectorAll(".progressbar.semi-circle");pline.forEach(e=>{var line=new ProgressBar.Line(e,{strokeWidth:6,trailWidth:6,duration:3000,easing:'easeInOut',text:{style:{color:'inherit',position:'absolute',right:'0',top:'-30px',padding:0,margin:0,transform:null},autoStyleContainer:!1},step:(state,line)=>{line.setText(Math.round(line.value()*100)+' %')}});var value=e.getAttribute('data-value')/100;new Waypoint({element:e,handler:function(){line.animate(value)},offset:'bottom-in-view',})});pcircle.forEach(e=>{var circle=new ProgressBar.SemiCircle(e,{strokeWidth:6,trailWidth:6,duration:2000,easing:'easeInOut',step:(state,circle)=>{circle.setText(Math.round(circle.value()*100))}});var value=e.getAttribute('data-value')/100;new Waypoint({element:e,handler:function(){circle.animate(value)},offset:'bottom-in-view',})})},loader:()=>{var preloader=document.querySelector('.page-loader');if(preloader!=null){document.body.onload=function(){setTimeout(function(){if(!preloader.classList.contains('done')){preloader.classList.add('done')}},1000)}}},pageProgress:()=>{var progressWrap=document.querySelector('.progress-wrap');if(progressWrap!=null){var progressPath=document.querySelector('.progress-wrap path');var pathLength=progressPath.getTotalLength();var offset=50;progressPath.style.transition=progressPath.style.WebkitTransition='none';progressPath.style.strokeDasharray=pathLength+' '+pathLength;progressPath.style.strokeDashoffset=pathLength;progressPath.getBoundingClientRect();progressPath.style.transition=progressPath.style.WebkitTransition='stroke-dashoffset 10ms linear';window.addEventListener("scroll",function(event){var scroll=document.body.scrollTop||document.documentElement.scrollTop;var height=document.documentElement.scrollHeight-document.documentElement.clientHeight;var progress=pathLength-(scroll*pathLength/height);progressPath.style.strokeDashoffset=progress;var scrollElementPos=document.body.scrollTop||document.documentElement.scrollTop;if(scrollElementPos>=offset){progressWrap.classList.add("active-progress")}else{progressWrap.classList.remove("active-progress")}});progressWrap.addEventListener('click',function(e){e.preventDefault();window.scroll({top:0,left:0,behavior:'smooth'})})}},counterUp:()=>{var counterUp=window.counterUp["default"];const counters=document.querySelectorAll(".counter");counters.forEach(el=>{new Waypoint({element:el,handler:function(){counterUp(el,{duration:1000,delay:50})
this.destroy()},offset:'bottom-in-view',})})},bsTooltips:()=>{var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList=tooltipTriggerList.map(function(tooltipTriggerEl){return new bootstrap.Tooltip(tooltipTriggerEl,{trigger:'hover'})});var tooltipTriggerWhite=[].slice.call(document.querySelectorAll('[data-bs-toggle="white-tooltip"]'))
var tooltipWhite=tooltipTriggerWhite.map(function(tooltipTriggerEl){return new bootstrap.Tooltip(tooltipTriggerEl,{customClass:'white-tooltip',trigger:'hover',placement:'left'})})},bsPopovers:()=>{var popoverTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList=popoverTriggerList.map(function(popoverTriggerEl){return new bootstrap.Popover(popoverTriggerEl)})},bsModal:()=>{if(document.querySelector(".modal-popup")!=null){var myModalPopup=new bootstrap.Modal(document.querySelector('.modal-popup'));setTimeout(function(){myModalPopup.show()},200)}
var innerWidth=window.innerWidth;var clientWidth=document.body.clientWidth;var scrollSize=innerWidth-clientWidth;var myModalEl=document.querySelectorAll('.modal');var navbarFixed=document.querySelector('.navbar.fixed');var pageProgress=document.querySelector('.progress-wrap');function setPadding(){if(navbarFixed!=null){navbarFixed.style.paddingRight=scrollSize+'px'}
if(pageProgress!=null){pageProgress.style.marginRight=scrollSize+'px'}}
function removePadding(){if(navbarFixed!=null){navbarFixed.style.paddingRight=''}
if(pageProgress!=null){pageProgress.style.marginRight=''}}
myModalEl.forEach(myModalEl=>{myModalEl.addEventListener('show.bs.modal',function(e){setPadding()})
myModalEl.addEventListener('hidden.bs.modal',function(e){removePadding()})})},iTooltip:()=>{var tooltip=new iTooltip('.itooltip')
tooltip.init({className:'itooltip-inner',indentX:15,indentY:15,positionX:'right',positionY:'bottom'})},forms:()=>{(function(){"use strict";window.addEventListener("load",function(){var forms=document.querySelectorAll(".needs-validation");var inputRecaptcha=document.querySelector("input[data-recaptcha]");window.verifyRecaptchaCallback=function(response){inputRecaptcha.value=response;inputRecaptcha.dispatchEvent(new Event("change"))}
window.expiredRecaptchaCallback=function(){var inputRecaptcha=document.querySelector("input[data-recaptcha]");inputRecaptcha.value="";inputRecaptcha.dispatchEvent(new Event("change"))}
var validation=Array.prototype.filter.call(forms,function(form){form.addEventListener("submit",function(event){if(form.checkValidity()===!1){event.preventDefault();event.stopPropagation()}
form.classList.add("was-validated");if(form.checkValidity()===!0){event.preventDefault();form.classList.remove("was-validated");var isContactForm=form.classList.contains('contact-form');if(isContactForm){var data=new FormData(form);var alertClass='alert-danger';fetch("assets/php/contact.php",{method:"post",body:data}).then((data)=>{if(data.ok){alertClass='alert-success'}
return data.text()}).then((txt)=>{var alertBox='<div class="alert '+alertClass+' alert-dismissible fade show"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+txt+'</div>';if(alertClass&&txt){form.querySelector(".messages").insertAdjacentHTML('beforeend',alertBox);form.reset();grecaptcha.reset()}}).catch((err)=>{console.log(err)})}}},!1)})},!1)})()},passVisibility:()=>{let pass=document.querySelectorAll('.password-field');for(let i=0;i<pass.length;i++){let passInput=pass[i].querySelector('.form-control');let passToggle=pass[i].querySelector('.password-toggle > i');passToggle.addEventListener('click',(e)=>{if(passInput.type==="password"){passInput.type="text";passToggle.classList.remove('uil-eye');passToggle.classList.add('uil-eye-slash')}else{passInput.type="password";passToggle.classList.remove('uil-eye-slash');passToggle.classList.add('uil-eye')}},!1)}},pricingSwitcher:()=>{if(document.querySelector(".pricing-switchers")!=null){const wrapper=document.querySelectorAll(".pricing-wrapper");wrapper.forEach(wrap=>{const switchers=wrap.querySelector(".pricing-switchers");const switcher=wrap.querySelectorAll(".pricing-switcher");const price=wrap.querySelectorAll(".price");switchers.addEventListener("click",(e)=>{switcher.forEach(s=>{s.classList.toggle("pricing-switcher-active")});price.forEach(p=>{p.classList.remove("price-hidden");p.classList.toggle("price-show");p.classList.toggle("price-hide")})})})}},textRotator:()=>{if(document.querySelector(".rotator-zoom")!=null){var replace=new ReplaceMe(document.querySelector('.rotator-zoom'),{animation:'animate__animated animate__zoomIn',speed:2500,separator:',',clickChange:!1,loopCount:'infinite'})}
if(document.querySelector(".rotator-fade")!=null){var replace=new ReplaceMe(document.querySelector('.rotator-fade'),{animation:'animate__animated animate__fadeInDown',speed:2500,separator:',',clickChange:!1,loopCount:'infinite'})}},codeSnippet:()=>{var btnHtml='<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>'
document.querySelectorAll('.code-wrapper-inner').forEach(function(element){element.insertAdjacentHTML('beforebegin',btnHtml)})
var clipboard=new ClipboardJS('.btn-clipboard',{target:function(trigger){return trigger.nextElementSibling}})
clipboard.on('success',event=>{event.trigger.textContent='Copied!';event.clearSelection();setTimeout(function(){event.trigger.textContent='Copy'},2000)});var copyIconCode=new ClipboardJS('.btn-copy-icon');copyIconCode.on('success',function(event){event.clearSelection();event.trigger.textContent='Copied!';window.setTimeout(function(){event.trigger.textContent='Copy'},2300)})},}
theme.init()