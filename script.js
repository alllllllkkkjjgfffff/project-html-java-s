const animeList = [
    { title: 'ون بيس', image: 'images/one-piece.jpg', link: 'one-piece-details.html', description: 'مغامرات لوفي وطاقمه في البحث عن كنز ون بيس.' },
    { title: 'هجوم العمالقة', image: 'images/attack-on-titan.jpg', link: 'attack-on-titan-details.html', description: 'قصة البشر في صراعهم ضد العمالقة.' },
    { title: 'ناروتو', image: 'images/naruto.jpg', link: 'naruto-details.html', description: 'قصة النينجا ناروتو في سعيه ليصبح الهوكاجي.' },
    { title: 'دراغون بول', image: 'images/dragon-ball.jpg', link: 'dragon-ball-details.html', description: 'مغامرات غوكو وأصدقائه في معارك قوية.' },
    { title: 'القناص', image: 'images/hunter-x-hunter.jpg', link: 'hunter-x-hunter-details.html', description: 'مغامرات جون وفريقه في عالم القناصين.' },
    { title: 'بليتش', image: 'images/bleach.jpg', link: 'bleach-details.html', description: 'مغامرات إيتشيغو في عالم الشينيغامي والأرواح.' },
    { title: 'ديث نوت', image: 'images/death-note.jpg', link: 'death-note-details.html', description: 'قصة لايت وياغامي في محاولته لتنظيف العالم من المجرمين باستخدام مذكرة الموت.' },
    { title: 'فول ميتال ألكمست', image: 'images/fullmetal-alchemist.jpg', link: 'fullmetal-alchemist-details.html', description: 'مغامرات إدوارد وإلفونسي في البحث عن حجر الفيلسوف.' },
    { title: 'كيميتسو نو يايبا', image: 'images/demon-slayer.jpg', link: 'demon-slayer-details.html', description: 'صراع تانجيرو مع الشياطين لإنقاذ شقيقته.' },
    { title: 'بوكو نو هيرو', image: 'images/my-hero-academi.jpg', link: 'my-hero-academia-details.html', description: 'مغامرات ديكو وزملائه في أكاديمية الأبطال.' }
];

const animeSection = document.getElementById('anime-section');

animeList.forEach(anime => {
    const card = document.createElement('div');
    card.classList.add('anime-card');
    
    const img = document.createElement('img');
    img.src = anime.image;
    img.alt = anime.title;

    const title = document.createElement('h2');
    title.textContent = anime.title;

    const link = document.createElement('a');
    link.href = anime.link;
    link.textContent = 'تعرف على المزيد';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(link);
    
    animeSection.appendChild(card);
});