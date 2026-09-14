const signs = [
	{ name: 'Áries', icon: 'aries', period: '21 mar — 19 abr', forecast: 'A coragem que você procura já está em movimento. Uma conversa direta abre espaço para uma oportunidade que parecia distante.', love: '68%', energy: '82%', color: 'Coral', hex: '#ef8067', time: '09:40', advice: 'Dê o primeiro passo antes de pedir permissão.' },
	{ name: 'Touro', icon: 'taurus', period: '20 abr — 20 mai', forecast: 'Seu ritmo constante vence a pressa alheia. Cuide do que é simples e valioso: uma escolha paciente hoje rende tranquilidade amanhã.', love: '81%', energy: '69%', color: 'Verde oliva', hex: '#788b63', time: '14:20', advice: 'O que cresce devagar cria raízes profundas.' },
	{ name: 'Gêmeos', icon: 'gemini', period: '21 mai — 20 jun', forecast: 'Ideias chegam em sequência e uma delas merece sua atenção. Compartilhe o que pensa: sua curiosidade pode conectar as pessoas certas.', love: '94%', energy: '73%', color: 'Amarelo sol', hex: '#e2b947', time: '11:15', advice: 'Uma pergunta bem feita pode mudar o rumo do dia.' },
	{ name: 'Câncer', icon: 'cancer', period: '21 jun — 22 jul', forecast: 'A intuição está especialmente nítida. Diminua o ruído, escute o corpo e escolha o lugar onde você pode ser inteiro.', love: '76%', energy: '58%', color: 'Azul névoa', hex: '#7295a5', time: '20:05', advice: 'Sensibilidade também é uma forma de força.' },
	{ name: 'Leão', icon: 'leo', period: '23 jul — 22 ago', forecast: 'Sua presença ilumina uma sala sem esforço. Use esse brilho para reconhecer alguém que caminhou com você, e o retorno será genuíno.', love: '87%', energy: '78%', color: 'Dourado', hex: '#d49b3f', time: '16:45', advice: 'Liderar também é fazer espaço para outros brilharem.' },
	{ name: 'Virgem', icon: 'virgo', period: '23 ago — 22 set', forecast: 'Nem tudo precisa estar perfeito para começar. Organize apenas o próximo passo e deixe que a clareza apareça enquanto você caminha.', love: '62%', energy: '45%', color: 'Terracota', hex: '#bd7658', time: '08:10', advice: 'Feito com presença vale mais que perfeito no papel.' },
	{ name: 'Libra', icon: 'libra', period: '23 set — 22 out', forecast: 'Um equilíbrio novo pede uma decisão honesta. Confie no que traz leveza, mesmo que não seja a opção mais esperada pelos outros.', love: '71%', energy: '66%', color: 'Rosa antigo', hex: '#ba7d83', time: '13:30', advice: 'Paz não é ausência de escolha; é escolha alinhada.' },
	{ name: 'Escorpião', icon: 'scorpio', period: '23 out — 21 nov', forecast: 'Você enxerga além da superfície. Transforme essa percepção em ação cuidadosa e uma situação confusa começa a revelar sua verdade.', love: '96%', energy: '76%', color: 'Vinho', hex: '#964c4f', time: '22:18', advice: 'Use sua intensidade para criar, não para se esconder.' },
	{ name: 'Sagitário', icon: 'sagittarius', period: '22 nov — 21 dez', forecast: 'O horizonte se alarga quando você aceita um convite inesperado. Há aprendizado em uma rota diferente da planejada.', love: '93%', energy: '67%', color: 'Laranja queimado', hex: '#d17643', time: '17:05', advice: 'A aventura começa quando o plano perde uma página.' },
	{ name: 'Capricórnio', icon: 'capricorn', period: '22 dez — 19 jan', forecast: 'Uma meta ganha contornos concretos. Celebre o que já foi construído e renegocie o prazo que está cobrando mais de você do que deveria.', love: '58%', energy: '53%', color: 'Azul petróleo', hex: '#39717a', time: '10:50', advice: 'Disciplina sem descanso é só outra forma de pressa.' },
	{ name: 'Aquário', icon: 'aquarius', period: '20 jan — 18 fev', forecast: 'Uma solução original nasce quando você troca de perspectiva. Sua diferença não precisa ser explicada para ser útil.', love: '84%', energy: '61%', color: 'Azul elétrico', hex: '#4e83aa', time: '15:00', advice: 'O futuro costuma parecer estranho antes de parecer óbvio.' },
	{ name: 'Peixes', icon: 'pisces', period: '19 fev — 20 mar', forecast: 'A imaginação aponta uma direção real. Anote o sonho, mas dê a ele uma pequena tarefa: o invisível gosta de encontrar forma.', love: '79%', energy: '56%', color: 'Lavanda', hex: '#967da7', time: '21:12', advice: 'Sonhar é o mapa; cuidar do detalhe é a viagem.' }
];

const iconLibrary = {
	aries: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M10 29 L14 11 L20 22 L26 11 L30 29"/><path class="icon-line" d="M8 29 H32"/></svg>`,
	taurus: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M10 26 C10 16 15 11 20 11 C25 11 30 16 30 22"/><path class="icon-line" d="M14 29 C16 25 18 24 20 21 C22 24 24 26 26 29"/><path class="icon-line" d="M8 30 H32"/></svg>`,
	gemini: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M11 10 C12 16 11 20 8 24"/><path class="icon-line" d="M29 10 C28 16 29 20 32 24"/><path class="icon-line" d="M11 26 C13 21 16 24 18 18 C20 24 24 24 26 18 C28 22 30 24 32 26"/></svg>`,
	cancer: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M7 24 C8 18 11 16 14 18 C16 13 21 12 23 16 C25 11 31 13 31 18 C31 24 27 25 24 23"/><path class="icon-line" d="M10 30 C15 28 17 31 20 28 C23 30 25 25 30 30"/></svg>`,
	leo: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M10 26 C10 15 15 10 20 10 C25 10 30 15 30 26"/><path class="icon-line" d="M12 26 L28 26"/><path class="icon-line" d="M20 7 L20 4 M12 12 L9 9 M28 12 L31 9 M7 20 L4 20 M33 20 L36 20"/></svg>`,
	virgo: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M7 30 C12 24 15 23 18 22 C23 21 27 16 30 10"/><path class="icon-line" d="M11 18 C12 21 14 23 17 24"/><path class="icon-line" d="M16 30 L30 30"/><path class="icon-line" d="M24 10 L30 10"/></svg>`,
	libra: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M8 11 H32"/><path class="icon-line" d="M12 11 L12 28"/><path class="icon-line" d="M28 11 L28 28"/><path class="icon-line" d="M12 28 L16 24 L20 28 L24 24 L28 28"/><path class="icon-line" d="M20 24 L20 11"/></svg>`,
	scorpio: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M11 30 C12 22 16 18 20 18 C24 18 28 21 30 26"/><path class="icon-line" d="M10 10 C14 16 14 20 10 25"/><path class="icon-line" d="M23 10 C25 13 26 16 25 20 C24 23 22 25 20 27"/><path class="icon-line" d="M31 10 L30 30"/></svg>`,
	sagittarius: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M8 31 L30 9"/><path class="icon-line" d="M24 9 L30 9 L30 15"/><path class="icon-line" d="M8 31 L16 26"/><path class="icon-line" d="M11 31 L8 24"/></svg>`,
	capricorn: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M9 28 L14 18 L19 28 L23 18 L31 28"/><path class="icon-line" d="M14 18 L10 12 L16 14 M23 18 L19 12 L26 13"/><path class="icon-line" d="M7 31 H33"/></svg>`,
	aquarius: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M9 22 C12 17 15 17 17 20 C19 13 23 14 25 19 C27 16 30 15 32 19"/><path class="icon-line" d="M8 30 C11 27 13 27 16 30 C20 25 23 27 26 30 C29 27 31 28 33 30"/></svg>`,
	pisces: `<svg class="zodiac-icon" viewBox="0 0 40 40" aria-hidden="true"><path class="icon-line" d="M11 25 C13 16 18 16 22 21 C26 16 31 16 30 25 C28 29 25 27 22 25 C20 29 16 29 11 25"/><path class="icon-line" d="M13 12 C12 16 10 18 8 19"/><path class="icon-line" d="M29 14 C30 17 31 19 33 20"/></svg>`
};

function getIconSvg(icon) {
	return iconLibrary[icon] || iconLibrary.aries;
}

function setReadingSymbol(icon) {
	const readingSymbol = document.querySelector('#reading-symbol');
	readingSymbol.innerHTML = getIconSvg(icon);
}

const readingSymbolDefault = getIconSvg('aries');

const grid = document.querySelector('#sign-grid');
const reading = document.querySelector('#reading');
const details = document.querySelector('#details-grid');
const birthInput = document.querySelector('#birth-date');
const confirmBirth = document.querySelector('#confirm-birth');
const birthLoading = document.querySelector('#birth-loading');
const cardModal = document.querySelector('#card-modal');
const cardForm = document.querySelector('#card-form');
const cardNumber = document.querySelector('#card-number');
const cardName = document.querySelector('#card-name');
const cardExpiry = document.querySelector('#card-expiry');
const cardCvv = document.querySelector('#card-cvv');
const demoCard = document.querySelector('.demo-card');
const demoCardNumber = document.querySelector('.demo-card-number');
const demoCardName = document.querySelector('.demo-card-name');
const demoCardExpiry = document.querySelector('.demo-card-expiry');
const closeModal = document.querySelector('#close-modal');
const cardTab = document.querySelector('#card-tab');
const pixTab = document.querySelector('#pix-tab');
const pixPanel = document.querySelector('#pix-panel');
const copyPix = document.querySelector('#copy-pix');
let birthConfirmed = false;
const today = new Date();
const formattedDate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(today);
document.querySelector('#reading-date').textContent = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(today).replace('.', '').toUpperCase();
// A data de nascimento é limitada ao dia atual sem aplicar qualquer regra de ano à validade do cartão.
birthInput.max = today.toISOString().split('T')[0];

const stars = document.querySelector('.stars');
for (let index = 0; index < 80; index += 1) {
	const star = document.createElement('i');
	star.className = 'star';
	star.style.setProperty('--left', `${Math.random() * 100}%`);
	star.style.setProperty('--top', `${Math.random() * 180}%`);
	star.style.setProperty('--size', `${Math.random() * 2 + 1}px`);
	star.style.setProperty('--opacity', `${Math.random() * .7 + .2}`);
	stars.appendChild(star);
}

function updateAtmosphere() {
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
	const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
	document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
	document.documentElement.style.setProperty('--deepness', `${Math.min(progress * .48, .48)}`);
}

window.addEventListener('scroll', updateAtmosphere, { passive: true });
updateAtmosphere();

signs.forEach((sign, index) => {
	const button = document.createElement('button');
	button.className = 'sign-card';
	button.type = 'button';
	button.dataset.index = index;
	button.innerHTML = `<span class="sign-icon">${getIconSvg(sign.icon)}</span><span class="sign-name">${sign.name}</span><span class="sign-period">${sign.period}</span>`;
	button.addEventListener('click', () => showReading(index));
	grid.appendChild(button);
});

function showReading(index) {
	const sign = signs[index];
	document.querySelectorAll('.sign-card').forEach((card, cardIndex) => card.classList.toggle('active', cardIndex === index));
	setReadingSymbol(sign.icon);
	document.querySelector('#reading-title').textContent = sign.name;
	const dailyForecast = `${sign.forecast.split('. ')[0]}.`;
	document.querySelector('#forecast').textContent = dailyForecast;
	document.querySelector('#forecast').dataset.base = dailyForecast;
	document.querySelector('#energy').textContent = sign.love;
	document.querySelector('#energy-meter').style.width = sign.love;
	document.querySelector('#lucky-number').textContent = sign.energy;
	document.querySelector('#lucky-color').textContent = sign.color;
	document.querySelector('#color-dot').style.background = sign.hex;
	document.querySelector('#best-time').textContent = sign.time;
	document.querySelector('#advice').textContent = sign.advice;
	details.hidden = false;
	document.querySelector('#new-reading').hidden = false;
	reading.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const monthMessages = [
	'Janeiro traz energia de recomeço e coragem para abrir um ciclo.',
	'Fevereiro amplia sua intuição e a atenção aos pequenos sinais.',
	'Março desperta movimento: experimentar é sua forma de encontrar respostas.',
	'Abril acende iniciativa: você nasceu para transformar planos em ação.',
	'Maio oferece estabilidade: seus talentos crescem com tempo e raízes.',
	'Junho favorece trocas: sua sorte se movimenta por conversas e encontros.',
	'Julho protege seus vínculos e fortalece tudo que faz você se sentir em casa.',
	'Agosto carrega brilho: ocupar seu espaço atrai reconhecimento.',
	'Setembro traz clareza para organizar desejos e transformá-los em resultado.',
	'Outubro busca equilíbrio: seu magnetismo cresce quando você escolhe com verdade.',
	'Novembro revela profundidade e um radar forte para oportunidades escondidas.',
	'Dezembro abre horizontes: sua curiosidade aponta a próxima aventura.'
];

const tarotCards = [
	{ name: 'A Lua', meaning: 'O mistério está falando com você; siga o sinal que chega em sonho.' },
	{ name: 'A Estrela', meaning: 'Sua força é leve e clara; a verdade chega sem forçar.' },
	{ name: 'O Caminho', meaning: 'Uma escolha sem pressa abre portas reais para o futuro.' },
	{ name: 'A Roda da Fortuna', meaning: 'O ciclo está girando; a mudança pede sua presença.' },
	{ name: 'A Imperatriz', meaning: 'A criação começa pela forma como você cuida do que é seu.' },
	{ name: 'O Sol', meaning: 'Seu brilho é reconhecido; aproveite a clareza para agir.' }
];

function updateBirthDetails(reveal = false) {
	const birthNote = document.querySelector('#birth-note');
	if (!birthInput.value) {
		birthNote.hidden = true;
		document.querySelector('#birth-display').textContent = 'sua data aparecerá aqui';
		document.querySelector('#birth-cycle').textContent = 'confirme para revelar seu ciclo';
		return;
	}
	const birthDate = new Date(`${birthInput.value}T12:00:00`);
	let age = today.getFullYear() - birthDate.getFullYear();
	const birthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
	if (!birthdayPassed) age -= 1;
	const dateText = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(birthDate);
	const weekday = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(birthDate);
	const dayMessage = birthDate.getDate() <= 10 ? 'Os primeiros dias do mês dão a você uma energia de iniciativa.' : birthDate.getDate() <= 20 ? 'Os dias centrais do mês reforçam seu dom de criar conexões.' : 'Os últimos dias do mês marcam uma visão forte do que vem depois.';
	const card = tarotCards[(birthDate.getDate() + birthDate.getMonth()) % tarotCards.length];
	document.querySelector('#birth-display').textContent = dateText;
	document.querySelector('#birth-cycle').textContent = `${weekday}, ${age} anos de histórias para iluminar`;
	birthNote.innerHTML = `${monthMessages[birthDate.getMonth()]} ${dayMessage}<br><span class="tarot-card-name">Carta de tarô: ${card.name}</span><span class="tarot-card-meaning">${card.meaning}</span>`;
	birthNote.hidden = !reveal;
}

confirmBirth.addEventListener('click', () => {
	if (!birthInput.value) {
		birthInput.focus();
		return;
	}
	cardModal.hidden = false;
	cardForm.querySelector('input').focus();
});

function hideCardModal() {
	cardModal.hidden = true;
}

closeModal.addEventListener('click', hideCardModal);
cardModal.querySelector('[data-close-modal]').addEventListener('click', hideCardModal);

function showPaymentMethod(method) {
	const isPix = method === 'pix';
	cardTab.classList.toggle('active', !isPix);
	pixTab.classList.toggle('active', isPix);
	cardTab.setAttribute('aria-selected', String(!isPix));
	pixTab.setAttribute('aria-selected', String(isPix));
	cardForm.hidden = isPix;
	document.querySelector('.demo-card').hidden = isPix;
	pixPanel.hidden = !isPix;
}

cardTab.addEventListener('click', () => showPaymentMethod('card'));
pixTab.addEventListener('click', () => showPaymentMethod('pix'));
copyPix.addEventListener('click', () => {
	copyPix.textContent = 'Código copiado';
	window.setTimeout(() => { copyPix.textContent = 'Copiar código Pix'; }, 1600);
});

cardNumber.addEventListener('input', () => {
	const digits = cardNumber.value.replace(/\D/g, '').slice(0, 16);
	cardNumber.value = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
	demoCardNumber.textContent = digits ? cardNumber.value : '0000 0000 0000 0000';
});

cardName.addEventListener('input', () => {
	const value = cardName.value.trim().toUpperCase().slice(0, 22) || 'SEU NOME';
	demoCardName.textContent = value;
});

cardExpiry.addEventListener('input', () => {
	const digits = cardExpiry.value.replace(/\D/g, '').slice(0, 4);
	if (digits.length <= 2) {
		const month = Math.min(Number(digits || 0), 12);
		cardExpiry.value = String(month).padStart(2, '0');
	} else {
		const month = Math.min(Number(digits.slice(0, 2)), 12);
		const year = digits.slice(2, 4);
		cardExpiry.value = `${String(month).padStart(2, '0')}/${year}`;
	}
	demoCardExpiry.textContent = cardExpiry.value || '00/00';
});

cardCvv.addEventListener('input', () => {
	cardCvv.value = cardCvv.value.replace(/\D/g, '').slice(0, 3);
});

function validateCardForm() {
	if (cardNumber.value.replace(/\s/g, '').length !== 16) {
		cardNumber.focus();
		return false;
	}
	if (!cardName.value.trim()) {
		cardName.focus();
		return false;
	}
	if (!/^\d{2}\/\d{2}$/.test(cardExpiry.value)) {
		cardExpiry.focus();
		return false;
	}
	const [month] = cardExpiry.value.split('/').map(Number);
	if (month < 1 || month > 12) {
		cardExpiry.focus();
		return false;
	}
	if (cardCvv.value.replace(/\D/g, '').length !== 3) {
		cardCvv.focus();
		return false;
	}
	return true;
}

cardForm.addEventListener('submit', event => {
	event.preventDefault();
	if (!validateCardForm()) {
		return;
	}
	hideCardModal();
	confirmBirth.disabled = true;
	confirmBirth.textContent = 'lendo seu futuro...';
	birthLoading.hidden = false;
	updateBirthDetails();
	window.setTimeout(() => {
		birthConfirmed = true;
		updateBirthDetails(true);
		birthLoading.hidden = true;
		confirmBirth.disabled = false;
		confirmBirth.textContent = '✓ data confirmada';
	}, 3000);
});

birthInput.addEventListener('change', () => {
	birthConfirmed = false;
	confirmBirth.textContent = 'Confirmar data';
	birthLoading.hidden = true;
	updateBirthDetails();
});

document.querySelector('#new-reading').addEventListener('click', () => {
	document.querySelectorAll('.sign-card').forEach(card => card.classList.remove('active'));
	birthConfirmed = false;
	document.querySelector('#reading-symbol').innerHTML = getIconSvg('aries');
	document.querySelector('#reading-title').textContent = 'Seu céu está esperando';
	document.querySelector('#forecast').textContent = 'Selecione um signo acima para abrir sua previsão.';
	document.querySelector('#advice').textContent = 'Seu ritual começa com uma escolha.';
	details.hidden = true;
	document.querySelector('#new-reading').hidden = true;
	document.querySelector('#sign-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
});