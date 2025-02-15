var image = document.getElementById("map");
//dfGdl2cF01g

var canvas = document.getElementById("myCanvas");
var markers = document.getElementById(".marker");
const infoBox = document.getElementById("info-box");
var infoCard = document.getElementById("info-card");
const infoText = document.getElementById("info-text");
var cardText = document.getElementById("card_text");
var cardTitle = document.getElementById(".card-title");
var cardLocation = document.getElementById(".card_location");

// Định nghĩa hàm để lấy chiều rộng của trình duyệt
function getWindowWidth() {
  return document.documentElement.clientWidth;
}
function getWindowHeight() {
  return document.documentElement.clientHeight;
}

window.onload = function () {
  var widthW = (canvas.width - image.width) / 2;
  var heightW = (canvas.height - image.height) / 2;

  // data
  // data
  // Tạo một đối tượng chứa thông tin cho từng điểm đánh dấu
  const markerData = {
    marker1: {
      x: 1206,
      y: 292,

      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30661.008822904496!2d108.01087353605213!3d16.136631307566265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31418bd3ca7c84c1%3A0xb304c8f2904e86f5!2zTMOgbmcgTcOq!5e0!3m2!1svi!2s!4v1713952355600!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      img: "./img/talanggianbi/cautreo.png",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/C%E1%BA%A7u+S%E1%BA%ADp,+th%C3%B4n+T%C3%A0+Lang,+%C4%90T601,+Ho%C3%A0+B%E1%BA%AFc,+H%C3%B2a+Vang,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.1195584,107.9791313,837m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3141f4cf43976ef3:0x23b8fcca6c927a63!8m2!3d16.1195585!4d107.9840022!16s%2Fg%2F11g6bk0tq0?entry=ttu",
      title: "Cầu Sắt Cổ",
      description: "",
    },
    marker2: {
      x: 1152,
      y: 295,
      tt: 3,
      img: "./img/talanggianbi/cotindetthocam.jpg",
      radius: 10,
      hrefMapinGoogle: "https://maps.app.goo.gl/fywJTYLMysoKAiLDA",
      title: "Nhà cô Tin - Dệt thổ cẩm",
      description:
        "Dệt thổ cẩm là bản sắc văn hóa độc đáo của đồng bào Cơ Tu. Lúc bấy giờ, trong làng có khoảng hơn 40 người làm nghề dệt thổ cẩm và cô Tin - nghệ nhân dệt thổ cẩm là một trong số đó. Khi đến đây, chúng ta sẽ được hướng dẫn cách dệt vải thổ cẩm, nhận dạng áo thổ cẩm cho nam bằng những hình sọc dọc, áo nữ là hình sọc ngang. Cô Tin sẽ mất khoảng một tháng để làm ra một bộ quần áo truyền thống bằng thổ cẩm, Vào lễ cưới hỏi, nhà trai sẽ mang theo sính lễ như vòng cổ đồng, cườm hạt, vài lít rượu, cau trầu, heo và gà đến nhà gái. Nhà gái sẽ đáp lại sính lễ như gà, xôi, cau trầu và 1 lít rượu. Khách mừng đám cưới không mừng phong bì mà mừng hiện vật như gà, rượu và 10 lon gạo. Người Cơ Tu thời xưa có phong tục nhuộm răng đen để giúp răng chắc khỏe và là nét đẹp văn hóa truyền thống.",
    },
    marker3: {
      x: 1118,
      y: 300,
      img: "../images/noinfomation.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/Th%C3%B4n+gi%C3%A0n+b%C3%AD+ho%C3%A0+B%E1%BA%AFc+huy%E1%BB%87n+ho%C3%A0+vang/@16.1179841,107.9809055,17z/data=!3m1!4b1!4m6!3m5!1s0x3141f58e1887a83b:0xcda33510bd9f645c!8m2!3d16.1179841!4d107.9827977!16s%2Fg%2F11swpdhykn?hl=vi-VN&entry=ttu",
      title: "Cổng Thôn Giàn bí",
      description: "",
    },
    marker4: {
      x: 1022,
      y: 282,
      tt: 4,
      img: "./img/talanggianbi/conauche.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/16%C2%B007'13.5%22N+107%C2%B059'21.2%22E/@16.120413,107.9881233,418m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d16.120413!4d107.989227?entry=ttu",
      title: "Cô Chọn nấu Chè dây",
      description:
        "Cô Chọn làm nghề chế biến chè dây được 8 năm. Cô cho biết chè dây có nhiều công dụng như chữa bệnh dạ dày, viêm gan B, tiểu đường… Chè dây là đặc sản của xã Hòa Bắc. Cách chế biến chè dây khá đơn giản, qua 03 công đoạn chính là: (1) băm thân chè, (2) phơi khô chè và (3) rang chè. Nếu như khi pha trà chúng ta thường dùng nước sôi tráng sơ qua, còn với chè dây thì không vì khi tráng sẽ làm mất lớp men vị thuốc của chè. Cứ vào mùa, cô Chọn cùng với bà con sẽ lên rừng hái chè, sau đó chế biến ngay để chè giữ được hương vị thơm ngon nhất. Cứ 10kg chè tươi, sau khi rang xong ra được 2kg chè thành phẩm với mức giá khoảng  200.000 đồng/kg.",
    },
    marker5: {
      x: 1005,
      y: 342,
      tt: 1,
      img: "./img/talanggianbi/nhaguoitalang.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/16%C2%B007'11.5%22N+107%C2%B059'14.5%22E/@16.119848,107.98655,418m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d16.119848!4d107.987361?entry=ttu",
      title: "Nhà Gươl thôn Tà Lang",
      description:
        "Nhà Gươl thôn Tà Lang, xã Hòa Bắc, huyện Hoà Vang, TP. Đà Nẵng là địa điểm phục vụ du khách tham quan các loại hình văn hóa truyền thống, trưng bày các sản phẩm làng nghề và là nơi tổ chức các lễ hội của đồng bào dân tộc Cơ Tu... Đối với đồng bào Cơ Tu, nhà Gươl chính là ngôi nhà chung của bản làng và còn được xem là linh hồn của làng. Đây là nơi thờ các vị thần linh như thần rừng, thần đất, ông bà tổ tiên, với mong muốn cầu mong mưa thuận gió hòa, dân làng gặp nhiều may mắn Trong văn hóa của đồng bào Cơ Tu, phụ nữ không được bước lên nhà Gươl, vai trò của phụ nữ và đàn ông rất khác nhau, phụ nữ là người nấu đồ cúng và đàn ông sẽ dâng đồ cúng lên nhà Gươl. Mâm lễ cúng gồm heo, gà, cá sông, bánh sừng trâu, bánh lam. Lễ hội quan trọng của người Cơ Tu gồm có “Lễ hội mừng lúa mới” và “Đâm trâu”. Đây là lễ hội lớn nhất của đồng bào Cơ Tu.  Người Cơ Tu của cả 3 làng sẽ dựng cây nêu, tập trung tại nhà Gươl và cùng múa vũ điệu “tung tung za zá”, sau đó sẽ “Đâm trâu”. Cũng giống người Kinh, người Cơ Tu cũng có lễ  “Tất niên” vào mỗi dịp cuối năm âm lịch. Đồng bào Cơ Tu tại khu vực Tà Lang - Giàn Bí sẽ tập trung tại nhà Gươl để dự lễ cúng. Người Cơ Tu thờ ảnh của Bác Hồ. Bàn thờ của Già làng sẽ có một chén gạo và cau trầu xung quanh. Vào tháng 4 hàng năm, chén gạo sẽ được thay bởi lúa mới gặt về.",
    },
    marker6: {
      x: 969,
      y: 285,
      tt: 7,
      img: "./img/talanggianbi/homestayalang.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/Homestay+Alang+Nhu/@16.1206275,107.9844736,17z/data=!3m1!4b1!4m6!3m5!1s0x3141f55004fcaaed:0x8b491ec7267c1971!8m2!3d16.1206275!4d107.9870485!16s%2Fg%2F11h7pzl39q?hl=vi-VN&entry=ttu",
      title: "Homestay ALăng Như",
      description:
        "Homestay ALăng Như nằm tại thôn Giàn Bí, xã Hòa Bắc, huyện Hòa Vang do anh Đinh Văn Như làm chủ. Homestay được thiết kế theo kiểu nhà sàn, sử dụng các vật liệu tự nhiên như tre, gỗ, đá. Homestay có hai tầng: tầng 1 được sử dụng cho ăn uống và sinh hoạt chung; tầng 2 là khu vực phòng ngủ hướng ra phía sông Cu Đê. Homestay có khoảng sân rộng rãi thuận tiện cho việc cắm trại cũng như tổ chức các trò chơi, đốt lửa trại. Ngoài ra, du khách có thể thưởng thức những món ăn đặc trưng của người đồng bào Cơ Tu như bánh sừng trâu, cá suối, gà nướng…",
    },
    marker7: {
      x: 929,
      y: 293,
      img: "../images/noinfomation.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+MN+Ho%C3%A0+B%E1%BA%AFc,+%C4%91i%E1%BB%83m+tr%C6%B0%E1%BB%9Dng+Gi%C3%A0n+B%C3%AD/@16.1205504,107.9103448,13z/data=!4m7!3m6!1s0x3141f5006a3a51e3:0x6a3fa835de9d456!8m2!3d16.1205504!4d107.9865625!15sChNUcsaw4budbmcgTeG6p20gTm9ukgEJcHJlc2Nob29s4AEA!16s%2Fg%2F11vjw_s9zt?hl=vi-VN&entry=ttu",
      title: "Trường Mầm Non",
      description: "",
    },
    marker8: {
      x: 844,
      y: 313,
      tt: 6,
      img: "./img/talanggianbi/homestaythihong.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/Homestay+Z%C6%A1+R%C3%A2m+Th%E1%BB%8B+H%E1%BB%93ng/@16.1202308,107.9828444,17z/data=!3m1!4b1!4m6!3m5!1s0x3141f5defd4b6507:0xea46ef685b24aa5e!8m2!3d16.1202308!4d107.9854193!16s%2Fg%2F11ssy8y8gg?hl=vi-VN&entry=ttu",
      title: "Homestay Thị Hồng",
      description:
        "Homestay Thị Hồng (Zơ Răm Thị Hồng) có diện tích khoảng 100m2, thuộc thôn Tà Lang, xã Hòa Bắc. Homestay được xây dựng theo mô hình nhà sàn của người đồng bào Cơ Tu gồm hai tầng: tầng 1 để tiếp khách, ăn uống và sinh hoạt cộng đồng; tầng 2 có 4 phòng ngủ, mỗi phòng sẽ có 2 giường, khu vực nhà vệ sinh riêng. Không gian homestay khá yên tĩnh, hòa mình giữa núi rừng, không khí mát mẻ quanh năm. Khi đến đây du khách sẽ được thưởng thức những đặc sản núi rừng như: cá liên, ốc đá, lá sắn xào sả ớt, bánh sừng trâu, cơm lam, ếch rừng…",
    },
    marker9: {
      x: 669,
      y: 198,
      tt: 5,
      img: "./img/talanggianbi/vungbot.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/V%C5%A9ng+B%E1%BB%8Dt,+H%C3%B2a+B%E1%BA%AFc,+%C4%90%C3%A0+N%E1%BA%B5ng/@16.1214688,107.9806948,17z/data=!3m1!4b1!4m6!3m5!1s0x3141f57e2165fe37:0x2c535e03e2aa65fb!8m2!3d16.1214688!4d107.9832697!16s%2Fg%2F11s3wgf_gd?entry=ttu",
      title: "Vũng Bọt",
      description:
        "Vũng Bọt nằm ở hạ lưu sông Nam, sông Bắc thuộc địa bàn Thôn Tà Lang - Giàn Bí, xã Hòa Bắc, huyện Hòa Vang, TP. Đà Nẵng. Vũng Bọt là một kiệt tác của thiên nhiên được bao quanh bởi những ngọn núi đá tạo thành hình ảnh hòn non bộ tự nhiên. Nơi đây có khí hậu quanh năm mát mẻ, là điểm đến trải nghiệm lý tưởng.",
    },
    marker10: {
      x: 697,
      y: 368,
      img: "../images/noinfomation.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/C%E1%BA%A7u+S%E1%BA%ADp,+th%C3%B4n+T%C3%A0+Lang,+%C4%90T601,+Ho%C3%A0+B%E1%BA%AFc,+H%C3%B2a+Vang,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam/@16.1195585,107.9814273,837m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3141f4cf43976ef3:0x23b8fcca6c927a63!8m2!3d16.1195585!4d107.9840022!16s%2Fg%2F11g6bk0tq0?entry=ttu",
      title: "Cầu Sập",
      description: "",
    },
    marker111: {
      x: 609,
      y: 519,
      img: "./img/talanggianbi/conglangtalang.png",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/Th%C3%B4n+gi%C3%A0n+b%C3%AD+ho%C3%A0+B%E1%BA%AFc+huy%E1%BB%87n+ho%C3%A0+vang/@16.1179841,107.9765605,1673m/data=!3m1!1e3!4m6!3m5!1s0x3141f58e1887a83b:0xcda33510bd9f645c!8m2!3d16.1179841!4d107.9827977!16s%2Fg%2F11swpdhykn?entry=ttu",
      title: "Cổng làng tà lang",
      description: "",
    },
    marker12: {
      x: 658,
      y: 532,
      img: "./img/talanggianbi/truongtieuhoc.png",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+ti%E1%BB%83u+h%E1%BB%8Dc+ho%C3%A0+b%E1%BA%AFc/@16.1176021,107.9827119,296m/data=!3m1!1e3!4m6!3m5!1s0x3141f56571df0a69:0x71380bd5d9d74b07!8m2!3d16.1176426!4d107.9833632!16s%2Fg%2F11kqn39k4n?entry=ttu",
      title: "Trường tiểu Học",
      description:
        "Trường Tiểu học Hòa Bắc được xây dựng từ năm 2004, với cơ sở gồm 10 phòng làm việc, 8 phòng học, 1 bếp ăn bán trú, phòng ăn, ngủ cho học sinh và phòng máy vi tính, trên diện tích 3.214m2, đảm bảo cho hơn 300 em học sinh học tập.  ",
    },
    marker13: {
      x: 544,
      y: 516,
      img: "./img/talanggianbi/cefehaiyen.png",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/C%C3%A0+Ph%C3%AA+H%E1%BA%A3i+Y%E1%BA%BFn/@16.1177284,107.980527,17z/data=!4m14!1m7!3m6!1s0x3141f5fd71fec6a7:0xf85b1ce5ca3aa161!2sTaBi+Retreat!8m2!3d16.1162486!4d107.9783162!16s%2Fg%2F11k51h8v3d!3m5!1s0x3141f57e381bc873:0x12c159fdbf8a4e02!8m2!3d16.1175917!4d107.9810465!16s%2Fg%2F11ppdxlbcl?hl=vi-VN&entry=ttu",
      title: "Tạp Hóa Hải Yến",
      description: "",
    },
    marker14: {
      x: 460,
      y: 555,
      tt: 8,
      img: "./img/talanggianbi/nhaguoi.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/16%C2%B007'01.4%22N+107%C2%B058'47.2%22E/@16.1170506,107.9798579,166m/data=!3m1!1e3!4m4!3m3!8m2!3d16.117057!4d107.979779?entry=ttu",
      title: "Nhà Gươl thôn Giàn Bí",
      description:
        "Nhà Gươl thôn Giàn Bí là nơi lưu giữ văn hóa truyền thống, trưng bày các sản phẩm của người địa phương. “Gươl” trong tiếng Cơ Tu có nghĩa là cộng đồng, nhà Gươl được xem như trái tim của Làng. Vậy nên các làng của người Cơ Tu đều phải có nhà Gươl. Nhà Gươl được thiết kế theo kiểu nhà sàn, trụ bởi một cây cột cái ở giữa và tám cây cột con ở xung quanh. Mái nhà được lợp bằng lá tự nhiên, sàn nhà lát bằng tre cật chẻ mỏng, giữa các thanh tre có một độ hở nhất định để tạo nên sự thông thoáng. Mái nhà thường thường được trang trí bằng những hình tượng đơn giản như gà trống hay tổ hợp gắn kết nhiều tượng với nhau như tượng người, tượng đầu trâu. Dưới mái nhà Gươl, những hình ảnh chạm khắc tỉ mỉ như những tác phẩm nghệ thuật sinh động, mỗi tác phẩm tái hiện đời sống lao động, văn hóa của một dân tộc giàu bản sắc giữa núi rừng. Cây nêu (x'nur) của người Cơ Tu cũng là một sản phẩm mỹ thuật thể hiện tài nghệ trang trí, điêu khắc của nghệ nhân. Cây được đặt tại sân nhà Gươl, nơi hành lễ.",
    },
    marker15: {
      map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30661.008822904496!2d108.01087353605213!3d16.136631307566265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31418bd3ca7c84c1%3A0xb304c8f2904e86f5!2zTMOgbmcgTcOq!5e0!3m2!1svi!2s!4v1713952355600!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      img: "./img/talanggianbi/dantalu.jpg",
      radius: 10,
      hrefMapinGoogle:
        "https://www.google.com/maps/place/16%C2%B007'00.5%22N+107%C2%B058'44.1%22E/@16.1169204,107.9789529,209m/data=!3m1!1e3!4m4!3m3!8m2!3d16.116807!4d107.978915?entry=ttu",
      x: 395,
      y: 570,
      tt: 2,
      title: "Nghệ nhân đàn Ta Lư",
      description:
        "Khi đặt chân đến nhà ông A Lăng Mỹ - nghệ nhân đàn Ta Lư, chúng ta sẽ được lắng nghe những chia sẻ về sự tích cây đàn Ta Lư huyền thoại của đồng bào Cơ Tu. Cây đàn Ta Lư được làm từ gỗ mít, khá nhẹ. Để làm được đàn, cây gỗ mít phải được trồng hơn 10 năm và có đường kính trên 20cm. Cây đàn được làm thủ công và không quét sơn. Dây đàn có thể là dây cước và dây tơ. Nghệ nhân A Lăng Mỹ đã mất hơn 1 tuần để làm ra nó. Nghệ nhân A Lăng Mỹ nâng niu cây đàn Ta Lư, ông luôn muốn gửi gắm những lời hát của người Cơ Tu đến với khách du lịch, như cách mà ông muốn âm nhạc và đàn Ta Lư mãi mãi trường tồn cùng núi rừng, làng bản, không bao giờ mai một trong văn hóa của đồng bào Cơ Tu .",
    },
  };

  // xử lý vẽ điểm
  var ctx = canvas.getContext("2d");

  ctx.drawImage(image, widthW, heightW);
  for (const key in markerData) {
    const maker = markerData[key];
    maker.x -= 75;
  }

  window.addEventListener("click", function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    // Kiểm tra xem chuột có nằm trong bán kính của marker không
    for (const markerKey in markerData) {
      if (markerData.hasOwnProperty(markerKey)) {
        const marker = markerData[markerKey];
        var distance = Math.sqrt((x - marker.x) ** 2 + (y - marker.y) ** 2);
        ctx.beginPath();

        ctx.arc(marker.x, marker.y, marker.radius, 0, 2 * Math.PI);

        //  ctx.fillStyle = 'red';
        //  ctx.fill();
        var isOutsideMarkers = true;
        if (distance <= marker.radius) {
          infoCard.innerHTML = `

          <div style= "width : 350px ; height: 300px" >
            <div style="display: flex; align-items: center;justify-content: space-between; margin-top: 10px; height : 10px">
            <div style="display: flex;align-items: center;justify-content: center; gap:5px">
            <h2><strong>${marker.title}</strong></h2>
            <a id="mapInGoogle" target="_blank" style="width:30px; height:30px; margin-bottom: 20px;" href="${marker.hrefMapinGoogle}" alt="${marker.title}"><img src="https://img.icons8.com/?size=48&id=kDqO6kPb3xLj&format=gif" alt="Google Maps ${marker.title}"></a> 
            </div>
            <button id="hidden-click" style="cursor: pointer; position: absolute;top: 5px; right: 5px;font-size: 20px;" >x</button>
            </div>


            <br><hr>
            <div style="text-align: justify; max-height:250px; overflow-y:auto">
            <p>${marker.description}</p>
            <br>
            <div>
            <img style="width:200px; height:150px;" src="${marker.img}">
                
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="map-container" class="hidden">
            
            </div>
          
          </div>

          `;
          document
            .getElementById("hidden-click")
            .addEventListener("click", function () {
              infoCard.style.display = "none";
            });
          isOutsideMarkers = false;

          if (
            marker.x <= canvas.width - 376 &&
            marker.y <= canvas.height - 300
          ) {
            infoCard.style.left = event.pageX - 0 + "px";
            infoCard.style.top = event.pageY - 0 + "px";
            infoCard.style.display = "block";
            return;
          } else if (
            marker.x > canvas.width - 376 &&
            marker.y < canvas.height - 300
          ) {
            infoCard.style.left = event.pageX - 370 + "px";
            infoCard.style.top = event.pageY - 2 + "px";
            infoCard.style.display = "block";
            return;
          } else if (
            marker.x < canvas.width - 376 &&
            marker.y > canvas.height - 300
          ) {
            infoCard.style.left = event.pageX - 0 + "px";
            infoCard.style.top = event.pageY - 330 + "px";
            infoCard.style.display = "block";
            return;
          } else if (
            marker.x > canvas.width - 376 &&
            marker.y > canvas.height - 300
          ) {
            infoCard.style.left = event.pageX - 300 + "px";
            infoCard.style.top = event.pageY + 200 + "px";
            infoCard.style.display = "block";
            return;
          }
        }
        // if (isOutsideMarkers) {
        //   infoCard.style.display = "none";
        // }
      }
    }
  });

  // function deleteInfoCard() {
  //   infoCard.style.display = "none";
  //   console.log("oke");
  // }
  var arr = document.querySelectorAll("#goi-y-ta-lang li");
  arr.forEach(function (item, index) {
    console.log(item);
    item.addEventListener("click", function (event) {
      for (const markerKey in markerData) {
        const marker = markerData[markerKey];
        if (marker.tt - 1 == index) {
          console.log(marker);
          infoCard.innerHTML = `

          <div style= "width : 350px ; height: 300px" >
            <div style="display: flex; align-items: center;justify-content: space-between; margin-top: 10px; height : 10px">
            <div style="display: flex;align-items: center;justify-content: center; gap:5px">
            <h2><strong>${marker.title}</strong></h2>
            <a id="mapInGoogle" target="_blank" style="width:30px; height:30px; margin-bottom: 20px;" href="${marker.hrefMapinGoogle}" alt="${marker.title}"><img src="https://img.icons8.com/?size=48&id=kDqO6kPb3xLj&format=gif" alt="Google Maps ${marker.title}"></a> 
            </div>
            <button id="hidden-click" style="cursor: pointer; position: absolute;     top: 5px;
            right: 5px;
            font-weight: bold;
            font-size: 20px;" >x</button>
            </div>


            <br><hr>
            <div style="text-align: justify; max-height:250px; overflow-y:auto">
            <p>${marker.description}</p>
            <br>
            <div>
            <img style="width:200px; height:150px;" src="${marker.img}">
                
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div id="map-container" class="hidden">
            
            </div>
          
          </div>

          `;
          document
            .getElementById("hidden-click")
            .addEventListener("click", function () {
              infoCard.style.display = "none";
            });
          infoCard.style.position = "absolute";
          infoCard.style.display = "block";
          infoCard.style.top = marker.y + "px";
          infoCard.style.left = marker.x + "px";

          event.preventDefault();
          var offsetTop = infoCard.offsetTop;
          var windowHeight = window.innerHeight;
          var halfWindowHeight = windowHeight / 2;
          var scrollTo = offsetTop - halfWindowHeight;
          window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
          });
        }
      }
    });
  });
};
