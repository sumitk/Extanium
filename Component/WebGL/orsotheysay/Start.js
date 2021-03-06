alert('3D demo ported to Titanium.');

// Initialize the DOM
function bootstrap() {
    
    var markup = "<style>body {font-family: 'Georgia';font-style: italic;background-color: #000000;color: #ffffff;margin: 0px;overflow: hidden;} a  {color: #ffffff;text-decoration: none;} a:hover {text-decoration: underline;}</style><audio id='audio' src='../Component/WebGL/orsotheysay/files/supersole-dream-of-sorts.mp3' autobuffer></audio><div id='launcher' style='padding-top: 10px; text-align: center'>Or so they say... by xplsv<br/><span  style='color: #808080'>fastmade javascript demo<br/><br/>code: <a href='http://mrdoob.com'>mr.doob</a><br/>direction: <a href='http://trace.xplsv.com'>trace</a><br/>music: <a href='http://supersole.net'>supersole</a><br/><br/><a href='README' target='_blank'>readme</a>,<a  href='http://mrdoob.com/blog/post/702' target='_blank'>blog post</a>,<a href='http://github.com/mrdoob/xplsv_orsotheysay' target='_blank'>source code</a>, <a href='http://capped.tv/xplsv-or_so_they_say' target='_blank'>video</a></span><br/><br/><br/><br/><span style='cursor:pointer'  onClick='start( 0 );'>START</span></div>";
    
    document.body.innerHTML = markup;
}
bootstrap();



function render() {
    try {
        var sequencer, timeline, audio, cueAudioTime = 0, cueTime = 0, playing = true,
        keys = [ 0, 6254, 31692, 55112, 74891, 109163, 133196, 165113, 198992 ],
        container, stats;

        var camera, renderer;

        window.init = function() {

            container = document.createElement( 'div' );

            camera = new THREE.Camera( 42, window.innerWidth / window.innerHeight, 1, 20000 );

            renderer = new THREE.CanvasRenderer();
            renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
            renderer.autoClear = false;
            container.appendChild( renderer.domElement );

            stats = new Stats();
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.top = '0px';
            stats.domElement.style.left = '0px';
            stats.domElement.style.visibility = 'visible';
           
            window.onWindowResizeHandler();
            window.addEventListener( 'resize', window.onWindowResizeHandler, false );

            // Timeline

            sequencer = new Sequencer();

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 0, 0, 200 ), new THREE.Vector3( 0, 0, 10000 )  ), keys[ 0 ] - 1, keys[ 1 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3(), new THREE.Vector3() ), keys[ 0 ] - 1, keys[ 1 ] - 1 );
            sequencer.add( new Part1Effect( camera, renderer ), keys[ 0 ], keys[ 1 ] );

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 0, 0, 1000 ), new THREE.Vector3( 0, 0, 400 ) ), keys[ 1 ] - 1, keys[ 2 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3(), new THREE.Vector3() ), keys[ 1 ] - 1, keys[ 2 ] - 1 );
            sequencer.add( new Part2Effect( camera, renderer ), keys[ 1 ], keys[ 2 ] );

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 0, 200, 200 ), new THREE.Vector3( 0, - 200, 300 ) ), keys[ 2 ] - 1, keys[ 3 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3( 200, 0, 0 ), new THREE.Vector3( - 100, 0, 300 ) ), keys[ 2 ] - 1, keys[ 3 ] - 1 );
            sequencer.add( new Part3Effect( camera, renderer ), keys[ 2 ], keys[ 3 ] );

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 0, 0, - 5000 ), new THREE.Vector3( 0, 0, 4000 ) ), keys[ 3 ] - 1, keys[ 4 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3( 0, 0, - 5000 ), new THREE.Vector3( 0, 0,  - 2000 ) ), keys[ 3 ] - 1, keys[ 4 ] - 1 );
            sequencer.add( new Part4Effect( camera, renderer ), keys[ 3 ], keys[ 4 ] );

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 0, 1000, 2000 ), new THREE.Vector3( -100, 300, 400 ) ), keys[ 4 ] - 1, keys[ 5 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3( 500,  - 500, 1000 ), new THREE.Vector3( 0, -50, 0 ) ), keys[ 4 ] - 1, keys[ 5 ] - 1 );
            sequencer.add( new Part5Effect( camera, renderer ), keys[ 4 ], keys[ 5 ] );

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 500, 0, 500 ), new THREE.Vector3( 0, 200, 500 ) ), keys[ 5 ] - 1, keys[ 6 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3( - 100, - 600, 0 ), new THREE.Vector3( 50, - 100, 0 ) ), keys[ 5 ] - 1, keys[ 6 ] - 1 );
            sequencer.add( new Part6Effect( camera, renderer ), keys[ 5 ], keys[ 6 ] );

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 0, 0, 300 ), new THREE.Vector3( 0, 0, 1000 ) ), keys[ 6 ] - 1, keys[ 7 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3(), new THREE.Vector3() ), keys[ 6 ] - 1, keys[ 7 ] - 1 );
            sequencer.add( new Part7Effect( camera, renderer ), keys[ 6 ], keys[ 7 ] );

            sequencer.add( new Vector3TravelEffect( camera.position, new THREE.Vector3( 400, 0, 400 ), new THREE.Vector3( 0, 200, 800 ) ), keys[ 7 ] - 1, keys[ 8 ] - 1 );
            sequencer.add( new Vector3TravelEffect( camera.target.position, new THREE.Vector3( 0, 100, 0 ), new THREE.Vector3( 0, - 100, 0 ) ), keys[ 7 ] - 1, keys[ 8 ] - 1 );
            sequencer.add( new Part8Effect( camera, renderer ), keys[ 7 ], keys[ 8 ] );

            sequencer.add( new Part9Effect( camera, renderer ), keys[ 8 ], keys[ 8 ] + 2000 );

        }

        window.start = function( key ) {

            document.body.removeChild( document.getElementById( 'launcher' ) );
            audio = document.getElementById( 'audio' );
            keyToSet = keys[ key ] / 1000;
            
            if (keyToSet > 0) {
                audio.currentTime = keyToSet;
            }
            audio.play();
            
            cueAudioTime = keys[ key ];
            cueTime = new Date().getTime();
            
            document.body.appendChild( container );
            document.body.appendChild( stats.domElement );
        
            document.addEventListener( 'keydown', window.onDocumentKeyDownHandler, false );

            setInterval( loop, 1000 / 120 );
        }

        window.onDocumentKeyDownHandler = function( event ) {

            switch( event.keyCode ) {

                case 32:

                    audio.paused ? audio.play() : audio.pause();
                    playing = !audio.paused;
                    break;

                case 37:

                    audio.currentTime -= 1;
                    break;

                case 39:

                    audio.currentTime += 1;
                    break;

                case 188:
                    stats.domElement.style.visibility = stats.domElement.style.visibility == 'hidden' ? 'visible' : 'hidden';
                    break;

            }
            cueTime = new Date().getTime();
            cueAudioTime = audio.currentTime * 1000;

        }

        window.onWindowResizeHandler = function( event ) {

            var width = window.innerWidth,
            height = window.innerHeight;

            camera.projectionMatrix = THREE.Matrix4.makePerspective( 42, width / height, 1, 20000 );

            var blending = renderer.domElement.getContext( '2d' ).globalCompositeOperation;

            renderer.setSize( width, height );
            renderer.domElement.style.width = window.innerWidth + 'px';
            renderer.domElement.style.height = window.innerHeight + 'px';
            renderer.domElement.getContext( '2d' ).globalCompositeOperation = blending;

        }

        window.loop = function() {

            try {
                if ( playing ) {
                    sequencer.update( new Date().getTime() - cueTime + cueAudioTime );
                }

                stats.update();
            } catch (e) {
                alert(e);
            }
        }
        
        
        init();

    } catch (e) {
        alert("An error occurted executing the demo.");
        alert(e);
    }
}

// Require additional scripts

Web.include('Component/WebGL/orsotheysay/js/geometry/Sphere.js', 'sphereReady');
Web.include('Component/WebGL/orsotheysay/js/geometry/Plane.js', 'planeReady');
Web.include('Component/WebGL/orsotheysay/js/geometry/Asteroid.js', 'asteroidsReady');
Web.include('Component/WebGL/orsotheysay/js/Sequencer.js', 'sequencerReady');
Web.include('Component/WebGL/orsotheysay/js/effects/Effect.js', 'effectReady');

Web.include('Component/WebGL/orsotheysay/js/effects/Part1Effect.js', 'p1Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part2Effect.js', 'p2Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part3Effect.js', 'p3Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part4Effect.js', 'p4Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part5Effect.js', 'p5Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part6Effect.js', 'p6Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part7Effect.js', 'p7Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part8Effect.js', 'p8Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Part9Effect.js', 'p9Ready');
Web.include('Component/WebGL/orsotheysay/js/effects/Vector3TravelEffect.js', 'travelReady');

// Include GL module to create a scene
Web.onMultiReady('sphereReady', 'planeReady', 'asteroidsReady', 
'sequencerReady', 'effectReady', 'p1Ready', 
'p2Ready', 'p3Ready', 'p4Ready', 
'p5Ready', 'p6Ready', 'p7Ready', 
'p8Ready', 'p9Ready', 'travelReady', function() {

   render();
});