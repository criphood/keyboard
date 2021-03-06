
'use strict'
let keyboard = document.querySelector('#keyboard');
let keys = document.querySelectorAll('.key');
let specialKeys = document.querySelectorAll('.specialKey');
let result = document.querySelector('#result');
let tab = document.querySelector('#tab');
let space = document.querySelector('#space');
let capslock = document.querySelector('#capslock');
let shift = document.querySelectorAll('.shift');
let shiftleft = document.querySelector('#shiftleft');
let shiftright = document.querySelector('#shiftright');
let clear = document.querySelector('#clear');

document.addEventListener('keydown', function(e) {
    if (e.code == 'ShiftLeft') {
        shiftleft.classList.add('keydown');
    } else if (e.code == 'ShiftRight') {
        shiftright.classList.add('keydown');
    } else if (e.code == 'CapsLock') {
        capslock.classList.add('keydown');
    } else if (e.code == 'Space') {
        e.preventDefault();
        space.classList.add('keydown');
        result.value += ' ';
    } else if (e.code == 'Tab') {
        e.preventDefault();
        tab.classList.add('keydown');
        result.value += '\t';
    }
})

for (let specialKey of specialKeys) {
    document.addEventListener('keyup', function() {
        specialKey.classList.remove('keydown');
    })
}

keyboard.addEventListener('mousedown', (event) => {
    event.target.classList.add('keydown');
    if (event.target.value == 'Tab') {
        result.value += '\t';
    } else if (event.target.id == 'space') {
        result.value += ' ';
    };
});


keyboard.addEventListener('mouseup', (event) => {
    event.target.classList.remove('keydown');
});

keyboard.addEventListener('mouseout', (event) => {
    event.target.classList.add('mouseout');
});


for (let key of keys) {
    key.addEventListener('click', keyValue);
    capslock.addEventListener('click', register);
    
    let flag = 0;

    for (let elem of shift) {
        elem.addEventListener('click', func);
        function func() {
            register();
            let flag2 = 0;
            for (let key of keys) {
                 key.addEventListener('click', func2);
                 function func2() {
                    if (flag2 == 0) {
                        register();
                        flag2++;
                    } 
                } 
            }
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key == key.value) {
            key.classList.add('keydown');
            keyValue();
        } else if (event.key == 'CapsLock') {
            registerLetters();
        } else if (event.key == 'Shift' && flag == 0) {
            register();
            flag++;
        } 
    })

    
    document.addEventListener('keyup', function(event) {
        if (event.key == key.value) {
            key.classList.remove('keydown');
        }   else if (event.key == 'Shift') {
            register();
            flag--;
        }
    })


    // ???????????? ?? ?????????????????? ????????
    function keyValue() {
        result.value += key.value;
    }

    // Caps Lock, Shift
    function register() {
        registerLetters();
        registerDigits();
    }

    function registerLetters() {
        if (key.value == key.value.toLowerCase()) {
            key.value = key.value.toUpperCase();
        } else {
            key.value = key.value.toLowerCase();
        };
    }

    function registerDigits() {
        if (key.value == '1') {
            key.value = '!';
        } else if (key.value == '!') {
            key.value = '1';
        };

        if (key.value == '2') {
            key.value = '@';
        } else if (key.value == '@') {
            key.value = '2';
        };

        if (key.value == '3') {
            key.value = '#';
        } else if (key.value == '#') {
            key.value = '3';
        };

        if (key.value == '4') {
            key.value = '$';
        } else if (key.value == '$') {
            key.value = '4';
        };

        if (key.value == '5') {
            key.value = '%';
        } else if (key.value == '%') {
            key.value = '5';
        };

        if (key.value == '6') {
            key.value = '^';
        } else if (key.value == '^') {
            key.value = '6';
        };

        if (key.value == '7') {
            key.value = '&';
        } else if (key.value == '&') {
            key.value = '7';
        };

        if (key.value == '8') {
            key.value = '*';
        } else if (key.value == '*') {
            key.value = '8';
        };

        if (key.value == '9') {
            key.value = '(';
        } else if (key.value == '(') {
            key.value = '9';
        };

        if (key.value == '0') {
            key.value = ')';
        } else if (key.value == ')') {
            key.value = '0';
        };


       //Register symbols
        if (key.value == '`') {
            key.value = '~';
        } else if (key.value == '~') {
            key.value = '`';
        };

        if (key.value == '-') {
            key.value = '_';
        } else if (key.value == '_') {
            key.value = '-';
        };

        if (key.value == '=') {
            key.value = '+';
        } else if (key.value == '+') {
            key.value = '=';
        };

        if (key.value == '[') {
            key.value = '{';
        } else if (key.value == '{') {
            key.value = '[';
        };

        if (key.value == ']') {
            key.value = '}';
        } else if (key.value == '}') {
            key.value = ']';
        };

        if (key.value == ';') {
            key.value = ':';
        } else if (key.value == ':') {
            key.value = ';';
        };

        if (key.value == "'") {
            key.value = '"';
        } else if (key.value == '"') {
            key.value = "'";
        };

        if (key.value == ',') {
            key.value = '<';
        } else if (key.value == '<') {
            key.value = ',';
        };

        if (key.value == '.') {
            key.value = '>';
        } else if (key.value == '>') {
            key.value = '.';
        };

        if (key.value == '/') {
            key.value = '?';
        } else if (key.value == '?') {
            key.value = '/';
        };
    }
}

clear.addEventListener('click', function() {
    result.value = '';
})
