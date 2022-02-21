new Swiper('.text-slider', {

	autoplay: {
		delay: 2500,
		stopOnLastSlide: true,
		disableOnIteraction: false
	},
	speed: 750,
	effect: 'fade',

	fadeEffect: {
		crossFade: true,
	},
});

//!перевіряє прситрій
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android()
			|| isMobile.BlackBerry()
			|| isMobile.iOS()
			|| isMobile.Opera()
			|| isMobile.Windows()
		);
	}
};

if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}
function _removeClasses(params) {

}

//!BURGER MENU	
const menuBody = document.querySelector('.top__header-items');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

//!Прокрутка при клике
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			console.log("good");
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		} else {
			console.log("bad");
		}
	}
}

const mouseMove = document.querySelector(".item__left-container");
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
const wave3 = document.querySelector(".wave3");
const pallete = document.querySelector('.image__palette');
const imgBorder = document.querySelector(".image__border");
const line1 = document.querySelector(".image__line-1");
const line2 = document.querySelector(".image__line-2");
const line3 = document.querySelector(".image__line-3");
const line4 = document.querySelector(".image__line-4");
const tr1 = document.querySelector(".image__tr-1");
const tr2 = document.querySelector(".image__tr-2");
const tr3 = document.querySelector(".image__tr-3");
const tr4 = document.querySelector(".image__tr-4");
const tr5 = document.querySelector(".image__tr-5");
const tr6 = document.querySelector(".image__tr-6");
const tr7 = document.querySelector(".image__tr-7");
const tr8 = document.querySelector(".image__tr-8");
const tr9 = document.querySelector(".image__tr-9");
const cr1 = document.querySelector(".image__cr-1");
const cr2 = document.querySelector(".image__cr-2");
const cr3 = document.querySelector(".image__cr-3");




const mouseMove2 = document.querySelector(".middle__left-img");
const leafTop = document.querySelector(".leaf__top");
const leafTBottom = document.querySelector(".leaf__bottom");
const sock = document.querySelector(".sock__img");
const stars = document.querySelector(".stars__img");
const bc = document.querySelector(".background__sock");
const leaf = document.querySelector(".leaf__main");
const he = document.querySelector(".hexagons");


const mouseMove3 = document.querySelector(".middle__right-img");
const logo = document.querySelector(".telegram__logo");
const p1 = document.querySelector(".telegram__points1");
const p2 = document.querySelector(".telegram__points2");
const l1 = document.querySelector(".telegram__line1");
const l2 = document.querySelector(".telegram__line2");
const t1 = document.querySelector(".telegram__tr1");
const t2 = document.querySelector(".telegram__tr2");
const t3 = document.querySelector(".telegram__tr3");
const t4 = document.querySelector(".telegram__tr4");
const t5 = document.querySelector(".telegram__tr5");
mouseMove3.addEventListener("mouseover", () => {
	logo.classList.toggle("logo-an");
	p1.classList.toggle("p1-an");
	p2.classList.toggle("p2-an");
	l1.classList.toggle("l1-an");
	l2.classList.toggle("l2-an");
	t1.classList.toggle("t1-an");
	t2.classList.toggle("t2-an");
	t3.classList.toggle("t3-an");
	t4.classList.toggle("t4-an");
	t5.classList.toggle("t5-an");
})

const mouseMove5 = document.querySelector(".undermiddle__left-img2");
const monCir = document.querySelector(".monoliza__circles");
const monImg1 = document.querySelector(".monoliza__img1");
const monImg2 = document.querySelector(".monoliza__img2");
const monPoi1 = document.querySelector(".monoliza__points1");
const monPoi2 = document.querySelector(".monoliza__points2");
const monPoi3 = document.querySelector(".monoliza__points3");
const monLine1 = document.querySelector(".monoliza__line1");
const monLine2 = document.querySelector(".monoliza__line2");
mouseMove5.addEventListener("mouseover", () => {
	monCir.classList.toggle("mon__cir-an");
	monImg1.classList.toggle("mon__img1");
	monImg2.classList.toggle("mon__img2");
	monPoi1.classList.toggle("mon__poi-an");
	monPoi2.classList.toggle("mon__poi-an");
	monPoi3.classList.toggle("mon__poi-an");
	monLine1.classList.toggle("mon__line1");
	monLine2.classList.toggle("mon__line2");
})



const mouseMove6 = document.querySelector(".undermiddle__right-img");
const pHead = document.querySelector(".prize__box-head");
const pBox1 = document.querySelector(".prize__box2");
const pBox2 = document.querySelector(".prize__box3");
const pPic1 = document.querySelector(".prize__pic1");
const pPic2 = document.querySelector(".prize__pic2");
const pPic3 = document.querySelector(".prize__pic3");
const pEf1 = document.querySelector(".prize__ef1");
const pEf2 = document.querySelector(".prize__ef2");
const pEf3 = document.querySelector(".prize__ef3");
const pSt1 = document.querySelector(".prize__st1");
const pSt2 = document.querySelector(".prize__st2");
const pSt3 = document.querySelector(".prize__st3");
const pSt4 = document.querySelector(".prize__st4");
const pSt5 = document.querySelector(".prize__st5");
const pSt6 = document.querySelector(".prize__st6");
const pSt7 = document.querySelector(".prize__st7");
const pSt8 = document.querySelector(".prize__st8");
const pSt9 = document.querySelector(".prize__st9");
const pSt10 = document.querySelector(".prize__st10");


const mouseMove4 = document.querySelector(".undermiddle__left-img");
const brush = document.querySelector(".brush__img");
const drop1 = document.querySelector(".brush__drop1");
const drop2 = document.querySelector(".brush__drop2");
const drop3 = document.querySelector(".brush__drop3");
const tri1 = document.querySelector(".brush__tr1");
const tri2 = document.querySelector(".brush__tr2");
const tri3 = document.querySelector(".brush__tr3");
const tri4 = document.querySelector(".brush__tr4");
const tri5 = document.querySelector(".brush__tr5");
const tri6 = document.querySelector(".brush__tr6");
const tri7 = document.querySelector(".brush__tr7");
const tri8 = document.querySelector(".brush__tr8");
const tri9 = document.querySelector(".brush__tr9");
const cir1 = document.querySelector(".brush__circles1");
const cir2 = document.querySelector(".brush__circles2");
const cir3 = document.querySelector(".brush__circles3");
const lin1 = document.querySelector(".brush__line1");
const lin2 = document.querySelector(".brush__line2");

mouseMove4.addEventListener("mouseover", () => {
	brush.classList.toggle("img-brush");
	drop1.classList.toggle("drop-an");
	drop2.classList.toggle("drop-an2");
	drop3.classList.toggle("drop-an3");
	tri1.classList.toggle("tri-an1");
	tri2.classList.toggle("tri-an1");
	tri3.classList.toggle("tri-an1");
	tri4.classList.toggle("tri-an1");
	tri5.classList.toggle("tri-an1");
	tri6.classList.toggle("tri-an1");
	tri7.classList.toggle("tri-an1");
	tri8.classList.toggle("tri-an1");
	tri9.classList.toggle("tri-an1");
	cir1.classList.toggle("cir-an");
	cir2.classList.toggle("cir-an");
	cir3.classList.toggle("cir-an");
	lin1.classList.toggle("lin-an");
	lin2.classList.toggle("lin-an2");
})

mouseMove2.addEventListener("mouseover", () => {
	leafTop.classList.toggle("leaf-top-an");
	leafTBottom.classList.toggle("leaf-bottom-an");
	sock.classList.toggle("sock-an");
	stars.classList.toggle("stars-an");
	bc.classList.toggle("bc-an");
	leaf.classList.toggle("leaf-an");
	he.classList.toggle("he-an");

})

mouseMove.addEventListener("mouseover", () => {
	wave1.classList.toggle('play1');
	wave2.classList.toggle('play2');
	wave3.classList.toggle('play3');
	pallete.classList.toggle('play4');
	imgBorder.classList.toggle('play5');
	line1.classList.toggle('line-1');
	line2.classList.toggle('line-2');
	line3.classList.toggle('line-3');
	line4.classList.toggle('line-4');
	tr1.classList.toggle('tr-1');
	tr2.classList.toggle('tr-2');
	tr3.classList.toggle('tr-3');
	tr4.classList.toggle('tr-4');
	tr5.classList.toggle('tr-5');
	tr6.classList.toggle('tr-6');
	tr7.classList.toggle('tr-7');
	tr8.classList.toggle('tr-8');
	tr9.classList.toggle('tr-9');
	cr1.classList.toggle('cr-1');
	cr2.classList.toggle('cr-2');
	cr3.classList.toggle('cr-3');
})



setInterval(() => {
	console.log(restart);
	console.log(touchcount);

}, 1000);


let restart = false;
let firsttouch = 0;
let touchcount = 0;


mouseMove.addEventListener("touchstart", () => {
	restart = true;
	touchcount++;
}
)
mouseMove2.addEventListener("touchstart", () => {
	restart = true;
	touchcount++;
}
)

mouseMove3.addEventListener("touchstart", () => {
	restart = true;
	touchcount++;
}
)
mouseMove4.addEventListener("touchstart", () => {
	restart = true;
	touchcount++;
}
)
mouseMove5.addEventListener("touchstart", () => {
	restart = true;
	touchcount++;
}
)
mouseMove6.addEventListener("touchstart", () => {
	restart = true;
	touchcount++;
}
)
setInterval(() => {
	const restart2 = document.querySelector(".p-head");
	if (restart2 && restart) {
		restart = false;
		setTimeout(() => {
			console.log("clear");
			pHead.classList.remove("p-head");
			pBox1.classList.remove("p-box1");
			pBox2.classList.remove("p-box2");
			pPic1.classList.remove("p-pic1");
			pPic2.classList.remove("p-pic2");
			pPic3.classList.remove("p-pic3");
			pEf1.classList.remove("p-ef1");
			pEf2.classList.remove("p-ef2");
			pEf3.classList.remove("p-ef3");
			pSt1.classList.remove("p-st1");
			pSt2.classList.remove("p-st2");
			pSt3.classList.remove("p-st3");
			pSt4.classList.remove("p-st4");
			pSt5.classList.remove("p-st5");
			pSt6.classList.remove("p-st6");
			pSt7.classList.remove("p-st7");
			pSt8.classList.remove("p-st8");
			pSt9.classList.remove("p-st9");
			pSt10.classList.remove("p-st10");
		}, 1800);

	}
}, 100)
setInterval(() => {
	const restart2 = document.querySelector(".mon__img1");
	if (restart2 && restart) {
		restart = false;
		setTimeout(() => {
			console.log("clear");
			monCir.classList.remove("mon__cir-an");
			monImg1.classList.remove("mon__img1");
			monImg2.classList.remove("mon__img2");
			monPoi1.classList.remove("mon__poi-an");
			monPoi2.classList.remove("mon__poi-an");
			monPoi3.classList.remove("mon__poi-an");
			monLine1.classList.remove("mon__line1");
			monLine2.classList.remove("mon__line2");
		}, 4000);

	}
}, 100)
setInterval(() => {
	const restart2 = document.querySelector(".drop-an");
	if (restart2 && restart) {
		restart = false;
		setTimeout(() => {
			console.log("clear");
			brush.classList.remove("img-brush");
			drop1.classList.remove("drop-an");
			drop2.classList.remove("drop-an2");
			drop3.classList.remove("drop-an3");
			tri1.classList.remove("tri-an1");
			tri2.classList.remove("tri-an1");
			tri3.classList.remove("tri-an1");
			tri4.classList.remove("tri-an1");
			tri5.classList.remove("tri-an1");
			tri6.classList.remove("tri-an1");
			tri7.classList.remove("tri-an1");
			tri8.classList.remove("tri-an1");
			tri9.classList.remove("tri-an1");
			cir1.classList.remove("cir-an");
			cir2.classList.remove("cir-an");
			cir3.classList.remove("cir-an");
			lin1.classList.remove("lin-an");
			lin2.classList.remove("lin-an2");
		}, 4000);

	}
}, 100)

setInterval(() => {
	const restart2 = document.querySelector(".play2");
	if (restart2 && restart) {
		restart = false;
		setTimeout(() => {
			console.log("clear");
			wave1.classList.remove('play1');
			wave2.classList.remove('play2');
			wave3.classList.remove('play3');
			pallete.classList.remove('play4');
			imgBorder.classList.remove('play5');
			line1.classList.remove('line-1');
			line2.classList.remove('line-2');
			line3.classList.remove('line-3');
			line4.classList.remove('line-4');
			tr1.classList.remove('tr-1');
			tr2.classList.remove('tr-2');
			tr3.classList.remove('tr-3');
			tr4.classList.remove('tr-4');
			tr5.classList.remove('tr-5');
			tr6.classList.remove('tr-6');
			tr7.classList.remove('tr-7');
			tr8.classList.remove('tr-8');
			tr9.classList.remove('tr-9');
			cr1.classList.remove('cr-1');
			cr2.classList.remove('cr-2');
			cr3.classList.remove('cr-3');
		}, 2000);

	}
}, 100)
setInterval(() => {
	const restart2 = document.querySelector(".he-an");
	if (restart2 && restart) {
		restart = false;
		setTimeout(() => {
			console.log("clear");
			leafTBottom.classList.remove("leaf-bottom-an");
			leafTop.classList.remove('leaf-top-an');
			sock.classList.remove("sock-an");
			stars.classList.remove("stars-an");
			bc.classList.remove("bc-an");
			leaf.classList.remove("leaf-an");
			he.classList.remove("he-an");
		}, 1500);

	}
}, 100)
setInterval(() => {
	const restart2 = document.querySelector(".logo-an");
	if (restart2 && restart) {
		restart = false;
		setTimeout(() => {
			console.log("clear");
			logo.classList.remove("logo-an");
			p1.classList.remove("p1-an");
			p2.classList.remove("p2-an");
			l1.classList.remove("l1-an");
			l2.classList.remove("l2-an");
			t1.classList.remove("t1-an");
			t2.classList.remove("t2-an");
			t3.classList.remove("t3-an");
			t4.classList.remove("t4-an");
			t5.classList.remove("t5-an");
		}, 1500);

	}
}, 100)


mouseMove3.addEventListener("mouseout", () => {
	logo.classList.remove("logo-an");
	p1.classList.remove("p1-an");
	p2.classList.remove("p2-an");
	l1.classList.remove("l1-an");
	l2.classList.remove("l2-an");
	t1.classList.remove("t1-an");
	t2.classList.remove("t2-an");
	t3.classList.remove("t3-an");
	t4.classList.remove("t4-an");
	t5.classList.remove("t5-an");
})


mouseMove2.addEventListener("mouseout", () => {
	leafTBottom.classList.remove("leaf-bottom-an");
	leafTop.classList.remove('leaf-top-an');
	sock.classList.remove("sock-an");
	stars.classList.remove("stars-an");
	bc.classList.remove("bc-an");
	leaf.classList.remove("leaf-an");
	he.classList.remove("he-an");
})

mouseMove.addEventListener("mouseout", () => {
	wave1.classList.remove('play1');
	wave2.classList.remove('play2');
	wave3.classList.remove('play3');
	pallete.classList.remove('play4');
	imgBorder.classList.remove('play5');
	line1.classList.remove('line-1');
	line2.classList.remove('line-2');
	line3.classList.remove('line-3');
	line4.classList.remove('line-4');
	tr1.classList.remove('tr-1');
	tr2.classList.remove('tr-2');
	tr3.classList.remove('tr-3');
	tr4.classList.remove('tr-4');
	tr5.classList.remove('tr-5');
	tr6.classList.remove('tr-6');
	tr7.classList.remove('tr-7');
	tr8.classList.remove('tr-8');
	tr9.classList.remove('tr-9');
	cr1.classList.remove('cr-1');
	cr2.classList.remove('cr-2');
	cr3.classList.remove('cr-3');
})

mouseMove4.addEventListener("mouseout", () => {
	brush.classList.remove("img-brush");
	drop1.classList.remove("drop-an");
	drop2.classList.remove("drop-an2");
	drop3.classList.remove("drop-an3");
	tri1.classList.remove("tri-an1");
	tri2.classList.remove("tri-an1");
	tri3.classList.remove("tri-an1");
	tri4.classList.remove("tri-an1");
	tri5.classList.remove("tri-an1");
	tri6.classList.remove("tri-an1");
	tri7.classList.remove("tri-an1");
	tri8.classList.remove("tri-an1");
	tri9.classList.remove("tri-an1");
	cir1.classList.remove("cir-an");
	cir2.classList.remove("cir-an");
	cir3.classList.remove("cir-an");
	lin1.classList.remove("lin-an");
	lin2.classList.remove("lin-an2");
})
mouseMove5.addEventListener("mouseout", () => {
	monCir.classList.remove("mon__cir-an");
	monImg1.classList.remove("mon__img1");
	monImg2.classList.remove("mon__img2");
	monPoi1.classList.remove("mon__poi-an");
	monPoi2.classList.remove("mon__poi-an");
	monPoi3.classList.remove("mon__poi-an");
	monLine1.classList.remove("mon__line1");
	monLine2.classList.remove("mon__line2");
})

mouseMove6.addEventListener("mouseover", () => {
	pHead.classList.toggle("p-head");
	pBox1.classList.toggle("p-box1");
	pBox2.classList.toggle("p-box2");
	pPic1.classList.toggle("p-pic1");
	pPic2.classList.toggle("p-pic2");
	pPic3.classList.toggle("p-pic3");
	pEf1.classList.toggle("p-ef1");
	pEf2.classList.toggle("p-ef2");
	pEf3.classList.toggle("p-ef3");
	pSt1.classList.toggle("p-st1");
	pSt2.classList.toggle("p-st2");
	pSt3.classList.toggle("p-st3");
	pSt4.classList.toggle("p-st4");
	pSt5.classList.toggle("p-st5");
	pSt6.classList.toggle("p-st6");
	pSt7.classList.toggle("p-st7");
	pSt8.classList.toggle("p-st8");
	pSt9.classList.toggle("p-st9");
	pSt10.classList.toggle("p-st10");

})

mouseMove6.addEventListener("mouseout", () => {
	pHead.classList.remove("p-head");
	pBox1.classList.remove("p-box1");
	pBox2.classList.remove("p-box2");
	pPic1.classList.remove("p-pic1");
	pPic2.classList.remove("p-pic2");
	pPic3.classList.remove("p-pic3");
	pEf1.classList.remove("p-ef1");
	pEf2.classList.remove("p-ef2");
	pEf3.classList.remove("p-ef3");
	pSt1.classList.remove("p-st1");
	pSt2.classList.remove("p-st2");
	pSt3.classList.remove("p-st3");
	pSt4.classList.remove("p-st4");
	pSt5.classList.remove("p-st5");
	pSt6.classList.remove("p-st6");
	pSt7.classList.remove("p-st7");
	pSt8.classList.remove("p-st8");
	pSt9.classList.remove("p-st9");
	pSt10.classList.remove("p-st10");
})

let arrLang = {
	'en': {
		"menu": 'Menu',
		"finished": "Finished pictures",
		"about": "About us",
		"variant": "My variant",
		"slide1": "Our paintings look like soft winter socks",
		"slide2": "At first glance, they warm the soul",
		"slide3": "On the other hand, they give a good mood",
		"slide4": "Buy and be happy)",
		"think": "Do you have your own idea for the painting?",
		"wait": "Then we are waiting for you in our",
		"canvas": "canvas",
		"packaging": "packaging",
		"box": "box",
		"filler": "filler",
		"frame": "frame",
		"material": "material",
		"portren": "portren",
		"etude": "etude",
		"still": "still lifes",
		"landscape": "landscape",
		"interior": "interior paintings",
		"desire": "Do you want to choose specific materials, topics, or decorate a picture as a gift?",
		"chose": 'Choose additional options in the section "My variant" and give emotions to family, friends and yourself.',
		"consultation": "Consultation:",
		"pay": "Payment and delivery",
		"guestion": "All questions that concern you can also be sent by mail",
		"hero": "Heroes of our time",
		"young": "Young, naive and promising. Yes, you got it right, she's an artist. It is she ready to listen and understand each of its customers. After all, it is not his words that need to be understood, but his heart. She will draw you pictures from the bottom of her heart and believe that they can bring you happiness. I didn't even say hello to you. So let's get acquainted, I'm Oleh (web developer), and your love artist - Anya",
		"we": "I didn't even say hello to you. So let's get acquainted, I'm Oleg (weaver), and your love artist - Anya",
		"titleQuestion": "What questions? No questions asked",
		"textQuestion": "I can assure you that as soon as you order your first painting, you will lose all the questions. And if they appear from you after the order, then write to us in a telegram. Ready to hear all claims and offers",

	},
	'ua': {
		"menu": 'Меню',
		"finished": "Готові картини",
		"about": "Про нас",
		"variant": "Мій варіант",
		"slide1": "Наші картини схожі нам’якенькі зимові шкарпеточки",
		"slide2": "З першого погляду вони гріють душу",
		"slide3": "З другого - дарують хороший настрій",
		"slide4": "Купуйте і будьте щасливі)",
		"think": "Маєте власну ідею для картини?",
		"wait": "Тоді чекаємо вас у нашому",
		"canvas": "Полотно",
		"packaging": "Упаковка",
		"box": "Коробка",
		"filler": "Наповнювач",
		"frame": "Рамка",
		"material": "Матеріал",
		"portren": "Потрет",
		"etude": "етюд",
		"still": "натюрморти",
		"landscape": "пейзажі",
		"interior": "інтер’єрні картини",
		"desire": "Бажаєте вибрати конкретні матеріали, тематику , або оформити картину на подарунок?",
		"chose": 'Вибирайте додатково опції у розділі "Мій варіант" та даруйте емоції рідним, близьким і собі.',
		"consultation": "Консультація:",
		"pay": "Оплата і доставка",
		"guestion": "Всі питання , які вас будуть хвилювати можна також відправляти на пошту",
		"hero": "Герої нашого часу",
		"young": "Молода, наївна і перспективна. Так, ви все правильно зрозуміли, це вона - художниця. Саме вона готова вислухати і зрозуміти кожного свого замовника. Адже треба зрозуміти не його слова, а йогосерце. Сaме вона буде малювати вам картини від щирого серця й вірити, що вони зможуть принести вам щастя.Я з вами навіть не привітався. Тож будьмо знайомі, я Олег (врстальщик), та ваша люба художниця - Аня",
		"we": "Я з вами навіть не привітався. Тож будьмо знайомі, я Олег (врстальщик), та ваша люба художниця - Аня",
		"titleQuestion": "Які питання? Немає ніяких питань",
		"textQuestion": "Я можу вас запевнити, щойно ви замовите свою першу картину - у вас пропадуть всі запитання. А якщо вони виникли у вас після замовлення, то пишиті нам в телеграмі. Готові вислухати всі претензії та пропозиції",
	}
}

$(function () {
	$('.translate').click(function () {
		let lang = $(this).attr('id');

		$('.lang').each(function (index, item) {
			$(this).text(arrLang[lang][$(this).attr('key')]);
		})
	})
})