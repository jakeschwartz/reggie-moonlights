export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 md:px-8 py-12 md:py-16 border-b border-cream/20"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <h2
            className="diy-h diy-h--underline inline-block"
            style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)" }}
          >
            ★ About This Site ★
          </h2>
          <p className="mt-2 font-courier text-cream/45 text-[0.78rem]">
            [section 01 of 04 · last updated 8/13/2024]
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 font-typewriter text-cream/85 leading-[1.75] text-[1rem]">
            <p>
              I first heard <em>Forgotten</em> in the spring of 2002. A college
              friend in Ann Arbor put it on a CD-R he handed me without writing
              the artist on the sleeve. I played it forty times in a row that
              night. It took me another nine months to find out who they were.
            </p>
            <p className="mt-4">
              What I had at the time was a name (Reggie St. Clair, possibly
              Detroit), a label (Silver Arc), and the suspicion that the record
              I was hearing was not supposed to exist. There were no Wikipedia
              articles. There were two threads on the Detroit 45s Forum, both
              wrong about the year. I wrote a letter to Wendell Garrison's son
              and got back a postcard that said, in its entirety:{" "}
              <em className="text-moonlight">"Yes, that was them. Reggie was my godfather. The other one was difficult."</em>
            </p>
            <p className="mt-4">
              That postcard is the reason this site exists. Everything below is
              what I've been able to put together in the twenty-two years since
              — corrections{" "}
              <a href="mailto:silverarcfans@protonmail.com" className="fan-link">very welcome</a>.
            </p>

            <hr className="web-hr my-6" />

            <p className="font-courier text-[0.82rem] text-cream/55">
              <strong className="text-cream/70">disclaimer.</strong> this page
              started as a Geocities tribute in 2003. it has been rebuilt three
              times — once on Angelfire, once on Wordpress, once (this one) by
              hand. none of it is official. no one is paying me. I am not a
              journalist. corrections, additions, scans, &amp; rumors all welcome.
            </p>
          </div>

          <aside className="md:col-span-4 banner-box font-courier text-[0.88rem] text-cream/75 leading-[1.55]">
            <div className="font-typewriter text-burnt text-[0.85rem] mb-3">
              ★ HELP WANTED ★
            </div>
            <ul className="space-y-2 list-disc list-inside marker:text-gold/70">
              <li>original promo of <em>Forgotten</em> (white label)</li>
              <li>any photo of the band after 1968</li>
              <li>Sterling Tate's <em>obituary</em> (LA Times, July 1979?)</li>
              <li>copy of WJLB airshift logs, 1966–1969</li>
              <li>anything from the canceled "Satellite Cycle" sessions</li>
            </ul>
            <div className="mt-4 text-cream/45 text-[0.8rem]">
              email me if you can help. I will trade.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
