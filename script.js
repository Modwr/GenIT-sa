// محرك إدارة المحتوى والترجمة التفاعلية لـ GEN IT
const content = {
    ar: {
        dir: "rtl", langText: "English",
        nav: ['من نحن', 'حلولنا', 'أهدافنا', 'شركاء التقنية', 'اتصل بنا'], cta: "طلب استشارة مجانية",
        heroTitle: "نبني البنية التحتية <br><span class='text-blue-400'>الرقمية الذكية والآمنة للمنشآت</span>",
        heroDesc: "مؤسسة جيل تقنية المعلومات توفر حلولاً هندسية متكاملة في الشبكات، أمن المعلومات، وأنظمة التيار المنخفض وفق أعلى المعايير العالمية لدعم التحول الرقمي ورؤية المملكة 2030.",
        heroBtn1: "طلب عرض سعر (SLA)", heroBtn2: "تصفح الحلول التقنية",
        aboutTag: "من نحن", aboutTitle: "نظرة عامة على المؤسسة",
        aboutP1: "مؤسسة جيل تقنية المعلومات تتمتع بخبرة واسعة في تقديم الحلول المتكاملة في قطاعات الأعمال العامة والخاصة داخل المملكة العربية السعودية، مما يعكس قدرتنا على تلبية احتياجات السوق بمختلف قطاعاته.",
        aboutP2: "انطلاقاً من التزامنا بدعم مستهدفات رؤية المملكة ٢٠٣٠ نسهم في تعزيز التحول الرقمي وتطوير البنية التحتية الذكية.",
        vTitle: "رؤيتنا", vDesc: "أن نكون من الرواد في تقديم حلول تقنية المعلومات والاتصالات المبتكرة والمتكاملة من خلال تقديم خدمات عالية الجودة بأسعار تنافسية.",
        mTitle: "رسالتنا", mDesc: "نلتزم بتقديم مجموعة شاملة من حلول تقنية المعلومات والاتصالات والبنية التحتية التي تتسم بالموثوقية وسهولة الاستخدام وعقد صيانة مرنة.",
        sTag: "ماذا نقدم", sTitle: "حلولنا وخدماتنا المتكاملة",
        services: [
            {t: "أنظمة الشبكات والاتصالات اللاسلكية", d: "تصميم وبناء الشبكات اللاسلكية والمحلية للمؤسسات والشركات، وتأمين قنوات الاتصال والربط الداخلي والخارجي بكفاءة وسرعة عالية."},
            {t: "أمن وحماية الشبكات وحلول الأمن السيبراني", d: "تأمين البنية التحتية ضد التهديدات السيبرانية، بناء جدران الحماية، وإدارة الصلاحيات لحماية البيانات الحساسة وفق الضوابط الوطنية."},
            {t: "أنظمة التيار الضعيف (Low Current Systems)", d: "توريد وتركيب أنظمة التيار المنخفض المتكاملة بما يشمل أنظمة الصوت، التحكم بالدخول، الكابلات الهيكلية، والمراقبة الذكية."}
        ],
        vTag: "شركاء النجاح", vTitle: "مجتمع الموردين والأنظمة المدعومة",
        gTag: "أهدافنا", gTitle: "دفع الابتكار من أجل غد أكثر ذكاءً",
        goals: [
            {t: "تعزيز تجربة العميل", d: "نحرص على تقديم تجارب سلسة ومخصصة ومبنية على القيمة، تتجاوز توقعات العملاء."},
            {t: "تعظيم كفاءة العمليات", d: "نسعى إلى تبسيط الإجراءات وتقليل التعقيدات لتحقيق أداء تشغيلي أمثل."},
            {t: "زيادة المرونة المؤسسية", d: "نمكّن مؤسستنا من التكيف السريع والاستجابة لمتغيرات السوق والتقنيات الحديثة."},
            {t: "تحسين العمليات التشغيلية", d: "نلتزم بالتحسين المستمر والابتكار في العمليات لتحقيق النمو والاستدامة."},
            {t: "تعزيز الشراكات الاستراتيجية", d: "نبني تحالفات طويلة الأمد وموثوقة مع شركاء رائدين في السوق والتقنية لتحقيق نجاح مشترك."}
        ],
        vcat1: "الأنظمة النشطة (ACTIVE INFRASTRUCTURE)", vcat2: "الكابلات والأنظمة غير النشطة (PASSIVE SYSTEMS)", vcat3: "أنظمة المراقبة والأمن الذكي (CCTV)", vip: "أنظمة السنترالات والهواتف (IP PHONE)", vups: "أنظمة الطاقة الاحتياطية (UPS)",
        cTag: "إدارة الطلبات", cTitle: "ابدأ بتأمين وتهيئة بنيتك التحتية اليوم", cDesc: "قم بتعبئة النموذج وسيقوم مهندسونا بالتواصل معك خلال 24 ساعة.",
        lComp: "اسم المنشأة / الشركة *", lName: "اسم مسؤول التواصل *", lEmail: "البريد الإلكتروني للعمل *", lPhone: "رقم الجوال / الواتساب *", lServ: "نوع الحل التقني المطلوب", lMsg: "تفاصيل المشروع أو المتعلّقات التقنية الحالية", btnSub: "إرسال الطلب الفوري وتفعيل الرد الآلي", btnSending: "جاري إرسال الطلب...", errMsg: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على info@genit-sa.com",
        slaTitle: "🤖 نظام الاستجابة والرد الآلي الذكي (GEN-IT SLA Engine):",
        slaBody: "مرحباً بك. تم استلام متطلباتك الهندسية لقطاع حلول <strong>[{service}]</strong> بنجاح. بموجب اتفاقية مستوى الخدمة الرقمية الحالية لدينا، تم توجيه ملف منشأتك إلى مهندس الحلول والأنظمة المختص. سيتم مراجعة المتطلبات والتواصل معك لإرسال التصميم التقني الأولي وعرض السعر (Proposal) عبر البريد الإلكتروني في غضون <strong>أقل من ساعتي عمل</strong>. شكراً لاختيارك GEN IT!"
    },
    en: {
        dir: "ltr", langText: "العربية",
        nav: ['About Us', 'Solutions', 'Goals', 'Vendors', 'Contact Us'], cta: "Free Assessment",
        heroTitle: "Building Secure & Smart <br><span class='text-blue-300'>Digital Infrastructure</span>",
        heroDesc: "Generation Information Technology (GEN IT) delivers world-class engineered solutions in networking, cyber security, and low-current systems, fully aligned with Saudi Vision 2030.",
        heroBtn1: "Request Proposal (SLA)", heroBtn2: "Explore Tech Services",
        aboutTag: "Who We Are", aboutTitle: "Company Overview",
        aboutP1: "Generation Information Technology Company is a premier Saudi establishment delivering integrated, high-availability IT solutions across public and private enterprise ecosystems.",
        aboutP2: "We aggressively empower the objectives of Saudi Vision 2030 by driving secure digital transformation and next-gen smart city architectures.",
        vTitle: "Our Vision", vDesc: "To lead the market as a trusted technological pioneer, delivering elite integrated ICT solutions with unmatched service reliability.",
        mTitle: "Our Mission", mDesc: "To provision future-ready, end-to-end technology infrastructure solutions that grant enterprises total system flexibility and robust technical resilience.",
        sTag: "Expertise", sTitle: "Our Integrated Solutions & Services",
        services: [
            {t: "Network & Enterprise Wireless Systems", d: "Designing, optimizing, and deploying mission-critical enterprise routing, switching, and carrier-grade wireless systems."},
            {t: "Network Security & Cybersecurity", d: "Defending core digital assets, building proactive perimeter firewalls, and managing identity protection controls."},
            {t: "Low Current Solutions (ELV Frameworks)", d: "Comprehensive deployment of low-current frameworks including IP telephony, access control, structured cabling, and unified smart monitoring."}
        ],
        vTag: "Ecosystem", vTitle: "Supported Engineering Vendors",
        gTag: "Our Goals", gTitle: "Driving Innovation for a Smarter Tomorrow",
        goals: [
            {t: "Enhanced Customer Experience", d: "We strive to deliver seamless, personalised, and value-driven experiences that exceed customer expectations."},
            {t: "Maximised Process Efficiency", d: "We aim to streamline operations and reduce complexity to achieve optimal performance."},
            {t: "Greater Organisational Agility", d: "We empower adaptability and responsiveness to evolving market demands and technologies."},
            {t: "Optimised Business Operations", d: "We continuously improve and innovate business processes to drive growth and sustainability."},
            {t: "Strengthened Strategic Partnerships", d: "Building long-term, trusted alliances with leading technology and market partners to enhance mutual success."}
        ],
        vcat1: "ACTIVE INFRASTRUCTURE", vcat2: "PASSIVE SYSTEMS", vcat3: "CCTV Systems", vip: "IP PHONE Systems", vups: "UPS Systems",
        cTag: "Lead Engine", cTitle: "Secure Your Enterprise Architecture Today", cDesc: "Submit your technical scope. Our enterprise engineering division will respond within 24 hours.",
        lComp: "Organization Name *", lName: "Contact Person Name *", lEmail: "Business Email Address *", lPhone: "Mobile / WhatsApp Number *", lServ: "Select Architecture Domain", lMsg: "Technical Scope Description or Project Outline", btnSub: "Submit Request & Trigger SLA Engine", btnSending: "Sending Request...", errMsg: "Something went wrong while sending. Please try again or email us directly at info@genit-sa.com",
        slaTitle: "🤖 Automated Solution Router (GEN-IT SLA Engine):",
        slaBody: "Greetings. Your engineering request regarding <strong>[{service}]</strong> has been successfully processed. According to GEN IT operation protocols, your ticket is now automatically routed to the specialized systems architect. A preliminary technical layout and commercial proposal will be dispatched to your email within <strong>less than 2 business hours</strong>. Thank you for partnering with GEN IT!"
    }
};

let currentLang = 'ar';

function updateDOM() {
    const data = content[currentLang];
    const html = document.getElementById('html-tag');
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', data.dir);
    
    if(currentLang === 'en') {
        html.classList.add('lang-en');
    } else {
        html.classList.remove('lang-en');
    }

    document.getElementById('lang-switch').innerText = data.langText;
    document.getElementById('nav-cta').innerText = data.cta;
    
    const nav = document.getElementById('nav-links');
    nav.innerHTML = `
        <a href="#about" class="text-slate-600 hover:text-blue-600 transition font-semibold text-xs tracking-wider uppercase">${data.nav[0]}</a>
        <a href="#services" class="text-slate-600 hover:text-blue-600 transition font-semibold text-xs tracking-wider uppercase">${data.nav[1]}</a>
        <a href="#goals" class="text-slate-600 hover:text-blue-600 transition font-semibold text-xs tracking-wider uppercase">${data.nav[2]}</a>
        <a href="#vendors" class="text-slate-600 hover:text-blue-600 transition font-semibold text-xs tracking-wider uppercase">${data.nav[3]}</a>
        <a href="#contact" class="text-slate-600 hover:text-blue-600 transition font-semibold text-xs tracking-wider uppercase">${data.nav[4]}</a>
    `;
    
    if(data.dir === 'ltr') { 
        nav.classList.remove('space-x-reverse'); 
    } else { 
        nav.classList.add('space-x-reverse'); 
    }

    document.getElementById('hero-title').innerHTML = data.heroTitle;
    document.getElementById('hero-desc').innerText = data.heroDesc;
    document.getElementById('hero-btn-primary').innerText = data.heroBtn1;
    document.getElementById('hero-btn-secondary').innerText = data.heroBtn2;

    document.getElementById('about-tag').innerText = data.aboutTag;
    document.getElementById('about-title').innerText = data.aboutTitle;
    document.getElementById('about-p1').innerText = data.aboutP1;
    document.getElementById('about-p2').innerText = data.aboutP2;
    document.getElementById('vision-title').innerHTML = `<i class="fas fa-eye text-blue-600 text-sm"></i> ${data.vTitle}`;
    document.getElementById('vision-desc').innerText = data.vDesc;
    document.getElementById('mission-title').innerHTML = `<i class="fas fa-bullseye text-blue-600 text-sm"></i> ${data.mTitle}`;
    document.getElementById('mission-desc').innerText = data.mDesc;

    document.getElementById('services-tag').innerText = data.sTag;
    document.getElementById('services-title').innerText = data.sTitle;
    const grid = document.getElementById('services-grid');
    grid.innerHTML = '';
    data.services.forEach((s, idx) => {
        grid.innerHTML += `
            <div class="corporate-card p-8 rounded-2xl text-right">
                <div class="w-12 h-12 bg-blue-50 text-[#0f172a] rounded-xl flex items-center justify-center text-base mb-6">
                    <i class="${idx===0?'fas fa-network-wired':idx===1?'fas fa-shield-alt':'fas fa-bolt'}"></i>
                </div>
                <h3 class="text-lg font-bold text-[#0f172a] mb-3 tracking-tight">${s.t}</h3>
                <p class="text-slate-500 text-xs leading-relaxed">${s.d}</p>
            </div>
        `;
    });

    document.getElementById('goals-tag').innerText = data.gTag;
    document.getElementById('goals-title').innerText = data.gTitle;
    const goalsGrid = document.getElementById('goals-grid');
    goalsGrid.innerHTML = '';
    const goalIcons = ['fa-heart', 'fa-gauge-high', 'fa-arrows-spin', 'fa-diagram-project', 'fa-handshake'];
    data.goals.forEach((g, idx) => {
        goalsGrid.innerHTML += `
            <div class="bg-white/5 border border-white/10 p-8 rounded-2xl text-right">
                <div class="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center text-base mb-6">
                    <i class="fas ${goalIcons[idx] || 'fa-star'}"></i>
                </div>
                <h3 class="text-lg font-bold text-white mb-3 tracking-tight">${g.t}</h3>
                <p class="text-slate-400 text-xs leading-relaxed">${g.d}</p>
            </div>
        `;
    });

    document.getElementById('vendors-tag').innerText = data.vTag;
    document.getElementById('vendors-title').innerText = data.vTitle;
    document.getElementById('vcat-1').innerText = data.vcat1;
    document.getElementById('vcat-2').innerText = data.vcat2;
    document.getElementById('vcat-3').innerText = data.vcat3;
    document.getElementById('vcat-ip').innerText = data.vip;
    document.getElementById('vcat-ups').innerText = data.vups;

    document.getElementById('contact-tag').innerText = data.cTag;
    document.getElementById('contact-title').innerText = data.cTitle;
    document.getElementById('contact-desc').innerText = data.cDesc;
    document.getElementById('lbl-company').innerText = data.lComp;
    document.getElementById('lbl-name').innerText = data.lName;
    document.getElementById('lbl-email').innerText = data.lEmail;
    document.getElementById('lbl-phone').innerText = data.lPhone;
    document.getElementById('lbl-service').innerText = data.lServ;
    document.getElementById('lbl-msg').innerText = data.lMsg;
    document.getElementById('btn-submit-text').innerText = data.btnSub;

    const selector = document.getElementById('service-select');
    selector.innerHTML = '';
    data.services.forEach(s => {
        selector.innerHTML += `<option value="${s.t}" class="bg-white text-slate-900">${s.t}</option>`;
    });
}

document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = (currentLang === 'ar') ? 'en' : 'ar';
    updateDOM();
});

document.getElementById('lead-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const data = content[currentLang];
    const selectedService = document.getElementById('service-select').value;

    const btn = document.getElementById('btn-submit');
    const btnText = document.getElementById('btn-submit-text');
    const btnSpinner = document.getElementById('btn-submit-spinner');
    const errorEl = document.getElementById('form-error');

    errorEl.classList.add('hidden');
    btn.disabled = true;
    btn.classList.add('opacity-70', 'cursor-not-allowed');
    btnText.innerText = data.btnSending;
    btnSpinner.classList.remove('hidden');

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then((response) => {
        if (!response.ok) throw new Error('Submission failed');

        const responseBox = document.getElementById('sla-responder');
        document.getElementById('sla-title').innerText = data.slaTitle;
        document.getElementById('sla-body').innerHTML = data.slaBody.replace('{service}', selectedService);

        responseBox.classList.remove('hidden');
        window.scrollTo({ top: responseBox.offsetTop - 120, behavior: 'smooth' });
        form.reset();
    })
    .catch(() => {
        errorEl.innerText = data.errMsg;
        errorEl.classList.remove('hidden');
    })
    .finally(() => {
        btn.disabled = false;
        btn.classList.remove('opacity-70', 'cursor-not-allowed');
        btnText.innerText = data.btnSub;
        btnSpinner.classList.add('hidden');
    });
});

updateDOM();
