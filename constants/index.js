const navLinks = [
 {
	id: "cocktails",
	title: "Fundadores",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "Our Work",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Eddy Martinez",
	country: "Presidente",
	detail: "Parque Cibernético de Santo Domingo",
	price: "ACTIVO",
 },
 {
	name: "Maria Fernanda Henríquez",
	country: "Directora",
	detail: "Club Astronómico Las Américas, Parque Cibernético de Santo Domingo",
	price: "ACTIVA",
 },
 {
	name: "Génesis Jiménez Suárez",
	country: "Investigadora",
	detail: "Parque Cibernético de Santo Domingo",
	price: "ACTIVA",
 },
 {
	name: "Enmanuel Henríquez",
	country: "Investigador",
	detail: "Parque Cibernético de Santo Domingo",
	price: "ACTIVO",
 },
];

const mockTailLists = [
 {
	name: "Christofer M Baez",
	country: "Operaciones",
	detail: "Club Astronómico Las Américas",
	price: "ACTIVO",
 },
 {
	name: "Idrialis Castillo",
	country: "Miembro",
	detail: "Club Astronómico Las Américas",
	price: "ACTIVA",
 },
 {
	name: "Prof Carime Matos PhD",
	country: " investigación en Astronomía y Astrofísica",
	detail: "UASD ",
	price: "ACTIVA",
 },
 {
	name: "Edwin Sánchez",
	country: "Líder",
	detail: "Grupo de Ciencias Aeroespaciales INTEC",
	price: "ACTIVO",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Los mejores profesionales",
 "Alianzas gubernamentales",
 "Cooperación internacional",
 "Divulgación científica",
];

const goodLists = [
 "Primer club astronómico con IA del Caribe",
 "Enfocado en publicaciones científicas",
 "Observación activa del cosmos 24 horas",
 "Sistema avanzado de detecciones",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "Aut. Las Américas, Km 27 1/2 La Caleta, Boca Chica, Rep. Dom.",
 contact: {
	phone: "(809) 738-5000",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "9:00am – 4:00pm" },
 { day: "Fri", time: "11:00am – 3pm" },

];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "https://www.instagram.com/parqueciberneticosd/",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "https://x.com/parquecibernet1",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "https://www.facebook.com/pcsdrd/?locale=es_LA",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Telescopio Solar",
	image: "/images/abt5.png",
	title: "Telescopio para la observación del Sol",
	description:
	 "Con este telescopio podrás observar el Sol de manera segura y detallada, descubriendo sus manchas solares y otras características fascinantes.",
 },
 {
	id: 2,
	name: "Telescopio RASA",
	image: "/images/abt1.png",
	title: "Telescopio Rowe-Ackermann Schmidt Astrograph",
	description:
	 "Este telescopio es ideal para astrofotografía, permitiendo capturar imágenes de alta calidad de objetos celestes lejanos.",
 },
 {
	id: 3,
	name: "Telescopio Dobson",
	image: "/images/drink3.png",
	title: "Telescopio Dobsoniano",
	description:
	 "Este telescopio Dobson Compacto de 25 pulgadas es perfecto para la observación de planetas y nebulosas, ofreciendo una experiencia visual impresionante.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
