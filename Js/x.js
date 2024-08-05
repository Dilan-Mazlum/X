const tweets = [
    {
        thumbnail: '/img/profile-pic.png',
        user: 'Dilan Mazlum',
        username: 'dilanmazlum6',
        date: '23m',
        text: 'Bugün doğa yürüyüşü yaparken muhteşem bir manzara keşfettim! 🌿 Doğanın güzellikleri karşısında kendimi şanslı hissediyorum. Siz de doğada geçirdiğiniz anları paylaşır mısınız?',
        hashtags:['Doğa', 'Manzara','Yürüyüş'],
        image: '',
        replyCount: 0,
        retweetCount: 0,
        againCount : 34,
        favCount: 0,
        shareCount:null,
        statisticsCount: null
    },
    {
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoYbLr7IzgYY2thQRsZSVMow415ZW3MHDFyoOQZekPw&s',
        user: 'Solcu Gazete',
        username: 'solcugazete',
        date: '67s',
        text: ' Erdal Beşikçioğlu, öğle yemeklerini belediye yemekhanesinde çalışanlarla birlikte yemeye başladı.',
        hashtags:[],
        image: 'https://pbs.twimg.com/media/GLdmng0WUAAjLQB?format=jpg&name=medium',
        replyCount: 2,
        retweetCount: 10,
        againCount : 7,
        favCount: 199,
        shareCount:null,
        statisticsCount: null
    },

    {
        thumbnail: '/img/Personnel image 4483.jpg',
        user: 'Deniz Yılmaz',
        username: '@dnzylmz',
        date: '7h',
        text: 'Gününüzü renklendirmek için güzel bir kahve ve kitap ile başlayın! ☕️📚.',
        hashtags:['PazartesiMotivasyonu'],
        image: '',
        replyCount: 5,
        retweetCount: 9,
        againCount : 5,
        favCount: 111,
        shareCount:null,
        statisticsCount: null
    },

    {
        thumbnail: '/img/person3.jpg',
        user: 'Cemal Arslan',
        username: '@ArslanCemal ',
        date: '10h',
        text: 'Hayatın güzelliklerini keşfetmek için yeni bir haftaya hazır mısınız? 💫',
        hashtags:['YeniBaşlangıçlar'],
        image: 'https://i.pinimg.com/736x/56/8c/0a/568c0a645b3a60dcd4c781125c69b632.jpg',
        replyCount: 777,
        retweetCount: 97,
        againCount : 24,
        favCount: 69,
        shareCount:null,
        statisticsCount: null
    },
    {
        thumbnail: 'https://img.odatv.com/rcman/Cw820h461q95gm/storage/files/images/2024/04/16/tfvd-wkhj.jpg',
        user: 'Elon Musk',
        username: '@ElonMusk',
        date: '2m',
        text: ' 🚀 SpaceX, Starship roketinin yeni bir test uçuşunu başarıyla tamamladı!🛰️ Bu önemli adım, insanlı Ay ve Mars misyonları için heyecan verici bir ilerleme sağlıyor. ',
        hashtags:['SpaceX','StarShip','UzayKeşfi'],
        image: 'https://i0.wp.com/www.dijitalgundem.net/wp-content/uploads/2023/08/SpaceX.png?fit=1200%2C675&ssl=1',
        replyCount: 22,
        retweetCount: 609,
        againCount : 340,
        favCount: 298,
        shareCount:null,
        statisticsCount: null
    } 
]

tweets.forEach((tweet, key) => {
    const mainDiv = document.createElement("div")
    mainDiv.classList.add('x')
    const thumbnailImage = document.createElement("img")
    thumbnailImage.classList.add("thumbnail-image")
    thumbnailImage.src = tweet.thumbnail
    const main = document.querySelector('.tweets')
    const XMain = document.createElement("div")
    XMain.classList.add('x-main')
    const XHeader = document.createElement("div")
    XHeader.classList.add('x-header')
    const XName = document.createElement("div")
    XName.classList.add('x-name')
    XName.textContent = tweet.user
    const XUserName = document.createElement("div")
    XUserName.classList.add('x-user-name')
    XUserName.textContent = tweet.username
    const XTime = document.createElement("div")
    XTime.classList.add('x-time')
    XTime.textContent = tweet.date
    const content = document.createElement("div")
    content.classList.add("x-content")
    const text = document.createElement("span")
    text.classList.add("text")
    text.textContent = tweet.text
    const tweetImage = document.createElement("img")
    tweetImage.classList.add("cont-img")
    tweetImage.src = tweet.image
    mainDiv.appendChild(thumbnailImage)
    XHeader.appendChild(XName)
    XHeader.appendChild(XUserName)
    XHeader.appendChild(XTime)
    XMain.appendChild(XHeader)
    content.appendChild(text)
    const hashtagsDiv = document.createElement("div")
    hashtagsDiv.classList.add("hashtahgs")
    tweet.hashtags.forEach((hashtag) => {
        const hashtagSpan = document.createElement("span")
        hashtagSpan.classList.add("hashtag")
        hashtagSpan.textContent = "#" + hashtag
        hashtagsDiv.appendChild(hashtagSpan)
    })
    content.appendChild(hashtagsDiv)
    content.appendChild(tweetImage)
    XMain.appendChild(content)

    const reactionDiv = document.createElement("div")
    reactionDiv.classList.add("reaction")
    const replyDiv = document.createElement("div")
    replyDiv.classList.add("replyDiv")
    const replyIcon = document.createElement("span")
    replyIcon.classList.add('material-symbols-outlined')
    replyIcon.classList.add('icon')
    replyIcon.classList.add('reply')
    replyIcon.textContent = 'chat_bubble'
    const replyCount = document.createElement("span")
    replyCount.textContent = tweet.replyCount
    replyIcon.addEventListener("click", function() {
        replyCount.textContent = Number(replyCount.textContent) + 1;
    })

    replyDiv.appendChild(replyIcon)
    replyDiv.appendChild(replyCount)
    reactionDiv.appendChild(replyDiv)


    const againDiv = document.createElement("div")
    againDiv.classList.add("againDiv")
    const againIcon = document.createElement("span")
    againIcon.classList.add('material-symbols-outlined')
    againIcon.classList.add('icon')
    againIcon.classList.add('again')
    againIcon.textContent = 'repeat'
    const againCount = document.createElement("span")
    againCount.textContent = tweet.againCount
    againIcon.addEventListener("click", function() {
        againCount.textContent = Number(againCount.textContent) + 1;
    })
    againDiv.appendChild(againIcon)
    againDiv.appendChild(againCount)
    reactionDiv.appendChild(againDiv)

    const againSubContent = document.createElement("div");
    againSubContent.classList.add("againSubContent");
    const sendAgain = document.createElement("span");
    const quote = document.createElement("span");
    const sendAgainIcon = document.createElement("span");
    sendAgainIcon.classList.add("material-symbols-outlined");
    sendAgainIcon.textContent = "repeat";
    sendAgain.classList.add("sendAgain");
    sendAgain.textContent = "Yeniden Gönder";
  
    const quoteIcon = document.createElement("span");
    quoteIcon.classList.add("material-symbols-outlined");
    quoteIcon.textContent = "border_color";
    quote.classList.add("quote");
    quote.textContent = "Alıntıla";

    
  againIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    if (
      againSubContent.style.display === "none" ||
      againSubContent.style.display === ""
    ) {
      againSubContent.style.display = "flex";
    }
  });

  const favoriteDiv = document.createElement("div")
  favoriteDiv.classList.add("favoriteDiv")
  const favoriteIcon = document.createElement("span")
  favoriteIcon.classList.add('material-symbols-outlined')
  favoriteIcon.classList.add('icon')
  favoriteIcon.classList.add('favorite')
  favoriteIcon.textContent = 'favorite'
  const favoriteCount = document.createElement("span")
  favoriteCount.textContent = tweet.favCount
  favoriteIcon.addEventListener("click", function() {
      favoriteCount.textContent = Number(favoriteCount.textContent) + 1;
  })
  favoriteDiv.appendChild(favoriteIcon)
  favoriteDiv.appendChild(favoriteCount)
  reactionDiv.appendChild(favoriteDiv)




    const retweetDiv = document.createElement("div")
    retweetDiv.classList.add("chartDiv")
    const retweetIcon = document.createElement("span")
    retweetIcon.classList.add('material-symbols-outlined')
    retweetIcon.classList.add('icon')
    retweetIcon.classList.add('chart')
    retweetIcon.textContent = 'grouped_bar_chart'
    const retweetCount = document.createElement("span")
    retweetCount.textContent = tweet.retweetCount
    retweetIcon.addEventListener("click", function() {
        retweetCount.textContent = Number(retweetCount.textContent) + 1;
    })
    retweetDiv.appendChild(retweetIcon)
    retweetDiv.appendChild(retweetCount)
    reactionDiv.appendChild(retweetDiv)

    const firstDiv = document.createElement("div")
    firstDiv.classList.add("First")
    reactionDiv.appendChild(firstDiv)
    firstDiv.appendChild(replyDiv)
    firstDiv.appendChild(againDiv)
    firstDiv.appendChild(favoriteDiv)
    firstDiv.appendChild(retweetDiv)


    


    const shareDiv = document.createElement("div")
    shareDiv.classList.add("bookmarkDiv")
    const shareIcon = document.createElement("span")
    shareIcon.classList.add('material-symbols-outlined')
    shareIcon.classList.add('bookmark')
    shareIcon.textContent = 'bookmark'
    const shareCount = document.createElement("span")
    shareCount.textContent = tweet.shareCount
    shareDiv.appendChild(shareIcon)
    shareDiv.appendChild(shareCount)
    reactionDiv.append(shareDiv)

    
    const statisticsDiv = document.createElement("div")
    statisticsDiv.classList.add("shareDiv")
    const statisticsIcon = document.createElement("span")
    statisticsIcon.classList.add('material-symbols-outlined')
    statisticsIcon.classList.add('share')
    statisticsIcon.textContent = 'ios_share'
    const statisticsCount = document.createElement("span")
    statisticsCount.textContent = tweet.statisticsCount
    statisticsDiv.appendChild(statisticsIcon)
    statisticsDiv.appendChild(statisticsCount)
    reactionDiv.append(statisticsDiv)

    

    const secondDiv = document.createElement("div")
    secondDiv.classList.add("second")
    reactionDiv.appendChild(secondDiv)
    secondDiv.appendChild(shareDiv)
    secondDiv.appendChild(statisticsDiv)

    XMain.appendChild(reactionDiv)
    mainDiv.appendChild(XMain)

    main.appendChild(mainDiv)
    console.log(main)
})


const happend=document.querySelector('#wht');
happend.addEventListener("focus",whtHappend);

function whtHappend(){
    console.log('odaklandı');

};

const sendBtn = document.querySelector('.btn-what-send');
const happen=document.querySelector('#wht');

happen.addEventListener('keypress',function(){

    if ( sendBtn===null){
        sendBtn.style.backgroundColor='rgb(29, 155, 240)'
       
    }else{
        sendBtn.style.backgroundColor='#199cf3'
        sendBtn.style.cursor='pointer'

    }
 
   console.log('Submit');
});

