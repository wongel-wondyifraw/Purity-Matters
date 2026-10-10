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
        className="w-full relative overflow-hidden flex flex-col items-center justify-center pt-32 pb-48 px-6 text-center bg-accent"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
      >
        {/* Floating Decorative SVGs */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <Icon name="sparkles" size={48} weight="fill" className="absolute top-[20%] left-[10%] text-[#eab308] opacity-60 animate-[pulse_4s_ease-in-out_infinite]" />
           <Icon name="star" size={24} weight="fill" className="absolute top-[30%] right-[15%] text-[#eab308] opacity-40 animate-[pulse_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
           <Icon name="sparkles" size={32} weight="fill" className="absolute bottom-[35%] left-[20%] text-[#eab308] opacity-50 animate-[pulse_5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
           <Icon name="star" size={40} weight="fill" className="absolute bottom-[25%] right-[20%] text-[#eab308] opacity-70 animate-[pulse_6s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
        </div>

        <p className="relative z-10 text-display font-bold text-canvas/90 mb-6 max-w-2xl mx-auto uppercase tracking-widest">
          Something Pure Is Coming
        </p>
        <h1 className="relative z-10 w-full max-w-7xl mx-auto text-center font-bold text-canvas mb-12 leading-tight text-[1.75rem] md:text-display-xl lg:text-[3.5rem]">
          <span>
            <span className="inline-block text-black transition-transform duration-300 hover:-translate-y-4 hover:scale-110 cursor-pointer mx-1">
              ቅድስና
            </span>
            እኛ እግዚአብሔርን የምናይበት መንፈሳዊ ዐይናችን፣ እግዚአብሔርም እኛን የሚያይበት 
            <br className="hidden lg:block" />
            <span className="inline-block text-black transition-transform duration-300 hover:-translate-y-4 hover:scale-110 cursor-pointer mx-1 lg:mt-0">
              ብርሃናዊ
            </span> 
            ልብሳችን ነው።
          </span>
        </h1>
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
                  {/* Animated UI representation of Posts and Vlogs */}
                  <div className="relative w-full h-[260px] mt-8">
                    {/* Post Skeleton */}
                    <div className="absolute left-0 top-4 w-[75%] bg-white/5 border border-white/10 rounded-xl p-5 shadow-lg transform -rotate-3 transition-transform duration-700 group-hover:rotate-0 group-hover:-translate-y-2 z-10 backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-5">
                         <div className="flex gap-3 items-center">
                           <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
                           <div className="h-3 w-28 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                         </div>
                         <span className="text-white/40 text-xs font-bold tracking-widest uppercase">Posts</span>
                      </div>
                      <div className="h-3 w-full bg-white/10 rounded-full mb-3" />
                      <div className="h-3 w-5/6 bg-white/10 rounded-full mb-3" />
                      <div className="h-3 w-2/3 bg-white/10 rounded-full" />
                    </div>

                    {/* Vlog Skeleton */}
                    <div className="absolute right-0 bottom-4 w-[70%] bg-accent/10 border border-accent/30 rounded-xl p-3 shadow-2xl transform rotate-3 transition-transform duration-700 group-hover:-rotate-3 group-hover:-translate-y-4 z-20 backdrop-blur-md">
                      <div className="flex justify-between items-center px-2 pb-3 pt-1">
                         <span className="text-accent/80 text-xs font-bold tracking-widest uppercase">Vlogs</span>
                         <Icon name="video" className="text-accent/50 w-4 h-4" />
                      </div>
                      <div className="w-full h-32 bg-black/40 rounded-lg flex items-center justify-center relative overflow-hidden">
                         <Icon name="play" weight="fill" size={40} className="text-accent relative z-10 transition-transform duration-300 group-hover:scale-125" />
                         <div className="absolute inset-0 bg-accent/20 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
                      </div>
                    </div>
                  </div>
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
                  <div className="relative mt-6">
                    <ul className="flex flex-col gap-4 text-body md:text-lead text-canvas/80 font-medium relative z-10 w-full md:w-[75%]">
                      <li className="flex items-center gap-3"><Icon name="users" size={20} className="text-accent shrink-0" /> አማካሪ ለማግኘት፣</li>
                      <li className="flex items-center gap-3"><Icon name="help" size={20} className="text-accent shrink-0" /> ጥያቄ ለመጠየቅ፣</li>
                      <li className="flex items-center gap-3"><Icon name="bookmark" size={20} className="text-accent shrink-0" /> መጻሕፍት ለማዘዝ፣</li>
                      <li className="flex items-center gap-3"><Icon name="clipboard" size={20} className="text-accent shrink-0" /> ለሥልጠና ለመመዝገብ፣</li>
                      <li className="flex items-center gap-3"><Icon name="file" size={20} className="text-accent shrink-0" /> ኢ ቡክ ለማዘዝ፣</li>
                      <li className="flex items-center gap-3"><Icon name="gift" size={20} className="text-accent shrink-0" /> የገንዘብ ድጋፍ ለማድረግ</li>
                      <li className="flex items-center gap-3"><Icon name="info" size={20} className="text-accent shrink-0" /> ስለ አገልግሎቱ ለማወቅ</li>
                    </ul>

                    {/* Animated Bot Graphic */}
                    <div className="absolute right-0 bottom-4 w-32 h-32 md:w-40 md:h-40 opacity-40 md:opacity-100 pointer-events-none flex items-center justify-center transition-transform duration-700 group-hover:-translate-x-2 z-0">
                      {/* Bot Head */}
                      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center transform transition-transform duration-1000 group-hover:-translate-y-6 shadow-2xl backdrop-blur-md">
                        {/* Antenna */}
                        <div className="absolute -top-3 w-1 h-3 bg-accent/50 rounded-t-full">
                          <div className="absolute -top-1.5 -left-0.5 w-2 h-2 rounded-full bg-accent animate-pulse" />
                        </div>
                        {/* Eyes */}
                        <div className="flex gap-3">
                           <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" style={{ animationDuration: '2s' }} />
                           <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" style={{ animationDuration: '2s', animationDelay: '200ms' }} />
                        </div>
                        {/* Smile */}
                        <div className="w-6 h-1.5 border-b-2 border-accent/60 rounded-full mt-2" />
                      </div>
                      
                      {/* Scanning Rings */}
                      <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent/20 animate-spin border-dashed" style={{ animationDuration: '10s' }} />
                      <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-accent/10 animate-spin border-dotted" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
          </CardGroup>
        </div>
      </section>

      {/* Books Section */}
      <section 
        id="books" 
        className="w-full bg-surface py-32 px-8 scroll-mt-8 -mt-16 relative z-10"
        style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="max-w-[80rem] mx-auto w-full text-center">
          <h2 className="text-display-lg font-semibold tracking-tight text-ink mb-20">Books by Us</h2>
          
          <div className="flex flex-col items-center justify-center gap-24 md:gap-16 w-full max-w-5xl mx-auto">
            {/* Book 1 */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-20 w-full -mt-6 md:mt-0">
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="group cursor-pointer relative w-80 md:w-96 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 hover:drop-shadow-2xl">
                  <img src="/IMG_20260419_031303_448-removebg-preview.png" alt="ፖርኖርሽኝ" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left w-full -mt-24 md:mt-0">
                <h1 className="text-display-lg md:text-display-xl font-bold text-ink mb-4">ፖርኖርሽኝ</h1>
                <h2 className="text-heading md:text-display-sm font-medium text-accent mb-6">በ ምናሴ ይርጉ ጎበና</h2>
                <p className="text-lead text-ink-2 leading-relaxed mb-8">
                  የፖርኖግራፊ መርዝ ፤ መዘዝ እና መድሃኒት
                </p>
                <Button variant="primary" size="md" href="tel:+251986552076" className="font-semibold px-6">To order: +251986552076</Button>
              </div>
            </div>

            {/* Book 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-2 md:gap-20 w-full -mt-6 md:mt-0">
              <div className="flex-1 flex justify-center md:justify-start w-full">
                <div className="group cursor-pointer relative w-64 md:w-80 transition-transform duration-500 hover:-translate-y-4 hover:scale-105 hover:drop-shadow-2xl">
                  <img src="/IMG_20261009_005126_794-removebg-preview.png" alt="የኅሩያን ሕይወት" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-right w-full -mt-24 md:mt-0">
                <h1 className="text-display-lg md:text-display-xl font-bold text-ink mb-4">የኅሩያን ሕይወት</h1>
                <h2 className="text-heading md:text-display-sm font-medium text-accent mb-6">በ ምናሴ ይርጉ ጎበና</h2>
                <p className="text-lead text-ink-2 leading-relaxed mb-8">
                  የወሲባዊ ቅድስና መጽሐፍቅዱሳዊ መርሆች እና አተገባበራችው
                </p>
                <Button variant="primary" size="md" href="tel:+251986552076" className="font-semibold px-6">To order: +251986552076</Button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
