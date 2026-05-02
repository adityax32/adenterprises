import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  Camera,
  CirclePlay,
  Flame,
  Forklift,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Pickaxe,
  Shovel,
  Truck,
} from "lucide-react";
import {
  company,
  navItems,
  partners,
  projects,
  services,
  stats,
  testimonials,
} from "@/components/site-data";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const serviceIcons = {
  pickaxe: Pickaxe,
  mountain: Mountain,
  spark: Flame,
  truck: Truck,
  train: Shovel,
  forklift: Forklift,
  delivery: Truck,
  building: Building2,
};

function CalloutBand({
  text,
}: {
  text: string;
}) {
  return (
    <div className="band-pattern card-shadow lift-soft rounded-[18px] px-6 py-6 text-white sm:px-10 md:py-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="krona text-[1.35rem] uppercase leading-tight sm:text-[1.8rem]">{text}</p>
        <a
          href={`tel:${company.phone.replace(/\s+/g, "")}`}
          className="krona flex items-center gap-3 text-[12px] uppercase text-white hover:text-[var(--color-orange)] sm:text-[14px]"
        >
          <Phone className="h-6 w-6 shrink-0 text-[var(--color-orange)]" />
          <span>
            Call us at <span className="text-[var(--color-orange)]">{company.phone}</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-40 text-white sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.38),rgba(0,0,0,0.56))]" />
      <SiteHeader />
      <div className="container-shell relative z-20">
        <Reveal className="mx-auto max-w-5xl pt-12 text-center lg:pt-16">
          <h1 className="krona text-balance text-[1.95rem] leading-[1.12] uppercase sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem]">
            High-Quality Mining & Logistics
          </h1>
          <p className="body-copy mx-auto mt-6 max-w-4xl text-pretty text-[14px] text-white/90 sm:text-[0.98rem]">
            Chhattisgarh&apos;s trusted partner for mining, overburden removal,
            coal logistics, and more - with 50+ successful contracts for
            clients like Jindal Power & Adani Enterprises.
          </p>
          <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="krona text-[2rem] leading-none text-[var(--color-orange)] sm:text-[2.5rem]">
                  {stat.value}
                </div>
                <p className="body-copy mt-3 text-[0.92rem] font-semibold text-white sm:text-[1rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-10 min-w-[200px]">
            Enquire Now
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-space bg-[var(--color-shell)] !pt-10 !pb-3 sm:!pt-12 sm:!pb-4"
    >
      <Reveal className="container-shell">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_0.85fr] xl:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Us"
              title="Your Trusted Partner in Efficient Mining & Logistics"
              titleClassName="sm:text-[1.8rem] md:text-[2.1rem]"
            />
            <p className="body-copy max-w-3xl text-[0.95rem] text-[var(--color-dark-gray)] sm:text-[1rem]">
              AD ENTERPRISES is a Chhattisgarh-based contractor and service
              provider specializing in mining operations, overburden removal,
              blasting, coal handling, and transportation. Backed by deep field
              expertise and advanced equipment, we execute high-risk industrial
              projects with a relentless focus on safety, punctuality, and
              compliance.
            </p>
          </div>
          <div className="space-y-7">
            <p className="krona max-w-xl text-[12px] uppercase leading-relaxed text-[var(--color-dark-gray)] sm:text-[13px]">
              We handle every stage of the mining value chain - from site
              preparation to logistics - tailored for industries like power,
              steel, and infrastructure. Clients like Jindal Power and Adani
              Enterprises trust us for reliable, on-time results.
            </p>
            <div className="relative overflow-hidden rounded-[24px]">
              <Image
                src="/assets/about-mining-haul-v2.png"
                alt="Mining operations at an active site"
                width={494}
                height={166}
                className="aspect-[494/166] w-full object-cover"
                sizes="(max-width: 1280px) 100vw, 38vw"
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Reveal delayMs={120}>
            <CalloutBand text="New to Mining Services?" />
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-space bg-[var(--color-shell)] !pt-5 !pb-10 sm:!pt-6 sm:!pb-12"
    >
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="What We Provide"
            title="We offering best services"
            align="center"
            titleClassName="sm:text-[1.75rem] md:text-[2rem]"
          />
        </Reveal>
        <div className="service-grid-shadow mt-8 overflow-hidden rounded-[22px] border border-black/10 bg-white">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 xl:[&>*:nth-child(-n+4)]:border-b xl:[&>*:not(:nth-child(4n))]:border-r">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.key as keyof typeof serviceIcons];
              return (
                <Reveal
                  key={service.title}
                  delayMs={index * 70}
                  className={`group lift-soft border-black/10 p-6 md:p-7 ${
                    index % 2 === 0 ? "md:border-r xl:border-r-0" : ""
                  } ${index < 6 ? "md:border-b xl:border-b-0" : ""}`}
                >
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[var(--color-orange)] text-white shadow-[0_12px_25px_rgba(255,116,37,0.25)] transition duration-200 group-hover:scale-105">
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>
                  <h3 className="krona mt-7 text-[0.9rem] uppercase leading-none text-black sm:text-[1rem] xl:text-[0.88rem] 2xl:text-[0.98rem]">
                    {service.title}
                  </h3>
                  <p className="body-copy mt-4 text-[0.9rem] text-[var(--color-dark-gray)] sm:text-[0.95rem]">
                    {service.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandStatementSection() {
  return (
    <section className="dark-pattern section-space !py-10 text-white sm:!py-12">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="krona text-balance text-[1.6rem] uppercase leading-[1.2] sm:text-[2.2rem] lg:text-[2.9rem]">
            We build mining & logistics solutions that move industries forward.
          </h2>
          <Button variant="outline" className="mt-10 min-w-[200px]">
            Enquire Now
          </Button>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <Reveal
              key={`${partner.name}-${index}`}
              delayMs={index * 55}
              className="lift-soft flex items-center justify-center rounded-2xl bg-white px-5 py-5 shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={114}
                height={65}
                className="h-[54px] w-auto object-contain"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-space bg-[var(--color-shell)] !pt-10 !pb-3 sm:!pt-12 sm:!pb-4"
    >
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Our Projects"
            title="Our Incredible Projects"
            titleClassName="sm:text-[1.8rem] md:text-[2.1rem]"
          />
        </Reveal>
        <div className="mt-8 grid gap-9 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal
              key={project.title}
              delayMs={projects.indexOf(project) * 80}
              className="lift-soft card-shadow overflow-hidden rounded-[24px] border border-[var(--color-orange)]/80 bg-white"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={302}
                  height={205}
                  className="h-[230px] w-full object-cover transition duration-300 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="krona text-[0.72rem] uppercase leading-snug text-black sm:text-[0.78rem]">
                  {project.title}
                </h3>
                <p className="body-copy text-[0.9rem] text-black sm:text-[0.95rem]">{project.location}</p>
                <p className="body-copy text-[11px] text-[var(--color-dark-gray)]">
                  {project.timeline}
                </p>
                <p className="body-copy text-[0.9rem] text-[var(--color-dark-gray)] sm:text-[0.95rem]">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="krona inline-flex pt-2 text-[13px] uppercase text-black underline underline-offset-4 hover:text-[var(--color-orange)]"
                >
                  View More
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Reveal delayMs={120}>
            <CalloutBand text="Your Journey Starts Here" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-space bg-[var(--color-shell)] !pt-5 !pb-10 sm:!pt-6 sm:!pb-12">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Customer Statement"
            title="Our client feedback"
            align="center"
            titleClassName="sm:text-[1.8rem] md:text-[2.1rem]"
          />
        </Reveal>
        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delayMs={index * 90}
              className="lift-soft overflow-hidden rounded-[22px] border border-[var(--color-orange)] bg-white"
            >
              <div className="grid sm:grid-cols-[152px_1fr]">
                <div className="relative min-h-[220px] sm:min-h-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 152px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="krona text-[0.72rem] uppercase text-black sm:text-[0.78rem]">
                    {testimonial.name}
                  </h3>
                  <p className="body-copy text-[0.9rem] text-[var(--color-dark-gray)] sm:text-[0.95rem]">
                    {testimonial.role}
                  </p>
                  <p className="body-copy mt-4 text-[0.9rem] text-[var(--color-dark-gray)] sm:text-[0.95rem]">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="dark-pattern pt-16 text-white">
      <Reveal className="container-shell">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.05fr_0.7fr_0.95fr_1.25fr]">
          <div className="space-y-7">
            <a href="#home" className="logo-text text-[1.45rem] font-black text-white lg:text-[1.6rem]">
              {company.name}
            </a>
            <div className="flex items-center gap-4">
              {[Camera, BadgeCheck, CirclePlay, MessageCircle].map(
                (Icon, index) => (
                <a
                  key={index}
                  href="#contact"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </a>
                ),
              )}
            </div>
          </div>
          <div className="space-y-5">
            <h3 className="krona border-b border-[var(--color-orange)] pb-1 text-[0.72rem] uppercase sm:text-[0.78rem]">
              Quick Links
            </h3>
            <ul className="space-y-3 body-copy text-[0.9rem] text-white/90 sm:text-[0.95rem]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[var(--color-orange)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="krona border-b border-[var(--color-orange)] pb-1 text-[0.72rem] uppercase sm:text-[0.78rem]">
              Services
            </h3>
            <ul className="space-y-3 body-copy text-[0.9rem] text-white/90 sm:text-[0.95rem]">
              {services.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <h3 className="krona border-b border-[var(--color-orange)] pb-1 text-[0.72rem] uppercase sm:text-[0.78rem]">
              Contact Us
            </h3>
            <div className="space-y-4 body-copy text-[0.9rem] text-white/90 sm:text-[0.95rem]">
              <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-[var(--color-orange)]">
                <Mail className="mt-1 h-5 w-5 shrink-0" />
                <span>{company.email}</span>
              </a>
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="flex gap-3 hover:text-[var(--color-orange)]">
                <Phone className="mt-1 h-5 w-5 shrink-0" />
                <span>{company.phone} / {company.phone}</span>
              </a>
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                <span>{company.fullAddress}</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-3 body-copy text-[0.9rem] text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2025 AD Enterprises</p>
          <p>GST No. {company.gst}</p>
        </div>
      </div>
    </footer>
  );
}
