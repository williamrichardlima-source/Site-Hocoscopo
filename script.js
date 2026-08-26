const signs = [
	{ name: 'Áries', symbol: '♈', period: '21 mar — 19 abr', forecast: 'A coragem que você procura já está em movimento. Uma conversa direta abre espaço para uma oportunidade que parecia distante.', energy: '8.5 / 10', meter: '85%', number: '17', color: 'Coral', hex: '#ef8067', time: '09:40', advice: 'Dê o primeiro passo antes de pedir permissão.' },
	{ name: 'Touro', symbol: '♉', period: '20 abr — 20 mai', forecast: 'Seu ritmo constante vence a pressa alheia. Cuide do que é simples e valioso: uma escolha paciente hoje rende tranquilidade amanhã.', energy: '7.2 / 10', meter: '72%', number: '06', color: 'Verde oliva', hex: '#788b63', time: '14:20', advice: 'O que cresce devagar cria raízes profundas.' },
	{ name: 'Gêmeos', symbol: '♊', period: '21 mai — 20 jun', forecast: 'Ideias chegam em sequência e uma delas merece sua atenção. Compartilhe o que pensa: sua curiosidade pode conectar as pessoas certas.', energy: '9.1 / 10', meter: '91%', number: '33', color: 'Amarelo sol', hex: '#e2b947', time: '11:15', advice: 'Uma pergunta bem feita pode mudar o rumo do dia.' },
	{ name: 'Câncer', symbol: '♋', period: '21 jun — 22 jul', forecast: 'A intuição está especialmente nítida. Diminua o ruído, escute o corpo e escolha o lugar onde você pode ser inteiro.', energy: '8.0 / 10', meter: '80%', number: '02', color: 'Azul névoa', hex: '#7295a5', time: '20:05', advice: 'Sensibilidade também é uma forma de força.' },
	{ name: 'Leão', symbol: '♌', period: '23 jul — 22 ago', forecast: 'Sua presença ilumina uma sala sem esforço. Use esse brilho para reconhecer alguém que caminhou com você, e o retorno será genuíno.', energy: '8.8 / 10', meter: '88%', number: '19', color: 'Dourado', hex: '#d49b3f', time: '16:45', advice: 'Liderar também é fazer espaço para outros brilharem.' },
	{ name: 'Virgem', symbol: '♍', period: '23 ago — 22 set', forecast: 'Nem tudo precisa estar perfeito para começar. Organize apenas o próximo passo e deixe que a clareza apareça enquanto você caminha.', energy: '7.7 / 10', meter: '77%', number: '44', color: 'Terracota', hex: '#bd7658', time: '08:10', advice: 'Feito com presença vale mais que perfeito no papel.' },
	{ name: 'Libra', symbol: '♎', period: '23 set — 22 out', forecast: 'Um equilíbrio novo pede uma decisão honesta. Confie no que traz leveza, mesmo que não seja a opção mais esperada pelos outros.', energy: '7.9 / 10', meter: '79%', number: '12', color: 'Rosa antigo', hex: '#ba7d83', time: '13:30', advice: 'Paz não é ausência de escolha; é escolha alinhada.' },
	{ name: 'Escorpião', symbol: '♏', period: '23 out — 21 nov', forecast: 'Você enxerga além da superfície. Transforme essa percepção em ação cuidadosa e uma situação confusa começa a revelar sua verdade.', energy: '8.9 / 10', meter: '89%', number: '08', color: 'Vinho', hex: '#964c4f', time: '22:18', advice: 'Use sua intensidade para criar, não para se esconder.' },
	{ name: 'Sagitário', symbol: '♐', period: '22 nov — 21 dez', forecast: 'O horizonte se alarga quando você aceita um convite inesperado. Há aprendizado em uma rota diferente da planejada.', energy: '9.0 / 10', meter: '90%', number: '21', color: 'Laranja queimado', hex: '#d17643', time: '17:05', advice: 'A aventura começa quando o plano perde uma página.' },
	{ name: 'Capricórnio', symbol: '♑', period: '22 dez — 19 jan', forecast: 'Uma meta ganha contornos concretos. Celebre o que já foi construído e renegocie o prazo que está cobrando mais de você do que deveria.', energy: '7.5 / 10', meter: '75%', number: '04', color: 'Azul petróleo', hex: '#39717a', time: '10:50', advice: 'Disciplina sem descanso é só outra forma de pressa.' },
	{ name: 'Aquário', symbol: '♒', period: '20 jan — 18 fev', forecast: 'Uma solução original nasce quando você troca de perspectiva. Sua diferença não precisa ser explicada para ser útil.', energy: '8.6 / 10', meter: '86%', number: '11', color: 'Azul elétrico', hex: '#4e83aa', time: '15:00', advice: 'O futuro costuma parecer estranho antes de parecer óbvio.' },
	{ name: 'Peixes', symbol: '♓', period: '19 fev — 20 mar', forecast: 'A imaginação aponta uma direção real. Anote o sonho, mas dê a ele uma pequena tarefa: o invisível gosta de encontrar forma.', energy: '8.3 / 10', meter: '83%', number: '27', color: 'Lavanda', hex: '#967da7', time: '21:12', advice: 'Sonhar é o mapa; cuidar do detalhe é a viagem.' }
];

const grid = document.querySelector('#sign-grid');
const reading = document.querySelector('#reading');
const details = document.querySelector('#details-grid');
const birthInput = document.querySelector('#birth-date');
const confirmBirth = document.querySelector('#confirm-birth');
const birthLoading = document.querySelector('#birth-loading');
const cardModal = document.querySelector('#card-modal');
const cardForm = document.querySelector('#card-form');
const closeModal = document.querySelector('#close-modal');
const cardTab = document.querySelector('#card-tab');
const pixTab = document.querySelector('#pix-tab');
const pixPanel = document.querySelector('#pix-panel');
const copyPix = document.querySelector('#copy-pix');
let birthConfirmed = false;
const today = new Date();
const formattedDate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(today);
document.querySelector('#reading-date').textContent = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(today).replace('.', '').toUpperCase();
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
	button.innerHTML = `<span class="sign-icon">${sign.symbol}</span><span class="sign-name">${sign.name}</span><span class="sign-period">${sign.period}</span>`;
	button.addEventListener('click', () => showReading(index));
	grid.appendChild(button);
});

function showReading(index) {
	const sign = signs[index];
	document.querySelectorAll('.sign-card').forEach((card, cardIndex) => card.classList.toggle('active', cardIndex === index));
	document.querySelector('#reading-symbol').textContent = sign.symbol;
	document.querySelector('#reading-title').textContent = sign.name;
	const dailyForecast = `${sign.forecast.split('. ')[0]}.`;
	document.querySelector('#forecast').textContent = dailyForecast;
	document.querySelector('#forecast').dataset.base = dailyForecast;
	document.querySelector('#energy').textContent = sign.energy;
	document.querySelector('#energy-meter').style.width = sign.meter;
	document.querySelector('#lucky-number').textContent = sign.number;
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
	document.querySelector('#birth-display').textContent = dateText;
	document.querySelector('#birth-cycle').textContent = `${weekday}, ${age} anos de histórias para iluminar`;
	birthNote.textContent = `${monthMessages[birthDate.getMonth()]} ${dayMessage}`;
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

cardForm.addEventListener('submit', event => {
	event.preventDefault();
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
	document.querySelector('#reading-symbol').textContent = '✦';
	document.querySelector('#reading-title').textContent = 'Seu céu está esperando';
	document.querySelector('#forecast').textContent = 'Selecione um signo acima para abrir sua previsão.';
	document.querySelector('#advice').textContent = 'Seu ritual começa com uma escolha.';
	details.hidden = true;
	document.querySelector('#new-reading').hidden = true;
	document.querySelector('#sign-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
