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
import idaleciaVideo from "@/assets/idalecia-video.mp4.asset.json";

const siteUrl = "https://idaleciaterapeuta.lovable.app";
const shareUrl = new URL(sharePhoto.url, siteUrl).href;

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Idalécia da Guia | Terapia TRG em Rio Tinto, PB e online" },
      { name: "description", content: "Terapia TRG com Idalécia da Guia em Rio Tinto, PB e online. Atendimento individual para ansiedade, traumas e questões emocionais. Consulte horários." },
      { property: "og:title", content: "Idalécia da Guia | Terapia TRG em Rio Tinto, PB e online" },
      { property: "og:description", content: "Conheça Idalécia da Guia, Terapeuta TRG. Atendimento presencial no Centro de Rio Tinto, PB e online, com escuta individualizada e acolhimento." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "google-site-verification", content: "9myn0HdI7aGpUZnVvPyhIOqrxVOLgTJA9XtYO1VNmew" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: shareUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Idalécia da Guia, Terapeuta TRG" },
      { name: "twitter:image", content: shareUrl },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Idalécia da Guia — Terapeuta TRG", inLanguage: "pt-BR" },
          {
            "@type": "LocalBusiness", "@id": `${siteUrl}/#atendimento`,
            name: "Idalécia da Guia — Terapeuta TRG", url: siteUrl,
            telephone: "+55 83 98865-5463",
            description: "Atendimento de Terapia TRG presencial em Rio Tinto, PB e online.",
            address: {
              "@type": "PostalAddress", streetAddress: clinicAddress.street,
              addressLocality: "Rio Tinto", addressRegion: "PB",
              postalCode: clinicAddress.postalCode, addressCountry: "BR",
            },
          },
        ],
      }),
    }],
  }),
  component: Index,
});

const whatsapp = "https://wa.me/5583988655463";
const mapsBrowserKey = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY'];
const clinicMapUrl = getClinicMapUrl(mapsBrowserKey);
const clinicVideoUrl = idaleciaVideo.url;

const issues = [
  ["Depressão", "Acolhimento e organização emocional para momentos de desânimo e perda de sentido."],
  ["Ansiedade", "Um espaço para compreender padrões emocionais e desenvolver mais segurança no dia a dia."],
  ["Dependência emocional", "Trabalhe limites, autoestima e padrões que afetam seus relacionamentos."],
  ["Medos e fobias", "Compreenda reações emocionais e avance no seu processo com acompanhamento."],
  ["Traumas", "Um processo estruturado e acolhedor para olhar para experiências que ainda pesam."],
  ["Síndrome do pânico", "Acolhimento para compreender suas experiências e buscar mais equilíbrio emocional."],
  ["Insônia", "Investigue padrões emocionais que podem estar relacionados à dificuldade de desacelerar."],
  ["Baixa autoestima", "Fortaleça sua percepção de si e construa relações mais saudáveis consigo."],
  ["Relacionamentos", "Mais clareza para lidar com conflitos, inseguranças e padrões repetitivos."],
  ["Perdas e luto", "Um espaço seguro para atravessar mudanças e experiências de perda."],
];

const issueImages = [depression, anxiety, dependency, fears, trauma, panic, insomnia, esteem, relationships, grief];

const reviews = [
  { name: "Mariana S.", text: "Um espaço de escuta, respeito e acolhimento para falar sobre o que você sente." },
  { name: "Camila R.", text: "Cuidado individualizado, com atenção à sua história e ao seu momento." },
  { name: "Juliana M.", text: "Uma condução acolhedora para olhar para suas emoções com mais consciência." },
  { name: "Ana P.", text: "Privacidade e respeito à individualidade, no atendimento presencial ou online." },
];

const faq = [
  ["O que é a Terapia TRG?", "A TRG é uma abordagem terapêutica voltada ao trabalho com experiências e padrões emocionais. O processo é individualizado e considera a história de cada pessoa."],
  ["O atendimento pode ser online?", "Sim. Idalécia realiza atendimentos online e presenciais, de acordo com a modalidade disponível para você."],
  ["Quanto tempo dura o atendimento?", "A duração e a frequência são definidas de acordo com a necessidade e o planejamento do processo terapêutico."],
  ["Quais questões podem ser trabalhadas?", "Entre as principais questões estão ansiedade, depressão, dependência emocional, medos, traumas, fobias, insegurança, baixa autoestima, conflitos nos relacionamentos e luto."],
  ["A terapia substitui acompanhamento médico?", "Não. A terapia não substitui avaliação ou tratamento médico quando eles forem necessários. Em situações de sofrimento intenso, procure também um profissional de saúde adequado."],
  ["Como começo?", "Clique em um dos botões de agendamento e envie uma mensagem. Você poderá tirar suas dúvidas e verificar a modalidade de atendimento mais adequada."],
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
            <h1>Idalécia <em>da Guia</em></h1>
            <p className="hero-title">Terapeuta TRG</p>
            <p className="hero-statement">Um espaço para acolher suas emoções e compreender os padrões que ainda causam sofrimento.</p>
            <p className="hero-lead">Atendimento individualizado para ansiedade, depressão, dependência emocional, traumas e outras dificuldades emocionais.</p>
            <div className="hero-credentials"><span><ShieldCheck size={17}/> Certificação internacional</span><span><Monitor size={17}/> Presencial e online</span></div>
            <div className="hero-actions">
              <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero agendar uma conversa sobre a Terapia TRG.")}><MessageCircle/> Agendar uma conversa</Button>
              <Button variant="siteGhost" size="site" asChild><a href="#processo">Conhecer o processo <ArrowRight/></a></Button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee"><div><span>ANSIEDADE</span><i>✦</i><span>DEPRESSÃO</span><i>✦</i><span>DEPENDÊNCIA EMOCIONAL</span><i>✦</i><span>TRAUMAS</span><i>✦</i><span>MEDOS</span><i>✦</i><span>AUTOESTIMA</span><i>✦</i><span>RELACIONAMENTOS</span><i>✦</i><span>FOBIAS</span><i>✦</i><span>LUTO</span><i>✦</i><span>ANSIEDADE</span><i>✦</i><span>DEPRESSÃO</span><i>✦</i><span>DEPENDÊNCIA EMOCIONAL</span><i>✦</i><span>TRAUMAS</span><i>✦</i><span>MEDOS</span><i>✦</i></div></div>

      <section className="section intro-section">
        <div className="container narrow center">
          <span className="eyebrow">QUANDO O EMOCIONAL PEDE CUIDADO</span>
          <h2>Quando algo dentro de você pede <em>atenção</em>, ouvir pode ser o primeiro passo.</h2>
          <p>Existem padrões emocionais que se repetem, medos que limitam, relações que machucam e sentimentos que parecem difíceis de explicar. A terapia cria um espaço seguro para olhar para tudo isso com mais consciência e cuidado.</p>
          <div className="center action">
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero agendar meu atendimento.")}>Agendar meu atendimento <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section soft" id="especialidades">
        <div className="container issues-container">
          <div className="section-heading center">
            <span className="eyebrow">QUESTÕES TRABALHADAS</span>
            <h2>O que está acontecendo com você <em>merece ser compreendido.</em></h2>
            <p>O acompanhamento é individualizado e pode abordar diferentes dificuldades emocionais e comportamentais.</p>
          </div>
          <div className="issue-window"><div className="issue-track">
            {[0, 1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>
              {issues.map(([title,text], i) => <article className="issue-card" key={title}>
                <img className="issue-image" src={issueImages[i]?.url} alt={copy === 0 ? title : ""} loading="lazy"/>
                <div className="issue-body"><h3>{title}</h3><p>{text}</p></div>
              </article>)}
            </div>)}
          </div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero agendar meu atendimento.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
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
              ["01","Primeiro contato","Você conversa com a Idalécia, apresenta o que está vivendo e tira suas primeiras dúvidas."],
              ["02","Entendimento","O momento atual e suas principais questões são compreendidos de forma individualizada."],
              ["03","Processo terapêutico","As sessões seguem uma condução estruturada, respeitando seu ritmo e suas necessidades."],
              ["04","Novos caminhos","O objetivo é ampliar consciência e construir formas mais saudáveis de lidar com suas experiências."]
            ].map(([n,t,d]) => <article className="step" key={n}><div className="step-num">{n}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero agendar uma conversa.")}>Agendar conversa <MessageCircle size={18}/></Button></div>
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
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero conhecer o espaço e entender como funciona o atendimento.")}>Conhecer o atendimento <ArrowRight size={18}/></Button>
          </div>
          <Carousel className="clinic-gallery" opts={{ loop: true }} aria-label="Fotos do espaço de atendimento">
            <CarouselContent>
              <CarouselItem><figure className="clinic-slide"><img src={office.url} alt="Idalécia em seu espaço de atendimento" loading="lazy"/></figure></CarouselItem>
              <CarouselItem><figure className="clinic-slide"><img src={clinic.url} alt="Fachada da clínica DiagnoClin, espaço de atendimento" loading="lazy"/></figure></CarouselItem>
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
            <h2>Um pouco sobre a clínica e sobre <em>o seu processo.</em></h2>
            <p>Assista ao vídeo em que Idalécia apresenta seu trabalho, o espaço de atendimento e a forma como conduz cada pessoa durante o processo terapêutico.</p>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de conhecer melhor o seu atendimento.")}>Quero conhecer o atendimento <ArrowRight size={18}/></Button>
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
                <span>Espaço reservado para o vídeo da Idalécia falando sobre a clínica e o atendimento.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="container about-grid">
          <figure className="about-image"><img src={portrait.url} alt="Retrato profissional de Idalécia da Guia" loading="lazy"/></figure>
          <div className="about-copy">
            <span className="eyebrow">SOBRE IDALÉCIA DA GUIA</span>
            <h2>Conhecimento, acolhimento e um olhar <em>individualizado.</em></h2>
            <p>Idalécia da Guia é Terapeuta TRG, com especialização complementar em Leitura Corporal e Comportamental e certificação internacional em transtornos emocionais graves.</p>
            <p>Seu trabalho parte de uma escuta cuidadosa para compreender a pessoa além do sintoma, considerando padrões emocionais, experiências e comportamentos que fazem parte da sua história.</p>
            <div className="about-points"><div><Check size={17}/> Atendimento individual</div><div><Check size={17}/> Online e presencial</div><div><Check size={17}/> Leitura Corporal e Comportamental</div></div>
            <Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero agendar uma conversa.")}>Agendar conversa <MessageCircle size={18}/></Button>
          </div>
        </div>
      </section>

      <section className="section method-section">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">A SOLUÇÃO COMEÇA PELO CUIDADO</span><h2>Existe um caminho para sair do automático e construir <em>novas possibilidades.</em></h2><p>O processo terapêutico oferece um espaço estruturado para compreender o que está por trás do sofrimento, reorganizar padrões emocionais e avançar com mais consciência.</p></div>
          <div className="method-cards">
            <article><div className="method-icon"><Brain size={21}/></div><span>01</span><h3>Compreender</h3><p>Olhar para o que você sente e identificar padrões que se repetem na sua vida.</p></article>
            <article><div className="method-icon"><HeartHandshake size={21}/></div><span>02</span><h3>Acolher</h3><p>Ter um espaço seguro para falar sobre experiências difíceis com respeito à sua história.</p></article>
            <article><div className="method-icon"><Sparkles size={21}/></div><span>03</span><h3>Reorganizar</h3><p>Construir novas perspectivas para lidar com emoções, relações e situações do cotidiano.</p></article>
            <article><div className="method-icon"><ArrowRight size={21}/></div><span>04</span><h3>Avançar</h3><p>Levar mais consciência para suas escolhas, limites e próximos passos.</p></article>
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero conhecer o processo terapêutico e agendar meu atendimento.")}>Começar meu processo <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section specialty">
        <div className="container specialty-grid">
          <div><span className="eyebrow">ABORDAGEM COMPLEMENTAR</span><h2>Leitura Corporal e <em>Comportamental</em></h2><p>O corpo também expressa formas de sentir, reagir e se relacionar. A leitura corporal e comportamental pode complementar o olhar terapêutico para ampliar a compreensão sobre padrões individuais.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero saber mais sobre a Leitura Corporal e Comportamental.")}>Quero saber mais <ArrowRight size={18}/></Button></div>
          <div className="specialty-quote"><Brain size={32}/><p>“Compreender seus padrões pode ser o começo de uma nova forma de se relacionar consigo mesmo.”</p></div>
        </div>
      </section>

      <section className="section benefits">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">POR QUE ESCOLHER A IDALÉCIA</span><h2>Um atendimento pensado para olhar para <em>você por inteiro.</em></h2><p>Experiência, acolhimento e acompanhamento individualizado para quem deseja compreender melhor o que está vivendo.</p></div>
          <div className="benefit-grid">
            {[["Escuta individualizada","Cada pessoa possui uma história, experiências e necessidades diferentes."],["Formação especializada","Terapia TRG, Leitura Corporal e Comportamental e certificação internacional."],["Atendimento flexível","Opções presencial e online para facilitar o acesso ao acompanhamento."],["Ambiente acolhedor","Um espaço de respeito, privacidade e cuidado durante todo o processo."]].map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero agendar um atendimento com você.")}>Agendar meu atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container reviews-container">
          <div className="section-heading center"><span className="eyebrow">AVALIAÇÕES</span><h2>Acolhimento que faz parte de <em>cada encontro.</em></h2><p>Ser ouvido com respeito pode ser o primeiro passo para um novo começo.</p></div>
          <div className="review-window"><div className="review-track">{[0,1].map(copy => <div className="conveyor-group" aria-hidden={copy === 1 ? true : undefined} key={copy}>{reviews.map(({name,text})=><article className="review-card" key={name}><div className="review-stars" aria-label="Cinco estrelas ilustrativas">{[0,1,2,3,4].map(star=><Star key={star} size={18}/>)}</div><p>{text}</p><div className="review-person"><div className="review-avatar"><UserRound size={24}/></div><div className="review-person-info"><h3>{name}</h3><span>Paciente da clínica</span></div></div></article>)}</div>)}</div></div>
          <div className="center action"><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero conversar sobre um atendimento.")}>Agendar atendimento <MessageCircle size={18}/></Button></div>
        </div>
      </section>

      <section className="section location">
        <div className="container location-grid">
          <figure className="location-map">
            {clinicMapUrl ? <iframe title="Google Maps — clínica em Rio Tinto, PB" src={clinicMapUrl} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/> : <div className="location-map-pending"><MapPin size={36}/><p>Mapa temporariamente indisponível.</p></div>}
            <figcaption>{clinicAddress.street}<br/>{clinicAddress.city}<br/>CEP: {clinicAddress.postalCode}</figcaption>
          </figure>
          <div className="location-copy"><span className="eyebrow">ATENDIMENTO</span><h2>Presencial ou online, <em>onde fizer sentido para você.</em></h2><p>Escolha a modalidade mais adequada para sua rotina. Para atendimento presencial, entre em contato para consultar disponibilidade e horários.</p><div className="location-list"><div><MapPin size={18}/><span><strong>Presencial</strong>{clinicAddress.street}<br/>{clinicAddress.city}<br/>CEP: {clinicAddress.postalCode}</span></div><div><Video size={18}/><span><strong>Online</strong>Atendimento à distância, com praticidade e privacidade.</span></div><div><Clock3 size={18}/><span><strong>Horários</strong>Consulte diretamente com a Idalécia os horários disponíveis.</span></div></div><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de consultar horários e modalidade de atendimento.")}>Consultar horários <ArrowRight size={18}/></Button></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Talvez a sua dúvida esteja <em>aqui.</em></h2><p>Se ainda não encontrou a resposta que procura, fale diretamente com a Idalécia.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Tenho uma dúvida sobre a terapia.")}>Tirar uma dúvida <MessageCircle size={18}/></Button></div>
          <div className="faq-list">{faq.map(([q,a],i)=><div className={`faq-item ${openFaq===i ? "open":""}`} key={q}><Button variant="sitePlain" size="site" aria-expanded={openFaq===i} onClick={() => setOpenFaq(openFaq===i ? null : i)}><span>{q}</span><ChevronDown size={18}/></Button>{openFaq===i && <p>{a}</p>}</div>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container center"><span className="eyebrow">SEU PROCESSO COMEÇA COM UMA CONVERSA</span><h2>Você não precisa ter todas as respostas para <em>dar o primeiro passo.</em></h2><p>Converse com a Idalécia, explique o que você está vivendo e descubra como funciona o atendimento.</p><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Quero dar o primeiro passo e conhecer a Terapia TRG.")}>Quero conversar com a Idalécia <ArrowRight size={19}/></Button></div>
      </section>

      <footer><div className="container footer-grid"><div><div className="brand footer-brand">Idalécia <span>da Guia</span></div><p>Terapeuta TRG<br/>Leitura Corporal e Comportamental</p></div><div><strong>Atendimento</strong><span>Online e presencial</span><span>Consulte horários</span></div><div><strong>Contato</strong><Button variant="siteGold" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de agendar um atendimento.")}><MessageCircle size={16}/> WhatsApp</Button><a href="#inicio"><Instagram size={16}/> Instagram</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Idalécia da Guia. Todos os direitos reservados.</div></footer>

      <Button variant="whatsapp" size="site" onClick={() => goWhatsapp("Olá, Idalécia! Gostaria de saber mais sobre a Terapia TRG.")} aria-label="Falar no WhatsApp"><img src={whatsappIcon.url} alt=""/></Button>
    </main>
  );
}
