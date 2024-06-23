function communicateKindness() {
    let kindWords = {};
    kindWords.curator = prompt("Who is the author of such kind words?");
    kindWords.observer = prompt("To whom, what or where are you sending this kindness to?")
    kindWords.message = prompt("Share your words of kindness here.");
  
    pricelessKindness.innerHTML = `Greetings, <em>${kindWords.observer}</em>!<br>
    <br> I hope this finds you at a time when you can cherish it most. ${kindWords.message}. I mean this sincerely. <br>
    <br>
    <br> Warmest regards,<br><strong> ${kindWords.curator}</strong>`
  
    someEncouragement.style.color = "#ffffff";
    someEncouragement.style.backgroundColor = "transparent";
    pricelessKindness.style.color = "#fffffff";
    pricelessKindness.style.backgroundColor = "transparent";
    
  }
  
  keepItKind.onclick = communicateKindness;