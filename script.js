/* Al recargar, empieza siempre desde la portada (el navegador por defecto te devuelve a donde estabas) */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.addEventListener('pageshow', () => window.scrollTo(0, 0));

/* ================= ILUSTRACIONES (SVG) ================= */
const ILL = {
  reloj: `<svg viewBox="0 0 200 200"><rect x="78" y="0" width="44" height="200" rx="8" fill="#2b2622"/><circle cx="100" cy="100" r="72" fill="#d9ceb4" stroke="#6e5d4a" stroke-width="6"/><circle cx="100" cy="100" r="62" fill="none" stroke="#8c7a62" stroke-width="1"/>
  ${['XII','III','VI','IX'].map((n,i)=>`<text x="${[100,158,100,42][i]}" y="${[44,106,166,106][i]}" text-anchor="middle" font-family="serif" font-size="14" fill="#3b3128">${n}</text>`).join('')}
  <line class="aguja2" x1="100" y1="100" x2="100" y2="64" stroke="#3b3128" stroke-width="4" stroke-linecap="round"/><line class="aguja" x1="100" y1="100" x2="100" y2="48" stroke="#3b3128" stroke-width="2.5" stroke-linecap="round"/><circle cx="100" cy="100" r="4" fill="#3b3128"/></svg>`,
  foto: `<svg viewBox="0 0 220 170"><rect x="8" y="8" width="204" height="154" fill="#d8c6a0" stroke="#a89168" stroke-width="4" transform="rotate(-2 110 85)"/><rect x="24" y="24" width="172" height="122" fill="#b99d72" transform="rotate(-2 110 85)"/><g fill="#6a5640" transform="rotate(-2 110 85)"><circle cx="70" cy="70" r="11"/><rect x="58" y="82" width="24" height="46" rx="8"/><circle cx="110" cy="62" r="13"/><rect x="95" y="76" width="30" height="52" rx="9"/><circle cx="152" cy="72" r="10"/><rect x="141" y="83" width="22" height="45" rx="8"/></g></svg>`,
  casa: `<svg viewBox="0 0 240 220"><rect width="240" height="220" fill="#e4ddcf" rx="3"/><g fill="none" stroke="#4a4036" stroke-width="2.5" stroke-linecap="round"><path d="M50 110 L120 50 L190 110 V180 H50 Z"/><rect x="66" y="118" width="26" height="26"/><rect x="148" y="118" width="26" height="26"/><rect x="66" y="152" width="26" height="22"/><rect x="148" y="152" width="26" height="22"/><rect x="108" y="140" width="24" height="40"/><path d="M20 190 q30 -14 60 0 M160 192 q34 -16 66 0"/></g><g fill="#4a4036"><circle cx="86" cy="204" r="5"/><circle cx="106" cy="204" r="5"/><circle cx="134" cy="204" r="5"/><circle cx="154" cy="204" r="5"/></g></svg>`,
  nota: `<svg viewBox="0 0 240 130"><rect x="10" y="14" width="220" height="100" fill="#eee6d3" stroke="#bfb293" transform="rotate(-2 120 65)"/><text x="120" y="70" text-anchor="middle" font-family="cursive" font-size="17" fill="#4a4036" transform="rotate(-2 120 65)">No tienes que fingir</text><text x="120" y="92" text-anchor="middle" font-family="cursive" font-size="17" fill="#4a4036" transform="rotate(-2 120 65)">que estás bien</text></svg>`,
  helado: `<svg viewBox="0 0 220 180"><rect width="220" height="180" fill="#e4ddcf" rx="3"/><g stroke="#4a4036" stroke-width="2.5" stroke-linejoin="round"><path d="M55 90 L75 150 L95 90 Z" fill="#c9a36d"/><circle cx="75" cy="76" r="24" fill="#c98f8f"/><path d="M125 90 L145 150 L165 90 Z" fill="#c9a36d"/><circle cx="145" cy="76" r="24" fill="#eadfc0"/></g></svg>`,
  silla: `<svg viewBox="0 0 160 200"><g fill="none" stroke="#9aa0a4" stroke-width="5" stroke-linecap="round"><path d="M44 30 V120 H116 V30 M44 70 H116 M50 120 V185 M110 120 V185"/></g></svg>`,
  puerta: `<svg viewBox="0 0 200 240"><rect width="200" height="240" fill="#3b4148"/><rect x="40" y="20" width="120" height="196" fill="#1b1f24"/><polygon points="40,20 88,34 88,200 40,216" fill="#7d8388" stroke="#2a3036" stroke-width="3"/><circle cx="78" cy="118" r="3.5" fill="#c4ab84"/><polygon points="88,216 160,216 190,240 70,240" fill="#e9dcb0" opacity=".55"/><rect x="88" y="34" width="6" height="170" fill="#e9dcb0" opacity=".3"/></svg>`,
  documento: `<svg viewBox="0 0 220 170"><rect width="220" height="170" fill="#4a3f36" rx="4"/><rect x="40" y="16" width="130" height="140" fill="#e4ddcf" transform="rotate(-4 105 85)"/><g stroke="#b9b0a0" stroke-width="5" stroke-linecap="round" transform="rotate(-4 105 85)"><path d="M58 40 H150 M58 58 H138 M58 76 H152 M58 94 H120"/></g><path d="M96 170 Q104 118 140 112 Q176 108 188 170 Z" fill="#b99d72" opacity=".92"/></svg>`,
  relojMuneca: `<svg viewBox="0 0 200 260"><rect x="72" y="0" width="56" height="260" rx="10" fill="#26221f"/><g stroke="#3d3732" stroke-width="2"><path d="M80 20 H120 M80 40 H120 M80 220 H120 M80 240 H120"/></g><circle cx="100" cy="130" r="64" fill="#5d5448" stroke="#2f2a25" stroke-width="5"/><circle cx="100" cy="130" r="54" fill="#cfc4aa"/><circle cx="100" cy="130" r="54" fill="none" stroke="#8c7a62" stroke-width="1.5" stroke-dasharray="2 5"/><path d="M62 150 Q70 172 96 182" stroke="#a89675" stroke-width="3" fill="none" opacity=".7"/><line x1="100" y1="130" x2="100" y2="98" stroke="#2f2a25" stroke-width="3.5" stroke-linecap="round"/><line x1="100" y1="130" x2="122" y2="140" stroke="#2f2a25" stroke-width="2.5" stroke-linecap="round"/><circle cx="100" cy="130" r="3.5" fill="#2f2a25"/><path d="M68 100 Q80 78 106 76" stroke="#fff" stroke-width="4" fill="none" opacity=".35" stroke-linecap="round"/></svg>`,
  calle: `<svg viewBox="0 0 300 200"><defs><filter id="bl"><feGaussianBlur stdDeviation="2.5"/></filter><radialGradient id="gl"><stop offset="0" stop-color="#f1d9a0" stop-opacity=".75"/><stop offset="1" stop-color="#f1d9a0" stop-opacity="0"/></radialGradient></defs><rect width="300" height="200" fill="#12171d"/><g filter="url(#bl)"><rect x="0" y="50" width="70" height="120" fill="#232c36"/><rect x="78" y="30" width="60" height="140" fill="#1d252e"/><rect x="190" y="44" width="52" height="126" fill="#222b35"/><rect x="248" y="64" width="52" height="106" fill="#1b232c"/><g fill="#d9c18a" opacity=".7"><rect x="14" y="74" width="9" height="12"/><rect x="40" y="104" width="9" height="12"/><rect x="92" y="58" width="9" height="12"/><rect x="112" y="92" width="9" height="12"/><rect x="204" y="76" width="9" height="12"/><rect x="262" y="96" width="9" height="12"/></g></g><rect y="168" width="300" height="32" fill="#0d1116"/><path d="M0 182 H300" stroke="#2b3541" stroke-width="2"/><g><rect x="156" y="70" width="3.5" height="102" fill="#3b444e"/><circle cx="158" cy="70" r="30" fill="url(#gl)"/><circle cx="158" cy="70" r="4" fill="#f1d9a0"/><ellipse cx="158" cy="186" rx="34" ry="5" fill="#f1d9a0" opacity=".18"/></g></svg>`,
  manos: `<svg viewBox="0 0 260 150"><rect width="260" height="150" fill="#3a332c" rx="4"/><rect y="104" width="260" height="46" fill="#5a4a3a"/><g fill="#c8a88a" stroke="#8c6c58" stroke-width="2.5" stroke-linejoin="round"><path d="M46 112 Q40 82 62 76 L120 74 Q134 76 134 90 L134 108 Z"/><path d="M62 76 L66 56 M80 75 L84 52 M98 74 L103 52 M116 74 L120 56" fill="none" stroke-linecap="round" stroke-width="9"/><path d="M158 110 Q158 90 170 84 L206 78 Q224 82 226 104 L222 114 Z"/><path d="M170 84 L168 64 M186 80 L186 58 M202 78 L204 58 M216 80 L222 62" fill="none" stroke-linecap="round" stroke-width="9"/></g></svg>`,
  vaso: `<svg viewBox="0 0 200 200"><rect width="200" height="200" fill="#4b4540" rx="4"/><rect x="0" y="130" width="200" height="70" fill="#7a6f66"/><rect x="0" y="118" width="200" height="14" fill="#a79c8e"/><path d="M82 62 L90 118 H114 L122 62 Z" fill="#cfd8dc" fill-opacity=".35" stroke="#dfe6e8" stroke-width="3"/><path d="M85 84 L91 118 H113 L119 84 Z" fill="#9fb6bf" opacity=".6"/><path d="M92 68 L97 112" stroke="#fff" stroke-width="3" opacity=".4" stroke-linecap="round"/></svg>`,
  sillaVentana: `<svg viewBox="0 0 240 220"><rect width="240" height="220" fill="#8d9299"/><rect x="40" y="16" width="160" height="140" fill="#dfe3e0" stroke="#4a4f55" stroke-width="6"/><path d="M120 16 V156 M40 86 H200" stroke="#4a4f55" stroke-width="5"/><path d="M60 156 L90 200 H150 L180 156 Z" fill="#fff" opacity=".18"/><g fill="none" stroke="#3b4046" stroke-width="6" stroke-linecap="round"><path d="M100 110 V176 H150 V110 M100 144 H150 M104 176 V210 M146 176 V210"/></g></svg>`,
  fotoReloj: `<svg viewBox="0 0 320 210"><rect x="18" y="14" width="190" height="150" fill="#d8c6a0" stroke="#a89168" stroke-width="4" transform="rotate(-3 113 89)"/><rect x="32" y="28" width="162" height="122" fill="#a98f6b" transform="rotate(-3 113 89)"/><g fill="#5d4b38" transform="rotate(-3 113 89)"><circle cx="62" cy="76" r="10"/><rect x="51" y="87" width="22" height="50" rx="8"/><circle cx="100" cy="70" r="11"/><rect x="88" y="82" width="25" height="55" rx="9"/><circle cx="136" cy="74" r="10"/><rect x="125" y="85" width="22" height="52" rx="8"/><circle cx="170" cy="82" r="9"/><rect x="160" y="92" width="20" height="45" rx="7"/></g><g transform="rotate(14 250 120)"><rect x="228" y="48" width="44" height="150" rx="8" fill="#26221f"/><circle cx="250" cy="122" r="40" fill="#5d5448" stroke="#2f2a25" stroke-width="4"/><circle cx="250" cy="122" r="32" fill="#cfc4aa"/><line x1="250" y1="122" x2="250" y2="100" stroke="#2f2a25" stroke-width="3" stroke-linecap="round"/><line x1="250" y1="122" x2="265" y2="129" stroke="#2f2a25" stroke-width="2.5" stroke-linecap="round"/><circle cx="250" cy="122" r="3" fill="#2f2a25"/></g></svg>`,
  maleta: `<svg viewBox="0 0 200 170"><rect x="30" y="50" width="140" height="100" rx="10" fill="#7d6648" stroke="#4d3f30" stroke-width="4"/><path d="M75 50 V34 H125 V50" fill="none" stroke="#4d3f30" stroke-width="5"/><rect x="88" y="86" width="24" height="16" fill="#c4ab84"/><rect x="132" y="60" width="26" height="36" fill="#e4ddcf" transform="rotate(8 145 78)"/></svg>`
};
ILL.casa2 = ILL.casa.replace('</svg>', '<path d="M0 70 L240 112 M70 0 L128 220 M180 0 L150 220" stroke="#a89c86" stroke-width="1.2" opacity=".7" fill="none"/></svg>');

/* ================= HISTORIA =================
   Bloques: ['esc','nombre'] cambia el fondo · ['p','texto'] párrafo · ['d','texto'] diálogo
   ['ill','clave'] ilustración · ['nota','texto'] indicación en cursiva · ['cita','texto'] frase final
   Escenas: aula consultorio sinjar carretera centro comedor comun noche hospital parque negro
   Añade ' recuerdo' (ej. 'sinjar recuerdo') para el tono apagado de los recuerdos.
   MÚSICA: cambia los nombres de archivo por los de tu carpeta. */
/* Atajo para pegar capítulos: una línea por párrafo.
   Línea que empieza con — es diálogo · @esc nombre cambia el fondo · @ill clave pone una ilustración */
const T = txt => txt.split('\n').map(l => l.trim()).filter(Boolean).map(l =>
  l.startsWith('@esc ') ? ['esc', l.slice(5)] :
  l.startsWith('@ill ') ? ['ill', l.slice(5)] :
  l.startsWith('@cita ') ? ['cita', l.slice(6)] :
  l.startsWith('@titulo ') ? ['titulo', l.slice(8)] :
  l.startsWith('@nota ') ? ['nota', l.slice(6)] :
  l.startsWith('—') ? ['d', l] : ['p', l]);

const CAPITULOS = [
{ id:'prologo', titulo:'Prólogo — Lo que queda', musica:'1', bloques:[
 ['esc','aula'],['ill','reloj'],
 ['p','Hay recuerdos que nunca terminan de quedarse en el pasado. Pueden pasar años, podemos cambiar de ciudad, conocer personas nuevas e intentar construir una vida diferente, pero algunas cosas siguen ahí, esperando cualquier oportunidad para regresar.'],
 ['p','Yo pensaba que había aprendido a convivir con mis recuerdos. Creía que, si evitaba hablar de ellos, tarde o temprano dejarían de molestarme. Durante mucho tiempo funcionó. O al menos eso quería creer.'],
 ['p','Todo comenzó durante una clase en la universidad, en 2023.'],
 ['p','El profesor hablaba sobre las consecuencias de la guerra. Explicaba que los conflictos no solamente destruyen ciudades, sino también familias, hogares y vidas que nunca vuelven a ser las mismas. Algunos estudiantes escuchaban con atención. Otros revisaban sus cuadernos o miraban sus teléfonos.'],
 ['p','Yo permanecía sentado, intentando concentrarme.'],
 ['d','—Las guerras no solamente afectan a quienes participan directamente en ellas —continuó el profesor—. También dejan consecuencias en las personas que se ven obligadas a abandonar sus hogares.'],
 ['p','Entonces escuché una risa.'],
 ['p','No fue especialmente fuerte. Ni siquiera estoy seguro de que hubiera sido una burla intencional. Pero, cuando miré hacia un lado, vi a Lukas riéndose mientras el profesor hablaba.'],
 ['p','Algo dentro de mí cambió.'],
 ['p','Me levanté antes de pensar en lo que estaba haciendo. Todo ocurrió demasiado rápido. Hubo un movimiento brusco, varias voces y, de pronto, Lukas estaba en el suelo.'],
 ['p','El aula quedó en silencio.'],
 ['p','Miré mi mano extendida y después lo miré a él. No entendía por qué había reaccionado así. Tampoco sabía cómo explicar lo que estaba sintiendo.'],
 ['d','—¿Qué… hice?'],['p','Nadie respondió inmediatamente.'],
 ['esc','consultorio'],
 ['p','Unos minutos después, estaba sentado frente a una psicóloga. Tenía las manos entrelazadas y no dejaba de mover una pierna.'],
 ['d','—Me han contado lo que pasó —dijo ella—. ¿Quieres explicarme qué ocurrió?'],
 ['d','—Estábamos hablando de la guerra.'],['d','—¿Y qué pasó?'],['d','—Lukas empezó a reírse.'],
 ['d','—¿Te molestó?'],['d','—Sí.'],['d','—¿Por qué?'],
 ['p','Miré al suelo.'],
 ['d','—Porque hay personas que han perdido todo. Personas que ya no tienen una casa a la que regresar, familias que nunca volverán a estar juntas… Y él estaba riéndose.'],
 ['d','—¿Hay alguien que recuerdes cuando escuchas esas cosas? —preguntó.'],
 ['p','No respondí. No necesitaba decir sus nombres. Los tenía presentes desde mucho antes de aquella clase.'],
 ['p','El reloj comenzó a escucharse nuevamente. Y, por primera vez en mucho tiempo, dejé de intentar ignorar mis recuerdos.']
]},
{ id:'cap1', titulo:'Capítulo I — Antes de que todo cambiara', musica:'2', bloques: T(`
@esc sinjar recuerdo
@ill foto
Mi nombre es Hassan. Antes de todo lo que ocurrió, era simplemente un niño que vivía en Sinjar, una ciudad del norte de Irak.
Tenía alrededor de once años y, como cualquier niño de mi edad, pensaba en cosas que ahora parecen insignificantes. Me preocupaba llegar tarde, quería pasar tiempo con mi familia y a veces me quejaba de tener que hacer cosas que no me gustaban.
No recuerdo cada detalle de aquellos días, pero sí recuerdo cómo se sentía estar en casa.
Recuerdo las calles, las voces de las personas que conocíamos y esa sensación de que todo estaba exactamente donde debía estar. No pensaba demasiado en el futuro porque nunca había tenido motivos para hacerlo. Creía que al día siguiente todo seguiría igual.
Pero no fue así.
En 2014, la violencia comenzó a extenderse por nuestra región. Las noticias llegaban cada vez con más frecuencia y los adultos hablaban en voz baja. Había preocupación en sus rostros, aunque intentaran ocultarla cuando nosotros estábamos cerca.
Al principio no comprendía completamente lo que estaba ocurriendo. Escuchaba nombres de lugares, conversaciones interrumpidas y palabras que nunca antes habían formado parte de mi vida.
Después llegaron los momentos en los que ya no fue posible fingir que todo estaba bien.
Recuerdo a las personas apresurándose por las calles. Recuerdo cómo los adultos comenzaron a organizarse y cómo las conversaciones dejaron de tratar sobre cosas cotidianas. De pronto, lo único importante era encontrar un lugar seguro.
Mi familia tuvo que abandonar nuestro hogar.
No recuerdo exactamente qué fue lo primero que guardamos. Los recuerdos de aquella salida están mezclados en mi cabeza, como fotografías que alguien hubiera sacado de una caja y colocado sin ningún orden.
Pero sí recuerdo una fotografía familiar.
La sostuve entre mis manos durante unos segundos antes de guardarla. No era una fotografía especialmente bonita ni tenía nada extraordinario. Simplemente aparecíamos juntos, en un momento en el que todavía podíamos estar tranquilos.
No quería perderla.
Durante el camino, intenté mirar hacia atrás varias veces. Quería memorizar las calles, las casas y todo lo que estaba dejando. Pensaba que, si conseguía recordar cada detalle, tal vez sería más fácil regresar algún día.
No sabía cuánto tiempo estaríamos fuera.
Tampoco sabía qué significaba realmente convertirse en refugiado. Para mí, solamente significaba que ya no podía dormir en mi propia cama y que los adultos parecían tener miedo incluso cuando intentaban sonreír.
@esc carretera recuerdo
Durante los meses siguientes, nuestra vida cambió por completo. Dejamos de tener una rutina estable y comenzamos a depender de lugares temporales, personas que intentaban ayudarnos y decisiones que muchas veces no estaban en nuestras manos.
En algún momento, surgió la posibilidad de que yo viajara a Alemania.
Mi madre intentó explicármelo con calma. Me habló de la seguridad, de la oportunidad de continuar estudiando y de la posibilidad de tener un futuro más estable.
Yo la escuchaba, pero solamente podía pensar en una cosa.
—¿Y tú?
Ella me miró.
—Lo importante es que estés a salvo.
—Pero no quiero irme sin ti.
Mi madre intentó tranquilizarme. Me explicó que no estaba abandonándome y que aquella oportunidad podía ayudarme a construir una vida mejor.
Yo no quería entenderlo.
No quería que mi futuro dependiera de separarme de las personas que más quería.
Sin embargo, llegó el día de partir.
En 2015, preparé una mochila con algunas pertenencias. Entre ellas estaba la fotografía que había guardado desde nuestra salida de Sinjar.
@ill maleta
Antes de marcharme, mi madre me abrazó.
No recuerdo todas las palabras que me dijo. Algunas se han ido perdiendo con los años. Pero recuerdo su voz y la forma en que intentaba mantenerse tranquila.
—Cuídate mucho, Hassan.
—Voy a volver.
Ella me miró con ternura.
—Primero tienes que estar bien.
Me fui sin saber exactamente cuándo volveríamos a encontrarnos.
El viaje a Alemania fue extraño. Había personas que intentaban ayudarme, lugares que no conocía y un idioma que apenas podía comprender. Todo parecía demasiado grande y demasiado diferente.
Cuando llegué al centro de acogida, una trabajadora me recibió y me explicó algunas cosas. Me indicó dónde podía dejar mis pertenencias, dónde estaban los dormitorios y dónde servían la comida.
Yo asentía aunque no entendiera todas sus palabras.
Quería parecer tranquilo, pero me sentía completamente perdido.
@esc comedor
El primer día intenté pasar desapercibido.
Entré al comedor con una bandeja y busqué un lugar libre. Había varias personas conversando, pero no conocía a ninguna.
Al fondo vi a un chico sentado solo.
Me acerqué con cierta inseguridad.
—¿Me puedo sentar?
Él levantó la mirada.
—Ni pincho.
No entendí si aquello era una respuesta o simplemente una forma extraña de hablar.
Miré la silla.
—Siéntate —añadió.
Me senté frente a él.
Comimos durante un rato sin decir nada. Yo no sabía qué preguntar y él tampoco parecía especialmente interesado en conversar.
Entonces noté que llevaba un reloj.
Lo acomodó cuidadosamente sobre su muñeca antes de continuar comiendo. Era un reloj sencillo, pero parecía tener mucha importancia para él.
@ill reloj
Lo observé durante unos segundos, aunque decidí no preguntar.
Todavía no sabía su nombre.
Se llamaba Emmanuel.
Unos días después volvimos a encontrarnos en la sala común. Él estaba sentado frente a un cuaderno y yo intentaba comprender una palabra en alemán.
—¿Y esto cómo se pronuncia? —pregunté.
Emmanuel miró la página.
—Ni idea.
—Llevas más tiempo aquí.
—Y tú sigues sin aprender.
Lo miré con molestia fingida.
No sabía si estaba bromeando, pero aquella vez no me molestó tanto.
En ese momento entró una chica con una bandeja.
—¿Está ocupado?
—No —respondí.
Se sentó con nosotros.
—Soy Rasha.
—Emmanuel.
—Hassan.
Rasha nos observó a los dos.
—¿Siempre estudian con esas caras?
—Sí —contestó Emmanuel.
—Qué ambiente tan agradable.
No pude evitar reírme un poco.
Fue una conversación pequeña, casi insignificante. Pero, después de tantos días sintiéndome fuera de lugar, hablar con alguien sin tener que explicar constantemente quién era resultó agradable.
Un tiempo después, una trabajadora entró en la sala acompañada de otra chica.
—Ella es Sarya. Acaba de llegar.
Levanté la mirada.
Por unos segundos no supe qué decir.
—¿Sarya?
Ella me observó con la misma sorpresa.
—¿Hassan?
Me levanté y nos abrazamos.
No hizo falta explicarles a los demás de dónde nos conocíamos. Algunas personas pertenecen a una parte de nuestra vida que no necesita demasiadas explicaciones.
Cuando nos separamos, la presenté.
—Ellos son Emmanuel y Rasha.
—Hola —dijo Rasha.
—Hola —respondió Sarya.
Emmanuel levantó ligeramente la mano a modo de saludo.
Desde aquel día comenzamos a pasar más tiempo juntos.
No ocurrió de golpe. Nuestra amistad se construyó a través de momentos pequeños: estudiar alemán, compartir comida, caminar por los pasillos y sentarnos en el mismo lugar aunque no tuviéramos nada importante que decir.
A veces Emmanuel se burlaba de mi pronunciación. Otras veces yo le recordaba que tampoco hablaba alemán perfectamente.
Rasha solía compartir su comida y tenía la costumbre de dibujar mientras conversábamos. Sarya era más reservada, pero poco a poco comenzó a participar en nuestras conversaciones.
Emmanuel seguía llevando su reloj.
Yo seguía guardando mi fotografía.
Y ninguno de nosotros hablaba demasiado sobre lo que había dejado atrás.
@esc comun
Un día, Rasha estaba dibujando en una hoja.
Me incliné para observar.
—¿Qué estás haciendo?
—Una casa.
—¿Para quién?
—Para nosotros.
Emmanuel miró el dibujo.
—Es demasiado pequeña.
—Pues la hacemos más grande —respondió Rasha.
Sarya tomó el lápiz y añadió otra ventana.
—Necesita más ventanas.
Yo dibujé un pequeño jardín.
La casa terminó teniendo cuatro ventanas y cuatro figuras delante.
No era un dibujo perfecto. Las líneas estaban torcidas y el jardín parecía más grande que la propia casa, pero nos gustó.
—Algún día tendremos una así —dijo Rasha.
—Primero tenemos que encontrar una —respondió Emmanuel.
—Y conseguir dinero —añadí.
—Y que tenga un jardín —dijo Sarya.
Rasha sonrió.
—Entonces queda decidido.
Aquella tarde fuimos al parque. Nos sentamos en un banco y seguimos hablando de la casa, como si realmente estuviéramos planeando dónde viviríamos.
No sabíamos cuánto tiempo permaneceríamos en el centro. Tampoco sabíamos qué iba a pasar con nuestras familias ni cuánto tardaríamos en sentirnos completamente seguros.
Pero comenzábamos a conocernos.
Y, poco a poco, aquel lugar dejó de sentirse tan extraño.
@ill casa
`) },
{ id:'cap2', titulo:'Capítulo II — Las heridas que no se ven', musica:'3', bloques: T(`
@esc centro
Con el tiempo aprendí que conocer a alguien no significa conocer todo lo que ha vivido.
Durante aquellos primeros meses, los cuatro compartíamos muchas cosas. Sin embargo, había conversaciones que nunca llegaban a ocurrir. Algunas preguntas parecían demasiado personales y otras simplemente no sabíamos cómo hacerlas.
Pensaba que, mientras estuviéramos juntos, todo estaría bien.
Me equivocaba.
Una tarde de 2016, vi a Sarya caminando sola por el pasillo del centro. Parecía distraída y llevaba la mirada fija en el suelo.
De pronto, una puerta se cerró de golpe.
@ill puerta
Sarya se detuvo.
Su expresión cambió inmediatamente. Por unos segundos pareció no estar en aquel pasillo, sino en algún lugar que yo no podía ver.
No entendí qué había ocurrido.
Me acerqué despacio.
—¿Sarya?
Ella levantó la mirada.
No le pregunté qué había pasado. No porque no me importara, sino porque comprendí que quizá no quería hablar.
Me senté a su lado.
Permanecimos así durante un rato.
A veces creemos que ayudar significa encontrar las palabras correctas. Pero aquella tarde entendí que también podemos acompañar a alguien sin exigirle explicaciones.
No volví a preguntarle por aquel momento.
Con Emmanuel era diferente.
Él tenía una forma particular de comportarse cuando estaba preocupado. Hablaba menos, evitaba mirar directamente a las personas y pasaba mucho tiempo acomodando su reloj.
@esc noche
Una noche lo vi sentado en su habitación.
Tenía el reloj entre las manos y parecía estar observándolo como si intentara recordar algo.
@ill reloj
—¿Todo bien? —pregunté desde la puerta.
Emmanuel levantó la mirada.
—Sí.
No le creí demasiado, pero tampoco insistí.
Con el tiempo llegué a conocer algunos fragmentos de su pasado. Había vivido en la República Democrática del Congo y había atravesado experiencias que le resultaba muy difícil recordar.
Una vez me contó que había perdido a una persona importante durante aquellos años. No quiso explicarme todos los detalles y yo no se los pedí.
Lo único que entendí fue que aquel reloj estaba relacionado con esa parte de su vida.
Para él no era simplemente un objeto.
Era un recuerdo que no quería perder.
Lo vi cerrar los ojos.
—Lo siento… —murmuró.
Después se colocó el reloj y apagó la lámpara.
No supe qué decirle.
Quizá porque, aunque compartíamos muchas cosas, todavía había dolores que cada uno debía aprender a explicar a su manera.
@esc centro
Unos días después ocurrió algo con Sarya que cambió nuestra relación con ella.
La encontré sentada en el borde de su cama. Tenía un documento médico entre las manos y lo observaba una y otra vez.
Sus dedos temblaban ligeramente.
Llamé a la puerta.
—¿Sarya?
No respondió.
Entré despacio y la encontré llorando.
—¿Qué pasó?
—Vete…
Me quedé a cierta distancia.
—No tienes que contarme nada.
Ella miró el documento.
Tardó unos segundos en hablar.
—Estoy embarazada…
No supe qué responder.
Sarya me explicó, con mucha dificultad, que aquel embarazo era consecuencia de algo terrible que le había ocurrido y que nunca había querido que sucediera.
No necesitaba conocer todos los detalles para entender que estaba sufriendo.
—Lo que te ocurrió no fue culpa tuya —le dije.
Ella bajó la mirada.
—No sé qué voy a hacer.
—Podemos buscar ayuda. No tienes que hacerlo sola.
Sarya comenzó a llorar nuevamente y se acercó para abrazarme.
La sostuve en silencio.
Aquella fue una de las primeras veces que comprendí que algunas personas cargan con recuerdos que no eligieron y que no deberían haber tenido que vivir.
@ill documento
Durante los meses siguientes intentamos acompañarla como podíamos.
Rasha dejaba pequeñas notas junto a su puerta. Emmanuel le llevaba té cuando notaba que no había salido de su habitación. Yo la acompañaba a algunas consultas y esperaba fuera cuando necesitaba estar sola.
No siempre sabíamos qué hacer.
A veces Sarya conversaba con nosotros como antes. Otras veces permanecía callada durante horas. Había días en los que parecía estar mejor y otros en los que todo volvía a sentirse demasiado difícil.
Recibió atención profesional y nosotros intentamos respetar su espacio sin dejar de estar presentes.
Pero el embarazo terminó de una manera muy dolorosa.
@esc hospital
Una tarde, mientras esperaba en el pasillo del hospital, una profesional se acercó.
—Lo siento mucho. No hemos podido salvar al bebé.
Sentí que el tiempo se detenía.
Cuando entré a verla, Sarya estaba acostada en una cama. Parecía agotada.
Me acerqué lentamente.
—Estoy aquí.
Ella miró hacia otro lado.
—Ni siquiera pude conocerlo…
No encontré ninguna respuesta que pudiera aliviar aquello.
Le tomé la mano y permanecí a su lado.
No podía cambiar lo ocurrido. No podía devolverle lo que había perdido. Lo único que podía hacer era no dejarla sola en aquel momento.
@esc comun
Días después, Rasha fue a visitarla.
Se sentó junto a ella y dejó una pequeña nota sobre la mesa.
Sarya la tomó.
En el papel estaba escrito:
«No tienes que fingir que estás bien».
@ill nota
Rasha no le pidió explicaciones. No intentó obligarla a sonreír ni le dijo que todo pasaría pronto.
Simplemente se quedó con ella.
Sarya comenzó a llorar y la abrazó.
Yo no estaba presente en aquella habitación, pero Rasha me contó después lo que había ocurrido. También conservó la nota durante mucho tiempo.
@esc centro
Poco después recibimos una noticia que ninguno de nosotros estaba preparado para escuchar.
Una trabajadora del centro nos pidió que nos reuniéramos en una sala pequeña.
Rasha estaba sentada a mi lado. Emmanuel permanecía en silencio, con las manos juntas.
La trabajadora respiró profundamente antes de hablar.
—Tengo algo muy difícil que contarles. Sarya ha fallecido. Su muerte fue por suicidio.
No recuerdo qué pensé primero.
Recuerdo el silencio.
Rasha dejó de moverse. Emmanuel bajó la cabeza. Yo permanecí inmóvil, intentando comprender unas palabras que no quería aceptar.
La trabajadora nos explicó que no teníamos que afrontar aquella pérdida solos y que podíamos recibir apoyo.
Pero, en aquel momento, nada parecía suficiente.
@esc parque
Después fuimos al parque.
Nos sentamos en el mismo banco donde tantas veces habíamos hablado de nuestra casa imaginaria.
Rasha abrió la libreta de Sarya.
Allí estaba el dibujo.
La casa seguía teniendo cuatro ventanas.
@ill casa2
—No quiero que la recordemos solamente por lo que pasó —dijo Rasha.
—Yo tampoco —respondí.
Emmanuel miró la hoja.
—Era parte de nosotros.
Rasha pasó suavemente los dedos por el dibujo.
No hablamos mucho más aquella tarde.
Durante mucho tiempo pensé en Sarya y en todas las cosas que nunca llegué a preguntarle. Me preguntaba si había sabido cuánto la queríamos, si alguna vez había sentido que podía hablar con nosotros o si habíamos entendido demasiado tarde lo que necesitaba.
Con los años comprendí que su historia no podía reducirse a su sufrimiento ni a la forma en que murió.
Sarya también había sido la chica que añadió una ventana al dibujo de Rasha. La persona que se sentaba a nuestro lado sin necesidad de hablar. La amiga que imaginaba una casa con jardín.
Y yo quería recordarla así también.
`) },
{ id:'cap3', titulo:'Capítulo III — Lo que nunca se contó', musica:'4', bloques: T(`
@esc consultorio
Después de la muerte de Sarya, pensé que ya no podía perder a nadie más.
No sabía que todavía me quedaban recuerdos que no había terminado de comprender.
En 2023, durante una de mis sesiones con la psicóloga, volvimos a hablar de mis amigos.
—¿Sigues pensando en ellos? —me preguntó.
—Sí.
—¿En quién piensas?
—En todos.
La psicóloga esperó.
—Pero hay cosas que nunca llegué a entender de Emmanuel.
No era fácil hablar de él.
Emmanuel había sido una de las primeras personas que conocí en Alemania. A veces parecía distante, incluso indiferente, pero con el tiempo había aprendido a reconocer sus bromas, sus silencios y sus pequeñas costumbres.
También había aprendido que nunca se separaba de su reloj.
Y todavía no sabía por qué había terminado guardándolo yo.
@esc noche recuerdo
@ill calle
Para entenderlo, tengo que volver a 2017.
Aquella noche caminaba por una calle de Alemania. No recuerdo exactamente a dónde iba. Solamente recuerdo que estaba regresando y que el ambiente parecía más silencioso de lo habitual.
A unos metros escuché una discusión.
Me detuve.
No podía distinguir quiénes eran las personas ni entender completamente lo que estaba ocurriendo.
Miré hacia el lugar de donde venían las voces.
Por unos segundos dudé si acercarme o continuar caminando.
Finalmente, seguí mi camino.
No sabía quién estaba allí.
No sabía qué estaba ocurriendo.
Y, sobre todo, no sabía que aquella noche terminaría convirtiéndose en uno de los recuerdos que más veces volvería a repetir en mi cabeza.
@esc negro
@esc noche
Un tiempo después, estaba sentado en mi habitación.
Tenía el reloj de Emmanuel entre las manos.
Lo observaba sin saber exactamente qué buscaba en él.
Recordé una tarde en el comedor, cuando lo había visto acomodarlo cuidadosamente.
—¿Por qué siempre haces eso? —le había preguntado.
Emmanuel miró su muñeca.
—¿Qué cosa?
—El reloj. Siempre lo estás acomodando.
Él sonrió ligeramente.
—No quiero perderlo.
En aquel momento no le di demasiada importancia.
Ahora aquellas palabras tenían un significado diferente.
@ill relojMuneca
Una noche recibí la noticia.
Estaba en un pasillo del hospital cuando un trabajador del centro se acercó a mí.
Su expresión me hizo comprender que algo no estaba bien.
—Lo siento mucho, Hassan. Emmanuel ha fallecido.
Lo miré sin entender.
—¿Emmanuel?
El trabajador asintió.
Bajé la mirada hacia el reloj que sostenía en la mano.
No recuerdo cuánto tiempo permanecí allí.
Solo recuerdo que, por un instante, pensé que debía estar equivocado. Que quizá había escuchado mal. Que en cualquier momento Emmanuel aparecería por el pasillo con aquella expresión seria que utilizaba cuando quería hacer una broma.
Pero no ocurrió.
Emmanuel ya no estaba.
@esc hospital
@ill silla
Volví a pensar en aquella noche de 2017.
En la discusión que había escuchado.
En los pasos que había continuado dando.
En la posibilidad de que Emmanuel hubiera estado allí.
Nunca supe exactamente qué ocurrió durante aquella discusión ni pude reconstruir todos los detalles de sus últimos momentos. Solo sabía que había muerto y que aquella noche se había quedado grabada en mi memoria.
@esc consultorio
En el consultorio, la psicóloga seguía escuchándome.
—Aquella noche escuché una discusión —dije.
—¿Y qué hiciste?
—Seguí caminando.
Ella esperó unos segundos.
—¿Sabías que era él?
—No.
Me quedé mirando mis manos.
—Pero después pensé que tendría que haberme detenido.
La psicóloga habló con tranquilidad.
—No podías saber lo que estaba ocurriendo.
No respondí.
Una parte de mí comprendía lo que decía. Otra parte seguía regresando a aquella calle, imaginando todas las posibilidades.
No sabía cómo dejar de sentirme responsable por algo que nunca había podido comprender.
Y, aunque el tiempo había pasado, todavía me costaba aceptar que no siempre podemos reconocer el sufrimiento de las personas que tenemos cerca.
A veces no sabemos que alguien necesita ayuda.
A veces no entendemos sus silencios.
Y a veces conocemos demasiado tarde aquello que nunca nos contaron.
@ill relojMuneca
`) },
{ id:'cap4', titulo:'Capítulo IV — Lo que queda', musica:'5', bloques: T(`
@esc comun
Después de la muerte de Emmanuel, el centro dejó de sentirse como antes.
No porque el edificio hubiera cambiado. Las mesas seguían en el mismo lugar, las personas continuaban entrando y saliendo y las actividades del día seguían su horario habitual.
Pero faltaba alguien.
Durante un tiempo me acostumbré a sentarme solo. A veces llevaba el reloj de Emmanuel entre las manos y lo observaba sin darme cuenta de cuánto tiempo había pasado.
Rasha fue quien comenzó a acercarse más.
Una tarde entró en la sala común y me encontró sentado frente a una mesa.
Se sentó frente a mí.
—¿Has comido algo?
Negué con la cabeza.
Rasha miró el reloj.
—Él siempre lo llevaba consigo.
Asentí.
—No entiendo por qué no me detuve aquella noche.
Ella guardó silencio unos segundos.
—No sabías que era él, Hassan.
Bajé la mirada.
—También lo voy a extrañar —añadió.
Dejó su mano cerca de la mía.
@ill manos
No intentó convencerme de que dejara de sentirme mal. Tampoco me dijo que tenía que olvidar lo ocurrido.
Simplemente permaneció allí.
Y, por primera vez en mucho tiempo, no sentí que tenía que explicar mi tristeza.
@esc consultorio
Poco después, Rasha comenzó a tener problemas de salud.
La acompañé a una consulta médica. No sabía exactamente qué esperar y ella tampoco parecía estar tranquila.
La médica revisó sus resultados antes de hablar.
—Las pruebas indican que tienes tuberculosis. Vamos a explicarte el tratamiento y acompañarte durante el proceso.
Rasha pareció preocupada.
—¿Voy a estar bien?
—Es una enfermedad que tiene tratamiento. Lo importante es que sigas las indicaciones y los controles.
Rasha asintió.
Al salir, caminamos juntos por el pasillo.
—¿Estás bien? —le pregunté.
—Creo que sí.
No parecía completamente convencida, pero tampoco quería hablar demasiado.
Durante los días siguientes intentamos mantener nuestras conversaciones habituales.
@esc centro
Yo la visitaba en su habitación y le preguntaba cómo se encontraba. Ella seguía haciendo bromas cuando tenía suficiente energía y, de vez en cuando, me preguntaba por mis clases.
Una tarde la encontré sentada en su cama.
Me senté a su lado.
—¿Cómo te encuentras?
—Un poco cansada.
Observé el vaso de agua que estaba sobre la mesa y se lo acerqué.
Rasha lo tomó.
@ill vaso
—¿Y tú?
—Estoy bien.
Me miró durante unos segundos.
—No tienes que fingir conmigo.
Bajé la mirada.
Permanecimos en silencio.
Después de un rato, Rasha volvió a hablar.
—Cuando esté mejor, quiero salir.
—¿A dónde?
—A comprar helados.
Sonreí ligeramente.
—Entonces iremos.
Ella me devolvió una pequeña sonrisa.
Fue una promesa sencilla. No tenía nada de extraordinario. No habíamos elegido un lugar especial ni decidido qué sabor compraríamos.
Pero, en aquel momento, imaginar que volveríamos a caminar juntos por la ciudad era suficiente.
@ill helado
Durante un tiempo acompañé a Rasha a sus controles médicos. La veía seguir las indicaciones, asistir a sus consultas y recibir atención.
Algunas veces conversábamos durante el camino. Otras veces simplemente caminábamos en silencio.
Pero su estado de salud se fue complicando.
Cada visita parecía traer una nueva preocupación. Yo intentaba mantener la esperanza, aunque cada vez me resultaba más difícil.
@esc hospital
Una tarde estaba sentado en una sala de hospital, mirando una puerta.
No sabía cuánto tiempo llevaba allí.
Una profesional se acercó.
Su expresión era seria.
—Lo siento mucho.
No necesitó decir demasiado más.
Rasha había fallecido por complicaciones de su enfermedad.
Me quedé en silencio.
No podía comprender cómo habíamos pasado de hablar sobre helados a estar en aquel hospital esperando una noticia que nunca habría querido recibir.
@esc blanco
@ill sillaVentana
@esc consultorio
En 2023, durante otra sesión con la psicóloga, hablamos de todas las personas que había perdido.
—Has perdido a personas muy importantes —me dijo.
Asentí.
—¿Qué haces con todos esos recuerdos?
Tardé en responder.
—A veces intento no pensar en ellos.
Miré mis manos.
—Pero no quiero olvidarlos.
Abrí lentamente la mano.
Allí estaba el reloj de Emmanuel.
@ill relojMuneca
Lo había conservado durante años. No porque quisiera vivir atrapado en el pasado, sino porque era una de las pocas cosas que todavía podía sostener cuando pensaba en él.
La psicóloga miró el reloj y después volvió a mirarme.
No dijo nada inmediatamente.
Y yo tampoco.
Por primera vez, entendí que recordar no significaba necesariamente quedarse detenido en lo que había ocurrido.
Tal vez podía seguir adelante sin tener que dejar atrás sus nombres.
Tal vez podía construir una vida nueva y, aun así, conservar un lugar para ellos.
`) },
{ id:'epilogo', titulo:'Epílogo — No olvidar', musica:'6', bloques: T(`
@esc parque
Hay lugares que cambian con el tiempo, pero que nunca dejan de recordarnos a las personas que estuvieron allí.
Aquel parque era uno de ellos.
En 2023 regresé al mismo lugar donde solíamos sentarnos los cuatro. Caminé lentamente hasta el banco y me quedé observándolo durante unos segundos.
Parecía igual que antes.
Las personas seguían caminando por los senderos. Algunos niños jugaban a lo lejos y el viento movía suavemente las hojas de los árboles.
Me senté.
Saqué una fotografía antigua del bolsillo.
En ella aparecíamos los cuatro: Emmanuel, Rasha, Sarya y yo.
La observé durante un buen rato.
@esc comun recuerdo
Recordé a Rasha dibujando aquella casa. Recordé a Sarya añadiendo una ventana y a Emmanuel diciendo que era demasiado pequeña. Recordé el jardín que había dibujado y las conversaciones sobre cómo sería nuestra vida cuando finalmente tuviéramos un lugar propio.
También recordé las pequeñas cosas.
Las bromas de Emmanuel.
Las notas de Rasha.
Los silencios de Sarya.
Las tardes en las que no necesitábamos hacer nada especial para sentirnos acompañados.
@esc parque
Durante mucho tiempo había pensado que nuestra historia estaba formada únicamente por las cosas que perdimos.
Pero aquella fotografía me recordó que también habíamos tenido momentos felices.
Habíamos sido amigos.
Habíamos compartido sueños.
Habíamos imaginado un futuro.
Y eso también formaba parte de nuestra historia.
Coloqué la fotografía sobre el banco. Después saqué el reloj de Emmanuel y lo dejé a su lado.
Me quedé mirando ambos objetos.
No dije nada.
No había ninguna frase capaz de resumir todo lo que sentía.
Simplemente permanecí allí, recordándolos.
@ill fotoReloj
A veces pienso en lo diferente que habría sido todo si hubiéramos podido quedarnos en nuestra casa imaginaria.
Quizá habríamos encontrado un lugar con un jardín. Quizá habríamos discutido por cosas pequeñas, como quién debía limpiar o quién había dejado algo fuera de lugar. Tal vez habríamos seguido reuniéndonos para estudiar, comer y hablar de nuestros planes.
Nunca lo sabré.
Pero ahora entiendo algo que antes no podía ver.
La guerra no termina necesariamente cuando dejan de escucharse los disparos. Sus consecuencias permanecen en las personas que tuvieron que abandonar sus hogares, en quienes perdieron a sus familias y en quienes intentan reconstruir sus vidas lejos de todo lo que conocían.
Detrás de cada conflicto hay personas.
Personas que tenían nombres, familias, recuerdos, sueños y un futuro que merecían vivir.
Yo fui una de ellas.
Y Emmanuel, Rasha y Sarya también.
No quiero que nuestra historia sea recordada únicamente por las cosas que nos ocurrieron. Quiero que también se recuerde que fuimos cuatro jóvenes que se conocieron en un lugar desconocido y que, durante un tiempo, consiguieron convertirlo en algo parecido a un hogar.
Quizá nunca tuvimos aquella casa.
Pero, durante algunos años, nos tuvimos los unos a los otros.
@esc negro
@cita «Detrás de cada conflicto hay personas. Personas con familias, sueños, recuerdos y un futuro que merecen vivir».
@cita «La guerra no termina necesariamente cuando acaba el conflicto. Sus consecuencias permanecen en quienes sobreviven».
@ill casa
@titulo VOCES JÓVENES CONTRA LA GUERRA
@cita «Escuchar también es una forma de no olvidar».
@nota FIN.
`) }
];

/* ================= FONDOS Y PARTÍCULAS ================= */
const $ = s => document.querySelector(s);
const ESCENAS = ['aula','consultorio','sinjar','carretera','centro','comedor','comun','noche','hospital','parque','negro','blanco'];
const fondos = $('#fondos'), capas = {};
ESCENAS.forEach(n => { const d = document.createElement('div'); d.className = 'esc ' + n; fondos.appendChild(d); capas[n] = d; });

function ponerEscena(spec){
  const [nombre, ...extra] = spec.split(' ');
  Object.values(capas).forEach(c => c.classList.remove('on'));
  const c = capas[nombre]; if (!c) return;
  c.classList.toggle('recuerdo', extra.includes('recuerdo'));
  c.classList.add('on');
}
for (let i = 0; i < 30; i++){          // motas de polvo / brisa
  const m = document.createElement('i'); m.className = 'mota';
  const t = 2 + Math.random() * 4;
  Object.assign(m.style, { left: Math.random()*100+'vw', width:t+'px', height:t+'px', animationDuration:(18+Math.random()*30)+'s', animationDelay:(-Math.random()*40)+'s', opacity: Math.random()*.7 });
  $('#particulas').appendChild(m);
}

/* ================= RENDER ================= */
const main = $('#historia');
CAPITULOS.forEach(cap => {
  const sec = document.createElement('section'); sec.className = 'capitulo'; sec.dataset.musica = cap.musica; sec.id = cap.id;
  sec.innerHTML = `<h2 class="rev">${cap.titulo}</h2>`;
  cap.bloques.forEach(([tipo, v]) => {
    const e = document.createElement('div'); e.className = 'rev';
    if (tipo === 'esc'){ e.dataset.esc = v; e.style.height = '1px'; }
    else if (tipo === 'ill'){ e.className += ' ill'; e.innerHTML = ILL[v]; }
    else if (tipo === 'titulo'){ e.className += ' titulo-final'; e.textContent = v; }
    else if (tipo === 'cita'){ e.className += ' cita'; e.textContent = v; }
    else if (tipo === 'nota'){ e.className += ' nota-escena'; e.textContent = v; }
    else { e.className += ' p' + (tipo === 'd' ? ' dialogo' : ''); e.textContent = v; }
    sec.appendChild(e);
  });
  main.appendChild(sec);
});

const obs = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('vis');
  if (en.target.dataset.esc) ponerEscena(en.target.dataset.esc);
}), { threshold: .4 });
document.querySelectorAll('.rev').forEach(e => obs.observe(e));

/* ================= MÚSICA =================
   Busca solas las canciones: prueba la carpeta "musica/" y también la carpeta principal,
   con los nombres cancion1 / Cancion 1 / cancion 1 y las extensiones .mp3 .wav .m4a .ogg.
   Si no encuentra alguna, muestra un aviso en pantalla. */
const audio = $('#musica'), btnM = $('#btnMusica');
const CARPETAS = ['musica/', ''], EXTS = ['.mp3', '.wav', '.m4a', '.ogg', '.aac', '.opus', '.flac', '.mp4'];
let pista = '', sonando = true, aviso, faderT;

function fade(a, hasta, ms = 1500){
  clearInterval(faderT);
  const paso = (hasta - a.volume) / (ms / 50);
  faderT = setInterval(() => {
    a.volume = Math.max(0, Math.min(1, a.volume + paso));
    if (Math.abs(a.volume - hasta) <= Math.abs(paso)) { a.volume = hasta; clearInterval(faderT); }
  }, 50);
}
function mostrarAviso(t){
  if (!aviso){
    aviso = document.createElement('div');
    aviso.style.cssText = 'position:fixed;left:50%;bottom:1rem;transform:translateX(-50%);z-index:30;background:#2a3440;color:#e4ddcf;border:1px solid #c4ab84;padding:.7rem 1rem;max-width:90vw;font-size:.9rem;text-align:center;line-height:1.4';
    document.body.appendChild(aviso);
  }
  aviso.textContent = t; aviso.style.display = 'block';
  clearTimeout(aviso.t); aviso.t = setTimeout(() => aviso.style.display = 'none', 12000);
}
function cargar(n){
  const nombres = [`cancion${n}`, `Cancion${n}`, `cancion ${n}`, `Cancion ${n}`, `canción${n}`, `Canción${n}`, `canción ${n}`, `Canción ${n}`];
  const cand = [];
  CARPETAS.forEach(c => nombres.forEach(nm => EXTS.forEach(e => cand.push(c + nm + e))));
  let i = 0;
  const probar = () => {
    if (i >= cand.length){
      audio.onerror = null;
      mostrarAviso(`No encuentro la canción ${n}. Debe llamarse cancion${n}.mp3 y estar en la carpeta "musica", junto a index.html.`);
      return;
    }
    audio.src = encodeURI(cand[i++]);
  };
  audio.onerror = probar;
  audio.oncanplay = () => { if (sonando) audio.play().then(() => fade(audio, .3)).catch(() => {}); };
  audio.volume = 0;
  probar();
}
function cambiarPista(n){
  n = String(n); if (n === pista) return;
  const primera = pista === ''; pista = n;
  if (primera) { cargar(n); return; }
  fade(audio, 0, 800);
  setTimeout(() => cargar(n), 900);
}
btnM.onclick = () => {
  sonando = !sonando; btnM.classList.toggle('pausa', !sonando);
  if (sonando){ audio.play().then(() => fade(audio, .3)).catch(() => {}); } else audio.pause();
};
/* Cambia de canción cuando el capítulo cruza la mitad de la pantalla */
const obsCap = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) cambiarPista(en.target.dataset.musica); }), { rootMargin: '-50% 0px -50% 0px', threshold: 0 });
document.querySelectorAll('.capitulo').forEach(c => obsCap.observe(c));

/* ================= INICIO Y CIERRE ================= */
$('#btnComenzar').onclick = () => {
  document.body.classList.remove('bloqueado'); btnM.classList.remove('oculto');
  $('#cierre').classList.remove('oculto'); ponerEscena('aula');
  cambiarPista(CAPITULOS[0].musica);
  $('#prologo').scrollIntoView({ behavior:'smooth' });
};
ponerEscena('aula');

/* ---- Estrellas ---- */
const est = $('#estrellas'), frases = ['','Me dolió, pero no la olvidaré.','Me hizo pensar.','Me llegó.','Me conmovió mucho.','Me marcó.'];
for (let i = 1; i <= 5; i++){ const b = document.createElement('button'); b.type='button'; b.textContent='★'; b.setAttribute('aria-label', i+' estrellas'); b.onclick = () => pintar(i, true); est.appendChild(b); }
function pintar(n, guardar){
  [...est.children].forEach((b,i) => b.classList.toggle('on', i < n));
  $('#msgEstrellas').textContent = frases[n] || '';
  if (guardar) localStorage.setItem('novela_estrellas', n);
}
pintar(+localStorage.getItem('novela_estrellas') || 0);

/* ---- Reflexiones: llegan solo a ti (por correo, con Formspree) ----
   1) Crea un formulario gratis en formspree.io  2) Copia su enlace (https://formspree.io/f/xxxxxx)
   3) Pégalo entre las comillas de abajo */
const FORMSPREE_URL = 'https://formspree.io/f/mkjrpgnq';

$('#formReflexion').onsubmit = async e => {
  e.preventDefault();
  const form = e.target, btn = form.querySelector('button'), msg = $('#msgReflexion');
  const texto = $('#texto').value.trim(); if (!texto) return;
  const datos = {
    nombre: $('#nombre').value.trim() || 'Anónimo',
    reflexion: texto,
    estrellas: localStorage.getItem('novela_estrellas') || 'sin calificar'
  };
  btn.disabled = true; msg.textContent = 'Enviando…';
  try {
    if (!FORMSPREE_URL) throw new Error('sin-enlace');
    const r = await fetch(FORMSPREE_URL, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(datos) });
    if (!r.ok) throw new Error('fallo');
    form.reset(); msg.textContent = 'Gracias por compartir tu reflexión.';
  } catch (err) {
    msg.textContent = err.message === 'sin-enlace'
      ? 'Falta conectar el envío: pega tu enlace de Formspree en FORMSPREE_URL (script.js).'
      : 'No se pudo enviar. Intenta de nuevo en un momento.';
  }
  btn.disabled = false;
};