

import './styles.css';



// chessboard layout

//Coloring

function coloring() {
    const color = document.querySelectorAll('.squares')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(8, 8, 57)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(101, 101, 153)'
        }

    })
}
coloring()












export default function Chessboard() {
    return <div>Hello!</div>
}