document.addEventListener('DOMContentLoaded', () => {

    const langData = {
        en: {
            companyName: "Global Trade Solutions",
            navAbout: "About Us",
            navProducts: "Products",
            navContact: "Contact Us",
            heroTitle: "Connecting Markets, Creating Value",
            heroSubtitle: "Your Trusted Partner in Global Trade",
            heroCTA: "Explore Products",
            aboutTitle: "About Us",
            aboutMission: "Our mission is to bridge global markets by providing exceptional trading solutions, ensuring quality, reliability, and value for our partners worldwide.",
            aboutStrengthTitle: "Our Strengths",
            strength1Title: "Global Network",
            strength1Desc: "Access to a vast network of suppliers and buyers across the globe.",
            strength2Title: "Quality Assurance",
            strength2Desc: "Rigorous quality control processes to ensure product excellence.",
            strength3Title: "Expert Team",
            strength3Desc: "Experienced professionals dedicated to your success.",
            productsTitle: "Our Products",
            productsIntro: "We handle a diverse range of high-quality products to meet the needs of various industries.",
            productCat1: "Industrial Machinery",
            productCat2: "Consumer Electronics",
            productCat3: "Beauty & Cosmetics",
            contactTitle: "Contact Us",
            contactFormTitle: "Send us a message",
            formName: "Name",
            formCompany: "Company Name",
            formEmail: "Email",
            formMessage: "Message",
            formSubmit: "Submit Inquiry",
            contactInfoTitle: "Contact Information",
            contactAddress: "<strong>Address:</strong> 123 Global Trade Center, Seoul, South Korea",
            contactPhone: "<strong>Phone:</strong> +82 2-1234-5678",
            contactEmail: "<strong>Email:</strong> contact@globaltradesolutions.com"
        },
        ko: {
            companyName: "글로벌 무역 솔루션",
            navAbout: "회사 소개",
            navProducts: "제품",
            navContact: "문의하기",
            heroTitle: "시장을 연결하고, 가치를 창출합니다",
            heroSubtitle: "글로벌 무역의 신뢰할 수 있는 파트너",
            heroCTA: "제품 살펴보기",
            aboutTitle: "회사 소개",
            aboutMission: "우리의 임무는 전 세계 파트너들에게 탁월한 무역 솔루션을 제공하여 품질, 신뢰성 및 가치를 보장함으로써 글로벌 시장을 연결하는 것입니다.",
            aboutStrengthTitle: "우리의 강점",
            strength1Title: "글로벌 네트워크",
            strength1Desc: "전 세계 공급업체 및 구매자의 방대한 네트워크에 접근합니다.",
            strength2Title: "품질 보증",
            strength2Desc: "제품의 우수성을 보장하기 위한 엄격한 품질 관리 프로세스.",
            strength3Title: "전문가 팀",
            strength3Desc: "귀하의 성공을 위해 헌신하는 숙련된 전문가들.",
            productsTitle: "우리의 제품",
            productsIntro: "우리는 다양한 산업의 요구를 충족시키기 위해 다양하고 고품질의 제품을 취급합니다.",
            productCat1: "산업 기계",
            productCat2: "소비자 전자제품",
            productCat3: "뷰티 & 코스메틱",
            contactTitle: "문의하기",
            contactFormTitle: "메시지 보내기",
            formName: "이름",
            formCompany: "회사명",
            formEmail: "이메일",
            formMessage: "메시지",
            formSubmit: "문의 제출",
            contactInfoTitle: "연락처 정보",
            contactAddress: "<strong>주소:</strong> 대한민국 서울특별시 글로벌 무역 센터 123",
            contactPhone: "<strong>전화:</strong> 02-1234-5678",
            contactEmail: "<strong>이메일:</strong> contact@globaltradesolutions.com"
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');
    const langSwitcherSpans = langSwitcher.querySelectorAll('span');
    let currentLang = sessionStorage.getItem('lang') || 'en';

    const setLanguage = (lang) => {
        currentLang = lang;
        sessionStorage.setItem('lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (langData[lang][key]) {
                // Use innerHTML for keys that contain HTML tags like <strong>
                if (key.includes('Address') || key.includes('Phone') || key.includes('Email')) {
                    elem.innerHTML = langData[lang][key];
                } else {
                    elem.innerText = langData[lang][key];
                }
            }
        });

        updateSwitcherUI(lang);
    };

    const updateSwitcherUI = (lang) => {
        if (lang === 'en') {
            langSwitcherSpans[0].classList.remove('text-gray-400');
            langSwitcherSpans[0].classList.add('text-gray-900', 'font-bold');
            langSwitcherSpans[1].classList.remove('text-gray-900', 'font-bold');
            langSwitcherSpans[1].classList.add('text-gray-400');
        } else {
            langSwitcherSpans[0].classList.remove('text-gray-900', 'font-bold');
            langSwitcherSpans[0].classList.add('text-gray-400');
            langSwitcherSpans[1].classList.remove('text-gray-400');
            langSwitcherSpans[1].classList.add('text-gray-900', 'font-bold');
        }
    };

    langSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ko' : 'en';
        setLanguage(newLang);
    });

    // Set initial language on page load
    setLanguage(currentLang);
});
