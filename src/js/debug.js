import '/src/css/debug.css';
// import javascriptLogo from '../../public/img/javascript.svg';
// import viteLogo from '../../public/img/vite.svg';

const debugMedia = () => {

  document.querySelector(".page").insertAdjacentHTML('beforeend', `
  <!-- start debug media -->
  <div class="debug page__debug">
    <div class="debug__block debug__block_less">
      <div class="debug__size">less</div>
      <div class="debug__text">&lt; 320</div>
    </div>
    <div class="debug__block debug__block_mobile">
      <span class="debug__size">mob</span>
      <span class="debug__text">320 px</span>
    </div>
    <div class="debug__block debug__block_sm">
      <span class="debug__size">sm</span>
      <span class="debug__text">576 px</span>
    </div>
    <div class="debug__block debug__block_md">
      <span class="debug__size">md</span>
      <span class="debug__text">768 px</span>
    </div>
    <div class="debug__block debug__block_lg">
      <span class="debug__size">lg</span>
      <span class="debug__text">1024 px</span>
    </div>
    <div class="debug__block debug__block_xl">
      <span class="debug__size">xl</span>
      <span class="debug__text">1240 px</span>
    </div>
    <div class="debug__block debug__block_desk">
      <span class="debug__size">desk</span>
      <span class="debug__text">1440 px</span>
    </div>
    <div class="debug__block debug__block_xxl">
      <span class="debug__size">xxl</span>
      <span class="debug__text">1600 px</span>
    </div>
    <div class="debug__block debug__block_hd">
      <span class="debug__size">&nbsp;hd&nbsp;</span>
      <span class="debug__text">&gt;2560 px</span>
    </div>
  </div>
  <!-- end debug -->
`);
}


// run debug
debugMedia();

export default debugMedia;
