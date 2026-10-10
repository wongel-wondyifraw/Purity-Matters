"use client";

import Button from "@/formic/components/Button";
import { Card, Badge, Icon, Spinner } from "@/formic/components/primitives";
import { BrandIcon } from "@/formic/components/brand";
import { CardGroup, CardHeader, CardMedia, CardTitle, CardDescription } from "@/formic/components/cards";

/* Brief
   Reader:   Public visitors to the Purity Matters landing page
   Question: What is Purity Matters and when is it launching?
   Action:   Learn that it's coming soon, check out the website/bot sections
   Register: Text/Visual (Prominent hero, clean structured cards for upcoming channels)
*/

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sidebar">
      {/* Hero Section */}
      <section 
        className="w-full flex flex-col items-center justify-center pt-32 pb-48 px-6 text-center bg-accent"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
      >
        <h1 className="text-display-xl font-semibold tracking-tight text-canvas max-w-4xl mb-6">
          Something Pure Is Coming
        </h1>
        <p className="text-lead text-canvas font-medium opacity-90 max-w-2xl mb-10">
          A new standard of clarity and intention. Purity Matters is preparing to launch a suite of elegant digital experiences designed to elevate your everyday interactions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="transition-transform duration-300 hover:scale-105">
            <Button variant="primary" size="lg" href="#products">
              Explore Our Products
            </Button>
          </div>
          <div className="transition-transform duration-300 hover:scale-105">
            <Button variant="secondary" size="lg" href="#books">
              Order Our Books
            </Button>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="products" className="w-full bg-sidebar flex-1 -mt-16 scroll-mt-8">
        <div className="max-w-[80rem] mx-auto w-full px-8 py-24">
          <CardGroup columns={2}>
          {/* Website Card */}
          <div key="website" id="website" className="scroll-mt-24">
            <Card className="!bg-ink !text-canvas h-full min-h-[320px] !border-transparent hover:!border-accent hover:shadow-overlay hover:-translate-y-2 transition-all duration-500 group">
              <CardHeader className="!p-8 h-full flex flex-col">
                <div className="flex items-start justify-end mb-8">
                  <Badge tone="neutral" free className="!bg-white !text-black rounded-chip px-3 py-1 text-sm font-bold uppercase tracking-wider">
                    Coming Soon
                  </Badge>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shrink-0">
                      <CardMedia icon="globe" tone="accent" />
                    </div>
                    <h1 className="text-display-lg md:text-display-xl font-bold text-canvas m-0">The Digital Platform</h1>
                  </div>
                  <h2 className="text-lead md:text-heading font-medium text-canvas/80 mb-6">
                    Our primary digital home is currently under construction. When it launches, you will discover a clean, comprehensive hub exploring the full scope of our vision:
                  </h2>
                  <ul className="flex flex-col gap-4 text-body md:text-lead text-canvas/80 font-medium">
                    <li className="flex items-center gap-3"><Icon name="check" size={20} className="text-accent shrink-0" /> In-depth articles and resources</li>
                    <li className="flex items-center gap-3"><Icon name="check" size={20} className="text-accent shrink-0" /> Information on upcoming events</li>
                    <li className="flex items-center gap-3"><Icon name="check" size={20} className="text-accent shrink-0" /> Our complete catalog of offerings</li>
                  </ul>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Telegram Bot Card */}
          <div key="telegram" id="telegram" className="scroll-mt-24">
            <Card className="!bg-ink !text-canvas h-full min-h-[320px] !border-transparent hover:!border-accent hover:shadow-overlay hover:-translate-y-2 transition-all duration-500 group">
              <CardHeader className="!p-8 h-full flex flex-col">
                <div className="flex items-start justify-end mb-8">
                  <Badge tone="neutral" free className="!bg-white !text-black rounded-chip px-3 py-1 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <Spinner size={14} className="!text-black" />
                    <span>Coming Soon</span>
                  </Badge>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-control bg-white/10 shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      <BrandIcon name="telegram" className="text-accent h-6 w-6" />
                    </div>
                    <h1 className="text-display-lg md:text-display-xl font-bold text-canvas m-0">Telegram Bot</h1>
                  </div>
                  <h2 className="text-lead md:text-heading font-medium text-canvas/80 mb-6">
                    A seamless digital assistant built directly into the app you already use. Soon, you will be able to interact with us instantly and effortlessly:
                  </h2>
                  <ul className="flex flex-col gap-4 text-body md:text-lead text-canvas/80 font-medium">
                    <li className="flex items-center gap-3"><Icon name="check" size={20} className="text-accent shrink-0" /> Order physical books directly</li>
                    <li className="flex items-center gap-3"><Icon name="check" size={20} className="text-accent shrink-0" /> Purchase and access e-books</li>
                    <li className="flex items-center gap-3"><Icon name="check" size={20} className="text-accent shrink-0" /> Request private counseling</li>
                  </ul>
                </div>
              </CardHeader>
            </Card>
          </div>
          </CardGroup>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="w-full bg-canvas py-24 px-8 border-t border-line scroll-mt-8">
        <div className="max-w-[80rem] mx-auto w-full text-center">
          <h2 className="text-display-lg font-semibold tracking-tight text-ink mb-20">Books by Us</h2>
          
          <div className="flex flex-col items-center justify-center gap-0 md:gap-4 w-full max-w-5xl mx-auto">
            {/* Book 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 w-full">
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="group cursor-pointer relative w-80 md:w-96 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 hover:drop-shadow-2xl">
                  <img src="/IMG_20260419_031303_448-removebg-preview.png" alt="ፖርኖርሽኝ" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left w-full">
                <h1 className="text-display-lg md:text-display-xl font-bold text-ink mb-4">ፖርኖርሽኝ</h1>
                <h2 className="text-heading md:text-display-sm font-medium text-accent mb-6">በ ምናሴ ይርጉ ጎበና</h2>
                <p className="text-lead text-ink-2 leading-relaxed mb-8">
                  የፖርኖግራፊ መርዝ ፤ መዘዝ እና መድሃኒት
                </p>
                <Button variant="primary" size="md" href="tel:+251986552076" className="font-semibold px-6">To order: +251986552076</Button>
              </div>
            </div>

            {/* Book 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20 w-full">
              <div className="flex-1 flex justify-center md:justify-start w-full">
                <div className="group cursor-pointer relative w-64 md:w-80 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 hover:drop-shadow-2xl">
                  <img src="/IMG_20261009_005126_794-removebg-preview.png" alt="የህሩያን ሂወት" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-right w-full">
                <h1 className="text-display-lg md:text-display-xl font-bold text-ink mb-4">የህሩያን ሂወት</h1>
                <h2 className="text-heading md:text-display-sm font-medium text-accent mb-6">በ ምናሴ ይርጉ ጎበና</h2>
                <p className="text-lead text-ink-2 leading-relaxed mb-8">
                  የወሲባዊ ቅድስና መጽሃፍቅዱሳዊ መርሆች እና አተገባበራችው
                </p>
                <Button variant="primary" size="md" href="tel:+251986552076" className="font-semibold px-6">To order: +251986552076</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto py-10 px-6 border-t border-line text-center bg-canvas">
        <div className="flex items-center justify-center gap-2 mb-2 transition-opacity duration-300 hover:opacity-80">
          <Icon name="sparkles" size={16} className="text-accent" />
          <span className="font-semibold text-ink">Purity Matters</span>
        </div>
        <p className="text-caption text-ink-3">
          &copy; 2026 Purity Matters. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
