function communicateKindness() {
    let kindWords = {};
    kindWords.curator = prompt("Who is the author of such kind words?");
    kindWords.observer = prompt("To whom, what or where are you sending this kindness to?")
    kindWords.message = prompt("Share your words of kindness here.");
  
    pricelessKindness.innerHTML = `Greetings, ${kindWords.observer}! I hope this finds you at a time when you can cherish it most. ${kindWords.message}. I mean this sincerely. <br> Warmest regards, ${kindWords.curator}`
  
    someEncouragement.style.color = "hsl(300 50 50)";
    someEncouragement.style.backgroundColor = "transparent";
    pricelessKindness.style.color = "hsl (320 24 48)";
    pricelessKindness.style.backgroundColor = "skyblue";
  }
  
  keepItKind.onclick = communicateKindness;