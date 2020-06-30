import React from "react";

/* CSS */

// body { margin:0; padding:0; background-color:#f1f1f1; }
// 		#main { margin:0; padding:0; border:1px solid #ddd; background-color:white; width:800px; height:500px; margin:10px auto; }
// 		.btn-group-wraper { position:absolute; top:30px; left:65px; }
// 		.shadow { position:absolute; width:100px; height:100px; /*border-radius:15px;*/ box-shadow:0 0 15px white; box-shadow:inset 0 0 155px white; background-color:#000 !important; opacity:.15 !important; -webkit-transform: rotateX(90deg) translateZ(-100px); -moz-transform: rotateX(90deg) translateZ(-100px); }
// 		#container { width:100%; -webkit-perspective:800px; -moz-perspective:800px; perspective:800px; position:relative; }

// 		#shape {
// 			position:relative; margin:0 auto; top:170px; width:125px; height:125px;
// 			-webkit-transform-style: preserve-3d;
// 			-moz-transform-style: preserve-3d;
//         transform-style: preserve-3d;
// 			-webkit-transform: rotateX(-5deg) rotateY(-30deg);
// 			-moz-transform: rotateX(-5deg) rotateY(-30deg);
//         transform: rotateX(-5deg) rotateY(-30deg);
// 			-webkit-transition: -webkit-transform 2s;
// 			-moz-transition: -moz-transform 2s;
//          transition: transform 2s;
// 		}
// 		@-webkit-keyframes spin {
// 			/*from { -webkit-transform: rotateX(0) rotateY(0); }*/
// 			to	 { -webkit-transform: rotateX(360deg) rotateY(360deg); }
// 		}
// 		@-moz-keyframes spin {
// 			/*from { -moz-transform: rotateX(0) rotateY(0); }*/
// 			to	 { -moz-transform: rotateX(360deg) rotateY(360deg); }
// 		}
//       @keyframes spin {
// 			/*from { transform: rotateX(0) rotateY(0); }*/
// 			to	 { transform: rotateX(360deg) rotateY(360deg); }
// 		}
// 		#shape > div { position:absolute; width:125px; height:125px; border:1px solid white; background-color:#999; opacity:.5; }
// 		#shape a { color:black; text-decoration:none; text-align:center; width:100%; height:100%; margin-top:30px; display:block; font-size:50px; }
// 		#shape .ft { -webkit-transform: translateZ(63px); -moz-transform: translateZ(63px); transform: translateZ(63px); }
// 		#shape .rt { -webkit-transform: rotateY(90deg) translateZ(63px); -moz-transform: rotateY(90deg) translateZ(63px); transform: rotateY(90deg) translateZ(63px); }
// 		#shape .bk { -webkit-transform: rotateY(180deg) translateZ(63px); -moz-transform: rotateY(180deg) translateZ(63px); transform: rotateY(180deg) translateZ(63px); }
// 		#shape .lt { -webkit-transform: rotateY(270deg) translateZ(63px); -moz-transform: rotateY(270deg) translateZ(63px); transform: rotateY(270deg) translateZ(63px); }
// 		#shape .tp { -webkit-transform: rotateX(90deg) translateZ(63px); -moz-transform: rotateX(90deg) translateZ(63px); transform: rotateX(90deg) translateZ(63px); }
// 		#shape .bm { -webkit-transform: rotateX(270deg) rotateY(0deg) translateZ(63px); -moz-transform: rotateX(270deg) rotateY(0deg) translateZ(63px); transform: rotateX(270deg) rotateY(0deg) translateZ(63px); }

// 		/*transitions*/
// 		#shape.show-ft { -webkit-transform: translateZ(63px); -moz-transform: translateZ(63px); transform: translateZ(63px); }
// 		#shape.show-rt { -webkit-transform: rotateX(360deg) rotateY(-90deg); -moz-transform: rotateX(360deg) rotateY(-90deg); transform: rotateX(360deg) rotateY(-90deg); }
// 		#shape.show-bk { -webkit-transform: rotateY(180deg); -moz-transform: rotateY(180deg); transform: rotateY(180deg); }
// 		#shape.show-lt { -webkit-transform: rotateY(90deg); -moz-transform: rotateY(90deg); transform: rotateY(90deg); }
// 		#shape.show-tp { -webkit-transform: scale(1.5); -moz-transform: scale(1.5); -webkit-transform: rotateX(-90deg) rotateY(-360deg); -moz-transform: rotateX(-90deg) rotateY(-360deg); transform: rotateX(-90deg) rotateY(-360deg); }
// 		#shape.show-bm { -webkit-transform: rotateX(90deg) rotateY(360deg); -moz-transform: rotateX(90deg) rotateY(360deg); transform: rotateX(90deg) rotateY(360deg); }
// 		/*zoom in*/
// 		#shape.zi 	 { -webkit-transform: scale(1.5,1.5); -moz-transform: scale(1.5,1.5); transform: scale(1.5,1.5); }
// 		/*animations*/
// 		#shape.spin { -webkit-animation: spin 5s infinite linear; -moz-animation: spin 5s infinite linear; animation: spin 5s infinite linear; }
// 		#shape 		{ -webkit-transition: all 1s; -moz-transition: all 1s; transition: all 1s; -webkit-transform: scale(1); -webkit-transform: rotateX(-5deg) rotateY(-30deg); -moz-transform: scale(1); -moz-transform: rotateX(-5deg) rotateY(-30deg); transform: scale(1); transform: rotateX(-5deg) rotateY(-30deg); }


/* JS */

// $(document).ready(function(){
//   $('button').click(function(){
//     $('button').removeClass('active');
//     $(this).addClass('active');
//   });
//   $('.ft').click(function(){ $('#shape').removeClass().addClass('show-ft'); });
//   $('.rt').click(function(){ $('#shape').removeClass().addClass('show-rt'); });
//   $('.bk').click(function(){ $('#shape').removeClass().addClass('show-bk'); });
//   $('.lt').click(function(){ $('#shape').removeClass().addClass('show-lt'); });
//   $('.tp').click(function(){ $('#shape').removeClass().addClass('show-tp'); });
//   $('.bm').click(function(){ $('#shape').removeClass().addClass('show-bm'); });

//   $('.zi').click(function(){ $('#shape').removeClass('zi').addClass('zi'); });
//   $('.zo').click(function(){ $('#shape').removeClass('zi'); });

//   $('.spinstart').click(function(){ $('#shape').addClass('spin'); });
//   $('.spinstop').click(function(){ $('#shape').removeClass('spin'); });
// });

export default function Cube() {
  return (
    <div id="main">
      <div id="container">
        <div class="btn-group-wraper">
          <div>
            <button class="btn gray zi">zoom in</button>
            <button class="btn gray zo">zoom out</button>
          </div>
          <div>
            <button class="ft">1</button>
            <button class="rt">2</button>
            <button class="bk">3</button>
            <button class="lt">4</button>
            <button class="tp">5</button>
            <button class="bm">6</button>
          </div>
          <div>
            <button class="spinstart">spin start</button>
            <button class="spinstop">spin stop</button>
          </div>
        </div>
        <div id="shape">
          <div class="ft">
            <a href="#!">1</a>
          </div>
          <div class="rt">
            <a href="#!">2</a>
          </div>
          <div class="bk">
            <a href="#!">3</a>
          </div>
          <div class="lt">
            <a href="#!">4</a>
          </div>
          <div class="tp">
            <a href="#!">5</a>
          </div>
          <div class="bm">
            <a href="#!">6</a>
          </div>
        </div>
      </div>
    </div>
  );
}
