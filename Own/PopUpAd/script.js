(()=>{
  window.addEventListener('load',()=>{
    var container = document.querySelector('.container');
  
    function openPopup() {
        //  document.getElementById("popup").style.display = "flex";
         var popup =  document.createElement('div');
         popup.classList.add('popup');
         popup.id = 'popup';
         var popupContent =  document.createElement('div');
         popupContent.classList.add('popup-content');
         var closeBtn = document.createElement('button');
         closeBtn.innerHTML = '&times;';
         closeBtn.classList.add('close-btn');
         closeBtn.addEventListener('click',closePopup);
         popupContent.appendChild(closeBtn);
         var popupHeader = document.createElement('h2');
         popupHeader.innerHTML = 'Special Offer!';
         var popupParagraph = document.createElement('p');
         popupParagraph.innerHTML = 'Get 10% off on your first purchase!';
         var popupButton = document.createElement('button');
         popupButton.innerHTML = 'Shop Now!';
         popupContent.appendChild(popupHeader);
         popupContent.appendChild(popupParagraph);
         popupContent.appendChild(popupButton);
         popup.appendChild(popupContent);
         container.appendChild(popup);
    }
    
    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }
  
    document.querySelector('.container> .content >h1').addEventListener('click',openPopup);
  });
})()