/**
 * ==============================================================================
 * ☕ 紅仙水 (HAND DRIP COFFEE) - 單品手沖咖啡菜單資料庫
 * 包含：
 * 1. window.COFFEE_MENU_DATA : 最新核定精選 9 款豆單（含世界冠軍 Jacky Lai 特選）
 * 2. window.CANVA_ORIGINAL_MENU_DATA : Canva PDF 原始 12 款手沖完整復刻版
 * ==============================================================================
 */

// 1. 最新核定精選 9 款豆單 (世界冠軍特選 Option 3 + G1日曬 + 拿鐵品項對齊)
window.COFFEE_MENU_DATA = {
  brand: {
    enTitle: "HAND DRIP COFFEE",
    name: "紅 仙 水",
    menuTitle: "嚴選單品手沖咖啡價目表",
    footerSlogan: "紅仙水 直火烘焙咖啡 ✦ 匠心手沖 ✦ 每週新鮮烘焙"
  },

  notices: [
    { type: "cash", text: "僅限現金支付" },
    { type: "latte", text: "標示 [可拿鐵] 品項 +20元 可製作成拿鐵" },
    { type: "package", text: "熟豆包裝：200g / 濾掛包：10包裝" }
  ],

  items: [
    {
      id: "1",
      name: "衣索比亞 耶加雪菲 夏茉卡",
      dotName: "衣索比亞.耶加雪菲.夏茉卡",
      process: "水洗 G1",
      roast: "淺焙",
      canLatte: false,
      cashOnly: true,
      notes: "橙花、茉莉花、百香果、血橙、葡萄、熟果",
      cupPrice: 160,
      beansPrice200g: 450,
      dripPrice10pk: 400
    },
    {
      id: "2",
      name: "肯亞 基里尼亞加 kii Factory (巴蒂安)",
      dotName: "肯亞.基里尼亞加.kii Factory (巴蒂安)",
      process: "水洗",
      roast: "淺中焙",
      canLatte: true,
      cashOnly: false,
      notes: "黑醋栗、葡萄柚、蕃茄、紅糖、可可、餘韻鹹甜層次",
      cupPrice: 160,
      beansPrice200g: 500,
      dripPrice10pk: 480
    },
    {
      id: "3",
      name: "哥倫比亞 薇拉省 深紅花語 (粉紅波旁)",
      dotName: "哥倫比亞.薇拉省.深紅花語 (粉紅波旁)",
      process: "水洗",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "細緻花香、甜橙、蜜地瓜、柑橘、莓果酸甜、漬李子、紅糖甜感",
      cupPrice: 160,
      beansPrice200g: 500,
      dripPrice10pk: 480
    },
    {
      id: "4",
      name: "衣索比亞 古吉 世界冠軍 Jacky Lai 特選",
      dotName: "衣索比亞.古吉.世界冠軍 Jacky Lai 特選",
      process: "日曬 G1",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "藍莓果醬、巨峰葡萄、完熟水蜜桃、佛手柑、玫瑰花香、層次豐富飽滿",
      cupPrice: 170,
      beansPrice200g: 600,
      dripPrice10pk: 550
    },
    {
      id: "5",
      name: "哥倫比亞 花境藝伎",
      dotName: "哥倫比亞.花境藝伎",
      process: "水洗",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "茉莉花、薰衣草、百香果、檸檬草、綠茶、棉花糖",
      cupPrice: 170,
      beansPrice200g: 600,
      dripPrice10pk: 550
    },
    {
      id: "6",
      name: "哥倫比亞 玫瑰教堂莊園 (甜蘋果/釋迦)",
      dotName: "哥倫比亞.安蒂歐奇雅.玫瑰教堂莊園 (甜蘋果/釋迦)",
      process: "特殊發酵水洗",
      roast: "淺中焙",
      canLatte: true,
      cashOnly: false,
      notes: "蘋果牛奶、鳳梨釋迦、桃子、芒果乾、鳳梨乾餘韻",
      cupPrice: 180,
      beansPrice200g: 700,
      dripPrice10pk: 620
    },
    {
      id: "7",
      name: "哥倫比亞 天堂莊園 蜜桃荔荔",
      dotName: "哥倫比亞.考卡省.天堂莊園.蜜桃荔荔",
      process: "雙重厭氧",
      roast: "淺焙",
      canLatte: false,
      cashOnly: false,
      notes: "水蜜桃奶茶、水蜜桃優格、玉荷包荔枝、草莓、玫瑰花香",
      cupPrice: 180,
      beansPrice200g: 700,
      dripPrice10pk: 620
    },
    {
      id: "8",
      name: "衣索比亞 西達摩 桃可可",
      dotName: "衣索比亞.西達摩.桃可可",
      process: "酒桶浸漬日曬 G1",
      roast: "淺中焙",
      canLatte: true,
      cashOnly: false,
      notes: "草莓白蘭地酒香、萊姆葡萄冰淇淋、濃縮草莓果醬",
      cupPrice: 200,
      beansPrice200g: 750,
      dripPrice10pk: 650
    },
    {
      id: "9",
      name: "哥倫比亞 雪松莊園 藝伎",
      dotName: "哥倫比亞.雪松莊園.藝伎",
      process: "水洗",
      roast: "淺焙",
      canLatte: false,
      cashOnly: false,
      notes: "橙花、柳橙、香水檸檬、白胡椒",
      cupPrice: 250,
      beansPrice200g: 1000,
      dripPrice10pk: 750
    }
  ]
};

// 2. Canva PDF 原始 12 款手沖完整復刻版 (Pages 2 & 3)
window.CANVA_ORIGINAL_MENU_DATA = {
  brand: {
    enTitle: "HAND DRIP COFFEE",
    name: "紅 仙 水",
    menuTitle: "單品手沖咖啡價目表",
    footerSlogan: "＊ 標示品項+20元可做成拿鐵"
  },

  items: [
    {
      id: "1",
      name: "衣索比亞.西達馬.康卡納處理廠",
      dotName: "衣索比亞.西達馬.康卡納處理廠",
      process: "玫瑰雙重厭氧G1",
      roast: "淺焙",
      canLatte: false,
      cashOnly: false,
      notes: "玫瑰 / 白桃甜香/ 甜桃/蘋果青茶",
      cupPrice: 160,
      beansPrice200g: 530,
      dripPrice10pk: 490,
      pkgSubtext: "(熟豆200g:530 元/ 濾掛一盒10包490元)"
    },
    {
      id: "2",
      name: "哥倫比亞.天堂92莊園.哥倫比亞種",
      dotName: "哥倫比亞.天堂92莊園.哥倫比亞種",
      process: "雙重厭氧",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "水蜜桃優格 / 玉荷苞荔枝 / 草莓 / 玫瑰花香",
      cupPrice: 160,
      beansPrice200g: 500,
      dripPrice10pk: 480,
      pkgSubtext: "(熟豆200G:500 元/ 濾掛一盒10包480元)"
    },
    {
      id: "3",
      name: "肯亞.祈安布.亞拉莊園.珍珠圓豆.",
      dotName: "肯亞.祈安布.亞拉莊園.珍珠圓豆.",
      process: "水洗",
      roast: "淺焙",
      canLatte: false,
      cashOnly: false,
      notes: "柑橘 / 葡萄柚 / 蔓越莓花香 / 酸甜黑醋栗 / 檸檬皮 / 口感濃厚",
      cupPrice: 160,
      beansPrice200g: 500,
      dripPrice10pk: 480,
      pkgSubtext: "(熟豆200g:500 元/ 濾掛一盒10包480元）"
    },
    {
      id: "4",
      name: "衣索比亞.日曬.希達摩G1日曬.阿貝果那.",
      dotName: "衣索比亞.日曬.希達摩G1日曬.阿貝果那. 魯穆達莫.EliasKare.單一小農批次",
      process: "日曬 G1",
      roast: "中淺焙",
      canLatte: false,
      cashOnly: false,
      notes: "藍莓/葡萄,藍莓果醬/熟芒果/佛手柑/烏龍茶韻/庶糖/口感濃厚",
      cupPrice: 160,
      beansPrice200g: 500,
      dripPrice10pk: 480,
      pkgSubtext: "(熟豆200g:500 元/ 濾掛一盒10包480元）"
    },
    {
      id: "5",
      name: "哥倫比亞 花境藝伎.水洗",
      dotName: "哥倫比亞 花境藝伎",
      process: "水洗",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "茉莉花 / 薰衣草 / 百香果 / 檸檬草 / 綠茶 / 棉花糖",
      cupPrice: 170,
      beansPrice200g: 600,
      dripPrice10pk: 550,
      pkgSubtext: "(熟豆200g:600 元/ 濾掛一盒10包550元）"
    },
    {
      id: "6",
      name: "哥倫比亞.安蒂歐奇雅.玫瑰教堂莊園",
      dotName: "哥倫比亞.安蒂歐奇雅.玫瑰教堂莊園",
      process: "甜蘋果/釋迦.特殊發酵.水洗",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "蘋果牛奶 / 鳳梨釋迦 / 桃子 / 芒果乾 / 鳳梨乾餘韻",
      cupPrice: 180,
      beansPrice200g: 700,
      dripPrice10pk: 620,
      pkgSubtext: "(熟豆200g:700 元/ 濾掛一盒10包620元）"
    },
    {
      id: "7",
      name: "哥倫比亞.甜韻蜜瓜.特殊水洗",
      dotName: "哥倫比亞.甜韻蜜瓜",
      process: "特殊水洗",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "哈蜜瓜/ 蜂蜜 / 奶香 / 紅茶 / 綠草/ 棉花糖",
      cupPrice: 180,
      beansPrice200g: 650,
      dripPrice10pk: 570,
      pkgSubtext: "(熟豆200g:650 元/ 濾掛一盒10包570元)"
    },
    {
      id: "8",
      name: "哥倫比亞.安納亞莊園.桃氣甜心",
      dotName: "哥倫比亞.安納亞莊園.桃氣甜心",
      process: "水蜜桃發酵水洗",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "蜜桃/ 杏桃 / 萊姆 / 土芒果 / 綠草/ 棉花糖",
      cupPrice: 180,
      beansPrice200g: 700,
      dripPrice10pk: 620,
      pkgSubtext: "(熟豆200g:700元 / 濾掛一盒10包620元)"
    },
    {
      id: "9",
      name: "哥倫比亞.考卡省.天堂92莊園.",
      dotName: "哥倫比亞.考卡省.天堂92莊園. 粉紅波旁",
      process: "雙重厭氧處理",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "黑莓果醬/甜奶油.乳香/金銀花/鳳梨乾香氣/帶微酸/糖醬口感",
      cupPrice: 180,
      beansPrice200g: 700,
      dripPrice10pk: 620,
      pkgSubtext: "(熟豆200g:700元 / 濾掛一盒10包620元)"
    },
    {
      id: "10",
      name: "哥倫比亞.考卡省.天堂莊園.",
      dotName: "哥倫比亞.考卡省.天堂莊園. 蜜桃荔荔",
      process: "雙重厭氧",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "水蜜桃奶茶 / 水蜜桃優格 / 玉荷包荔枝 / 草莓 / 玫瑰花香",
      cupPrice: 180,
      beansPrice200g: 700,
      dripPrice10pk: 620,
      pkgSubtext: "(熟豆200g:700 / 濾掛一盒10包620元)"
    },
    {
      id: "11",
      name: "衣索比亞.西達摩.桃可可.",
      dotName: "衣索比亞.西達摩.桃可可",
      process: "草莓白蘭地酒桶浸漬.日曬G1",
      roast: "淺焙",
      canLatte: false,
      cashOnly: false,
      notes: "草莓白蘭地酒香 / 萊姆葡萄冰淇淋 / 濃縮草莓果醬",
      cupPrice: 200,
      beansPrice200g: 750,
      dripPrice10pk: 650,
      pkgSubtext: "(熟豆200G:750元/濾掛一盒10包 650元)"
    },
    {
      id: "12",
      name: "哥倫比亞.雪松莊園.藝伎.水洗",
      dotName: "哥倫比亞.雪松莊園.藝伎",
      process: "水洗",
      roast: "淺焙",
      canLatte: true,
      cashOnly: false,
      notes: "橙花/柳橙/香水檸檬/白胡椒",
      cupPrice: 250,
      beansPrice200g: 1000,
      dripPrice10pk: 750,
      pkgSubtext: "(熟豆200G:1000元/濾掛一盒10包 750元)"
    }
  ]
};

// 3. 紅仙水特調飲品 (Special Drinks - A4 第 3 頁)
window.SPECIAL_DRINKS_DATA = {
  header: {
    cloudTitle: "紅仙水特調",
    brandEn: "COFFEE RED",
    brandJp: "コーヒーレッド"
  },
  items: [
    {
      id: "drink-01",
      name: "冰美式",
      enName: "ICE AMERICAN",
      price: "100元",
      priceNum: 100,
      imageFile: "./assets/drink_ice_americano.png",
      imageKey: "drinkIceAmericano"
    },
    {
      id: "drink-02",
      name: "抹茶奶蓋",
      enName: "MATCHA LATTE",
      subName: "小山園抹茶",
      price: "150元",
      priceNum: 150,
      imageFile: "./assets/drink_matcha_latte.png",
      imageKey: "drinkMatchaLatte"
    },
    {
      id: "drink-03",
      name: "幻紫 OREO",
      subName: "小山園抹茶",
      price: "160元",
      priceNum: 160,
      imageFile: "./assets/drink_oreo_matcha.png",
      imageKey: "drinkOreoMatcha"
    },
    {
      id: "drink-04",
      name: "HOT LATTE 熱拿",
      subName: "衣索比亞藝伎豆",
      price: "150元",
      priceNum: 150,
      imageFile: "./assets/drink_hot_latte.png",
      imageKey: "drinkHotLatte"
    }
  ]
};

// 4. 老闆推薦 今日品項 / 甜點輕食 (Bakery & Sweets - A4 第 4 頁)
window.BAKERY_MENU_DATA = {
  header: {
    subTitle: "fresh from the bakery!",
    titlePrefix: "老闆推薦",
    titleHighlight: "今日品項"
  },
  items: [
    {
      id: "bakery-01",
      name: "義式辣雞麵包",
      price: "每份 $ 150元",
      unit: "每份",
      priceNum: 150,
      imageFile: "./assets/food_chicken.png",
      imageKey: "foodChicken"
    },
    {
      id: "bakery-02",
      name: "蒜香起司貝果",
      price: "每個 $ 80元",
      unit: "每個",
      priceNum: 80,
      imageFile: "./assets/food_bagel.png",
      imageKey: "foodBagel"
    },
    {
      id: "bakery-03",
      name: "肉醬軟法",
      price: "每份 $ 120元",
      unit: "每份",
      priceNum: 120,
      imageFile: "./assets/food_bolognese.png",
      imageKey: "foodBolognese"
    },
    {
      id: "bakery-04",
      name: "紅仙布丁",
      price: "每個 $ 100元",
      unit: "每個",
      priceNum: 100,
      imageFile: "./assets/food_pudding.png",
      imageKey: "foodPudding"
    },
    {
      id: "bakery-05",
      name: "好茶捲捲",
      price: "每個 $ 100元",
      unit: "每個",
      priceNum: 100,
      imageFile: "./assets/food_teaswirl.png",
      imageKey: "foodTeaSwirl"
    },
    {
      id: "bakery-06",
      name: "肉桂捲捲",
      badge: "此款純素食者可食用",
      price: "每個 $ 95元",
      unit: "每個",
      priceNum: 95,
      imageFile: "./assets/food_cinnamon.png",
      imageKey: "foodCinnamon"
    }
  ]
};

