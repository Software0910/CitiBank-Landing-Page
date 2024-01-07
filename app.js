

function closeOverlay() {
    document.getElementById('content-overlay').style.top = "-600px";
    document.getElementById('content-overlay').style.transition = "0.9s";
    document.body.style.opacity = "1";
    document.body.backgroundColor = "white";
}



function openOverlay() {
    document.getElementById('content-overlay').style.top = "0px";
    document.getElementById('content-overlay').style.left = "315px";
    document.getElementById('content-overlay').style.transition = "0.3s";
    

}

function closeFeedbackContent() {
    document.getElementById('citi-feedback').style.display = "none";
    document.getElementById('close-x-button').style.display = "none";
}

function openFeedbackContent() {
    document.getElementById('citi-feedback').style.display = "block";
    document.getElementById('close-x-button').style.display = "block";
}




/* grab the accordin button class to display the panel */
    let accordin = document.getElementsByClassName('btn-accrodin');
    for(let i = 0; i < accordin.length; i++) {
        accordin[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if(panel.style.display === 'block') {
                panel.style.display = 'none'
            } else {
                panel.style.display = 'block'
            }
        })
    }


 


   let accordinTwo = document.getElementsByClassName('btn-accrodin-two');
   for(let c = 0; c < accordinTwo.length; c++) {
    accordinTwo[c].addEventListener('click', function() {
        let panelTwo = this.nextElementSibling;
        if(panelTwo.style.display === 'block') {
            panelTwo.style.display = 'none';
        } else {
            panelTwo.style.display = 'block';
        }
    })
   }


   let btn = document.getElementsByClassName('btn-accordin-three')
   for(let a = 0; a < btn.length; a++) {
    btn[a].addEventListener("click", function() {
        let prevPanel = this.previousElementSibling;
         if(prevPanel.style.display === 'none') {
            prevPanel.style.display = 'block';
         } else {
            prevPanel.style.display = "none"
         }
    })
   }


  let accordinFour = document.getElementsByClassName('btn-accordin-four')
  for(let d = 0; d <accordinFour.length; d++) {
    accordinFour[d].addEventListener('click', function() {
        this.classList.toggle('activeThree')
        let panelThree = this.nextElementSibling;
        if(panelThree.style.display === 'block') {
            panelThree.style.display = 'none';
        } else {
            panelThree.style.display = 'block'
        }
    })
  }


    let accordinFive = document.getElementsByClassName('btn-accordin-five');
    for(let f = 0; f < accordinFive.length; f++) {
        accordinFive[f].addEventListener('click', function() {
          let panelFour = this.nextElementSibling;
            if(panelFour.style.display === 'block') {
                panelFour.style.display = 'none';
            } else {
                panelFour.style.display = 'block';
            }
                
        })
    }



    let accordinSix = document.getElementsByClassName('btn-accordin-six');
    for(let g = 0; g < accordinSix.length; g++) {
        accordinSix[g].addEventListener('click', function() {
            let panelFive = this.nextElementSibling;
            if(panelFive.style.display === 'block') {
                panelFive.style.display = 'none';
            } else {
                panelFive.style.display = 'block';
            }
        })
    }

    let accordinSeven = document.getElementsByClassName('btn-accordin-seven');
    for(let h = 0; h < accordinSeven.length; h++) {
        accordinSeven[h].addEventListener('click', function() {
             let fifthPanel = this.previousElementSibling;
             if(fifthPanel.style.display === 'none') {
                fifthPanel.style.display = 'block';
             } else {
                fifthPanel.style.display = 'none';
             }
        })
    }


    let accordinEight = document.getElementsByClassName('btn-accordin-eight');
    for(let s = 0; s < accordinEight.length; s++) {
        accordinEight[s].addEventListener('click', function() {
              let sixPanel = this.nextElementSibling;
              if(sixPanel.style.display === 'block') {
                sixPanel.style.display = 'none';
              } else {
                sixPanel.style.display = 'block'
              }
        })
    }


         
    let accordinTen = document.getElementsByClassName('btn-accordin-ten');
    for(let t = 0; t < accordinTen.length; t++) {
        accordinTen[t].addEventListener('click', function() {
              let panelSeven = this.nextElementSibling;
              if(panelSeven.style.display === 'block') {
                panelSeven.style.display = 'none';
              } else {
                panelSeven.style.display = 'block'
              }
        })
    }


    let accordinEleven = document.getElementsByClassName('btn-accordin-eleven');
    for(let w = 0; w < accordinEleven.length; w++) {
        accordinEleven[w].addEventListener('click', function() {
        let buttonTen = document.getElementById('btn-accordin-ten')
            if(buttonTen.style.display === 'none') {
                buttonTen.style.display = 'block';
            } else {
                buttonTen.style.display = 'none'
            }
               
        })
    }


        
   function btnShowLessContent() {
        btnShowLess()   

        document.getElementById('btn-show-less').style.visibility = "hidden";
        document.querySelector('.btn-accordin-four').style.marginTop = '27rem';
        const dblClick= document.getElementById('btn-accrodin');
        const buttonTwo = document.getElementById('btn-accordin-four')
        dblClick.addEventListener('click', function() {
                if(buttonTwo.style.marginTop === '27rem') {
                    buttonTwo.style.marginTop = '1rem'
                } else {
                    buttonTwo.style.marginTop = '27rem'
                }
        })       
   }
   

 

   function btnShowMore() {
    btnShowLessContent()
    document.getElementById('btn-show-more').style.visibility = "hidden";
    document.getElementById('btn-show-less').style.visibility = "visible";
    document.querySelector('.panel').style.height = "400px";
    document.querySelector('.panel-line').style.marginTop = "230px";
    
   }



   function btnShowLess() {
    document.getElementById('btn-show-more').style.visibility = "visible";
    document.getElementById('btn-show-less').style.visibility = "hidden";
    document.querySelector('.panel').style.height = "280px";
    document.querySelector('.panel-line').style.marginTop = "90px"
    document.querySelector('.btn-accordin-four').style.marginTop = '27rem'

   }


   function showPanelFive() {
        document.getElementById('btn-accordin-six').style.visibility = "hidden";
        document.getElementById('btn-accordin-seven').style.visibility = "visible";
        document.getElementById('panel-four').style.height = '350px';
   }


   function showNoPanelFive() {
    document.getElementById('panel-four').style.height = '280px';
    document.getElementById('btn-accordin-six').style.visibility = 'visible';
    document.getElementById('btn-accordin-seven').style.visibility = 'hidden';
    document.getElementById('panel-five').style.display = 'none';
    
   }

   function showNoPanelSix() {
    document.getElementById('btn-accordin-nine').style.display = 'none';
    document.getElementById('panel-six').style.display = 'none';
    document.getElementById('btn-accordin-nine').style.position = 'absolute';
   }



   function displayShowLess() {
    document.getElementById('btn-accordin-nine').style.display = 'block';
   }



   function displayPanelSeven() {
        document.getElementById('btn-accordin-ten').style.visibility = 'hidden';
        document.getElementById('btn-accordin-eleven').style.visibility = 'hidden';
   }



function removeBtnFinal() {
        document.getElementById('btn-accordin-final').style.visibility = 'visible';
         let btnFinal =  document.getElementById('btn-accordin-eleven');
        if(btnFinal.style.marginTop === '24rem') {
            btnFinal.style.marginTop = '40rem'
        } else {
            btnFinal.style.marginTop = '24rem'
        }
   }




   function displayBtnTen() {
               let ten = document.getElementById('btn-accordin-ten')
               if(ten.style.visibility === 'hidden') {
                  ten.style.visibility = 'visible';
               } else {
                  ten.style.visibility = 'hidden'
               }

            let displayPanelSeven = document.getElementById('panel-seven');
                if(displayPanelSeven.style.display === 'none') {
                displayPanelSeven.style.display = 'block';
               } else {
                displayPanelSeven.style.display = 'none';
            }

            let btnFinal =  document.getElementById('btn-accordin-final');
                 if(btnFinal.style.marginTop === '24rem') {
                    btnFinal.style.marginTop = '40rem'
                 } else {
                btnFinal.style.marginTop = '24rem'
                }
   }

   

   function closeHelpContainer() {
    document.getElementById('Sidenav-Container').style.visibility = 'hidden'
   }

   function openSideNav() {
    document.getElementById('Sidenav-Container').style.visibility = 'visible '
   }

   function displayClickText() {
        let spanText = document.getElementById('checkbox-hidden-text');
              if(spanText.style.display === 'none') {
                 spanText.style.display = 'block'
            } else {
                 spanText.style.display = 'none'
             }
   }

  
  




     