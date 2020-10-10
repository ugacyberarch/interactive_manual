<template>
<div class="content" style="">
  <h4>Lets simiulate the example of sending email. When you send email, the data of emails is divided into network packets and sent to reciever over internet. Let say, our email is sent in 3 packts. On recieving all 3 packets, the reciever of the email gets notification of new email.</h4>
   <div class="browser-window" id="email" style="text-align:center; display:block">
    <div class="row">
      <div class="column left">
        <span class="dot" style="background:#ed594a;"></span>
        <span class="dot" style="background:#fdd800;"></span>
        <span class="dot" style="background:#5ac05a;"></span>
        <div class="nav">
          <i class="back fas fa-arrow-left"></i>
          <i class="forward fas fa-arrow-right"></i>
          <i class="forward fas fa-redo"></i>
        </div>
      </div>
      <div class="column middle">
        <input type="text" value="www.email.com" disabled />
      </div>
      <div class="column right">
        <div style="float:right">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>

    <div class="content">
     <div class="mail-box" >
    <h4 style="display:none !important">New Email</h4>
    <div class="input-container">
    <i class="fa fa-envelope icon"></i>
   <input class="input-field" type="email" placeholder="To" value="to@email.com">
  </div>

   <div class="input-container">
    <i class="fa fa-suitcase  icon"></i>
    <input class="input-field" type="text" placeholder="Subject" value="Subject..">
  </div>

 <div class="input-container">
   <i class="fa fa-paper-plane icon"></i>
  <textarea style="width:80%; height:250px;">
Hello,
    We will simulate, how email travels to the destination. Just click on the send button.
  Thank you
  </textarea><br></div>
    <span class="fa fa-arrow-right"  id="send-arrow" style="padding-right:15px;"> </span>
  <button @click="send" class="btn-cons btn-success">Send</button>
 
  </div>
    </div>
  </div>

  
  <div id="simulate" style="display:none; padding-left:50px; ">
    <svg width="580" height="300" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->

 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
  <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <g stroke="null" id="svg_27">
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_5">
    <circle stroke="null" id="svg_6" fill="#2D404E" r="256" cy="2806.195366" cx="4059.190445"/>
    <path stroke="null" id="svg_7" fill="#48B19B" d="m4315.190445,2806.195366c0,-51.363 -15.124,-99.191 -41.165,-139.275c0,0 -14.604,21.334 -11.86,35.047c2.742,13.715 18.855,14.762 17.2,24.822s-13.541,-2.879 -28.172,23.633c-14.63,26.514 -7.312,63.096 13.714,65.834c21.027,2.736 50.283,-10.061 50.283,-10.061z"/>
    <path stroke="null" id="svg_8" fill="#48B19B" d="m4126.420445,2559.115366c29.797,8.088 57.434,21.424 81.857,38.951c0,0 -29.684,-4.896 -40.929,5.158c-11.244,10.057 -27.643,33.832 -40.929,0c-13.284,-33.83 0.001,-44.109 0.001,-44.109z"/>
    <path stroke="null" id="svg_9" fill="#48B19B" d="m3866.709445,2637.414366c46.918,-53.465 115.756,-87.219 192.481,-87.219c0,0 -17.368,10.516 15.546,28.344c32.915,17.83 17.828,26.057 10.971,31.543c-6.856,5.486 -18.749,-10.971 -26.517,-21.941c-7.769,-10.973 -41.132,-27.885 -66.734,-18.74c-25.601,9.145 -47.539,15.9 -43.885,24.408c3.653,8.506 47.539,-7.945 63.996,-7.035c16.457,0.912 10.971,10.967 -4.569,22.854c-15.542,11.887 -17.374,26.514 -0.916,35.656c16.456,9.146 36.566,10.061 41.143,4.576c4.574,-5.486 -8.229,-41.143 22.858,-25.602s56.688,24.691 31.087,47.545c-25.602,22.852 -54.857,48.461 -55.773,63.084c-0.916,14.625 9.146,26.52 3.66,27.43c-5.486,0.91 -10.521,-5.941 -14.176,-10.973c-3.653,-5.029 -20.571,-6.855 -28.799,-3.658c-8.229,3.197 -23.774,15.541 -15.086,27.428c8.689,11.889 20.565,6.396 32.454,11.883c11.887,5.486 22.972,26.365 20.696,31.084c-2.276,4.717 -12.409,-1.256 -20.696,-17.369c-8.289,-16.115 -23.835,-5.486 -34.773,-8.229c-10.939,-2.742 -19.168,-4.57 -30.14,-23.771c-10.972,-19.199 -33.687,-24.572 -42.969,-35.656c-26.589,-31.75 -24.687,-55.771 -30.172,-66.742c-5.486,-10.974 -19.687,-28.9 -19.687,-28.9z"/>
    <path stroke="null" id="svg_10" fill="#48B19B" d="m4083.875445,2809.853366c0,0 27.429,2.738 41.143,14.627c13.714,11.887 15.546,16.461 36.573,21.031c21.027,4.568 30.172,16.451 16.457,39.311c-13.714,22.857 -38.404,59.43 -50.287,70.402c-11.882,10.973 -26.512,20.115 -31.998,38.4c-5.485,18.283 -7.317,29.248 4.57,36.568c0,0 -6.396,15.545 -21.026,-4.57c-14.631,-20.117 -2.744,-43.885 0,-57.6c2.742,-13.713 10.055,-54.852 5.484,-64.914c-4.568,-10.059 -25.601,-16.461 -31.087,-37.486c-5.486,-21.026 4.115,-61.944 30.171,-55.769z"/>
    <path stroke="null" id="svg_11" opacity="0.6" fill="#253744" d="m3878.170445,2625.178366c99.975,-99.977 262.062,-99.975 362.038,0c99.976,99.973 99.976,262.062 0.001,362.037c0,0 116.148,-153.59 -48.293,-318.031c-164.442,-164.442 -313.746,-44.006 -313.746,-44.006z"/>
   </g>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_12"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_13"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_14"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_15"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_16"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_17"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_18"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_19"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_20"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_21"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_22"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_23"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_24"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_25"/>
   <g stroke="null" transform="matrix(0.18891055610031068,0,0,0.18891060460669107,-486.82391448665294,-326.1200441039218) " id="svg_26"/>
  </g>
  <g id="svg_193" style = "display: block"><!-- Package --> 
   <path id="svg_172" fill="#EFC75E" d="m116.367645,199.225205l17.632345,-8.76112l17.632345,8.76105l0,1.157153l-17.632345,8.76105l-17.632345,-8.733419l0,-1.184714z"/>
   <path id="svg_173" fill="#E7BF55" d="m116.367645,199.225205l17.632345,8.76105l17.632345,-8.76105l0,17.549661l-17.687467,8.76105l-17.577222,-8.76098l0,-17.549731z"/>
   <path id="svg_174" fill="#DBB551" d="m133.99999,225.508424l0,-17.5221l-17.522169,-8.706067l-0.110175,0l0,17.494538l17.577222,8.76105l0.055122,-0.027421z"/>
   <path id="svg_175" fill="#F7E3AF" d="m123.558333,195.671133l17.604783,8.76105l3.581563,-1.76322l-17.659906,-8.76098l-3.526441,1.763151z"/>
   <path id="svg_176" fill="#F1D999" d="m141.163117,204.432253l3.581563,-1.76322l0,5.510081l-0.964294,-0.165298l-1.019347,1.239767l-1.597923,-0.110175c0,-0.00007 0,-4.711155 0,-4.711155z"/>
   <path id="svg_177" fill="#F2F2F2" d="m130.363304,214.984084l-5.950922,-2.975426c-0.330595,-0.165298 -0.606138,0.027561 -0.606138,0.44084l0,3.994842c0,0.413279 0.275473,0.88161 0.606138,1.046908l5.978483,2.975426c0.330595,0.165298 0.606138,-0.027561 0.606138,-0.44084l0,-4.022404c-0.027631,-0.413279 -0.303104,-0.853979 -0.633699,-1.019347zm-1.350012,3.27853l-3.801983,-1.900957c-0.165298,-0.082684 -0.303034,-0.330595 -0.303034,-0.551015s0.137736,-0.330595 0.303034,-0.247981l3.801983,1.900957c0.165298,0.082684 0.303034,0.330595 0.303034,0.551015s-0.137736,0.330595 -0.303034,0.247981zm0.551015,-1.377573l-4.352999,-2.204061c-0.165298,-0.082684 -0.303034,-0.330595 -0.303034,-0.551015s0.137736,-0.330595 0.303034,-0.247981l4.352999,2.204061c0.165298,0.082684 0.303034,0.330595 0.303034,0.551015c0.00007,0.247981 -0.137736,0.330595 -0.303034,0.247981z"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_178"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_179"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_180"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_181"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_182"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_183"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_184"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_185"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_186"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_187"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_188"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_189"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_190"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_191"/>
   <g transform="matrix(0.06995241063956215,0,0,0.06995241063956215,0,0) " id="svg_192"/>
  </g>
  <linearGradient y2="1.189222" x2="1.148277" y1="0.075749" x1="0.101013" id="svg_214">
   <stop stop-color="#FFFFFF" offset="0"/>
   <stop stop-color="#E8EFEE" offset="1"/>
  </linearGradient>
  <linearGradient y2="1.101578" x2="-0.047808" y1="-0.114746" x1="1.008736" id="svg_213">
   <stop stop-color="#C2CECE" stop-opacity="0" offset="0"/>
   <stop stop-color="#AFBCBC" stop-opacity="0.179" offset="0.179"/>
   <stop stop-color="#5B6A6A" offset="1"/>
  </linearGradient>
  <linearGradient y2="-0.301885" x2="0.129028" y1="0.536995" x1="1.040389" id="svg_212">
   <stop stop-color="#C2CECE" stop-opacity="0" offset="0"/>
   <stop stop-color="#AFBCBC" stop-opacity="0.179" offset="0.179"/>
   <stop stop-color="#5B6A6A" offset="1"/>
  </linearGradient>
  <linearGradient y2="0.931759" x2="0.500016" y1="0.318011" x1="0.500016" id="svg_211">
   <stop stop-color="#FFC200" offset="0"/>
   <stop stop-color="#FFBB00" offset="0.268"/>
   <stop stop-color="#FFA801" offset="0.659"/>
   <stop stop-color="#FF9102" offset="1"/>
  </linearGradient>
  <linearGradient y2="0.999114" x2="0.500016" y1="0.679686" x1="0.500016" id="svg_210">
   <stop stop-color="#FFC200" offset="0"/>
   <stop stop-color="#FFBB00" offset="0.268"/>
   <stop stop-color="#FFA801" offset="0.659"/>
   <stop stop-color="#FF9102" offset="1"/>
  </linearGradient>
  <linearGradient y2="0.991191" x2="0.706266" y1="0.003413" x1="0.291684" id="svg_209">
   <stop stop-color="#D63305" offset="0"/>
   <stop stop-color="#CF3004" offset="0.366"/>
   <stop stop-color="#BC2602" offset="0.899"/>
   <stop stop-color="#B72401" offset="1"/>
  </linearGradient>
  <linearGradient y2="-0.589142" x2="-0.523942" y1="0.231794" x1="0.24788" id="svg_208">
   <stop stop-color="#C2CECE" stop-opacity="0" offset="0"/>
   <stop stop-color="#AFBCBC" stop-opacity="0.179" offset="0.179"/>
   <stop stop-color="#5B6A6A" offset="1"/>
  </linearGradient>
  <g id="svg_339">
   <g stroke="null" id="svg_167">
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_151">
     <g stroke="null" id="svg_101">
      <rect stroke="null" id="svg_100" fill="#FFFFFF" height="256" width="416" y="2635.292266" x="2860.910095"/>
     </g>
     <g stroke="null" id="svg_103">
      <rect stroke="null" id="svg_102" fill="#FF4F19" height="64" width="416" y="2635.292266" x="2860.910095"/>
     </g>
     <g stroke="null" id="svg_105">
      <path stroke="null" id="svg_104" fill="#5C546A" d="m3272.043098,2603.29227l-406.281,0c-20.321,0 -36.852,16.493 -36.852,36.766l0,291.234c0,4.422 3.578,8 8,8l464,0c4.422,0 8,-3.578 8,-8l0,-291.234c0,-20.273 -16.539,-36.766 -36.867,-36.766zm-411.133,280l0,-240c0,-4.418 3.582,-8 8,-8l400,0c4.418,0 8,3.582 8,8l0,240c0,4.418 -3.582,8 -8,8l-400,0c-4.418,0 -8,-3.582 -8,-8z"/>
     </g>
     <g stroke="null" id="svg_107">
      <path stroke="null" id="svg_106" fill="#B9BBC1" d="m3316.910098,2923.29227l-496,0c-4.422,0 -8,3.578 -8,8l0,0c0,17.664 14.367,32.031 32.031,32.031l447.937,0c17.664,0 32.031,-14.367 32.031,-32.031l0,0c0.001,-4.422 -3.577,-8 -7.999,-8z"/>
     </g>
     <g stroke="null" id="svg_110">
      <g stroke="null" id="svg_109">
       <path stroke="null" id="svg_108" fill="#FFD200" d="m2956.910098,2675.29227l-56,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l56,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_113">
      <g stroke="null" id="svg_112">
       <path stroke="null" id="svg_111" fill="#FFFFFF" d="m3100.910098,2675.29227l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_116">
      <g stroke="null" id="svg_115">
       <path stroke="null" id="svg_114" fill="#FFFFFF" d="m3140.910098,2675.29227l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_119">
      <g stroke="null" id="svg_118">
       <path stroke="null" id="svg_117" fill="#FFFFFF" d="m3180.910098,2675.29227l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_122">
      <g stroke="null" id="svg_121">
       <path stroke="null" id="svg_120" fill="#FFFFFF" d="m3220.910098,2675.29227l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_124">
      <path stroke="null" id="svg_123" fill="#53DCFF" d="m3036.910098,2867.29227l-136,0c-4.418,0 -8,-3.582 -8,-8l0,-128c0,-4.418 3.582,-8 8,-8l136,0c4.418,0 8,3.582 8,8l0,128c0,4.418 -3.582,8 -8,8z"/>
     </g>
     <g stroke="null" id="svg_127">
      <g stroke="null" id="svg_126">
       <path stroke="null" id="svg_125" fill="#FF4F19" d="m3228.910098,2739.29227l-152,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l152,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_130">
      <g stroke="null" id="svg_129">
       <path stroke="null" id="svg_128" fill="#B9BBC1" d="m3140.910098,2803.29227l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_133">
      <g stroke="null" id="svg_132">
       <path stroke="null" id="svg_131" fill="#B9BBC1" d="m3140.910098,2835.29227l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_136">
      <g stroke="null" id="svg_135">
       <path stroke="null" id="svg_134" fill="#B9BBC1" d="m3140.910098,2867.29227l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_139">
      <g stroke="null" id="svg_138">
       <path stroke="null" id="svg_137" fill="#B9BBC1" d="m3236.910098,2803.29227l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_142">
      <g stroke="null" id="svg_141">
       <path stroke="null" id="svg_140" fill="#B9BBC1" d="m3236.910098,2835.29227l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_145">
      <g stroke="null" id="svg_144">
       <path stroke="null" id="svg_143" fill="#B9BBC1" d="m3236.910098,2867.29227l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_148">
      <g stroke="null" id="svg_147">
       <path stroke="null" id="svg_146" fill="#E9001E" d="m3180.910098,2771.29227l-104,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l104,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_150">
      <path stroke="null" id="svg_149" fill="#8B8996" d="m3036.910098,2939.29227l64,0c8.836,0 16,-7.164 16,-16l-96,0c0,8.837 7.163,16 16,16z"/>
     </g>
    </g>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_152"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_153"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_154"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_155"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_156"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_157"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_158"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_159"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_160"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_161"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_162"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_163"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_164"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_165"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_166"/>
   </g>
   <rect id="svg_194" height="54" width="91" y="176.5" x="453.5" stroke-width="1.5" stroke="#000" fill="#fff"/>
   <text style="display:none" stroke="#000" transform="matrix(0.4332424998283386,0,0,0.37037035822868347,281.3950988352299,113.64815033972263) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_195" y="216" x="441.103773" stroke-width="0" fill="#000000">New Email</text>
   <g stroke="null" style="display:none" id="svg_245">
    <path stroke="null" id="svg_216" fill="#FF9102" d="m495.412707,198.874815l-10.750018,7.162418l0,1.334799l11.337307,0l11.337307,0l0,-1.334799l-10.750018,-7.162418c-0.342582,-0.22825 -0.831997,-0.22825 -1.174579,0z"/>
    <path stroke="null" id="svg_217" fill="url(#svg_214)" d="m505.468514,214.774731l-18.937036,0c-0.516024,0 -0.934395,-0.344971 -0.934395,-0.770463l0,-14.594919c0,-0.425492 0.418327,-0.770463 0.934395,-0.770463l18.937036,0c0.516024,0 0.934395,0.344971 0.934395,0.770463l0,14.594955c0,0.425528 -0.418327,0.770427 -0.934395,0.770427z"/>
    <path stroke="null" id="svg_218" fill="url(#svg_213)" d="m506.402909,213.575083l0,0.299921c0,0.496687 -0.488883,0.899763 -1.091206,0.899763l-18.623368,0c-0.602367,0 -1.091206,-0.403113 -1.091206,-0.899763l0,-0.299921l20.805781,0z"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_219">
     <rect stroke="null" id="svg_220" fill="#C2CECE" height="15.452" width="271.104" y="3071.379256" x="7375.992281"/>
     <rect stroke="null" id="svg_221" fill="#C2CECE" height="15.452" width="271.104" y="3133.182256" x="7375.992281"/>
     <rect stroke="null" id="svg_222" fill="#C2CECE" height="15.452" width="271.104" y="3196.392256" x="7375.992281"/>
     <rect stroke="null" id="svg_223" fill="#C2CECE" height="15.452" width="271.104" y="3259.603256" x="7375.992281"/>
    </g>
    <path stroke="null" id="svg_224" fill="url(#svg_212)" d="m503.506285,206.26647c-0.932089,0 -1.786171,-0.274727 -2.450358,-0.730971l-0.259387,0.037554l5.606368,4.622779l0,-5.022198c-0.702459,0.66899 -1.739207,1.092836 -2.896623,1.092836z"/>
    <path stroke="null" id="svg_225" fill="url(#svg_211)" d="m507.337304,206.05431l0,10.53633c0,0.425309 -0.418593,0.770463 -0.934395,0.770463l-20.805825,0c-0.515802,0 -0.934395,-0.345154 -0.934395,-0.770463l0,-10.53633l11.461923,7.454514l11.212692,-7.454514z"/>
    <path stroke="null" id="svg_226" fill="url(#svg_210)" d="m507.211269,216.975871l-10.50021,-6.980827c-0.342271,-0.227555 -0.830711,-0.227555 -1.172982,0l-10.660303,7.087237c0.171446,0.170292 0.429946,0.278822 0.719311,0.278822l20.805781,0c0.345686,0 0.646803,-0.155153 0.808404,-0.385232z"/>
    <circle stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_227" fill="url(#svg_209)" r="86.387001" cy="3133.886299" cx="7680.803293"/>
    <path stroke="null" id="svg_228" fill="#FFFFFF" d="m502.642358,202.099131c0,-0.10246 0.050201,-0.183273 0.150559,-0.242402l0.745742,-0.591249c0.052551,-0.043332 0.117077,-0.065052 0.19362,-0.065052c0.086033,0 0.163685,0.018759 0.233,0.056167c0.06927,0.037481 0.103994,0.08776 0.103994,0.150765l0,3.914004c0,0.063114 -0.038316,0.113357 -0.114726,0.150802c-0.076543,0.037481 -0.164883,0.056167 -0.265285,0.056167c-0.105191,0 -0.194861,-0.018686 -0.268877,-0.056167c-0.074193,-0.037408 -0.111178,-0.087687 -0.111178,-0.150802l0,-3.287321l-0.250961,0.260173c-0.047806,0.039419 -0.100358,0.059129 -0.157743,0.059129c-0.071709,0 -0.132642,-0.026584 -0.182888,-0.079789c-0.050157,-0.053241 -0.075257,-0.111346 -0.075257,-0.174424z"/>
    <path stroke="null" id="svg_229" fill="url(#svg_208)" d="m485.8884,214.244512l0,-14.594992c0,-0.425492 0.418371,-0.770463 0.934395,-0.770463l18.937036,0c0.183376,0 0.35389,0.044209 0.498196,0.119464c-0.165548,-0.215854 -0.456864,-0.359635 -0.789512,-0.359635l-18.937036,0c-0.516024,0 -0.934395,0.344971 -0.934395,0.770463l0,14.594955c0,0.274324 0.174373,0.514495 0.436199,0.651036c-0.091266,-0.119025 -0.144882,-0.259624 -0.144882,-0.410828z"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_230"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_231"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_232"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_233"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_234"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_235"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_236"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_237"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_238"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_239"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_240"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_241"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_242"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_243"/>
    <g stroke="null" transform="matrix(0.044347160384961684,0,0,0.03656682994035653,162.8843369217975,88.7680198770122) " id="svg_244"/>
   </g>
  </g>
  <g id="svg_342">
   <g stroke="null" id="svg_99">
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_32">
     <g stroke="null" id="svg_33">
      <rect stroke="null" id="svg_34" fill="#FFFFFF" height="256" width="416" y="2621.293296" x="826.393127"/>
     </g>
     <g stroke="null" id="svg_35">
      <rect stroke="null" id="svg_36" fill="#FF4F19" height="64" width="416" y="2621.293296" x="826.393127"/>
     </g>
     <g stroke="null" id="svg_37">
      <path stroke="null" id="svg_38" fill="#5C546A" d="m1237.526127,2589.293296l-406.281,0c-20.321,0 -36.852,16.493 -36.852,36.766l0,291.234c0,4.422 3.578,8 8,8l464,0c4.422,0 8,-3.578 8,-8l0,-291.234c0,-20.273 -16.539,-36.766 -36.867,-36.766zm-411.133,280l0,-240c0,-4.418 3.582,-8 8,-8l400,0c4.418,0 8,3.582 8,8l0,240c0,4.418 -3.582,8 -8,8l-400,0c-4.418,0 -8,-3.582 -8,-8z"/>
     </g>
     <g stroke="null" id="svg_39">
      <path stroke="null" id="svg_40" fill="#B9BBC1" d="m1282.393127,2909.293296l-496,0c-4.422,0 -8,3.578 -8,8l0,0c0,17.664 14.367,32.031 32.031,32.031l447.937,0c17.664,0 32.031,-14.367 32.031,-32.031l0,0c0.001,-4.422 -3.577,-8 -7.999,-8z"/>
     </g>
     <g stroke="null" id="svg_41">
      <g stroke="null" id="svg_42">
       <path stroke="null" id="svg_43" fill="#FFD200" d="m922.393127,2661.293296l-56,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l56,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_44">
      <g stroke="null" id="svg_45">
       <path stroke="null" id="svg_46" fill="#FFFFFF" d="m1066.393127,2661.293296l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_47">
      <g stroke="null" id="svg_48">
       <path stroke="null" id="svg_49" fill="#FFFFFF" d="m1106.393127,2661.293296l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_50">
      <g stroke="null" id="svg_51">
       <path stroke="null" id="svg_52" fill="#FFFFFF" d="m1146.393127,2661.293296l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_53">
      <g stroke="null" id="svg_54">
       <path stroke="null" id="svg_55" fill="#FFFFFF" d="m1186.393127,2661.293296l-8,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l8,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_56">
      <path stroke="null" id="svg_57" fill="#53DCFF" d="m1002.393127,2853.293296l-136,0c-4.418,0 -8,-3.582 -8,-8l0,-128c0,-4.418 3.582,-8 8,-8l136,0c4.418,0 8,3.582 8,8l0,128c0,4.418 -3.582,8 -8,8z"/>
     </g>
     <g stroke="null" id="svg_58">
      <g stroke="null" id="svg_59">
       <path stroke="null" id="svg_60" fill="#FF4F19" d="m1194.393127,2725.293296l-152,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l152,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_61">
      <g stroke="null" id="svg_62">
       <path stroke="null" id="svg_63" fill="#B9BBC1" d="m1106.393127,2789.293296l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_64">
      <g stroke="null" id="svg_65">
       <path stroke="null" id="svg_66" fill="#B9BBC1" d="m1106.393127,2821.293296l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_67">
      <g stroke="null" id="svg_68">
       <path stroke="null" id="svg_69" fill="#B9BBC1" d="m1106.393127,2853.293296l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_70">
      <g stroke="null" id="svg_71">
       <path stroke="null" id="svg_72" fill="#B9BBC1" d="m1202.393127,2789.293296l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_73">
      <g stroke="null" id="svg_74">
       <path stroke="null" id="svg_75" fill="#B9BBC1" d="m1202.393127,2821.293296l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_76">
      <g stroke="null" id="svg_77">
       <path stroke="null" id="svg_78" fill="#B9BBC1" d="m1202.393127,2853.293296l-64,0c-4.422,0 -8,-3.578 -8,-8s3.578,-8 8,-8l64,0c4.422,0 8,3.578 8,8s-3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_79">
      <g stroke="null" id="svg_80">
       <path stroke="null" id="svg_81" fill="#E9001E" d="m1146.393127,2757.293296l-104,0c-4.422,0 -8,-3.578 -8,-8c0,-4.422 3.578,-8 8,-8l104,0c4.422,0 8,3.578 8,8c0,4.422 -3.578,8 -8,8z"/>
      </g>
     </g>
     <g stroke="null" id="svg_82">
      <path stroke="null" id="svg_83" fill="#8B8996" d="m1002.393127,2925.293296l64,0c8.836,0 16,-7.164 16,-16l-96,0c0,8.837 7.163,16 16,16z"/>
     </g>
    </g>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_84"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_85"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_86"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_87"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_88"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_89"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_90"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_91"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_92"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_93"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_94"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_95"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_96"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_97"/>
    <g stroke="null" transform="matrix(0.21430147800284244,0,0,0.21430147800284244,-158.17187479468203,-388.09743160187895) " id="svg_98"/>
   </g>
   <rect id="svg_196" height="53" width="91" y="176.5" x="17.5" stroke-width="1.5" stroke="#000" fill="#fff"/>
   <text stroke="#000" transform="matrix(0.3515523374080658,0,0,0.4200169541605252,26.91057799756527,120.03562518666507) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_197" y="170.298868" x="24.43284" stroke-width="0" fill="#000000">Sending Email..</text>
     <text stroke="#000" transform="matrix(0.3515523374080658,0,0,0.4200169541605252,26.91057799756527,120.03562518666507) " xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="24" id="svg_sent" y="170.298868" x="24.43284" stroke-width="0" fill="#000000"style="display:none" >Email Sent</text>
   <g stroke="null" id="svg_267">
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_250">
     <path stroke="null" id="svg_251" d="m34.751546,86.111009l-2.046,8.041l-4.61,-3.69l6.656,-4.351zm-0.314,-1.695l-19.708,0l-0.669,0l7.865,6.891l12.512,-6.891zm-20.92,1.449l-1.95,7.501l5.472,-4.209l-3.522,-3.292zm8.449,7.882c-0.101,0.068 -0.228,0.104 -0.349,0.104s-0.242,-0.035 -0.347,-0.104l-3.581,-2.982l-6.749,5.229c-0.054,0.039 -0.11,0.069 -0.173,0.09l0,0.069l-1.133,4.097l21.611,0l0.938,-4.168l0.039,-0.199l-5.652,-4.58l-4.604,2.444zm-10.846,-0.998l-10.809,0l-0.632,1.212l11.096,0.024l0.345,-1.236zm-11.886,7.146l9.834,0.041l0.372,-1.215l-9.631,-0.039l-0.575,1.213zm10.693,-3.173l0.323,-1.216l-6.945,0l-0.468,1.216l7.09,0z"/>
    </g>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_252"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_253"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_254"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_255"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_256"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_257"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_258"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_259"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_260"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_261"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_262"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_263"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_264"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_265"/>
    <g stroke="null" transform="matrix(1.3949033873352545,0,0,1.3949033873352545,35.79637164494943,79.67317142688916) " id="svg_266"/>
   </g>
  </g>
 </g>
</svg>
    </div>
  </div>



  </div>
</div>
</template>
<script type="text/javascript">
  import anime from 'animejs'   

require('hover.css');
require('animate.css'); 
export default {

  data() {
    return {
      updatedN: false,
      
    }
  },

  methods: {

    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    async send(){
      document.getElementById("email").style.display = "none";
      document.getElementById("simulate").style.display = "block";
      this.sendPakcage();
      

    },
    async sendPakcage(){
    anime({
        targets: '#svg_193',
         translateX: 320,
         loop: 3,
        easing: 'easeInOutQuart'
      });
 
    await this.sleep(3000);
    document.getElementById("svg_193").style.display = "none";
    document.getElementById("svg_195").style.display = "block";
    document.getElementById("svg_245").style.display = "block";
    document.getElementById("svg_197").style.display = "none";
    document.getElementById("svg_sent").style.display = "block";
    document.getElementById("svg_267").style.display = "none";

   
    
   
    }

      
            

  
}
}
</script>

<style scoped>
.input-container {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}

/* Style the form icons */
.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}
.btn-cons {
margin-right: 5px;
min-width: 120px;
margin-bottom: 8px;
}
.btn-success {
color: #fff;
background-color: #5cb85c;
border-color: #4cae4c;
}
input[type=text]:focus {
  border: 1px solid #555;
}
  input{
    width: 74%;
  outline: none;
   padding: 12px 20px;
   border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
    background-image: url('');
  }
  textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}


/* Browser window */
.browser-window {
  z-index: 1;
  position: relative;
  border: 3px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #f1f1f1;
  transform-origin: left top 0;
}

/* Container for columns and the top "toolbar" */
.row {
  padding: 10px;
  background: #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* Create three unequal columns that floats next to each other */
.column { float: left; }
.left { width: 20%; }
.right { width: 10%; }
.middle { width: 70%; }

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Three dots */
.dot {
  margin: 4px 2px 0 2px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

/* Style the input field */
.row input[type=text] {
  width: 98%;
  border-radius: 3px;
  border: none;
  background-color: white;
  margin-top: -8px;
  height: 25px;
  color: #666;
  padding: 5px;
}

.nav {
  display: inline-block;
  padding: 2px 10px;
}

.nav i {
  padding: 0 4px;
  color: #aaa;
}

/* Three bars (hamburger menu) */
.bar {
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
}


/* Page content */
.content {
  padding: 10px;
  background-color: white;
}

</style>