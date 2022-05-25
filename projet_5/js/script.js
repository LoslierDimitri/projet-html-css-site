function test() {
    document.getElementById('demo').innerHTML = Date();
}

let table = [];
let table_size = 9;
/*
0: none
1: cross
2: round
*/

let img_cross = "<img src='../source/image/cross.png' width='100px' alt=''>";
let img_round = "<img src='../source/image/round.png' width='100px' alt=''>";
let img_square = "<img src='../source/image/square.png' width='100px' alt=''>";

let number_play_ai = 4;
let actual_play_ai = 0;

let player_win = 0;

function random(max) {
    return Math.floor(Math.random() * max);
}

function init() {
    for (let i = 0; i < table_size; i++) {
        table[i] = 0;
    }
    actual_play_ai = 0;
    player_win = 0;
    return_table();
    result_text();
}

function add(index, player) {
    if (player_win == 0) {
        add_index(index, player)
        test_table(1);
    }
    if (player_win == 0) {
        ai_play();
        test_table(2);
    }
    return_table();
    result_text();
}

function add_index(index, player) {
    if (table[index] == 0) {
        table[index] = player;
    }
}

function display_table(index) {
    if (table[index] == 0) {
        return img_square;
    }
    if (table[index] == 1) {
        return img_cross;
    }
    if (table[index] == 2) {
        return img_round;
    }
}

function ai_play() {
    if (actual_play_ai < number_play_ai) {
        if (actual_play_ai == 0) {
            ai_play_normal();
        } else {
            ai_play_smart();
        }
        actual_play_ai += 1;
    }
}

function ai_play_normal() {
    let target = -1;
    let next_target = 0;

    while (target == -1) {
        next_target = random(9);
        if (table[next_target] == 0) {
            target = next_target;
            add_index(target, 2);
        }
    }
}

function ai_play_smart() {
    let can_play_smart = false;

    if (table[0] == 1 && table[1] == 1 && table[2] == 0) {
        add_index(2, 2);
        can_play_smart = true;
    } else if (table[1] == 1 && table[2] == 1 && table[0] == 0) {
        add_index(0, 2);
        can_play_smart = true;
    } else if (table[3] == 1 && table[4] == 1 && table[5] == 0) {
        add_index(5, 2);
        can_play_smart = true;
    } else if (table[4] == 1 && table[5] == 1 && table[3] == 0) {
        add_index(3, 2);
        can_play_smart = true;
    } else if (table[6] == 1 && table[7] == 1 && table[8] == 0) {
        add_index(8, 2);
        can_play_smart = true;
    } else if (table[7] == 1 && table[8] == 1 && table[6] == 0) {
        add_index(6, 2);
        can_play_smart = true;
    } else if (table[0] == 1 && table[3] == 1 && table[6] == 0) {
        add_index(6, 2);
        can_play_smart = true;
    } else if (table[3] == 1 && table[6] == 1 && table[0] == 0) {
        add_index(0, 2);
        can_play_smart = true;
    } else if (table[1] == 1 && table[4] == 1 && table[7] == 0) {
        add_index(7, 2);
        can_play_smart = true;
    } else if (table[4] == 1 && table[7] == 1 && table[1] == 0) {
        add_index(1, 2);
        can_play_smart = true;
    } else if (table[2] == 1 && table[5] == 1 && table[8] == 0) {
        add_index(8, 2);
        can_play_smart = true;
    } else if (table[5] == 1 && table[8] == 1 && table[2] == 0) {
        add_index(2, 2);
        can_play_smart = true;
    } else if (table[0] == 1 && table[4] == 1 && table[8] == 0) {
        add_index(8, 2);
        can_play_smart = true;
    } else if (table[4] == 1 && table[8] == 1 && table[0] == 0) {
        add_index(0, 2);
        can_play_smart = true;
    } else if (table[2] == 1 && table[4] == 1 && table[6] == 0) {
        add_index(6, 2);
        can_play_smart = true;
    } else if (table[4] == 1 && table[6] == 1 && table[2] == 0) {
        add_index(2, 2);
        can_play_smart = true;
    }
    if (can_play_smart == false) {
        ai_play_normal();
    }
}

function test_table(player) {
    if (
        (table[0] == player && table[1] == player && table[2] == player) ||
        (table[3] == player && table[4] == player && table[5] == player) ||
        (table[6] == player && table[7] == player && table[8] == player) ||
        (table[0] == player && table[3] == player && table[6] == player) ||
        (table[1] == player && table[4] == player && table[7] == player) ||
        (table[2] == player && table[5] == player && table[8] == player) ||
        (table[0] == player && table[4] == player && table[8] == player) ||
        (table[2] == player && table[4] == player && table[6] == player)
    ) {
        player_win = player;
    }
}

function return_table() {
    let result = "";

    result += "<table>";

    for (let i = 0; i < 3; i++) {
        result += "<tr>";
        for (let j = 0; j < 3; j++) {
            result += "<td>";
            result += "<button type='button' onclick='add(" + ((i * 3) + j) + ", 1)'>";
            result += display_table((i * 3) + j);
            result += "</button>";
            result += "</td>";
        }
        result += "</tr>";
    }

    result += "</table>";

    document.getElementById('table').innerHTML = result;
}

function result_text() {
    let result_text = "";

    if (player_win == 1 || player_win == 2) {
        result_text += "player " + player_win + " win";
    }

    document.getElementById('result_text').innerHTML = result_text;
}