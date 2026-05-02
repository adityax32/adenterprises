import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/components/site-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <>
      <section className="dark-pattern relative overflow-hidden pt-40 text-white sm:pt-44 lg:pt-52">
        <SiteHeader />
        <div className="container-shell relative z-20 pb-14 sm:pb-16">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="krona text-[12px] uppercase text-white/75 sm:text-[13px]">
              Get In Touch
            </p>
            <h1 className="krona mt-4 text-[1.95rem] uppercase leading-[1.12] sm:text-[2.6rem] md:text-[3.2rem]">
              Contact AD Enterprises
            </h1>
            <p className="body-copy mx-auto mt-5 max-w-3xl text-[14px] text-white/85 sm:text-[0.98rem]">
              Share your project requirement and our team will get back to you
              with the right mining, logistics, or transportation support.
            </p>
          </Reveal>
        </div>
      </section>

      <main className="bg-[var(--color-shell)]">
        <section className="section-space !py-10 sm:!py-12">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="space-y-6">
              <SectionHeading
                eyebrow="Contact Info"
                title="Let&apos;s start your next industrial project"
                titleClassName="sm:text-[1.75rem] md:text-[2rem]"
              />
              <p className="body-copy max-w-xl text-[0.95rem] text-[var(--color-dark-gray)] sm:text-[1rem]">
                Reach out for mining operations, overburden removal, coal
                handling, flyash transportation, rack loading, and logistics
                support across Chhattisgarh.
              </p>
              <div className="space-y-4 rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-orange)]" />
                  <div>
                    <p className="krona text-[0.78rem] uppercase text-black">
                      Address
                    </p>
                    <p className="body-copy mt-2 text-[0.95rem] text-[var(--color-dark-gray)]">
                      {company.fullAddress}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[var(--color-orange)]" />
                  <div>
                    <p className="krona text-[0.78rem] uppercase text-black">
                      Phone
                    </p>
                    <a
                      href={`tel:${company.phone.replace(/\s+/g, "")}`}
                      className="body-copy mt-2 block text-[0.95rem] text-[var(--color-dark-gray)] hover:text-[var(--color-orange)]"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-[var(--color-orange)]" />
                  <div>
                    <p className="krona text-[0.78rem] uppercase text-black">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.email}`}
                      className="body-copy mt-2 block text-[0.95rem] text-[var(--color-dark-gray)] hover:text-[var(--color-orange)]"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              delayMs={100}
              className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="krona text-[0.72rem] uppercase text-black">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      className="mt-2 w-full rounded-[14px] border border-black/10 bg-white px-4 py-3 text-[0.95rem] text-black outline-none transition focus:border-[var(--color-orange)]"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="krona text-[0.72rem] uppercase text-black">
                      Phone
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className="mt-2 w-full rounded-[14px] border border-black/10 bg-white px-4 py-3 text-[0.95rem] text-black outline-none transition focus:border-[var(--color-orange)]"
                      placeholder="Your phone number"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="krona text-[0.72rem] uppercase text-black">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-[14px] border border-black/10 bg-white px-4 py-3 text-[0.95rem] text-black outline-none transition focus:border-[var(--color-orange)]"
                    placeholder="Your email address"
                  />
                </label>
                <label className="block">
                  <span className="krona text-[0.72rem] uppercase text-black">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    className="mt-2 w-full rounded-[14px] border border-black/10 bg-white px-4 py-3 text-[0.95rem] text-black outline-none transition focus:border-[var(--color-orange)]"
                    placeholder="Project or enquiry subject"
                  />
                </label>
                <label className="block">
                  <span className="krona text-[0.72rem] uppercase text-black">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={6}
                    className="mt-2 w-full rounded-[14px] border border-black/10 bg-white px-4 py-3 text-[0.95rem] text-black outline-none transition focus:border-[var(--color-orange)]"
                    placeholder="Tell us about your requirement"
                  />
                </label>
                <Button className="min-w-[180px]">Submit</Button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
