const allAvailableJsonData = [
  [
    " 当時、",
    "私には",
    "一日",
    "一日が",
    "晩年であった。",
    "恋を",
    "したのだ。",
    "そんな",
    "ことは、",
    "全く",
    "はじめてであった。",
    "それより",
    "以前には、",
    "私の",
    "左の",
    "横顔だけを",
    "見せつけ、",
    "私の",
    "おとこを",
    "売ろうと",
    "あせり、",
    "相手が",
    "一分間でも",
    "ためらったが",
    "最後、",
    "たちまち",
    "私は",
    "きりきり舞いを",
    "はじめて、",
    "疾風の",
    "ごとく",
    "逃げ失せる。",
    "けれども",
    "私は、",
    "そのころ",
    "すべてに",
    "だらしなくなっていて、",
    "ほとんど",
    "私の",
    "身に",
    "くっついてしまったかのようにも",
    "思われていた",
    "その",
    "賢明な、",
    "怪我の",
    "少い",
    "身構えの",
    "法を",
    "さえ",
    "持ち堪える",
    "ことができず、",
    "謂わば",
    "手放しで、",
    "節度の",
    "ない",
    "恋を",
    "した。",
    "好きなの",
    "だから",
    "仕様が",
    "ないと",
    "いう",
    "嗄れた",
    "呟きが、",
    "私の",
    "思想の",
    "全部であった。",
    "二十五歳。"],
    [
      "津島は",
      "この",
      "頃何を",
      "見ても、",
      "長くもない",
      "自分の",
      "生命を",
      "測る",
      "尺度の",
      "やうな",
      "気が",
      "してならないのであつた。",
      "好きな",
      "草花を",
      "見ても、",
      "来年の",
      "今頃に",
      "ならないと、",
      "同じやうな",
      "花が",
      "咲かないのだと",
      "思ふと、",
      "それを",
      "待つ心持が",
      "寂しかつた。",
      "一年に",
      "一度しかない、",
      "旬のきまつて",
      "ゐる",
      "筍だとか、",
      "松茸だとか、",
      "さう",
      "云ふものを",
      "食べても、",
      "同じ",
      "意味で",
      "何と",
      "なく",
      "心細く",
      "思ふので",
      "あつた。",
      "不断散歩しつけて",
      "ゐる",
      "通りの",
      "路傍樹の",
      "幹の、",
      "めきめき",
      "太つたのを",
      "見ると、",
      "移植された",
      "時から",
      "もう",
      "十年たらずの",
      "歳月の",
      "たつて",
      "ゐる",
      "ことが、",
      "また",
      "それだけ",
      "自分の",
      "生命を",
      "追詰めて",
      "来て",
      "ゐるのだと",
      "思はれて、",
      "好い",
      "気持は",
      "しないのであつた。",
      "しかし",
      "津島の",
      "やうな年に",
      "なると、",
      "死に",
      "面して",
      "ゐる",
      "肺病患者が、",
      "通例死の",
      "観念と",
      "反対の",
      "側に",
      "結構",
      "脱れて",
      "ゐられると",
      "同じやうに、",
      "比較的年の",
      "観念から",
      "離れが",
      "ちな",
      "日が",
      "過せるのであつた。"]
];


window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  if (slides.length === 0) return;

  for (const slide of slides) {
    //  Lorem Picsum API
    const imageUrl = generateRandomImageUrl();
    slide.querySelector("img").src = imageUrl;

    // ランダムな日付
    const randomDate = generateRandomDate();
    slide.querySelector(".slide_date_wrap").textContent = randomDate;

    // ランダムなテキスト
    const randomText = generateRandomText();
    slide.querySelector("span").textContent = randomText + "。";
  }

  function generateRandomDate() {
    const startDate = new Date(2024, 0, 1);
    const endDate = new Date(2025, 6, 31);
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return randomDate.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

  function generateRandomText(numSourcesToSelect = 1, numTextsPerSource = 10) {
    // 利用可能なデータソースが空の場合
    if (allAvailableJsonData.length === 0) {
        console.warn("利用可能なJSONデータがありません。'allAvailableJsonData'配列を更新してください。");
        return "";
    }

    const selectedSources = [];
    const availableIndices = Array.from({length: allAvailableJsonData.length}, (_, i) => i);

    // ランダムにデータソース（JSON配列）を選択
    for (let i = 0; i < numSourcesToSelect; i++) {
        if (availableIndices.length === 0) break; // 全てのソースを選択し終えた場合
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const sourceIndex = availableIndices.splice(randomIndex, 1)[0]; // 選択したインデックスを削除
        selectedSources.push(allAvailableJsonData[sourceIndex]);
    }
    
    let combinedText = [];

    // 選択された各ソースからランダムにテキストを選んで結合
    for (const sourceData of selectedSources) {
        // 元のデータを変更しないようにコピーを作成
        const clonableData = [...sourceData]; 

        for (let i = 0; i < numTextsPerSource; i++) {
            if (clonableData.length === 0) break;
            const randomIndex = Math.floor(Math.random() * clonableData.length);
            const selectedText = clonableData.splice(randomIndex, 1)[0];
            combinedText.push(selectedText);
        }
    }
    
    return combinedText.join(''); 
}

  function generateRandomImageUrl() {
    const dimensions = [460, 680, 890, 1200, 1600];
    const shapeTypes = ['square', 'landscape', 'portrait'];
  
    const randomShapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
  
    let width;
    let height;
  
    if (randomShapeType === 'square') {
      width = dimensions[Math.floor(Math.random() * dimensions.length)];
      height = width;
    } else {
      let randomIndex1 = Math.floor(Math.random() * dimensions.length);
      let randomIndex2 = Math.floor(Math.random() * dimensions.length);
  
      while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * dimensions.length);
      }
  
      const dim1 = dimensions[randomIndex1];
      const dim2 = dimensions[randomIndex2];
  
      if (randomShapeType === 'landscape') {
        width = Math.max(dim1, dim2);
        height = Math.min(dim1, dim2);
      } else {
        width = Math.min(dim1, dim2);
        height = Math.max(dim1, dim2);
      }
    }
  
    return `https://picsum.photos/${width}/${height}`;
  }

});