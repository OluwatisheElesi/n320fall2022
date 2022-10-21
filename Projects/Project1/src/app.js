let main = {

  variables: {
    turn: 'w',
    selectedpiece: '',
    highlighted: [],
    pieces: {
      Wpawn: {
        position: '5_1',
        img: '&#9812;',
        captured: false,
        moved: false,
        type: 'Wking.png'
        
      }
      Wpawn: {
        position: '5_1',
        img: '&#9812;',
        captured: false,
        moved: false,
        type: 'Wpawn'
        
      }
      Wrook: {
        position: '5_1',
        img: '&#9812;',
        captured: false,
        moved: false,
        type: 'Wrook'
        
      }

    }
  }

        function whosTurn(toggle) {

          // PAWN

          if (item.innerText == `${toggle}Bpawn`) {
              item.style.backgroundColor = 'pink'

              if (tog % 2 !== 0 && aup < 800) {

                  if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                      document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                  }

                  if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                      document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                  }

                  if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                      document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'

                  }
              }

              if (tog % 2 == 0 && aup > 100) {

                  if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                      document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                  }
                  if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                      document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                  }
                  if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                      document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'

                  }
              }


          }
        }
