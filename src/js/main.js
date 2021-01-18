import './vendor';
import './helpers';

const MAX_VALUE = 100;
const MY_VALUE = 90;

let deg = 180 * MY_VALUE/MAX_VALUE;

function rotateArrow() {
    let temp = 0;

    $('.counter').text(0);
    $('.arrow').css({
        transform: 'rotate(0deg)'
    });

    (function countSkill(temp) {
        if(temp < MY_VALUE) {
            setTimeout(() => {
                countSkill(temp+=1)
                $('.skill-result__counter').text(temp);
            }, 800/MY_VALUE)
        } else {
            return;
        }
    })(temp);

    $('.arrow').css({
        transform: 'rotate(' + deg + 'deg)'
    })
}

rotateArrow()