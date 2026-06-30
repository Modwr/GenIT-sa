/* ===== Gen-IT Website — Content & Interaction Engine ===== */

const content = {
  ar: {
    dir: "rtl", langText: "English",
    nav: ['من نحن', 'حلولنا', 'أهدافنا', 'شركاء التقنية', 'اتصل بنا'],
    heroTitle: "نبني البنية التحتية <br><span>الرقمية الذكية والآمنة للمنشآت</span>",
    heroDesc: "مؤسسة جيل تقنية المعلومات توفر حلولاً هندسية متكاملة في الشبكات، أمن المعلومات، وأنظمة التيار المنخفض وفق أعلى المعايير العالمية لدعم التحول الرقمي ورؤية المملكة 2030.",
    heroBtn1: "طلب عرض سعر (SLA)", heroBtn2: "تصفح الحلول التقنية",
    aboutTag: "من نحن", aboutTitle: "نظرة عامة على المؤسسة",
    aboutP1: "مؤسسة جيل تقنية المعلومات تتمتع بخبرة واسعة في تقديم الحلول المتكاملة في قطاعات الأعمال العامة والخاصة داخل المملكة العربية السعودية، مما يعكس قدرتنا على تلبية احتياجات السوق بمختلف قطاعاته.",
    aboutP2: "انطلاقاً من التزامنا بدعم مستهدفات رؤية المملكة ٢٠٣٠ نسهم في تعزيز التحول الرقمي وتطوير البنية التحتية الذكية.",
    vTitle: "رؤيتنا", vDesc: "أن نكون من الرواد في تقديم حلول تقنية المعلومات والاتصالات المبتكرة والمتكاملة من خلال تقديم خدمات عالية الجودة بأسعار تنافسية.",
    mTitle: "رسالتنا", mDesc: "نلتزم بتقديم مجموعة شاملة من حلول تقنية المعلومات والاتصالات والبنية التحتية التي تتسم بالموثوقية وسهولة الاستخدام وعقد صيانة مرنة.",
    sTag: "ماذا نقدم", sTitle: "حلولنا وخدماتنا المتكاملة",
    services: [
      { t: "أنظمة الشبكات والاتصالات اللاسلكية", d: "تصميم وبناء الشبكات اللاسلكية والمحلية للمؤسسات والشركات، وتأمين قنوات الاتصال والربط الداخلي والخارجي بكفاءة وسرعة عالية." },
      { t: "أمن وحماية الشبكات وحلول الأمن السيبراني", d: "تأمين البنية التحتية ضد التهديدات السيبرانية، بناء جدران الحماية، وإدارة الصلاحيات لحماية البيانات الحساسة وفق الضوابط الوطنية." },
      { t: "أنظمة التيار الضعيف (Low Current Systems)", d: "توريد وتركيب أنظمة التيار المنخفض المتكاملة بما يشمل أنظمة الصوت، التحكم بالدخول، الكابلات الهيكلية، والمراقبة الذكية." }
    ],
    vTag: "شركاء النجاح", vTitle: "مجتمع الموردين والأنظمة المدعومة",
    gTag: "أهدافنا", gTitle: "دفع الابتكار من أجل غد أكثر ذكاءً",
    goals: [
      { t: "تعزيز تجربة العميل", d: "نحرص على تقديم تجارب سلسة ومخصصة ومبنية على القيمة، تتجاوز توقعات العملاء." },
      { t: "تعظيم كفاءة العمليات", d: "نسعى إلى تبسيط الإجراءات وتقليل التعقيدات لتحقيق أداء تشغيلي أمثل." },
      { t: "زيادة المرونة المؤسسية", d: "نمكّن مؤسستنا من التكيف السريع والاستجابة لمتغيرات السوق والتقنيات الحديثة." },
      { t: "تحسين العمليات التشغيلية", d: "نلتزم بالتحسين المستمر والابتكار في العمليات لتحقيق النمو والاستدامة." },
      { t: "تعزيز الشراكات الاستراتيجية", d: "نبني تحالفات طويلة الأمد وموثوقة مع شركاء رائدين في السوق والتقنية لتحقيق نجاح مشترك." }
    ],
    vcat1: "الأنظمة النشطة (ACTIVE INFRASTRUCTURE)", vcat2: "الكابلات والأنظمة غير النشطة (PASSIVE SYSTEMS)", vcat3: "أنظمة المراقبة والأمن الذكي (CCTV)", vip: "أنظمة السنترالات والهواتف (IP PHONE)", vups: "أنظمة الطاقة الاحتياطية (UPS)",
    cTag: "إدارة الطلبات", cTitle: "ابدأ بتأمين وتهيئة بنيتك التحتية اليوم", cDesc: "قم بتعبئة النموذج وسيقوم مهندسونا بالتواصل معك خلال 24 ساعة.",
    lComp: "اسم المنشأة / الشركة *", lName: "اسم مسؤول التواصل *", lEmail: "البريد الإلكتروني للعمل *", lPhone: "رقم الجوال / الواتساب *", lServ: "نوع الحل التقني المطلوب", lMsg: "تفاصيل المشروع أو المتعلّقات التقنية الحالية", btnSub: "إرسال الطلب الفوري وتفعيل الرد الآلي", btnSending: "جاري إرسال الطلب...", errMsg: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على info@genit-sa.com",
    slaTitle: "🤖 نظام الاستجابة والرد الآلي الذكي (GEN-IT SLA Engine):",
    slaBody: "مرحباً بك. تم استلام متطلباتك الهندسية لقطاع حلول [<strong>{service}</strong>] بنجاح. بموجب اتفاقية مستوى الخدمة الرقمية الحالية لدينا، تم توجيه ملف منشأتك إلى مهندس الحلول والأنظمة المختص. سيتم مراجعة المتطلبات والتواصل معك لإرسال التصميم التقني الأولي وعرض السعر (Proposal) عبر البريد الإلكتروني في غضون <strong>أقل من ساعتي عمل</strong>. شكراً لاختيارك Gen-IT!",
    rights: "جميع الحقوق محفوظة."
  },
  en: {
    dir: "ltr", langText: "العربية",
    nav: ['About Us', 'Solutions', 'Goals', 'Vendors', 'Contact Us'],
    heroTitle: "Building Secure & Smart <br><span>Digital Infrastructure</span>",
    heroDesc: "Generation Information Technology (Gen-IT) delivers world-class engineered solutions in networking, cyber security, and low-current systems, fully aligned with Saudi Vision 2030.",
    heroBtn1: "Request Proposal (SLA)", heroBtn2: "Explore Tech Services",
    aboutTag: "Who We Are", aboutTitle: "Company Overview",
    aboutP1: "Generation Information Technology Company is a premier Saudi establishment delivering integrated, high-availability IT solutions across public and private enterprise ecosystems.",
    aboutP2: "We aggressively empower the objectives of Saudi Vision 2030 by driving secure digital transformation and next-gen smart city architectures.",
    vTitle: "Our Vision", vDesc: "To lead the market as a trusted technological pioneer, delivering elite integrated ICT solutions with unmatched service reliability.",
    mTitle: "Our Mission", mDesc: "To provision future-ready, end-to-end technology infrastructure solutions that grant enterprises total system flexibility and robust technical resilience.",
    sTag: "Expertise", sTitle: "Our Integrated Solutions & Services",
    services: [
      { t: "Network & Enterprise Wireless Systems", d: "Designing, optimizing, and deploying mission-critical enterprise routing, switching, and carrier-grade wireless systems." },
      { t: "Network Security & Cybersecurity", d: "Defending core digital assets, building proactive perimeter firewalls, and managing identity protection controls." },
      { t: "Low Current Solutions (ELV Frameworks)", d: "Comprehensive deployment of low-current frameworks including IP telephony, access control, structured cabling, and unified smart monitoring." }
    ],
    vTag: "Ecosystem", vTitle: "Supported Engineering Vendors",
    gTag: "Our Goals", gTitle: "Driving Innovation for a Smarter Tomorrow",
    goals: [
      { t: "Enhanced Customer Experience", d: "We strive to deliver seamless, personalised, and value-driven experiences that exceed customer expectations." },
      { t: "Maximised Process Efficiency", d: "We aim to streamline operations and reduce complexity to achieve optimal performance." },
      { t: "Greater Organisational Agility", d: "We empower adaptability and responsiveness to evolving market demands and technologies." },
      { t: "Optimised Business Operations", d: "We continuously improve and innovate business processes to drive growth and sustainability." },
      { t: "Strengthened Strategic Partnerships", d: "Building long-term, trusted alliances with leading technology and market partners to enhance mutual success." }
    ],
    vcat1: "ACTIVE INFRASTRUCTURE", vcat2: "PASSIVE SYSTEMS", vcat3: "CCTV Systems", vip: "IP PHONE Systems", vups: "UPS Systems",
    cTag: "Lead Engine", cTitle: "Secure Your Enterprise Architecture Today", cDesc: "Submit your technical scope. Our enterprise engineering division will respond within 24 hours.",
    lComp: "Organization Name *", lName: "Contact Person Name *", lEmail: "Business Email Address *", lPhone: "Mobile / WhatsApp Number *", lServ: "Select Architecture Domain", lMsg: "Technical Scope Description or Project Outline", btnSub: "Submit Request & Trigger SLA Engine", btnSending: "Sending Request...", errMsg: "Something went wrong while sending. Please try again or email us directly at info@genit-sa.com",
    slaTitle: "🤖 Automated Solution Router (GEN-IT SLA Engine):",
    slaBody: "Greetings. Your engineering request regarding [<strong>{service}</strong>] has been successfully processed. According to Gen-IT operation protocols, your ticket is now automatically routed to the specialized systems architect. A preliminary technical layout and commercial proposal will be dispatched to your email within <strong>less than 2 business hours</strong>. Thank you for partnering with Gen-IT!",
    rights: "All rights reserved."
  }
};

const navHrefs = ['#about', '#services', '#goals', '#vendors', '#contact'];
const serviceIcons = ['fas fa-network-wired', 'fas fa-shield-halved', 'fas fa-bolt'];
const goalIcons = ['fas fa-heart', 'fas fa-gauge-high', 'fas fa-arrows-spin', 'fas fa-diagram-project', 'fas fa-handshake'];

let currentLang = 'en';
const $ = (id) => document.getElementById(id);

function render() {
  const data = content[currentLang];
  const html = $('html-tag');
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', data.dir);
  document.body.classList.toggle('lang-en', currentLang === 'en');

  $('lang-switch').innerText = data.langText;

  // Navigation
  $('nav-links').innerHTML = data.nav
    .map((label, i) => `<a href="${navHrefs[i]}">${label}</a>`)
    .join('');

  // Hero
  $('hero-title').innerHTML = data.heroTitle;
  $('hero-desc').innerText = data.heroDesc;
  $('hero-btn-primary').innerText = data.heroBtn1;
  $('hero-btn-secondary').innerText = data.heroBtn2;

  // About
  $('about-tag').innerText = data.aboutTag;
  $('about-title').innerText = data.aboutTitle;
  $('about-p1').innerText = data.aboutP1;
  $('about-p2').innerText = data.aboutP2;
  $('vision-title').innerHTML = `<i class="fas fa-eye"></i>${data.vTitle}`;
  $('vision-desc').innerText = data.vDesc;
  $('mission-title').innerHTML = `<i class="fas fa-bullseye"></i>${data.mTitle}`;
  $('mission-desc').innerText = data.mDesc;

  // Services
  $('services-tag').innerText = data.sTag;
  $('services-title').innerText = data.sTitle;
  $('services-grid').innerHTML = data.services.map((s, i) => `
    <div class="service-card">
      <div class="icon-box"><i class="${serviceIcons[i]}"></i></div>
      <h3>${s.t}</h3>
      <p>${s.d}</p>
    </div>`).join('');

  // Goals
  $('goals-tag').innerText = data.gTag;
  $('goals-title').innerText = data.gTitle;
  $('goals-grid').innerHTML = data.goals.map((g, i) => `
    <div class="goal-card">
      <div class="icon-box"><i class="${goalIcons[i]}"></i></div>
      <h3>${g.t}</h3>
      <p>${g.d}</p>
    </div>`).join('');

  // Vendors
  $('vendors-tag').innerText = data.vTag;
  $('vendors-title').innerText = data.vTitle;
  $('vcat-1').innerText = data.vcat1;
  $('vcat-2').innerText = data.vcat2;
  $('vcat-3').innerText = data.vcat3;
  $('vcat-ip').innerText = data.vip;
  $('vcat-ups').innerText = data.vups;

  // Contact
  $('contact-tag').innerText = data.cTag;
  $('contact-title').innerText = data.cTitle;
  $('contact-desc').innerText = data.cDesc;
  $('lbl-company').innerText = data.lComp;
  $('lbl-name').innerText = data.lName;
  $('lbl-email').innerText = data.lEmail;
  $('lbl-phone').innerText = data.lPhone;
  $('lbl-service').innerText = data.lServ;
  $('lbl-msg').innerText = data.lMsg;
  $('btn-submit-text').innerText = data.btnSub;
  $('footer-rights').innerText = data.rights;

  // Service options
  $('service-select').innerHTML = data.services
    .map((s) => `<option value="${s.t}">${s.t}</option>`)
    .join('');
}

// Language toggle
$('lang-switch').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  render();
});

// Form submission
$('lead-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const data = content[currentLang];
  const selectedService = $('service-select').value;

  const btn = $('btn-submit');
  const btnText = $('btn-submit-text');
  const btnSpinner = $('btn-submit-spinner');
  const errorEl = $('form-error');

  errorEl.classList.add('hidden');
  btn.disabled = true;
  btnText.innerText = data.btnSending;
  btnSpinner.classList.remove('hidden');

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' }
  })
    .then((response) => {
      if (!response.ok) throw new Error('Submission failed: ' + response.status);
      const box = $('sla-responder');
      $('sla-title').innerText = data.slaTitle;
      $('sla-body').innerHTML = data.slaBody.replace('{service}', selectedService);
      box.classList.remove('hidden');
      window.scrollTo({ top: box.offsetTop - 110, behavior: 'smooth' });
      form.reset();
    })
    .catch((err) => {
      console.error('Gen-IT lead form error:', err);
      errorEl.innerText = data.errMsg;
      errorEl.classList.remove('hidden');
    })
    .finally(() => {
      btn.disabled = false;
      btnText.innerText = data.btnSub;
      btnSpinner.classList.add('hidden');
    });
});

render();
