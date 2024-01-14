export function carouselAnimation() {    
    // set initial state of items
    gsap.set('.cards li', {xPercent: 400, opacity: 0, scale: 0});
    
    const spacing = 0.1;

    const cards = gsap.utils.toArray('.cards li');

    // this function will get called for each element in the buildSeamlessLoop() function, and we just need to return an animation that'll get inserted into a master timeline, spaced
    const animateFunc = element => {
        const tl = gsap.timeline();
        tl.fromTo(
                element,
                {scale: 0, opacity: 0},
                {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}
            )
            .fromTo(
                element,
                {xPercent: 400},
                {xPercent: -400, duration: 1, ease: "none", immediateRender: false},
                0
            );

        return tl;
    };

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);

    const playHead = {offset: 0}; // a proxy object we use to simulate the playHead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()); // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
    const scrub = gsap.to(playHead, { // we reuse this tween to smoothly scrub the playHead on the seamlessLoop
        offset: 0,
        onUpdate() {
            seamlessLoop.time(wrapTime(playHead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
        },
        duration: 0.5,
        ease: "power3",
        paused: true
    }); 
    
    function buildSeamlessLoop(items, spacing, animateFunc) {
        let rawSequence = gsap.timeline({paused: true}); // this is where all the "real" animations live
        let seamlessLoop = gsap.timeline({ // this merely scrubs the playHead of the rawSequence so that it appears to seamlessly loop
            paused: true,
            repeat: -1, // to accommodate infinite scrolling/looping
            onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
                this._time === this._dur && (this._tTime += this._dur - 0.01);
            },
            onReverseComplete() {
                this.totalTime(this.rawTime() + this.duration() * 100); // seamless looping backwards
            }
        });

        let cycleDuration = spacing * items.length;
        let dur; // the duration of just one animateFunc() (we'll populate it in the .forEach() below...
    
        // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playHead only on the 2nd cycle
        items.concat(items).concat(items).forEach((item, i) => {
            let anim = animateFunc(items[i % items.length]);
            rawSequence.add(anim, i * spacing);
            dur || (dur = anim.duration());
        });
    
        // animate the playHead linearly from the start of the 2nd cycle to its end (so we'll have one "extra" cycle at the beginning and end)
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
            scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.0005;
            scrub.invalidate().restart(); // same thing as we do in the ScrollTrigger's onUpdate
        }
    });
}