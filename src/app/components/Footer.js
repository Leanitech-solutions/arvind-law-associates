import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-primary text-on-primary font-body-md text-sm" >
    <div className="py-16 px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12" >
      <div className="flex flex-col gap-6" >
        <div className="font-headline-sm text-headline-sm text-on-primary uppercase" >
          ARVIND LAW ASSOCIATES
        </div>
        <p className="text-on-primary/70 text-sm leading-relaxed" >
          Advocacy, Litigation and Legal Advisory services before the High Court of Karnataka, District Courts, Family Courts and other Forums in India.
        </p>
        <div className="flex gap-4" >
          <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors"  href="#"><span className="material-symbols-outlined"  data-icon="share">share</span></Link>
          <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors"  href="#"><span className="material-symbols-outlined"  data-icon="thumb_up">thumb_up</span></Link>
          <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors"  href="#"><span className="material-symbols-outlined"  data-icon="camera_alt">camera_alt</span></Link>
        </div>
      </div>
      <div className="flex flex-col gap-4" >
        <h4 className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase mb-2 tracking-widest" >Quick Links</h4>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/">Home</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/about-us">About Us</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/services">Practice Areas</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/#articles">Legal Insights</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/contact">Contact Us</Link>
      </div>
      <div className="flex flex-col gap-4" >
        <h4 className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase mb-2 tracking-widest" >Practice Areas</h4>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/services/family-law">Family Law</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/services/property-law">Property Law</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/services/criminal-law">Criminal Law Services</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/services/cheque-bounce">Cheque Bounce Cases</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm"  href="/services/high-court-practice">High Court Practice</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm" href="/services/corporate-law">Corporate Law</Link>
        <Link className="text-on-primary/70 hover:text-tertiary-fixed-dim transition-colors w-fit text-sm" href="/services/commercial-law">Commercial Law</Link>
      </div>
      <div className="flex flex-col gap-6" >
        <h4 className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase mb-2 tracking-widest" >Contact Us</h4>
        <div className="flex items-start gap-3 text-on-primary/70 text-sm" >
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl mt-1"  data-icon="location_on">location_on</span>
          <span>No. 301/49, First Floor, Kanakapura Main Rd, 7th Block, Jayanagar, Bengaluru, Karnataka 560070</span>
        </div>
        <div className="flex items-center gap-3 text-on-primary/70 text-sm" >
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl"  data-icon="call">call</span>
          <span>096321 96595</span>
        </div>
        <div className="flex items-center gap-3 text-on-primary/70 text-sm" >
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl"  data-icon="mail">mail</span>
          <span>info@arvindlawassociates.com</span>
        </div>
        <div className="flex items-center gap-3 text-on-primary/70 text-sm mt-2" >
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl"  data-icon="schedule">schedule</span>
          <span>Mon - Sat: 10:00 AM - 9:00 PM</span>
        </div>
      </div>
    </div>
    <div className="border-t border-on-primary/20 bg-primary-container" >
      <div className="max-w-container-max mx-auto px-gutter py-6 flex flex-col md:flex-row justify-between items-center text-xs text-on-primary/50 gap-4" >
        <div>© 2024 ARVIND LAW ASSOCIATES. All Rights Reserved.</div>
        <div className="flex gap-4" >
          <Link className="hover:text-on-primary transition-colors"  href="#">Disclaimer</Link>
          <span>|</span>
          <Link className="hover:text-on-primary transition-colors"  href="#">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}
