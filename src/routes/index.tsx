import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, CheckCircle2, ChevronDown, Clock3, Heart, Leaf, MapPin, MessageCircle, Monitor, ShieldCheck, Sparkles, Video } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const phone = "5585986207574";
const whatsapp = (message: string) => window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
const topics = [
  ["Ansiedade e preocupações", "Um espaço para compreender emoções, gatilhos e formas de lidar com momentos de preocupação."],
  ["Medos e fobias", "Explore, com acompanhamento, experiências e reações que podem limitar sua rotina."],
  ["Tristeza e desânimo", "Um lugar para falar sobre o que está difícil e buscar compreensão para o seu momento."],
  ["Traumas e experiências marcantes", "Olhe para acontecimentos que ainda despertam desconforto, respeitando seu tempo e seus limites."],
  ["Autoestima e insegurança", "Reflita sobre a forma como você se percebe, suas escolhas e seus relacionamentos."],
  ["Relacionamentos", "Compreenda padrões, conflitos, limites e necessidades nas relações com outras pessoas."],
  ["Hábitos e procrastinação", "Investigue fatores emocionais que podem influenciar decisões, rotina e comportamento."],
  ["Compulsões e relação com a comida", "Converse sobre comportamentos que causam preocupação e as emoções associadas a eles."],
  ["Dores e desconfortos persistentes", "Quando houver sofrimento físico, a abordagem terapêutica pode ser complementar à avaliação dos profissionais de saúde."],
  ["Prosperidade e crenças pessoais", "Reflita sobre crenças, expectativas e padrões que influenciam suas decisões e objetivos."]
];
const faq = [
  ["O que é a psicanálise?", "A psicanálise é uma abordagem de investigação da vida psíquica que busca compreender sentimentos, conflitos e padrões a partir da história singular de cada pessoa. O processo e seus objetivos são conversados durante o acompanhamento."],
  ["O que é Energy Healing®?", "Segundo a descrição da abordagem, Energy Healing® foi desenvolvida por Brent Phillips em 2004 e trabalha com crenças e conteúdos do subconsciente, recorrendo a processos descritos como cinesiologia aplicada e psicologia energética. É importante entender seus limites: não substitui cuidados médicos ou psicológicos indicados."],
  ["O que acontece em uma vivência de Energy Healing®?", "A vivência parte de uma questão que a pessoa deseja explorar ou modificar e, conforme as informações fornecidas pelo profissional, dura aproximadamente uma hora. A duração pode variar; converse antes para entender a proposta."],
  ["O que significa PNL?", "PNL é a sigla para Programação Neurolinguística. É uma abordagem que explora a relação entre linguagem, padrões de pensamento e comportamento, utilizada por alguns profissionais em processos de desenvolvimento pessoal."],
  ["Como funciona a hipnoterapia?", "A hipnoterapia utiliza técnicas de hipnose em um contexto de atendimento para trabalhar objetivos definidos com o cliente. Antes de começar, pergunte sobre o método, a formação do profissional e o que é realista esperar."],
  ["O atendimento é online ou presencial?", "Há possibilidade de atendimento online e presencial em Fortaleza, Ceará. Consulte disponibilidade, endereço e horários diretamente pelo WhatsApp."],
  ["A terapia garante resultados ou cura?", "Não. A experiência e os resultados variam de pessoa para pessoa. Nenhuma abordagem deve ser apresentada como garantia de cura ou substituto de avaliação médica, psicológica ou psiquiátrica quando necessária."],
  ["Como agendar?", "Clique em qualquer botão de WhatsApp nesta página para enviar uma mensagem e consultar horários, modalidades, valores e demais informações."]
];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Herbsten Rozamato Sousa | Psicanálise, Hipnoterapia e Energy Healing®" },
      { name: "description", content: "Conheça o trabalho de Herbsten Rozamato Sousa, psicanalista, Practitioner em PNL, hipnoterapeuta e terapeuta de Energy Healing®. Atendimento online e presencial em Fortaleza, CE." },
      { property: "og:title", content: "Herbsten Rozamato Sousa | Psicanálise e Terapias" },
      { property: "og:description", content: "Um espaço de escuta, autoconhecimento e cuidado. Atendimento online e presencial em Fortaleza, Ceará." },
      { property: "og:locale", content: "pt_BR" },
      { name: "theme-color", content: "#244d3e" }
    ]
  }),
  component: Index
});

function ContactButton({ children = "Agendar uma conversa" }: { children?: React.ReactNode }) {
  return <Button variant="siteGold" size="site" onClick={() => whatsapp("Olá, Herbsten! Gostaria de conhecer melhor seu trabalho e consultar informações sobre os atendimentos.")}>{children}<ArrowRight size={18}/></Button>;
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return <main className="site herbsten-site">
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Herbsten Rozamato Sousa — início"><span>Herbsten</span><strong>ROZAMATO <i>Sousa</i></strong></a>
      <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#abordagens">Abordagens</a><a href="#energy">Energy Healing®</a><a href="#faq">Dúvidas</a></nav>
      <Button variant="siteGold" size="site" onClick={() => whatsapp("Olá, Herbsten! Gostaria de consultar os horários de atendimento.")}><MessageCircle size={17}/> Fale comigo</Button>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><Leaf size={15}/> ESCUTA • AUTOCONHECIMENTO • CUIDADO</span>
          <h1>Compreender sua história pode abrir espaço para <em>novas escolhas.</em></h1>
          <p className="hero-lead">Um acompanhamento que convida você a olhar com mais atenção para suas emoções, suas crenças e os padrões que atravessam a vida.</p>
          <p className="hero-sub">Herbsten Rozamato Sousa · Psicanalista · Hipnoterapeuta · Practitioner em PNL · Terapeuta de Energy Healing®</p>
          <div className="hero-actions"><ContactButton/><a className="text-link" href="#abordagens">Conheça as abordagens <ArrowRight size={16}/></a></div>
          <div className="hero-notes"><span><ShieldCheck size={17}/> Escuta respeitosa</span><span><Monitor size={17}/> Online e presencial</span></div>
        </div>
        <div className="hero-visual">
          <div className="photo-placeholder portrait-placeholder"><div className="placeholder-symbol"><Brain size={44}/></div><span>ESPAÇO PARA FOTO PROFISSIONAL</span><small>Substitua este espaço por uma foto de Herbsten</small></div>
          <div className="visual-caption"><span className="caption-mark">“</span><p>Um espaço para pausar, refletir e compreender o que faz parte da sua história.</p></div>
          <div className="leaf-stamp"><Leaf size={25}/><span>Presença<br/>e consciência</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>FORTALEZA — CEARÁ</span><span>ATENDIMENTO ONLINE E PRESENCIAL</span><span>CONTATO DIRETO PELO WHATSAPP</span></div>
    </section>

    <section className="belief section" id="crencas"><div className="container belief-grid"><div><span className="eyebrow">UM CONVITE À REFLEXÃO</span><h2>As crenças influenciam a forma como <em>interpretamos o mundo.</em></h2></div><div><p>As ideias que construímos sobre nós mesmos, sobre as outras pessoas e sobre o que é possível podem influenciar escolhas, reações e relacionamentos. Algumas dessas crenças são tão antigas que passam despercebidas.</p><p>Reconhecer esses padrões não significa atribuir toda dificuldade a uma única causa. É um convite para observar sua história com curiosidade, responsabilidade e abertura para outras perspectivas.</p><a className="text-link" href="#energy">Entenda a proposta de Energy Healing® <ArrowRight size={16}/></a></div></div></section>

    <section className="section topics-section" id="temas"><div className="container"><div className="section-heading"><span className="eyebrow">O QUE PODE SER EXPLORADO</span><h2>Questões diferentes. Uma história que é <em>só sua.</em></h2><p>Os atendimentos podem abrir espaço para conversar sobre temas como estes, de acordo com a necessidade de cada pessoa e os limites de cada abordagem.</p></div><div className="topic-grid">{topics.map(([title,description],i)=><article className="topic-card" key={title}><span className="topic-index">{String(i+1).padStart(2,"0")}</span><div className="topic-icon">{i%3===0?<Brain size={21}/>:i%3===1?<Heart size={21}/>:<Leaf size={21}/>}</div><h3>{title}</h3><p>{description}</p></article>)}</div><p className="disclaimer">Esta lista não representa diagnóstico nem promessa de tratamento ou cura. Em caso de sintomas persistentes ou intensos, procure também um profissional de saúde habilitado.</p></div></section>

    <section className="section approaches" id="abordagens"><div className="container"><div className="section-heading"><span className="eyebrow">ABORDAGENS E PRÁTICAS</span><h2>Conheça as ferramentas presentes no trabalho de <em>Herbsten.</em></h2><p>Cada abordagem tem características próprias. Antes de iniciar, você pode conversar sobre objetivos, funcionamento e limites do atendimento.</p></div><div className="approach-grid">
      <article className="approach-card"><span className="approach-number">01 / ESCUTA</span><div className="approach-icon"><Brain size={25}/></div><h3>Psicanálise clínica</h3><p>Um espaço de fala e reflexão para investigar conflitos, experiências, sentimentos e padrões que se repetem. A história e a singularidade de cada pessoa orientam o processo.</p><a href="#faq">Entenda mais <ArrowRight size={16}/></a></article>
      <article className="approach-card"><span className="approach-number">02 / FOCO</span><div className="approach-icon"><Sparkles size={25}/></div><h3>Hipnoterapia</h3><p>Utiliza técnicas de hipnose em um contexto estruturado para explorar objetivos acordados entre profissional e cliente. As expectativas e contraindicações devem ser conversadas previamente.</p><a href="#faq">Entenda mais <ArrowRight size={16}/></a></article>
      <article className="approach-card"><span className="approach-number">03 / LINGUAGEM</span><div className="approach-icon"><MessageCircle size={25}/></div><h3>Programação Neurolinguística</h3><p>A PNL propõe observar relações entre linguagem, pensamento e comportamento. Pode ser apresentada como ferramenta de reflexão e desenvolvimento, sem promessa de resultado garantido.</p><a href="#faq">Entenda mais <ArrowRight size={16}/></a></article>
    </div></div></section>

    <section className="section energy-section" id="energy"><div className="container energy-grid"><div className="energy-art"><div className="energy-ring ring-one"></div><div className="energy-ring ring-two"></div><div className="energy-center"><Sparkles size={46}/><span>ENERGY<br/>HEALING®</span></div><div className="energy-tag tag-one">Crenças</div><div className="energy-tag tag-two">Consciência</div><div className="energy-tag tag-three">Reflexão</div></div><div className="energy-copy"><span className="eyebrow">UMA ABORDAGEM COMPLEMENTAR</span><h2>O que é <em>Energy Healing®?</em></h2><p>Conforme o material apresentado pelo profissional, a técnica foi criada em 2004 pelo norte-americano Brent Phillips. A proposta é explorar crenças e conteúdos do subconsciente e é descrita como envolvendo cinesiologia aplicada e processos relacionados à psicologia energética.</p><p>O material de divulgação também relaciona a abordagem a conceitos de neurociência e física quântica. Essas referências não significam, por si só, comprovação científica de eficácia clínica. Por isso, é importante conversar abertamente sobre o método e manter expectativas realistas.</p><div className="energy-facts"><div><Clock3 size={19}/><span><strong>Tempo estimado</strong>Cerca de 1 hora por vivência, conforme informado pelo profissional.</span></div><div><Heart size={19}/><span><strong>Partida de uma questão</strong>A conversa começa pelo tema que você deseja explorar.</span></div></div><ContactButton>Conversar sobre Energy Healing®</ContactButton></div></div></section>

    <section className="section session-section"><div className="container"><div className="section-heading"><span className="eyebrow">COMO COMEÇAR</span><h2>Um primeiro contato simples, com <em>espaço para suas dúvidas.</em></h2><p>Você não precisa chegar com tudo organizado. O primeiro passo é conversar e entender se a proposta faz sentido para o que procura.</p></div><div className="session-steps">{[["01","Entre em contato","Envie uma mensagem e conte brevemente o que gostaria de conhecer ou trabalhar."],["02","Tire suas dúvidas","Converse sobre a abordagem, a modalidade, os valores, a duração e os horários."],["03","Conheça a proposta","Entenda como o atendimento é conduzido e quais são seus objetivos e limites."],["04","Decida com tranquilidade","Com as informações em mãos, avalie se deseja iniciar o acompanhamento."]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div><div className="center-action"><ContactButton>Consultar disponibilidade</ContactButton></div></div></section>

    <section className="section about-section" id="sobre"><div className="container about-grid"><div className="about-photo-wrap"><div className="photo-placeholder about-photo"><div className="placeholder-symbol"><UserIcon/></div><span>ESPAÇO PARA RETRATO</span><small>Insira aqui uma foto real do profissional</small></div><div className="about-photo-note"><Leaf size={18}/> Atendimento em Fortaleza e online</div></div><div className="about-copy"><span className="eyebrow">QUEM É O PROFISSIONAL</span><h2>Herbsten <em>Rozamato Sousa.</em></h2><p>Herbsten Rozamato Sousa reúne formação e atuação em diferentes áreas de cuidado e desenvolvimento humano. Sua trajetória inclui graduação em História e formação em Psicanálise pelo Instituto de Psicanálise — IAPB, concluída em 2018.</p><p>Também se apresenta como Practitioner em Programação Neurolinguística (PNL), hipnoterapeuta clínico e terapeuta clínico com atuação em abordagens de tratamento físico e emocional e Energy Healing®.</p><div className="credentials-list"><span><CheckCircle2 size={18}/> Graduado em História</span><span><CheckCircle2 size={18}/> Psicanalista clínico — IAPB (2018)</span><span><CheckCircle2 size={18}/> Practitioner em PNL</span><span><CheckCircle2 size={18}/> Hipnoterapeuta clínico</span><span><CheckCircle2 size={18}/> Terapeuta de Energy Healing®</span></div><ContactButton>Fale diretamente com Herbsten</ContactButton></div></div></section>

    <section className="section experience-section"><div className="container experience-grid"><div><span className="eyebrow">TRAJETÓRIA PROFISSIONAL</span><h2>Experiências que fazem parte de sua <em>caminhada.</em></h2><p>As informações profissionais fornecidas mencionam atendimentos particulares em espaços de terapias integrativas e uma experiência de atendimento psicanalítico junto à comunidade próxima à indústria Tijuca Alimentos, no Ceará.</p><p>Os locais e formatos de atuação podem mudar. Para confirmar disponibilidade atual, consulte diretamente pelo WhatsApp.</p></div><div className="experience-panel"><div><span className="panel-icon"><ShieldCheck size={20}/></span><p><strong>Formação em Psicanálise</strong><small>Instituto de Psicanálise — IAPB · 2018</small></p></div><div><span className="panel-icon"><Heart size={20}/></span><p><strong>Atuação em diferentes contextos</strong><small>Atendimentos particulares e experiência comunitária, conforme histórico informado.</small></p></div><div><span className="panel-icon"><MapPin size={20}/></span><p><strong>Fortaleza — Ceará</strong><small>Consulte endereço, modalidade e horários disponíveis.</small></p></div></div></div></section>

    <section className="section photo-section"><div className="container"><div className="section-heading"><span className="eyebrow">GALERIA</span><h2>Um espaço reservado para apresentar o trabalho de <em>perto.</em></h2><p>Esta área pode receber fotos reais do profissional, do consultório, de palestras ou de atividades profissionais autorizadas.</p></div><div className="gallery-grid"><div className="photo-placeholder gallery-large"><div className="placeholder-symbol"><Leaf size={34}/></div><span>FOTO DO CONSULTÓRIO</span><small>Adicione uma imagem real do ambiente</small></div><div className="gallery-side"><div className="photo-placeholder"><div className="placeholder-symbol"><Heart size={29}/></div><span>FOTO PROFISSIONAL</span><small>Retrato ou apresentação</small></div><div className="photo-placeholder"><div className="placeholder-symbol"><Video size={29}/></div><span>VÍDEO DE APRESENTAÇÃO</span><small>Espaço para inserir um vídeo posteriormente</small></div></div></div></div></section>

    <section className="section faq-section" id="faq"><div className="container faq-grid"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Informação clara para você <em>decidir com segurança.</em></h2><p>Veja algumas respostas iniciais. Para valores, horários e detalhes do método, fale diretamente com o profissional.</p><ContactButton>Tirar uma dúvida</ContactButton></div><div className="faq-list">{faq.map(([q,a],i)=><div className={"faq-item "+(openFaq===i?"open":"")} key={q}><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={19}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

    <section className="section video-invite"><div className="container video-grid"><div><span className="eyebrow">CONHEÇA O TRABALHO</span><h2>Um espaço para apresentar a proposta <em>em vídeo.</em></h2><p>Quando o vídeo estiver disponível, este espaço poderá apresentar Herbsten, explicar como funciona o atendimento e responder às primeiras dúvidas de quem visita o site.</p><ContactButton>Conversar pelo WhatsApp</ContactButton></div><div className="video-placeholder"><Video size={35}/><strong>Seu vídeo será colocado aqui</strong><span>Área reservada para incorporar um vídeo de apresentação.</span></div></div></section>

    <section className="final-cta"><div className="container"><span className="eyebrow">SEU PRÓXIMO PASSO</span><h2>Comece com uma conversa. <em>Conheça as possibilidades.</em></h2><p>Entre em contato para saber mais sobre as abordagens, esclarecer dúvidas e consultar atendimento online ou presencial em Fortaleza — CE.</p><ContactButton>Falar com Herbsten no WhatsApp</ContactButton><div className="contact-details"><span><MessageCircle size={17}/> +55 (85) 98620-7574</span><span><MapPin size={17}/> Fortaleza — Ceará, Brasil</span><span><Monitor size={17}/> Online e presencial</span></div></div></section>

    <footer className="site-footer"><div className="container footer-main"><a className="wordmark footer-wordmark" href="#inicio"><span>Herbsten</span><strong>ROZAMATO <i>Sousa</i></strong></a><p>Psicanálise clínica · Hipnoterapia · PNL · Energy Healing®</p><div className="footer-links"><a href="#sobre">Sobre</a><a href="#abordagens">Abordagens</a><a href="#faq">Perguntas frequentes</a><button onClick={()=>whatsapp("Olá, Herbsten! Gostaria de informações sobre atendimento.")}>WhatsApp</button></div></div><div className="footer-bottom">© {new Date().getFullYear()} Herbsten Rozamato Sousa. Informações para fins de apresentação profissional. As abordagens não garantem resultados e não substituem cuidados de saúde indicados.</div></footer>
    <button className="floating-whatsapp" type="button" aria-label="Falar com Herbsten pelo WhatsApp" onClick={()=>whatsapp("Olá, Herbsten! Gostaria de informações sobre os atendimentos.")}><MessageCircle size={27}/><span>WhatsApp</span></button>
  </main>;
}

function UserIcon(){ return <span className="user-placeholder-mark">HR</span>; }
