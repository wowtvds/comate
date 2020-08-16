(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/transition/index.mjs");
/* harmony import */ var svelte_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte/easing */ "./node_modules/svelte/easing/index.mjs");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* src/routes/index.svelte generated by Svelte v3.24.1 */






const file = "src/routes/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-163kunk-style";
	style.textContent = ".root.svelte-163kunk{display:flex;flex-direction:column;justify-content:space-between;align-items:center;max-width:420px;margin:0 auto;padding:30px 20px 50px}.logo__text.svelte-163kunk{font-size:30px;font-weight:200}.description__main.svelte-163kunk{margin-top:20px;font-size:18px}.description__extra.svelte-163kunk{display:block;margin-top:15px;font-size:14px;color:var(--silver-color-faded)}.highlight.svelte-163kunk{color:var(--highlight-color)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+V2VsY29tZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuXHRpbXBvcnQgeyBlbGFzdGljT3V0LCBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHRpbXBvcnQgeyBCdXR0b24sIEljb24gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuXHRsZXQgbG9hZGVkID0gZmFsc2U7XG5cblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0bG9hZGVkID0gdHJ1ZTtcblx0fSk7XG48L3NjcmlwdD5cblxueyNpZiBsb2FkZWR9XG5cdDxtYWluIGNsYXNzPVwicm9vdFwiPlxuXHRcdDxoMVxuXHRcdFx0aW46Zmx5PXt7b3BhY2l0eTogMCwgeTogLTMwLCBlYXNpbmc6IGVsYXN0aWNPdXQsIGR1cmF0aW9uOiAxMDAwLCBkZWxheTogMzAwfX1cblx0XHRcdG91dDpmbHk9e3tvcGFjaXR5OiAwLCB5OiAtMzAsIGVhc2luZzogcXVpbnRPdXR9fVxuXHRcdFx0Y2xhc3M9XCJsb2dvX190ZXh0XCJcblx0XHQ+XG5cdFx0XHRjb21hdGVcblx0XHQ8L2gxPlxuXG5cdFx0PGRpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0aW46Zmx5PXt7b3BhY2l0eTogMCwgeDogMjUwLCB5OiAtMjUwLCBlYXNpbmc6IHF1aW50T3V0LCBkdXJhdGlvbjogODAwfX1cblx0XHRcdFx0b3V0OmZseT17e29wYWNpdHk6IDAsIHg6IC0yNTAsIHk6IDI1MCwgZWFzaW5nOiBxdWludE91dCwgZGVsYXk6IDIwMCwgZHVyYXRpb246IDgwMH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0c3JjPVwiL2xvZ28uc3ZnXCJcblx0XHRcdFx0XHR3PVwiMTAwXCJcblx0XHRcdFx0PlxuXHRcdFx0XHQ8L0ljb24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PHBcblx0XHRcdFx0Y2xhc3M9XCJkZXNjcmlwdGlvbl9fbWFpblwiXG5cdFx0XHRcdGluOmZseT17e29wYWNpdHk6IDAsIHk6IDMwLCBlYXNpbmc6IHF1aW50T3V0LCBkZWxheTogMTAwfX1cblx0XHRcdFx0b3V0OmZseT17e29wYWNpdHk6IDAsIHk6IDMwLCBlYXNpbmc6IHF1aW50T3V0LCBkZWxheTogMTAwfX1cblx0XHRcdD5cblx0XHRcdFx0Q29tYXRlIGlzIGFuIGhvbmVzdCBhbGFybSBjbG9jayB0byA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPmhlbHAgeW91IHNsZWVwLjwvc3Bhbj4gVGhlIGF2ZXJhZ2UgaHVtYW4gYmVpbmcgbmVlZHMgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj44IGhvdXJzIG9mIHNsZWVwPC9zcGFuPiBwZXIgbmlnaHQuXG5cdFx0XHQ8L3A+XG5cblx0XHRcdDxzbWFsbFxuXHRcdFx0XHRjbGFzcz1cImRlc2NyaXB0aW9uX19leHRyYVwiXG5cdFx0XHRcdGluOmZseT17e29wYWNpdHk6IDAsIHk6IDMwLCBlYXNpbmc6IHF1aW50T3V0LCBkZWxheTogMjAwfX1cblx0XHRcdFx0b3V0OmZseT17e29wYWNpdHk6IDAsIHk6IDMwLCBlYXNpbmc6IHF1aW50T3V0fX1cblx0XHRcdD5cblx0XHRcdFx0V2l0aCBjb21hdGUgeW91IGRvbid0IHNsZWVwIHRpbGwgN0FNLCB5b3Ugc2xlZXAgdGlsbCB5b3UndmUgaGFkIGVub3VnaCBzbGVlcCB0byBmdW5jdGlvbiBwcm9wZXJseSBldmVyeWRheS5cblx0XHRcdDwvc21hbGw+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2XG5cdFx0XHRpbjpmbHk9e3tvcGFjaXR5OiAwLCB5OiA1MCwgZWFzaW5nOiBlbGFzdGljT3V0LCBkdXJhdGlvbjogMTAwMCwgZGVsYXk6IDMwMH19XG5cdFx0XHRvdXQ6Zmx5PXt7b3BhY2l0eTogMCwgeTogNTAsIGVhc2luZzogcXVpbnRPdXR9fVxuXHRcdD5cblx0XHRcdDxCdXR0b24gdXJsPVwiL2FwcFwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInUtaWNvbi1zcGFjaW5nXCI+UHV0IG1lIGluIGEgY29tYTwvc3Bhbj5cblxuXHRcdFx0XHQ8SWNvblxuXHRcdFx0XHRcdHNyYz1cIi9hcnJvdy5zdmdcIlxuXHRcdFx0XHRcdHc9XCIxOFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0PC9JY29uPlxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvbWFpbj5cbnsvaWZ9XG5cbjxzdHlsZT5cblx0LnJvb3Qge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdG1heC13aWR0aDogNDIwcHg7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0cGFkZGluZzogMzBweCAyMHB4IDUwcHg7XG5cdH1cblxuXHQubG9nb19fdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiAyMDA7XG5cdH1cblxuXHQuZGVzY3JpcHRpb25fX21haW4ge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cblx0XHRmb250LXNpemU6IDE4cHg7XG5cdH1cblxuXHQuZGVzY3JpcHRpb25fX2V4dHJhIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXG5cdFx0Y29sb3I6IHZhcigtLXNpbHZlci1jb2xvci1mYWRlZCk7XG5cdH1cblxuXHQuaGlnaGxpZ2h0IHtcblx0XHRjb2xvcjogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRUMsS0FBSyxlQUFDLENBQUMsQUFDTixPQUFPLENBQUUsSUFBSSxDQUNiLGNBQWMsQ0FBRSxNQUFNLENBQ3RCLGVBQWUsQ0FBRSxhQUFhLENBQzlCLFdBQVcsQ0FBRSxNQUFNLENBRW5CLFNBQVMsQ0FBRSxLQUFLLENBQ2hCLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUNkLE9BQU8sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQUFDeEIsQ0FBQyxBQUVELFdBQVcsZUFBQyxDQUFDLEFBQ1osU0FBUyxDQUFFLElBQUksQ0FDZixXQUFXLENBQUUsR0FBRyxBQUNqQixDQUFDLEFBRUQsa0JBQWtCLGVBQUMsQ0FBQyxBQUNuQixVQUFVLENBQUUsSUFBSSxDQUVoQixTQUFTLENBQUUsSUFBSSxBQUNoQixDQUFDLEFBRUQsbUJBQW1CLGVBQUMsQ0FBQyxBQUNwQixPQUFPLENBQUUsS0FBSyxDQUNkLFVBQVUsQ0FBRSxJQUFJLENBRWhCLFNBQVMsQ0FBRSxJQUFJLENBRWYsS0FBSyxDQUFFLElBQUksb0JBQW9CLENBQUMsQUFDakMsQ0FBQyxBQUVELFVBQVUsZUFBQyxDQUFDLEFBQ1gsS0FBSyxDQUFFLElBQUksaUJBQWlCLENBQUMsQUFDOUIsQ0FBQyJ9 */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

// (18:0) {#if loaded}
function create_if_block(ctx) {
	let main;
	let h1;
	let t0;
	let h1_intro;
	let h1_outro;
	let t1;
	let div1;
	let div0;
	let icon;
	let div0_intro;
	let div0_outro;
	let t2;
	let p;
	let t3;
	let span0;
	let t4;
	let t5;
	let span1;
	let t6;
	let t7;
	let p_intro;
	let p_outro;
	let t8;
	let small;
	let t9;
	let small_intro;
	let small_outro;
	let t10;
	let div2;
	let button;
	let div2_intro;
	let div2_outro;
	let current;

	icon = new _components__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
			props: { src: "/logo.svg", w: "100" },
			$$inline: true
		});

	button = new _components__WEBPACK_IMPORTED_MODULE_4__["Button"]({
			props: {
				url: "/app",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("main");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("comate");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(icon.$$.fragment);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("p");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Comate is an honest alarm clock to ");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("help you sleep.");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(" The average human being needs ");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("8 hours of sleep");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(" per night.");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			small = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("small");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("With comate you don't sleep till 7AM, you sleep till you've had enough sleep to function properly everyday.");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(button.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			main = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "MAIN", { class: true });
			var main_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(main);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(main_nodes, "H1", { class: true });
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h1_nodes, "comate");
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(main_nodes);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(main_nodes, "DIV", {});
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "DIV", {});
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(icon.$$.fragment, div0_nodes);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			p = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "P", { class: true });
			var p_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(p);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, "Comate is an honest alarm clock to ");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p_nodes, "SPAN", { class: true });
			var span0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span0_nodes, "help you sleep.");
			span0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, " The average human being needs ");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(p_nodes, "SPAN", { class: true });
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, "8 hours of sleep");
			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(p_nodes, " per night.");
			p_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div1_nodes);
			small = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "SMALL", { class: true });
			var small_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(small);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(small_nodes, "With comate you don't sleep till 7AM, you sleep till you've had enough sleep to function properly everyday.");
			small_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(main_nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(main_nodes, "DIV", {});
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(button.$$.fragment, div2_nodes);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			main_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h1, "class", "logo__text svelte-163kunk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 19, 2, 351);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 28, 3, 544);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span0, "class", "highlight svelte-163kunk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 44, 39, 999);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span1, "class", "highlight svelte-163kunk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 44, 116, 1076);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(p, "class", "description__main svelte-163kunk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(p, file, 39, 3, 795);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(small, "class", "description__extra svelte-163kunk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(small, file, 47, 3, 1147);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 27, 2, 535);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 56, 2, 1441);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(main, "class", "root svelte-163kunk");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(main, file, 18, 1, 329);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, main, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(main, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(main, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(main, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(icon, div0, null);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, p);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span0, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(p, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, small);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(small, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(main, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(main, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(button, div2, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (h1_outro) h1_outro.end(1);

				if (!h1_intro) h1_intro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_in_transition"])(h1, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], {
					opacity: 0,
					y: -30,
					easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["elasticOut"],
					duration: 1000,
					delay: 300
				});

				h1_intro.start();
			});

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(icon.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (div0_outro) div0_outro.end(1);

				if (!div0_intro) div0_intro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_in_transition"])(div0, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], {
					opacity: 0,
					x: 250,
					y: -250,
					easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"],
					duration: 800
				});

				div0_intro.start();
			});

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (p_outro) p_outro.end(1);

				if (!p_intro) p_intro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_in_transition"])(p, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], {
					opacity: 0,
					y: 30,
					easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"],
					delay: 100
				});

				p_intro.start();
			});

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (small_outro) small_outro.end(1);

				if (!small_intro) small_intro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_in_transition"])(small, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], {
					opacity: 0,
					y: 30,
					easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"],
					delay: 200
				});

				small_intro.start();
			});

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(button.$$.fragment, local);

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_render_callback"])(() => {
				if (div2_outro) div2_outro.end(1);

				if (!div2_intro) div2_intro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_in_transition"])(div2, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], {
					opacity: 0,
					y: 50,
					easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["elasticOut"],
					duration: 1000,
					delay: 300
				});

				div2_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (h1_intro) h1_intro.invalidate();
			h1_outro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_out_transition"])(h1, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], { opacity: 0, y: -30, easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"] });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(icon.$$.fragment, local);
			if (div0_intro) div0_intro.invalidate();

			div0_outro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_out_transition"])(div0, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], {
				opacity: 0,
				x: -250,
				y: 250,
				easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"],
				delay: 200,
				duration: 800
			});

			if (p_intro) p_intro.invalidate();

			p_outro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_out_transition"])(p, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], {
				opacity: 0,
				y: 30,
				easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"],
				delay: 100
			});

			if (small_intro) small_intro.invalidate();
			small_outro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_out_transition"])(small, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], { opacity: 0, y: 30, easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"] });
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(button.$$.fragment, local);
			if (div2_intro) div2_intro.invalidate();
			div2_outro = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_out_transition"])(div2, svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"], { opacity: 0, y: 50, easing: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"] });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(main);
			if (detaching && h1_outro) h1_outro.end();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(icon);
			if (detaching && div0_outro) div0_outro.end();
			if (detaching && p_outro) p_outro.end();
			if (detaching && small_outro) small_outro.end();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(button);
			if (detaching && div2_outro) div2_outro.end();
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(18:0) {#if loaded}",
		ctx
	});

	return block;
}

// (61:3) <Button url="/app">
function create_default_slot(ctx) {
	let span;
	let t0;
	let t1;
	let icon;
	let current;

	icon = new _components__WEBPACK_IMPORTED_MODULE_4__["Icon"]({
			props: { src: "/arrow.svg", w: "18" },
			$$inline: true
		});

	const block = {
		c: function create() {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Put me in a coma");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["create_component"])(icon.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			span = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "SPAN", { class: true });
			var span_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span_nodes, "Put me in a coma");
			span_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_component"])(icon.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(span, "class", "u-icon-spacing");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span, file, 61, 4, 1608);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, span, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span, t0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t1, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["mount_component"])(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty & /*$$scope*/ 2) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(span);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_component"])(icon, detaching);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(61:3) <Button url=\\\"/app\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let if_block_anchor;
	let current;
	let if_block = /*loaded*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			if (if_block) if_block.c();
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-czi6z8\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["empty"])();
			this.h();
		},
		h: function hydrate() {
			document.title = "Welcome";
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*loaded*/ ctx[0]) {
				if (if_block) {
					if (dirty & /*loaded*/ 1) {
						Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["group_outros"])();

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["check_outros"])();
			}
		},
		i: function intro(local) {
			if (current) return;
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_in"])(if_block);
			current = true;
		},
		o: function outro(local) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["transition_out"])(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(if_block_anchor);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let loaded = false;

	Object(svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"])(() => {
		$$invalidate(0, loaded = true);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("Routes", $$slots, []);

	$$self.$capture_state = () => ({
		onMount: svelte__WEBPACK_IMPORTED_MODULE_1__["onMount"],
		fly: svelte_transition__WEBPACK_IMPORTED_MODULE_2__["fly"],
		elasticOut: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["elasticOut"],
		quintOut: svelte_easing__WEBPACK_IMPORTED_MODULE_3__["quintOut"],
		Button: _components__WEBPACK_IMPORTED_MODULE_4__["Button"],
		Icon: _components__WEBPACK_IMPORTED_MODULE_4__["Icon"],
		loaded
	});

	$$self.$inject_state = $$props => {
		if ("loaded" in $$props) $$invalidate(0, loaded = $$props.loaded);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [loaded];
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-163kunk-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLa0M7QUFDTztBQUNhO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FZbEMsT0FBTyxFQUFFLENBQUM7S0FBRSxDQUFDLEdBQUcsRUFBRTtLQUFFLE1BQU0sRUFBRSx3REFBVTtLQUFFLFFBQVEsRUFBRSxJQUFJO0tBQUUsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7OztLQVNqRSxPQUFPLEVBQUUsQ0FBQztLQUFFLENBQUMsRUFBRSxHQUFHO0tBQUUsQ0FBQyxHQUFHLEdBQUc7S0FBRSxNQUFNLEVBQUUsc0RBQVE7S0FBRSxRQUFRLEVBQUUsR0FBRzs7Ozs7Ozs7OztLQVk1RCxPQUFPLEVBQUUsQ0FBQztLQUFFLENBQUMsRUFBRSxFQUFFO0tBQUUsTUFBTSxFQUFFLHNEQUFRO0tBQUUsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7S0FRL0MsT0FBTyxFQUFFLENBQUM7S0FBRSxDQUFDLEVBQUUsRUFBRTtLQUFFLE1BQU0sRUFBRSxzREFBUTtLQUFFLEtBQUssRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7S0FRaEQsT0FBTyxFQUFFLENBQUM7S0FBRSxDQUFDLEVBQUUsRUFBRTtLQUFFLE1BQU0sRUFBRSx3REFBVTtLQUFFLFFBQVEsRUFBRSxJQUFJO0tBQUUsS0FBSyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7eUpBcENoRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLHNEQUFROzs7OztJQVNuQyxPQUFPLEVBQUUsQ0FBQztJQUFFLENBQUMsR0FBRyxHQUFHO0lBQUUsQ0FBQyxFQUFFLEdBQUc7SUFBRSxNQUFNLEVBQUUsc0RBQVE7SUFBRSxLQUFLLEVBQUUsR0FBRztJQUFFLFFBQVEsRUFBRSxHQUFHOzs7Ozs7SUFZeEUsT0FBTyxFQUFFLENBQUM7SUFBRSxDQUFDLEVBQUUsRUFBRTtJQUFFLE1BQU0sRUFBRSxzREFBUTtJQUFFLEtBQUssRUFBRSxHQUFHOzs7OytKQVEvQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLHNEQUFROzs7NkpBUXBDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsc0RBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXpDM0MsR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUFOLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FQTixNQUFNLEdBQUcsS0FBSzs7Q0FFbEIsc0RBQU87a0JBQ04sTUFBTSxHQUFHLElBQUkiLCJmaWxlIjoiY2UyOTUwM2E4NmRmYWMxOTIwYjIvaW5kZXguaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5XZWxjb21lPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBmbHkgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cdGltcG9ydCB7IGVsYXN0aWNPdXQsIHF1aW50T3V0IH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdGltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5cdGxldCBsb2FkZWQgPSBmYWxzZTtcblxuXHRvbk1vdW50KCgpID0+IHtcblx0XHRsb2FkZWQgPSB0cnVlO1xuXHR9KTtcbjwvc2NyaXB0PlxuXG57I2lmIGxvYWRlZH1cblx0PG1haW4gY2xhc3M9XCJyb290XCI+XG5cdFx0PGgxXG5cdFx0XHRpbjpmbHk9e3tvcGFjaXR5OiAwLCB5OiAtMzAsIGVhc2luZzogZWxhc3RpY091dCwgZHVyYXRpb246IDEwMDAsIGRlbGF5OiAzMDB9fVxuXHRcdFx0b3V0OmZseT17e29wYWNpdHk6IDAsIHk6IC0zMCwgZWFzaW5nOiBxdWludE91dH19XG5cdFx0XHRjbGFzcz1cImxvZ29fX3RleHRcIlxuXHRcdD5cblx0XHRcdGNvbWF0ZVxuXHRcdDwvaDE+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRpbjpmbHk9e3tvcGFjaXR5OiAwLCB4OiAyNTAsIHk6IC0yNTAsIGVhc2luZzogcXVpbnRPdXQsIGR1cmF0aW9uOiA4MDB9fVxuXHRcdFx0XHRvdXQ6Zmx5PXt7b3BhY2l0eTogMCwgeDogLTI1MCwgeTogMjUwLCBlYXNpbmc6IHF1aW50T3V0LCBkZWxheTogMjAwLCBkdXJhdGlvbjogODAwfX1cblx0XHRcdD5cblx0XHRcdFx0PEljb25cblx0XHRcdFx0XHRzcmM9XCIvbG9nby5zdmdcIlxuXHRcdFx0XHRcdHc9XCIxMDBcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdDwvSWNvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8cFxuXHRcdFx0XHRjbGFzcz1cImRlc2NyaXB0aW9uX19tYWluXCJcblx0XHRcdFx0aW46Zmx5PXt7b3BhY2l0eTogMCwgeTogMzAsIGVhc2luZzogcXVpbnRPdXQsIGRlbGF5OiAxMDB9fVxuXHRcdFx0XHRvdXQ6Zmx5PXt7b3BhY2l0eTogMCwgeTogMzAsIGVhc2luZzogcXVpbnRPdXQsIGRlbGF5OiAxMDB9fVxuXHRcdFx0PlxuXHRcdFx0XHRDb21hdGUgaXMgYW4gaG9uZXN0IGFsYXJtIGNsb2NrIHRvIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+aGVscCB5b3Ugc2xlZXAuPC9zcGFuPiBUaGUgYXZlcmFnZSBodW1hbiBiZWluZyBuZWVkcyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjggaG91cnMgb2Ygc2xlZXA8L3NwYW4+IHBlciBuaWdodC5cblx0XHRcdDwvcD5cblxuXHRcdFx0PHNtYWxsXG5cdFx0XHRcdGNsYXNzPVwiZGVzY3JpcHRpb25fX2V4dHJhXCJcblx0XHRcdFx0aW46Zmx5PXt7b3BhY2l0eTogMCwgeTogMzAsIGVhc2luZzogcXVpbnRPdXQsIGRlbGF5OiAyMDB9fVxuXHRcdFx0XHRvdXQ6Zmx5PXt7b3BhY2l0eTogMCwgeTogMzAsIGVhc2luZzogcXVpbnRPdXR9fVxuXHRcdFx0PlxuXHRcdFx0XHRXaXRoIGNvbWF0ZSB5b3UgZG9uJ3Qgc2xlZXAgdGlsbCA3QU0sIHlvdSBzbGVlcCB0aWxsIHlvdSd2ZSBoYWQgZW5vdWdoIHNsZWVwIHRvIGZ1bmN0aW9uIHByb3Blcmx5IGV2ZXJ5ZGF5LlxuXHRcdFx0PC9zbWFsbD5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXZcblx0XHRcdGluOmZseT17e29wYWNpdHk6IDAsIHk6IDUwLCBlYXNpbmc6IGVsYXN0aWNPdXQsIGR1cmF0aW9uOiAxMDAwLCBkZWxheTogMzAwfX1cblx0XHRcdG91dDpmbHk9e3tvcGFjaXR5OiAwLCB5OiA1MCwgZWFzaW5nOiBxdWludE91dH19XG5cdFx0PlxuXHRcdFx0PEJ1dHRvbiB1cmw9XCIvYXBwXCI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidS1pY29uLXNwYWNpbmdcIj5QdXQgbWUgaW4gYSBjb21hPC9zcGFuPlxuXG5cdFx0XHRcdDxJY29uXG5cdFx0XHRcdFx0c3JjPVwiL2Fycm93LnN2Z1wiXG5cdFx0XHRcdFx0dz1cIjE4XCJcblx0XHRcdFx0PlxuXHRcdFx0XHQ8L0ljb24+XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9tYWluPlxuey9pZn1cblxuPHN0eWxlPlxuXHQucm9vdCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0bWF4LXdpZHRoOiA0MjBweDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRwYWRkaW5nOiAzMHB4IDIwcHggNTBweDtcblx0fVxuXG5cdC5sb2dvX190ZXh0IHtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0fVxuXG5cdC5kZXNjcmlwdGlvbl9fbWFpbiB7XG5cdFx0bWFyZ2luLXRvcDogMjBweDtcblxuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0fVxuXG5cdC5kZXNjcmlwdGlvbl9fZXh0cmEge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cblx0XHRmb250LXNpemU6IDE0cHg7XG5cblx0XHRjb2xvcjogdmFyKC0tc2lsdmVyLWNvbG9yLWZhZGVkKTtcblx0fVxuXG5cdC5oaWdobGlnaHQge1xuXHRcdGNvbG9yOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==