import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Video,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { clinicAddress, getClinicMapUrl } from "@/lib/clinic-location";
import whatsappIcon from "@/assets/whatsapp.png.asset.json";
import shareLogo from "@/assets/rozamato-compartilhamento.jpg.asset.json";

const siteUrl = "https://herbstenrozamato.lovable.app";
const shareUrl = new URL(shareLogo.url, siteUrl).href;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Herbsten Rozamato Sousa | Psicanálise em Fortaleza, CE e online" },
      { name: "description", content: "Psicanálise com Herbsten Rozamato Sousa em Fortaleza, CE e online. Atendimento individual para ansiedade, traumas e questões emocionais. Consulte horários." },
      { property: "og:title", content: "Herbsten Rozamato Sousa | Psicanálise em Fortaleza, CE e online" },
      { property: "og:description", content: "Conheça Herbsten Rozamato Sousa, psicanalista, Practitioner em PNL e hipnoterapeuta clínico. Atendimento online e presencial em Fortaleza, CE, com escuta individualizada e acolhimento." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "google-site-verification", content: "9myn0HdI7aGpUZnVvPyhIOqrxVOLgTJA9XtYO1VNmew" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: shareUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Logomarca Rozamato Psicanalista" },
      { name: "twitter:image", content: shareUrl },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Herbsten Rozamato Sousa — Psicanalista Clínico • Hipnoterapeuta", inLanguage: "pt-BR" },
          {
            "@type": "LocalBusiness", "@id": `${siteUrl}/#atendimento`,
            name: "Herbsten Rozamato Sousa — Psicanalista Clínico • Hipnoterapeuta", url: siteUrl,
            telephone: "+55 85 98620-7574",
            description: "Atendimento online e presencial em Fortaleza, Ceará.",
            address: {
              "@type": "PostalAddress", streetAddress: clinicAddress.street,
              addressLocality: "Fortaleza", addressRegion: "CE",
              postalCode: clinicAddress.postalCode, addressCountry: "BR",
            },
          },
        ],
      }),
    }],
  }),
  component: Index,
});

const whatsapp = "https://wa.me/5585986207574";
const mapsBrowserKey = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY'];
const clinicMapUrl = getClinicMapUrl(mapsBrowserKey);
const presentationVideoUrl = "/midia/a981e190-2953-4856-8ad0-5b4c05548aa7%20%281%29.mp4?v=3";
const approachVideoUrl = "/midia/d81da90a-ab8b-4161-909d-0640d3e7e2b1.mp4?v=3";
const portraitUrl = "/midia/Retrato%20acolhedor%20de%20terapeuta%20em%20consult%C3%B3rio.png";
const graduationUrl = "/midia/foto_formatura_iapb.png";
const tijucaUrl = "/midia/foto_mercado_tijuca_alimentos.png";

const issues = [
  ["Crenças limitantes", "Reconheça ideias aprendidas ao longo da vida e observe como elas podem participar das suas decisões e relações."],
  ["Ansiedade e preocupações", "Investigue suas preocupações com cuidado e desenvolva mais clareza sobre o que acontece no seu dia a dia."],
  ["Medos e fobias", "Compreenda como medos e reações aparecem na sua rotina, no seu ritmo e sem julgamentos."],
  ["Bloqueios emocionais", "Dê nome ao que sente e explore os padrões que parecem se repetir, com espaço para novas perspectivas."],
  ["Traumas e experiências marcantes", "Fale sobre experiências marcantes com respeito à sua história, aos seus limites e ao seu tempo."],
  ["Autoestima e insegurança", "Explore a imagem que construiu de si e como ela influencia sua segurança e seus relacionamentos."],
  ["Procrastinação", "Observe os hábitos e as dificuldades que atrapalham seus planos e identifique o que merece atenção."],
  ["Relacionamentos", "Entenda dinâmicas de relacionamento, comunicação, limites e necessidades emocionais."],
  ["Compulsão alimentar", "Explore com responsabilidade a relação entre emoções, hábitos e comportamento alimentar."],
  ["Prosperidade e objetivos", "Reflita sobre objetivos, expectativas e crenças pessoais sem promessas de ganhos ou resultados garantidos."],
];

const issueImages = [
  {url:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=720&q=85"},
  {url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=720&q=85"}
];

const reviews = [
  { name: "Mariana Costa", text: "Gostei de poder conversar com calma e sem sentir que precisava ter todas as respostas. A escuta me ajudou a organizar melhor algumas questões que eu vinha adiando." },
  { name: "Rafael Martins", text: "O primeiro contato foi tranquilo. Consegui tirar minhas dúvidas sobre como funciona o atendimento e entender melhor o que esperar do processo." },
  { name: "Camila Oliveira", text: "Achei importante ter espaço para falar no meu ritmo. A conversa trouxe perguntas que me fizeram olhar para algumas situações por outro ângulo." },
  { name: "André Ferreira", text: "A explicação sobre as abordagens foi clara e respeitosa. Foi bom poder conversar sobre minhas expectativas antes de decidir os próximos passos." },
];

const faq = [
  ["O que é a Psicanálise?", "A psicanálise oferece um espaço de escuta e investigação da história pessoal, dos conflitos e dos sentimentos. O percurso é singular e construído a partir das questões trazidas por cada pessoa."],
  ["O atendimento pode ser online?", "Sim. Há atendimento online e presencial em Fortaleza, Ceará. Consulte disponibilidade e horários pelo WhatsApp."],
  ["Quanto tempo dura uma vivência de Energy Healing®?", "Conforme as informações fornecidas pelo profissional, uma vivência dura aproximadamente uma hora. Confirme a duração ao agendar."],
  ["O que é Energy Healing®?", "Segundo o material fornecido, a técnica foi criada em 2004 por Brent Phillips e propõe trabalhar crenças e conteúdos do subconsciente. Converse sobre seus métodos e limites; não substitui cuidados médicos ou psicológicos indicados."],
  ["O que significa PNL?", "PNL significa Programação Neurolinguística e explora relações entre linguagem, pensamento e comportamento. As evidências e resultados podem variar conforme a prática e o objetivo."],
  ["Como começo?", "Envie uma mensagem para consultar valores, horários, modalidades e tirar suas dúvidas antes de decidir."],
];

function goWhatsapp(message: string) {
  window.open(`${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="site">
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy">
            <img className="brand-logo hero-brand-logo" src="/midia/Logo%20Rozamato%20Psicanalista%20em%20Verde%20Floresta.png" alt="Logo Rozamato Psicanalista" />
            <h1>Herbsten <em>Rozamato Sousa</em></h1>
            <p className="hero-title">Graduado em História · Psicanalista Clínico · Practitioner em PNL · Hipnoterapeuta Clínico · Energy Healing®</p>
            <p className="hero-statement">Conheça sua história com mais profundidade e explore os padrões que influenciam suas escolhas, seus relacionamentos e a maneira como você se percebe.</p>
            <p className="hero-lead">Atendimento online e presencial em Fortaleza — CE, com abordagens voltadas ao autoconhecimento e à compreensão de padrões emocionais.</p>
            <div className="hero-credentials"><span><ShieldCheck size={17}/> Formação pelo IAPB em 2018</span><span><Monitor size={17}/> Presencial e online</span></div>
            <div className="hero-actions">
              <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero agendar uma conversa sobre Psicanálise e as abordagens.")}><MessageCircle/> Agendar uma conversa</Button>
              <Button variant="siteGhost" size="site" asChild><a href="#processo">Conhecer o processo <ArrowRight/></a></Button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee"><div><span>ANSIEDADE</span><i>✦</i><span>DEPRESSÃO</span><i>✦</i><span>DEPENDÊNCIA EMOCIONAL</span><i>✦</i><span>TRAUMAS</span><i>✦</i><span>MEDOS</span><i>✦</i><span>AUTOESTIMA</span><i>✦</i><span>RELACIONAMENTOS</span><i>✦</i><span>FOBIAS</span><i>✦</i><span>LUTO</span><i>✦</i><span>ANSIEDADE</span><i>✦</i><span>DEPRESSÃO</span><i>✦</i><span>DEPENDÊNCIA EMOCIONAL</span><i>✦</i><span>TRAUMAS</span><i>✦</i><span>MEDOS</span><i>✦</i></div></div>

      <section className="section intro-section">
        <div className="container narrow center">
          <span className="eyebrow">UM CONVITE AO AUTOCONHECIMENTO</span>
          <h2>Suas crenças influenciam a forma como você <em>interpreta o mundo.</em></h2>
          <p>Crenças, experiências e hábitos podem influenciar decisões e relacionamentos. O processo convida você a observar esses padrões com curiosidade, responsabilidade e abertura para novas perspectivas.</p>
          <div className="center action">
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre os atendimentos.")}>Agendar meu atendimento <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section soft" id="especialidades">
        <div className="container issues-container">
          <div className="section-heading center">
            <span className="eyebrow">QUESTÕES TRABALHADAS</span>
            <h2>O que está acontecendo com você <em>merece ser compreendido.</em></h2>
            <p>As questões são conversadas de forma individual, considerando o momento de vida, as expectativas e a abordagem escolhida.</p>
          </div>
          <div className="issue-window"><div className="issue-track">
            {[0, 1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>
              {issues.map(([title,text], i) => <article className="issue-card" key={title}>
                
                <div className="issue-body"><h3>{title}</h3><p>{text}</p></div>
              </article>)}
            </div>)}
          </div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre os atendimentos.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section process" id="processo">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">COMO FUNCIONA</span>
            <h2>Um processo com <em>acolhimento e direção.</em></h2>
            <p>Da primeira conversa ao acompanhamento, cada etapa é pensada para que você saiba onde está e para onde está caminhando.</p>
          </div>
          <div className="steps">
            {[
              ["01","Primeiro contato","Você conversa com Herbsten, apresenta o que está vivendo e tira suas primeiras dúvidas."],
              ["02","Entendimento","O momento atual e suas principais questões são compreendidos de forma individualizada."],
              ["03","Processo terapêutico","As sessões seguem uma condução estruturada, respeitando seu ritmo e suas necessidades."],
              ["04","Novos caminhos","O objetivo é ampliar consciência e construir formas mais saudáveis de lidar com suas experiências."]
            ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre os atendimentos.")}>Agendar conversa <MessageCircle size={18}/></Button></div>
        </div>
          <div className="process-video-block">
            <div className="process-video-copy">
              <span className="eyebrow">ASSISTA TAMBÉM</span>
              <h3>Entenda o processo de forma visual.</h3>
              <p>Um vídeo ilustrativo para acompanhar a explicação sobre o funcionamento do processo e a relação entre pensamentos e emoções.</p>
            </div>
            <div className="process-video-frame">
              <video controls preload="auto" playsInline webkit-playsinline="true" aria-label="Vídeo ilustrativo dos dois cérebros conversando">
                <source src={presentationVideoUrl} type="video/mp4" />
                Seu navegador não consegue reproduzir este vídeo.
              </video>
            </div>
            <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de entender melhor como funciona o processo de atendimento.")}>Quero entender melhor <ArrowRight size={18}/></Button></div>
          </div>
      </section>

      <section className="section clinic-story" id="apresentacao">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">CONHEÇA A TRAJETÓRIA</span>
            <h2>Conheça Herbsten <em>pela sua própria apresentação.</em></h2>
            <p>Assista ao vídeo em que Herbsten apresenta seu trabalho e compartilha sua proposta de atendimento.</p>
          </div>
          <div className="trajectory-video-frame">
            <video controls preload="auto" playsInline webkit-playsinline="true" aria-label="Herbsten apresenta seu trabalho">
              <source src={approachVideoUrl} type="video/mp4" />
              Seu navegador não consegue reproduzir este vídeo.
            </video>
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Assisti à sua apresentação e gostaria de saber mais sobre os atendimentos.")}>Conversar sobre o atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section soft" id="energy-healing">
        <div className="container specialty-grid">
          <div><span className="eyebrow">ENTENDA A ABORDAGEM</span><h2>O que é <em>Energy Healing®?</em></h2>
          <p>Segundo o material apresentado, Energy Healing® foi criada em 2004 pelo norte-americano Brent Phillips. É descrita como uma abordagem direcionada ao subconsciente, que utiliza cinesiologia aplicada e processos associados à neurociência, à psicologia energética e à física quântica.</p>
          <p>A vivência parte de uma situação que a pessoa deseja compreender, trabalhar ou modificar e dura aproximadamente uma hora, conforme as informações fornecidas pelo profissional.</p>
          <p className="note">As descrições desta técnica não representam garantia de resultado nem substituem diagnóstico, tratamento médico ou acompanhamento psicológico quando necessários.</p>
          <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero entender como funciona uma vivência de Energy Healing®.")}>Tirar dúvidas sobre Energy Healing® <ArrowRight size={18}/></Button></div>
          <div className="specialty-quote"><Sparkles size={32}/><p>Um espaço para conhecer a abordagem, esclarecer dúvidas e conversar sobre expectativas realistas.</p></div>
        </div>
      </section>

      <section className="section" id="vivencia">
        <div className="container narrow center">
          <span className="eyebrow">O QUE PODE SER TRABALHADO</span>
          <h2>Uma vivência começa com uma situação que você deseja <em>compreender ou modificar.</em></h2>
          <p>Ansiedade, medo, pânico, fobias, desânimo, tristeza, bloqueios emocionais, experiências traumáticas, insegurança, timidez, procrastinação, compulsão alimentar, dores crônicas, questões físicas e preocupações com escassez financeira podem ser temas trazidos para conversa, conforme o escopo do atendimento.</p>
          <p>Esses temas não significam diagnóstico nem promessa de eliminação dos sintomas. Dores crônicas, sintomas físicos, depressão e outras condições de saúde devem ser avaliadas por profissionais de saúde habilitados. A vivência de Energy Healing® não substitui tratamento médico ou psicológico.</p>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero tirar dúvidas sobre uma vivência de Energy Healing® e sua duração.")}>Consultar sobre uma vivência de aproximadamente 1h <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section benefits" id="abordagens">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">ABORDAGENS PROFISSIONAIS</span><h2>Diferentes caminhos para <em>conhecer o trabalho.</em></h2><p>Entenda as principais áreas de atuação e converse com o profissional sobre objetivos, indicações e limites de cada abordagem.</p></div>
          <div className="benefit-grid">
            {[[ "Psicanálise clínica","Espaço de investigação da história pessoal, dos conflitos, dos sentimentos e dos padrões que se repetem."],[ "Hipnoterapia clínica","A hipnoterapia utiliza técnicas de hipnose em contexto terapêutico. Converse sobre o método, a formação e a adequação ao seu caso."],[ "Programação Neurolinguística (PNL)","PNL significa Programação Neurolinguística. O material apresentado a relaciona à linguagem, aos padrões de pensamento e comportamento, comunicação, gestão do estresse e definição de metas."],[ "Energy Healing®","Prática descrita pelo profissional como direcionada a crenças e conteúdos do subconsciente. Conheça os limites e expectativas realistas."]].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de conversar sobre as abordagens profissionais e tirar algumas dúvidas.")}>Tirar dúvidas sobre as abordagens <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container narrow center">
          <span className="eyebrow">ÁREAS DA VIDA</span><h2>Questões pessoais, familiares e profissionais podem se <em>conectar.</em></h2>
          <p>O trabalho pode abrir conversas sobre saúde familiar, relações no trabalho, prosperidade, hábitos de emagrecimento, crescimento espiritual, autoestima, objetivos pessoais e sentido de vida — sempre respeitando a individualidade e sem prometer resultados específicos.</p>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de saber qual abordagem pode ser adequada para minha necessidade.")}>Conversar sobre meu objetivo <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <figure className="about-image"><img src={portraitUrl} alt="Retrato profissional de Herbsten Rozamato Sousa" loading="lazy"/></figure>
          <div className="about-copy">
            <span className="eyebrow">QUEM É HERBSTEN ROZAMATO SOUSA</span>
            <h2>Formação, experiência e um olhar voltado ao <em>autoconhecimento.</em></h2>
            <p>Herbsten Rozamato Sousa é graduado em História e concluiu sua formação em Psicanálise pelo Instituto de Psicanálise — IAPB, em 2018. Também atua como Practitioner em PNL, hipnoterapeuta clínico e terapeuta de tratamento físico e emocional e Energy Healing®.</p>
            <p>Sua apresentação profissional reúne diferentes abordagens e busca oferecer espaço para refletir sobre sentimentos, crenças, experiências e padrões pessoais.</p>
            <div className="about-points"><div><Check size={17}/> Graduado em História</div><div><Check size={17}/> Psicanálise pelo IAPB (2018)</div><div><Check size={17}/> Practitioner em PNL, Hipnoterapia e Energy Healing®</div></div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre os atendimentos.")}>Agendar conversa <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section soft" id="experiencia">
        <div className="container about-grid">
          <figure className="about-image experience-image"><img src={tijucaUrl} alt="Registro relacionado à experiência de atendimento na comunidade próxima à Tijuca Alimentos" loading="lazy"/></figure>
          <div className="about-copy">
            <span className="eyebrow">TRAJETÓRIA E EXPERIÊNCIA</span>
            <h2>Experiência construída em diferentes <em>contextos de atendimento.</em></h2>
            <p>Herbsten relata ter realizado durante um ano atendimentos psicanalíticos junto à comunidade próxima à indústria Tijuca Alimentos, em Jangurussu, Fortaleza.</p>
            <p>Também informa experiências de atendimento particular no Studio Pilates MoveOnMatPilates, na Clínica Halasana Terapias Integrativas e no Espaço Estar de terapias integrativas.</p>
            <p>A imagem apresentada nesta seção é um registro relacionado à Tijuca Alimentos; não representa endosso ou vínculo institucional atual.</p>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de saber mais sobre sua trajetória e os atendimentos.")}>Conhecer os atendimentos <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">UM PROCESSO DE REFLEXÃO</span><h2>Compreender padrões pode abrir espaço para <em>novas perspectivas.</em></h2><p>Cada abordagem tem características e limites próprios. Antes de iniciar, converse sobre o método, os objetivos possíveis e suas dúvidas.</p></div>
          <div className="method-cards">
            <article><div className="method-icon"><Brain size={21}/></div><span>01</span><h3>Compreender</h3><p>Olhar para o que você sente e identificar padrões que se repetem na sua vida.</p></article>
            <article><div className="method-icon"><HeartHandshake size={21}/></div><span>02</span><h3>Acolher</h3><p>Ter um espaço seguro para falar sobre experiências difíceis com respeito à sua história.</p></article>
            <article><div className="method-icon"><Sparkles size={21}/></div><span>03</span><h3>Reorganizar</h3><p>Construir novas perspectivas para lidar com emoções, relações e situações do cotidiano.</p></article>
            <article><div className="method-icon"><ArrowRight size={21}/></div><span>04</span><h3>Avançar</h3><p>Levar mais consciência para suas escolhas, limites e próximos passos.</p></article>
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de saber mais sobre Energy Healing®.")}>Começar meu processo <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section specialty">
        <div className="container specialty-grid">
          <div><span className="eyebrow">ENERGY HEALING®</span><h2>Energy <em>Healing®</em></h2><p>Segundo o material fornecido, Energy Healing® foi criada em 2004 por Brent Phillips e propõe explorar crenças e conteúdos do subconsciente. A descrição menciona cinesiologia aplicada e processos associados à psicologia energética.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero saber mais sobre a PNL e Hipnoterapia Clínica.")}>Quero saber mais <ArrowRight size={18}/></Button></div>
          <div className="specialty-quote"><Brain size={32}/><p>“Compreender seus padrões pode ser o começo de uma nova forma de se relacionar consigo mesmo.”</p></div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">SOBRE A PROPOSTA DE ATENDIMENTO</span><h2>Um espaço de conversa que respeita <em>sua individualidade.</em></h2><p>Entenda como funciona cada abordagem, esclareça suas dúvidas e escolha com tranquilidade se deseja iniciar um atendimento.</p></div>
          <div className="benefit-grid">
            {[[ "Escuta individualizada","Cada pessoa possui uma história, experiências e necessidades diferentes."],[ "Formação e abordagens","Psicanálise pelo IAPB, Practitioner em PNL, Hipnoterapia Clínica e Energy Healing®."],[ "Atendimento flexível","Opções presencial e online para facilitar o acesso ao acompanhamento."],[ "Ambiente acolhedor","Um espaço de respeito, privacidade e cuidado durante todo o processo."]].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero agendar um atendimento com você.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container reviews-container">
          <div className="section-heading center"><span className="eyebrow">AVALIAÇÕES</span><h2>Um atendimento começa com escuta, informação e <em>clareza.</em></h2><p>Conheça as modalidades e tire suas dúvidas antes de marcar uma conversa.</p></div>
          <div className="review-window"><div className="review-track">{[0,1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>{reviews.map(({name,text})=><article className="review-card" key={name}><div className="review-stars" aria-label="Estrelas decorativas de demonstração">{[0,1,2,3,4].map(star=><Star key={star} size={18}/>)}</div><p>{text}</p><div className="review-person"><div className="review-avatar"><UserRound size={24}/></div><div className="review-person-info"><h3>{name}</h3></div></div></article>)}</div>)}</div></div>
          <p className="reviews-disclaimer">Depoimentos e nomes fictícios, criados apenas para demonstração do layout. Não representam avaliações reais de clientes.</p>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero conversar sobre um atendimento.")}>Agendar atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <figure className="location-map">
            {clinicMapUrl ? <iframe title="Google Maps — atendimento em Fortaleza, CE" src={clinicMapUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> : <div className="location-map-pending"><MapPin size={36}/><p>Mapa temporariamente indisponível.</p></div>}
            <figcaption>Atendimento presencial<br/>Fortaleza — CE, Brasil<br/>Endereço informado ao agendar</figcaption>
          </figure>
          <div className="location-copy"><span className="eyebrow">ATENDIMENTO</span><h2>Presencial ou online, <em>onde fizer sentido para você.</em></h2><p>Escolha a modalidade mais adequada para sua rotina. Para atendimento presencial, entre em contato para consultar disponibilidade e horários.</p><div className="location-list"><div><MapPin size={18}/><span><strong>Presencial</strong>Fortaleza — CE, Brasil<br/>Consulte o endereço ao agendar.</span></div><div><Video size={18}/><span><strong>Online</strong>Atendimento à distância, com praticidade e privacidade.</span></div><div><Clock3 size={18}/><span><strong>Horários</strong>Consulte diretamente com o Herbsten os horários disponíveis.</span></div></div><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de consultar horários e modalidade de atendimento.")}>Consultar horários <ArrowRight size={18}/></Button></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Informação clara para você <em>decidir com tranquilidade.</em></h2><p>Se ainda não encontrou a resposta que procura, fale diretamente com o Herbsten.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Tenho uma dúvida sobre a terapia.")}>Tirar uma dúvida <MessageCircle size={18}/></Button></div>
          <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""}`} key={q}><Button variant="sitePlain" size="site" aria-expanded={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></Button>{openFaq===i && <p>{a}</p>}</div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container center"><span className="eyebrow">SEU PROCESSO COMEÇA COM UMA CONVERSA</span><h2>Comece com uma conversa. <em>Conheça as possibilidades.</em></h2><p>Converse com o Herbsten, explique o que você está vivendo e descubra como funciona o atendimento.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero dar o primeiro passo e conhecer a Psicanálise.")}>Quero conversar com o Herbsten <ArrowRight size={19}/></Button></div>
      </section>

      <footer><div className="container footer-grid"><div><img className="brand-logo footer-brand-logo" src="/midia/Logo%20Rozamato%20Psicanalista%20em%20Verde%20Floresta.png" alt="Logo Rozamato Psicanalista" loading="lazy" /><p>Psicanalista Clínico · Practitioner em PNL<br/>Hipnoterapeuta · Energy Healing®</p></div><div><strong>Atendimento</strong><span>Online e presencial</span><span>Consulte horários</span></div><div><strong>Contato</strong><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre atendimento online e presencial.")}><MessageCircle size={16}/> WhatsApp</Button><a href="#inicio"><Instagram size={16}/> Instagram</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Herbsten Rozamato Sousa. Todos os direitos reservados.</div></footer>

      <Button variant="whatsapp" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de saber mais sobre Psicanálise e as abordagens.")} aria-label="Falar no WhatsApp"><img src={whatsappIcon.url} alt=""/></Button>
    </main>
  );
}
