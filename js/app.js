// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const mainSwiper = new Swiper('.interface__slider',{
		
		effect: "cards",
   //  cardsEffect: {
   //   rotate: false,
   //   slideShadows: false,
  	// },   
		// loop: false,
    grabCursor: true,
    pagination: {
          // el: ".custom__pagin",
          el: ".swiper-pagination",
          clickable: true,
          },
	})

  

  // const tabsSwiper = new Swiper('.tabs__slider',{
    
    
  // })

  document.querySelector('.tabs-link').addEventListener('click',function(e){
    e.preventDefault();
    let mainCont = document.querySelector('.main-cont');
     
      mainCont.classList.remove('passive'); 
      mainCont.classList.add('passive');
      document.querySelector('.tab-item').classList.add('active');
  })

  document.querySelector('.tgl-main').addEventListener('click',function(e){
    e.preventDefault();
    let mainCont = document.querySelector('.main-cont');
     
      mainCont.classList.remove('passive'); 
      
    
  })

  // document.querySelector('.tab-lnk').addEventListener('click', function(e){
  //     e.preventDefault();
  //     const id = e.target.getAttribute('href').replace('#', '');
  //       console.log(id);
      // document.querySelectorAll('.tab-item').forEach((child) => child.classList.remove('active'));
      // document.getElementById(id).classList.add('active');
    // })

  
  // document.querySelectorAll('.tab-link').click();
  const tabsBtn = document.querySelectorAll('.tab-lnk');
  const tabsItems = document.querySelectorAll('.tab-item');
    // console.log(tabsBtn);

    tabsBtn.forEach(function(item){
      item.addEventListener('click', function(e){
        e.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        tabsItems.forEach(function(item){
          item.classList.remove('active');
        })
        currentTab.classList.add('active');
        // console.log(tabId);
      })
    })
    // document.querySelector('.tab-lnk:nth-child-3').click();
})
