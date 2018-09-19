$(document).ready(function(){
    $('.option-bar').flickity({
        asNavFor: '.event-category',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        cellAlign: 'left'
      });
    
      $('.event-category').flickity({
        asNavFor: '.options-bar',
        pageDots: false,
        prevNextButtons: false,
        setGallerySize: false,
        cellAlign: 'left'
      });
});

