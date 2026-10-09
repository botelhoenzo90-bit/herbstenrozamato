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
import portrait from "@/assets/idalecia-retrato.png.asset.json";
import office from "@/assets/idalecia-consultorio.png.asset.json";
import clinic from "@/assets/clinica-fachada.png.asset.json";
import whatsappIcon from "@/assets/whatsapp.png.asset.json";
import depression from "@/assets/depressao.webp.asset.json";
import anxiety from "@/assets/ansiedade.png.asset.json";
import dependency from "@/assets/dependencia-emocional.png.asset.json";
import fears from "@/assets/medos.png.asset.json";
import trauma from "@/assets/traumas.png.asset.json";
import panic from "@/assets/panico.webp.asset.json";
import insomnia from "@/assets/insonia.png.asset.json";
import esteem from "@/assets/autoestima.png.asset.json";
import relationships from "@/assets/relacionamentos.png.asset.json";
import grief from "@/assets/luto.png.asset.json";
import sharePhoto from "@/assets/idalecia-compartilhar.jpg.asset.json";
import herbstenVideo from "@/assets/idalecia-video.mp4.asset.json";

const siteUrl = "https://herbstenrozamato.lovable.app";
const shareUrl = new URL(sharePhoto.url, siteUrl).href;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Herbsten Rozamato Sousa | Psicanálise e Terapias em Fortaleza, CE e online" },
      { name: "description", content: "Psicanálise e Terapias com Herbsten Rozamato Sousa em Fortaleza, CE e online. Atendimento individual para ansiedade, traumas e questões emocionais. Consulte horários." },
      { property: "og:title", content: "Herbsten Rozamato Sousa | Psicanálise e Terapias em Fortaleza, CE e online" },
      { property: "og:description", content: "Conheça Herbsten Rozamato Sousa, Psicanalista Clínico • Hipnoterapeuta. Atendimento online e presencial em Fortaleza, CE, com escuta individualizada e acolhimento." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "google-site-verification", content: "9myn0HdI7aGpUZnVvPyhIOqrxVOLgTJA9XtYO1VNmew" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: shareUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Herbsten Rozamato Sousa, Psicanalista Clínico • Hipnoterapeuta" },
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
const clinicVideoUrl = herbstenVideo.url;

const issues = [
  ["Crenças limitantes", "Explore crenças e padrões que podem influenciar suas escolhas e sua forma de ver o mundo."],
  ["Ansiedade e preocupações", "Um espaço para compreender emoções e buscar formas de lidar com momentos difíceis."],
  ["Medos e fobias", "Explore experiências e reações que podem limitar sua rotina, respeitando seu tempo."],
  ["Bloqueios emocionais", "Converse sobre padrões e sentimentos que parecem dificultar seus próximos passos."],
  ["Traumas e experiências marcantes", "Olhe para experiências difíceis com respeito à sua história e aos seus limites."],
  ["Autoestima e insegurança", "Reflita sobre a forma como você se percebe e se relaciona consigo e com os outros."],
  ["Procrastinação", "Investigue fatores que podem influenciar suas decisões, seus hábitos e sua rotina."],
  ["Relacionamentos", "Compreenda padrões, conflitos, limites e necessidades nas relações."],
  ["Compulsão alimentar", "Converse sobre comportamentos que causam preocupação e as emoções associadas a eles."],
  ["Prosperidade e objetivos", "Reflita sobre crenças, expectativas e padrões que influenciam suas escolhas."],
];

const issueImages = [depression, anxiety, dependency, fears, trauma, panic, insomnia, esteem, relationships, grief];

const reviews = [
  { name: "Depoimento real", text: "Este espaço fica reservado para inserir uma avaliação verdadeira, autorizada pelo cliente." },
  { name: "Depoimento real", text: "Adicione aqui um relato autêntico sobre a experiência de atendimento, com autorização." },
  { name: "Depoimento real", text: "Use este cartão para publicar uma avaliação real, sem alterar o sentido do depoimento." },
  { name: "Depoimento real", text: "Espaço reservado para uma avaliação autorizada de quem já realizou atendimento." },
];

const faq = [
  ["O que é a Psicanálise e Terapias?", "A TRG é uma abordagem terapêutica voltada ao trabalho com experiências e padrões emocionais. O processo é individualizado e considera a história de cada pessoa."],
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
            <h1>Herbsten <em>da Guia</em></h1>
            <p className="hero-title">Psicanalista Clínico • Hipnoterapeuta</p>
            <p className="hero-statement">Um espaço para compreender sua história, observar suas crenças e abrir espaço para novas escolhas.</p>
            <p className="hero-lead">Atendimento online e presencial em Fortaleza — CE, com abordagens voltadas ao autoconhecimento e à compreensão de padrões emocionais.</p>
            <div className="hero-credentials"><span><ShieldCheck size={17}/> Formação pelo IAPB em 2018</span><span><Monitor size={17}/> Presencial e online</span></div>
            <div className="hero-actions">
              <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero agendar uma conversa sobre a Psicanálise e Terapias.")}><MessageCircle/> Agendar uma conversa</Button>
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
            <p>Temas que podem ser explorados de acordo com sua história, sua necessidade e os limites de cada abordagem.</p>
          </div>
          <div className="issue-window"><div className="issue-track">
            {[0, 1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>
              {issues.map(([title,text], i) => <article className="issue-card" key={title}>
                <img className="issue-image" src={issueImages[i]?.url} alt={copy === 0 ? title : ""} loading="lazy"/>
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
              ["01","Primeiro contato","Você conversa com a Herbsten, apresenta o que está vivendo e tira suas primeiras dúvidas."],
              ["02","Entendimento","O momento atual e suas principais questões são compreendidos de forma individualizada."],
              ["03","Processo terapêutico","As sessões seguem uma condução estruturada, respeitando seu ritmo e suas necessidades."],
              ["04","Novos caminhos","O objetivo é ampliar consciência e construir formas mais saudáveis de lidar com suas experiências."]
            ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre os atendimentos.")}>Agendar conversa <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section clinic-story">
        <div className="container clinic-story-grid">
          <div className="clinic-copy">
            <span className="eyebrow">UM ESPAÇO PARA VOCÊ</span>
            <h2>Mais do que uma sessão: um lugar para <em>se ouvir.</em></h2>
            <p>O atendimento foi pensado para oferecer uma experiência tranquila, reservada e acolhedora, onde você possa desacelerar e falar sobre aquilo que muitas vezes fica guardado.</p>
            <p>Seja presencialmente ou online, cada contato busca preservar sua individualidade e criar um ambiente de confiança para o seu processo.</p>
            
            <div className="clinic-highlights">
              <div><ShieldCheck size={18}/><span><strong>Privacidade</strong>Um atendimento reservado e individual.</span></div>
              <div><HeartHandshake size={18}/><span><strong>Acolhimento</strong>Escuta respeitosa, sem julgamentos.</span></div>
              <div><Monitor size={18}/><span><strong>Flexibilidade</strong>Opções presencial e online.</span></div>
            </div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de consultar horários e modalidades.")}>Conhecer o atendimento <ArrowRight size={18}/></Button>
          </div>
          <Carousel className="clinic-gallery" opts={{ loop: true }} aria-label="Fotos do espaço de atendimento">
            <CarouselContent>
              <CarouselItem><figure className="clinic-slide"><img src={office.url} alt="Herbsten em seu espaço de atendimento" loading="lazy"/></figure></CarouselItem>
              <CarouselItem><figure className="clinic-slide"><img src={clinic.url} alt="Espaço de atendimento" loading="lazy"/></figure></CarouselItem>
            </CarouselContent>
            <CarouselPrevious variant="siteGold" className="clinic-arrow clinic-arrow-prev" aria-label="Foto anterior" title="Foto anterior"/>
            <CarouselNext variant="siteGold" className="clinic-arrow clinic-arrow-next" aria-label="Próxima foto" title="Próxima foto"/>
          </Carousel>
        </div>
      </section>


      <section className="section video-section" id="video">
        <div className="container video-section-grid">
          <div className="video-copy">
            <span className="eyebrow">CONHEÇA A IDALÉCIA</span>
            <h2>Conheça a proposta de atendimento e <em>as abordagens.</em></h2>
            <p>Este espaço poderá receber um vídeo de apresentação do profissional e explicações sobre as abordagens e modalidades de atendimento.</p>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de conhecer melhor o seu atendimento.")}>Quero conhecer o atendimento <ArrowRight size={18}/></Button>
          </div>
          <div className="video-frame">
            {clinicVideoUrl ? (
              <video controls preload="metadata" playsInline src={clinicVideoUrl}>
                <source src={clinicVideoUrl} />
                Seu navegador não consegue reproduzir este vídeo.
              </video>
            ) : (
              <div className="video-placeholder">
                <div className="video-play"><Video size={30}/></div>
                <strong>Seu vídeo será exibido aqui</strong>
                <span>Espaço reservado para o vídeo da Herbsten falando sobre a clínica e o atendimento.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <figure className="about-image"><img src={portrait.url} alt="Retrato profissional de Herbsten Rozamato Sousa" loading="lazy"/></figure>
          <div className="about-copy">
            <span className="eyebrow">SOBRE IDALÉCIA DA GUIA</span>
            <h2>Formação, experiência e um olhar voltado ao <em>autoconhecimento.</em></h2>
            <p>Herbsten Rozamato Sousa é Psicanalista Clínico • Hipnoterapeuta, com especialização complementar em PNL e Hipnoterapia Clínica e certificação internacional em transtornos emocionais graves.</p>
            <p>Sua apresentação profissional reúne diferentes abordagens e busca oferecer espaço para refletir sobre sentimentos, crenças, experiências e padrões pessoais.</p>
            <div className="about-points"><div><Check size={17}/> Graduado em História</div><div><Check size={17}/> Psicanálise pelo IAPB (2018)</div><div><Check size={17}/> Practitioner em PNL, Hipnoterapia e Energy Healing®</div></div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre os atendimentos.")}>Agendar conversa <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">UM PROCESSO DE REFLEXÃO</span><h2>Compreender padrões pode abrir espaço para <em>novas perspectivas.</em></h2><p>As abordagens e seus resultados variam. Converse sobre objetivos, métodos e limites antes de iniciar qualquer atendimento.</p></div>
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
          <div className="section-heading center"><span className="eyebrow">POR QUE ESCOLHER A IDALÉCIA</span><h2>Um espaço de conversa que respeita <em>sua individualidade.</em></h2><p>Conheça as abordagens, tire suas dúvidas e avalie com tranquilidade qual proposta faz sentido para você.</p></div>
          <div className="benefit-grid">
            {[["Escuta individualizada","Cada pessoa possui uma história, experiências e necessidades diferentes."],["Formação e abordagens","Psicanálise e Terapias, PNL e Hipnoterapia Clínica e certificação internacional."],["Atendimento flexível","Opções presencial e online para facilitar o acesso ao acompanhamento."],["Ambiente acolhedor","Um espaço de respeito, privacidade e cuidado durante todo o processo."]].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero agendar um atendimento com você.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container reviews-container">
          <div className="section-heading center"><span className="eyebrow">AVALIAÇÕES</span><h2>Um atendimento começa com escuta, informação e <em>clareza.</em></h2><p>Conheça as modalidades e tire suas dúvidas antes de marcar uma conversa.</p></div>
          <div className="review-window"><div className="review-track">{[0,1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>{reviews.map(({name,text})=><article className="review-card" key={name}><div className="review-stars" aria-label="Cinco estrelas ilustrativas">{[0,1,2,3,4].map(star=><Star key={star} size={18}/>)}</div><p>{text}</p><div className="review-person"><div className="review-avatar"><UserRound size={24}/></div><div className="review-person-info"><h3>{name}</h3><span>Espaço para avaliação real</span></div></div></article>)}</div>)}</div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero conversar sobre um atendimento.")}>Agendar atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <figure className="location-map">
            {clinicMapUrl ? <iframe title="Google Maps — atendimento em Fortaleza, CE" src={clinicMapUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> : <div className="location-map-pending"><MapPin size={36}/><p>Mapa temporariamente indisponível.</p></div>}
            <figcaption>Atendimento presencial<br/>Fortaleza — CE, Brasil<br/>Endereço informado ao agendar</figcaption>
          </figure>
          <div className="location-copy"><span className="eyebrow">ATENDIMENTO</span><h2>Presencial ou online, <em>onde fizer sentido para você.</em></h2><p>Escolha a modalidade mais adequada para sua rotina. Para atendimento presencial, entre em contato para consultar disponibilidade e horários.</p><div className="location-list"><div><MapPin size={18}/><span><strong>Presencial</strong>Fortaleza — CE, Brasil<br/>Consulte o endereço ao agendar.</span></div><div><Video size={18}/><span><strong>Online</strong>Atendimento à distância, com praticidade e privacidade.</span></div><div><Clock3 size={18}/><span><strong>Horários</strong>Consulte diretamente com a Herbsten os horários disponíveis.</span></div></div><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de consultar horários e modalidade de atendimento.")}>Consultar horários <ArrowRight size={18}/></Button></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Informação clara para você <em>decidir com tranquilidade.</em></h2><p>Se ainda não encontrou a resposta que procura, fale diretamente com a Herbsten.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Tenho uma dúvida sobre a terapia.")}>Tirar uma dúvida <MessageCircle size={18}/></Button></div>
          <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""}`} key={q}><Button variant="sitePlain" size="site" aria-expanded={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></Button>{openFaq===i && <p>{a}</p>}</div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container center"><span className="eyebrow">SEU PROCESSO COMEÇA COM UMA CONVERSA</span><h2>Comece com uma conversa. <em>Conheça as possibilidades.</em></h2><p>Converse com a Herbsten, explique o que você está vivendo e descubra como funciona o atendimento.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Quero dar o primeiro passo e conhecer a Psicanálise e Terapias.")}>Quero conversar com a Herbsten <ArrowRight size={19}/></Button></div>
      </section>

      <footer><div className="container footer-grid"><div><div className="brand footer-brand">Herbsten <span>da Guia</span></div><p>Psicanalista Clínico • Hipnoterapeuta<br/>PNL e Hipnoterapia Clínica</p></div><div><strong>Atendimento</strong><span>Online e presencial</span><span>Consulte horários</span></div><div><strong>Contato</strong><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de informações sobre atendimento online e presencial.")}><MessageCircle size={16}/> WhatsApp</Button><a href="#inicio"><Instagram size={16}/> Instagram</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Herbsten Rozamato Sousa. Todos os direitos reservados.</div></footer>

      <Button variant="whatsapp" size="site" onClick={() => goWhatsapp("Olá, Herbsten! Gostaria de saber mais sobre a Psicanálise e Terapias.")} aria-label="Falar no WhatsApp"><img src={whatsappIcon.url} alt=""/></Button>
    </main>
  );
}
