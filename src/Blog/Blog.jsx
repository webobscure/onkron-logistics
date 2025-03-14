import { Link } from "react-router";
import "./Blog.css";

export default function Blog() {
  const news = [
    {
      id: 1,
      imageUrl: "https://onkron.de/cdn/shop/articles/G80_G130_G160_1_2048x.png",
      title: "Wie schafft man eine komfortable Arbeitsumgebung?",
      excerpt: "Telefonkonferenzen, Computerarbeit, Videospiele – wir merken oft nicht, wie viel Zeit wir am Schreibtisch verbringen. Doch der Körper bemerkt alles...",
      link: "/blogs/news/wie-schafft-man-eine-komfortable-arbeitsumgebung",
      date: "2025-03-03T10:16:48Z"
    },
    {
      id: 2,
      imageUrl: "https://onkron.de/cdn/shop/articles/TS1881E_TS1991E_1_b20386eb-a568-4a9d-a266-ca05cdc3750d_2048x.png?v=1739803157",
      title: "TS1881E, TS1991E - Motorisierte Mobile Ständer",
      excerpt: "Die verbesserten Versionen von zwei der beliebtesten Ständer für TV- und interaktive Panels mit einer Höhenverstellfunktion auf Knopfdruck. Sie kön...",
      link: "/blogs/news/ts1881e-ts1991e-motorisierte-mobile-stander",
      date: "2025-02-17T14:39:13Z"
    },
    {
      id: 3,
      imageUrl: "https://onkron.de/cdn/shop/articles/TS1881_B_W_accessories_news_DE_2048x.png?v=1738838691",
      title: "Zubehör für den TS1881 TV Ständer",
      excerpt: "Der universelle mobile Ständer TS1881 eignet sich für Präsentationen und Videokonferenzen im Büro, Universitäts- oder Schulunterricht und mehr. Mit...",
      link: "/blogs/news/zubehor-fur-den-ts1881-tv-stander",
      date: "2025-02-06T09:33:06Z"
    },
    {
      id: 4,
      imageUrl: "https://onkron.de/cdn/shop/articles/WDT221E_DE_2839d0e1-5df4-4bfe-b9e7-e816875209c9_2048x.png?v=1737620680",
      title: "Neuheit - Motorisierter Tisch mit höhenverstellbarer Funktion",
      excerpt: "ONKRON erweitert das Sortiment und präsentiert den neuen motorisierten Tisch - WDT221E. Er trägt eine Last von bis zu 60 kg. Der Tisch hebt sich mi...",
      link: "/blogs/news/neuheit-motorisierter-tisch-mit-hohenverstellbarer-funktion",
      date: "2025-01-23T08:12:24Z"
    },
    {
      id: 5,
      imageUrl: "https://onkron.de/cdn/shop/articles/TM5-BW_1_2048x.png?v=1734696181",
      title: "Neue Schwarz-Weiß-Wandhalterung TM5-BW",
      excerpt: "ONKRON erweitert seine Produktpalette um Schwarz-Weiß-Halterungen und präsentiert den neuen TM5-BW! Ein echter Meister der Tarnung, der sich mit s...",
      link: "/blogs/news/neue-schwarz-weiss-wandhalterung-tm5-bw",
      date: "2024-12-19T05:46:02Z"
    },
    {
      id: 6,
      imageUrl: "https://onkron.de/cdn/shop/articles/WDF221E_DE_735e3401-7ed7-4d9d-a7fc-d15719a7137d_2048x.png?v=1734596862",
      title: "Universelles motorisiertes Tischgestell - WDF221E",
      excerpt: "ONKRON WDF221E ist ein motorisiertes Tischgestell für Tischplatten mit einer Länge von 120 bis 170 cm und einer Mindestbreite von 60 cm. Mit der pr...",
      link: "/blogs/news/universelles-motorisiertes-tischgestell-wdf221e",
      date: "2024-12-17T06:24:40Z"
    },
    {
      id: 7,
      imageUrl: "https://onkron.de/cdn/shop/articles/M10_DE_desk_330610db-552c-4e0b-aec6-fa0fda7312fa_2048x.webp?v=1734702942",
      title: "Kompakte Halterung für große Fernseher",
      excerpt: "Der ONKRON M10 ist eine kompakte und leistungsstarke Halterung für Büros, Geschäfte und andere Geschäftsbereiche, in denen große Bildschirme mit e...",
      link: "/blogs/news/kompakte-halterung-fur-grosse-fernseher",
      date: "2024-12-16T09:21:49Z"
    },
    {
      id: 8,
      imageUrl: "https://onkron.de/cdn/shop/articles/D421E_news_2048x.png?v=1734103115",
      title: "Lösung für 4 Monitore - ONKRON D421E",
      excerpt: "Der ONKRON D421E ist eine hochwertige Tischhalterung, die speziell für vier Monitore von 13 bis 32 Zoll und ein Gewicht von bis zu 8 kg je Bildschi...",
      link: "/blogs/news/losung-fur-4-monitore-onkron-d421e",
      date: "2024-12-13T15:18:32Z"
    },
    {
      id: 9,
      imageUrl: "https://onkron.de/cdn/shop/articles/News_BF_DE_2_1_2048x.jpg?v=1732878697",
      title: "Preisnachlässe bis zu 30 % anlässlich von Black Friday und Cyber Monday!",
      excerpt: "Wir kombinieren und verlängern die Vorteile! Vom 29. November bis zum 3. Dezember bieten wir 30 % Rabatt auf unsere beliebtesten Modelle. Tischges...",
      link: "/blogs/news/preisnachlasse-bis-zu-30-anlasslich-von-black-friday-und-cyber-monday",
      date: "2024-11-29T13:00:00Z"
    },
    {
      id: 10,
      imageUrl: "https://onkron.de/cdn/shop/articles/05_625_250px_720x_b849d89d-052e-49c0-8de6-41c9859b49eb_2048x.webp?v=1734006117",
      title: "Bis zu 30% Rabatt",
      excerpt: "Am 11. November ist der weltweite Shopping-Tag — die ideale Gelegenheit, Ihre Lieblingsprodukte zu reduzierten Preisen zu erwerben. Wir haben ein ...",
      link: "/blogs/news/jusqu-a-30-de-reduction",
      date: "2024-11-11T13:00:00Z"
    },
    {
      id: 11,
      imageUrl: "https://onkron.de/cdn/shop/articles/HalloweenDay_2024_2_1080x_f98cc421-aac0-4231-9e06-5102b42244b6_2048x.webp?v=1734005827",
      title: "Happy Halloween von ONKRON!",
      excerpt: "Halloween ist der perfekte Anlass, um TV- und Monitorständer zu erwerben und einen großartigen „gruseligen“ Abend mit Filmen und Serien zu verbrin...",
      link: "/blogs/news/happy-halloween-von-onkron",
      date: "2024-10-31T13:00:00Z"
    },
    {
      id: 12,
      imageUrl: "https://onkron.de/cdn/shop/articles/SM6L_SM2_DE_f43c1944-e097-4423-8550-c88268a84f11_2048x.png?v=1726477642",
      title: "SM6L, SM2 – Neue Serie von superdünnen Halterungen",
      excerpt: "ONKRON präsentiert eine neue Serie von Wandhalterungen – SM2 und SM6L. Sie sind nützlich zu Hause, im Büro oder in öffentlichen Räumen. Die superdü...",
      link: "/blogs/news/sm6l-sm2-neue-serie-von-superdunnen-halterungen",
      date: "2024-09-16T09:07:19Z"
    }
  ];
  return (
    <div>
      <div className="news-container ">
        <div className="grid-no-gutter full-height container large-row container--no-mobile-padding single-column-layout">
          <div className="news-container container--no-mobile-padding">
            <div className="page-width row center">
              <h1 className="large-title">
                <Link href="/blogs/onkron-news" title="">
                Nachrichten
                </Link>
              </h1>
              <ul className="blog-tags"></ul>
            </div>
          </div>
          <div className="grid__item-no-gutter one-half small-down--one-whole">
            <div className="blog-articles-list relative">
            {news.map((item) => (
        <article key={item.id} className="article">
          <Link href={item.link} className="blog-articles-list__image">
            <div className="rimage-outer-wrapper">
              <div className="rimage-wrapper">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rimage__image"
                />
              </div>
            </div>
          </Link>

          <section className="article-block">
            <div className="article-content">
              <h2 className="article__title standard-title">
                <Link href={item.link}>
                  {item.title}
                </Link>
              </h2>

              <div className="rte article__content">
                <p>{item.excerpt}</p>
              </div>

              <div className="article__read-more">
                <Link className="standard-link" href={item.link}>
                  Weiterlesen
                </Link>
              </div>

              <div className="flex article__meta">
                <div>
                  <div className="article__authordate">
                    <div className="article__authordate__inner">
                      <div className="article__date">
                        <time dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString('de-DE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="js-content-products-slider"></div>
          </section>
        </article>
      ))}
              <div className="pagination large-row pag-test">
                <span className="page current">1</span>{" "}
                <span className="page">
                  <Link href="https://onkron.de/blogs/news?page=2" title="">
                    2
                  </Link>
                </span>{" "}
                <span className="next">
                  <Link href="https://onkron.de/blogs/news?page=2" title="">
                    Nächste »
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
