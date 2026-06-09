import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle, Phone, MapPin, Clock, Instagram, Star, Cake, Cookie,
  Heart, Sparkles, ShieldCheck, Truck, BadgeCheck, IndianRupee, Search, ChevronLeft, ChevronRight, Menu, X
} from "lucide-react";

import heroCake from "@/assets/hero-cake.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeBlackforest from "@/assets/cake-blackforest.jpg";
import cakeButterscotch from "@/assets/cake-butterscotch.jpg";
import cakePineapple from "@/assets/cake-pineapple.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import pastries from "@/assets/pastries.jpg";
import brownies from "@/assets/brownies.jpg";
import cakeDesigner from "@/assets/cake-designer.jpg";
import cookies from "@/assets/cookies.jpg";

// === EDITABLE BUSINESS CONFIG ===
const BIZ = {
  name: "Cakes & Bakes",
  tagline: "Freshly Baked Happiness Every Day",
  phone: "9818290713",
  whatsapp: "9818290713",
  address: "KH 309, Chhatarpur, Near Dena Bank, Mehrauli, New Delhi",
  hours: "8 AM – 12 Midnight",
  instagram: "https://www.instagram.com/cakesnbakes365",
  zomato: "https://www.zomato.com/ncr/cakes-bakes-mehrauli-new-delhi",
  swiggy: "https://www.swiggy.com/", // EDITABLE — replace with full Swiggy link
  formspree: "https://formspree.io/f/mgobydre",
};
const waLink = (msg: string) =>
  `https://wa.me/91${BIZ.whatsapp}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Bakery in Mehrauli | Cakes & Bakes" },
      { name: "description", content: "Order delicious cakes, pastries, desserts, and custom cakes from Cakes & Bakes, Mehrauli, New Delhi. Fresh bakery products, designer cakes, and online ordering available." },
      { name: "keywords", content: "Best Bakery in Mehrauli, Cakes in Mehrauli, Birthday Cakes in Mehrauli, Custom Cakes in Delhi, Fresh Cakes Near Me, Bakery in Chhatarpur, Cake Shop in Mehrauli" },
      { property: "og:title", content: "Best Bakery in Mehrauli | Cakes & Bakes" },
      { property: "og:description", content: "Freshly baked cakes, pastries & custom designer cakes in Mehrauli, New Delhi." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Bakery",
        name: BIZ.name,
        image: "/og-image.jpg",
        telephone: `+91${BIZ.phone}`,
        address: { "@type": "PostalAddress", streetAddress: BIZ.address, addressLocality: "Mehrauli", addressRegion: "Delhi", addressCountry: "IN" },
        openingHours: "Mo-Su 08:00-24:00",
        url: "/",
        servesCuisine: ["Bakery", "Desserts", "Cakes"],
      }),
    }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <OfferBanner />
      <Header />
      <Hero />
      <About />
      <Specialties />
      <FeaturedProducts />
      <WhyUs />
      <Gallery />
      <InstagramSection />
      <OrderOnline />
      <Reviews />
      <LocationSection />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ---------- TOP BARS ---------- */
function OfferBanner() {
  return (
    <div className="bg-[var(--cocoa)] text-cream text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-2 text-center">
        <Sparkles className="h-3.5 w-3.5 text-[var(--gold)] animate-shimmer" />
        <span>Festive Special: 15% off on Custom Designer Cakes — Order Today!</span>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [
    ["About", "#about"], ["Specialties", "#specialties"], ["Menu", "#products"],
    ["Gallery", "#gallery"], ["Reviews", "#reviews"], ["Contact", "#contact"],
  ];
  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? "glass" : "bg-background/60 backdrop-blur-md"}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 min-w-0 flex-1">
          <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full bg-[var(--gradient-warm,linear-gradient(135deg,#d4a24c,#c46b6b))] grid place-items-center shadow-[var(--shadow-gold)]">
            <Cake className="h-5 w-5 text-[var(--cocoa)]" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-display text-base sm:text-lg font-bold truncate">{BIZ.name}</div>
            <div className="text-[10px] text-muted-foreground -mt-0.5 truncate">Mehrauli, New Delhi</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="relative text-foreground/80 hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--gold)] hover:after:w-full after:transition-all">{l}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href={waLink("Hi! I'd like to place an order.")} className="btn-hero btn-hero-hover">
            <MessageCircle className="h-4 w-4" /> Order Now
          </a>
        </div>
        <button className="md:hidden p-2 min-h-11 min-w-11 grid place-items-center shrink-0" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-sm font-medium border-b border-border/50 last:border-0">{l}</a>
            ))}
            <a href={waLink("Hi! I'd like to place an order.")} onClick={() => setOpen(false)} className="btn-hero btn-hero-hover mt-3 self-start">
              <MessageCircle className="h-4 w-4" /> Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


/* ---------- HERO ---------- */
function Hero() {
  const images = [heroCake, cakeBlackforest, cakeDesigner, cakeWedding];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] overflow-hidden w-full">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Premium cake from Cakes & Bakes bakery"
          width={1600}
          height={1200}
          loading={idx === 0 ? "eager" : "lazy"}
          fetchPriority={idx === 0 ? "high" : "auto"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-24 sm:pt-32 sm:pb-40 min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-center">
        <div className="max-w-2xl animate-float-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-[11px] sm:text-xs text-cream mb-5 sm:mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            <span className="text-white/90">Mehrauli's Most Loved Bakery</span>
          </div>
          <h1 className="font-display text-[2.25rem] xs:text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
            Freshly Baked <br />
            <span className="text-gradient-gold">Happiness</span> Every Day
          </h1>
          <p className="mt-5 sm:mt-6 text-sm sm:text-lg text-white/85 max-w-xl">
            Custom Cakes, Fresh Pastries, Delicious Desserts & Bakery Specials — handcrafted with love in the heart of Mehrauli.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3">
            <a href={BIZ.zomato} target="_blank" rel="noopener" className="btn-hero btn-hero-hover justify-center min-h-11">
              <Cake className="h-4 w-4" /> Order on Zomato
            </a>
            <a href={BIZ.swiggy} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-full font-semibold text-sm bg-white text-[var(--cocoa)] hover:scale-[1.02] transition-transform shadow-lg">
              <Cookie className="h-4 w-4" /> Order on Swiggy
            </a>
            <a href={waLink("Hi! I'd like to order from Cakes & Bakes.")} className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-11 rounded-full font-semibold text-sm border border-white/40 text-white hover:bg-white/10 transition-colors backdrop-blur">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-x-5 gap-y-2 text-white/85 text-xs sm:text-sm">
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-[var(--gold)] fill-[var(--gold)]" /> 4.8 Rated</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Open till Midnight</div>
            <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> Same-Day Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={pastries} alt="Fresh bakery products" width={1024} height={1024} loading="lazy" className="rounded-3xl shadow-[var(--shadow-soft)] w-full aspect-square object-cover" />
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 hidden sm:block">
            <div className="text-3xl font-display font-bold text-gradient-gold">10+</div>
            <div className="text-xs text-muted-foreground">Years of Sweet Memories</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">About Us</div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to <span className="text-gradient-gold">Cakes & Bakes</span></h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A trusted neighborhood bakery serving delicious cakes, pastries, desserts, and bakery delights. We specialize in custom cakes for birthdays, anniversaries, weddings, and special occasions.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Every creation is made with premium ingredients, decades of craft, and an obsessive love for taste — because your special moments deserve nothing less.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[["5K+", "Happy Customers"], ["500+", "Custom Designs"], ["100%", "Fresh Daily"]].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient-gold">{n}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SPECIALTIES ---------- */
function Specialties() {
  const items = [
    { t: "Birthday Cakes", i: Cake }, { t: "Anniversary Cakes", i: Heart },
    { t: "Wedding Cakes", i: Sparkles }, { t: "Designer Cakes", i: Sparkles },
    { t: "Photo Cakes", i: Cake }, { t: "Pastries", i: Cookie },
    { t: "Cupcakes", i: Cookie }, { t: "Cookies", i: Cookie },
    { t: "Brownies", i: Cookie }, { t: "Fresh Bakery", i: BadgeCheck },
  ];
  return (
    <section id="specialties" className="py-20 sm:py-28 bg-[var(--cream)] dark:bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="What We Bake" title="Our Specialties" />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map(({ t, i: Icon }) => (
            <div key={t} className="group glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="mx-auto h-14 w-14 rounded-full grid place-items-center mb-3 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-warm)" }}>
                <Icon className="h-6 w-6 text-[var(--cocoa)]" />
              </div>
              <div className="text-sm font-semibold">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED PRODUCTS ---------- */
function FeaturedProducts() {
  const products = [
    { img: heroCake, name: "Chocolate Truffle Cake", desc: "Rich Belgian chocolate layered with silky ganache.", popular: true },
    { img: cakeButterscotch, name: "Butterscotch Cake", desc: "Caramel crunch & cream — a timeless classic.", popular: false },
    { img: cakeBlackforest, name: "Black Forest Cake", desc: "Cherries, dark chocolate, fresh cream.", popular: true },
    { img: cakePineapple, name: "Pineapple Cake", desc: "Fresh pineapple, light fluffy cream.", popular: false },
    { img: cakeRedvelvet, name: "Red Velvet Cake", desc: "Velvety cocoa with cream-cheese frosting.", popular: true },
    { img: cakeDesigner, name: "Custom Theme Cakes", desc: "Personalized designs for every celebration.", popular: true },
    { img: pastries, name: "Fresh Pastries", desc: "Buttery, flaky, baked through the day.", popular: false },
    { img: cupcakes, name: "Cupcakes", desc: "Bite-sized joy with buttercream swirls.", popular: false },
  ];
  const [q, setQ] = useState("");
  const filtered = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Bestsellers" title="Featured Products" />
        <div className="mt-8 mx-auto max-w-md relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search cakes, pastries..." className="w-full glass rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[var(--gold)]" />
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p) => (
            <article key={p.name} className="group glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {p.popular && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--cocoa)] text-cream px-3 py-1 rounded-full">
                    <Sparkles className="h-3 w-3 text-[var(--gold)]" /> Popular
                  </span>
                )}
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-base sm:text-lg font-bold leading-snug">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">{p.desc}</p>
                <a href={waLink(`Hi! I'm interested in: ${p.name}`)} className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:gap-2.5 transition-all min-h-11">
                  Enquire <MessageCircle className="h-3.5 w-3.5" />
                </a>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { i: Cake, t: "Freshly Prepared", d: "Baked daily, never stored." },
    { i: BadgeCheck, t: "Quality Ingredients", d: "Premium, food-grade only." },
    { i: Sparkles, t: "Custom Designs", d: "Your idea, our craft." },
    { i: IndianRupee, t: "Affordable Pricing", d: "Premium, never overpriced." },
    { i: Truck, t: "Timely Delivery", d: "On-time, every time." },
    { i: ShieldCheck, t: "Hygienic Prep", d: "FSSAI-grade kitchen standards." },
    { i: Heart, t: "Customer Love", d: "1000s of 5-star moments." },
  ];
  return (
    <section className="py-20 sm:py-28 bg-[var(--cocoa)] text-cream">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="The Difference" title="Why Choose Us" light />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl grid place-items-center mb-4" style={{ background: "var(--gradient-warm)" }}>
                <Icon className="h-5 w-5 text-[var(--cocoa)]" />
              </div>
              <div className="font-display font-bold text-lg">{t}</div>
              <div className="text-sm text-white/70 mt-1">{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const [tab, setTab] = useState("All");
  const items = [
    { src: heroCake, cat: "Cakes" }, { src: cakeBirthday, cat: "Birthday Cakes" },
    { src: cakeDesigner, cat: "Designer Cakes" }, { src: cakeWedding, cat: "Custom Orders" },
    { src: pastries, cat: "Pastries" }, { src: cupcakes, cat: "Pastries" },
    { src: cakeBlackforest, cat: "Cakes" }, { src: cakeRedvelvet, cat: "Cakes" },
    { src: brownies, cat: "Pastries" }, { src: cookies, cat: "Pastries" },
    { src: cakeButterscotch, cat: "Cakes" }, { src: cakePineapple, cat: "Cakes" },
  ];
  const tabs = ["All", "Cakes", "Pastries", "Custom Orders", "Birthday Cakes", "Designer Cakes"];
  const filtered = tab === "All" ? items : items.filter((i) => i.cat === tab);
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Our Creations" title="Gallery" />
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {tabs.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${tab === t ? "bg-[var(--cocoa)] text-cream" : "glass hover:bg-secondary"}`}>{t}</button>
          ))}
        </div>
        <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {filtered.map((it, idx) => (
            <div key={idx} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl group relative">
              <img src={it.src} alt={it.cat} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-end p-4">
                <span className="text-white text-xs font-semibold">{it.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INSTAGRAM ---------- */
function InstagramSection() {
  const imgs = [cakeDesigner, cupcakes, cakeBirthday, cakeWedding, brownies, cookies];
  return (
    <section className="py-20 sm:py-28 bg-[var(--cream)] dark:bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <SectionHeader eyebrow="@cakesnbakes365" title="Follow Our Sweet Journey" />
        <div className="mt-10 grid grid-cols-3 lg:grid-cols-6 gap-2">
          {imgs.map((src, i) => (
            <a key={i} href={BIZ.instagram} target="_blank" rel="noopener" className="relative aspect-square overflow-hidden rounded-xl group">
              <img src={src} alt="Instagram post" loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors grid place-items-center">
                <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
        <a href={BIZ.instagram} target="_blank" rel="noopener" className="btn-hero btn-hero-hover mt-10">
          <Instagram className="h-4 w-4" /> Follow Us on Instagram
        </a>
      </div>
    </section>
  );
}

/* ---------- ORDER ONLINE ---------- */
function OrderOnline() {
  const cards = [
    { name: "Zomato", color: "from-rose-500 to-red-500", url: BIZ.zomato, label: "Order on Zomato", desc: "Live ratings, instant delivery" },
    { name: "Swiggy", color: "from-orange-500 to-amber-500", url: BIZ.swiggy, label: "Order on Swiggy", desc: "Fast doorstep delivery" },
    { name: "WhatsApp", color: "from-green-500 to-emerald-500", url: waLink("Hi! I'd like to place an order."), label: "Order on WhatsApp", desc: "Chat with us directly" },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader eyebrow="Easy Ordering" title="Order Online Now" />
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {cards.map((c) => (
            <a key={c.name} href={c.url} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-3xl p-8 text-white shadow-[var(--shadow-soft)] hover:-translate-y-2 transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color}`} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest opacity-80">Quick Order</div>
                <div className="font-display text-3xl font-bold mt-2">{c.name}</div>
                <div className="text-sm opacity-90 mt-2">{c.desc}</div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                  {c.label} <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
function Reviews() {
  const reviews = [
    { name: "Priya Sharma", text: "The chocolate truffle cake was absolutely divine! Best bakery in Mehrauli, hands down.", stars: 5 },
    { name: "Rahul Mehta", text: "Got a custom photo cake for my daughter's birthday — everyone loved it. So fresh and beautiful!", stars: 5 },
    { name: "Anjali Verma", text: "Pastries are fresh every single time. The team is super friendly and accommodating.", stars: 5 },
    { name: "Vikram Singh", text: "Their black forest is unmatched. Affordable pricing and on-time delivery. Highly recommended!", stars: 5 },
    { name: "Sneha Kapoor", text: "Ordered a designer wedding cake — flawless execution. Will order again for every occasion.", stars: 5 },
  ];
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  useEffect(() => { const t = setInterval(next, 5500); return () => clearInterval(t); });
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[var(--cream)] dark:bg-secondary/30">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionHeader eyebrow="Loved By Many" title="What Our Customers Say" />
        <div className="mt-14 glass rounded-3xl p-8 sm:p-12 relative">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: reviews[i].stars }).map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
          <p className="font-display text-xl sm:text-2xl italic leading-relaxed">"{reviews[i].text}"</p>
          <div className="mt-6 font-semibold">— {reviews[i].name}</div>
          <div className="flex justify-between items-center mt-8">
            <button onClick={prev} aria-label="Previous" className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-secondary"><ChevronLeft className="h-4 w-4" /></button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${i === k ? "w-8 bg-[var(--gold)]" : "w-2 bg-border"}`} />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-secondary"><ChevronRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */
function LocationSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="rounded-3xl overflow-hidden glass min-h-[400px]">
          <iframe
            title="Cakes & Bakes location"
            src="https://www.google.com/maps?q=Chhatarpur+Mehrauli+New+Delhi&output=embed"
            className="w-full h-full min-h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div>
          <SectionHeader eyebrow="Visit Us" title="Find Our Bakery" align="left" />
          <div className="mt-8 space-y-5">
            {[
              { i: MapPin, t: "Address", v: BIZ.address },
              { i: Phone, t: "Phone", v: BIZ.phone, href: `tel:${BIZ.phone}` },
              { i: MessageCircle, t: "WhatsApp", v: BIZ.whatsapp, href: waLink("Hi!") },
              { i: Clock, t: "Business Hours", v: BIZ.hours },
            ].map(({ i: Icon, t, v, href }) => (
              <div key={t} className="glass rounded-2xl p-5 flex gap-4 items-start hover:-translate-y-1 transition-transform">
                <div className="h-11 w-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-warm)" }}>
                  <Icon className="h-5 w-5 text-[var(--cocoa)]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{t}</div>
                  {href ? <a href={href} className="font-semibold mt-1 block hover:text-[var(--primary)]">{v}</a> : <div className="font-semibold mt-1">{v}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT FORM ---------- */
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch(BIZ.formspree, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      if (res.ok) { setStatus("ok"); e.currentTarget.reset(); }
      else setStatus("err");
    } catch { setStatus("err"); }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--cocoa)] text-cream">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">Custom Order</div>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">Order Your Custom Cake</h2>
          <p className="mt-4 text-white/70">Tell us about your occasion — we'll craft something unforgettable.</p>
        </div>
        {status === "ok" ? (
          <div className="mt-12 rounded-3xl p-10 bg-white/5 border border-white/10 text-center">
            <div className="h-16 w-16 rounded-full mx-auto grid place-items-center" style={{ background: "var(--gradient-warm)" }}>
              <BadgeCheck className="h-8 w-8 text-[var(--cocoa)]" />
            </div>
            <h3 className="font-display text-2xl font-bold mt-5">Thank you!</h3>
            <p className="mt-2 text-white/70">We've received your request and will reach out shortly.</p>
            <a href={waLink("Hi! I just submitted a custom cake request.")} className="btn-hero btn-hero-hover mt-6">
              <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 rounded-3xl p-6 sm:p-10 bg-white/5 border border-white/10 backdrop-blur space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Occasion" name="occasion" placeholder="Birthday, Anniversary..." />
              <Field label="Cake Requirement" name="cake" placeholder="Flavor, weight, design..." />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-white/60 font-semibold">Message</label>
              <textarea name="message" rows={4} className="mt-1.5 w-full rounded-xl px-4 py-3 bg-white/10 border border-white/15 outline-none focus:border-[var(--gold)] text-cream placeholder:text-white/40" placeholder="Tell us anything else..." />
            </div>
            {status === "err" && <p className="text-sm text-red-300">Something went wrong. Please try WhatsApp.</p>}
            <button type="submit" disabled={status === "sending"} className="btn-hero btn-hero-hover w-full disabled:opacity-60">
              {status === "sending" ? "Sending..." : <>Send Enquiry <Heart className="h-4 w-4" /></>}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/60 font-semibold">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} maxLength={200} className="mt-1.5 w-full rounded-xl px-4 py-3 bg-white/10 border border-white/15 outline-none focus:border-[var(--gold)] text-cream placeholder:text-white/40" />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full grid place-items-center" style={{ background: "var(--gradient-warm)" }}>
              <Cake className="h-5 w-5 text-[var(--cocoa)]" />
            </div>
            <span className="font-display text-xl font-bold">{BIZ.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{BIZ.tagline}. Mehrauli's most loved neighborhood bakery.</p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#products" className="hover:text-foreground">Menu</a></li>
            <li><a href="#gallery" className="hover:text-foreground">Gallery</a></li>
            <li><a href="#contact" className="hover:text-foreground">Custom Orders</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Order On</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={BIZ.zomato} target="_blank" rel="noopener" className="hover:text-foreground">Zomato</a></li>
            <li><a href={BIZ.swiggy} target="_blank" rel="noopener" className="hover:text-foreground">Swiggy</a></li>
            <li><a href={waLink("Hi!")} className="hover:text-foreground">WhatsApp</a></li>
            <li><a href={BIZ.instagram} target="_blank" rel="noopener" className="hover:text-foreground">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /><span>{BIZ.address}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /><a href={`tel:${BIZ.phone}`}>{BIZ.phone}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5" /><span>{BIZ.hours}</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {BIZ.name}. All rights reserved. Made with ♥ in Mehrauli.
      </div>
    </footer>
  );
}

/* ---------- FLOATING BUTTONS ---------- */
function FloatingButtons() {
  return (
    <>
      <a href={waLink("Hi! I'd like to order.")} aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-green-500 grid place-items-center shadow-[var(--shadow-soft)] hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="absolute inset-0 rounded-full animate-ping bg-green-500/40" />
      </a>
      <a href={`tel:${BIZ.phone}`} aria-label="Call" className="fixed bottom-5 left-5 z-50 h-14 w-14 rounded-full grid place-items-center shadow-[var(--shadow-soft)] hover:scale-110 transition-transform" style={{ background: "var(--gradient-warm)" }}>
        <Phone className="h-6 w-6 text-[var(--cocoa)]" />
      </a>
    </>
  );
}

/* ---------- SHARED ---------- */
function SectionHeader({ eyebrow, title, light, align = "center" }: { eyebrow: string; title: string; light?: boolean; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div className={`text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold ${light ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}>{eyebrow}</div>
      <h2 className={`mt-3 text-3xl sm:text-4xl md:text-5xl font-bold ${light ? "text-cream" : ""}`}>{title}</h2>
    </div>
  );
}

