export function testAnimation() {    
    // set initial state of items
    gsap.set('.cards li', {xPercent: 400, opacity: 0, scale: 0});
    
    const spacing = 0.1, // spacing of the cards (stagger)
        snapTime = gsap.utils.snap(spacing), // we'll use this to snapTime the playhead on the seamlessLoop
        cards = gsap.utils.toArray('.cards li'),
        // this function will get called for each element in the buildSeamlessLoop() function, and we just need to return an animation that'll get inserted into a master timeline, spaced
        animateFunc = element => {
            const tl = gsap.timeline();
            tl.fromTo(element, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false})
              .fromTo(element, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, 0);
            return tl;
        },
        seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
        playhead = {offset: 0}, // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
        wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
        scrub = gsap.to(playhead, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
            offset: 0,
            onUpdate() {
                seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
            },
            duration: 0.5,
            ease: "power3",
            paused: true
        });
    
    
    function buildSeamlessLoop(items, spacing, animateFunc) {
        let rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
            seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
                paused: true,
                repeat: -1, // to accommodate infinite scrolling/looping
                onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
                    this._time === this._dur && (this._tTime += this._dur - 0.01);
                },
          onReverseComplete() {
            this.totalTime(this.rawTime() + this.duration() * 100); // seamless looping backwards
          }
            }),
            cycleDuration = spacing * items.length,
            dur; // the duration of just one animateFunc() (we'll populate it in the .forEach() below...
    
        // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playhead only on the 2nd cycle
        items.concat(items).concat(items).forEach((item, i) => {
            let anim = animateFunc(items[i % items.length]);
            rawSequence.add(anim, i * spacing);
            dur || (dur = anim.duration());
        });
    
        // animate the playhead linearly from the start of the 2nd cycle to its end (so we'll have one "extra" cycle at the beginning and end)
        seamlessLoop.fromTo(rawSequence, {
            time: cycleDuration + dur / 2
        }, {
            time: "+=" + cycleDuration,
            duration: cycleDuration,
            ease: "none"
        });
        return seamlessLoop;
    }
    
    
    // below is the dragging functionality (mobile-friendly too)...
    Draggable.create(".drag-proxy", {
      type: "x",
      trigger: ".cards",
      onPress() {
        this.startOffset = scrub.vars.offset;
      },
      onDrag() {
        scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
        scrub.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
      },
      onDragEnd() {
        scrollToOffset(scrub.vars.offset);
      }
    });
    
    
    
    
    
    
    
    
    // if you want a more efficient timeline, but it's a bit more complex to follow the code, use this function instead...
    // function buildSeamlessLoop(items, spacing, animateFunc) {
    // 	let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
    // 		startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
    // 		loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime
    // 		rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
    // 		seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
    // 			paused: true,
    // 			repeat: -1, // to accommodate infinite scrolling/looping
    // 			onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
    // 				this._time === this._dur && (this._tTime += this._dur - 0.01);
    // 			}
    // 		}),
    // 		l = items.length + overlap * 2,
    // 		time, i, index;
    //
    // 	// now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
    // 	for (i = 0; i < l; i++) {
    // 		index = i % items.length;
    // 		time = i * spacing;
    // 		rawSequence.add(animateFunc(items[index]), time);
    // 		i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
    // 	}
    //
    // 	// here's where we set up the scrubbing of the playhead to make it appear seamless.
    // 	rawSequence.time(startTime);
    // 	seamlessLoop.to(rawSequence, {
    // 		time: loopTime,
    // 		duration: loopTime - startTime,
    // 		ease: "none"
    // 	}).fromTo(rawSequence, {time: overlap * spacing + 1}, {
    // 		time: startTime,
    // 		duration: startTime - (overlap * spacing + 1),
    // 		immediateRender: false,
    // 		ease: "none"
    // 	});
    // 	return seamlessLoop;
    // }
}